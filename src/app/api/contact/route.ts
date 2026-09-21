import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
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
    phone: String(body.phone ?? "").trim(),
    subject: String(body.subject ?? "").trim(),
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
      subject: `[Website] ${record.subject || "Inquiry"} — ${name}`,
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
