import Image from "next/image";
import { cn } from "@/lib/utils";
import logoSrc from "@/public/images/logo.png";

/**
 * Firm logo. Preserves the firm's existing brand mark.
 * - Light surfaces (header): the real logo image.
 * - Dark surfaces (footer): an inverted serif wordmark that echoes the
 *   logo's typography, since the source logo has a white background.
 */
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  if (invert) {
    return (
      <span className={cn("inline-flex flex-col leading-none", className)}>
        <span className="font-serif text-[1.4rem] tracking-wide text-white">
          Gerstin <span className="text-accent">&amp;</span> Associates
        </span>
        <span className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-white/55">
          Attorneys &amp; Counselors at Law
        </span>
      </span>
    );
  }

  return (
    <Image
      src={logoSrc}
      alt="Gerstin & Associates, Attorneys & Counselors at Law"
      priority
      className={cn("h-11 w-auto md:h-12", className)}
      sizes="(max-width: 768px) 200px, 260px"
    />
  );
}
