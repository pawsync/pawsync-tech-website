import {
  AlertTriangle,
  Bell,
  Cpu,
  Droplets,
  Fan,
  Flame,
  Snowflake,
  Terminal,
  Thermometer,
  Wind,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const connected = [
  { icon: Thermometer, label: "Capteurs de température" },
  { icon: Droplets, label: "Capteurs d'humidité" },
  { icon: Wind, label: "Capteurs de qualité de l'air" },
  { icon: Fan, label: "Ventilateurs" },
  { icon: Flame, label: "Chauffages" },
  { icon: Snowflake, label: "Système de refroidissement" },
  { icon: Wind, label: "Ventilation" },
  { icon: AlertTriangle, label: "Système d'alarme" },
];

const rules = [
  {
    condition: "Température > limite haute configurée",
    action: "Augmenter la ventilation",
    extra: "Envoyer une alerte",
  },
  {
    condition: "Température < limite basse configurée",
    action: "Activer le chauffage",
  },
  {
    condition: "La qualité de l'air atteint le niveau d'alerte configuré",
    action: "Augmenter la ventilation",
    extra: "Notifier l'opérateur",
  },
];

export default function PoultryClimateAutomation() {
  return (
    <section aria-labelledby="poultry-climate-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Automatisation du climat</Eyebrow>
          <h2 id="poultry-climate-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contrôle climatique automatisé du bâtiment avicole
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Un seul contrôleur, connecté aux capteurs et équipements qui
            maintiennent les conditions du bâtiment dans la plage souhaitée.
          </p>
        </div>

        {/* Controller diagram */}
        <div className="mt-12 flex flex-col items-center">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {connected.slice(0, 4).map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <item.icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                </div>
                <span className="text-[10px] text-white/50">{item.label}</span>
              </div>
            ))}
            {connected.slice(4).map((item) => (
              <div key={item.label} className="hidden flex-col items-center gap-1.5 text-center sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <item.icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                </div>
                <span className="text-[10px] text-white/50">{item.label}</span>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="h-6 w-px bg-white/15" />
          <div className="flex items-center gap-2 rounded-2xl border border-[var(--ts-accent)]/30 bg-[var(--ts-accent)]/10 px-5 py-3">
            <Cpu className="h-5 w-5 text-[var(--ts-accent)]" aria-hidden="true" />
            <span className="text-sm font-bold text-[var(--ts-accent)]">Contrôleur de bâtiment avicole</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3 sm:hidden">
            {connected.slice(4).map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <item.icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                </div>
                <span className="text-[10px] text-white/50">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Automation rule examples */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {rules.map((rule) => (
            <div key={rule.condition} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs leading-relaxed text-[var(--ts-accent)]">
              <div className="flex items-start gap-2">
                <Terminal className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/40" aria-hidden="true" />
                <div>
                  <p><span className="text-white/40">SI</span> {rule.condition}</p>
                  <p className="mt-1.5"><span className="text-white/40">ALORS</span> {rule.action}</p>
                  {rule.extra && (
                    <p className="mt-1.5"><span className="text-white/40">ET</span> {rule.extra}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-white/40">
          <Bell className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Les seuils et la logique de contrôle sont configurables selon les
          exigences de l&apos;exploitation.
        </p>
      </div>
    </section>
  );
}
