import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Scale } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SmartImage } from "@/components/smart-image";
import type { Attorney } from "@/lib/content";

/**
 * Large, editorial attorney profile — image/monogram panel on one side,
 * rich credentials on the other, alternating sides down the page.
 * Deliberately generous in scale (not a small card).
 */
export function AttorneyFeature({
  attorney,
  index = 0,
}: {
  attorney: Attorney;
  index?: number;
}) {
  const flip = index % 2 === 1;
  const initials = attorney.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((n) => n[0])
    .join("");
  const firstName = attorney.name.split(" ")[0];

  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Portrait panel */}
      <div className={flip ? "lg:order-2" : ""}>
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative flex aspect-[3/4] items-center justify-center bg-navy">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />
            {attorney.image ? (
              <SmartImage
                src={attorney.image}
                alt={`${attorney.name}, ${attorney.title} at Gerstin & Associates`}
                className="absolute inset-0 size-full object-cover"
                objectPosition="50% 22%"
                fallback={
                  <span className="relative font-serif text-8xl text-white/90">
                    {initials}
                  </span>
                }
              />
            ) : (
              <span className="relative font-serif text-8xl text-white/90">
                {initials}
              </span>
            )}
          </div>
          {/* Accent corner detail */}
          <span className="absolute bottom-0 left-0 h-1 w-24 bg-accent" />
        </div>
      </div>

      {/* Content */}
      <div className={flip ? "lg:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
          {attorney.title}
        </p>
        <h3 className="mt-3 font-serif text-3xl leading-tight text-navy md:text-4xl">
          {attorney.name}
        </h3>

        {attorney.boardCertification ? (
          <p className="mt-4 flex items-start gap-2.5 text-[0.95rem] text-navy/80">
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" />
            {attorney.boardCertification}
          </p>
        ) : null}

        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          {attorney.bio[0]}
        </p>

        {/* Credential highlights — inline, no boxes */}
        <dl className="mt-7 space-y-3 border-l-2 border-line pl-5">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-accent" />
            <dd className="text-sm text-ink/80">{attorney.education[0]}</dd>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="mt-0.5 size-4 shrink-0 text-accent" />
            <dd className="text-sm text-ink/80">
              {attorney.barAdmissions.slice(0, 2).join(" · ")}
            </dd>
          </div>
        </dl>

        {/* Practice-area tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {attorney.practiceAreas.map((p) => (
            <span
              key={p}
              className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy/75"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href={`/attorneys/${attorney.slug}`} variant="outline">
            View {firstName}&rsquo;s full profile
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
