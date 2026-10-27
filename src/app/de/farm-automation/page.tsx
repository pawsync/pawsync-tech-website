import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Hofautomatisierung | PawSync",
  description:
    "Individuelle Steuerungssysteme für Klima, Wasser, Fütterung und Infrastruktur — mit Smartphone- und Web-Dashboard-Steuerung nach Ihren Anforderungen.",
  alternates: buildAlternates("de", "farm-automation"),
  openGraph: buildOpenGraph("de", "farm-automation"),
};

const categories = [
  {
    icon: Fan,
    title: "Klimasteuerung",
    items: ["Temperatur", "Luftfeuchtigkeit", "Belüftung", "Heizung", "Kühlung", "Ventilatoren"],
  },
  {
    icon: Droplets,
    title: "Wassermanagement",
    items: ["Wassertanküberwachung", "Automatische Bewässerung", "Pumpensteuerung", "Durchflussüberwachung", "Leckerkennung", "Wasserverfügbarkeitsalarme"],
  },
  {
    icon: UtensilsCrossed,
    title: "Fütterungsautomatisierung",
    items: ["Geplante Futterautomaten", "Futterstandsüberwachung", "Motorisierte Ausgabegeräte", "Portionskontrolle"],
  },
  {
    icon: Warehouse,
    title: "Infrastrukturüberwachung",
    items: ["Türen", "Tore", "Stromsysteme", "Generatoren", "Pumpen", "Motoren", "Lagerbereiche"],
  },
  {
    icon: MonitorSmartphone,
    title: "Fernsteuerung",
    items: ["Smartphone-Steuerung", "Web-Dashboard", "Automatische Regeln", "Manuelle Übersteuerung", "Alarme"],
  },
];

export default function FarmAutomationPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Hofautomatisierung" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Hofautomatisierung</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Intelligente Steuerungssysteme für moderne Höfe
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Wir entwickeln vernetzte Steuerungssysteme für Klima, Wasser,
          Fütterung und Infrastruktur — mit Steuerung per Smartphone oder
          Web-Dashboard nach Ihren Anforderungen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                <category.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--ts-bg)] px-3 py-1 text-xs font-medium text-[var(--ts-navy)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ts-gray)]">
          Diese Funktionen entwickeln wir für individuelle Systeme – sie sind
          kein Standardprodukt. Software wie Dashboards, Apps und Alarme wird
          pro Projekt nach Ihren Anforderungen entwickelt.
        </p>
      </section>

      <section className="bg-[var(--ts-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Automatisierungsregeln</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Einfache, konfigurierbare Logik
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Controller können so ausgelegt werden, dass sie nach von Ihnen
            festgelegten Regeln laufen — ohne Cloud-Abhängigkeit für
            kritische Aktionen.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-sm text-[var(--ts-accent)]">
            <Terminal className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              WENN Temperatur &gt; konfigurierter Grenzwert
              <br />
              DANN Belüftung aktivieren und Alarm senden.
            </span>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Benötigen Sie ein individuelles Hof-IoT-System?"
        description="Lassen Sie uns Hardware rund um Ihre Umgebung, Tiere und betrieblichen Anforderungen entwickeln."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
