import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import type { PracticeArea } from "@/lib/content";

/**
 * Editorial, horizontal-row presentation of practice areas — deliberately
 * NOT a uniform card grid. Big index numerals, large serif titles, and a
 * hover treatment that grows an accent rule and slides an arrow.
 */
export function PracticeList({ items }: { items: PracticeArea[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((pa, i) => {
        const external = pa.external;
        const num = String(i + 1).padStart(2, "0");

        const inner = (
          <>
            {/* Left accent rule that grows on hover */}
            <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

            <span className="font-serif text-3xl leading-none text-line transition-colors duration-300 group-hover:text-accent md:text-4xl">
              {num}
            </span>

            <span className="hidden shrink-0 text-navy/25 transition-colors duration-300 group-hover:text-accent sm:block">
              <Icon name={pa.icon} size={30} />
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-2xl text-navy transition-transform duration-300 group-hover:translate-x-1 md:text-[1.65rem]">
                  {pa.title}
                </span>
                {pa.badge ? (
                  <span className="rounded-full border border-accent/30 bg-accent-50 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-accent-600">
                    {pa.badge}
                  </span>
                ) : null}
              </span>
              <span className="mt-2 block max-w-xl text-[0.98rem] leading-relaxed text-muted">
                {pa.summary}
              </span>
            </span>

            <span className="hidden shrink-0 items-center gap-2 self-center text-sm font-medium text-accent-600 opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex">
              {external ? "Visit" : "Learn more"}
              {external ? (
                <ArrowUpRight className="size-4" />
              ) : (
                <ArrowRight className="size-4" />
              )}
            </span>
          </>
        );

        const rowClass =
          "group relative grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-1 py-8 pl-5 pr-2 sm:grid-cols-[auto_auto_1fr_auto] sm:gap-x-7";

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
                  {inner}
                </a>
              ) : (
                <Link href={`/practice-areas/${pa.slug}`} className={rowClass}>
                  {inner}
                </Link>
              )}
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
