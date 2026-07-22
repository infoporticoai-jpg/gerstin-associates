/* ============================================================
   FIRM CONFIGURATION — single source of truth
   Business facts read across the site, schema, and metadata.
   The office address below is the firm's NEW location and is used
   everywhere. Other facts are sourced from gerstin.com.
   ============================================================ */

export const firm = {
  name: "Gerstin & Associates",
  legalName: "Gerstin & Associates, Attorneys & Counselors at Law",
  tagline: "Attorneys & Counselors at Law",
  positioning: "We Know the Law and We Know Business.",
  description:
    "Gerstin & Associates is a Boca Raton law firm delivering premier legal counsel in plain English to businesses and community associations across Palm Beach, Broward, and Miami-Dade — focused on results that keep clients out in front of their competition.",
  url: "https://gerstin.com",

  // NEW office location — used everywhere across the site.
  address: {
    street: "200 W. Palmetto Park Road",
    suite: "Suite 302",
    city: "Boca Raton",
    state: "FL",
    zip: "33432",
    country: "US",
    // Approx. coordinates for 200 W Palmetto Park Rd, Boca Raton (schema/map).
    lat: 26.3496,
    lng: -80.0891,
  },

  phone: "(561) 750-3456",
  phoneHref: "tel:+15617503456",
  fax: "(561) 750-8185",
  email: "gerstin@gmail.com",

  // NOTE: business hours are not published on the current site — these are
  // sensible defaults to confirm with the firm before launch.
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", time: "By appointment" },
  ],

  serviceAreas: ["Palm Beach County", "Broward County", "Miami-Dade County"],

  social: {
    // The current site links no social profiles.
    linkedin: "",
    facebook: "",
  },
} as const;

export function fullAddress() {
  const a = firm.address;
  return `${a.street}, ${a.suite}, ${a.city}, ${a.state} ${a.zip}`;
}

export function addressLines() {
  const a = firm.address;
  return [`${a.street}, ${a.suite}`, `${a.city}, ${a.state} ${a.zip}`];
}

/** Google Maps directions URL for the new office. */
export function mapsDirectionsUrl() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    fullAddress(),
  )}`;
}

/** Google Maps embed URL (keyless) for the new office. */
export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress(),
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
