import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Independent Guide to Disneyland Paris Tickets & Passes",
  heroSubheading:
    "We help travelers compare official Disneyland Paris tickets, 2-Park Hopper passes, and Paris shuttle combos with clear advice and instant mobile delivery.",
  heroImage: "/images/disneyland-paris-castle.jpg",
  heroImageAlt: "Sleeping Beauty Castle at Disneyland Paris under bright blue sky",
  content: `<h2>Our Mission</h2>
<p>We built this portal to help families and travelers navigate <strong>Disneyland Paris tickets</strong> with total transparency. Choosing between 1-Day dated passes, multi-day hopper options, flexible tickets, and Express shuttle transfers shouldn't be complicated or stressful.</p>
<p>We provide comprehensive visitor guides, price breakdowns, park itineraries, and crowd calendars so you can book official e-tickets with confidence.</p>
<h2>How We Help You Plan Your Park Day</h2>
<p>Every ticket option and planning guide featured on our website is evaluated against strict standards:</p>
<ul>
    <li><strong>Direct Gate Access</strong> — We link exclusively to authorized primary ticket partners providing e-tickets with direct barcode turnstile entry.</li>
<li><strong>Best Price Transparency</strong> — Clear price comparisons between 1-Park, 2-Park Hopper, and Multi-Day passes so you get the best value for your trip.</li>
<li><strong>Verified Customer Feedback</strong> — Curated visitor reviews and insider tips covering ride wait times, park hopper strategies, and fireworks viewing spots.</li>
<li><strong>Instant Mobile Delivery &amp; Flexibility</strong> — All ticket passes feature instant digital delivery to your smartphone with clear date confirmation policies.</li>
</ul>
<h2>Independent Travel Portal Disclaimer</h2>
<p>This website is an independent ticket guide and travel resource. We are not affiliated with, endorsed by, or associated with Euro Disney S.C.A., The Walt Disney Company, or their subsidiaries. Ticket purchases initiated through our links are fulfilled securely by GetYourGuide, our trusted primary ticketing partner.</p>
<h2>Affiliate Referral Disclosure</h2>
<p>When you purchase Disneyland Paris tickets through referral links on our site, we may receive an affiliate commission from our booking partner at no extra cost to you. This supports our ongoing operation and enables us to keep our visitor guides freely accessible.</p>
<p>Have questions before booking? Visit our <a href="/contact">contact page</a>.</p>`,
  metaTitle: "About Us | Disneyland Paris Tickets Guide",
  metaDescription:
    "Learn about our independent Disneyland Paris ticket guide, how we compare official park passes, and tips for booking.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow ?? DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading ?? DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading ?? DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image ?? DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt ?? DEFAULT_ABOUT.heroImageAlt,
    content: row.content ?? DEFAULT_ABOUT.content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveAboutPage(data: AboutPageContent): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content,
      meta_title, meta_description, canonical_url,
      no_index, no_follow, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage}, ${data.heroImageAlt},
      ${data.content},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.canonicalUrl || ""},
      ${!!data.noIndex}, ${!!data.noFollow}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}
