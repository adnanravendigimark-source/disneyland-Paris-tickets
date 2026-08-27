import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";
import "@/styles/disneyland-hero.css";

export default async function Hero() {
  const content = await getHomepageContent();

  const headingLines = (content.heroHeading || "Your Disneyland\nParis Adventure\nStarts Here")
    .split("\n")
    .filter(Boolean);
  const firstLine = headingLines[0] || "Your Disneyland";
  const lastLine = headingLines.length > 2 ? headingLines[headingLines.length - 1] : headingLines.length === 2 ? "" : "Starts Here";
  const middleLine = headingLines.length > 2 ? headingLines.slice(1, -1).join(" ") : headingLines[1] || "Paris Adventure";

  return (
    <section className="dlp-hero" id="top">
      {/* Hero Left Content Column */}
      <div className="dlp-heroLeft">
        {/* Eyebrow Pill */}
        <div className="dlp-eyebrow">
          <span className="dlp-star">★</span>
          <span>{content.heroBadge || "OFFICIAL TICKETS, UNFORGETTABLE MEMORIES"}</span>
        </div>

        {/* Heading with Whimsical Sparkles */}
        <div className="dlp-heading-wrapper">
          <h1 className="dlp-heading">
            <span className="dlp-heading-dark">{firstLine}</span>
            <br />
            <span className="dlp-heading-gradient">{middleLine}</span>
            {lastLine && (
              <>
                <br />
                <span className="dlp-heading-dark">{lastLine}</span>
              </>
            )}
          </h1>

          {/* Whimsical Doodle Sparkles */}
          <div className="dlp-doodle-sparkles" aria-hidden="true">
            <svg viewBox="0 0 54 54" fill="none" className="dlp-doodle-svg">
              {/* Star 1 */}
              <path
                d="M16 6 L18 16 L28 18 L18 20 L16 30 L14 20 L4 18 L14 16 Z"
                stroke="#873BCB"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Star 2 */}
              <path
                d="M38 18 L39.5 24 L45.5 25.5 L39.5 27 L38 33 L36.5 27 L30.5 25.5 L36.5 24 Z"
                stroke="#F04483"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="28" cy="8" r="1.5" fill="#873BCB" />
              <circle cx="8" cy="28" r="1.2" fill="#F04483" />
            </svg>
          </div>
        </div>

        {/* Subtitle Copy */}
        <p className="dlp-copy">
          {content.heroSubheading
            ? content.heroSubheading.replace(/<[^>]+>/g, "")
            : "Book official Disneyland Paris tickets online with instant e-delivery, best price guarantee, and 2-Park Hopper entry. Experience magical rides, spectacular shows, and unforgettable moments."}
        </p>

        {/* CTA Action Buttons */}
        <div className="dlp-actions">
          <a className="dlp-btn dlp-primary" href={content.heroCtaPrimaryHref || "#tours"}>
            <svg className="dlp-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
              <path d="M13 5v2" strokeLinecap="round" />
              <path d="M13 11v2" strokeLinecap="round" />
              <path d="M13 17v2" strokeLinecap="round" />
            </svg>
            <span>{(content.heroCtaPrimaryText || "Explore Tickets").toUpperCase()} →</span>
          </a>

          <a className="dlp-btn dlp-secondary" href={content.heroCtaSecondaryHref || "#prices"}>
            <svg className="dlp-btn-icon dlp-icon-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13" />
              <path d="M19 12H5" />
              <path d="M12 8H7.5a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8z" />
              <path d="M12 8h4.5a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8z" />
            </svg>
            <span>{(content.heroCtaSecondaryText || "See Ticket Prices").toUpperCase()}</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="dlp-benefits">
          <div className="dlp-benefit">
            <span className="dlp-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <span className="dlp-benefit-text">Best Price Guarantee</span>
          </div>

          <div className="dlp-benefit">
            <span className="dlp-benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <span className="dlp-benefit-text">Instant Confirmation</span>
          </div>

          <div className="dlp-benefit">
            <span className="dlp-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16.5" r="1" fill="currentColor" />
              </svg>
            </span>
            <span className="dlp-benefit-text">Guaranteed Entry</span>
          </div>
        </div>
      </div>

      {/* Hero Right Visual Column with Curved Mask */}
      <div className="dlp-heroRight">
        <div className="dlp-castle-container">
          <Image
            src={content.heroImage || "/images/disneyland-castle-hero.png"}
            alt={content.heroImageAlt || "Disneyland Paris castle with fireworks"}
            fill
            priority
            quality={95}
            sizes="(max-width: 960px) 100vw, 52vw"
            className="dlp-castle"
          />

          {/* Organic Wave Divider & Glow Border */}
          <div className="dlp-curve-glow" />

          {/* Whimsical Sparkles in the Twilight Sky */}
          <div className="dlp-sparkle dlp-s1">✦</div>
          <div className="dlp-sparkle dlp-s2">✧</div>
          <div className="dlp-sparkle dlp-s3">✦</div>
          <div className="dlp-sparkle dlp-s4">✧</div>
        </div>
      </div>

      {/* Bottom Left Mickey Wave Swoosh */}
      <div className="dlp-bottom-mickey-wave">
        <svg
          className="dlp-wave-path"
          viewBox="0 0 450 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dlpMickeyWaveGrad" x1="0%" y1="30%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="#7E38D8" />
              <stop offset="60%" stopColor="#D8428E" />
              <stop offset="100%" stopColor="#F04483" />
            </linearGradient>
            <linearGradient id="dlpMickeyWaveSoft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9A5AE1" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#F04B8C" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M-20 65 C 100 20, 240 85, 450 25 L 450 140 L -20 140 Z"
            fill="url(#dlpMickeyWaveSoft)"
          />
          <path
            d="M-20 80 C 90 35, 200 80, 400 45 L 420 140 L -20 140 Z"
            fill="url(#dlpMickeyWaveGrad)"
          />
        </svg>

        {/* Mickey Silhouette & Sparkles */}
        <div className="dlp-mickey-silhouette-group">
          <svg className="dlp-mickey-head-svg" viewBox="0 0 54 48" fill="#FFFFFF">
            <circle cx="27" cy="29" r="15" />
            <circle cx="12" cy="13" r="9.5" />
            <circle cx="42" cy="13" r="9.5" />
          </svg>
          <div className="dlp-mickey-stars-col">
            <span className="dlp-mickey-star dlp-mstar1">✦</span>
            <span className="dlp-mickey-star dlp-mstar2">+</span>
          </div>
          <span className="dlp-mickey-star dlp-mstar3">✧</span>
        </div>
      </div>
    </section>
  );
}
