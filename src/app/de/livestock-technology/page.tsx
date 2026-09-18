import type { Metadata } from "next";
import {
  AlertTriangle,
  Battery,
  Droplets,
  HeartPulse,
  Hash,
  MapPinned,
  Radar,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Nutztiertechnologie | PawSync",
  description:
    "GPS-Tracking, virtuelle Einzäunung, RFID-Identifikation und Gesundheitsüberwachungs-Hardware für Rinder, Schafe, Ziegen und Pferde.",
  alternates: buildAlternates("de", "livestock-technology"),
};

const solutions = [
  { icon: Satellite, title: "GPS-Tracking für Nutztiere", description: "Standortverfolgung, entwickelt für offenes Weideland und große Flächen." },
  { icon: Radar, title: "Rinder-Tracking", description: "Halsband- und Ohrmarkenhardware, dimensioniert für Rinderherden." },
  { icon: Radar, title: "Schaf-Tracking", description: "Leichte Tracking-Geräte für das Herdenmanagement." },
  { icon: Radar, title: "Ziegen-Tracking", description: "Robuste Tracking-Hardware für weidende Herden." },
  { icon: Radar, title: "Pferde-Tracking", description: "GPS- und Aktivitäts-Tracking, entwickelt für das Wohlergehen von Pferden." },
  { icon: Activity, title: "Aktivitätsüberwachung", description: "Bewegungs- und Verhaltensdaten für die gesamte Herde." },
  { icon: HeartPulse, title: "Brunsterkennung", description: "Analyse von Aktivitätsmustern zur Unterstützung bei der Erkennung von Deckzeitfenstern." },
  { icon: MapPinned, title: "Bewegungsüberwachung", description: "Historische Bewegungsspuren für einzelne Tiere oder Gruppen." },
  { icon: HeartPulse, title: "Gesundheitsindikatoren", description: "Vitalwerte und Aktivitätstrends, die frühere Eingriffe unterstützen." },
  { icon: Activity, title: "Weideüberwachung", description: "Aufenthaltszeit-in-Zone-Daten zur Information von Rotationsweideentscheidungen." },
  { icon: MapPinned, title: "Virtuelle Einzäunung", description: "GPS-basierte Grenzen, die die Abhängigkeit von physischer Einzäunung verringern." },
  { icon: Hash, title: "RFID-Identifikation", description: "Individuelle Tieridentifikation für Aufzeichnungen und Zutrittskontrolle." },
  { icon: Hash, title: "Tierzählung", description: "Automatisierte Kopfzahlerfassung an Toren, Triebgängen und Tränken." },
  { icon: Droplets, title: "Wasserverbrauchsüberwachung", description: "Durchfluss- und Standssensoren, die abnormale Trinkmuster erkennen." },
  { icon: UtensilsCrossed, title: "Fütterungsüberwachung", description: "Futterstands- und Verbrauchsverfolgung über Fütterungsstationen hinweg." },
];

const alerts = [
  { icon: AlertTriangle, label: "Tier hat festgelegten Bereich verlassen" },
  { icon: Activity, label: "Ungewöhnliche Inaktivität" },
  { icon: ThermometerSun, label: "Hohe Umgebungstemperatur" },
  { icon: Droplets, label: "Niedriger Wasserstand" },
  { icon: UtensilsCrossed, label: "Fütterungsabweichung" },
  { icon: Battery, label: "Mögliches Akkuproblem am Gerät" },
];

export default function LivestockTechnologyPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Nutztiertechnologie" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Nutztiertechnologie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Vernetzte Nutztierüberwachung &amp; -management
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Tracking-, Gesundheitsüberwachungs- und virtuelle
          Einzäunungshardware, entwickelt für Rinder, Schafe, Ziegen und
          Pferde auf dem Betrieb.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="de" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {alerts.map((alert) => (
            <div
              key={alert.label}
              className="flex items-center gap-2.5 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <alert.icon className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              {alert.label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Lösungen</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Entwickelt für die gesamte Herde
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ServiceCard key={item.title} locale="de" {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Benötigen Sie ein individuelles Nutztierüberwachungssystem?"
        description="Lassen Sie uns Hardware rund um Ihre Herde, Ihr Gelände und Ihre Konnektivitätsanforderungen entwickeln."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
