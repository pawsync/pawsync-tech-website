import { ArrowRight, Bell, Cloud, Cpu, MonitorSmartphone, Rss, Thermometer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const workflow: { icon: LucideIcon; label: string }[] = [
  { icon: Thermometer, label: "Capteurs" },
  { icon: Cpu, label: "Contrôleur embarqué" },
  { icon: Rss, label: "Communication sans fil" },
  { icon: Cloud, label: "Cloud / passerelle locale" },
  { icon: MonitorSmartphone, label: "Tableau de bord / appli" },
  { icon: Bell, label: "Alertes & automatisation" },
];

const technologies = [
  "GPS / GNSS",
  "Bluetooth",
  "Wi-Fi",
  "LoRa / LoRaWAN",
  "LTE / Cellulaire",
  "RFID",
  "NFC",
  "UWB",
  "Capteurs de température",
  "Capteurs d'humidité",
  "Capteurs de mouvement",
  "Centrales inertielles (IMU)",
  "Capteurs de charge",
  "Capteurs de niveau d'eau",
  "Capteurs de qualité de l'air",
  "Caméras",
];

export default function TechnologyWorkflow() {
  return (
    <section aria-labelledby="tech-workflow-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2
            id="tech-workflow-heading"
            className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
          >
            Du capteur au smartphone
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            Chaque dispositif que nous concevons suit le même parcours de données fiable.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
          {workflow.map((step, index) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="flex w-32 flex-col items-center text-center sm:w-36">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[var(--ts-navy)]/8">
                  <step.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="mt-3 text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
              </div>
              {index < workflow.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-[var(--ts-green)] sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
