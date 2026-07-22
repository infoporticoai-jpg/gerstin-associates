import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { AttorneyCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { attorneys } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet the attorneys of Gerstin & Associates — experienced, board-certified counsel serving businesses and community associations across South Florida.",
  alternates: { canonical: "/attorneys" },
};

export default function AttorneysPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Attorneys"
        title="Experienced counsel you work with directly"
        intro="At Gerstin & Associates, you work directly with attorneys who understand both the law and the realities of running a business."
        crumbs={[{ label: "Home", href: "/" }, { label: "Attorneys" }]}
      />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-3xl">
          {attorneys.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <AttorneyCard attorney={a} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
