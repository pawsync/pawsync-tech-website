import Link from "next/link";
import { ArrowRight, HeartHandshake, Tractor } from "lucide-react";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Volunteer & Foster Impact",
    description:
      "From weekend adoption events to overnight foster care, PawSync volunteers and foster families show up for animals in every season — the reason so many pets ever make it to a listing at all.",
    href: "/get-involved?interest=volunteer",
    linkLabel: "Become a volunteer",
    accent: "orange" as const,
  },
  {
    icon: Tractor,
    title: "Farm & Livestock Impact",
    description:
      "Our Farm & Livestock program extends the same monitoring and welfare standards to ranches and working farms — bringing virtual fencing and health tracking to animals beyond the shelter.",
    href: "/livestock",
    linkLabel: "See the Livestock program",
    accent: "teal" as const,
  },
];

const accentClasses = {
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/40",
    text: "text-orange-600 dark:text-orange-300",
    link: "text-orange-700 dark:text-orange-400",
  },
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/40",
    text: "text-teal-600 dark:text-teal-300",
    link: "text-teal-700 dark:text-teal-400",
  },
};

export default function ImpactHighlights() {
  return (
    <section aria-labelledby="impact-highlights-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="impact-highlights-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          Impact beyond the shelter
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;
          const accent = accentClasses[item.accent];
          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg}`}>
                <Icon className={`h-6 w-6 ${accent.text}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {item.description}
              </p>
              <Link href={item.href} className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${accent.link}`}>
                {item.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
