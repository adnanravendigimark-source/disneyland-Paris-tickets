import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  return (
    <section id="prices" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E94B83]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-[#102A5C] sm:text-4xl">{s.heading}</h2>
        <div
          className="rich-content mt-3 text-base text-[#252A35]"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-stone-200/80 bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#102A5C] text-white">
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-[#DCEAF7]/30 ${
                  tour.featured ? "bg-[#FCF8F1] font-medium" : i % 2 ? "bg-stone-50/60" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-[#102A5C]">{tour.title}</td>
                <td className="px-6 py-4 font-extrabold text-[#E94B83]">
                  €{tour.price} <span className="font-normal text-xs text-stone-500">/ pass</span>
                </td>
                <td className="px-6 py-4 text-[#252A35]">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-[#252A35]">{tour.priceTableFeature || "Standard Gate Entry"}</td>
                <td className="px-6 py-4 text-[#252A35]">{tour.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-xl bg-gradient-to-r from-[#E94B83] to-[#d93d74] px-4 py-2 text-xs font-bold text-white shadow-sm shadow-[#E94B83]/20 transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:shadow-[#E94B83]/30 hover:brightness-105 active:scale-[0.98]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 text-xs text-stone-500">{s.note}</p>
    </section>
  );
}
