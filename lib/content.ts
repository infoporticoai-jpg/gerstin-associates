/* ============================================================
   SITE CONTENT — practice areas, attorneys, insights, credentials.
   Sourced from the firm's existing site (gerstin.com). Facts (names,
   credentials, services, article titles/dates) are preserved from the
   source; connective copy is rewritten for readability per the redesign
   brief, without changing legal meaning. No client testimonials, hours,
   or social profiles exist on the source site, so none are invented.
   ============================================================ */

export type PracticeArea = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  overview: string[];
  services: string[];
  whoWeHelp: string[];
  faqs: { q: string; a: string }[];
  /** Supporting image (drop the PNG into /public to activate it). */
  image?: string;
  /** Short scannable keywords shown on the practice-area rows. */
  tags?: string[];
  /** Optional badge shown to feature a standout area (e.g. Board Certified). */
  badge?: string;
  /** Marks the firm's flagship practice for prominent treatment. */
  featured?: boolean;
  /** External practice handled by the firm's sister company. */
  external?: { href: string; label: string };
};

export type Attorney = {
  slug: string;
  name: string;
  title: string;
  image?: string;
  short: string;
  bio: string[];
  boardCertification?: string;
  education: string[];
  barAdmissions: string[];
  practiceAreas: string[];
  memberships?: string[];
  community?: string[];
};

export type Article = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author?: string;
  /** Live article on the current site (full migration is a later phase). */
  href: string;
};

/* ---------------------------------------------------------------
   PRACTICE AREAS
   --------------------------------------------------------------- */
export const practiceAreas: PracticeArea[] = [
  {
    slug: "business-litigation",
    title: "Business Litigation",
    icon: "Gavel",
    image: "/images/practice-areas/business-litigation.png",
    tags: ["Disputes", "Contracts", "Partnerships", "Commercial Claims"],
    summary:
      "Assertive, focused representation for the disputes that put your business at risk.",
    overview: [
      "Our attorneys have the knowledge and experience to represent business clients in today's technological and competitive marketplace. In-house corporate counsel, entrepreneurs, business start-ups, and well-established businesses choose our Boca Raton firm because we fully understand the effect litigation has on a business.",
      "We are committed to each client's litigation objectives. We focus on our client's litigation needs so our clients can focus on running their businesses — with over twenty years of business litigation experience behind every matter.",
    ],
    services: [
      "Partnership and shareholder derivative actions",
      "Purchase and sale agreement disputes",
      "Domain name disputes",
      "Internet and web-related claims (TOS violations, fraud, intellectual property)",
      "Injunctions",
      "Enforcement of restrictive covenants and non-compete agreements",
      "Contract litigation and breach of contract",
      "Commercial real estate litigation",
      "Fraud claims",
      "Insurance coverage disputes",
      "Construction defects",
    ],
    whoWeHelp: [
      "In-house corporate counsel",
      "Entrepreneurs and business start-ups",
      "Well-established businesses",
      "Companies facing time-sensitive commercial disputes",
    ],
    faqs: [
      {
        q: "When should I bring in a litigation attorney?",
        a: "The earlier the better. Involving counsel before a dispute escalates often preserves options — from an enforceable demand to an early injunction — that disappear once positions harden. We help you weigh the cost of a fight against the value of the outcome from day one.",
      },
      {
        q: "Will my dispute go to trial?",
        a: "Most business disputes resolve before trial, but the ones that resolve on favorable terms are the ones prepared as though they will not. We build every matter with that discipline, which strengthens your position in negotiation.",
      },
    ],
  },
  {
    slug: "business-transactions",
    title: "Business Transactions",
    icon: "Briefcase",
    image: "/images/practice-areas/business-transactions.png",
    tags: ["Formation", "M&A", "Contracts", "Agreements"],
    summary:
      "Full-service counsel from formation through acquisition — keeping you out in front.",
    overview: [
      "Our Business Transactions practice provides full-service counsel to privately held U.S. clients, from start-up entrepreneurs to major, award-winning corporations. We guide businesses from formation through acquisition, always with an eye toward keeping our clients out in front of their competition.",
      "We translate complex transactions into definitive answers and plain-English guidance, so you can move forward with confidence.",
    ],
    services: [
      "Purchasing or selling a business",
      "Negotiating the purchase of your location",
      "Conducting due diligence",
      "Lease negotiations",
      "Corporate governance",
      "Acquisitions, consolidations, mergers, reorganizations, and liquidations",
      "Operating agreements for LLCs",
      "Shareholders' agreements",
      "Marketing and advertising agreements",
      "Shares and asset purchase agreements",
      "Drafting and review of contracts",
      "Buy-sell agreements, negotiation, and structuring",
      "Employment and independent contractor agreements",
      "Formation of foreign or domestic corporations, LLCs, partnerships, and joint ventures",
    ],
    whoWeHelp: [
      "Start-up entrepreneurs establishing a foundation",
      "Growing companies structuring for expansion",
      "Owners buying or selling a business",
      "Established corporations managing complex agreements",
    ],
    faqs: [
      {
        q: "Which entity structure is right for my business?",
        a: "It depends on how you plan to raise money, share ownership, and manage taxes and liability. We walk you through the trade-offs of LLCs, corporations, partnerships, and joint ventures, then structure the entity to fit your goals rather than a template.",
      },
      {
        q: "Can you review a contract before I sign it?",
        a: "Yes. We regularly review purchase agreements, leases, and vendor contracts, flag the terms that matter, and explain them in plain English so you understand the risk before you commit.",
      },
    ],
  },
  {
    slug: "community-associations",
    title: "Community Associations",
    icon: "Building2",
    badge: "Board Certified",
    featured: true,
    image: "/images/practice-areas/community-associations.png",
    tags: ["HOAs", "Condominiums", "Covenants", "Collections"],
    summary:
      "South Florida's board-certified counsel for condominium and homeowner associations — our signature practice.",
    overview: [
      "Our Community Association practice represents homeowner and condominium associations throughout South Florida. We represent the Association — not individual homeowners — and provide prompt, personal service whether a community is self-managed or professionally managed.",
      "Unlike many firms, our Community Association practice does not charge a monthly service or retainer fee. We work on an à la carte basis, so associations pay for the counsel they actually use. Our founding attorney is Board Certified by The Florida Bar in Condominium and Planned Development Law.",
    ],
    services: [
      "Interpretation, amendment, and enforcement of governing documents",
      "Compliance with state, local, and federal law affecting associations",
      "Day-to-day operational, regulatory, and practical guidance",
      "Hurricane preparation, protection, recovery, and rebuilding counsel",
      "Board guidance on budgeting and reserves",
      "Maintenance and repair issue analysis",
      "Contract drafting and review for management and operations",
      "Construction defect claims and warranty pursuit",
      "Lien law compliance and construction project planning",
      "Delinquent assessment collection",
      "Developer transition assistance and post-transition counsel",
      "Loan document review and financing arrangements",
    ],
    whoWeHelp: [
      "Condominium associations",
      "Homeowner associations (HOAs)",
      "Self-managed communities",
      "Professionally managed communities",
    ],
    faqs: [
      {
        q: "Do you charge associations a monthly retainer?",
        a: "No. Our Community Association practice works on an à la carte basis with no monthly service or retainer fee, so your association pays for the specific counsel it uses rather than a flat monthly charge.",
      },
      {
        q: "Does the firm represent individual homeowners against an association?",
        a: "No. We limit this practice to representing the Association itself, which lets us serve boards without the conflicts that arise from also representing individual owners.",
      },
      {
        q: "What does Board Certification in Condominium and Planned Development Law mean?",
        a: "It is the highest level of recognition The Florida Bar awards for expertise in this field, reflecting substantial experience, peer review, and examination. Our founding attorney, Joshua Gerstin, holds this certification.",
      },
    ],
  },
  {
    slug: "hotel-development",
    title: "Hotel & Motel Development",
    icon: "Hotel",
    image: "/images/practice-areas/hotel-motel-development.png",
    tags: ["Acquisition", "Financing", "Franchising", "Operations"],
    summary:
      "Experienced counsel across acquisition, development, financing, and operations.",
    overview: [
      "From acquisition, development, and financing to management, operations, and loan workouts, South Florida hotel and motel developers and owners demand experienced legal counsel for the range of issues they face in the market. We represent developers, owner-operators, franchisers and franchisees, and financial institutions.",
      "Our Hotel and Motel Development group knows how to complete transactions successfully because we have done it well before — and we tailor the scope of our work to each client's unique needs.",
    ],
    services: [
      "Sales and purchases",
      "Asset management",
      "Financing and franchising",
      "Litigation and bankruptcy",
      "Management and operations",
      "Land development and use issues",
      "Creation of organizational documents",
      "Acquisition and disposition",
      "Mergers and acquisitions",
      "Negotiation and drafting of management agreements",
      "Conference, convention, and public assembly facilities",
    ],
    whoWeHelp: [
      "Hotel and motel developers",
      "Owner-operators",
      "Franchisers and franchisees",
      "Financial institutions",
    ],
    faqs: [
      {
        q: "Can you handle a project from acquisition through operations?",
        a: "Yes. From start to finish our attorneys can address the full life cycle — acquisition, development, financing, franchising, and day-to-day operations — and get your property developed and running smoothly in a timely, cost-effective manner.",
      },
      {
        q: "Do you represent both developers and lenders?",
        a: "We represent developers, owner-operators, franchisers and franchisees, and financial institutions. For any given matter we represent one side and clear conflicts before taking on the engagement.",
      },
    ],
  },
  {
    slug: "information-technology",
    title: "Information Technology",
    icon: "Cpu",
    image: "/images/practice-areas/information-technology.png",
    tags: ["Software", "Licensing", "Privacy", "E-commerce"],
    summary:
      "Practical technology-agreement counsel for businesses of every size.",
    overview: [
      "Our Information Technology group represents entrepreneurs, start-ups, small businesses, and large corporations with all types of technology agreements, in virtually every industry. We understand the laws, the underlying technology, and — most importantly — our clients and their businesses.",
      "Whether you need help with a large-scale technology expansion or you are a start-up looking to grow, our attorneys can address every information technology issue from start to finish.",
    ],
    services: [
      "Software licensing, maintenance, and IT consulting agreements",
      "E-commerce, web hosting, and development agreements",
      "Telecommunications agreements",
      "Domain name portfolio assistance and dispute resolution",
      "Privacy policy and data protection compliance",
      "Business-to-business and business-to-consumer arrangements",
      "IT outsourcing and software/hardware supply reviews",
      "Website developer and consultant contract negotiations",
      "NDAs, confidentiality, and know-how agreements",
      "Internet and telecommunications service provider contracts",
    ],
    whoWeHelp: [
      "Technology entrepreneurs and start-ups",
      "Small businesses adopting new systems",
      "Large corporations expanding IT operations",
      "Companies managing data and privacy compliance",
    ],
    faqs: [
      {
        q: "Do you help with privacy and data protection compliance?",
        a: "Yes. We help ensure customer information is handled in compliance with your privacy policies and applicable laws, and we review your practices as your business and the regulations evolve.",
      },
      {
        q: "Can you negotiate our software and vendor agreements?",
        a: "We draft, negotiate, and interpret agreements across software licensing, maintenance, IT consulting, hosting, and telecommunications, giving you high-quality, specialized, and practical advice.",
      },
    ],
  },
  {
    slug: "real-estate-title",
    title: "Real Estate Closings & Title Insurance",
    icon: "KeyRound",
    image: "/images/practice-areas/title-insurance-closings.png",
    tags: ["Closings", "Title", "Escrow"],
    summary:
      "Residential and commercial closings and title insurance through our affiliated title company.",
    overview: [
      "Real estate closings and title insurance are handled through the firm's affiliated title company, giving clients an experienced, attorney-supported closing under one roof.",
    ],
    services: [
      "Residential and commercial closings",
      "Title searches and title insurance",
      "Settlement and escrow services",
      "Closing document preparation",
    ],
    whoWeHelp: [
      "Buyers and sellers of residential property",
      "Commercial real estate purchasers",
      "Lenders and real estate professionals",
    ],
    faqs: [],
    external: { href: "https://www.bocatitleinsurance.com", label: "Visit Boca Title Insurance" },
  },
];

export const internalPracticeAreas = practiceAreas.filter((p) => !p.external);

/* ---------------------------------------------------------------
   ATTORNEYS
   --------------------------------------------------------------- */
export const attorneys: Attorney[] = [
  {
    slug: "joshua-gerstin",
    name: "Joshua Gerstin, Esq.",
    title: "Founding Attorney",
    image: "/images/attorneys/joshua-gerstin.png",
    boardCertification:
      "Board Certified by The Florida Bar in Condominium and Planned Development Law",
    short:
      "Founder of the firm and a Florida Bar Board Certified specialist in community association law, with over two decades advising businesses and associations across South Florida.",
    bio: [
      "Joshua Gerstin founded Gerstin & Associates on a simple principle: businesses and community associations deserve definitive answers and practical solutions delivered in plain English. He is Board Certified by The Florida Bar in Condominium and Planned Development Law — the highest recognition the Bar awards in the field.",
      "With over twenty years of business litigation experience, Joshua represents entrepreneurs, established businesses, and homeowner and condominium associations throughout Palm Beach, Broward, and Miami-Dade counties. His practice spans business litigation, business transactions, and community association law.",
      "Beyond the practice, Joshua has been an active voice in the community and the media — authoring the weekly \"Ask Joshua Anything!\" column in the Boca Raton News, contributing to the Boca Raton Business Journal, and serving as Legal Editor of the South Florida Business Report on the West Palm Beach CBS affiliate.",
    ],
    education: [
      "Juris Doctor — Benjamin N. Cardozo School of Law, Yeshiva University, New York",
      "B.A., Communication (Honors) — Rutgers College, Rutgers University",
    ],
    barAdmissions: [
      "The Florida Bar",
      "New York State Bar",
      "New Jersey State Bar (inactive)",
      "U.S. District Court, Southern District of Florida",
      "U.S. District Court, District of New Jersey",
    ],
    practiceAreas: [
      "Community Associations",
      "Business Litigation",
      "Business Transactions",
    ],
    memberships: [
      "Palm Beach County Bar Association — Community Association Law & Circuit Court Committees",
      "South Palm Beach County Bar Association",
      "Broward County Bar Association",
      "The Florida Bar — Consumer Protection Law Committee",
      "The Florida Bar — Real Property, Probate & Trust Section",
      "Academy of Florida Trial Lawyers",
      "Association of Trial Lawyers of America",
      "Approved Community Association Education Provider — Florida Division of Condominiums, Timeshares and Mobile Homes",
    ],
    community: [
      "Chairman, Homeowner & Condominium Association Law Committee — Delray Alliance of Residential Associations",
      "Legal representative — Boca Raton Federation of Homeowner's Associations",
      "Legal representative — Boca Raton Cultural Consortium",
      "Legal Advisor — Boca Raton Martin Luther King Memorial Foundation, Inc.",
      "Graduate — Jewish Federation of South Palm Beach County Leadership Program",
    ],
  },
  {
    slug: "alicia-pokhoy",
    name: "Alicia Pokhoy, Esq.",
    title: "Attorney",
    image: "/images/attorneys/alicia-pokhoy.png",
    short:
      "An experienced litigator who has served as lead counsel for community associations, known as a professional and aggressive advocate for her clients.",
    bio: [
      "Alicia Pokhoy began her legal career representing community associations in complex legal matters, including covenant enforcement, collections, foreclosures, and the amendment of governing documents and rules. She is additionally experienced in first-party property insurance disputes and personal injury and premises liability claims.",
      "As an experienced litigator, Alicia has earned a reputation as a professional and aggressive attorney who advocates for her clients in the strongest way possible. From collections, covenant enforcement, and foreclosures to preparing opinion letters, interpreting governing documents, and negotiating contracts, she has served as lead counsel for multiple community associations.",
      "Alicia prides herself on maintaining open channels of communication with association board members and serving as their primary point of contact. When not representing clients, she broadens her outreach to local communities by presenting lectures on a variety of topics to community association board members.",
    ],
    education: [
      "Juris Doctor, 2018 — Ave Maria School of Law, Naples, Florida",
      "Honors B.S., Psychology & Sociology, 2015 — University of Toronto",
    ],
    barAdmissions: [
      "The Florida Bar",
      "U.S. District Court, Southern District of Florida",
      "U.S. District Court, Middle District of Florida",
    ],
    practiceAreas: [
      "Community Associations",
      "Business Litigation",
      "Insurance & Property Disputes",
    ],
  },
];

/* ---------------------------------------------------------------
   THE FIRM'S DIFFERENCE — real, source-backed differentiators.
   (Replaces client testimonials, which the source site does not have.)
   --------------------------------------------------------------- */
export const firmDifference = [
  {
    icon: "Award",
    title: "Board-certified expertise",
    body: "Our founding attorney is Board Certified by The Florida Bar in Condominium and Planned Development Law — the highest recognition the Bar awards in the field.",
  },
  {
    icon: "Scale",
    title: "20+ years of litigation experience",
    body: "Over two decades of business litigation experience informs every matter we handle, from contract disputes to injunctions and construction defects.",
  },
  {
    icon: "MessageSquare",
    title: "Answers in plain English",
    body: "We deliver definitive answers and practical solutions in plain English — not expensive legal theories — so you always understand your position.",
  },
  {
    icon: "Handshake",
    title: "À la carte association counsel",
    body: "Our Community Association practice charges no monthly service or retainer fee. Associations pay only for the counsel they actually use.",
  },
];

/* Why choose — rewritten from the firm's real positioning. */
export const whyChoose = [
  {
    icon: "Award",
    title: "Strength, not size",
    body: "We deliver the kind of advice, insight, and performance you get only at a firm that focuses on its strength, not its size.",
  },
  {
    icon: "Compass",
    title: "Results over theories",
    body: "Every attorney is trained to focus on results and quick, efficient responses — not expensive legal theories and propositions.",
  },
  {
    icon: "MessageSquare",
    title: "Plain-English counsel",
    body: "We translate complex legal questions into definitive, cost-effective answers that are genuinely easy to understand.",
  },
  {
    icon: "ShieldCheck",
    title: "Out in front",
    body: "Our goal is to keep clients out in front of their competition with premier-quality legal counsel across South Florida.",
  },
  {
    icon: "Users",
    title: "Direct attorney access",
    body: "You work directly with experienced attorneys who understand both the law and the realities of running a business.",
  },
  {
    icon: "Landmark",
    title: "Rooted in South Florida",
    body: "We serve clients throughout Palm Beach, Broward, and Miami-Dade counties, with deep familiarity with the local market and courts.",
  },
];

/* Trust / firm stats — real, source-backed. */
export const firmStats = [
  { value: "20+", label: "Years of business litigation experience" },
  { value: "Board", label: "Certified in condo & planned development law" },
  { value: "6", label: "Focused practice areas" },
  { value: "3", label: "South Florida counties served" },
];

/* ---------------------------------------------------------------
   INSIGHTS — real recent articles (link to live posts for now;
   full article migration is a later phase).
   --------------------------------------------------------------- */
export const articles: Article[] = [
  {
    title:
      "HUD Narrows Its Approach to Emotional Support Animal Requests",
    category: "Community Associations",
    excerpt:
      "What Florida HOAs and condominium associations should know about HUD's updated approach to emotional support animal requests.",
    date: "2026-07-12",
    author: "Alicia Pokhoy, Esq.",
    href: "https://gerstin.com/hud-narrows-its-approach-to-emotional-support-animal-requests-what-florida-hoas-and-condominium-associations-should-know/",
  },
  {
    title: "Florida Condo Board Term Limits Are Here",
    category: "Community Associations",
    excerpt:
      "The new term-limit rules taking effect in 2026 and what associations need to do to stay compliant.",
    date: "2026-02-02",
    author: "Joshua Gerstin, Esq.",
    href: "https://gerstin.com/florida-condo-board-term-limits-are-here-what-associations-need-to-know-in-2026/",
  },
  {
    title: "2025 Florida Community Association Legislative Update",
    category: "Community Associations",
    excerpt:
      "A plain-English summary of the legislative changes affecting Florida community associations this session.",
    date: "2025-06-29",
    href: "https://gerstin.com/2025-florida-community-association-legislative-update/",
  },
  {
    title: "FTC Bans Noncompete Agreements",
    category: "Business Litigation",
    excerpt:
      "What the FTC's rule on noncompete agreements means for Florida employers and their existing contracts.",
    date: "2024-04-24",
    href: "https://gerstin.com/ftc-bans-noncompete-agreements/",
  },
  {
    title: "New Federal Law Mandates Community Association Disclosures",
    category: "Community Associations",
    excerpt:
      "A new federal disclosure requirement and the steps associations should take to comply.",
    date: "2024-01-05",
    author: "Joshua Gerstin, Esq.",
    href: "https://gerstin.com/new-federal-law-mandates-community-association-disclosures/",
  },
  {
    title: "Fannie Mae's Secret Blacklist of South Florida Condominium Associations",
    category: "Community Associations",
    excerpt:
      "How Fannie Mae's lending list can affect condominium sales and financing — and what boards can do about it.",
    date: "2023-04-24",
    href: "https://gerstin.com/fannie-maes-secret-blacklist-of-south-florida-condominium-associations/",
  },
];
