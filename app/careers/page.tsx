import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  Briefcase,
  Check,
  Mail,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { firm } from "@/lib/firm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Gerstin & Associates in Boca Raton. Now hiring an experienced Community Association Attorney — arbitration, litigation, and mediation of community association matters.",
  alternates: { canonical: "/careers" },
};

const applySubject = "Community Association Attorney — Application";

const responsibilities = [
  {
    icon: "Scale",
    title: "Litigation & dispute resolution",
    body: "Roughly half the role is arbitration, litigation, and mediation of community association issues.",
  },
  {
    icon: "FileText",
    title: "Documents & analysis",
    body: "Reviewing and analyzing governing documents, statutes, case law, contracts, insurance policies, and real estate documents.",
  },
  {
    icon: "Users",
    title: "Client contact & marketing",
    body: "Marketing the firm's services and client contact are an integral part of the position.",
  },
];

const benefits = [
  "Non-HMO health insurance with a major Florida medical insurer, after an employment trial period",
  "Participation in the firm's 401(k) program, after a trial period",
  "Incentive bonuses for performance and for attaining new clients",
  "Paid holidays, after trial period",
  "Vacation days, after trial period",
  "Sick leave",
];

export default function CareersPage() {
  const mailto = `mailto:${firm.email}?subject=${encodeURIComponent(applySubject)}`;

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career with Gerstin & Associates"
        intro="Join a Boca Raton firm that focuses on its strength, not its size — where attorneys get hands-on experience with clients and Florida's judicial system from day one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <Section tone="paper">
        {/* Position header */}
        <Reveal>
          <p className="eyebrow">Open position</p>
          <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-tight text-navy">
            Community Association Attorney
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              Boca Raton, FL
            </span>
            <span className="inline-flex items-center gap-2">
              <Briefcase className="size-4 text-accent" />
              Full-Time · Permanent
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-accent" />
              Start date: Immediate
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main */}
          <div>
            <div className="prose-legal text-[1.05rem]">
              <p>
                Our ideal candidate will have at least five years of experience
                related to the legal representation of community associations.
                Approximately fifty percent of the position will involve
                arbitration, litigation, and mediation of community association
                issues. The remaining responsibilities relate to reviewing and
                analyzing community association governing documents, statutes, case
                law, contracts, insurance policies, and real estate documents.
              </p>
              <p>
                Marketing the firm&rsquo;s services and client contact are an
                integral part of this position. The ideal candidate is a personable
                communicator who appreciates the value of such experiences. Only
                eager, aggressive lawyers seeking a challenge, career growth, and
                hands-on experience with clients and Florida&rsquo;s judicial system
                should apply.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-10">
              <h3 className="font-serif text-2xl text-navy">The role at a glance</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {responsibilities.map((r) => (
                  <div key={r.title} className="border-t-2 border-accent/70 pt-5">
                    <Icon name={r.icon} size={26} className="text-accent" />
                    <h4 className="mt-4 font-serif text-lg text-navy">{r.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirement callout */}
            <div className="mt-10 rounded-xl border border-line bg-cream p-7">
              <h3 className="flex items-center gap-2.5 font-serif text-xl text-navy">
                <ShieldCheck className="size-5 text-accent" />
                What we&rsquo;re looking for
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                At least five years of experience in the legal representation of
                community associations, and a personable, driven communicator ready
                for challenge, career growth, and real hands-on client and courtroom
                experience.
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-10">
              <h3 className="font-serif text-2xl text-navy">Benefits</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[0.95rem] text-ink/85"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <h3 className="font-serif text-xl">How to apply</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Please email or fax your résumé and a writing sample to Joshua
                Gerstin, Esq.
              </p>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
                <a
                  href={mailto}
                  className="flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  {firm.email}
                </a>
                <div className="flex items-center gap-3 text-white/85">
                  <Printer className="size-4 shrink-0 text-accent" />
                  {firm.fax} (fax)
                </div>
              </div>
              <a href={mailto}>
                <Button variant="accent" className="mt-7 w-full">
                  Email Your Résumé
                </Button>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                All inquiries will remain confidential. We look forward to hearing
                from you.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
