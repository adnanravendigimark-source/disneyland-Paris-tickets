import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleData = {
  slug: "best-time-to-visit-disneyland-paris",
  title: "Best Time to Visit Disneyland Paris: Seasons, Crowds & Planning Tips",
  metaTitle: "Best Time to Visit Disneyland Paris 2026: Seasons, Crowds & Tips",
  metaDescription: "Discover the best time to visit Disneyland Paris. Complete guide on the best months, early morning arrivals, crowd avoidance tips, and seasonal festivals.",
  category: "Visitor Guide",
  author: "Chloe Laurent / Paris Theme Park Specialist",
  excerpt: "Discover the best time to visit Disneyland Paris, covering low season winter months, spring and autumn weather, rope drop strategy, and crowd tips.",
  quickAnswer: "The absolute best time to visit Disneyland Paris is from mid-January through February for the lowest crowds, or during shoulder months like May and September for pleasant weather. Midweek days (Tuesday through Thursday) consistently see shorter wait times than weekends.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T07:30:00.000Z",
  image: "https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-best-time-to-visit-GgLIteJSpBk21G2FvnCLDVEGbmAc5j.jpg",
  imageAlt: "Sleeping Beauty Castle at Disneyland Paris with pink towers and blue turrets under a bright sky",
  recommendedTourId: "disneyland-paris-dated-1-day-ticket",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to visit Disneyland Paris",
  ctaHeading: "Ready to experience Disneyland Paris?",
  ctaBody: "Compare dated 1-day tickets, multi-day passes, and flexible booking options on our homepage.",
  ctaButtonText: "Compare Disneyland Paris Tickets →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.paris-land.com/blog/best-time-to-visit-disneyland-paris",
  ogTitle: "Best Time to Visit Disneyland Paris: Seasons, Crowds & Planning Tips",
  ogDescription: "Expert guide on the best time to visit Disneyland Paris: seasonal crowd calendar, weather, rope drop tips, and seasonal events.",
  ogImage: "https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-best-time-to-visit-GgLIteJSpBk21G2FvnCLDVEGbmAc5j.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Planning a magical holiday to Disneyland Paris is a dream for millions of families each year, but navigating crowd surges and long attraction queues can quickly test your patience. Because park attendance swings dramatically between school holiday peaks and quiet winter weekdays, identifying the <strong>best time to visit Disneyland Paris</strong> is essential for maximizing ride time, enjoying seasonal entertainment, and securing the best ticket values.</p>

<div class="pro-tip-box"><span class="pro-tip-icon">💡</span><div><strong>Pro Tip for 2026 Visitors:</strong> Park capacity is strictly managed through dated tickets and advance reservations. Always purchase your dated 1-Day or multi-day passes online before traveling, as physical ticket windows at the entrance gates are closed and walk-up sales are no longer offered.</div></div>

<h2>Best Time of Day to Arrive at the Parks</h2>
<p>Daily crowd flow follows predictable patterns across both Disneyland Park and Walt Disney Studios Park. Taking advantage of key daily windows gives you a substantial head start:</p>
<ul>
  <li><strong>Rope Drop & Morning Opening (8:30 AM – 9:30 AM):</strong> Guests staying at Disney Hotels receive Extra Magic Time, granting entry one hour before the general public. If arriving with standard tickets, be at the security gates 30 to 45 minutes prior to general opening to experience headliner rides like Big Thunder Mountain and Crush's Coaster with minimal waits.</li>
  <li><strong>Late Evening & Nighttime (After 6:00 PM):</strong> Crowds thin considerably during dinner hours as families with young children exit. Ride wait times drop significantly, leaving the final hours before the nighttime castle drone and fireworks show ideal for walking onto popular Fantasyland attractions.</li>
</ul>

<h2>Best Months and Seasons to Visit</h2>
<p>Seasonal weather and European school calendars heavily dictate crowd volume in Marne-la-Vallée throughout the year.</p>

<h3>Low Season (Mid-January through February) — Lowest Crowds</h3>
<p>Following the Christmas holidays, mid-January through early February is the quietest period on the calendar. While Parisian winter weather is chilly and damp with occasional rain, weekday queues are exceptionally short. You will experience budget-friendly ticket tiers and stroll down Main Street, U.S.A. with spacious breathing room.</p>

<h3>Shoulder Seasons (March to May & September to Mid-October) — Ideal Balance</h3>
<p>Spring and early autumn offer the best overall combination of mild weather, moderate queue times, and full entertainment schedules. Spring brings blooming gardens around Sleeping Beauty Castle, while September offers crisp, sunny days after European school terms resume.</p>

<figure><img src="https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-castle-fireworks-4Qb5AHRwj8UTnEzh5wEbQXAbSJGJXg.jpg" alt="Spectacular fireworks and drone projections illuminating Sleeping Beauty Castle at Disneyland Paris" /><figcaption>Nighttime fireworks and projections lighting up Sleeping Beauty Castle, the pinnacle of every Disney day.</figcaption></figure>

<h3>Peak Holiday Seasons & Festive Events</h3>
<p>Summer (July and August) brings extended park hours and warm sunshine, but also maximum attendance and lengthy standby queues. Meanwhile, the Halloween Festival (October) and Disney's Enchanted Christmas (mid-November to early January) provide breathtaking holiday decorations and seasonal parades, though weekends require strategic planning.</p>

<h2>Essential Practical Tips for Planning Your Visit</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Download the Official App:</strong> Monitor live wait times, check parade schedules, and book Disney Premier Access passes directly from your phone.</li>
  <li><span class="check-circle">✓</span><strong>Target Midweek Days:</strong> Tuesdays, Wednesdays, and Thursdays consistently experience shorter queues than busy Friday through Sunday weekends.</li>
  <li><span class="check-circle">✓</span><strong>Use Single Rider Lines:</strong> Cut your wait time substantially on major thrills like Hyperspace Mountain and RC Racer by utilizing single rider queues.</li>
  <li><span class="check-circle">✓</span><strong>Dress for Changing Weather:</strong> Wear supportive athletic footwear and pack compact rain ponchos to stay prepared for unexpected Parisian showers.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, author, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.author}, ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      author = EXCLUDED.author,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Visitor Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "5 min read",
      date: dStr,
      updatedAt: uStr,
      author: p.author || "Chloe Laurent / Paris Theme Park Specialist",
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "disneyland-paris-dated-1-day-ticket",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to experience Disneyland Paris?",
      ctaBody: p.cta_body || "Compare dated 1-day tickets, multi-day passes, and flexible booking options on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Disneyland Paris Tickets →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "best time to visit Disneyland Paris",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || `https://www.paris-land.com/blog/${p.slug}`,
      ogTitle: p.og_title || p.meta_title || p.title,
      ogDescription: p.og_description || p.meta_description || p.excerpt,
      ogImage: p.og_image || p.image || ""
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log(`✓ Synchronized data/posts.json with ${jsonPosts.length} posts.`);

  console.log("\nArticle Seed Summary:");
  console.log("- Title:", articleData.title);
  console.log("- Slug:", articleData.slug);
  console.log("- Focus Keyword:", articleData.focusKeyword);
  console.log("- Word Count:", wordCount);
  console.log("- Cover Image:", articleData.image);
  console.log("- Public URL:", articleData.canonicalUrl);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
