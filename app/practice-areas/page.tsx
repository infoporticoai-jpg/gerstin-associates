import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { PracticeList } from "@/components/practice-list";
import { CtaBand } from "@/components/cta-band";
import { practiceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Business litigation, business transactions, community association law, hotel development, information technology, and real estate closings — premier legal counsel in Boca Raton.",
  alternates: { canonical: "/practice-areas" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="Counsel across the matters that shape your business"
        intro="We focus our practice on the legal needs of South Florida's businesses, property owners, and community associations — delivering definitive answers in plain English."
        crumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
      />
      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <PracticeList items={practiceAreas} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
