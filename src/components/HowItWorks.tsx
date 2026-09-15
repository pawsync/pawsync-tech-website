import { ClipboardCheck, Heart, Home, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Eyebrow from "./Eyebrow";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Browse & Connect",
    description:
      "Explore adoptable pets by species, age, and breed to find the right match for your home.",
  },
  {
    icon: Heart,
    title: "Meet & Greet",
    description:
      "Schedule a visit to spend time together and make sure it's a great fit for everyone.",
  },
  {
    icon: ClipboardCheck,
    title: "Apply & Get Approved",
    description:
      "Complete a simple application — our team reviews it and follows up within days.",
  },
  {
    icon: Home,
    title: "Welcome Home",
    description:
      "Finalize the adoption and bring your new best friend home to start your life together.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-20 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Process</Eyebrow>
          <h2
            id="how-it-works-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            How PawSync works
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            From first hello to forever home, here&apos;s what adopting with
            us looks like.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="group relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-transform duration-300 group-hover:scale-110 dark:bg-orange-900/40">
                  <Icon className="h-8 w-8 text-orange-600 dark:text-orange-300" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white dark:bg-orange-500">
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
