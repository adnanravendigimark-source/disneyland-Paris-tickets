"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = links && links.length ? links : defaultLinks;

  return (
    <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-semibold text-[#10233F] md:flex">
      {navLinks.map((link) => {
        const isAnchor = link.href.includes("#");
        const isActive = isAnchor ? false : link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={`relative py-1.5 transition-colors ${
              isActive
                ? "text-[#F04483] font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#F04483]"
                : "text-[#10233F] hover:text-[#F04483]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
