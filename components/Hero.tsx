import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";
import "@/styles/disneyland-hero.css";

// Ported directly from the reference implementation the site owner supplied
// in disneyland-paris-hero-code/nextjs/DisneylandHero.jsx — same markup,
// same class structure (see styles/disneyland-hero.css, prefixed "dlp-" so
// it can't collide with Tailwind), same castle asset (public/images/
// disneyland-castle-hero.png, pre-blended on its left edge so no separate
// gradient-overlay/blob-mask trick is needed here — the image itself
// already fades into the cream background).
export default async function Hero() {
  const content = await getHomepageContent();

  // The H1 is edited as a multi-row textarea in the admin. First and last
  // lines render plain (Deep Ink); any line(s) in between render inside the
  // pink-to-purple gradient <span>, matching the reference's 3-line "Your
  // Disneyland / Paris Adventure / Starts Here" with the middle line
  // gradient-highlighted.
  const headingLines = (content.heroHeading || "Your Disneyland\nParis Adventure\nStarts Here")
    .split("\n")
    .filter(Boolean);
  const firstLine = headingLines[0];
  const lastLine = headingLines.length > 1 ? headingLines[headingLines.length - 1] : "";
  const middleLines = headingLines.slice(1, headingLines.length > 1 ? -1 : undefined);

  return (
    <section className="dlp-hero" id="top">
      <section className="dlp-heroLeft">
        <div className="dlp-eyebrow">
          <span className="dlp-star">★</span>
          {content.heroBadge || "Official Tickets, Unforgettable Memories"}
        </div>

        <h1>
          {firstLine}
          {middleLines.map((line, i) => (
            <span key={i}>
              <br />
              {line}
            </span>
          ))}
          {lastLine && (
            <>
              <br />
              {lastLine}
            </>
          )}
        </h1>

        {/* Subtitle — admin edits this via a rich-text editor, so it's
            stripped to plain text here rather than interpolated raw. */}
        <p className="dlp-copy">
          {content.heroSubheading
            ? content.heroSubheading.replace(/<[^>]+>/g, "")
            : "Book official Disneyland Paris tickets online with instant e-delivery, best price guarantee, and 2-Park Hopper entry. Experience magical rides, spectacular shows, and unforgettable moments."}
        </p>

        <div className="dlp-actions">
          <a className="dlp-btn dlp-primary" href={content.heroCtaPrimaryHref || "#tours"}>
            🎟 &nbsp; {(content.heroCtaPrimaryText || "Explore Tickets").toUpperCase()} →
          </a>
          <a className="dlp-btn dlp-secondary" href={content.heroCtaSecondaryHref || "#prices"}>
            🎁 &nbsp; {(content.heroCtaSecondaryText || "See Ticket Prices").toUpperCase()}
          </a>
        </div>

        <div className="dlp-benefits">
          <div className="dlp-benefit">
            <span>♢</span>Best Price Guarantee
          </div>
          <div className="dlp-benefit">
            <span>ϟ</span>Instant Confirmation
          </div>
          <div className="dlp-benefit">
            <span>▣</span>Guaranteed Entry
          </div>
        </div>
      </section>

      <section className="dlp-heroRight">
        <Image
          src={content.heroImage || "/images/disneyland-castle-hero.png"}
          alt={content.heroImageAlt || "Disneyland Paris castle with fireworks"}
          fill
          priority
          quality={90}
          sizes="(max-width: 900px) 100vw, 46vw"
          className="dlp-castle"
        />

        <div className="dlp-sparkle dlp-s1">✦</div>
        <div className="dlp-sparkle dlp-s2">✧</div>
        <div className="dlp-sparkle dlp-s3">✦</div>

        <div className="dlp-stats">
          <div className="dlp-stat">
            <div>🏰</div>
            <strong>2 Parks</strong>
            <span>Endless Magic</span>
          </div>
          <div className="dlp-stat">
            <div>🎠</div>
            <strong>50+ Rides</strong>
            <span>Thrills & Fun</span>
          </div>
          <div className="dlp-stat">
            <div>✨</div>
            <strong>Spectacular Shows</strong>
            <span>Day & Night</span>
          </div>
        </div>
      </section>

      <div className="dlp-wave" />
    </section>
  );
}
