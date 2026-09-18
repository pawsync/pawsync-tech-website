import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";

interface ServiceCardProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  locale?: Locale;
}

const learnMoreLabels: Record<Locale, string> = {
  en: "Learn more",
  de: "Mehr erfahren",
  fr: "En savoir plus",
};

export default function ServiceCard({ id, icon: Icon, title, description, href, locale = "en" }: ServiceCardProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] scale-x-0 rounded-t-2xl bg-gradient-to-r from-[var(--ts-green)] to-[var(--ts-accent)] transition-transform duration-300 origin-left group-hover:scale-x-100"
      />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-green)]">
          {learnMoreLabels[locale]}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      )}
    </>
  );

  const className =
    "group relative scroll-mt-24 overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]";

  if (href) {
    return (
      <Link id={id} href={href} className={`block ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <article id={id} className={className}>
      {content}
    </article>
  );
}
