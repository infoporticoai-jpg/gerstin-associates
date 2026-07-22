import type { Metadata } from "next";
import { PT_Serif, Raleway } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrgSchema } from "@/components/org-schema";
import { firm } from "@/lib/firm";

const display = PT_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const body = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: {
    default: `${firm.name} | ${firm.tagline}`,
    template: `%s | ${firm.name}`,
  },
  description: firm.description,
  openGraph: {
    type: "website",
    siteName: firm.name,
    title: `${firm.name} | ${firm.tagline}`,
    description: firm.description,
    url: firm.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${firm.name} | ${firm.tagline}`,
    description: firm.description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <OrgSchema />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
