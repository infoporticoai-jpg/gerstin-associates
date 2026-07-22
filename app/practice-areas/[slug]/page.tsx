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

      {/* Overview + services */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Overview</p>
            <div className="prose-legal mt-5 max-w-xl text-[1.05rem]">
              {pa.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
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
          </div>

          {/* Sidebar: who we help + CTA */}
          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="rounded-lg border border-line bg-cream p-7">
              <span className="flex size-11 items-center justify-center rounded-sm bg-paper text-accent-600">
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
        <Section tone="cream">
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
      <Section tone="paper">
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
      <Section tone="cream">
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
