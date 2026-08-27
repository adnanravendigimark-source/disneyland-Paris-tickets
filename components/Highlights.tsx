import { getHomepageContent } from "@/lib/homepage";

// Renamed from CanalHighlights.tsx — leftover name from the boat-cruise
// sibling repo this project was copied from; content is (and always was)
// the Disneyland "Why Visit" highlights grid, editable from
// /admin/homepage → Content tab (see lib/homepage.ts's HighlightsSection /
// DEFAULT_SECTIONS.highlights).
export default async function Highlights() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section id="highlights" className="bg-[#102A5C] py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-magic-glow opacity-60 mix-blend-soft-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D6A84F]/40 bg-[#D6A84F]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#D6A84F]">
          <span>✨</span> {s.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-white">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-[#DCEAF7] text-base">{s.subheading}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#E94B83]/60 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-[#102A5C]/40 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E94B83]/20 to-[#D6A84F]/20 text-2xl border border-[#D6A84F]/30 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-[#E94B83] transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-[#DCEAF7] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
