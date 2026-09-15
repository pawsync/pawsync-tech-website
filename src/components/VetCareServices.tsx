import {
  Apple,
  Brain,
  HeartHandshake,
  ScissorsLineDashed,
  ShieldCheck,
  Siren,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

interface VetService {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "teal" | "orange" | "rose";
}

const services: VetService[] = [
  {
    icon: Stethoscope,
    title: "Routine Checkups",
    description: "Regular wellness exams to catch concerns early and keep pets healthy year-round.",
    accent: "teal",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Core and lifestyle vaccines tailored to your pet's age, species, and environment.",
    accent: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    description: "Parasite prevention, dental checks, and screenings that stop problems before they start.",
    accent: "rose",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    description: "Urgent triage and guidance to get pets the fastest possible path to care.",
    accent: "teal",
  },
  {
    icon: ScissorsLineDashed,
    title: "Spay / Neuter",
    description: "Safe, affordable spay and neuter surgery through our veterinary partners.",
    accent: "orange",
  },
  {
    icon: Apple,
    title: "Nutrition Consultation",
    description: "Personalized diet plans for weight, allergies, and life-stage nutrition needs.",
    accent: "rose",
  },
  {
    icon: Brain,
    title: "Behavioral Support",
    description: "Guidance for anxiety, reactivity, and other behavior changes that affect wellbeing.",
    accent: "teal",
  },
  {
    icon: HeartHandshake,
    title: "Foster Support",
    description: "Medical guidance and supplies for foster families caring for animals in transition.",
    accent: "orange",
  },
];

const accentClasses: Record<VetService["accent"], { bg: string; text: string; ring: string; dot: string }> = {
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

export default function VetCareServices() {
  return (
    <section
      id="vet-care-services"
      aria-labelledby="vet-care-services-heading"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="vet-care-services-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          Care for every stage of their life
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Simple, compassionate care to keep your companion feeling their
          best.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          const accent = accentClasses[service.accent];
          return (
            <article
              key={service.title}
              className={`group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.ring} dark:border-stone-800 dark:bg-stone-900`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`h-6 w-6 ${accent.text}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
