import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back
          on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="accent" size="lg">
            Return home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Contact the firm
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
