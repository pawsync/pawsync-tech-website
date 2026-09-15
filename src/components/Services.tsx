import { Apple, HeartHandshake, Stethoscope, type LucideIcon } from "lucide-react";
import Eyebrow from "./Eyebrow";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: string;
}

const services: Service[] = [
  {
    id: "medical-care",
    icon: Stethoscope,
    title: "Medical Care",
    description:
      "Full-service veterinary care, from routine check-ups and vaccinations to emergency treatment for pets in need.",
    points: ["Vaccinations & wellness exams", "Spay/neuter surgery", "24/7 emergency triage"],
    accent: "teal",
  },
  {
    id: "training-foster",
    icon: HeartHandshake,
    title: "Training & Foster",
    description:
      "Behavior training and a loving network of foster families that prepare rescued animals for their forever homes.",
    points: ["Positive-reinforcement training", "Short & long-term fostering", "Behavior support hotline"],
    accent: "orange",
  },
  {
    id: "nutrition-advice",
    icon: Apple,
    title: "Nutrition Advice",
    description:
      "Personalized diet plans from our nutrition specialists to keep pets healthy at every stage of life.",
    points: ["Breed-specific diet plans", "Weight management", "Special-needs feeding support"],
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

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>What We Offer</Eyebrow>
        <h2
          id="services-heading"
          className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          Services built around pet wellbeing
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Whatever your pet needs, our team of vets, trainers, and nutritionists
          is here to help.
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
