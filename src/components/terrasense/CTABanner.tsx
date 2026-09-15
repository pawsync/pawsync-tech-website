import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  icon?: LucideIcon;
}

export default function CTABanner({
  eyebrow,
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  icon: Icon = ArrowRight,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--ts-dark-green)] py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--ts-accent)]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[var(--ts-accent)]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-inset ring-white/20">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
          {description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-green)] px-6 py-3.5 text-base font-semibold text-[var(--ts-navy)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-accent)] hover:shadow-lg active:translate-y-0"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[var(--ts-navy)] active:translate-y-0"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
