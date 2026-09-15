import { HeartPulse, Radar, Tractor, type LucideIcon } from "lucide-react";

interface LivestockService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: string;
}

const services: LivestockService[] = [
  {
    id: "virtual-fencing",
    icon: Radar,
    title: "Virtual Fencing",
    description:
      "GPS-based virtual boundaries let cattle graze safely without traditional fencing. Adjust pasture zones remotely and get instant alerts if an animal nears the edge.",
    points: [
      "GPS smart collars",
      "Virtual pasture boundaries",
      "Real-time location tracking",
      "Boundary breach alerts",
      "Escape detection",
      "Remote boundary management",
    ],
    accent: "teal",
  },
  {
    id: "animal-health",
    icon: HeartPulse,
    title: "Animal Health",
    description:
      "Continuous health monitoring for your herd — track vitals and activity, catch early signs of illness, and get fast access to veterinary support.",
    points: [
      "Activity tracking",
      "Temperature monitoring",
      "Feeding & activity patterns",
      "Early illness indicators",
      "Automated health alerts",
      "Veterinary partner access",
    ],
    accent: "orange",
  },
  {
    id: "cattle-farming",
    icon: Tractor,
    title: "Cattle Farming",
    description:
      "Practical guidance for sustainable, productive cattle operations — from grazing rotation to breeding and nutrition planning.",
    points: [
      "Herd management dashboard",
      "Rotational grazing plans",
      "Breeding records",
      "Nutrition planning",
      "Productivity tracking",
    ],
    accent: "rose",
  },
];

const accentClasses: Record<
  string,
  { bg: string; text: string; ring: string; dot: string }
> = {
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/40",
    text: "text-teal-700 dark:text-teal-300",
    ring: "group-hover:ring-teal-300",
    dot: "bg-teal-600 dark:bg-teal-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/40",
    text: "text-orange-700 dark:text-orange-300",
    ring: "group-hover:ring-orange-300",
    dot: "bg-orange-600 dark:bg-orange-400",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/40",
    text: "text-rose-700 dark:text-rose-300",
    ring: "group-hover:ring-rose-300",
    dot: "bg-rose-600 dark:bg-rose-400",
  },
};

export default function LivestockServices() {
  return (
    <section
      id="livestock-services"
      aria-labelledby="livestock-services-heading"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="livestock-services-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          Built for the whole herd
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Technology and support designed around how working farms actually
          operate.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          const accent = accentClasses[service.accent];
          return (
            <article
              key={service.id}
              id={service.id}
              className={`group scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${accent.ring} dark:border-stone-800 dark:bg-stone-900`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-7 w-7 ${accent.text}`} aria-hidden="true" />
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
                {service.title}
              </h3>
              <p className="mt-3 text-stone-600 dark:text-stone-300">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-stone-600 dark:text-stone-400">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
