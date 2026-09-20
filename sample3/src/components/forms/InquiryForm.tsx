"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company") || "").trim()) {
      setStatus("ok");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
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
      <div className="rounded-3xl border border-gold/40 bg-champagne p-8 text-center">
        <p className="font-display text-2xl text-espresso">Thank you. We will be in touch.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-espresso/15 bg-ivory px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="font-display text-2xl text-espresso">Write to us</p>
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
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Phone</span>
          <input className={field} name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Subject</span>
          <select className={field} name="subject" defaultValue="General question">
            <option>General question</option>
            <option>Referral / placement</option>
            <option>Family inquiry</option>
            <option>Agency partnership</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Message</span>
        <textarea className={cn(field, "min-h-36 resize-y")} name="message" required />
      </label>
      <div className="hidden" aria-hidden>
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-800" role="alert">
          Something did not send. Please try again.
        </p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
