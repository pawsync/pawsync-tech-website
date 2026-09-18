import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "So arbeiten wir | PawSync",
  description:
    "Unser Engineering-Prozess von der Anforderungsanalyse bis zur Produktionsunterstützung — die Phasen, die jedes PawSync-Projekt durchläuft.",
  alternates: buildAlternates("de", "how-we-work"),
};

const stages = [
  { title: "Anforderungsanalyse", description: "Verständnis der Tiere, der Umgebung und der Rahmenbedingungen, innerhalb derer das Produkt funktionieren muss." },
  { title: "Produktarchitektur", description: "Definition des Gesamtsystems — was das Gerät erfasst, wie es sich verbindet und wie es versorgt wird." },
  { title: "Technologieauswahl", description: "Auswahl der Sensoren, des Funkprotokolls und der Mikrocontroller-Plattform, die zu den Anforderungen passen." },
  { title: "Schaltplanentwicklung", description: "Entwurf der Schaltung — Bauteilauswahl, Spannungsregelung und Signalpfade." },
  { title: "Leiterplattendesign", description: "Layout der Platine für Fertigbarkeit, Größe und Zuverlässigkeit im Feld." },
  { title: "Firmware-Entwicklung", description: "Schreiben der Embedded-Software, die das Gerät und sein Kommunikationsprotokoll steuert." },
  { title: "Prototypenmontage", description: "Bau einer funktionsfähigen Einheit zur Validierung des Designs unter realen Bedingungen." },
  { title: "Funktionstests", description: "Überprüfung, ob Sensoren, Konnektivität und Energiemanagement wie geplant funktionieren." },
  { title: "Feldtests", description: "Test in der tatsächlichen Umgebung — am Tier, im Stall oder im Gelände." },
  { title: "Designverbesserungen", description: "Verfeinerung auf Basis der Felddaten, bevor das Design für die Produktion festgelegt wird." },
  { title: "Fertigungsunterlagen", description: "Erstellung von Gerber-Dateien, Stückliste und Bestückungsdaten für einen Auftragsfertiger." },
  { title: "Produktionsunterstützung", description: "Unterstützung beim Übergang von der Prototypserie zur laufenden Fertigung." },
];

const deliverables = [
  "Schaltpläne", "Leiterplattendaten", "Gerber-Dateien", "Stückliste", "Bestückungsdaten",
  "Firmware-Quellcode", "Kommunikationsprotokoll", "Gerätedokumentation",
  "Testverfahren", "Prototyp-Hardware",
];

export default function HowWeWorkPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "So arbeiten wir" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>So arbeiten wir</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering vom Konzept bis zur Serienproduktion
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Zwölf Phasen, ein verantwortliches Team — von der ersten Skizze
          bis zu einem fertigungsreifen Produkt.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ol className="relative space-y-8 border-l-2 border-[var(--ts-navy)]/10 pl-8">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ts-dark-green)] text-xs font-bold text-white ring-4 ring-[var(--ts-bg)]">
                {index + 1}
              </span>
              <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {stage.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ts-gray)]">{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Ergebnisse</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Was Sie am Ende erhalten
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Bereit für die erste Phase?"
        description="Erzählen Sie uns von dem Problem, das Sie lösen möchten, und wir planen die Anforderungsanalyse gemeinsam."
        primaryLabel="Ihr Projekt besprechen"
        primaryHref="/de/contact"
      />
    </>
  );
}
