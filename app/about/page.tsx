import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { AttorneyCard } from "@/components/cards";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { attorneys, whyChoose, firmStats } from "@/lib/content";
import { firm } from "@/lib/firm";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Gerstin & Associates delivers premier legal counsel in plain English to businesses and community associations across South Florida — advice, insight, and performance from a firm that focuses on its strength, not its size.",
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
      />

      {/* Mission */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <div className="prose-legal mt-5 text-[1.1rem]">
              <p>
                To compete and grow in today&rsquo;s environment, businesses and
                community associations need definitive answers and solutions that
                are cost-effectively delivered and easy to understand.
              </p>
              <p>
                Gerstin &amp; Associates delivers the kind of advice, insight, and
                performance you can get only at a law firm that focuses on its
                strength, not its size. Each attorney is trained to focus on results
                and to deliver quick, efficient responses to your legal issues — not
                expensive legal theories and propositions.
              </p>
              <p>
                Our goal is to keep our clients out in front of their competition by
                providing premier-quality legal counsel to our Palm Beach, Broward,
                and Miami-Dade clients — in plain English.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {firmStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-line bg-cream p-6"
                >
                  <div className="font-serif text-3xl text-navy">{s.value}</div>
                  <div className="mt-1.5 text-sm leading-snug text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
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
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 70}>
              <div className="flex h-full flex-col rounded-md border border-line bg-paper p-7">
                <span className="flex size-11 items-center justify-center rounded-sm bg-cream text-accent-600">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 font-serif text-lg text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
          {attorneys.map((a) => (
            <AttorneyCard key={a.slug} attorney={a} />
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
