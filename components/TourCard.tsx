import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import type { Tour } from "@/lib/data";
import { LockIcon } from "./icons";

export default function TourCard({
  tour,
  recommended,
  bookNowText = "Book Tickets",
}: {
  tour: Tour;
  recommended?: {
    badgeLabel: string;
    reasons: string[];
    urgencyText: string;
  };
  bookNowText?: string;
}) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 ${
        recommended
          ? "border-2 border-[#F04483] shadow-lg shadow-[#F04483]/15 hover:shadow-2xl hover:shadow-[#F04483]/25 ring-1 ring-[#F04483]/20"
          : "border border-stone-200/80 shadow-sm hover:border-[#10233F]/40 hover:shadow-xl hover:shadow-[#10233F]/10"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <SafeImage
          src={tour.image}
          alt={tour.imageAlt}
          fill
          quality={70}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/60 via-transparent to-black/10" />

        {(recommended || tour.ribbon) && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#10233F] via-[#5B2BA8] to-[#F04483] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md border border-white/20">
            <span>★</span>
            {recommended ? recommended.badgeLabel : tour.ribbon}
          </span>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-[#10233F] shadow-md backdrop-blur-md">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[3.25rem] font-display text-lg font-bold leading-snug text-[#10233F] line-clamp-2 group-hover:text-[#F04483] transition-colors">
          {tour.title}
        </h3>
        <div
          className="rich-content mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-[#252A35] [&>p]:m-0 [&>p]:line-clamp-2"
          dangerouslySetInnerHTML={{ __html: tour.description }}
        />

        {/* First 3 admin "Includes" items, boxed. */}
        <div className="mt-4 space-y-1.5">
          {tour.includes.slice(0, 3).map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-md bg-[#FFF8F1] px-2.5 py-1.5 text-[11.5px] text-[#252A35] border border-[#EEE7FF]/60"
            >
              <span className="mt-0.5 text-[#F04483] font-bold shrink-0">✓</span>
              <span className="leading-tight font-medium line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {tour.duration && <p className="mt-2.5 text-xs font-semibold text-[#10233F]/75">⏱ {tour.duration}</p>}

        {/* Footer */}
        {recommended ? (
          <div className="mt-auto border-t border-[#EEE7FF] pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">from</p>
                <span className="font-display text-2xl font-extrabold text-[#10233F]">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F04483] to-[#d93d74] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#F04483]/30 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#F04483]/40 hover:brightness-105 active:scale-[0.98]"
              >
                {bookNowText}
              </a>
            </div>
            {recommended.urgencyText && (
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs font-bold text-[#FFB52E]">
                <LockIcon className="h-3.5 w-3.5" />
                <span>{recommended.urgencyText}</span>
              </p>
            )}
          </div>
        ) : (
          <div className="mt-auto border-t border-stone-100 pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">from</p>
                <span className="font-display text-2xl font-extrabold text-[#10233F]">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#10233F] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#F04483] hover:shadow-md hover:shadow-[#F04483]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {bookNowText}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
