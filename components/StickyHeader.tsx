"use client";

import { useEffect, useState } from "react";

// Ported from chichen-itza's StickyHeader — starts fully transparent and
// overlapping the hero (pulled up with -mb-20 so it takes no doc-flow
// space), then crossfades to a solid blurred bar once the page scrolls
// past 20px. See Hero.tsx's extra top padding for the space this floating
// header needs while transparent.
export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent -mb-20 border-0"
      }`}
    >
      {children}
    </header>
  );
}
