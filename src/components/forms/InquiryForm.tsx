"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";

export type InquiryKind = "contact" | "referral" | "volunteer";

const copy: Record<
  InquiryKind,
  { title: string; submit: string; success: string; subjects: string[] }
> = {
  contact: {
    title: "Write to us",
    submit: "Send message",
    success: "Thank you. We'll be in touch soon.",
    subjects: ["General question", "Visit request", "Media", "Something else"],
  },
  referral: {
    title: "Start a referral",
    submit: "Submit referral",
    success: "We received your referral request. A team member will follow up.",
    subjects: [
      "Youth in need of placement",
      "Case worker referral",
      "Family inquiry",
      "Emergency / crisis",
    ],
  },
  volunteer: {
    title: "Volunteer with us",
    submit: "Offer my time",
    success: "We're grateful. We'll reach out about next steps.",
    subjects: [
      "Mentoring",
      "Meals & kitchen",
      "House & garden",
      "Education support",
      "Professional skills",
    ],
  },
};

export function InquiryForm({ kind = "contact" }: { kind?: InquiryKind }) {
  const meta = copy[kind];
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company") || "").trim()) {
      setStatus("ok");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something didn't send. Please try again, or call us.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-forest/15 bg-paper p-8 text-center">
        <p className="font-display text-2xl text-forest">{meta.success}</p>
        <p className="mt-2 text-muted">You can close this page, or keep looking around.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-forest/15 bg-paper px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="font-display text-2xl text-forest">{meta.title}</p>
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
          <span className="mb-1.5 block text-muted">
            {kind === "volunteer" ? "How you'd like to help" : "Subject"}
          </span>
          <select className={field} name="subject" defaultValue={meta.subjects[0]}>
            {meta.subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
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
        <p className="text-sm text-terracotta" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? "Sending…" : meta.submit}
      </Button>
    </form>
  );
}
