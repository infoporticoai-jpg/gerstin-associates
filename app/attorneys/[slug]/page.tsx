import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Scale,
  BadgeCheck,
  Users,
  Landmark,
  Phone,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/ui/button";
import { attorneys } from "@/lib/content";
import { firm } from "@/lib/firm";

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

function getAttorney(slug: string) {
  return attorneys.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) return {};
  return {
    title: `${a.name} — ${a.title}`,
    description: a.short,
    alternates: { canonical: `/attorneys/${a.slug}` },
    openGraph: { title: `${a.name} | ${firm.name}`, description: a.short },
  };
}

export default async function AttorneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) notFound();

  const initials = a.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((n) => n[0])
    .join("");

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: a.name,
    jobTitle: a.title,
    url: `${firm.url}/attorneys/${a.slug}`,
    worksFor: { "@type": "LegalService", name: firm.legalName, url: firm.url },
    alumniOf: a.education.map((e) => ({ "@type": "EducationalOrganization", name: e })),
    knowsAbout: a.practiceAreas,
  };

  return (
    <>
      <PageHeader
        eyebrow={a.title}
        title={a.name}
        intro={a.boardCertification ?? a.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Attorneys", href: "/attorneys" },
          { label: a.name },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="overflow-hidden rounded-lg border border-line">
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-cream-deep to-cream">
                {a.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.image} alt={a.name} className="size-full object-cover" />
                ) : (
                  <span className="font-serif text-6xl text-navy/15">{initials}</span>
                )}
              </div>
              <div className="border-t border-line p-6">
                <h2 className="font-serif text-xl text-navy">{a.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {a.title}
                </p>
                {a.boardCertification ? (
                  <p className="mt-4 flex items-start gap-2 text-sm text-muted">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    {a.boardCertification}
                  </p>
                ) : null}
                <ButtonLink href="/contact" variant="accent" className="mt-6 w-full">
                  Contact {a.name.split(" ")[0]}
                </ButtonLink>
                <a
                  href={firm.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 text-sm text-navy transition-colors hover:text-accent-600"
                >
                  <Phone className="size-4" />
                  {firm.phone}
                </a>
              </div>
            </div>
          </aside>

          {/* Bio + credentials */}
          <div>
            <h2 className="font-serif text-2xl text-navy">Biography</h2>
            <div className="prose-legal mt-5 text-[1.05rem]">
              {a.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 space-y-10">
              <CredList icon={GraduationCap} title="Education" items={a.education} />
              <CredList icon={Scale} title="Bar Admissions" items={a.barAdmissions} />
              <CredList
                icon={BadgeCheck}
                title="Practice Areas"
                items={a.practiceAreas}
              />
              {a.memberships?.length ? (
                <CredList
                  icon={Users}
                  title="Professional Memberships & Appointments"
                  items={a.memberships}
                />
              ) : null}
              {a.community?.length ? (
                <CredList
                  icon={Landmark}
                  title="Community Involvement"
                  items={a.community}
                />
              ) : null}
            </div>

            <div className="mt-12">
              <Link
                href="/attorneys"
                className="text-sm font-medium text-accent-600 link-underline"
              >
                ← Back to all attorneys
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </>
  );
}

function CredList({
  icon: IconCmp,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2.5 font-serif text-lg text-navy">
        <IconCmp className="size-5 text-accent" aria-hidden />
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 border-l-2 border-line pl-5">
        {items.map((it) => (
          <li key={it} className="text-[0.95rem] leading-relaxed text-ink/85">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
