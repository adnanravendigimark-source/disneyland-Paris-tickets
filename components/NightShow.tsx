import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

// Renamed from EveningCruise.tsx — this repo was copied from a boat-cruise
// sibling project and the file/section kept that project's naming even
// after the content was updated to Disneyland Paris's nighttime fireworks
// show. See lib/homepage.ts's NightShowSection for the matching data-model
// rename.
export default async function NightShow() {
  const { sections } = await getHomepageContent();
  const s = sections.nightShow;

  return (
    <section id="night-show" className="bg-[#DCEAF7]/30 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#102A5C]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#102A5C]">
            <span>✨</span> {s.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#102A5C] sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-4 text-base text-[#252A35]"
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
          <ul className="mt-6 space-y-3.5 text-sm font-medium text-[#252A35]">
            {s.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E94B83]/15 text-[#E94B83] text-xs font-bold">
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href={s.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#102A5C] via-[#172F6B] to-[#E94B83] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#102A5C]/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#E94B83]/30 hover:brightness-105 active:scale-[0.98]"
          >
            {s.ctaButtonText}
            <span>→</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-36 overflow-hidden rounded-2xl border border-stone-200/80 shadow-md sm:h-44 transition-all duration-300 hover:scale-[1.03] hover:border-[#E94B83]/50 hover:shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={70}
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/85 via-[#102A5C]/25 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F]" />
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
