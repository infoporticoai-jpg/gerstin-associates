"use client";

import * as React from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { internalPracticeAreas } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields.
    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-lg border border-line bg-cream p-10 text-center">
        <CheckCircle2 className="size-12 text-accent" />
        <h3 className="mt-4 font-serif text-2xl text-navy">Thank you</h3>
        <p className="mt-2 max-w-sm text-muted">
          Your message has been received. An attorney will review your inquiry and
          respond promptly. For urgent matters, please call our office directly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" required autoComplete="family-name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-navy">
          How can we help?
        </span>
        <select
          name="matter"
          defaultValue=""
          className="h-11 rounded-sm border border-line bg-paper px-3 text-ink outline-none focus:border-accent"
        >
          <option value="" disabled>
            Select a practice area
          </option>
          {internalPracticeAreas.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-navy">
          Briefly describe your matter <span className="text-accent">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-sm border border-line bg-paper p-3 text-ink outline-none focus:border-accent"
          placeholder="Please do not include highly confidential details until an attorney-client relationship is established."
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-accent-600">
          <AlertCircle className="size-4" />
          Something went wrong. Please try again or call our office.
        </p>
      ) : null}

      <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Request Free Consultation"
        )}
      </Button>
      <p className="text-xs leading-relaxed text-muted">
        Submitting this form does not create an attorney-client relationship.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-navy">
        {label} {required ? <span className="text-accent">*</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-sm border border-line bg-paper px-3 text-ink outline-none focus:border-accent"
      />
    </label>
  );
}
