import {
  Bell,
  Flame,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Radio,
  Siren,
  Smartphone,
} from "lucide-react";

const conditions: { label: string; status: "normal" | "warning" | "critical" }[] = [
  { label: "Chaleur extrême", status: "normal" },
  { label: "Froid extrême", status: "normal" },
  { label: "Humidité élevée", status: "normal" },
  { label: "Qualité de l'air anormale", status: "warning" },
  { label: "Indicateurs de fumée / incendie", status: "normal" },
  { label: "Manque d'eau", status: "normal" },
  { label: "Panne d'alimentation", status: "normal" },
  { label: "Panne de ventilateur", status: "normal" },
  { label: "Panne de pompe", status: "normal" },
  { label: "Panne de l'équipement d'alimentation", status: "normal" },
  { label: "Inondation / fuite d'eau", status: "critical" },
  { label: "Panne de communication", status: "normal" },
];

const statusStyles = {
  normal: "border-[var(--ts-accent)]/25 bg-[var(--ts-accent)]/10 text-[var(--ts-accent)]",
  warning: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  critical: "border-red-400/25 bg-red-400/10 text-red-300",
};

const statusLabels = { normal: "Normal", warning: "Avertissement", critical: "Critique" };

const alertChannels = [
  { icon: Smartphone, label: "Notification mobile" },
  { icon: MessageSquare, label: "SMS si disponible" },
  { icon: Mail, label: "E-mail" },
  { icon: Siren, label: "Avertisseur local" },
  { icon: Radio, label: "Voyant d'alerte" },
  { icon: MonitorSmartphone, label: "Tableau de bord web" },
];

export default function PoultrySafetyWarning() {
  return (
    <section aria-labelledby="poultry-safety-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--ts-accent)] ring-1 ring-inset ring-white/10">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Sécurité &amp; alerte précoce
          </span>
          <h2 id="poultry-safety-heading" className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Détection précoce des changements de conditions
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Les systèmes de surveillance peuvent aider les opérateurs à
            identifier plus tôt des conditions anormales et à réagir selon
            leurs procédures d&apos;exploitation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {conditions.map((c) => (
            <div key={c.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${statusStyles[c.status]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                {statusLabels[c.status]}
              </span>
              <p className="mt-2.5 text-sm font-medium text-white/80">{c.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {alertChannels.map((channel) => (
            <div key={channel.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
              <channel.icon className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
              {channel.label}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <Bell className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/40" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-white/40">
            Statuts d&apos;exemple fournis à titre d&apos;illustration. Les
            systèmes de surveillance peuvent aider à identifier des
            conditions anormales, mais ne garantissent pas la prévention des
            catastrophes, des pannes d&apos;équipement ou de la perte
            d&apos;animaux.
          </p>
        </div>
      </div>
    </section>
  );
}
