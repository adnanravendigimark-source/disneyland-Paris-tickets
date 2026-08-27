import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { getSiteChrome } from "@/lib/homepage";

export default async function Header() {
  const { header } = await getSiteChrome();

  return (
    <StickyHeader>
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo src={header.logoImage} alt={header.logoAlt} line1={header.logoLine1} line2={header.logoLine2} theme="light" />

        <HeaderNav links={header.navLinks} />

        <div className="flex items-center gap-3">
          <Link
            href={header.ctaHref || "/#tours"}
            className="hidden items-center gap-2 rounded-xl bg-[#7137D4] hover:bg-[#5B2BA8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#7137D4]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            {/* Ticket / Temple Icon */}
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h16M4 14h16M4 6h16M4 18h16M7 6v12M17 6v12" strokeLinecap="round" />
            </svg>
            <span>{header.bookNowText || "BOOK TICKETS"}</span>
          </Link>
          <MobileNav navLinks={header.navLinks} ctaText={header.ctaText} ctaHref={header.ctaHref} />
        </div>
      </div>
    </StickyHeader>
  );
}
