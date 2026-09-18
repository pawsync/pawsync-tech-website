import { AlertTriangle, Droplets, Thermometer, UtensilsCrossed, Users, Wifi } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";

const stats = [
  { icon: Users, label: "Tiere gesamt", value: "128" },
  { icon: Wifi, label: "Online", value: "124" },
  { icon: AlertTriangle, label: "Aktive Alarme", value: "3" },
  { icon: Thermometer, label: "Ø Temperatur", value: "24,8 °C" },
  { icon: Droplets, label: "Wasserstand", value: "78 %" },
  { icon: UtensilsCrossed, label: "Futterstand", value: "64 %" },
];

const alerts = [
  { title: "Rind #074 — Außerhalb der Zone", tone: "critical" as const },
  { title: "Stall 2 — Temperatur hoch", tone: "warning" as const },
  { title: "Wassertank 1 — Füllstand unter 25 %", tone: "warning" as const },
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
          <Eyebrow tone="dark">Echtzeit-Intelligenz</Eyebrow>
          <h2
            id="live-intelligence-heading"
            className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Sehen Sie, was auf Ihrem Hof passiert
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Beispielhafte Oberfläche, die zeigt, wie vernetzte PawSync-Hardware
            handlungsrelevante Hofdaten sichtbar machen kann.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
            Illustratives Dashboard · Demodaten
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
          <FarmMapDashboard locale="de" />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/70">Aktuelle Alarme</h3>
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
          Beispielwerte dienen nur zur Veranschaulichung.
        </p>
      </div>
    </section>
  );
}
