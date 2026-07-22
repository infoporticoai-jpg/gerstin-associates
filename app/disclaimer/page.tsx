import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { firm } from "@/lib/firm";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: `Legal disclaimer for ${firm.name}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Legal Disclaimer"
        crumbs={[{ label: "Home", href: "/" }, { label: "Legal Disclaimer" }]}
      />
      <Section tone="paper">
        <div className="container-narrow prose-legal text-[1.02rem]">
          <p>
            The information contained on this website is not legal advice and is for
            general informational purposes only. The hiring of a lawyer is an
            important decision that should not be based solely upon advertisements.
          </p>
          <p>
            Before you decide, ask us to send you free written information about our
            qualifications and experience. Contacting {firm.name} through this
            website does not create an attorney-client relationship, and information
            you send is not protected by attorney-client privilege until such a
            relationship has been established.
          </p>
          <p>
            Prior results do not guarantee a similar outcome. Every legal matter is
            different, and the outcome of any matter depends on its specific facts
            and circumstances.
          </p>
        </div>
      </Section>
    </>
  );
}
