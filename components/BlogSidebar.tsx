"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import TableOfContents from "./TableOfContents";
import { CalendarIcon, SearchIcon, TicketIcon } from "./icons";
import type { Post } from "@/lib/posts";
import type { TocItem } from "@/lib/tableOfContents";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogSidebar({
  popularPosts,
  toc,
  tocLabel = "In This Guide",
  ctaHeading = "Compare Disneyland Paris Tickets & Passes",
  ctaBody = "Find 1-Day, Multi-Day, and Express Shuttle combo tickets in one place.",
  ctaButtonText = "Compare Tickets Now →",
}: {
  slug: string;
  popularPosts: Post[];
  toc: TocItem[];
  tocLabel?: string;
  ctaHeading?: string;
  ctaBody?: string;
  ctaButtonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const popular = popularPosts.slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex rounded-xl border border-stone-300 bg-white overflow-hidden shadow-sm focus-within:border-[#102A5C]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-transparent px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center bg-[#102A5C] px-3.5 text-white transition hover:bg-[#E94B83]"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </form>

      {/* Table of Contents */}
      <TableOfContents items={toc} label={tocLabel} />

      {/* Popular Articles */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
            POPULAR ARTICLES
          </p>
          <div className="mt-4 space-y-3.5">
            {popular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3"
              >
                <div className="relative h-13 w-16 shrink-0 aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                  <SafeImage
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    quality={65}
                    sizes="80px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#E94B83]">
                    {post.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <CalendarIcon className="h-3 w-3 text-[#102A5C]" />
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Compare Disneyland Paris Tickets Promo Card */}
      <div className="relative overflow-hidden rounded-2xl border border-[#DCD8F2] bg-gradient-to-br from-[#DCEAF7]/50 via-white to-[#FCF8F1] p-6 text-center shadow-sm">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A5C]/10 text-[#102A5C]">
          <TicketIcon className="h-5 w-5" />
        </div>
        <p className="mt-3.5 font-display text-base font-bold text-[#102A5C]">{ctaHeading}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-[#252A35]">{ctaBody}</p>
        <a
          href="/#tours"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#E94B83] hover:bg-[#d93d74] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:scale-[1.02]"
        >
          {ctaButtonText}
        </a>
      </div>

      {/* Newsletter Card */}
      <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
        <p className="font-display text-xs font-bold uppercase tracking-wider text-[#102A5C]">
          NEWSLETTER
        </p>
        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
          Get Disney trip tips, park guides and ticket deals straight to your inbox.
        </p>
        {subscribed ? (
          <p className="mt-3 text-xs font-semibold text-[#E94B83]">✓ Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
            <div className="flex rounded-lg border border-stone-300 bg-white overflow-hidden focus-within:border-[#102A5C]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full bg-transparent px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-[#102A5C] px-3 text-white transition hover:bg-[#E94B83]"
              >
                →
              </button>
            </div>
            <label className="flex items-start gap-1.5 text-[11px] text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-stone-300 text-[#102A5C] focus:ring-[#102A5C]"
              />
              <span>I agree to receive emails and updates.</span>
            </label>
          </form>
        )}
      </div>
    </aside>
  );
}
