import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { ArticleCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical legal insights from Gerstin & Associates on Florida community association law, business litigation, and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Guidance from our attorneys"
        intro="Practical perspective on the legal questions facing businesses, property owners, and community associations in Florida."
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.href} delay={(i % 3) * 70}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted">
          Looking for our full library of legal insights?{" "}
          <a
            href="https://gerstin.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-600 link-underline"
          >
            Browse the complete archive →
          </a>
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
