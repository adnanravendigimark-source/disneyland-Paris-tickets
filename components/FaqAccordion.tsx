"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

// True accordion: opening one question closes whichever one was previously
// open, instead of the old <details> markup where each item toggled
// independently and several could stay open (stacking the page) at once.
export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div
            key={f.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
              open ? "border-[#F04483]/40 shadow-md" : "border-stone-200/80"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-3 p-6 text-left font-semibold text-[#10233F]"
            >
              <span className="text-base">{f.question}</span>
              <span
                className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                  open
                    ? "rotate-45 bg-[#F04483] text-white"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <div
                className="rich-content mt-0 border-t border-stone-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-stone-600"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
