import { firm } from "@/lib/firm";

/** Site-wide LegalService / Organization structured data. */
export function OrgSchema() {
  const a = firm.address;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${firm.url}/#organization`,
    name: firm.legalName,
    alternateName: firm.name,
    description: firm.description,
    url: firm.url,
    telephone: firm.phone,
    faxNumber: firm.fax,
    email: firm.email,
    logo: `${firm.url}/images/logo.png`,
    image: `${firm.url}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${a.street}, ${a.suite}`,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: a.lat,
      longitude: a.lng,
    },
    areaServed: firm.serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
