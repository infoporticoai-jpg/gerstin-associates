@AGENTS.md

## Design principles (Gerstin & Associates)

This is a premium, custom-designed law-firm website — it must never read as
"assembled from reusable cards."

**Avoid repetitive card-based layouts. Every major section should have a unique
composition and visual rhythm.** Alternate between split layouts, editorial
layouts, timeline layouts, full-width sections, attorney spotlights, imagery, and
structured content. White space should be intentional but balanced with
meaningful visual elements (credential panels, photography, stats, quotes).

Concretely:
- No two adjacent sections should share the same shape (grid of icon-boxes,
  identical cards, etc.).
- Prefer editorial rows, borderless icon+text, column-divided bands, and large
  spotlights over uniform card grids.
- Icons: vary treatment; never a page-wide grid of identical icon-in-a-square.
- Attorney profiles are large and prominent, not tiny cards.
- Hover states should feel premium (multiple coordinated cues), not just a color
  change.
- Feature the flagship practice (Community Association / Board Certified) more
  prominently than the rest.

**Compliance:** this is a Florida law firm. Do not fabricate client testimonials,
star ratings, "most requested" claims, awards, or statistics. Only use verifiable
facts (Board Certification, 20+ years' experience, real bios). Florida Bar
advertising rules are strict.

## Content & brand

- `lib/firm.ts` — firm facts (address, phone, hours). The office address is the
  NEW location: 200 W. Palmetto Park Road, Suite 302, Boca Raton, FL 33432.
- `lib/content.ts` — practice areas, attorneys, insights (real content from gerstin.com).
- `app/globals.css` — brand tokens: navy `#0c2340`, brick-red accent, PT Serif / Raleway.
