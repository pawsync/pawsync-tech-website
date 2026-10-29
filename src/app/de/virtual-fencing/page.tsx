import type { Metadata } from "next";
import Link from "next/link";
import {
  Bell,
  MapPinned,
  Radar,
  Settings2,
  ShieldAlert,
  Smartphone,
  Users,
  Vibrate,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Virtuelle Einzäunung mit GPS für Nutztiere | PawSync",
  description:
    "Individuelle Entwicklung virtueller Einzäunung mit GPS für Nutztiere: Halsband-Hardware, Grenzlogik und Alarme, ausgelegt nach Ihren Anforderungen.",
  alternates: buildAlternates("de", "virtual-fencing"),
  openGraph: buildOpenGraph("de", "virtual-fencing"),
};

const capabilities = [
  { icon: Radar, title: "Individuelle, anpassbare Grenzen", description: "Zonen können so ausgelegt werden, dass sie in einer Web- oder mobilen Oberfläche gezeichnet und aktualisiert werden — keine Kabel, keine Pfosten zum Versetzen." },
  { icon: Bell, title: "Bewegungsalarme", description: "Alarme können so ausgelegt werden, dass sie melden, wenn sich ein Tier einer Grenze nähert oder sie überschreitet." },
  { icon: MapPinned, title: "Unterstützung mehrerer Zonen", description: "Weideflächen rotieren oder separate Zonen für verschiedene Gruppen verwalten." },
  { icon: Smartphone, title: "Fernkonfiguration", description: "Grenzen können so ausgelegt werden, dass sie sich vom Feld oder Büro aus aktualisieren lassen, ohne Vor-Ort-Einsatz." },
  { icon: Vibrate, title: "Akustische & haptische Signale", description: "Progressive Halsbandsignale können so ausgelegt werden, dass sie ein Tier warnen, bevor es die Grenze erreicht." },
  { icon: ShieldAlert, title: "Alarme bei Grenzannäherung", description: "Frühwarnalarme können für Tiere ausgelegt werden, die sich schnell auf eine Grenze zubewegen." },
  { icon: Users, title: "Mehrtier-Zonen", description: "Grenzen für einzelne Tiere oder ganze Herden gleichzeitig verwalten." },
  { icon: Settings2, title: "Tracking-Integration", description: "Lässt sich mit individuell entwickelter GPS-Tracking-Hardware zu einem System aus Standort und Grenze kombinieren." },
];

const faqs = [
  { question: "Ersetzt die virtuelle Einzäunung physische Zäune vollständig?", answer: "Sie kann die Abhängigkeit von physischer Einzäunung in vielen Umgebungen verringern, aber der richtige Ansatz hängt von Gelände, Tierart und örtlichen Vorschriften ab — wir helfen Ihnen zu beurteilen, was passt." },
  { question: "Wie lernt ein Tier die Grenze kennen?", answer: "Halsbänder verwenden typischerweise ein progressives Audiosignal und in manchen Systemen zusätzlich einen kurzen, sanften Impuls, der dem Tier die Möglichkeit gibt, umzukehren, bevor es die Grenze erreicht." },
  { question: "Können Zonen aus der Ferne geändert werden?", answer: "Das ist möglich: Änderungen der Grenzen über eine Web- oder mobile Oberfläche können eingeplant werden, sodass keine Hardware versetzt werden muss." },
];

export default function VirtualFencingPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Lösungen", href: "/de/solutions" }, { label: "Virtuelle Einzäunung" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Virtuelle Einzäunung</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          GPS- &amp; funkbasierte virtuelle Einzäunung
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Geben Sie Tieren Freiraum innerhalb festgelegter Zonen, mit
          GPS-Ortung anstelle von — oder ergänzend zu —
          traditioneller Einzäunung. Teil unserer Arbeit zur{" "}
          <Link href="/de/livestock-technology" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
            Nutztier-Fernüberwachung
          </Link>
          .
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
              Grenzen ohne Kabel
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <ServiceCard key={item.title} locale="de" {...item} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ts-gray)]">
            Dies sind individuelle Engineering-Dienstleistungen: Wir
            entwickeln Hardware und Grenzlogik nach Ihren Anforderungen. Es
            handelt sich nicht um Standardprodukte, und das Beispiel auf
            unserer Projektseite ist ein Referenzdesign, keine im Feld
            erprobte Installation.
          </p>
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
        heading="Benötigen Sie ein individuelles System zur virtuellen Einzäunung?"
        description="Wir entwickeln Hardware und Grenzlogik rund um Ihre Tiere und Ihr Gelände."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
