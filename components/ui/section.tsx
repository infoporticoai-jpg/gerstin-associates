import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Tone = "paper" | "cream" | "navy";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  cream: "bg-cream text-ink",
  navy: "bg-navy text-white",
};

/** Full-bleed section band with consistent vertical rhythm. */
export function Section({
  children,
  tone = "paper",
  className,
  id,
  size = "lg",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  size?: "lg" | "md" | "sm";
}) {
  const pad =
    size === "lg"
      ? "py-20 md:py-28"
      : size === "md"
        ? "py-16 md:py-20"
        : "py-12 md:py-16";
  return (
    <section id={id} className={cn(toneClass[tone], pad, className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

/** Centered or left-aligned section heading with eyebrow. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif leading-[1.08] text-balance",
          "text-[length:var(--text-h2)]",
          invert ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-white/75" : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
