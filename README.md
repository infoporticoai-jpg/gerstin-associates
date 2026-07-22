# Gerstin & Associates — Website

A complete redesign of the Gerstin & Associates law firm website, built with
Next.js, TypeScript, Tailwind CSS, and shadcn-style components. The design is an
evolution of the firm's established brand (navy + brick-red, PT Serif / Raleway),
not a rebrand.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** primitives + shadcn-style components
- **Framer Motion** (subtle) · **Lucide** icons

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Project structure

- `app/` — routes (home, about, attorneys, practice-areas, blog, contact, legal)
- `components/` — UI components and sections
- `lib/firm.ts` — **single source of truth** for firm details (address, phone, hours)
- `lib/content.ts` — practice areas, attorney bios, insights, differentiators
- `app/globals.css` — design tokens (brand colors live here as CSS variables)

Content is sourced from the firm's existing site; connective copy was rewritten
for readability without changing legal meaning.

## Office address

The firm's **new** office address is used site-wide via `lib/firm.ts`:

> 200 W. Palmetto Park Road, Suite 302, Boca Raton, FL 33432

## Before launch — confirm with the firm

A few items are marked in code and should be confirmed:

- **Business hours** (`lib/firm.ts`) — not published on the old site; placeholder Mon–Fri 9–5.
- **Contact email** — currently `gerstin@gmail.com`; consider a branded address.
- **Contact form delivery** — `app/api/contact/route.ts` validates submissions;
  wire it to email/CRM (e.g. Resend) to actually deliver messages.
- **Testimonials** — none exist on the old site, so none were invented. A
  testimonials section can be added once the firm provides real client quotes.
- **Blog** — the Insights section links to the live articles on gerstin.com;
  full article-body migration (~70 posts) is a follow-up phase.
- **Attorney photos** — add to `public/images/` and reference in `lib/content.ts`.

## Deployment

Deploys on Vercel from the connected GitHub repository.
