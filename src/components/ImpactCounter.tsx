import { HeartPulse, PawPrint, Radar, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Eyebrow from "./Eyebrow";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Radar,
    title: "Safer Pets",
    description: "GPS tracking and virtual fencing designed to help you find a pet the moment it wanders off.",
  },
  {
    icon: HeartPulse,
    title: "Smarter Monitoring",
    description: "Connected devices that surface activity and health signals worth a closer look.",
  },
  {
    icon: PawPrint,
    title: "Better Animal Health",
    description: "Veterinary partnerships and health data working together, not in separate silos.",
  },
  {
    icon: ShieldCheck,
    title: "Connected Care",
    description: "Adoption, veterinary support, and smart technology under one roof — not scattered across apps.",
  },
];

export default function ImpactCounter() {
  return (
    <section
      id="impact-stats"
      aria-labelledby="impact-heading"
      className="bg-teal-700 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">What We&apos;re Building Toward</Eyebrow>
          <h2
            id="impact-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our impact, together
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            PawSync connects smart technology with hands-on animal
            care. Here&apos;s what that means in practice.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <pillar.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold">{pillar.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-teal-100">{pillar.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
