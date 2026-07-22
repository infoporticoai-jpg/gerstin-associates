import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { firm, addressLines } from "@/lib/firm";
import { practiceAreas } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const year = 2026;
  const lines = addressLines();

  return (
    <footer className="bg-navy text-white/70">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + address */}
          <div>
            <Logo invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {firm.description}
            </p>
            <address className="mt-6 not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </div>
              <a
                href={firm.phoneHref}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="size-4 shrink-0 text-accent" />
                {firm.phone}
              </a>
              <a
                href={`mailto:${firm.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="size-4 shrink-0 text-accent" />
                {firm.email}
              </a>
            </address>
          </div>

          {/* Practice areas */}
          <FooterCol title="Practice Areas">
            {practiceAreas.map((pa) => (
              <FooterLink key={pa.slug} href={`/practice-areas/${pa.slug}`}>
                {pa.title}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Firm */}
          <FooterCol title="Firm">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/attorneys">Attorneys</FooterLink>
            <FooterLink href="/blog">Insights</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          {/* Hours */}
          <FooterCol title="Office Hours">
            <div className="space-y-2 text-sm">
              {firm.hours.map((h) => (
                <div key={h.days} className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    <span className="block text-white/85">{h.days}</span>
                    <span className="text-white/55">{h.time}</span>
                  </span>
                </div>
              ))}
            </div>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[0.72rem] leading-relaxed text-white/35">
          The information on this website is for general informational purposes only
          and does not constitute legal advice. Contacting the firm does not create
          an attorney-client relationship. Please do not send confidential
          information until such a relationship has been established.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-serif text-base text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/60 transition-colors hover:text-white w-fit"
    >
      {children}
    </Link>
  );
}
