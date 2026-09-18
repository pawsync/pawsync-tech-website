import type { Metadata } from "next";
import {
  AlertTriangle,
  CircuitBoard,
  CloudRain,
  HeartPulse,
  Radar,
  Activity,
  RadioTower,
  Satellite,
  Settings2,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Intelligente Tier- & Hoftechnologielösungen | PawSync",
  description:
    "GPS-Tiertracking, virtuelle Einzäunung, Gesundheitsüberwachung, intelligente Fütterung, Hofautomatisierung und Umweltüberwachung — kundenspezifische IoT-Lösungen für Tiere und Höfe.",
  alternates: buildAlternates("de", "solutions"),
};

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const categories: Category[] = [
  {
    id: "tracking-location",
    icon: Satellite,
    title: "Tracking & Standort",
    description:
      "Echtzeit- oder periodische GPS/GNSS-Standortsysteme, die Haustiere, Nutztiere und andere Tiere auffindbar halten — auf dem Betrieb oder weit darüber hinaus.",
    points: ["Echtzeit- & geplante GPS-Aktualisierungen", "Geofence- & Zonenalarme", "Vollständiger Standortverlauf", "Mehrtier-Flottenansicht"],
  },
  {
    id: "virtual-fencing",
    icon: Radar,
    title: "Virtuelle Einzäunung",
    description:
      "GPS- und funkbasierte Grenzsysteme, die Tieren Freiraum innerhalb festgelegter Zonen geben, mit Standortbewusstsein anstelle traditioneller Zäune.",
    points: ["Individuelle, anpassbare Grenzen", "Echtzeit-Bewegungsalarme", "Unterstützung mehrerer Zonen", "Fernkonfiguration vom Feld oder Büro aus"],
  },
  {
    id: "health-monitoring",
    icon: HeartPulse,
    title: "Gesundheitsüberwachung",
    description:
      "Tragbare oder fest installierte Elektronik, die Aktivität, Temperatur und Ruhemuster erfasst, um frühere Wahrnehmung von Gesundheitsveränderungen zu unterstützen.",
    points: ["Tägliches Aktivitäts- & Ruhe-Tracking", "Temperaturerfassung", "Alarme bei unregelmäßigen Mustern", "Historische Trenddaten"],
  },
  {
    id: "smart-feeding",
    icon: UtensilsCrossed,
    title: "Intelligente Fütterung",
    description:
      "Automatisierte Fütterungsgeräte mit Zeitplänen, Portionskontrolle, Sensoren und Fernüberwachung für Haustiere, Nutztiere und Mehrtieranlagen.",
    points: ["Geplante, portionsgesteuerte Ausgabe", "RFID-basierte Tieridentifikation", "Futterstands- & Staualarme", "Fernüberwachung & Verlauf"],
  },
  {
    id: "livestock-monitoring",
    icon: Activity,
    title: "Nutztierüberwachung",
    description:
      "Verfolgen Sie Bewegung, Verhalten, Standort und Umweltbedingungen über eine Herde hinweg, mit Dashboards für Gruppen- statt Einzeltiermanagement.",
    points: ["Herdenstandort & -bewegung", "Verhaltens- & Weidemuster", "Erfassung der Umweltexposition", "Konfigurierbare Gruppenalarme"],
  },
  {
    id: "farm-automation",
    icon: Settings2,
    title: "Hofautomatisierung",
    description:
      "Steuern Sie Bewässerung, Fütterung, Belüftung, Pumpen, Ventilatoren, Heizungen und Kühlsysteme automatisch — mit jederzeit verfügbarer manueller Übersteuerung.",
    points: ["Regelbasierte Automatisierung (\"Wenn dies, dann das\")", "Fernsteuerung per Smartphone & Web", "Anlagenstatusüberwachung", "Manuelle Übersteuerung jederzeit"],
  },
  {
    id: "smart-irrigation",
    icon: Waves,
    title: "Intelligente Bewässerung & Wassermanagement",
    description:
      "Vernetzte Bewässerungssysteme mit Bodenfeuchtemessung, Umweltdaten und Wasserstandsüberwachung, mit automatisierten Ventilen und Pumpen zur Optimierung von Wasserverbrauch und Anbaubedingungen.",
    points: ["Bodenfeuchte- & Tankstandsüberwachung", "Automatisierte Ventil- & Pumpensteuerung", "Wetterbewusste Zeitplanung", "Leck- & Störungsalarme"],
  },
  {
    id: "environmental-monitoring",
    icon: CloudRain,
    title: "Umweltüberwachung",
    description:
      "Kontinuierliche Überwachung von Temperatur, Luftfeuchtigkeit, Luftqualität und Wasserbedingungen in Ställen, Verschlägen, Gewächshäusern und Lagerbereichen.",
    points: ["Multisensor-Abdeckung pro Standort", "Konfigurierbare Schwellenwertalarme", "Historische Umwelttrends", "Stall-, Gewächshaus- & unterkunftstaugliche Hardware"],
  },
  {
    id: "safety-detection",
    icon: AlertTriangle,
    title: "Sicherheit & Gefahrenerkennung",
    description:
      "Frühwarnsysteme für extreme Hitze, Kälte, Rauch, Brandrisiko, Überflutung, Wasserlecks und Geräteausfälle — bevor sie zu Notfällen werden.",
    points: ["Status Normal / Warnung / Kritisch", "Mobil-, SMS-, E-Mail- & Lokalalarme", "Redundante Sensorik, wo es zählt", "Strom- & Pumpenausfallerkennung"],
  },
  {
    id: "wireless-sensor-networks",
    icon: RadioTower,
    title: "Drahtlose Sensornetzwerke",
    description:
      "Netzwerke stromsparender Sensorknoten, die über LoRa, BLE, Wi-Fi oder Mobilfunk kommunizieren — entwickelt, um große Höfe ohne ein einziges Kabel abzudecken.",
    points: ["Weitreichende LoRa-Mesh-Abdeckung", "Gateway- & Basisstationsarchitektur", "Stromoptimierte Knoten", "Skaliert von einem Stall bis zu einer ganzen Ranch"],
  },
  {
    id: "custom-iot",
    icon: CircuitBoard,
    title: "Kundenspezifische IoT-Systeme",
    description:
      "Wenn ein Standardgerät nicht passt, entwickeln wir die Elektronik — Hardware, Firmware und Konnektivität — genau nach Ihren Anforderungen.",
    points: ["Individuelles Hardware- & Leiterplattendesign", "Zugeschnittene Embedded-Firmware", "Mobile-App- & Cloud-API-Integration", "Unterstützung vom Prototyp bis zur Serienproduktion"],
  },
];

export default function SolutionsPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Lösungen" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Lösungen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Intelligente Tier- &amp; Hoftechnologielösungen
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Zehn Problemfelder, ein Engineering-Team. Jede Kategorie unten ist
          Hardware, Firmware und Konnektivität, die wir hausintern
          entwickeln — springen Sie zu der, die Sie benötigen, oder
          sprechen Sie mit uns über etwas, das noch nicht aufgeführt ist.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--ts-green)] to-[var(--ts-accent)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                  <category.icon className="h-7 w-7 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--ts-navy)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
                {category.title}
              </h2>
              <p className="mt-2 text-[var(--ts-gray)]">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--ts-navy)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-green)]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Benötigen Sie ein individuelles Hof-IoT-System?"
        heading="Lassen Sie uns Hardware rund um Ihre Umgebung, Tiere und betrieblichen Anforderungen entwickeln."
        description="Ob eine der oben genannten Kategorien oder etwas völlig Neues — unser Engineering-Team kann es gemeinsam mit Ihnen planen."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Unseren Engineering-Prozess ansehen"
        secondaryHref="/de/custom-electronics"
      />
    </>
  );
}
