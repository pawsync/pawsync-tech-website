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
  { label: "Extreme Hitze", status: "normal" },
  { label: "Extreme Kälte", status: "normal" },
  { label: "Hohe Luftfeuchtigkeit", status: "normal" },
  { label: "Abnormale Luftqualität", status: "warning" },
  { label: "Rauch-/Brandindikatoren", status: "normal" },
  { label: "Wassermangel", status: "normal" },
  { label: "Stromausfall", status: "normal" },
  { label: "Ventilatorausfall", status: "normal" },
  { label: "Pumpenausfall", status: "normal" },
  { label: "Ausfall der Fütterungsanlage", status: "normal" },
  { label: "Überflutung / Wasseraustritt", status: "critical" },
  { label: "Kommunikationsausfall", status: "normal" },
];

const statusStyles = {
  normal: "border-[var(--ts-accent)]/25 bg-[var(--ts-accent)]/10 text-[var(--ts-accent)]",
  warning: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  critical: "border-red-400/25 bg-red-400/10 text-red-300",
};

const statusLabels = { normal: "Normal", warning: "Warnung", critical: "Kritisch" };

const alertChannels = [
  { icon: Smartphone, label: "Mobile Benachrichtigung" },
  { icon: MessageSquare, label: "SMS, sofern unterstützt" },
  { icon: Mail, label: "E-Mail" },
  { icon: Siren, label: "Lokaler Summer" },
  { icon: Radio, label: "Warnleuchte" },
  { icon: MonitorSmartphone, label: "Web-Dashboard" },
];

export default function PoultrySafetyWarning() {
  return (
    <section aria-labelledby="poultry-safety-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--ts-accent)] ring-1 ring-inset ring-white/10">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Sicherheit &amp; Frühwarnung
          </span>
          <h2 id="poultry-safety-heading" className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frühzeitig informiert, wenn sich Bedingungen ändern
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Überwachungssysteme können Betreibern helfen, abnormale
            Bedingungen früher zu erkennen und gemäß ihren betrieblichen
            Verfahren zu reagieren.
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
            Beispielstatus zur Veranschaulichung. Überwachungssysteme können
            helfen, abnormale Bedingungen zu erkennen, garantieren jedoch
            nicht die Verhinderung von Katastrophen, Geräteausfällen oder
            Tierverlusten.
          </p>
        </div>
      </div>
    </section>
  );
}
