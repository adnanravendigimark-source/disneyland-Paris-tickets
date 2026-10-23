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
  slug: "disneyland-paris-tickets-guide-1-day-multi-day",
  title: "Disneyland Paris Tickets Explained: 1-Day, Multi-Day & Park Options",
  metaTitle: "Disneyland Paris Tickets Explained: 1-Day, Multi-Day & Guide",
  metaDescription: "Complete guide to Disneyland Paris tickets. Compare 1-day vs multi-day passes, 1-park vs 2-park hopper options, dated vs undated tickets, and booking tips.",
  category: "Ticket Guide",
  author: "Chloe Laurent / Paris Theme Park Specialist",
  excerpt: "Understand Disneyland Paris tickets with our complete breakdown of 1-day vs multi-day passes, 2-park hopper options, dated vs undated rules, and family booking advice.",
  quickAnswer: "Disneyland Paris tickets come as dated passes (which include guaranteed park entry and free cancellation up to 3 days prior) or undated passes (requiring advance date registration). For visits of 2 to 4 days, multi-day tickets automatically include unlimited 2-Park Hopper access between Disneyland Park and Walt Disney Studios Park. Always book online in advance, as on-site gate ticket booths are permanently closed.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T06:00:00.000Z",
  image: "https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-tickets-guide-sig7ivT1UbZqJ0BVAe8qNAhMcE0qCj.jpg",
  imageAlt: "Families and visitors walking along the floral central promenade towards the fairytale castle at Disneyland Paris",
  recommendedTourId: "disneyland-paris-dated-1-day-ticket",
  recommendedTourAfterBlock: 1,
  focusKeyword: "Disneyland Paris tickets",
  ctaHeading: "Ready to experience Disneyland Paris?",
  ctaBody: "Compare dated 1-day tickets, multi-day passes, and flexible booking options on our homepage.",
  ctaButtonText: "Compare Disneyland Paris Tickets →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.paris-land.com/blog/disneyland-paris-tickets-guide-1-day-multi-day",
  ogTitle: "Disneyland Paris Tickets Explained: 1-Day, Multi-Day & Park Options",
  ogDescription: "Complete guide to Disneyland Paris tickets. Compare 1-day vs multi-day passes, 1-park vs 2-park hopper options, dated vs undated tickets, and booking tips.",
  ogImage: "https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-tickets-guide-sig7ivT1UbZqJ0BVAe8qNAhMcE0qCj.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Located 32 kilometers east of Paris in Marne-la-Vallee, Disneyland Paris is Europe's premier theme park destination, welcoming millions of guests annually to Disneyland Park and Walt Disney Studios Park. Planning your trip begins with selecting the right admission. Because pricing varies by season, date, and park hopping flexibility, understanding how <strong>Disneyland Paris tickets</strong> work is essential for saving money and maximizing attraction time. From flexible single-day passes to multi-day hopper tickets, this guide explains every option so you can choose the ideal pass for your vacation.</p>

<div class="pro-tip-box">
  <span class="pro-tip-icon">💡</span>
  <div><strong>Essential 2026 Booking Rule:</strong> Physical ticket booths at the park entrance gates are permanently closed. All visitors must purchase their tickets online prior to arrival. Dated tickets include guaranteed entry, whereas undated tickets require a separate online reservation via the official Disney portal before you arrive.</div>
</div>

<h2>Understanding Ticket Types: Dated vs. Undated Tickets</h2>
<p>When selecting your <strong>Disneyland Paris tickets</strong>, your first choice is between dated and undated admission:</p>
<ul>
  <li><strong>Dated Tickets (Recommended):</strong> Locked to a specific calendar date (or consecutive dates for multi-day passes). Dated tickets provide guaranteed park entry without needing a separate reservation system. They follow seasonal pricing tiers (from value winter days to peak holiday pricing), allowing visitors to save substantially by choosing midweek off-peak dates. Furthermore, dated tickets booked online can be cancelled with a full refund up to 3 days before your visit.</li>
  <li><strong>Undated Tickets:</strong> Valid for one full year from purchase, undated passes offer maximum date flexibility. However, they are sold at a fixed premium rate and require registering your chosen date on the reservation calendar. During peak summer and holiday weeks, available slots fill up quickly, meaning admission is not guaranteed without an active reservation.</li>
</ul>

<h2>1-Day vs. Multi-Day Tickets: How Many Days Do You Need?</h2>
<p>Deciding how much time to spend across the resort dictates which ticket structure offers the greatest overall value.</p>

<h3>The Disneyland Paris 1-Day Ticket</h3>
<p>A <strong>Disneyland Paris 1-day ticket</strong> is designed for day-trippers visiting from central Paris via the RER A train. When purchasing a single-day pass, you choose between two tiers:</p>
<ul>
  <li><strong>1-Day / 1-Park Ticket:</strong> Grants access to either Disneyland Park or Walt Disney Studios Park for the entire day. You cannot switch between parks, making this option best if you wish to focus exclusively on classic fairytale attractions or Marvel Avengers Campus.</li>
  <li><strong>1-Day / 2-Park Ticket:</strong> Known as a Park Hopper pass, this <strong>Disneyland Paris 2-park ticket</strong> allows you to walk freely between both gates as often as you like throughout the day. Because the entrances sit only three minutes apart across the central esplanade, you can ride big thrill attractions at Studios in the afternoon and return to Disneyland Park for the evening castle fireworks.</li>
</ul>

<h3>Disneyland Paris Multi-Day Tickets (2, 3, or 4 Days)</h3>
<p>For visitors staying in nearby hotels or wanting a relaxed experience, <strong>Disneyland Paris multi-day tickets</strong> are the ultimate choice. Available in 2-day, 3-day, or 4-day options, multi-day passes automatically include <strong>unlimited 2-Park Hopper access</strong> for all days of your visit.</p>
<p>Multi-day tickets must be used on consecutive days starting on your chosen start date. Spreading your visit across two or three days allows you to experience headliner coasters, musical shows, and character encounters without feeling rushed by queues.</p>

<figure>
  <img src="https://gdmolfvgrdlj6gle.public.blob.vercel-storage.com/disneyland-paris-park-hopper-sTpX6HDfAnhqBst397poZrwUTIdEOc.jpg" alt="A smiling family holding park maps and 2-park hopper tickets between the entrances of Disneyland Park and Walt Disney Studios Park" />
  <figcaption>Multi-day park hopper tickets provide the freedom to cross between both theme parks in just three minutes, giving families the ultimate flexibility.</figcaption>
</figure>

<h2>Ticket Comparison at a Glance</h2>
<div class="ticket-comparison-wrapper">
  <table class="ticket-comparison-table">
    <thead>
      <tr>
        <th>Ticket Type</th>
        <th>Parks Included</th>
        <th>Park Hopping</th>
        <th>Ideal Visitor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1-Day / 1-Park Dated</strong></td>
        <td>1 Park Only</td>
        <td>No</td>
        <td>Short stopovers & single-park explorers</td>
      </tr>
      <tr>
        <td><strong>1-Day / 2-Park Dated</strong></td>
        <td>Both Parks</td>
        <td>Yes (Unlimited)</td>
        <td>Thrill-seekers & visitors with only one day</td>
      </tr>
      <tr>
        <td><strong>2-Day / 2-Park Hopper</strong></td>
        <td>Both Parks</td>
        <td>Yes (Consecutive)</td>
        <td>Couples & first-time visitors wanting complete highlights</td>
      </tr>
      <tr>
        <td><strong>3 or 4-Day Hopper</strong></td>
        <td>Both Parks</td>
        <td>Yes (Consecutive)</td>
        <td>Families with kids enjoying full shows and parades</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>How to Choose the Right Ticket for Your Group</h2>
<p>Matching your ticket choice to your travel party ensures a smooth, magical journey:</p>
<ul>
  <li><strong>First-Time Visitors (2-Day / 2-Park):</strong> First-timers should allocate at least two full days. Dedicate day one to Disneyland Park and day two to Walt Disney Studios Park, returning for the evening fireworks.</li>
  <li><strong>Families with Young Children (3-Day Hopper):</strong> Little legs tire quickly. A three-day ticket removes queue pressure, allowing afternoon hotel naps and evening return visits.</li>
  <li><strong>Couples & Thrill-Seekers (1-Day or 2-Day Hopper):</strong> If your priority is riding Big Thunder Mountain, Hyperspace Mountain, Crush's Coaster, and Tower of Terror, a 2-park ticket lets you bounce directly between headline thrills.</li>
</ul>

<h2>Smart Booking Advice and Common Mistakes to Avoid</h2>
<p>Keep these expert insider tips in mind when securing your passes:</p>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Book Dated Passes in Advance:</strong> Securing dated tickets online locks in the best price tier and guarantees admission.</li>
  <li><span class="check-circle">✓</span><strong>Download the Disneyland Paris App:</strong> Store your digital mobile barcodes, view real-time attraction wait times, and place mobile food orders.</li>
  <li><span class="check-circle">✓</span><strong>Avoid Showing Up Without Tickets:</strong> On-site ticket booths no longer operate; attempting to buy at the turnstiles will leave you stranded.</li>
  <li><span class="check-circle">✓</span><strong>Arrive for Park Opening:</strong> Aim to clear security checks 45 minutes before general opening to experience major rides with shorter morning queues.</li>
</ul>

<h2>Frequently Asked Questions About Disneyland Paris Tickets</h2>

<h3>Can I upgrade a 1-Park ticket to a 2-Park ticket on the day?</h3>
<p>Yes. If park capacity allows, you can upgrade your 1-Park ticket to a 2-Park Hopper ticket at City Hall or Studio Services by paying the price difference.</p>

<h3>Are Disneyland Paris dated tickets refundable?</h3>
<p>Yes. Standard dated 1-day tickets and multi-day passes booked online can be cancelled with a full refund up to 3 days before your scheduled arrival date.</p>

<h3>Is one day enough to visit both parks?</h3>
<p>While a 1-day 2-park ticket allows you to experience major headliners in both parks, it requires strict prioritization. Two full days are strongly recommended to see both parks comfortably.</p>

<h3>Do children require tickets at Disneyland Paris?</h3>
<p>Children aged 3 to 11 require a child ticket, which is discounted compared to adult admission. Children under 3 enter free without needing a ticket.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 800-1000 words)`);
  if (wordCount < 800 || wordCount > 1000) {
    throw new Error(`Word count ${wordCount} outside allowable 800-1000 range!`);
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
      category: p.category || "Ticket Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "6 min read",
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
      focusKeyword: p.focus_keyword || "Disneyland Paris tickets",
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
