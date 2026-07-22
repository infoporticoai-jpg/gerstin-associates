import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { AttorneyFeature } from "@/components/attorney-feature";
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
        <div className="space-y-20 md:space-y-24">
          {attorneys.map((a, i) => (
            <AttorneyFeature key={a.slug} attorney={a} index={i} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
