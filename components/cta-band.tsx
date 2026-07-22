import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SmartImage } from "@/components/smart-image";
import { firm } from "@/lib/firm";
import { heroImage } from "@/lib/images";

/** Reusable consultation CTA band with a waterfront backdrop. */
export function CtaBand({
  title = "Put your mind at ease. Request a free consultation.",
  sub = "Tell us about your matter and we'll respond promptly. Confidential, with no obligation.",
}: {
  title?: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <section className="bg-cream">
      <div className="container-wide py-16 md:py-20">
        <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-navy">
          <SmartImage
            src={heroImage}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="relative flex flex-col items-center gap-6 px-8 py-12 text-center md:px-14 md:py-14">
            <h2 className="font-serif text-[length:var(--text-h2)] leading-tight text-white text-balance">
              {title}
            </h2>
            <p className="max-w-xl text-white/70">{sub}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="accent" size="lg">
                Request a Free Consultation
              </ButtonLink>
              <a
                href={firm.phoneHref}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-white/30 px-8 text-base text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" />
                {firm.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
