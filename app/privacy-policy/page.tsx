import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { firm, fullAddress } from "@/lib/firm";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${firm.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <Section tone="paper">
        <div className="container-narrow prose-legal text-[1.02rem]">
          <p>
            {firm.name} respects your privacy. This policy explains how information
            submitted through this website is handled.
          </p>
          <h2 className="font-serif text-2xl text-navy">Information we collect</h2>
          <p>
            We collect the information you voluntarily provide through our contact
            forms — such as your name, email address, phone number, and a
            description of your matter — solely to respond to your inquiry.
          </p>
          <h2 className="font-serif text-2xl text-navy">How we use it</h2>
          <p>
            Information you submit is used only to respond to your request and to
            provide legal services if you become a client. We do not sell your
            personal information.
          </p>
          <h2 className="font-serif text-2xl text-navy">Confidentiality</h2>
          <p>
            Submitting information through this website does not create an
            attorney-client relationship. Please do not send confidential or
            time-sensitive information until such a relationship has been
            established in writing.
          </p>
          <h2 className="font-serif text-2xl text-navy">Contact</h2>
          <p>
            Questions about this policy may be directed to {firm.name}, {fullAddress()},
            or {firm.phone}.
          </p>
          <p className="text-sm text-muted">
            This policy is provided as a general template and should be reviewed by
            the firm before publication.
          </p>
        </div>
      </Section>
    </>
  );
}
