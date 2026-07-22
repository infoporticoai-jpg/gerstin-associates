import { Reveal } from "@/components/reveal";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";

/** Interior page hero band — navy, with breadcrumbs and title. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />
      <div className="container-wide relative py-14 md:py-20">
        <Breadcrumbs crumbs={crumbs} />
        <Reveal className="mt-6 max-w-3xl">
          {eyebrow ? (
            <p className="eyebrow" style={{ color: "var(--brand-accent)" }}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-serif text-[length:var(--text-h1)] leading-tight text-white text-balance">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 text-lg leading-relaxed text-white/70">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
