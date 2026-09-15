import { Building2, HeartHandshake, PawPrint } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Building2,
    title: "At the Shelter",
    description:
      "Microchip scanners and health monitors help our team track every animal's care from the moment they arrive.",
  },
  {
    icon: HeartHandshake,
    title: "During Fostering",
    description:
      "GPS trackers and smart feeders give foster families an easy way to keep routines consistent and stay in touch with us.",
  },
  {
    icon: PawPrint,
    title: "In Your New Home",
    description:
      "Adopters can keep using the same devices to settle in with confidence — and reach out any time with questions.",
  },
];

export default function WherePetTechHelps() {
  return (
    <section
      id="where-pet-tech-helps"
      aria-labelledby="where-pet-tech-helps-heading"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-20 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="where-pet-tech-helps-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Where this tech helps
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            The same tools follow an animal from intake to their forever
            home.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="group relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 transition-transform duration-300 group-hover:scale-110 dark:bg-teal-900/40">
                  <Icon className="h-8 w-8 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white dark:bg-teal-500">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
