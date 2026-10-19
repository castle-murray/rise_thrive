import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Abuse protection -------------------------------------------------------
// NOTE: the rate limiter is in-memory and per-process. nginx limit_req on
// /api/contact is the second (shared) layer.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MIN_FILL_MS = 3000;
const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  subject: 120,
  message: 5000,
  company: 200,
} as const;

const hits = new Map<string, number[]>();

function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  const first = xff?.split(",")[0]?.trim();
  return first || request.headers.get("x-real-ip")?.trim() || "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many messages from your connection. Please wait a few minutes and try again, or call us.",
      },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v : v == null ? "" : String(v)).trim();
  const fields = {
    name: str(body.name),
    email: str(body.email),
    phone: str(body.phone),
    subject: str(body.subject),
    message: str(body.message),
    company: str(body.company),
  };

  for (const [key, max] of Object.entries(LIMITS)) {
    if (fields[key as keyof typeof fields].length > max) {
      return NextResponse.json(
        { ok: false, error: `The ${key} field is too long (max ${max} characters).` },
        { status: 400 },
      );
    }
  }

  // Honeypot: pretend success, send nothing.
  if (fields.company) {
    return NextResponse.json({ ok: true });
  }

  // Time-trap: form render timestamp (ms). Too-fast submissions look like bots.
  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = fields;
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Basic email shape check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const record = {
    name,
    email,
    phone: fields.phone,
    subject: fields.subject,
    message,
    receivedAt: new Date().toISOString(),
  };

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@riseandthrivegh.info";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Rise & Thrive <hello@riseandthrivegh.info>";
  const user = process.env.SMTP_USER ?? "hello@riseandthrivegh.info";
  const pass = process.env.GMAIL_APP_PASSWORD ?? process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  if (!pass) {
    console.info("[contact:no-smtp]", { to, from, name, email });
    return NextResponse.json(
      { ok: false, error: "Mail not configured" },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${(record.subject || "Inquiry").replace(/[\r\n]+/g, " ")} — ${name.replace(/[\r\n]+/g, " ")}`,
      text: Object.entries(record)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
    });
  } catch (err) {
    console.error("SMTP delivery failed", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
