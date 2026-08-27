import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section className="bg-gradient-to-b from-[#FFF8F1] via-white to-[#FFF8F1] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F04483]">
            {s.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#10233F] sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-3 text-base text-[#252A35]"
            dangerouslySetInnerHTML={{ __html: s.intro }}
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-[#10233F]">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-[#F04483]/30 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-[#F04483] ring-4 ring-[#F04483]/15" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F04483]">{row.time}</span>
                  <p className="mt-1 text-sm font-semibold text-[#252A35]">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm">
              <h3 className="font-display text-xl font-bold text-[#10233F]">{s.learnHeading}</h3>
              <ul className="mt-5 space-y-3">
                {s.learn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-[#EEE7FF]/30 border border-[#EEE7FF] p-3.5 text-sm text-[#252A35]">
                    <span className="text-[#F04483] font-bold">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-stone-500">{s.note}</p>
            </div>
          </div>
        </div>

        {s.extraItems.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-[#10233F]">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div key={point.name + i} className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition hover:border-[#F04483]/40">
                  <p className="text-sm font-bold text-[#F04483]">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#252A35]">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-[#FFB52E]/30 bg-gradient-to-r from-[#10233F] via-[#5B2BA8] to-[#10233F] p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">{s.ctaText}</p>
            <p className="text-xs text-[#FFB52E] mt-0.5 font-medium">{s.ctaSubtext}</p>
          </div>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-xl bg-[#F04483] hover:bg-[#d93d74] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#F04483]/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
