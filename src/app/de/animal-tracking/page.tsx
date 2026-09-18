import type { Metadata } from "next";
import {
  Battery,
  Cpu,
  History,
  MapPinned,
  Radio,
  Satellite,
  ShieldCheck,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Tier-Tracking | PawSync",
  description:
    "GPS- und GNSS-Tier-Trackingsysteme für Haustiere, Nutztiere und andere Tiere — Echtzeit-Standort, Geofence-Alarme und weitreichende Konnektivität.",
  alternates: buildAlternates("de", "animal-tracking"),
};

const capabilities = [
  { icon: Satellite, title: "Echtzeit-GPS-Standort", description: "Geplante oder kontinuierliche Standortaktualisierungen, abgestimmt auf Tier und Anwendungsfall." },
  { icon: MapPinned, title: "Geofence- & Zonenalarme", description: "Werden Sie sofort benachrichtigt, wenn ein getracktes Tier einen definierten Bereich verlässt." },
  { icon: History, title: "Standortverlauf", description: "Vollständige Bewegungsspuren für einzelne Tiere oder ganze Gruppen." },
  { icon: Users, title: "Mehrtier-Flottenansicht", description: "Überwachen Sie Haustiere, Herden oder Arbeitstiere über ein einziges Dashboard." },
  { icon: Radio, title: "Weitreichende Konnektivität", description: "GPS/GNSS kombiniert mit LoRa-, LTE- oder Satelliten-Backhaul, je nach Reichweite." },
  { icon: Battery, title: "Akku-optimiertes Design", description: "Stromsparende Hardware und Firmware für Wochen oder Monate zwischen den Ladevorgängen." },
  { icon: ShieldCheck, title: "Robuste Gehäuse", description: "Wetter- und stoßfeste Gehäuse für Feld- und Außeneinsatz." },
  { icon: Cpu, title: "Individuelle Gerätegröße", description: "Halsband-, Ohrmarken- oder Geschirr-Bauformen, passend zur jeweiligen Tierart." },
];

const faqs = [
  { question: "Können Tracking-Geräte ohne Mobilfunkabdeckung funktionieren?", answer: "Ja. Wir entwickeln Systeme rund um LoRa und andere stromsparende Weitverkehrsprotokolle für Standorte mit eingeschränktem oder fehlendem Mobilfunksignal und synchronisieren Daten, sobald ein Gateway oder eine Mobilfunkverbindung erreicht wird." },
  { question: "Wie lange hält die Akkulaufzeit typischerweise?", answer: "Das hängt von Aktualisierungsfrequenz, Konnektivitätsart und Gehäusegröße ab — wir gestalten das Energiebudget nach Ihrem erforderlichen Meldeintervall und Lastzyklus." },
  { question: "Können Sie mehrere Tierarten mit einer Plattform tracken?", answer: "Ja. Dashboard und Backend können gemischte Flotten unterstützen — Haustiere, Nutztiere und Arbeitstiere — mit Gerätehardware, die je Tierart dimensioniert ist." },
];

export default function AnimalTrackingPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Lösungen", href: "/de/solutions" }, { label: "Tier-Tracking" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Tier-Tracking</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          GPS- &amp; GNSS-Tier-Trackingsysteme
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Echtzeit- oder periodische Ortungssysteme, die Haustiere,
          Nutztiere und andere Tiere auffindbar halten — auf dem Betrieb
          oder weit darüber hinaus.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="de" />
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Funktionen</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Entwickelt für zuverlässiges Feld-Tracking
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <ServiceCard key={item.title} locale="de" {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Benötigen Sie ein individuelles Tracking-Gerät?"
        description="Wir entwickeln Hardware rund um Ihre Tiere, Ihr Gelände, Ihre Reichweite und Konnektivitätsanforderungen."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
