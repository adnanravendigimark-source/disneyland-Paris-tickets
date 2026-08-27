import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

// Fixed icons for the 4 trust badges below the hero photo, matched by index
// to the feature copy below. Layout/structure ported from alhambra-tour's
// Hero.tsx (split photo + precise inline-gradient blend + bordered feature
// cards) — colors kept on Disney's own navy/pink/gold palette.
const HERO_FEATURE_ICONS = [
  <svg key="delivery" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="entry" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="flexible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="support" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <path d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const HERO_FEATURES = [
  { title: "Instant Delivery", body: "Get your e-tickets instantly by email" },
  { title: "Guaranteed Entry", body: "Direct gate access & trusted partner" },
  { title: "Flexible Options", body: "Choose the ticket that fits your plans" },
  { title: "24/7 Support", body: "We're here to help you before & during" },
];

export default async function Hero() {
  const content = await getHomepageContent();

  // The H1 is edited as a 2-row textarea in the admin so it can keep the
  // brand's two-tone "Disneyland Paris" (navy) / "Tickets" (pink) split —
  // first line navy, everything after it pink. Falls back to a single-tone
  // line if an admin ever collapses it to one line.
  const headingLines = (content.heroHeading || "Disneyland Paris\nTickets").split("\n").filter(Boolean);
  const [headingLine1, ...headingRest] = headingLines;
  const headingLine2 = headingRest.join(" ");

  return (
    <section id="top" className="relative w-full bg-[#FCF8F1] text-[#252A35] overflow-hidden">
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Right side image container */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
          <Image
            src={content.heroImage || "/images/disneyland-paris-fireworks.jpg"}
            alt={content.heroImageAlt || "Fireworks over Disneyland Paris Sleeping Beauty Castle at sunset"}
            fill
            priority
            quality={85}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
          {/* Gradient overlay — mobile and desktop need opposite treatment,
              same reasoning as alhambra-tour's Hero.tsx: on mobile the
              eyebrow/heading/subtitle/buttons/badges all stack directly on
              top of the full-bleed photo, so the overlay stays strong
              through most of the frame; on desktop the text sits in a
              separate solid-cream zone beside the photo, so the overlay
              only needs to be opaque right at that seam and the rest of the
              photo stays clear. Inline gradients (not Tailwind's via-color
              utilities) so the stop positions are exact. */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, #FCF8F1 0%, rgba(252,248,241,0.92) 60%, rgba(252,248,241,0.85) 85%, rgba(252,248,241,0.5) 100%)",
            }}
          />
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #FCF8F1 0%, rgba(252,248,241,0.65) 12%, rgba(252,248,241,0.15) 24%, transparent 38%)",
            }}
          />
        </div>

        {/* Hero Content Left Column — extra top padding makes room for the
            floating StickyHeader, transparent and overlapping the top
            ~5rem of this section until the page scrolls. */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20 z-10">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <p className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#E94B83] mb-3">
              <span>{content.heroBadge || "Official Disneyland Paris E-Tickets"}</span>
              <span className="text-base">✨</span>
            </p>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold leading-[1.05] tracking-tight mb-3">
              <span className="block text-5xl sm:text-6xl lg:text-[4.2rem] text-[#102A5C]">{headingLine1}</span>
              {headingLine2 && (
                <span className="block text-5xl sm:text-6xl lg:text-[4.2rem] text-[#E94B83] mt-1">{headingLine2}</span>
              )}
            </h1>

            {/* Subtitle — admin edits this via a rich-text editor, so it's
                stripped to plain text here rather than interpolated raw
                (otherwise any HTML it produces would show as literal
                visible tags). */}
            <p className="text-base sm:text-lg leading-relaxed text-[#252A35]/90 max-w-lg mb-8">
              {content.heroSubheading
                ? content.heroSubheading.replace(/<[^>]+>/g, "")
                : "Step into a world of magic, adventure and unforgettable memories!"}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#102A5C] hover:bg-[#172F6B] px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{content.heroCtaPrimaryText || "Explore Tickets"}</span>
                <span className="text-base">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#prices"}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#E94B83] bg-white hover:bg-[#E94B83]/10 px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-[#E94B83] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>🎁</span>
                <span>{content.heroCtaSecondaryText || "See Ticket Prices"}</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#252A35]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCD8F2] text-[#102A5C] text-xs font-bold">🛡️</span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCD8F2] text-[#102A5C] text-xs font-bold">⚡</span>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCD8F2] text-[#102A5C] text-xs font-bold">🎟️</span>
                <span>Guaranteed Entry</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Bar (Below Hero Image) */}
      <div className="border-t border-[#DCD8F2] bg-[#FCF8F1] py-7 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HERO_FEATURE_ICONS.map((icon, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl bg-white/70 p-4 border border-[#DCD8F2] shadow-xs">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/10 text-[#E94B83]">
                {icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#102A5C]">{HERO_FEATURES[i].title}</h4>
                <p className="text-xs text-[#252A35]/80 mt-0.5">{HERO_FEATURES[i].body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
