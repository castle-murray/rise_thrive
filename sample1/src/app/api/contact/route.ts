import { NextResponse } from "next/server";

type Payload = {
  kind?: string;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const record = {
    kind: body.kind ?? "contact",
    name,
    email,
    phone: String(body.phone ?? "").trim(),
    subject: String(body.subject ?? "").trim(),
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Rise & Thrive <noreply@riseandthrive.example>";

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[${record.kind}] ${record.subject || "Website inquiry"} — ${name}`,
        text: [
          `Kind: ${record.kind}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${record.phone}`,
          `Subject: ${record.subject}`,
          "",
          message,
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", detail);
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }
  } else {
    console.info("[contact:dev]", record);
  }

  return NextResponse.json({ ok: true });
}
