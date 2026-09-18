import { AlertTriangle, Droplets, Thermometer, UtensilsCrossed, Users, Wifi } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";

const stats = [
  { icon: Users, label: "Total des animaux", value: "128" },
  { icon: Wifi, label: "En ligne", value: "124" },
  { icon: AlertTriangle, label: "Alertes actives", value: "3" },
  { icon: Thermometer, label: "Temp. moyenne", value: "24,8 °C" },
  { icon: Droplets, label: "Niveau d'eau", value: "78 %" },
  { icon: UtensilsCrossed, label: "Niveau d'aliment", value: "64 %" },
];

const alerts = [
  { title: "Bovin n°074 — Hors zone", tone: "critical" as const },
  { title: "Bâtiment 2 — Température élevée", tone: "warning" as const },
  { title: "Réservoir d'eau 1 — Niveau sous 25 %", tone: "warning" as const },
];

export default function LiveIntelligence() {
  return (
    <section aria-labelledby="live-intelligence-heading" className="relative overflow-hidden bg-[var(--ts-navy)] py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Intelligence en temps réel</Eyebrow>
          <h2
            id="live-intelligence-heading"
            className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Visualisez ce qui se passe sur votre exploitation
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Interface d&apos;exemple illustrant comment le matériel PawSync
            connecté peut faire remonter des données exploitables sur
            l&apos;exploitation.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
            Tableau de bord illustratif · Données de démonstration
          </span>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <stat.icon className="h-4 w-4 text-[var(--ts-accent)]" aria-hidden="true" />
              <p className="mt-2 text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[11px] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <FarmMapDashboard locale="fr" />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/70">Alertes récentes</h3>
            <ul className="mt-4 space-y-3">
              {alerts.map((alert) => (
                <li
                  key={alert.title}
                  className={`flex items-start gap-2.5 rounded-xl border p-3 text-sm ${
                    alert.tone === "critical"
                      ? "border-red-400/20 bg-red-400/10 text-red-200"
                      : "border-amber-400/20 bg-amber-400/10 text-amber-200"
                  }`}
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {alert.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Chiffres fournis à titre d&apos;exemple uniquement.
        </p>
      </div>
    </section>
  );
}
