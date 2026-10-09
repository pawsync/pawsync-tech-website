import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Battery,
  CircuitBoard,
  Compass,
  ClipboardCheck,
  Droplets,
  Factory,
  FileCode,
  FlaskConical,
  HeartPulse,
  Hash,
  MapPinned,
  Radar,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "GPS-Tracking & Fernüberwachung für Nutztiere | PawSync",
  description:
    "Individuell entwickelte GPS-Tracking-, virtuelle Einzäunungs-, RFID-Identifikations- und Fernüberwachungs-Hardware für Rinder, Schafe, Ziegen und Pferde.",
  alternates: buildAlternates("de", "livestock-technology"),
  openGraph: buildOpenGraph("de", "livestock-technology"),
};

const connectivity: { icon: LucideIcon; label: string }[] = [
  { icon: Satellite, label: "GPS / GNSS" },
  { icon: Radar, label: "LoRa / LoRaWAN" },
  { icon: Activity, label: "Mobilfunk / LTE-M" },
  { icon: Battery, label: "BLE (Gateway-Übergabe)" },
];

const processSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: "Idee" },
  { icon: Workflow, label: "Architektur" },
  { icon: CircuitBoard, label: "Leiterplatte" },
  { icon: FileCode, label: "Firmware" },
  { icon: FlaskConical, label: "Prototyp" },
  { icon: ClipboardCheck, label: "Test" },
  { icon: Factory, label: "Produktion" },
];

const faqs: FAQItem[] = [
  {
    question: "GPS oder LoRa — was verfolgt meine Herde?",
    answer:
      "GPS/GNSS bestimmt die Position eines Geräts; die Position wird dadurch allein nicht übertragen. Ein zweites Funkmodul — meist LoRa oder Mobilfunk — sendet die Standortdaten an ein Gateway oder die Cloud. Welche Lösung passt, hängt davon ab, wie weit sich Ihre Tiere im Verhältnis zu vorhandener Gateway-Infrastruktur bewegen.",
  },
  {
    question: "Funktioniert das System weiter, wenn Internet oder Cloud-Verbindung ausfallen?",
    answer:
      "Lokale Steuerungslogik kann so ausgelegt werden, dass sie vor Ort weiter protokolliert und Alarme auslöst, während Daten nach Wiederherstellung der Verbindung synchronisiert werden — diese Entscheidung treffen wir gemeinsam mit Ihnen danach, wie wichtig eine durchgehende Sichtbarkeit für Ihren Betrieb ist.",
  },
  {
    question: "Was bestimmt Akkulaufzeit und Meldeintervall?",
    answer:
      "Die Akkulaufzeit steht in einem Zielkonflikt zur Melderate — häufigere Updates verbrauchen mehr Energie. Wir dimensionieren Akku und Meldeintervall (sowie Techniken wie bewegungsgesteuertes Aufwachen) auf Ihre gewünschte Laufzeit zwischen Ladungen oder Wechseln, statt vorab eine feste Zahl zu versprechen.",
  },
  {
    question: "Welche Wartung benötigen Tracking-Geräte?",
    answer:
      "Halsband- und Ohrmarkenhardware im Freieinsatz benötigt regelmäßige Akkuwartung (Aufladen oder Wechsel, je nach gewählter Zellchemie) und eine Sichtprüfung auf Verschleiß. Das Wartungsintervall dimensionieren wir in der Entwicklungsphase passend zu Chemie und Nutzungszyklus.",
  },
  {
    question: "Hält virtuelle Einzäunung Tiere physisch zurück?",
    answer:
      "Nein — sie warnt das Tier, wenn es sich einer Grenze nähert, hält es aber nicht physisch zurück wie ein Zaun. Ob sie den Bedarf an physischer Einzäunung verringert, hängt von Gelände, Tierart und örtlichen Vorgaben ab, die wir gemeinsam mit Ihnen bewerten.",
  },
  {
    question: "Welche Informationen benötigen Sie von uns für den Projektstart?",
    answer:
      "In der Regel: die Tiere und Herdengröße, das abzudeckende Gelände, vorhandene Konnektivität oder Gateway-Infrastruktur (falls vorhanden), Ihre Ziel-Akkulaufzeit und Melderate sowie jede Ausrüstung, mit der das System zusammenarbeiten soll. Den Rest klären wir gemeinsam in der Discovery-Phase.",
  },
  {
    question: "Wie wird aus einer Idee ein funktionsfähiges Gerät?",
    answer:
      "Zunächst Discovery und Architektur (Ihre Tiere, Umgebung und Anforderungen), dann Schaltplan- und Leiterplattenentwicklung, Firmware, ein Prototyp zum Testen unter echten Bedingungen und schließlich die Fertigungsvorbereitung nach erfolgreicher Validierung.",
  },
];

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
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
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

      <section aria-labelledby="livestock-connectivity-heading-de" className="bg-[var(--ts-navy)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="livestock-connectivity-heading-de" className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
            Konnektivität, abgestimmt auf die Herde
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {connectivity.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                <Icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/50">
            GPS/GNSS bestimmt den Standort; ein separates Funkmodul — LoRa
            oder Mobilfunk — meldet ihn an ein Gateway oder die Cloud. Reichweite,
            Energiebudget, Meldeintervall und vorhandene Gateway-Infrastruktur
            fließen alle in die passende Kombination ein. Siehe unseren
            Vergleich{" "}
            <Link href="/de/blog/gnss-lora-vs-gnss-ltem" className="underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white">
              GNSS + LoRa vs. GNSS + LTE-M
            </Link>{" "}
            für die Abwägungen.
          </p>
        </div>
      </section>

      <section aria-labelledby="livestock-process-heading-de" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Individuelle Entwicklung</Eyebrow>
          <h2 id="livestock-process-heading-de" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Von der Idee zum funktionsfähigen Gerät
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
            Zuerst Discovery und Architektur, dann Schaltplan- und
            Leiterplattenentwicklung, Firmware, ein Prototyp zum Testen unter
            echten Bedingungen und schließlich die Fertigungsvorbereitung nach
            erfolgreicher Validierung. Siehe auch unseren Beitrag zum{" "}
            <Link href="/de/blog/pet-tracker-pcb-design" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              Tracker-Leiterplattendesign
            </Link>{" "}
            und zur{" "}
            <Link href="/de/blog/low-power-animal-tracker-design" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              stromsparenden Elektronik für Tier-Tracker
            </Link>{" "}
            oder unsere{" "}
            <Link href="/de/custom-electronics" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              individuelle Elektronikentwicklung
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {processSteps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ts-navy)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <Icon className="h-4 w-4 text-[var(--ts-green)]" aria-hidden="true" />
                {label}
              </span>
              {i < processSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
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
