import type { Metadata } from "next";
import { MapPin, Phone, Printer, Mail, Clock, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import {
  firm,
  fullAddress,
  addressLines,
  mapsDirectionsUrl,
  mapsEmbedUrl,
} from "@/lib/firm";
import { officeImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Gerstin & Associates in Boca Raton. Call ${firm.phone} or request a free consultation. Office at ${fullAddress()}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const lines = addressLines();
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a free consultation"
        intro="Tell us about your matter and we'll respond promptly. Your consultation is confidential and there is no obligation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={officeImage}
        imageAlt="Gerstin & Associates office in Boca Raton"
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl text-navy">Send us a message</h2>
            <p className="mt-2 text-muted">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Office details */}
          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-cream p-7">
              <h3 className="font-serif text-xl text-navy">Our office</h3>
              <ul className="mt-5 space-y-4 text-[0.95rem]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-ink/85">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-accent" />
                  <a href={firm.phoneHref} className="text-ink/85 hover:text-accent-600">
                    {firm.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer className="size-5 shrink-0 text-accent" />
                  <span className="text-ink/85">{firm.fax} (fax)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-accent" />
                  <a
                    href={`mailto:${firm.email}`}
                    className="text-ink/85 hover:text-accent-600"
                  >
                    {firm.email}
                  </a>
                </li>
              </ul>
              <a
                href={mapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-600 link-underline"
              >
                Get directions <ExternalLink className="size-3.5" />
              </a>
            </div>

            <div className="rounded-lg border border-line bg-cream p-7">
              <h3 className="flex items-center gap-2 font-serif text-xl text-navy">
                <Clock className="size-5 text-accent" />
                Office hours
              </h3>
              <ul className="mt-4 space-y-2 text-[0.95rem]">
                {firm.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 text-ink/85">
                    <span>{h.days}</span>
                    <span className="text-muted">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Map */}
      <section aria-label="Office location map" className="h-[420px] w-full">
        <iframe
          title={`Map to ${firm.name}`}
          src={mapsEmbedUrl()}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
