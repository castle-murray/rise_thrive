"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState, type FormEvent } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const startedAt = useRef<number>(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
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
          company: data.get("company"),
          startedAt: startedAt.current || undefined,
        }),
      });
      if (!res.ok) {
        let msg = "Something did not send. Please try again, or call us.";
        if (res.status === 429) {
          msg = "You have sent several messages in a short time. Please wait a few minutes and try again, or call us.";
        } else if (res.status === 400) {
          const j = (await res.json().catch(() => null)) as { error?: string } | null;
          msg = `Please check the form and try again${j?.error ? `: ${j.error}` : "."}`;
        }
        setStatus("error");
        setError(msg);
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something did not send. Please try again, or call us.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-gold/40 bg-champagne p-8 text-center">
        <p className="font-display text-2xl text-emerald">Thank you. We will be in touch.</p>
      </div>
    );
  }

  const field =
    "w-full border border-emerald/15 bg-ivory px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="font-display text-2xl text-emerald">Write to us</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Name</span>
          <input className={field} name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Email</span>
          <input className={field} name="email" type="email" required autoComplete="email" maxLength={254} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Phone</span>
          <input className={field} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Subject</span>
          <select className={field} name="subject" defaultValue="General question">
            <option>General question</option>
            <option>Referral / placement</option>
            <option>Family inquiry</option>
            <option>Agency partnership</option>
            <option>Visit request</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Message</span>
        <textarea className={cn(field, "min-h-36 resize-y")} name="message" required maxLength={5000} />
      </label>
      <div className="hidden" aria-hidden>
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
