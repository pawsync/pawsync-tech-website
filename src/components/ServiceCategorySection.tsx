import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface ServiceCategorySectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  items: ServiceItem[];
  accent: "orange" | "teal" | "amber";
  tone: "default" | "muted";
}

const accentClasses: Record<
  ServiceCategorySectionProps["accent"],
  { badge: string; iconBg: string; iconText: string; ring: string; link: string }
> = {
  orange: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    iconText: "text-orange-600 dark:text-orange-300",
    ring: "group-hover:ring-orange-300",
    link: "text-orange-700 dark:text-orange-400",
  },
  teal: {
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    iconText: "text-teal-600 dark:text-teal-300",
    ring: "group-hover:ring-teal-300",
    link: "text-teal-700 dark:text-teal-400",
  },
  amber: {
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconText: "text-amber-600 dark:text-amber-300",
    ring: "group-hover:ring-amber-300",
    link: "text-amber-700 dark:text-amber-400",
  },
};

// Shared building block for grouped service listings — used three times on
// the Services page (Pet Care / Farm & Livestock / Smart Technology) so the
// layout, spacing, and card style only need to be defined once.
export default function ServiceCategorySection({
  id,
  eyebrow,
  heading,
  description,
  items,
  accent,
  tone,
}: ServiceCategorySectionProps) {
  const accentStyle = accentClasses[accent];

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 py-16 sm:py-20 ${tone === "muted" ? "bg-stone-50 dark:bg-stone-950" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${accentStyle.badge}`}>
            {eyebrow}
          </span>
          <h2
            id={`${id}-heading`}
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">{description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accentStyle.ring} dark:border-stone-800 dark:bg-stone-900`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentStyle.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${accentStyle.iconText}`} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-stone-600 dark:text-stone-300">{item.description}</p>
                <Link
                  href={item.href}
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${accentStyle.link}`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
