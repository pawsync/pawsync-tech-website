import {
  AlertTriangle,
  CircuitBoard,
  Droplets,
  Fan,
  Flame,
  Lightbulb,
  MonitorSmartphone,
  PlugZap,
  Thermometer,
  UtensilsCrossed,
  Waves,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const solutions: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Thermometer, title: "Temperaturüberwachung", description: "Überwachung der Umgebungstemperaturen in Geflügelställen." },
  { icon: Droplets, title: "Luftfeuchtigkeitsüberwachung", description: "Messung und Verfolgung der Feuchtigkeitsbedingungen." },
  { icon: Wind, title: "Luftqualitätsüberwachung", description: "Integration von Sensoren für relevante Umweltparameter wie CO2 und Ammoniak, wo sinnvoll." },
  { icon: Fan, title: "Belüftungssteuerung", description: "Überwachung und Steuerung von Ventilatoren und Lüftungsanlagen nach konfigurierten Umweltbedingungen." },
  { icon: Flame, title: "Heiz- & Kühlsteuerung", description: "Automatisierung von Heizungen, Kühlgeräten, Ventilatoren und verwandten Klimasystemen." },
  { icon: UtensilsCrossed, title: "Intelligente Fütterung", description: "Überwachung der Futterstände und Automatisierung von Fütterungsplänen oder Ausgabegeräten." },
  { icon: Droplets, title: "Wasserüberwachung", description: "Überwachung von Tankständen, Wasserverfügbarkeit, Durchfluss und Störungen." },
  { icon: Waves, title: "Automatische Bewässerung", description: "Steuerung von Pumpen, Ventilen und Bewässerungsanlagen." },
  { icon: Lightbulb, title: "Beleuchtungsautomatisierung", description: "Steuerung der Stallbeleuchtung nach Zeitplänen oder konfigurierbaren Regeln." },
  { icon: AlertTriangle, title: "Umweltalarme", description: "Alarme, wenn überwachte Werte konfigurierte Grenzwerte überschreiten." },
  { icon: Wrench, title: "Geräteüberwachung", description: "Überwachung von Ventilatoren, Pumpen, Motoren, Futterautomaten und anderer wichtiger Hofausrüstung." },
  { icon: PlugZap, title: "Stromausfallüberwachung", description: "Erkennung von Netzausfällen oder ausgewählten Geräte-Stromzuständen." },
  { icon: Zap, title: "Notfallüberwachung", description: "Überwachung von Zuständen im Zusammenhang mit Hitze, Kälte, Rauch, Überflutung, Wassermangel und Geräteausfällen." },
  { icon: MonitorSmartphone, title: "Fernüberwachung des Hofs", description: "Einsicht in den Hofstatus über mobile oder Web-Dashboards." },
  { icon: CircuitBoard, title: "Kundenspezifische Geflügel-IoT-Geräte", description: "Entwicklung individueller Hardware nach den spezifischen Anforderungen des Betriebs." },
];

export default function PoultrySolutionsOverview() {
  return (
    <section id="solutions" aria-labelledby="poultry-solutions-heading" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Geflügellösungen</Eyebrow>
        <h2
          id="poultry-solutions-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Vernetzte Technologie für den gesamten Geflügelbetrieb
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Fünfzehn Problemfelder, ein Engineering-Team — Hardware, Firmware
          und Konnektivität, zugeschnitten auf Ihren Betrieb.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3.5 border-b border-[var(--ts-navy)]/8 py-4 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
              <item.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold text-[var(--ts-navy)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
