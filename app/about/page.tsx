import type { Metadata } from "next";
import { MapPin, Mail, Phone, Printer } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { AttorneyRow } from "@/components/cards";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { SmartImage } from "@/components/smart-image";
import { attorneys, whyChoose } from "@/lib/content";
import { firm, fullAddress } from "@/lib/firm";
import { heroImage, aboutImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Our Law Firm",
  description:
    "Learn more about Gerstin & Associates. We know the law and we know business — delivering quick, efficient responses in plain English to businesses and community associations across South Florida.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="We know the law and we know business"
        intro="A Boca Raton firm built to deliver definitive answers and practical solutions — cost-effectively delivered and easy to understand."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={heroImage}
        imageAlt="South Florida waterfront"
      />

      {/* About Our Law Firm */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">About the firm</p>
            <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-tight text-navy">
              About Our Law Firm
            </h2>
            <div className="prose-legal mt-6 text-[1.05rem]">
              <p>
                To compete and grow in today&rsquo;s environment, businesses and
                community associations need definitive answers and solutions that
                are cost effectively delivered and easy to understand. Gerstin &amp;
                Associates delivers the kind of advice, insight and performance you
                can get only at a law firm that focuses on its strength, not its
                size. Each attorney at Gerstin &amp; Associates is trained to focus
                on results and to deliver quick and efficient responses to your legal
                issues, not expensive legal theories and propositions.
              </p>
              <p>
                Whether you are a community association, non-profit business or a
                large corporation with shareholders, we know the law and we know
                business, we understand the value in delivering quick and efficient
                responses in &ldquo;plain English&rdquo;. Our goal is to keep our
                clients Out in Front of their competition by providing premier
                quality legal counsel to our Palm Beach, Broward and Miami-Dade
                clients.
              </p>
            </div>
            <p className="mt-7 font-serif text-xl leading-snug text-navy">
              Put your mind at ease by contacting us now for a free consultation.
            </p>
            <ButtonLink href="/contact" variant="accent" className="mt-5">
              Free Consultation
            </ButtonLink>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy">
              <SmartImage
                src={aboutImage}
                alt="Gerstin & Associates"
                className="absolute inset-0 size-full object-cover"
                fallback={
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy to-navy-700">
                    <Icon name="Landmark" size={64} className="text-white/15" />
                  </div>
                }
              />
            </div>

            {/* Contact block */}
            <div className="mt-5 rounded-xl border border-line bg-cream p-7">
              <h3 className="font-serif text-lg text-navy">{firm.name}</h3>
              <ul className="mt-4 space-y-3 text-[0.95rem]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-ink/85">{fullAddress()}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-accent" />
                  <a
                    href={`mailto:${firm.email}`}
                    className="text-ink/85 hover:text-accent-600"
                  >
                    {firm.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-accent" />
                  <a
                    href={firm.phoneHref}
                    className="text-ink/85 hover:text-accent-600"
                  >
                    {firm.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer className="size-4 shrink-0 text-accent" />
                  <span className="text-ink/85">{firm.fax} (fax)</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values / how we work */}
      <Section tone="cream">
        <SectionHeader
          eyebrow="How we work"
          title="The principles behind our counsel"
          intro="Every engagement reflects the same commitments — the reasons clients return to us across matters and years."
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 70}>
              <div className="border-t-2 border-accent/70 pt-5">
                <div className="flex items-center gap-3">
                  <Icon name={v.icon} size={24} className="text-accent" />
                  <h3 className="font-serif text-lg text-navy">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Attorneys */}
      <Section tone="paper">
        <SectionHeader
          align="left"
          eyebrow="Our attorneys"
          title="The people you'll work with"
        />
        <div className="mt-12 grid gap-5 lg:max-w-3xl">
          {attorneys.map((a) => (
            <AttorneyRow key={a.slug} attorney={a} />
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Serving businesses & associations across South Florida`}
        sub={`${firm.serviceAreas.join(" · ")} — request a free, confidential consultation today.`}
      />
    </>
  );
}
