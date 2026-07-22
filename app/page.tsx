import Link from "next/link";
import { ArrowRight, Phone, MapPin, BadgeCheck, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ArticleCard } from "@/components/cards";
import { PracticeScroll } from "@/components/practice-scroll";
import { AttorneyFeature } from "@/components/attorney-feature";
import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";
import {
  practiceAreas,
  attorneys,
  articles,
  firmStats,
  whyChoose,
} from "@/lib/content";
import { firm, fullAddress } from "@/lib/firm";
import { heroImage } from "@/lib/images";

const joshua = attorneys.find((a) => a.slug === "joshua-gerstin") ?? attorneys[0];

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO (waterfront background) */}
      <section className="relative overflow-hidden bg-navy text-white">
        <SmartImage
          src={heroImage}
          alt="South Florida waterfront"
          priority
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20" />
        <div className="container-wide relative py-28 md:py-36 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow" style={{ color: "var(--brand-accent)" }}>
              Boca Raton · Attorneys &amp; Counselors at Law
            </p>
            <h1 className="mt-6 font-serif text-[length:var(--text-display)] leading-[1.05] text-white text-balance">
              We know the law.
              <br />
              We know business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              To compete and grow, businesses and community associations need
              definitive answers and solutions that are cost-effectively delivered
              and easy to understand. For over two decades, Gerstin &amp;
              Associates has provided exactly that — premier legal counsel in plain
              English across South Florida.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="accent" size="lg">
                Free Consultation
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/practice-areas" variant="outline-light" size="lg">
                Explore Practice Areas
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-accent" />
                Board Certified
              </span>
              <span className="hidden text-white/25 sm:inline">·</span>
              <span>20+ years&rsquo; experience</span>
              <span className="hidden text-white/25 sm:inline">·</span>
              <span>Palm Beach · Broward · Miami-Dade</span>
              <span className="hidden text-white/25 sm:inline">·</span>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-accent" />
                {firm.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — TRUST STRIP */}
      <div className="border-y border-line bg-paper">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-center text-sm text-muted">
          <span className="font-medium text-navy">Trusted across South Florida</span>
          <span className="hidden text-line md:inline">·</span>
          <span>20+ years of litigation experience</span>
          <span className="hidden text-line md:inline">·</span>
          <span>Board-certified expertise</span>
          <span className="hidden text-line md:inline">·</span>
          <span>Plain-English counsel</span>
          <span className="hidden text-line md:inline">·</span>
          <span>Palm Beach · Broward · Miami-Dade</span>
        </div>
      </div>

      {/* 3 — PRACTICE AREAS (sticky-rail: pinned left, scrolling list) */}
      <Section tone="paper">
        <PracticeScroll items={practiceAreas} />
      </Section>

      {/* 4 — WHY GERSTIN (editorial founder story, dark) */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        {/* Oversized graphic accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-24 select-none font-serif text-[20rem] leading-none text-white/[0.03] md:text-[26rem]"
        >
          &amp;
        </span>

        <div className="container-wide relative">
          {/* Asymmetric header */}
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow" style={{ color: "var(--brand-accent)" }}>
                Why Gerstin &amp; Associates
              </p>
              <h2 className="mt-5 font-serif text-[length:var(--text-h2)] leading-[1.08] text-white text-balance">
                Focused by design.
                <br className="hidden sm:block" /> Trusted by results.
              </h2>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5 lg:pb-2">
              <p className="leading-relaxed text-white/60">
                For over two decades, businesses, investors, and community
                associations across South Florida have trusted us with what matters
                most — and stayed with us for the long run.
              </p>
            </Reveal>
          </div>

          {/* Layered composition */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Founder portrait */}
            <Reveal className="lg:col-span-5">
              <div className="relative h-full min-h-[440px] overflow-hidden rounded-2xl bg-navy-700">
                <SmartImage
                  src={joshua.image ?? ""}
                  alt="Joshua Gerstin, Founding Attorney"
                  objectPosition="50% 20%"
                  className="absolute inset-0 size-full object-cover"
                  fallback={
                    <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy">
                      <span className="font-serif text-7xl text-white/15">JG</span>
                    </div>
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    <BadgeCheck className="size-3.5 text-accent" />
                    Florida Bar Board Certified
                  </span>
                  <p className="mt-3 font-serif text-xl text-white">
                    Joshua Gerstin, Esq.
                  </p>
                  <p className="text-sm text-white/60">Founding Attorney</p>
                </div>
              </div>
            </Reveal>

            {/* Right column: quote → stats → differentiators */}
            <div className="lg:col-span-7">
              <Reveal>
                <Quote className="size-9 text-accent/50" aria-hidden />
                <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-white md:text-[1.7rem] md:leading-relaxed">
                  We deliver the advice, insight, and performance you get only at a
                  firm that focuses on its strength — not its size.
                </blockquote>
                <p className="mt-4 text-sm text-white/50">
                  The principle the firm was built on.
                </p>
              </Reveal>

              {/* Trust stats */}
              <Reveal delay={60}>
                <div className="mt-10 grid grid-cols-2 gap-y-6 border-y border-white/10 py-7 sm:grid-cols-4">
                  {firmStats.map((s, i) => (
                    <div
                      key={s.label}
                      className={cn(
                        "sm:px-6",
                        i > 0 && "sm:border-l sm:border-white/10",
                      )}
                    >
                      <div className="font-serif text-3xl text-accent">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-xs leading-snug text-white/55">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Differentiators */}
              <div className="mt-9 grid gap-8 sm:grid-cols-3">
                {whyChoose.slice(0, 3).map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <Icon name={item.icon} size={24} className="text-accent" />
                    <h3 className="mt-4 font-serif text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — ATTORNEYS (large alternating profiles) */}
      <Section tone="paper">
        <SectionHeader
          align="left"
          eyebrow="Our Attorneys"
          title="Experienced counsel you work with directly"
          intro="You work directly with attorneys who understand both the law and the realities of running a business."
        />
        <div className="mt-16 space-y-20 md:space-y-24">
          {attorneys.map((a, i) => (
            <AttorneyFeature key={a.slug} attorney={a} index={i} />
          ))}
        </div>
      </Section>

      {/* 7 — INSIGHTS */}
      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Insights"
            title="Guidance from our attorneys"
            intro="Practical perspective on the legal questions facing businesses, property owners, and associations in Florida."
          />
          <ButtonLink href="/blog" variant="ghost" className="shrink-0">
            All insights
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article, i) => (
            <Reveal key={article.href} delay={i * 80}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8 — CONTACT CTA */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-wide relative grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Free consultation</p>
            <h2 className="mt-5 font-serif text-[length:var(--text-h2)] leading-tight text-white text-balance">
              Put your mind at ease. Let&rsquo;s talk.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              Tell us about your matter and we&rsquo;ll respond promptly. Your
              consultation is confidential and there is no obligation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="accent" size="lg">
                Request a Free Consultation
              </ButtonLink>
              <a
                href={firm.phoneHref}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-white/30 px-8 text-base text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" />
                {firm.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8">
              <h3 className="font-serif text-xl text-white">Our office</h3>
              <p className="mt-4 flex items-start gap-3 text-white/75">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" />
                <span className="leading-relaxed">{fullAddress()}</span>
              </p>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-white/70">
                {firm.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <span className="text-white/85">{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white"
              >
                Get directions &amp; contact details
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
