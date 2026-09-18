import Link from "next/link";
import {
  ArrowRight,
  Battery,
  Cpu,
  Gauge,
  Radio,
  Satellite,
  ShieldCheck,
  Thermometer,
  Bluetooth,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const callouts = [
  { icon: Satellite, label: "GPS / GNSS", top: "6%", left: "50%" },
  { icon: Radio, label: "LoRa", top: "28%", left: "14%" },
  { icon: Bluetooth, label: "BLE", top: "28%", left: "86%" },
  { icon: Gauge, label: "Capteur de mouvement", top: "52%", left: "14%" },
  { icon: Thermometer, label: "Capteur de température", top: "52%", left: "86%" },
  { icon: Battery, label: "Batterie rechargeable", top: "76%", left: "14%" },
  { icon: Cpu, label: "MCU basse consommation", top: "76%", left: "86%" },
  { icon: ShieldCheck, label: "Boîtier résistant aux intempéries", top: "96%", left: "50%" },
];

const features = [
  "Localisation en temps réel",
  "Suivi de l'activité",
  "Alertes de zone virtuelle",
  "Connectivité longue portée",
  "Suivi de la batterie",
  "Données environnementales",
];

export default function EngineeredHardware() {
  return (
    <section aria-labelledby="engineered-hardware-heading" className="overflow-hidden bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Left: device visual with labeled callouts */}
        <div className="relative mx-auto flex h-[26rem] w-full max-w-sm items-center justify-center sm:h-[30rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[var(--ts-green)]/10 blur-3xl"
          />
          {/* Device silhouette — a collar-style enclosure */}
          <div className="relative flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.03] shadow-2xl backdrop-blur-sm sm:h-48 sm:w-48">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-[var(--ts-navy)] sm:h-28 sm:w-28">
              <Cpu className="h-9 w-9 text-[var(--ts-accent)]" aria-hidden="true" />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--ts-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--ts-navy)]">
              Boîtier de collier
            </span>
          </div>

          {callouts.map((c) => (
            <div
              key={c.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-medium text-white/70 backdrop-blur-sm sm:gap-1.5 sm:px-2.5 sm:text-[11px]"
              style={{ top: c.top, left: c.left }}
            >
              <c.icon className="h-3 w-3 text-[var(--ts-green)]" aria-hidden="true" />
              {c.label}
            </div>
          ))}
        </div>

        {/* Right: copy */}
        <div>
          <Eyebrow tone="dark">Conçu pour le terrain</Eyebrow>
          <h2
            id="engineered-hardware-heading"
            className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Matériel connecté conçu pour les animaux et les exploitations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Smart Livestock Tracking Device — un exemple de référence du
            type de matériel portable que nous concevons : robuste, basse
            consommation et conçu pour résister au quotidien sur une
            exploitation agricole.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-white/70">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-accent)]" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/fr/solutions#tracking-location"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-green)] px-6 py-3.5 text-base font-semibold text-[var(--ts-navy)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-accent)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-navy)]"
          >
            Découvrir le suivi des animaux
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
