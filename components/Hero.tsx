import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

// Redesigned to match the provided mockup: a blob-radius photo panel with a
// floating stats card, a gradient middle heading line, decorative sparkles,
// and a purple-to-pink gradient wave divider at the bottom of the section.
// New brand palette (per the shared color table):
//   #10233F Deep Ink (headings)   #7137D4 Magic Purple (primary CTA)
//   #F04483 Pink (secondary CTA)  #FFF8F1 Soft Cream (hero background)
//   #EEE7FF Lavender (icon fills) #FFB52E Gold (small accents)

const STAT_ITEMS = [
  {
    label: "2 Parks",
    sub: "Endless Magic",
    color: "#7137D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 2 9 8H3l5 4-2 8 6-4 6 4-2-8 5-4h-6l-3-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "50+ Rides",
    sub: "Thrills & Fun",
    color: "#F04483",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Spectacular Shows",
    sub: "Day & Night",
    color: "#FFB52E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default async function Hero() {
  const content = await getHomepageContent();

  // The H1 is edited as a multi-row textarea in the admin. First and last
  // lines render in Deep Ink; anything in between renders in the pink-to-
  // purple gradient — matches the 3-line "Your Disneyland / Paris Adventure
  // / Starts Here" mockup while still degrading gracefully for a shorter
  // admin-entered heading.
  const headingLines = (content.heroHeading || "Your Disneyland\nParis Adventure\nStarts Here")
    .split("\n")
    .filter(Boolean);
  const firstLine = headingLines[0];
  const lastLine = headingLines.length > 1 ? headingLines[headingLines.length - 1] : "";
  const middleLines = headingLines.slice(1, headingLines.length > 1 ? -1 : undefined);

  return (
    <section id="top" className="relative w-full bg-[#FFF8F1] overflow-hidden">
      <div className="relative min-h-[620px] lg:min-h-[680px]">
        {/* Right side image panel — inset from the section edges with a big
            asymmetric radius on the left/top-left/bottom-left to approximate
            the mockup's organic "blob" photo shape blending into the cream
            background, instead of a hard-edged rectangle. */}
        <div className="absolute right-0 top-6 bottom-28 left-1/2 hidden lg:block overflow-hidden rounded-[3rem] rounded-l-[220px] shadow-2xl shadow-[#7137D4]/20">
          <Image
            src={content.heroImage || "/images/disneyland-paris-fireworks.jpg"}
            alt={content.heroImageAlt || "Fireworks over Disneyland Paris Sleeping Beauty Castle at sunset"}
            fill
            priority
            quality={85}
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
        {/* Mobile: same photo, full-bleed behind the text with a strong
            bottom-up cream fade so the stacked content stays legible. */}
        <div className="absolute inset-x-0 top-0 h-[340px] lg:hidden overflow-hidden rounded-b-[4rem]">
          <Image
            src={content.heroImage || "/images/disneyland-paris-fireworks.jpg"}
            alt={content.heroImageAlt || "Fireworks over Disneyland Paris Sleeping Beauty Castle at sunset"}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #FFF8F1 0%, rgba(255,248,241,0.6) 45%, transparent 80%)",
            }}
          />
        </div>

        {/* Decorative sparkles near the top of the text column */}
        <svg viewBox="0 0 24 24" fill="#7137D4" className="hidden lg:block absolute left-[46%] top-16 h-6 w-6 opacity-70" aria-hidden="true">
          <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#F04483" className="hidden lg:block absolute left-[41%] top-32 h-3.5 w-3.5 opacity-70" aria-hidden="true">
          <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
        </svg>

        {/* Hero Content Left Column — extra top padding makes room for the
            floating StickyHeader, transparent and overlapping the top
            ~5rem of this section until the page scrolls. */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-[380px] pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 rounded-full border border-[#7137D4]/25 bg-[#EEE7FF] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-[#7137D4] mb-5">
              <svg viewBox="0 0 24 24" fill="#F04483" className="h-3.5 w-3.5 shrink-0">
                <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
              </svg>
              <span>{content.heroBadge || "Official Tickets, Unforgettable Memories"}</span>
            </p>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold leading-[1.08] tracking-tight mb-4 text-4xl sm:text-5xl lg:text-[3.4rem]">
              <span className="block text-[#10233F]">{firstLine}</span>
              {middleLines.map((line, i) => (
                <span
                  key={i}
                  className="block bg-gradient-to-r from-[#F04483] to-[#7137D4] bg-clip-text text-transparent"
                >
                  {line}
                </span>
              ))}
              {lastLine && <span className="block text-[#10233F]">{lastLine}</span>}
            </h1>

            {/* Subtitle — admin edits this via a rich-text editor, so it's
                stripped to plain text here rather than interpolated raw. */}
            <p className="text-base sm:text-lg leading-relaxed text-[#252A35]/80 max-w-lg mb-8">
              {content.heroSubheading
                ? content.heroSubheading.replace(/<[^>]+>/g, "")
                : "Book official Disneyland Paris tickets online with instant e-delivery, best price guarantee, and 2-Park Hopper entry."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#7137D4] hover:bg-[#5B2BA8] px-7 py-3.5 text-sm font-bold tracking-wide uppercase text-white shadow-lg shadow-[#7137D4]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M4 10h16M4 14h16M4 6h16M4 18h16M7 6v12M17 6v12" strokeLinecap="round" />
                </svg>
                <span>{content.heroCtaPrimaryText || "Explore Tickets"}</span>
                <span className="text-base">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#prices"}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#F04483] bg-white hover:bg-[#F04483]/10 px-6 py-3.5 text-sm font-bold tracking-wide uppercase text-[#F04483] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M20 12v9H4v-9M2 7h20v5H2V7zM12 7v14M12 7c-1.5-3-6-3-6 0s4.5 3 6 0zM12 7c1.5-3 6-3 6 0s-4.5 3-6 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{content.heroCtaSecondaryText || "See Ticket Prices"}</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#10233F]">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE7FF] text-[#7137D4]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5l-8-3z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE7FF] text-[#F04483]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE7FF] text-[#FFB52E]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <rect x="4" y="10" width="16" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Guaranteed Entry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats card — overlaps the bottom of the image panel,
            matching the mockup's white card straddling the photo/wave
            boundary. Desktop only; mobile shows it stacked in normal flow
            instead since there's no room to float it. */}
        <div className="hidden lg:flex absolute right-10 bottom-14 z-10 items-stretch divide-x divide-stone-100 rounded-2xl bg-white px-8 py-6 shadow-xl shadow-[#10233F]/10">
          {STAT_ITEMS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 px-6 first:pl-0 last:pr-0 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEE7FF]" style={{ color: stat.color }}>
                {stat.icon}
              </span>
              <span className="font-display text-sm font-extrabold text-[#10233F]">{stat.label}</span>
              <span className="text-xs text-[#252A35]/60">{stat.sub}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 px-4 pb-10 lg:hidden">
          {STAT_ITEMS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white p-3 text-center shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE7FF]" style={{ color: stat.color }}>
                {stat.icon}
              </span>
              <span className="font-display text-xs font-extrabold text-[#10233F]">{stat.label}</span>
              <span className="text-[10px] text-[#252A35]/60">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient wave divider */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-20 sm:h-28 lg:h-32" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7137D4" />
              <stop offset="100%" stopColor="#F04483" />
            </linearGradient>
          </defs>
          <path d="M0,48 C240,90 480,10 720,36 C960,62 1200,100 1440,52 L1440,140 L0,140 Z" fill="url(#heroWaveGradient)" />
        </svg>
        <div className="absolute bottom-4 left-6 sm:left-10 flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="#ffffff" className="h-7 w-7 opacity-90">
            <circle cx="12" cy="13" r="7" />
            <circle cx="5.5" cy="6" r="3" />
            <circle cx="18.5" cy="6" r="3" />
          </svg>
          <svg viewBox="0 0 24 24" fill="#ffffff" className="h-3 w-3 opacity-80">
            <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="#ffffff" className="h-2 w-2 opacity-70">
            <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
