import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  return (
    <div className="relative overflow-hidden bg-[#FCF8F1]">
      {/* Main Hero Section */}
      <section
        id="top"
        className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden"
      >
        {/* Background Layer: Real Disneyland Paris Castle at Sunset with Fireworks */}
        <div className="absolute inset-0 select-none">
          {/* High-resolution castle photography positioned on the right */}
          <div className="relative h-full w-full">
            <Image
              src="/images/disneyland-paris-hero.jpg"
              alt="Disneyland Paris Sleeping Beauty Castle at sunset with fireworks"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[70%_center] lg:object-[80%_center]"
            />
          </div>

          {/* Smooth Left Gradient: Solid creamy background fading seamlessly into the castle sky */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCF8F1] via-[#FCF8F1]/95 via-35% md:via-48% to-transparent" />
        </div>

        {/* Hero Content Container — extra top padding (beyond the bottom
            padding) makes room for the new floating StickyHeader, which is
            transparent and overlapping the top ~5rem of this section until
            the page scrolls, matching chichen-itza's Hero.tsx. */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-32">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <p className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#D6A84F] mb-3 drop-shadow-sm">
              <span>THE MAGIC IS CLOSER THAN YOU THINK</span>
              <span className="text-base">✨</span>
            </p>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold leading-[1.08] tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-[3.85rem] text-[#102A5C]">
                Disneyland Paris
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.85rem] text-[#E94B83] mt-1">
                Tickets
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg font-medium text-[#252A35] leading-relaxed max-w-lg">
              Step into a world of magic, adventure and unforgettable memories!
            </p>

            {/* Checklist with pink badges (NO 'Official Tickets') */}
            <div className="mt-5 space-y-2.5">
              {[
                "Best Price Guarantee",
                "Instant Confirmation",
                "Direct Gate Access",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E94B83] text-white text-[11px] font-bold shadow-sm">
                    ✓
                  </span>
                  <span className="text-sm font-bold text-[#252A35]">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#102A5C] hover:bg-[#172F6B] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#102A5C]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE TICKETS</span>
                <span>→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#prices"}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#E94B83] bg-white hover:bg-[#E94B83]/10 px-6 py-3 text-sm font-bold text-[#E94B83] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>🎁</span>
                <span>VIEW OFFERS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Circular "BEST PRICE GUARANTEE" Badge on the right */}
        <div className="hidden md:flex absolute right-8 lg:right-24 bottom-14 z-20">
          <div className="relative flex h-36 w-36 lg:h-44 lg:w-44 flex-col items-center justify-center rounded-full border-4 border-[#E94B83] bg-white p-3 text-center shadow-2xl transition-transform duration-300 hover:scale-105">
            {/* Pink Castle Icon */}
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 lg:h-8 lg:w-8 text-[#E94B83]" stroke="currentColor" strokeWidth="2">
              <path d="M4 21V10L7 7L10 10V21H4Z" fill="#E94B83" fillOpacity="0.2" />
              <path d="M14 21V10L17 7L20 10V21H14Z" fill="#E94B83" fillOpacity="0.2" />
              <path d="M9 21V6L12 3L15 6V21H9Z" fill="#E94B83" />
              <circle cx="12" cy="3" r="1" fill="#E94B83" />
            </svg>
            <span className="mt-1 font-display text-[11px] lg:text-[13px] font-extrabold uppercase leading-tight text-[#E94B83] tracking-wide">
              BEST PRICE<br />GUARANTEE
            </span>
            <div className="mt-1 flex items-center gap-0.5 text-[#E94B83] text-xs">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>

        {/* Organic Bottom Wave Divider matching mockup */}
        <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16 block text-[#FCF8F1]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C280,64 540,12 840,40 C1140,64 1320,20 1440,32 L1440,64 L0,64 Z"
              fill="#FCF8F1"
            />
          </svg>
        </div>
      </section>

      {/* Trust & Features Strip directly below Hero */}
      <section className="relative z-20 border-t border-[#DCD8F2]/60 bg-[#FCF8F1] py-8 sm:py-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/10 text-[#E94B83]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#102A5C]">Instant Delivery</p>
                <p className="text-xs text-stone-600">Get your e-tickets instantly by email</p>
              </div>
            </div>

            {/* Feature 2: Guaranteed Entry (removed 'Official Tickets') */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/10 text-[#E94B83]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#102A5C]">Guaranteed Entry</p>
                <p className="text-xs text-stone-600">Direct gate access &amp; trusted partner</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/10 text-[#E94B83]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#102A5C]">Flexible Options</p>
                <p className="text-xs text-stone-600">Choose the ticket that fits your plans</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/10 text-[#E94B83]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#102A5C]">24/7 Support</p>
                <p className="text-xs text-stone-600">We&apos;re here to help you before &amp; during</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
