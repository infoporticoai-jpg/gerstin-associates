import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import type { PracticeArea } from "@/lib/content";

/**
 * Editorial practice-area list — deliberately NOT a uniform card grid.
 * A subtle vertical timeline rail threads numbered nodes; the flagship
 * practice is given prominence; each row carries scannable metadata tags;
 * and the whole row responds to hover as one premium unit.
 *
 * NOTE: number "nodes" mask the rail with the section background, so this
 * assumes it renders on a paper (white) section.
 */
export function PracticeList({
  items,
  showCta = true,
}: {
  items: PracticeArea[];
  showCta?: boolean;
}) {
  return (
    <div>
      <ol className="relative border-t border-line">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-7 w-px bg-line"
        />

        {items.map((pa, i) => {
          const external = pa.external;
          const num = String(i + 1).padStart(2, "0");
          const featured = pa.featured;

          const body = (
            <div
              className={cn(
                "group/row grid grid-cols-[3.5rem_1fr] items-start gap-x-4 py-7 pr-3 transition-transform duration-300 group-hover:-translate-y-0.5 sm:grid-cols-[3.5rem_auto_1fr_auto] sm:gap-x-6",
              )}
            >
              {/* Number node on the rail */}
              <span className="flex justify-center">
                <span
                  className={cn(
                    "relative z-10 -mt-1 px-1 py-1 font-serif text-3xl leading-none transition-colors duration-300 sm:text-4xl",
                    featured ? "bg-accent-50 text-accent" : "bg-paper text-line",
                    !featured && "group-hover:text-accent",
                  )}
                >
                  {num}
                </span>
              </span>

              {/* Icon with hover fill */}
              <span className="relative hidden size-11 shrink-0 items-center justify-center sm:flex">
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 rounded-full bg-accent-50 transition-all duration-300",
                    featured
                      ? "scale-100 opacity-100"
                      : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                  )}
                />
                <Icon
                  name={pa.icon}
                  size={24}
                  className={cn(
                    "relative transition-colors duration-300",
                    featured ? "text-accent" : "text-navy/25 group-hover:text-accent-600",
                  )}
                />
              </span>

              {/* Content */}
              <span className="min-w-0">
                {featured ? (
                  <span className="mb-2 block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-accent-600">
                    Signature Practice
                  </span>
                ) : null}
                <span className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={cn(
                      "font-serif text-navy transition-transform duration-300 group-hover:translate-x-0.5",
                      featured ? "text-[1.7rem]" : "text-2xl",
                    )}
                  >
                    {pa.title}
                  </span>
                  {pa.badge ? (
                    <span className="rounded-full border border-accent/30 bg-accent-50 px-2.5 py-0.5 text-[0.64rem] font-semibold uppercase tracking-wider text-accent-600">
                      {pa.badge}
                    </span>
                  ) : null}
                </span>
                <span className="mt-2 block max-w-xl text-[0.97rem] leading-relaxed text-muted">
                  {pa.summary}
                </span>
                {pa.tags?.length ? (
                  <span className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {pa.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-navy/55"
                      >
                        <span className="size-1 rounded-full bg-accent/60" />
                        {t}
                      </span>
                    ))}
                  </span>
                ) : null}
              </span>

              {/* Action */}
              <span className="hidden -translate-x-1 shrink-0 items-center gap-1.5 self-center text-sm font-medium text-accent-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                {external ? "Visit" : "Learn more"}
                {external ? (
                  <ArrowUpRight className="size-4" />
                ) : (
                  <ArrowRight className="size-4" />
                )}
              </span>
            </div>
          );

          const rowClass = cn(
            "group relative block cursor-pointer transition-colors duration-300",
            featured ? "bg-accent-50/60" : "hover:bg-navy/[0.015]",
          );
          const accentBar = (
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-0 h-full w-[3px] origin-top bg-accent transition-transform duration-300",
                featured ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
              )}
            />
          );

          return (
            <li key={pa.slug} className="border-b border-line">
              <Reveal delay={(i % 3) * 60}>
                {external ? (
                  <a
                    href={external.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {accentBar}
                    {body}
                  </a>
                ) : (
                  <Link href={`/practice-areas/${pa.slug}`} className={rowClass}>
                    {accentBar}
                    {body}
                  </Link>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>

      {showCta ? (
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg bg-cream px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-navy">
            <span className="font-serif text-lg">Need legal guidance?</span>{" "}
            <span className="text-muted">Every consultation is free and confidential.</span>
          </p>
          <ButtonLink href="/contact" variant="accent" className="shrink-0">
            Schedule a Consultation
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
