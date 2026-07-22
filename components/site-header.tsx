"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { firm } from "@/lib/firm";
import { practiceAreas } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,34,51,0.08),0_8px_30px_-18px_rgba(15,34,51,0.25)]"
          : "bg-paper/80 backdrop-blur-sm",
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-navy text-white/80">
        <div className="container-wide flex h-9 items-center justify-between text-[0.8rem]">
          <span className="tracking-wide">
            Boca Raton, Florida &nbsp;·&nbsp; Business, Real Estate & Litigation Counsel
          </span>
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="size-3.5" />
            {firm.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex h-18 items-center justify-between py-3">
        <Link href="/" aria-label={`${firm.name} — home`} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="group relative">
            <button className="inline-flex items-center gap-1 text-[0.95rem] text-ink/80 hover:text-navy transition-colors">
              Practice Areas
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mt-3 rounded-md border border-line bg-paper p-2 shadow-[0_24px_50px_-20px_rgba(15,34,51,0.35)]">
                {practiceAreas.map((pa) => (
                  <Link
                    key={pa.slug}
                    href={`/practice-areas/${pa.slug}`}
                    className="block rounded-sm px-3 py-2.5 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-navy"
                  >
                    <span className="font-medium">{pa.title}</span>
                    <span className="mt-0.5 block text-xs text-muted line-clamp-1">
                      {pa.summary}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/practice-areas"
                  className="mt-1 block rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-wider text-accent-600 hover:bg-cream"
                >
                  View all practice areas →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.95rem] transition-colors hover:text-navy",
                pathname.startsWith(link.href) ? "text-navy" : "text-ink/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="accent" size="sm">
            Schedule a Consultation
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-wide flex flex-col py-4">
            <p className="px-1 pb-2 pt-2 text-xs font-semibold uppercase tracking-wider text-muted">
              Practice Areas
            </p>
            {practiceAreas.map((pa) => (
              <Link
                key={pa.slug}
                href={`/practice-areas/${pa.slug}`}
                className="rounded-sm px-1 py-2.5 text-ink/85 hover:text-navy"
              >
                {pa.title}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-1 py-2.5 text-ink/85 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" variant="accent" className="mt-4">
              Schedule a Consultation
            </ButtonLink>
            <a
              href={firm.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 text-navy"
            >
              <Phone className="size-4" />
              {firm.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
