"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";

const amounts = [25, 50, 100, 250];

export function DonateForm() {
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const dollars =
    amount === "custom" ? Number(custom) : amount;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!dollars || dollars < 1) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: dollars,
          name: data.get("name"),
          email: data.get("email"),
          monthly: data.get("monthly") === "on",
          dedication: data.get("dedication"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-forest/15 bg-paper p-8 text-center">
        <p className="font-display text-2xl text-forest">Thank you for the intention.</p>
        <p className="mt-2 text-muted">
          Payment processing isn&apos;t connected yet. We logged your gift so we can follow up once
          giving is live.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-forest/15 bg-paper px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-forest/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <p className="text-sm text-muted mb-2">Choose an amount</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {amounts.map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setAmount(n)}
              className={cn(
                "h-12 rounded-full border text-sm font-medium transition-all",
                amount === n
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/20 bg-paper text-forest hover:border-forest/50",
              )}
            >
              ${n}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setAmount("custom")}
          className={cn(
            "mt-2 h-12 w-full rounded-full border text-sm font-medium transition-all",
            amount === "custom"
              ? "border-forest bg-forest text-cream"
              : "border-forest/20 bg-paper text-forest",
          )}
        >
          Custom amount
        </button>
        {amount === "custom" && (
          <label className="mt-3 block text-sm">
            <span className="mb-1.5 block text-muted">Dollars</span>
            <input
              className={field}
              inputMode="decimal"
              min={1}
              name="customAmount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              required
            />
          </label>
        )}
      </div>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" name="monthly" className="size-4 accent-forest" />
        Make this a monthly gift
      </label>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Name</span>
          <input className={field} name="name" required autoComplete="name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Email</span>
          <input className={field} name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Dedication (optional)</span>
        <input className={field} name="dedication" placeholder="In honor of…" />
      </label>
      {status === "error" && (
        <p className="text-sm text-terracotta" role="alert">
          We couldn&apos;t record that. Please try again.
        </p>
      )}
      <Button type="submit" variant="terracotta" size="lg" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Saving…" : `Give $${Number.isFinite(dollars) ? dollars : "—"}`}
      </Button>
      <p className="text-xs text-muted leading-relaxed">
        Stripe (or another processor) will live here later. Keys belong in <code>.env</code>. This
        form stores intent only.
      </p>
    </form>
  );
}
