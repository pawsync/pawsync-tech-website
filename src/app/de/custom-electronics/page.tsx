import type { Metadata } from "next";
import {
  ArrowRight,
  BatteryCharging,
  Cloud,
  CircuitBoard,
  ClipboardCheck,
  Compass,
  Factory,
  FileCode,
  FlaskConical,
  Radio,
  ScanLine,
  Thermometer,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Kundenspezifische Elektronik & IoT-Produktentwicklung | PawSync",
  description:
    "Kundenspezifisches Leiterplattendesign, Embedded-Firmware-Entwicklung, GPS- und LoRa-IoT-Engineering sowie Unterstützung vom Prototyp bis zur Serienproduktion für Tier- und Hoftechnologieprodukte.",
  alternates: buildAlternates("de", "custom-electronics"),
};

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Workflow,
    title: "Produktkonzept & Architektur",
    description: "Produktkonzeptentwicklung und Elektronikarchitektur, die Leistung, Kosten und Fertigbarkeit ausbalanciert.",
  },
  {
    icon: CircuitBoard,
    title: "Schaltplan- & Leiterplattendesign",
    description: "Schaltplanentwicklung, Leiterplattenlayout, Design-Review und Bauteilauswahl für zuverlässige Feldelektronik.",
  },
  {
    icon: FileCode,
    title: "Embedded-Firmware",
    description: "Firmware-Entwicklung auf ESP32-, STM32-, nRF52- und Arduino-Plattformen, zugeschnitten auf Ihre Hardware.",
  },
  {
    icon: Thermometer,
    title: "Sensorintegration",
    description: "Integration von GPS- und Umweltsensoren — von einem einzelnen Sensor bis zu einem vollständigen Multisensor-Knoten.",
  },
  {
    icon: Radio,
    title: "Funkkonnektivität",
    description: "LoRa-, Bluetooth-, Wi-Fi- und Mobilfunk-IoT-Konnektivität, entwickelt für Reichweite, Zuverlässigkeit und Energieeffizienz.",
  },
  {
    icon: ScanLine,
    title: "RFID-Systeme",
    description: "RFID-Identifikationssysteme für Tier-Tracking, Zutrittskontrolle und Fütterungserkennung.",
  },
  {
    icon: BatteryCharging,
    title: "Energie- & Akkudesign",
    description: "Batteriebetriebenes Gerätedesign und Energiemanagement für lange Betriebszeit im Feld.",
  },
  {
    icon: Cloud,
    title: "Software- & Cloud-Integration",
    description: "Kommunikation mit mobilen Apps und Cloud-API-Integration, die Ihre Hardware mit einem nutzbaren Dashboard verbindet.",
  },
  {
    icon: FlaskConical,
    title: "Prototypenentwicklung",
    description: "Funktionsfähige Prototypen, die Sie in der Hand halten, testen und validieren können, bevor Sie sich für die Produktion entscheiden.",
  },
  {
    icon: Factory,
    title: "Fertigungsunterstützung",
    description: "Unterstützung bei der Fertigungsvorbereitung, um einen validierten Prototyp Richtung Serienproduktion zu bringen.",
  },
];

const processSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: "Idee" },
  { icon: Workflow, label: "Architektur" },
  { icon: CircuitBoard, label: "Leiterplatte" },
  { icon: FileCode, label: "Firmware" },
  { icon: FlaskConical, label: "Prototyp" },
  { icon: ClipboardCheck, label: "Testing" },
  { icon: Factory, label: "Produktion" },
];

const exampleSpecs = [
  "GPS", "BLE", "Beschleunigungssensor", "Temperaturerfassung",
  "Wiederaufladbarer Akku", "Mobile App", "Geofence-Alarme", "Aktivitätsverlauf",
];

const faqs: FAQItem[] = [
  {
    question: "Können Sie ein vollständig individuelles Tier-Tracking-Gerät entwickeln?",
    answer: "Ja. Wir entwickeln Hardware, Firmware und Konnektivität rund um Ihr spezifisches Tier, Ihre Umgebung, Reichweite und Anforderungen an die Akkulaufzeit, statt ein Standardprodukt anzupassen.",
  },
  {
    question: "Können GPS-Tracker auf entlegenen Höfen funktionieren?",
    answer: "Ja, mit der richtigen Technologiewahl. GPS liefert die Standortbestimmung, während LoRa- oder Mobilfunkkonnektivität diese Daten aus Bereichen ohne lokales Wi-Fi zurückträgt — wir helfen, die richtige Kombination für Ihren Betrieb auszuwählen.",
  },
  {
    question: "Welche Funktechnologie eignet sich am besten für die Nutztierüberwachung?",
    answer: "Das hängt von Reichweite, Herdengröße und Budget ab. LoRa eignet sich für große Flächen mit seltenen Aktualisierungen; Mobilfunk für Tiere, die über einen einzelnen Betrieb hinaus wandern; BLE für kurzreichweitige, hochfrequente Daten nahe einem Stall oder Gateway. Wir helfen Ihnen, die Kompromisse abzuwägen.",
  },
  {
    question: "Können Sie LoRa-basierte Hofüberwachungssysteme entwickeln?",
    answer: "Ja. LoRa und LoRaWAN sind zentraler Bestandteil unserer Arbeit an drahtlosen Sensornetzwerken, einschließlich Gateway-Architektur und akku-optimierter Sensorknoten.",
  },
  {
    question: "Können Tierüberwachungsgeräte batteriebetrieben sein?",
    answer: "Ja — die meisten von uns entwickelten Geräte sind batteriebetrieben, mit Energiemanagement, das speziell für lange Betriebszeit im Feld ausgelegt ist.",
  },
  {
    question: "Können Sie App-verbundene Geräte entwickeln?",
    answer: "Ja. Wir entwickeln die geräteseitige Kommunikation und Cloud-API-Integration, die eine mobile App oder ein Dashboard benötigt, um Live- und historische Daten anzuzeigen.",
  },
  {
    question: "Können Sie sowohl Hardware als auch Firmware entwickeln?",
    answer: "Ja, beides sind zentrale hauseigene Kompetenzen — vom Schaltplan und Leiterplattendesign bis zur Embedded-Firmware, die darauf läuft.",
  },
  {
    question: "Können Sie helfen, einen Prototyp in die Serienproduktion zu überführen?",
    answer: "Ja. Wir erstellen Leiterplattendaten, Stücklisten, Fertigungsunterlagen, Testverfahren und technische Dokumentation, um diesen Übergang zu unterstützen.",
  },
  {
    question: "Können Sie individuelle Hofcontroller entwickeln?",
    answer: "Ja — Controller, die Temperatur, Luftfeuchtigkeit, Bewässerung, Fütterung, Ventilatoren, Pumpen und andere Hofanlagen steuern, sind ein regelmäßiger Teil unserer Arbeit.",
  },
  {
    question: "Können Ihre Systeme mehrere Standorte überwachen?",
    answer: "Ja, sofern das Konnektivitätskonzept dies unterstützt (typischerweise Mobilfunk- oder internetverbundene Gateways je Standort), kann ein einziges Dashboard mehrere Standorte zusammenführen.",
  },
  {
    question: "Welche Sensoren können in ein Hofüberwachungssystem integriert werden?",
    answer: "Übliche Optionen sind Temperatur-, Feuchtigkeits-, Luftqualitäts-, Wasserstands-, Bodenfeuchte-, Bewegungs- und Wägezellensensoren — die richtige Kombination hängt davon ab, was Sie überwachen möchten.",
  },
  {
    question: "Können Sie RFID-Geräte zur Nutztieridentifikation entwickeln?",
    answer: "Ja. RFID-Identifikation ist einer unserer Standardbausteine für Fütterungserkennung, Zutrittskontrolle und Tierzählung.",
  },
];

export default function CustomElectronicsPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Kundenspezifische Elektronik" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Engineering-Dienstleistungen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Kundenspezifische Elektronik &amp; IoT-Produktentwicklung
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Wenn ein Standardgerät nicht ausreicht, entwickeln wir eines, das
          es tut — Hardware, Firmware und die Konnektivität, die alles
          verbindet.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} locale="de" {...service} />
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-20 bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Unser Prozess</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Von der Idee zur Serienproduktion
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
            {processSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex w-28 flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[var(--ts-navy)]/8">
                    <step.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-[var(--ts-green)] sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
              Beispiel-Spezifikation eines Smart-Geräts
            </h3>
            <p className="mt-1 text-sm text-[var(--ts-gray)]">
              Ein repräsentativer Aufbau für einen vernetzten Tier-Tracker:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exampleSpecs.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full bg-[var(--ts-dark-green)]/8 px-3.5 py-1.5 text-xs font-medium text-[var(--ts-dark-green)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
        </div>
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Haben Sie eine Animal-Tech-Produktidee?"
        description="Von GPS-Trackern bis zu automatisierten Hofcontrollern — wir helfen, Ihre Elektronik vom Konzept bis zum Prototyp zu entwickeln."
        primaryLabel="Ein Pet-Technology-Produkt entwickeln"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
