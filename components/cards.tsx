import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { SmartImage } from "@/components/smart-image";
import type { PracticeArea, Attorney, Article } from "@/lib/content";

/* ---- Practice area card ---- */
export function PracticeCard({ pa }: { pa: PracticeArea }) {
  const external = pa.external;
  const cardClass =
    "group relative flex flex-col rounded-md border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_60px_-30px_rgba(12,35,64,0.4)]";

  const inner = (
    <>
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-md bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      <span className="flex size-12 items-center justify-center rounded-sm bg-cream text-accent-600 transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon name={pa.icon} size={24} />
      </span>
      <h3 className="mt-6 font-serif text-xl text-navy">{pa.title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {pa.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-600">
        {external ? "Learn more" : "Learn more"}
        {external ? (
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={external.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/practice-areas/${pa.slug}`} className={cardClass}>
      {inner}
    </Link>
  );
}

/* ---- Attorney card ---- */
export function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(12,35,64,0.4)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-cream-deep to-cream">
        {attorney.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={attorney.image}
            alt={attorney.name}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-serif text-5xl text-navy/15">
              {attorney.name
                .replace(/,.*$/, "")
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg text-navy">{attorney.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
          {attorney.title}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {attorney.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy">
          View profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/* ---- Compact horizontal attorney row (secondary contexts) ---- */
export function AttorneyRow({ attorney }: { attorney: Attorney }) {
  const initials = attorney.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className="group flex items-center gap-5 rounded-lg border border-line bg-paper p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_20px_44px_-28px_rgba(12,35,64,0.4)]"
    >
      <span className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy font-serif text-2xl text-white/90">
        {attorney.image ? (
          <SmartImage
            src={attorney.image}
            alt={attorney.name}
            objectPosition="center top"
            className="absolute inset-0 size-full object-cover"
            fallback={<span>{initials}</span>}
          />
        ) : (
          initials
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-lg text-navy">{attorney.name}</span>
        <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wider text-accent-600">
          {attorney.title}
        </span>
        <span className="mt-1.5 block line-clamp-2 text-sm leading-relaxed text-muted">
          {attorney.short}
        </span>
      </span>
      <ArrowRight className="size-5 shrink-0 self-center text-navy/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
    </Link>
  );
}

/* ---- Article card (links to the live post pending full migration) ---- */
export function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-md border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_60px_-30px_rgba(12,35,64,0.4)]"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
        {article.category}
      </span>
      <h3 className="mt-3 font-serif text-xl leading-snug text-navy transition-colors group-hover:text-accent-600">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {article.excerpt}
      </p>
      <span className="mt-6 flex items-center gap-2 text-xs text-muted">
        {date}
        {article.author ? <span>· {article.author}</span> : null}
      </span>
    </a>
  );
}
