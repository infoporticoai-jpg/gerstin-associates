import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

/** FAQ accordion + FAQPage JSON-LD. */
export function FaqSection({
  items,
  withSchema = true,
}: {
  items: FaqItem[];
  withSchema?: boolean;
}) {
  if (!items.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {withSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </div>
  );
}
