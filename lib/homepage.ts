import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaSubtext: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface TowerSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  articlesHeading: string;
  articlesSubheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
  postCtaHeading: string;
  postCtaBody: string;
  postCtaButtonText: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  tower: TowerSection;
  practical: PracticalSection;
  price: PriceSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Disneyland Paris Tickets",
  logoLine1: "DISNEYLAND",
  logoLine2: "PARIS TICKETS",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Tickets", href: "/#tours" },
    { label: "Parks & Attractions", href: "/#highlights" },
    { label: "Plan Your Visit", href: "/#practical" },
    { label: "Offers", href: "/#prices" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
  ],
  ctaText: "BOOK TICKETS",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent Disneyland Paris ticket & travel portal.</strong> Not affiliated with Euro Disney S.C.A. or The Walt Disney Company. We provide authentic visitor information, ticket price comparisons, and travel guides, earning a partner referral fee on bookings made through our links at no extra cost to you.",
  columns: [
    {
      title: "Ticket Options",
      links: [
        { label: "1-Day Dated Ticket", href: "/#tours" },
        { label: "Multi-Day Pass", href: "/#tours" },
        { label: "Paris Express Shuttle", href: "/#tours" },
        { label: "Flexible Ticket", href: "/#tours" },
        { label: "Ticket Prices", href: "/#prices" },
      ],
    },
    {
      title: "Visitor Info",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Park Guides & Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Park Location & Access",
  addressLine1: "Boulevard de Parc",
  addressLine2: "77700 Coupvray / Marne-la-Vallée, France",
  copyrightText:
    "Disneyland Paris Tickets. All prices shown in EUR and subject to park season rates.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#102A5C",   // Midnight Royal Blue
  secondary: "#D6A84F", // Champagne Gold
  dark: "#172F6B",      // Royal Navy
  accent: "#E94B83",    // Magic Pink
};

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "/images/disneyland-paris-castle.jpg",
    alt: "Sleeping Beauty Castle at Disneyland Paris under bright blue sky",
    label: "Sleeping Beauty Castle",
  },
  {
    src: "/images/disneyland-paris-park.jpg",
    alt: "Main Street theme park entrance at Disneyland Park",
    label: "Disneyland Park",
  },
  {
    src: "/images/disneyland-paris-fireworks.jpg",
    alt: "Illuminations fireworks and light show over castle at night",
    label: "Nighttime Fireworks",
  },
  {
    src: "/images/disneyland-paris-studios.jpg",
    alt: "Walt Disney Studios Park entrance and studio lot",
    label: "Walt Disney Studios",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Park Ticket Passes",
    heading: "Disneyland Paris Tickets & Packages",
    subheading:
      "Explore official 1-Day dated entry, Multi-Day Park Hopper passes, undated flexible tickets, and Paris Express shuttle transfers with instant digital mobile delivery.",
  },
  highlights: {
    eyebrow: "Unforgettable Park Magic",
    heading: "Why Visit Disneyland Paris",
    subheading:
      "Step into a world of fairytale wonder, high-speed thrill rides, immersive themed lands, and world-class live entertainment just 35 minutes from central Paris.",
    cards: [
      {
        title: "Two World-Class Theme Parks",
        body: "Explore Disneyland Park with 5 iconic lands and Walt Disney Studios Park featuring Marvel Avengers Campus and Pixar adventures.",
        icon: "🏰",
      },
      {
        title: "Iconic Thrill Rides & Attractions",
        body: "Experience Big Thunder Mountain, Star Wars Hyperspace Mountain, Peter Pan's Flight, and Pirates of the Caribbean.",
        icon: "🎢",
      },
      {
        title: "Spectacular Fireworks & Parades",
        body: "Marvel at daily seasonal character parades and the breathtaking Disney Illuminations nighttime show over the castle.",
        icon: "🎆",
      },
      {
        title: "Instant Mobile E-Delivery",
        body: "Receive official barcode e-tickets directly on your smartphone to scan at entrance turnstiles without queueing at ticket booths.",
        icon: "📱",
      },
    ],
  },
  why: {
    eyebrow: "Park Experience & Itinerary",
    heading: "How Your Day at Disneyland Paris Unfolds",
    intro:
      "From early morning entrance to the thrilling rides and magical evening illumination finale, here is what to expect during a full day at Disneyland Paris.",
    timelineHeading: "Recommended Park Day Schedule",
    timeline: [
      { time: "09:00 AM", step: "Arrival at Marne-la-Vallée Chessy station and smooth entry scan with mobile e-ticket" },
      { time: "09:30 AM", step: "Main Street, U.S.A. walk and photo ops in front of Sleeping Beauty Castle" },
      { time: "10:30 AM", step: "Fantasyland & Discoveryland thrill rides (Peter Pan, Space Mountain, Buzz Lightyear)" },
      { time: "01:00 PM", step: "Lunch in Adventureland or Park Hop over to Walt Disney Studios Park for Marvel Avengers" },
      { time: "05:30 PM", step: "Disneyland Stars on Parade viewing along Main Street" },
      { time: "10:00 PM", step: "Spectacular Nighttime Fireworks & Illuminations show over Sleeping Beauty Castle" },
    ],
    learnHeading: "Essential Visitor Tips",
    learn: [
      "Download the official smartphone app to check live ride wait times and show schedules",
      "Book dated tickets early to secure guaranteed lowest rates and reservation dates",
      "Choose a 2-Park Hopper pass if you want to visit both Disneyland Park and Walt Disney Studios in 1 day",
      "Arrive 30 minutes before park opening to enjoy shorter ride queues during the first hour",
    ],
    note: "Official e-tickets provide direct gate entry. Children under 3 enter completely free of charge.",
    extraHeading: "Getting to the Park from Paris",
    extraItems: [
      { name: "RER A Train (Fastest)", note: "Direct 35-minute train ride from central Paris (Châtelet, Gare de Lyon) to Marne-la-Vallée Chessy" },
      { name: "Disneyland Express Shuttle", note: "Convenient coach transfers departing daily from 4 central Paris points" },
      { name: "By Car / Taxi", note: "Located off the A4 highway with spacious visitor parking available on site" },
    ],
    ctaText: "Ready for magic? Official Disneyland Paris Tickets start at €56 with instant mobile delivery.",
    ctaSubtext: "Guaranteed gate entry, official e-tickets & 2-Park Hopper options",
    ctaButtonText: "Explore Disneyland Paris Tickets →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "Nighttime Spectacle",
    heading: "Fireworks, Illuminations & Castle Night Show",
    body:
      "End your day in pure enchantment. As dusk falls over <strong>Disneyland Paris</strong>, Sleeping Beauty Castle transforms into a luminous canvas of fireworks, laser projections, fountain displays, and iconic Disney soundtracks.",
    bullets: [
      "Included with all valid Disneyland Park daytime admission tickets",
      "Nightly show performance timed with park closing time",
      "Unrivaled views from Main Street, U.S.A. and Central Plaza",
      "State-of-the-art drone light shows and pyrotechnics",
    ],
    ctaButtonText: "View Ticket Packages",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/disneyland-paris-fireworks.jpg",
        alt: "Fireworks display and light show over Sleeping Beauty Castle at night",
        label: "Nighttime Fireworks",
      },
      {
        src: "/images/disneyland-paris-castle.jpg",
        alt: "Sleeping Beauty Castle landmark at Disneyland Paris",
        label: "Fairytale Castle",
      },
      {
        src: "/images/disneyland-paris-rides.jpg",
        alt: "Thrill rollercoaster ride experience in theme park",
        label: "Thrill Attractions",
      },
      {
        src: "/images/disneyland-paris-studios.jpg",
        alt: "Walt Disney Studios Park entrance and studio lot",
        label: "Walt Disney Studios",
      },
    ],
  },
  practical: {
    hoursHeading: "Park Opening Hours & Schedule (2026)",
    hours: [
      { range: "Disneyland Park", time: "09:30 AM – 10:00 PM (Nightly Fireworks at Closing)" },
      { range: "Walt Disney Studios Park", time: "09:30 AM – 09:00 PM" },
    ],
    hoursNote: "Extra Magic Time available from 08:30 AM for Disney Hotel guests.",
    addressHeading: "Park Address & Location",
    address:
      "Disneyland Paris\nBoulevard de Parc, 77700 Coupvray, France\nMarne-la-Vallée Chessy (RER Line A terminus station).",
    metro: "Scan your mobile e-ticket barcode directly at the main entrance turnstiles.",
    bestTimeHeading: "Best Time to Visit",
    bestTimeBody:
      "Midweek days (Tuesday through Thursday) during spring and autumn offer the shortest wait times. Book dated passes 2–4 weeks in advance for peak season visits.",
  },
  price: {
    eyebrow: "Ticket Comparison",
    heading: "Compare Disneyland Paris Ticket Options",
    subheading:
      "Choose the right ticket pass for your trip — compare 1-Day, Multi-Day, Flexible, and Shuttle Combo tickets side by side.",
    note: "Child pricing applies to ages 3–11. Infants under 3 enter free.",
    itemLabel: "Ticket Type & Pass",
    priceLabel: "Price From",
    column1Label: "Parks / Duration",
    column2Label: "Features",
    bestForLabel: "Best For",
    bookLabel: "Book",
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Disneyland Paris Tickets FAQ",
  },
  notFound: {
    heading: "Page Not Found — Let's Guide You to the Magic",
    body: "The page you're looking for doesn't exist. Explore our official Disneyland Paris tickets and planning guides below.",
    primaryButtonText: "Compare Disneyland Paris Tickets →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read Planning Guides",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Planning Guides",
    heading: "Disneyland Paris Travel Guides & Tips",
    subheading:
      "Expert visitor advice, ticket price breakdowns, ride guides, and crowd calendars to help you plan an unforgettable trip.",
    viewAllText: "View All Guides",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Disneyland Paris Guides",
    heading: "Disneyland Paris Ticket & Visitor Guides",
    subheading: "Practical advice to help you choose tickets, skip ride lines, and make the most of your theme park trip.",
    articlesHeading: "Latest Planning Guides",
    articlesSubheading: "Comprehensive articles and insider tips for Disneyland Paris.",
    emptyStateText: "No guides published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Book Your Disneyland Paris Tickets",
    ctaBody: "Official mobile e-tickets, best price guarantee, and instant confirmation.",
    ctaButtonText: "Compare Disneyland Paris Tickets →",
    backToGuidesText: "← All travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    postCtaHeading: "Compare Official Disneyland Paris Tickets",
    postCtaBody: "Find 1-Day, Multi-Day, and Shuttle combo tickets with instant mobile delivery.",
    postCtaButtonText: "Explore Tickets Now →",
    relatedGuidesHeading: "Related Planning Guides",
    sidebarRelatedHeading: "Related Visitor Guides",
    sidebarRecommendedBadge: "Recommended Pass",
    sidebarCompareLinkText: "Compare all Disneyland Paris tickets →",
    promoRecommendedText: "Recommended Ticket",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "🏰 Official Disneyland Paris E-Tickets",
  heroHeading: "Disneyland Paris\nTickets",
  heroSubheading:
    "Step into a world of magic. Compare official Disneyland Paris 1-Day tickets, Multi-Day Park Hopper passes, and Paris shuttle combos with instant mobile confirmation.",
  heroImage: "/images/disneyland-paris-hero.jpg",
  heroImageAlt: "Disneyland Paris fairytale castle at sunset with fireworks illumination and magical atmosphere",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroCtaPrimaryText: "Explore Tickets",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "See Ticket Prices",
  heroCtaSecondaryHref: "#prices",
  showFeaturedTour: true,
  featuredTourId: "disneyland-paris-dated-1-day-ticket",
  featuredBadgeLabel: "Best Value 1-Day Ticket",
  featuredUrgencyText: "High Demand · Instant E-Ticket Confirmation",
  featuredReasons: [
    "92,000+ verified customer reviews — rated 4.9 / 5",
    "Official e-tickets delivered instantly to your smartphone",
    "Choice of 1-Park or 2-Park Hopper flexibility with best price guarantee",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Disneyland Paris Tickets — Book Official Passes & Ticket Deals (2026)",
  metaDescription:
    "Book official Disneyland Paris tickets online. Compare 1-Day, Multi-Day, Park Hopper passes, and shuttle combos with instant mobile e-ticket delivery.",
  focusKeyword: "Disneyland Paris Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || DEFAULT_HOMEPAGE_CONTENT.heroBadge,
    heroHeading: row.hero_heading || DEFAULT_HOMEPAGE_CONTENT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_HOMEPAGE_CONTENT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_HOMEPAGE_CONTENT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_HOMEPAGE_CONTENT.heroImageAlt,
    heroVideo: row.hero_video || "",
    heroGallery: (() => {
      const g = parseReasons(row.hero_gallery);
      return g.length ? (g as unknown as GalleryImage[]) : DEFAULT_GALLERY;
    })(),
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: row.show_featured_tour !== undefined ? !!row.show_featured_tour : true,
    featuredTourId: row.featured_tour_id || DEFAULT_HOMEPAGE_CONTENT.featuredTourId,
    featuredBadgeLabel: row.featured_badge_label || DEFAULT_HOMEPAGE_CONTENT.featuredBadgeLabel,
    featuredUrgencyText: row.featured_urgency_text || DEFAULT_HOMEPAGE_CONTENT.featuredUrgencyText,
    featuredReasons: (() => {
      const r = parseReasons(row.featured_reasons);
      return r.length ? r : DEFAULT_HOMEPAGE_CONTENT.featuredReasons;
    })(),
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      tower: { ...DEFAULT_SECTIONS.tower, ...sectionsRaw.tower },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || DEFAULT_HOMEPAGE_CONTENT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_HOMEPAGE_CONTENT.metaDescription,
    focusKeyword: row.focus_keyword || DEFAULT_HOMEPAGE_CONTENT.focusKeyword,
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_video, hero_gallery, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_video = EXCLUDED.hero_video,
      hero_gallery = EXCLUDED.hero_gallery,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET theme_json = EXCLUDED.theme_json
  `;
}
