import Image from "next/image";
import { Fan } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const measurements = [
  "Temperatur", "Luftfeuchtigkeit", "CO2", "Ammoniak", "Luftqualität", "Lichtstärke",
  "Wasserstand", "Futterstand", "Luftstrom", "Gerätetemperatur",
];

const readout = [
  { label: "Temperatur", value: "25,6 °C" },
  { label: "Luftfeuchtigkeit", value: "63 %" },
  { label: "CO2", value: "Normal" },
  { label: "Ammoniak", value: "Normal" },
  { label: "Belüftung", value: "AN" },
  { label: "Futter", value: "71 %" },
  { label: "Wasser", value: "84 %" },
];

export default function PoultryEnvironmentalMonitoring() {
  return (
    <section aria-labelledby="poultry-env-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Umweltüberwachung</Eyebrow>
          <h2 id="poultry-env-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Ihr Stallklima rund um die Uhr im Blick
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            Im gesamten Betrieb verteilte Sensorknoten liefern ein
            einheitliches, laufend aktualisiertes Bild der Stallbedingungen.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=800&q=75"
              alt="Ein Huhn in einer Geflügelfarm-Umgebung, stellvertretend für eine überwachte Herdenumgebung"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ts-navy)]/40 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              Sensorabdeckung — Beispiellayout
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--ts-navy)]/8 bg-[var(--ts-navy)] p-6 shadow-xl sm:p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wide text-white">Stall 01</span>
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--ts-accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--ts-accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)]" aria-hidden="true" />
                Normal
              </span>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3.5 border-t border-white/10 pt-5">
              {readout.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-2 text-sm">
                  <dt className="text-white/50">{row.label}</dt>
                  <dd className="font-semibold text-white/90">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/40">
              <Fan className="h-3.5 w-3.5" aria-hidden="true" />
              Beispiel-Dashboard zur Veranschaulichung — Werte sind je Stall konfigurierbar.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {measurements.map((m) => (
            <span key={m} className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              {m}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[var(--ts-gray)]">
          Die Überwachungsdaten dienen der Unterstützung betrieblicher
          Entscheidungen und ersetzen keine tierärztliche Beurteilung oder
          Diagnose.
        </p>
      </div>
    </section>
  );
}
