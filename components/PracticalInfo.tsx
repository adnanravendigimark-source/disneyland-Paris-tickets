import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section id="practical" className="bg-white py-20 border-y border-stone-200/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFB52E]/15 text-[#FFB52E] font-bold text-lg mb-4 border border-[#FFB52E]/30">
            ⏱
          </div>
          <h3 className="font-display text-xl font-bold text-[#10233F]">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-stone-100">
                  <td className="py-2.5 text-[#252A35]">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-[#10233F]">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-stone-500">{s.hoursNote}</p>
        </div>

        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F04483]/15 text-[#F04483] font-bold text-lg mb-4 border border-[#F04483]/30">
            📍
          </div>
          <h3 className="font-display text-xl font-bold text-[#10233F]">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[#252A35]">{s.address}</p>
          <p className="mt-3 text-xs font-semibold text-[#F04483]">{s.metro}</p>
        </div>

        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFB52E]/20 text-[#FFB52E] font-bold text-lg mb-4">
            💡
          </div>
          <h3 className="font-display text-xl font-bold text-[#10233F]">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-sm text-[#252A35]"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
