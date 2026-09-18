import type { Metadata } from "next";
import {
  Building2,
  Droplets,
  Flower2,
  Home,
  PawPrint,
  Sprout,
  Warehouse,
  CloudRain,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Umweltüberwachung | PawSync",
  description:
    "24/7-Umweltsensorik für Ställe, Geflügelhäuser, Gewächshäuser und Unterkünfte — Temperatur, Luftfeuchtigkeit, Luftqualität und mehr.",
  alternates: buildAlternates("de", "environmental-monitoring"),
};

const sensors = [
  "Temperatur", "Luftfeuchtigkeit", "Luftqualität", "CO2", "Ammoniak", "Rauch",
  "Wasserstand", "Regen", "Bodenfeuchte", "Licht", "Luftdruck", "Wind", "Gerätetemperatur",
];

const applications = [
  { icon: Warehouse, title: "Stallüberwachung", description: "Kontinuierliches Klimabewusstsein für Rinder- und Pferdeställe." },
  { icon: PawPrint, title: "Geflügelstallüberwachung", description: "Enge Umwelttoleranzen, rund um die Uhr erfasst." },
  { icon: Flower2, title: "Gewächshausüberwachung", description: "Temperatur-, Feuchtigkeits- und Lichterfassung für kontrolliertes Wachstum." },
  { icon: Home, title: "Tierheimüberwachung", description: "Komfortable, sichere Bedingungen für untergebrachte und Pflegetiere." },
  { icon: Building2, title: "Futterlagerüberwachung", description: "Feuchtigkeits- und Temperaturerfassung zum Schutz gelagerten Futters." },
  { icon: Droplets, title: "Wassertanküberwachung", description: "Stands- und Qualitätserfassung für eine zuverlässige Wasserversorgung." },
  { icon: Sprout, title: "Überwachung im Freiland", description: "Wetterfeste Sensoren für Bedingungen im offenen Feld." },
];

export default function EnvironmentalMonitoringPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Umweltüberwachung" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Umweltüberwachung</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          24/7-Umweltbewusstsein für den Hof
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Sensornetzwerke, die Tag und Nacht über die Bedingungen wachen,
          auf die Tiere und Anlagen angewiesen sind.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <CloudRain className="h-5 w-5 text-[var(--ts-green)]" aria-hidden="true" />
          <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Sensoren, die wir integrieren
          </h2>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {sensors.map((sensor) => (
            <span
              key={sensor}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {sensor}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Anwendungen</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Wo sie eingesetzt wird
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <ServiceCard key={item.title} locale="de" {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Benötigen Sie eine maßgeschneiderte Umweltüberwachung?"
        description="Wir entwickeln das Sensornetzwerk rund um Ihre Anlage, Toleranzen und Konnektivität."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
