import type { Metadata } from "next";
import {
  Bluetooth,
  Droplets,
  DoorClosed,
  DoorOpen,
  HeartPulse,
  MapPin,
  MapPinned,
  Radar,
  Satellite,
  Activity,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Haustiertechnologie | PawSync",
  description:
    "Smarte Haustiergeräte, die wir entwickeln und bauen — GPS-Tracker, Aktivitätsmonitore, intelligente Halsbänder, virtuelle Einzäunung, RFID-Zugang, intelligente Futterautomaten und mehr.",
  alternates: buildAlternates("de", "pet-technology"),
};

const solutions = [
  { icon: Satellite, title: "GPS-Haustier-Tracker", description: "Am Halsband montierte Standortverfolgung zur Wiederauffindung entlaufener Tiere und täglichen Überwachung." },
  { icon: Activity, title: "Aktivitäts-Tracker", description: "Bewegungs- und Bewegungserfassung, die ein Bild des täglichen Wohlbefindens ergibt." },
  { icon: HeartPulse, title: "Gesundheitsüberwachung für Haustiere", description: "Tragbare Sensoren für Temperatur, Aktivität und Ruhemustererfassung." },
  { icon: Radar, title: "Intelligente Halsbänder", description: "Multisensor-Halsbandhardware, die GPS, BLE und Gesundheitsüberwachung in einem Gerät vereint." },
  { icon: MapPinned, title: "Virtuelle Haustier-Einzäunung", description: "GPS-basierte Grenzen mit Echtzeitalarmen, wenn ein Haustier eine sichere Zone verlässt." },
  { icon: DoorOpen, title: "RFID-Haustierzugang", description: "Mikrochip-basierte Identifikation für sichere, selektive Zutrittssysteme." },
  { icon: DoorClosed, title: "Intelligente Haustiertüren", description: "App-gesteuerte Türen, die sich nur für erkannte, autorisierte Haustiere öffnen." },
  { icon: UtensilsCrossed, title: "Intelligente Futterautomaten", description: "Geplante, portionsgesteuerte Fütterung mit Fernüberwachung." },
  { icon: Droplets, title: "Automatische Wasserüberwachung", description: "Wasserstands- und Verbrauchssensoren, die ungewöhnliche Trinkmuster erkennen." },
  { icon: Thermometer, title: "Temperaturüberwachung für Haustiere", description: "Kontinuierliche Temperaturerfassung für frühzeitiges Bewusstsein bei möglichen Problemen." },
  { icon: Bluetooth, title: "BLE-Haustiergeräte", description: "Stromsparende Bluetooth-Hardware für smartphone-verbundenes Zubehör." },
  { icon: MapPin, title: "Systeme zur Standortbestimmung entlaufener Haustiere", description: "Standortverlauf und Alarme zur letzten bekannten Position, um die Wiederauffindung zu beschleunigen." },
];

const deviceSpec = [
  "GPS", "BLE", "Beschleunigungssensor", "Temperaturerfassung",
  "Wiederaufladbarer Akku", "Mobile App", "Geofence-Alarme", "Aktivitätsverlauf",
];

export default function PetTechnologyPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Haustiertechnologie" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Haustiertechnologie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Vernetzte Technologie für smarte Haustierpflege
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Von GPS-Trackern bis zu intelligenten Futterautomaten entwickeln
          wir die Hardware hinter modernen Pet-Tech-Produkten — für
          Pet-Tech-Start-ups, Tierheime und Gerätehersteller gleichermaßen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <ServiceCard key={item.title} locale="de" {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Beispielaufbau</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Beispiel für ein smartes Haustiergerät
            </h2>
            <p className="mt-4 text-lg text-[var(--ts-gray)]">
              Eine repräsentative Spezifikation für einen vernetzten
              Haustier-Tracker.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <div className="flex flex-wrap gap-2.5">
              {deviceSpec.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full border border-[var(--ts-navy)]/10 bg-[var(--ts-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ein Pet-Technology-Produkt entwickeln"
        description="Vom Konzept bis zum Prototyp helfen wir Ihnen, die Elektronik hinter Ihrem nächsten Pet-Tech-Produkt zu entwickeln."
        primaryLabel="Ihr Projekt besprechen"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
