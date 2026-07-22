import Link from "next/link";
import { ArrowRight, Phone, MapPin, BadgeCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ArticleCard } from "@/components/cards";
import { PracticeScroll } from "@/components/practice-scroll";
import { AttorneyFeature } from "@/components/attorney-feature";
import {
  practiceAreas,
  attorneys,
  articles,
  firmStats,
  firmDifference,
  whyChoose,
} from "@/lib/content";
import { firm, fullAddress } from "@/lib/firm";

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--brand-navy) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div className="container-wide relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow">Boca Raton · Attorneys &amp; Counselors at Law</p>
              <h1 className="mt-6 font-serif text-[length:var(--text-display)] leading-[1.05] text-navy text-balance">
                We know the law.
                <br />
                We know business.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                To compete and grow, businesses and community associations need
                definitive answers and solutions that are cost-effectively
                delivered and easy to understand. For over two decades, Gerstin
                &amp; Associates has provided exactly that — premier legal counsel
                in plain English across South Florida.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="accent" size="lg">
                  Free Consultation
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/practice-areas" variant="outline" size="lg">
                  Explore Practice Areas
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <a
                  href={firm.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-navy"
                >
                  <Phone className="size-4 text-accent" />
                  {firm.phone}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-accent" />
                  {firm.address.city}, {firm.address.state}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Credential panel */}
          <Reveal delay={120}>
            <div className="relative rounded-lg bg-navy p-8 text-white shadow-[0_40px_80px_-40px_rgba(12,35,64,0.65)] md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                <BadgeCheck className="size-4 text-accent" />
                Florida Bar Board Certified
              </span>
              <p className="mt-5 font-serif text-2xl leading-snug text-white">
                Board Certified in Condominium &amp; Planned Development Law
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Recognition of the highest level of expertise The Florida Bar
                awards — the depth behind every matter we handle.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-white/10">
                {firmStats.map((s) => (
                  <div key={s.label} className="bg-navy p-5">
                    <div className="font-serif text-3xl text-accent">{s.value}</div>
                    <div className="mt-1.5 text-xs leading-snug text-white/55">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
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

      {/* 4 — WHY CHOOSE (borderless icon + text rows) */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeader
            align="left"
            eyebrow="Why Gerstin & Associates"
            title="The advice of a firm that focuses on its strength, not its size"
            intro="Our clients stay with us because we combine deep legal experience with genuine understanding of their goals — and deliver results, not expensive legal theories."
            className="lg:sticky lg:top-28"
          />
          <div className="border-t border-line/70">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 60}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-line/70 py-6">
                  <Icon
                    name={item.icon}
                    size={26}
                    className="mt-1 text-accent"
                  />
                  <div>
                    <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

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

      {/* 6 — THE FIRM'S DIFFERENCE (column-divided, no boxes) */}
      <Section tone="navy">
        <SectionHeader
          align="left"
          eyebrow="Why clients choose us"
          title="What sets the firm apart"
          intro="Real, tangible advantages our clients rely on — not slogans."
          invert
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {firmDifference.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 4) * 70}
              className="lg:border-l lg:border-white/12 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <Icon name={d.icon} size={28} className="text-accent" />
              <h3 className="mt-5 font-serif text-lg text-white">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{d.body}</p>
            </Reveal>
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
        <div className="container-wide grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
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
