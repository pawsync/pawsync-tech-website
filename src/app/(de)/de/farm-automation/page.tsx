import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Hofautomatisierung & Stallsteuerung | PawSync",
  description:
    "Individuelle Steuerungssysteme für Klima, Wasser, Fütterung und Infrastruktur – mit Smartphone- und Web-Dashboard-Steuerung nach Ihren Anforderungen.",
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
    items: ["Wassertanküberwachung", "Automatische Tränkesteuerung", "Pumpensteuerung", "Durchflussüberwachung", "Leckerkennung", "Wasserverfügbarkeitsalarme"],
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

const detailsCopy = {
  "eyebrow": "Was sich automatisieren lässt",
  "heading": "Hofautomatisierung, System für System",
  "intro": "Hofautomatisierung funktioniert am besten, wenn jeder Regelkreis einfach und zuverlässig ist: ein Sensor, eine Regel und ein Ausgang, mit Handbetrieb. Diese Systeme automatisieren wir am häufigsten.",
  "items": [
    {
      "title": "Stall- & Geflügelstallklima",
      "description": "Lüfter, Zuluftklappen, Heizungen, Kühlpads und Vernebelung, gestaffelt geschaltet nach Temperatur, Luftfeuchte, Ammoniak oder CO2 statt alles auf einmal."
    },
    {
      "title": "Tränken & Pumpen",
      "description": "Pumpen starten nach Füllstand oder Zeitplan, der Durchfluss wird überwacht, um Lecks und verstopfte Leitungen zu erkennen, und ein Alarm meldet, wenn kein Wasser mehr bei den Tieren ankommt."
    },
    {
      "title": "Fütterung",
      "description": "Zeitgesteuerte Futterautomaten und Dosierer mit Füllstandserfassung, Überwachung von Motor und Förderschnecke und Protokoll jeder Fütterung."
    },
    {
      "title": "Bewässerung",
      "description": "Ventile und Pumpen gesteuert nach Bodenfeuchte, Wetter und Zeitplan, damit Wasser dann kommt, wenn Kulturen oder Weiden es wirklich brauchen."
    },
    {
      "title": "Tore, Türen & Beleuchtung",
      "description": "Motorisierte Tore und Türen mit Positionserfassung sowie Lichtprogramme für Geflügel und Gewächshäuser, lokal oder per Smartphone gesteuert."
    },
    {
      "title": "Strom & Notversorgung",
      "description": "Erkennung von Netzausfällen, Start und Status des Notstromaggregats und Batteriepufferung der Steuerung selbst, damit kritische Systeme weiterlaufen."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering-Dienstleistungen",
  "heading": "So wird eine Hofsteuerung entwickelt",
  "intro": "Automatisierung betrifft Geräte, von denen Tiere abhängen. Sicherheit und Rückfallverhalten werden deshalb von Anfang an mitgeplant. Diese Punkte klären wir mit Ihnen.",
  "options": [
    {
      "title": "Steuerungshardware",
      "description": "Eigene Platinen oder robuste Steuerungen mit Relais und Motortreibern, ausgelegt für Ihre Lüfter, Pumpen und Stellantriebe, in stalltauglichen Gehäusen."
    },
    {
      "title": "Lokale Regeln & Ausfallsicherheit",
      "description": "Kritische Regeln laufen direkt auf der Steuerung, sodass Lüftung oder Tränke weiterarbeiten, wenn Internet oder Cloud ausfallen."
    },
    {
      "title": "Sensoranbindung",
      "description": "Klima-, Füllstands-, Durchfluss- und Gerätesensoren, kabelgebunden oder drahtlos, passend zu dem, was jede Regel wissen muss."
    },
    {
      "title": "Fernsteuerung & Alarme",
      "description": "Steuerung per Smartphone und Web mit Handbetrieb, Alarmmeldungen und einem Protokoll, was wann und warum geschaltet hat."
    },
    {
      "title": "Anbindung vorhandener Geräte",
      "description": "Wo möglich werden die vorhandenen Lüfter, Pumpen und Steuerungen eingebunden, statt alles zu ersetzen."
    }
  ],
  "stages": [
    "Prozessanalyse",
    "Steuerlogik",
    "Hardware-Design",
    "Firmware",
    "Labortest",
    "Pilot vor Ort",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Technische Abwägungen",
  "tradeoffs": [
    {
      "title": "Lokale Steuerung vs. Cloud-Funktionen",
      "description": "Regeln auf der Steuerung funktionieren offline; Dashboards, Verlauf und Fernänderungen brauchen eine Verbindung. Kritische Aktionen bleiben lokal."
    },
    {
      "title": "Vollautomatik vs. Handbetrieb",
      "description": "Jeder automatisierte Ausgang behält einen Handmodus, damit das Personal bei Wartung oder besonderen Bedingungen eingreifen kann."
    },
    {
      "title": "Kabel vs. Funk",
      "description": "Verkabelte Sensoren und Ausgänge sind für sicherheitskritische Regelkreise am zuverlässigsten; Funk spart Verkabelung in großen oder älteren Gebäuden."
    },
    {
      "title": "Nachrüstung vs. neue Geräte",
      "description": "Vorhandene Lüfter und Pumpen nachzurüsten ist günstiger, aber ältere Geräte können begrenzen, was sich sicher messen oder schalten lässt."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Welche Geräte gesteuert werden sollen und wie sie heute geschaltet werden",
    "Welche Bedingungen oder Zeitpläne jede Aktion auslösen sollen",
    "Was bei Strom- oder Internetausfall weiterlaufen muss",
    "Anzahl und Größe der Gebäude oder Bereiche",
    "Vorhandene Steuerungen oder Software am Standort",
    "Wer Alarme erhalten und Einstellungen ändern darf"
  ],
  "linksHeading": "Verwandte Seiten und Artikel",
  "links": [
    {
      "label": "Umweltüberwachung",
      "href": "/de/environmental-monitoring"
    },
    {
      "label": "Geflügel-Überwachungssysteme",
      "href": "/de/poultry-farming"
    },
    {
      "label": "Intelligente Fütterungssysteme",
      "href": "/de/smart-feeding"
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
    "question": "Was ist Hofautomatisierung?",
    "answer": "Hofautomatisierung nutzt Sensoren und Steuerungen, um Geräte wie Lüfter, Heizungen, Pumpen, Futterautomaten und Tore nach Regeln oder Zeitplänen zu betreiben, mit Alarmen und Fernsteuerung per Smartphone oder Computer."
  },
  {
    "question": "Was passiert, wenn das Internet ausfällt?",
    "answer": "Kritische Regeln planen wir auf der lokalen Steuerung, sodass Lüftung, Heizung oder Tränke ohne Internet weiterlaufen. Fernzugriff und Alarme funktionieren wieder, sobald die Verbindung zurück ist."
  },
  {
    "question": "Können Sie meine vorhandenen Geräte automatisieren?",
    "answer": "Oft ja. Viele Lüfter, Pumpen und Heizungen lassen sich über Relais oder Schütze schalten, und manche vorhandenen Steuerungen können direkt angebunden werden. Was sicher und sinnvoll ist, prüfen wir bei der Projektabschätzung."
  },
  {
    "question": "Kann ich weiterhin von Hand steuern?",
    "answer": "Ja. Jeder automatisierte Ausgang behält einen Handmodus vor Ort und in der App, damit das Personal die Regeln bei Bedarf übersteuern kann."
  },
  {
    "question": "Was unterscheidet Automatisierung von Überwachung?",
    "answer": "Überwachung misst Bedingungen und alarmiert Sie; Automatisierung reagiert zusätzlich darauf, etwa indem Lüfter bei steigender Temperatur starten. Die meisten Projekte beginnen mit Überwachung und ergänzen Steuerung dort, wo sie am meisten Arbeit spart."
  }
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
          Fütterung und Infrastruktur – mit Steuerung per Smartphone oder
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
            festgelegten Regeln laufen – ohne Cloud-Abhängigkeit für
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

      <section aria-labelledby="farm-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="farm-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="farm-scope" copy={scope} />

      <section aria-labelledby="farm-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="farm-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Benötigen Sie ein individuelles Agrar-IoT-System?"
        description="Lassen Sie uns Hardware rund um Ihre Umgebung, Tiere und betrieblichen Anforderungen entwickeln."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen ansehen"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
