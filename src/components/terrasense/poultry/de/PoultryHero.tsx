import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Cloud,
  Droplets,
  Fan,
  Thermometer,
  UtensilsCrossed,
  Wind,
} from "lucide-react";

const readout = [
  { icon: Thermometer, label: "Temperatur", value: "25,4 °C" },
  { icon: Droplets, label: "Luftfeuchtigkeit", value: "61 %" },
  { icon: Cloud, label: "Luftqualität", value: "Gut" },
  { icon: Droplets, label: "Wasserstand", value: "82 %" },
  { icon: UtensilsCrossed, label: "Futterstand", value: "68 %" },
  { icon: Fan, label: "Belüftung", value: "Auto" },
];

// A schematic representation of a poultry house cross-section with sensor
// nodes — not a photograph of a real facility.
const nodes = [
  { top: "18%", left: "16%" },
  { top: "18%", left: "50%" },
  { top: "18%", left: "84%" },
  { top: "62%", left: "30%" },
  { top: "62%", left: "70%" },
];

export default function PoultryHero() {
  return (
    <section aria-label="Einführung" className="relative overflow-hidden bg-[var(--ts-navy)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--ts-green)]/15 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-16 lg:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--ts-accent)] ring-1 ring-inset ring-white/10">
            <Bird className="h-4 w-4" aria-hidden="true" />
            Intelligente Geflügeltechnologie
          </span>

          <h1 className="mt-5 font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
            Intelligente Überwachung &amp; Automatisierung für moderne Geflügelfarmen
          </h1>

          <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-white/70">
            Kundenspezifische IoT-Geräte, Umweltüberwachung, Fütterungs- und
            Bewässerungssteuerung, Klimaautomatisierung, Sicherheitsalarme
            und vernetzte Elektronik für moderne Geflügelbetriebe.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
            <Link
              href="/de/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--ts-green)] px-6 py-3.5 text-base font-semibold text-[var(--ts-navy)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-accent)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-navy)]"
            >
              Geflügelprojekt besprechen
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#solutions"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-navy)]"
            >
              Geflügellösungen entdecken
            </Link>
          </div>
        </div>

        {/* Right: schematic poultry-house visual with sensor nodes + live dashboard readout */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] shadow-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* House silhouette */}
            <div className="absolute inset-x-[8%] bottom-[10%] top-[22%] rounded-2xl border border-white/15 bg-white/[0.03]" />
            <div className="absolute left-1/2 top-[10%] h-0 w-0 -translate-x-1/2 border-x-[3.5rem] border-b-[2.5rem] border-x-transparent border-b-white/[0.06]" />

            {nodes.map((n, i) => (
              <span
                key={i}
                className="absolute flex h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                style={{ top: n.top, left: n.left }}
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ts-accent)] opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--ts-accent)]" />
              </span>
            ))}

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <Wind className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
              Sensor-Layout — Beispielansicht
            </div>
          </div>

          {/* Live readout card */}
          <div className="absolute -bottom-6 left-1/2 w-[calc(100%-1.5rem)] max-w-xs -translate-x-1/2 rounded-2xl border border-white/10 bg-[var(--ts-navy)]/95 p-4 shadow-xl backdrop-blur sm:-bottom-8">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--ts-accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ts-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ts-accent)]" />
                </span>
                Stallklima — Live
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-white/60">
              {readout.map((row) => (
                <div key={row.label} className="flex items-center gap-1.5">
                  <row.icon className="h-3 w-3 text-white/40" aria-hidden="true" />
                  <span>
                    {row.label}: <span className="font-medium text-white/85">{row.value}</span>
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
