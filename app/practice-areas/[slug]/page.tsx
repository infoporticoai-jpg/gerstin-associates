import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { FaqSection } from "@/components/faq-section";
import { CtaBand } from "@/components/cta-band";
import { AttorneyRow, ArticleCard } from "@/components/cards";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import { Reveal } from "@/components/reveal";
import {
  practiceAreas,
  internalPracticeAreas,
  attorneys,
  articles,
} from "@/lib/content";
import { firm } from "@/lib/firm";

export function generateStaticParams() {
  return internalPracticeAreas.map((p) => ({ slug: p.slug }));
}

function getArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug && !p.external);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pa = getArea(slug);
  if (!pa) return {};
  return {
    title: pa.title,
    description: pa.summary,
    alternates: { canonical: `/practice-areas/${pa.slug}` },
    openGraph: { title: `${pa.title} | ${firm.name}`, description: pa.summary },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pa = getArea(slug);
  if (!pa) notFound();

  const related = articles
    .filter((a) => a.category.toLowerCase().includes(pa.title.split(" ")[0].toLowerCase()))
    .slice(0, 3);
  const relatedFinal = related.length ? related : articles.slice(0, 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${pa.title} — ${firm.name}`,
    description: pa.summary,
    url: `${firm.url}/practice-areas/${pa.slug}`,
    areaServed: firm.serviceAreas,
    provider: { "@type": "LegalService", name: firm.legalName },
  };

  return (
    <>
      <PageHeader
        eyebrow="Practice Area"
        title={pa.title}
        intro={pa.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: pa.title },
        ]}
      />

      {/* Overview — image + text split */}
      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-[0_40px_80px_-40px_rgba(12,35,64,0.5)]">
              <SmartImage
                src={pa.image ?? ""}
                alt={pa.title}
                className="absolute inset-0 size-full object-cover"
                fallback={
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy to-navy-700">
                    <Icon name={pa.icon} size={72} className="text-white/15" />
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Overview</p>
            <div className="prose-legal mt-5 max-w-xl text-[1.05rem]">
              {pa.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services + who we help */}
      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-2xl text-navy">How we help</h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {pa.services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar: who we help + CTA */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-line bg-paper p-7">
              <span className="flex size-11 items-center justify-center rounded-sm bg-cream text-accent-600">
                <Icon name={pa.icon} size={22} />
              </span>
              <h3 className="mt-5 font-serif text-lg text-navy">Who we help</h3>
              <ul className="mt-4 space-y-2.5">
                {pa.whoWeHelp.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-muted">
                    <Users className="mt-0.5 size-4 shrink-0 text-accent" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-navy p-7 text-white">
              <h3 className="font-serif text-lg">Discuss your matter</h3>
              <p className="mt-2 text-sm text-white/70">
                Speak with an attorney about your {pa.title.toLowerCase()} matter — free
                and confidential.
              </p>
              <ButtonLink href="/contact" variant="accent" className="mt-5 w-full">
                Request a Consultation
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      {pa.faqs.length ? (
        <Section tone="paper">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Questions"
              title="Frequently asked questions"
            />
            <div className="mt-8">
              <FaqSection items={pa.faqs} />
            </div>
          </div>
        </Section>
      ) : null}

      {/* Attorneys */}
      <Section tone="cream">
        <SectionHeader
          align="left"
          eyebrow="Your attorneys"
          title="Experienced counsel for your matter"
        />
        <div className="mt-12 grid gap-5 lg:max-w-3xl">
          {attorneys.map((a) => (
            <AttorneyRow key={a.slug} attorney={a} />
          ))}
        </div>
      </Section>

      {/* Related insights */}
      <Section tone="paper">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader align="left" eyebrow="Insights" title="Related reading" />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600"
          >
            All insights <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {relatedFinal.map((a) => (
            <ArticleCard key={a.href} article={a} />
          ))}
        </div>
      </Section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </>
  );
}
