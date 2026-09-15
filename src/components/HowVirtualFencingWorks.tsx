import { Bell, Gauge, MapPinned } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MapPinned,
    title: "Set Your Boundaries",
    description:
      "Draw custom grazing zones right from the PawSync Farm app — no wires, no posts.",
  },
  {
    icon: Bell,
    title: "Collar Alerts",
    description:
      "As an animal nears the boundary, its collar gives an audio cue, then a brief, gentle pulse if it continues.",
  },
  {
    icon: Gauge,
    title: "Live Monitoring",
    description:
      "Track your whole herd's location and health in real time from one dashboard.",
  },
];

export default function HowVirtualFencingWorks() {
  return (
    <section
      id="how-virtual-fencing-works"
      aria-labelledby="how-virtual-fencing-heading"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-20 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-virtual-fencing-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            How virtual fencing works
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            No trenching, no physical fence lines — just a collar and a plan.
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
