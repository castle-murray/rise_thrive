import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: {
    amount?: number;
    name?: string;
    email?: string;
    monthly?: boolean;
    dedication?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const amount = Number(body.amount);
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !email || !Number.isFinite(amount) || amount < 1) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const intent = {
    amount,
    name,
    email,
    monthly: Boolean(body.monthly),
    dedication: String(body.dedication ?? "").trim(),
    receivedAt: new Date().toISOString(),
    processor: process.env.STRIPE_SECRET_KEY ? "stripe-pending" : "logged-only",
  };

  // Payment processing lands here later. Keys stay in .env.
  console.info("[donate:intent]", intent);

  return NextResponse.json({ ok: true, processor: intent.processor });
}
