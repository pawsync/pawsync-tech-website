import type { Metadata } from "next";
import {
  Bird,
  Building2,
  Cpu,
  Dog,
  HeartPulse,
  Home,
  Microscope,
  Milk,
  PawPrint,
  Sprout,
  Tractor,
  TreePine,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Branchen: Haustiertechnologie, Nutztiere & Geflügel | PawSync",
  description:
    "PawSync entwickelt Elektronik für Haustiertechnologie, Nutztier-, Milchvieh- und Geflügelbetriebe, Veterinärtechnik, Wildtierforschung und AgriTech-Start-ups.",
  alternates: buildAlternates("de", "industries"),
  openGraph: buildOpenGraph("de", "industries"),
};

const industries: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Dog, label: "Hersteller von Haustiergeräten", href: "/de/pet-technology" },
  { icon: Tractor, label: "Nutztierbetriebe", href: "/de/livestock-technology" },
  { icon: Milk, label: "Milchviehbetriebe" },
  { icon: Bird, label: "Geflügelbetriebe", href: "/de/poultry-farming" },
  { icon: PawPrint, label: "Pferdebetriebe" },
  { icon: HeartPulse, label: "Veterinärtechnologie" },
  { icon: Home, label: "Tierheime" },
  { icon: Building2, label: "Tierpensionen" },
  { icon: TreePine, label: "Wildtierforschung" },
  { icon: Sprout, label: "Intelligente Landwirtschaft" },
  { icon: Warehouse, label: "Landtechnik-Unternehmen" },
  { icon: Microscope, label: "Hofmanagement-Unternehmen" },
  { icon: Cpu, label: "IoT-Start-ups" },
  { icon: Zap, label: "AgriTech-Start-ups" },
];

const detailsCopy = {
  "eyebrow": "Was wir entwickeln",
  "heading": "Was wir für jede Branche entwickeln",
  "intro": "Dieselben Kernkompetenzen – Sensorik, stromsparende Elektronik, Funkanbindung und Firmware – werden in jeder Branche anders eingesetzt. Für diese Aufgaben entwickeln wir am häufigsten Hardware.",
  "items": [
    {
      "title": "Haustiertechnologie-Unternehmen",
      "description": "GPS- und Aktivitätstracker, intelligente Futterautomaten und vernetzte Haustierprodukte, ausgelegt auf kleine Größe, lange Batterielaufzeit und einfache Einrichtung, bereit für die Fertigung."
    },
    {
      "title": "Rinder- & Milchviehbetriebe",
      "description": "Fernüberwachung von Nutztieren, Rinder-Tracking, Halsbänder für virtuelle Zäune sowie Wasser- und Torsensoren, die auch auf großen Weiden mit wenig oder ohne Mobilfunk funktionieren."
    },
    {
      "title": "Geflügelbetriebe",
      "description": "Drahtlose Geflügelsensoren für Temperatur, Luftfeuchte, Ammoniak und CO2, mit Überwachung von Lüftung, Fütterung und Wasser über mehrere Ställe hinweg."
    },
    {
      "title": "Tiermedizin & Tierschutz",
      "description": "Geräte zur Gesundheits- und Aktivitätsüberwachung sowie Umweltüberwachung für Praxen, Tierheime, Zwinger und Tierpensionen."
    },
    {
      "title": "Wildtierforschung",
      "description": "Leichte, langlebige Tracking- und Messgeräte für Feldstudien, bei denen Gewichtsgrenzen, abgelegene Standorte und Batterielaufzeit jede Designentscheidung bestimmen."
    },
    {
      "title": "AgriTech- & IoT-Start-ups",
      "description": "Vom Machbarkeitsnachweis zum fertigungsreifen Gerät: Leiterplattendesign, Firmware, Prototypen und Fertigungsunterlagen, damit ein Start-up den Markt testen und wachsen kann."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Zusammenarbeit",
  "heading": "So arbeiten wir mit unterschiedlichen Kunden",
  "intro": "Ein Hof, eine Haustiermarke und ein Forschungsteam brauchen Unterschiedliches von einem Engineering-Partner. Wir passen die Zusammenarbeit daran an, wer das Gerät baut, verkauft und betreut.",
  "options": [
    {
      "title": "Produktunternehmen",
      "description": "Komplette Hardwareentwicklung für ein Gerät unter Ihrer Marke, mit Dokumentation und Unterlagen für Ihren Fertiger."
    },
    {
      "title": "Höfe & Betreiber",
      "description": "Ein individuelles Überwachungs- oder Steuerungssystem für Ihren Standort, ausgelegt auf Ihre Gebäude, Tiere und Konnektivität."
    },
    {
      "title": "Start-ups",
      "description": "Stufenweise Entwicklung, die früh einen funktionierenden Prototyp zu den Nutzern bringt, bevor in Serienwerkzeuge investiert wird."
    },
    {
      "title": "Forschungsteams",
      "description": "Kleinserien spezieller Geräte, gebaut nach den Mess-, Gewichts- und Batterieanforderungen einer Studie."
    },
    {
      "title": "Gerätehersteller",
      "description": "Ergänzung vorhandener Agrar- oder Tierpflegegeräte um Sensorik, Konnektivität oder Fernüberwachung."
    }
  ],
  "stages": [
    "Erstgespräch",
    "Anforderungen",
    "Architektur",
    "Prototyp",
    "Tests",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Was jedes Projekt prägt",
  "tradeoffs": [
    {
      "title": "Stückkosten vs. Stückzahl",
      "description": "Ein Gerät für Tausende Exemplare wird anders entwickelt als eine Serie von fünfzig. Die Zielstückzahl bestimmt Bauteile und Gehäuse."
    },
    {
      "title": "Standardmodul vs. eigene Hardware",
      "description": "Wo ein vorhandenes Modul reicht, setzen wir es ein. Eigene Platinen lohnen sich, wenn Größe, Stromverbrauch oder Kosten es erfordern."
    },
    {
      "title": "Tempo vs. Zertifizierungsreife",
      "description": "Ein schneller Prototyp beweist die Idee; ein Produkt für den Verkauf braucht zusätzlich Designentscheidungen, die Funk- und Sicherheitszertifizierung unterstützen."
    },
    {
      "title": "Funktionen vs. Batterielaufzeit",
      "description": "Jeder zusätzliche Sensor und jede häufigere Meldung kostet Laufzeit. Jede Branche zieht diese Grenze anders."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Ihre Branche und wer das Gerät nutzen wird",
    "Welches Problem das Gerät lösen soll",
    "Erwartete Stückzahl",
    "Benötigte Batterielaufzeit und Konnektivität",
    "Zeitplan und mögliche Zertifizierungen",
    "Vorhandene Hardware, Software oder Prototypen"
  ],
  "linksHeading": "Verwandte Seiten",
  "links": [
    {
      "label": "Haustiertechnologie",
      "href": "/de/pet-technology"
    },
    {
      "label": "Fernüberwachung von Nutztieren",
      "href": "/de/livestock-technology"
    },
    {
      "label": "Geflügel-Überwachungssysteme",
      "href": "/de/poultry-farming"
    },
    {
      "label": "IoT-Elektronik entwickeln",
      "href": "/de/custom-electronics"
    }
  ],
  "note": "Dieser Abschnitt beschreibt individuelle Engineering-Dienstleistungen. Referenzdesigns auf unserer Projektseite sind Konzepte und Prototypen, keine käuflichen Produkte."
};

const faqCopy = {"heading": "Häufige Fragen"};

const faqs = [
  {
    "question": "Arbeiten Sie nur mit landwirtschaftlichen Betrieben?",
    "answer": "Nein. Wir arbeiten auch mit Haustiermarken, Tiermedizin- und Tierschutzorganisationen, Forschungsteams, Geräteherstellern und Start-ups. Gemeinsam ist allen Elektronik für Tiere, Höfe oder vernetzte Umgebungen."
  },
  {
    "question": "Können Sie ein Produkt entwickeln, das wir unter eigener Marke verkaufen?",
    "answer": "Ja. Wir übernehmen Hardwaredesign, Firmware und Prototypen und übergeben anschließend Designdaten, Stückliste und Prüfabläufe, die Ihr Fertiger braucht."
  },
  {
    "question": "Arbeiten Sie mit Start-ups in einer frühen Phase?",
    "answer": "Ja. Viele Projekte beginnen mit einer Idee oder einem groben Prototyp. Wir helfen, Anforderungen festzulegen, einen funktionierenden Prototyp zu bauen und den Weg zur Serie zu planen."
  },
  {
    "question": "Meine Branche ist nicht aufgeführt. Können Sie trotzdem helfen?",
    "answer": "Wahrscheinlich. Wenn es in Ihrem Projekt um Tiere, Landwirtschaft oder vernetzte Sensorik geht, schicken Sie uns eine kurze Beschreibung, und wir sagen Ihnen, ob es passt."
  }
];

export default function IndustriesPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Branchen" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Branchen</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Entwickelt für Tier- &amp; Agrartechnologie
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Wo Tiere und Elektronik aufeinandertreffen, ist genau das die Art
          von Problem, für die wir Hardware entwickeln.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const cardClass =
              "flex flex-col items-center gap-3 rounded-2xl border border-[var(--ts-navy)]/8 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]";
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                  <industry.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-[var(--ts-navy)]">{industry.label}</span>
              </>
            );
            return industry.href ? (
              <Link key={industry.label} href={industry.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={industry.label} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="industries-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="industries-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {detailsCopy.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">{detailsCopy.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailsCopy.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceScope id="industries-scope" copy={scope} />

      <section aria-labelledby="industries-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="industries-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Ihre Branche nicht gefunden?"
        description="Wenn Tiere und Elektronik im Spiel sind, können wir wahrscheinlich helfen."
        primaryLabel="Ihr Projekt besprechen"
        primaryHref="/de/contact"
      />
    </>
  );
}
