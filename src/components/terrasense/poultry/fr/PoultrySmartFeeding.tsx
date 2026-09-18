import { ArrowDown, Cpu, Gauge, LayoutGrid, MonitorSmartphone, Radio, Settings2 } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const capabilities = [
  "Surveillance du niveau des silos", "Surveillance des trémies d'alimentation", "Programmation automatique de l'alimentation",
  "Contrôle des moteurs", "Surveillance des lignes d'alimentation", "Alertes de niveau d'aliment bas",
  "Détection de panne moteur", "État à distance du système d'alimentation", "Données de consommation d'aliment",
  "Contrôleurs de fourrage sur mesure",
];

const flow = [
  { icon: LayoutGrid, label: "Silo à aliment" },
  { icon: Gauge, label: "Capteur de niveau" },
  { icon: Cpu, label: "Contrôleur" },
  { icon: Settings2, label: "Moteur / vis d'alimentation" },
  { icon: Radio, label: "Passerelle de l'exploitation" },
  { icon: MonitorSmartphone, label: "Tableau de bord" },
];

export default function PoultrySmartFeeding() {
  return (
    <section aria-labelledby="poultry-feeding-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Alimentation intelligente</Eyebrow>
          <h2 id="poultry-feeding-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Systèmes d&apos;alimentation avicole intelligents
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
            Surveillance des niveaux et contrôle de la distribution, conçus
            selon vos silos, trémies et lignes d&apos;alimentation.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm text-[var(--ts-navy)]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-green)]" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* System architecture flow diagram */}
        <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-3xl border border-[var(--ts-navy)]/8 bg-[var(--ts-dark-green)]/5 p-6">
          {flow.map((step, i) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <step.icon className="h-4 w-4 shrink-0 text-[var(--ts-dark-green)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
