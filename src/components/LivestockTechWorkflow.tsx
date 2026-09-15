import { ArrowRight, Bell, Cloud, MonitorSmartphone, Radar, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const workflow: { icon: LucideIcon; label: string }[] = [
  { icon: Radar, label: "GPS Smart Collar" },
  { icon: Radio, label: "Wireless Communication" },
  { icon: Cloud, label: "PawSync Platform" },
  { icon: MonitorSmartphone, label: "Farmer Dashboard / Mobile App" },
  { icon: Bell, label: "Alerts & Analytics" },
];

export default function LivestockTechWorkflow() {
  return (
    <section
      aria-labelledby="livestock-tech-workflow-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="livestock-tech-workflow-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          How the technology connects
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          From collar to dashboard, here&apos;s the path your data takes.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
        {workflow.map((step, index) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className="flex w-32 flex-col items-center text-center sm:w-36">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 shadow-sm dark:bg-teal-900/40">
                <step.icon className="h-6 w-6 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              </div>
              <span className="mt-3 text-sm font-semibold text-stone-900 dark:text-stone-50">{step.label}</span>
            </div>
            {index < workflow.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-orange-500 sm:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
