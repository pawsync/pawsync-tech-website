import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

export interface ServiceScopeCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  options: { title: string; description: string }[];
  stages: string[];
  tradeoffsHeading: string;
  tradeoffs: { title: string; description: string }[];
  inquiryHeading: string;
  inquiry: string[];
  linksHeading: string;
  links: { label: string; href: string }[];
  note: string;
}

export default function ServiceScope({ id, copy }: { id: string; copy: ServiceScopeCopy }) {
  return (
    <section aria-labelledby={id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2 id={id} className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          {copy.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">{copy.intro}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {copy.options.map((option) => (
          <div key={option.title} className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
            <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{option.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{option.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {copy.stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              {stage}
            </span>
            {i < copy.stages.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{copy.tradeoffsHeading}</h3>
          <ul className="mt-4 space-y-4">
            {copy.tradeoffs.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-semibold text-[var(--ts-navy)]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{copy.inquiryHeading}</h3>
          <ul className="mt-4 space-y-3">
            {copy.inquiry.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--ts-gray)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          {copy.links.length > 0 && (
            <div className="mt-8 border-t border-[var(--ts-navy)]/8 pt-6">
              <p className="text-sm font-semibold text-[var(--ts-navy)]">{copy.linksHeading}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {copy.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--ts-dark-green)] underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[var(--ts-navy)]/8 bg-[var(--ts-dark-green)]/5 px-5 py-4 text-center text-sm leading-relaxed text-[var(--ts-gray)]">
        {copy.note}
      </p>
    </section>
  );
}
