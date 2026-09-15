"use client";

import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

// Built on native <details>/<summary> — keyboard and screen-reader
// accessible by default, no custom ARIA wiring needed, and each item opens
// independently.
export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--ts-navy)]/10 rounded-2xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-manrope)] font-semibold text-[var(--ts-navy)] [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-[var(--ts-green)] transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ts-gray)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
