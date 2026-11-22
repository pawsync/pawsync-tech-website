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
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Umweltsensoren für Hof & Stall | PawSync",
  description:
    "24/7-Umweltsensorik für Ställe, Geflügelhäuser, Gewächshäuser und Unterkünfte – Temperatur, Luftfeuchtigkeit, Luftqualität und mehr.",
  alternates: buildAlternates("de", "environmental-monitoring"),
  openGraph: buildOpenGraph("de", "environmental-monitoring"),
};

const sensors = [
  "Temperatur", "Luftfeuchtigkeit", "Luftqualität", "CO2", "Ammoniak", "Rauch",
  "Wasserstand", "Regen", "Bodenfeuchte", "Licht", "Luftdruck", "Wind", "Gerätetemperatur",
];

const applications = [
  { icon: Warehouse, title: "Stallüberwachung", description: "Kontinuierliche Klimaüberwachung für Rinder- und Pferdeställe." },
  { icon: PawPrint, title: "Geflügelstallüberwachung", description: "Enge Umwelttoleranzen, rund um die Uhr erfasst.", href: "/de/poultry-farming" },
  { icon: Flower2, title: "Gewächshausüberwachung", description: "Temperatur-, Feuchtigkeits- und Lichterfassung für kontrolliertes Wachstum." },
  { icon: Home, title: "Tierheimüberwachung", description: "Komfortable, sichere Bedingungen für untergebrachte und Pflegetiere." },
  { icon: Building2, title: "Futterlagerüberwachung", description: "Feuchtigkeits- und Temperaturerfassung zum Schutz gelagerten Futters." },
  { icon: Droplets, title: "Wassertanküberwachung", description: "Füllstands- und Qualitätserfassung für eine zuverlässige Wasserversorgung." },
  { icon: Sprout, title: "Überwachung im Freiland", description: "Wetterfeste Sensoren für Bedingungen im offenen Feld." },
];

const detailsCopy = {
  "eyebrow": "Was gemessen wird",
  "heading": "Was jeder Messwert aussagt",
  "intro": "Ein Umweltüberwachungssystem für den Hof ist nur dann nützlich, wenn es misst, was Tiere, Pflanzen und Geräte tatsächlich beeinflusst. Um diese Messwerte bauen wir Systeme am häufigsten auf – und deshalb sind sie wichtig.",
  "items": [
    {
      "title": "Temperatur & Luftfeuchtigkeit",
      "description": "Zusammen zeigen sie das Hitzestressrisiko für Rinder, Schweine und Geflügel und steuern Lüfter, Kühlpads, Vernebelung und Heizungen. Messungen auf Tierhöhe sind aussagekräftiger als ein Sensor unter dem Dach."
    },
    {
      "title": "Ammoniak & CO2",
      "description": "In geschlossenen Ställen zeigen sie, ob die Lüftung ausreicht. Ammoniak reizt Augen und Atemwege; steigendes CO2 bedeutet, dass zu wenig Frischluft hereinkommt."
    },
    {
      "title": "Rauch & Gerätetemperatur",
      "description": "Frühwarnung bei Bränden in Stall und Futterlager sowie bei überhitzten Motoren, Pumpen und Schaltschränken, bevor ein Defekt zum Notfall wird."
    },
    {
      "title": "Wasserstand & Versorgung",
      "description": "Füllstände von Tanks, Tränken und Behältern, damit ein leerer Tank, ein klemmendes Schwimmerventil oder ein Leck auffällt, bevor die Tiere ohne Wasser sind."
    },
    {
      "title": "Futterlagerung",
      "description": "Feuchte und Temperatur in Silos und Futterräumen, wo feuchte Stellen und Hotspots zu Schimmel und verdorbenem Futter führen."
    },
    {
      "title": "Boden, Regen, Wind & Licht",
      "description": "Für Gewächshäuser und Freiflächen: Bodenfeuchte für die Bewässerung, Regen und Wind für Unwetterwarnungen und Lichtwerte für den kontrollierten Anbau."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering-Dienstleistungen",
  "heading": "So entsteht ein Überwachungsnetz",
  "intro": "Jeder Standort ist anders: Gebäudegrößen, Entfernungen, Strom- und Internetzugang prägen das Design. Diese Punkte klären wir mit Ihnen, bevor Hardware gebaut wird.",
  "options": [
    {
      "title": "Entwicklung der Sensorknoten",
      "description": "Batterie- oder netzbetriebene Knoten, die die benötigten Sensoren auf einer Platine vereinen, mit Kalibrier- und Selbsttestfunktionen."
    },
    {
      "title": "Gateway & Konnektivität",
      "description": "LoRaWAN, WLAN oder LTE-M – gewählt nach Abstand zwischen Gebäuden, Wandmaterial und vorhandenem Internet."
    },
    {
      "title": "Gehäuse für den Stallalltag",
      "description": "Gehäuse, die Staub, Kondenswasser, Ammoniak und Reinigung standhalten, mit Sensoröffnungen, die auch in verschmutzter Luft genau messen."
    },
    {
      "title": "Alarme & Dashboard",
      "description": "Grenzwerte, Alarme per SMS, E-Mail oder App und Datenübergabe an eine bestehende Plattform oder ein eigenes Projekt-Dashboard."
    },
    {
      "title": "Pilotinstallation",
      "description": "Zunächst wenige Knoten in einem Gebäude, um Reichweite, Batterielaufzeit und Messgenauigkeit vor dem Ausbau zu prüfen."
    }
  ],
  "stages": [
    "Standortanforderungen",
    "Sensorauswahl",
    "Netzplanung",
    "Prototyp-Knoten",
    "Pilotinstallation",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Technische Abwägungen",
  "tradeoffs": [
    {
      "title": "Messintervall vs. Batterielaufzeit",
      "description": "Messungen jede Minute leeren Batterien viel schneller als alle 15 Minuten. Wir legen das Intervall danach fest, wie schnell sich ein Wert ändern kann."
    },
    {
      "title": "LoRaWAN vs. WLAN vs. Mobilfunk",
      "description": "LoRaWAN deckt oft den ganzen Hof mit einem Gateway bei geringem Stromverbrauch ab; WLAN passt zu Gebäuden, die es schon haben; Mobilfunk zu abgelegenen Standorten ohne Internet."
    },
    {
      "title": "Sensorkosten vs. Genauigkeit und Drift",
      "description": "Günstige Gassensoren driften in ammoniakhaltiger Luft schneller. Wo ein Wert Lüftung oder Alarme steuert, lohnt sich ein besserer Sensor oder regelmäßige Kalibrierung."
    },
    {
      "title": "Mehr Sensoren vs. einfachere Wartung",
      "description": "Jeder zusätzliche Knoten ist eine weitere Batterie und ein weiteres Gehäuse. Wir planen mit so wenigen Sensoren wie möglich, die trotzdem repräsentativ messen."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Art und Anzahl der zu überwachenden Gebäude oder Bereiche",
    "Was gemessen werden soll und welche Grenzwerte wichtig sind",
    "Entfernungen zwischen Gebäuden und zum Hofbüro",
    "Verfügbarer Netzstrom und Internet am Standort",
    "Wie Sie Alarme erhalten möchten",
    "Vorhandene Steuerungen, Sensoren oder Software zum Anbinden"
  ],
  "linksHeading": "Verwandte Seiten und Artikel",
  "links": [
    {
      "label": "Geflügel-Überwachungssysteme",
      "href": "/de/poultry-farming"
    },
    {
      "label": "Hofautomatisierung",
      "href": "/de/farm-automation"
    },
    {
      "label": "Ammoniak-, CO2- und Feuchtesensoren im Geflügelstall",
      "href": "/de/blog/poultry-house-air-quality-sensors"
    },
    {
      "label": "Ein LoRaWAN-Netz für den Hof planen",
      "href": "/de/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "Dieser Abschnitt beschreibt individuelle Engineering-Dienstleistungen. Referenzdesigns auf unserer Projektseite sind Konzepte und Prototypen, keine käuflichen Produkte."
};

const faqCopy = {"heading": "Häufige Fragen"};

const faqs = [
  {
    "question": "Was gehört zu einem Umweltüberwachungssystem für den Hof?",
    "answer": "Sensorknoten in jedem Gebäude oder Bereich, ein Gateway oder eine Netzverbindung, die die Messwerte sammelt, und ein Dashboard oder eine App, die die Daten anzeigt und Alarme sendet. Knoten und Konnektivität entwickeln wir passend zu Ihrem Standort."
  },
  {
    "question": "Halten Sensoren Ammoniak, Staub und Reinigung aus?",
    "answer": "Ja, wenn Gehäuse und Sensoren dafür ausgewählt sind. Knoten für Stall und Geflügelhaus brauchen dichte Gehäuse, geschützte Sensoröffnungen und ammoniakbeständige Materialien sowie einen Plan für Reinigung und Kalibrierung."
  },
  {
    "question": "Brauche ich in jedem Gebäude Internet?",
    "answer": "Nein. Mit LoRaWAN kann ein gut platziertes Gateway oft den ganzen Hof abdecken, und nur das Gateway braucht eine Internetverbindung. Standorte ohne Internet können ein Mobilfunk-Gateway nutzen."
  },
  {
    "question": "Wie werden Alarme versendet?",
    "answer": "Meist per SMS, E-Mail oder App-Benachrichtigung, sobald ein Wert eine von Ihnen gesetzte Grenze überschreitet, etwa hohe Temperatur, wenig Wasser oder Rauch. Alarmregeln und Empfänger werden im Projekt festgelegt."
  },
  {
    "question": "Kann das System auch Lüfter, Heizungen oder Pumpen steuern?",
    "answer": "Ja. Die Überwachung lässt sich mit Relais und Steuerungen verbinden, sodass Geräte automatisch schalten. Wie Überwachung und Steuerung zusammenspielen, zeigt unsere Seite zur Hofautomatisierung."
  }
];

export default function EnvironmentalMonitoringPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Umweltüberwachung" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Umweltüberwachung</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          24/7-Umweltüberwachung für Höfe &amp; Ställe
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

      <section aria-labelledby="env-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="env-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="env-scope" copy={scope} />

      <section aria-labelledby="env-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="env-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
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
