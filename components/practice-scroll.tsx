"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import type { PracticeArea } from "@/lib/content";

/**
 * Sticky-rail Practice Areas section (desktop) — the left column pins while
 * the list scrolls; each row activates as it reaches the viewport center.
 * Uses native sticky positioning + IntersectionObserver (NOT scroll-jacking),
 * so the page never feels "stuck" and normal scrolling resumes after the last
 * row. On mobile/tablet the effect is disabled and rows stack normally.
 */
export function PracticeScroll({ items }: { items: PracticeArea[] }) {
  const [active, setActive] = React.useState(0);
  const [enhanced, setEnhanced] = React.useState(false);
  const rowRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  React.useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      observer = null;

      // Only enhance on desktop with motion allowed.
      const on = mqDesktop.matches && !mqMotion.matches;
      setEnhanced(on);
      if (!on) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const idx = Number(
                (entry.target as HTMLElement).dataset.index ?? 0,
              );
              setActive(idx);
            }
          }
        },
        // Fire when a row crosses the centre band of the viewport.
        { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
      );
      rowRefs.current.forEach((el) => el && observer!.observe(el));
    };

    setup();
    mqDesktop.addEventListener("change", setup);
    mqMotion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      mqDesktop.removeEventListener("change", setup);
      mqMotion.removeEventListener("change", setup);
    };
  }, []);

  const total = items.length;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
      {/* Pinned left column */}
      <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit">
        <p className="eyebrow">Practice Areas</p>
        <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-[1.08] text-navy text-balance">
          Focused expertise where it matters most
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          From business disputes to community association counsel, our practice
          is built around the legal needs of South Florida&rsquo;s businesses,
          property owners, and associations.
        </p>

        {/* Active-practice image — updates as the list scrolls (desktop only) */}
        {enhanced ? (
          <div className="mt-8 hidden lg:block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-navy">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-navy-700">
                <Icon
                  name={items[active]?.icon ?? "Scale"}
                  size={56}
                  className="text-white/12"
                />
              </div>
              <SmartImage
                key={active}
                src={items[active]?.image ?? ""}
                alt={items[active]?.title ?? ""}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-5">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-lg leading-none text-accent">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="relative h-px flex-1 bg-white/25">
                    <span
                      className="absolute inset-y-0 left-0 bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${((active + 1) / total) * 100}%` }}
                    />
                  </span>
                  <span className="text-xs text-white/60">
                    / {String(total).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 font-serif text-lg text-white">
                  {items[active]?.title}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Board-certification card */}
        <div className="mt-9 rounded-xl bg-navy p-7 text-white">
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Florida Bar Board Certified
            </span>
          </div>
          <p className="mt-3 font-serif text-xl leading-snug text-white">
            Condominium &amp; Planned Development Law
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
            <Stat value="20+" label="Years' experience" />
            <Stat value="6" label="Practice areas" />
            <Stat value="3" label="Counties served" />
          </div>
        </div>

      </div>

      {/* Scrolling list */}
      <div>
        <ol className="relative border-t border-line">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-7 hidden w-px bg-line lg:block"
          />
          {items.map((pa, i) => {
            const external = pa.external;
            const num = String(i + 1).padStart(2, "0");
            const isActive = enhanced && i === active;
            const featured = pa.featured;
            const highlight = isActive || (!enhanced && featured);

            const body = (
              <div className="grid grid-cols-[3.5rem_1fr] items-start gap-x-4 sm:grid-cols-[3.5rem_auto_1fr_auto] sm:gap-x-6">
                {/* Number */}
                <span className="flex justify-center">
                  <span
                    className={cn(
                      "relative z-10 -mt-1 px-1 py-1 font-serif text-3xl leading-none transition-colors duration-500 sm:text-4xl",
                      highlight ? "bg-accent-50 text-accent" : "bg-paper text-line",
                    )}
                  >
                    {num}
                  </span>
                </span>

                {/* Icon */}
                <span className="relative hidden size-11 shrink-0 items-center justify-center sm:flex">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-full bg-accent-50 transition-all duration-500",
                      highlight
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                    )}
                  />
                  <Icon
                    name={pa.icon}
                    size={24}
                    className={cn(
                      "relative transition-all duration-500",
                      highlight
                        ? "scale-110 text-accent"
                        : "text-navy/25 group-hover:text-accent-600",
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
                <span
                  className={cn(
                    "hidden shrink-0 items-center gap-1.5 self-center text-sm font-medium text-accent-600 transition-all duration-300 md:flex",
                    highlight
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                >
                  {external ? "Visit" : "Learn more"}
                  {external ? (
                    <ArrowUpRight className="size-4" />
                  ) : (
                    <ArrowRight className="size-4" />
                  )}
                </span>
              </div>
            );

            const linkClass = cn(
              "group relative block rounded-xl px-4 py-6 transition-all duration-500 sm:px-6",
              "cursor-pointer hover:bg-navy/[0.015]",
              highlight && "bg-accent-50/60",
            );

            const accentBar = (
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-4 bottom-4 w-[3px] origin-center rounded bg-accent transition-transform duration-500",
                  highlight ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
                )}
              />
            );

            return (
              <li
                key={pa.slug}
                data-index={i}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className={cn(
                  "border-b border-line transition-opacity duration-500 lg:flex lg:items-center",
                  enhanced && "lg:min-h-[38vh]",
                )}
                style={enhanced ? { opacity: isActive ? 1 : 0.4 } : undefined}
              >
                {external ? (
                  <a
                    href={external.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(linkClass, "w-full")}
                  >
                    {accentBar}
                    {body}
                  </a>
                ) : (
                  <Link href={`/practice-areas/${pa.slug}`} className={cn(linkClass, "w-full")}>
                    {accentBar}
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>

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
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-accent">{value}</div>
      <div className="mt-1 text-[0.7rem] leading-tight text-white/55">{label}</div>
    </div>
  );
}
