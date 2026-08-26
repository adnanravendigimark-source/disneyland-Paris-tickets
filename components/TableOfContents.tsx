import type { TocItem } from "@/lib/tableOfContents";

export default function TableOfContents({
  items,
  label = "In This Guide",
}: {
  items: TocItem[];
  label?: string;
}) {
  const sections = items.filter((item) => item.level === 2);
  if (sections.length < 2) return null;

  return (
    <div className="mt-8 rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/60 via-amber-50/30 to-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-red-600">{label}</p>
      <ul className="mt-3.5 space-y-2.5 text-sm">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 font-medium text-stone-700 transition hover:text-red-600 hover:translate-x-0.5"
            >
              <span aria-hidden="true" className="text-red-600 font-bold">
                ›
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
