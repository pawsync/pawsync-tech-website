import type { Metadata } from "next";
import {
  ArrowDown,
  Cpu,
  Gauge,
  Hash,
  History,
  MonitorSmartphone,
  Settings2,
  ShieldAlert,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Intelligente Fütterung | PawSync",
  description:
    "Automatisierte Fütterungssysteme mit Zeitplänen, Portionskontrolle, RFID-Identifikation, Futterstandssensoren und Fernüberwachung für Haustiere, Nutztiere und Mehrtieranlagen.",
  alternates: buildAlternates("de", "smart-feeding"),
};

const capabilities = [
  { icon: Settings2, title: "Geplante Ausgabe", description: "Automatisierte Fütterung nach konfigurierbarem täglichem oder mehrfachem Zeitplan." },
  { icon: Gauge, title: "Portionskontrolle", description: "Präzise Ausgabemengen, abgestimmt auf jedes Tier oder jede Gruppe." },
  { icon: Hash, title: "RFID-Tieridentifikation", description: "Erkennung einzelner Tiere, um die richtige Diät an das richtige Tier zu geben." },
  { icon: UtensilsCrossed, title: "Futterstandssensoren", description: "Wissen, wann ein Behälter oder Silo zur Neige geht, bevor er leer ist." },
  { icon: ShieldAlert, title: "Stau- & Störungserkennung", description: "Alarme, wenn ein Motor, eine Förderschnecke oder eine Ausgabeleitung nicht korrekt funktioniert." },
  { icon: MonitorSmartphone, title: "Fernüberwachung", description: "Fütterungsstatus und -verlauf per Telefon oder Web-Dashboard einsehen." },
  { icon: History, title: "Verbrauchsverlauf", description: "Futterverbrauch über die Zeit verfolgen, um Trends oder Auffälligkeiten frühzeitig zu erkennen." },
  { icon: Cpu, title: "Individuelle Controller", description: "Speziell entwickelte Fütterungscontroller, abgestimmt auf Ihre Anlage und Tierart." },
];

const flow = [
  { icon: UtensilsCrossed, label: "Futtersilo / Behälter" },
  { icon: Gauge, label: "Füllstandssensor" },
  { icon: Cpu, label: "Controller" },
  { icon: Settings2, label: "Futtermotor / Förderschnecke" },
  { icon: MonitorSmartphone, label: "Dashboard" },
];

const faqs = [
  { question: "Kann das System einzelne Tiere identifizieren?", answer: "Ja — RFID-basierte Identifikation ermöglicht es dem System, unterschiedliche Diäten oder Portionen an verschiedene Tiere auszugeben, die dieselbe Fütterungsstation nutzen." },
  { question: "Was passiert, wenn die Futterleitung sich staut?", answer: "Die Störungserkennung kann ein Motor- oder Ausgabeproblem melden und einen Alarm senden, statt stillschweigend nicht mehr zu füttern." },
  { question: "Kann ich Futterstände aus der Ferne überwachen?", answer: "Ja — Füllstandssensoren an Behältern oder Silos melden den Status an das Dashboard, mit Alarmen bei niedrigem Futterstand, die nach Ihrem Zeitplan konfigurierbar sind." },
];

export default function SmartFeedingPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Lösungen", href: "/de/solutions" }, { label: "Intelligente Fütterung" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Intelligente Fütterung</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Intelligente Fütterungssysteme
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Automatisierte Fütterungsgeräte mit Zeitplänen, Portionskontrolle,
          Sensoren und Fernüberwachung für Haustiere, Nutztiere und
          Mehrtieranlagen.
        </p>
      </section>

      {/* Flow diagram */}
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-[var(--ts-navy)]/8 bg-[var(--ts-dark-green)]/5 p-6 sm:p-8">
          {flow.map((step, i) => (
            <div key={step.label} className="flex w-full max-w-xs flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <step.icon className="h-4 w-4 shrink-0 text-[var(--ts-dark-green)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Funktionen</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Fütterung, automatisiert und nachvollziehbar
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
        heading="Benötigen Sie einen individuellen Fütterungscontroller?"
        description="Wir entwickeln Hardware rund um Ihr Futtersystem, Ihre Tierart und Ihr Anlagenlayout."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
