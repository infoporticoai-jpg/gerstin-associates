import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { firm } from "@/lib/firm";

export type Crumb = { label: string; href?: string };

/** Accessible breadcrumb trail + BreadcrumbList JSON-LD. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${firm.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-white">
                {c.label}
              </Link>
            ) : (
              <span className="text-white/80">{c.label}</span>
            )}
            {i < crumbs.length - 1 ? (
              <ChevronRight className="size-3.5 text-white/30" aria-hidden />
            ) : null}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
