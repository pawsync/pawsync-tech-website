import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Tiergesundheitsüberwachung: Geräte & Sensoren | PawSync",
  description:
    "Individuelle Geräte zur Tiergesundheitsüberwachung: Sensoren für Aktivität, Wiederkauen, Temperatur und Verhalten bei Rindern, Nutztieren und Haustieren, mit Alarmen bei frühen Krankheitszeichen.",
  alternates: buildAlternates("de", "animal-health-monitoring"),
  openGraph: buildOpenGraph("de", "animal-health-monitoring"),
};

const hero = {
  "breadcrumb": "Tiergesundheitsüberwachung",
  "eyebrow": "Tiergesundheitsüberwachung",
  "h1": "Geräte zur Gesundheitsüberwachung für Nutztiere & Haustiere",
  "intro": "Tragbare und fest installierte Sensoren erfassen Aktivität, Ruhezeiten, Temperatur und Verhalten, damit Veränderungen, die auf Krankheit, Brunst oder Verletzung hindeuten, früher auffallen."
};

const image = {
  "src": "/home/solutions/animal-health-full.webp",
  "alt": "Infografik Tiergesundheitsüberwachung: Kuh mit Halsband und Ohrmarke, ein Gateway und die Schritte Erfassen, Verbinden, Analysieren, Überwachen, Alarmieren",
  "height": 675
};

const chips = {
  "heading": "Messbare Signale",
  "items": [
    "Aktivität",
    "Ruhe- & Liegezeit",
    "Wiederkauen",
    "Körpertemperatur",
    "Fresszeit",
    "Tränkebesuche",
    "Standort",
    "Körperhaltung",
    "Herzfrequenz",
    "Gewicht",
    "Umgebungsbedingungen"
  ]
};

const detailsCopy = {
  "eyebrow": "Was die Daten zeigen",
  "heading": "Frühe Anzeichen statt nur Daten",
  "intro": "Gesundheitsüberwachung ist dann nützlich, wenn aus Messwerten frühe Warnungen werden. Plötzliche Abweichungen vom normalen Muster eines Tieres sind oft wichtiger als ein einzelner Wert.",
  "items": [
    {
      "title": "Aktivität & Ruhe",
      "description": "Beschleunigungssensoren in Halsbändern, Ohrmarken oder Fußbändern zeigen, wie viel sich ein Tier bewegt und liegt. Ein deutlicher Rückgang kann auf Lahmheit oder Krankheit hinweisen, ein Anstieg bei Rindern auf Brunst."
    },
    {
      "title": "Wiederkauen & Fressen",
      "description": "Die Kau- und Fresszeit gehört zu den frühesten Hinweisen auf Verdauungs- oder Stoffwechselprobleme bei Rindern, oft bevor Symptome sichtbar werden."
    },
    {
      "title": "Temperatur",
      "description": "Temperaturverläufe an Haut, Ohr oder per Bolus helfen, Fieber und Hitzestress zu erkennen. Die Messstelle ist entscheidend: Hautwerte folgen dem Wetter, deshalb werden Verläufe pro Tier verglichen."
    },
    {
      "title": "Tränke- & Futterbesuche",
      "description": "Sensoren an Tränken und Futterplätzen zeigen zusammen mit RFID, welche Tiere weniger fressen und trinken als sonst."
    },
    {
      "title": "Haustiere",
      "description": "Aktivitäts-, Schlaf- und Kratzmuster aus leichten Wearables helfen Besitzern und Tierärzten, schleichende Veränderungen der Gesundheit zu erkennen."
    },
    {
      "title": "Alarme & Verläufe",
      "description": "Regeln und Referenzwerte pro Tier machen aus Rohdaten eine kurze Liste der Tiere, die heute kontrolliert werden sollten, mit Verlauf für den Tierarzt."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering-Dienstleistungen",
  "heading": "So entsteht ein Gerät zur Gesundheitsüberwachung",
  "intro": "Gesundheitsgeräte müssen klein und angenehm zu tragen sein und monatelang mit einer Batterie laufen, während sie an einem sich bewegenden Tier zuverlässig messen. Diese Punkte klären wir mit Ihnen.",
  "options": [
    {
      "title": "Tragbare Hardware",
      "description": "Halsbänder, Ohrmarken, Fußbänder oder Geschirrgeräte mit Bewegungs- und Temperatursensoren, passend zu Tier und Umgebung."
    },
    {
      "title": "Verarbeitung im Gerät",
      "description": "Firmware, die Aktivität, Ruhe und Wiederkauen direkt im Gerät klassifiziert, sodass nur Zusammenfassungen gesendet werden und die Batterie geschont wird."
    },
    {
      "title": "Konnektivität",
      "description": "BLE, LoRaWAN oder LTE-M, je nachdem, ob die Tiere im Stall, auf der Weide oder zu Hause sind."
    },
    {
      "title": "Referenzwerte & Alarme",
      "description": "Referenzwerte und Alarmregeln pro Tier, entwickelt mit Ihren Tierärzten oder Fachleuten, gesendet an ein Dashboard oder eine App."
    },
    {
      "title": "Feldvalidierung",
      "description": "Prototypen werden am Tier gegen Beobachtungen oder Referenzmessungen getestet, bevor es in die Produktion geht."
    }
  ],
  "stages": [
    "Erstgespräch",
    "Sensorauswahl",
    "Hardware-Design",
    "Firmware & Algorithmen",
    "Prototyp",
    "Feldvalidierung",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Technische Abwägungen",
  "tradeoffs": [
    {
      "title": "Abtastrate vs. Batterielaufzeit",
      "description": "Wiederkauen oder Gangbild zu erkennen erfordert schnelle Bewegungsmessung, die Strom kostet. Die Verarbeitung im Gerät hält die Funknutzung gering."
    },
    {
      "title": "Gerätegröße vs. Kapazität",
      "description": "Eine kleinere Marke ist angenehmer, fasst aber eine kleinere Batterie. Tiergröße und Wechselintervall der Batterie setzen die Grenze."
    },
    {
      "title": "Messstelle vs. Genauigkeit",
      "description": "Ohr, Hals, Bein und innere Messung erfassen jeweils andere Signale. Die richtige Stelle hängt davon ab, was erkannt werden soll."
    },
    {
      "title": "Alarmempfindlichkeit vs. Fehlalarme",
      "description": "Zu empfindlich, und das Personal vertraut den Alarmen nicht mehr; zu streng, und echte Probleme werden übersehen. Die Grenzwerte werden in der Validierung abgestimmt."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Tierart, Alter sowie Stall- oder Weidebedingungen",
    "Welche Gesundheitszustände oder Ereignisse erkannt werden sollen",
    "Wo am Tier ein Gerät getragen werden kann",
    "Benötigte Batterielaufzeit und zulässige Gerätegröße",
    "Vorhandene Herdenmanagement- oder Tierarztsoftware",
    "Zielstückzahl und Zeitplan"
  ],
  "linksHeading": "Verwandte Seiten und Artikel",
  "links": [
    {
      "label": "Fernüberwachung von Nutztieren",
      "href": "/de/livestock-technology"
    },
    {
      "label": "GPS-Tracking für Rinder und Nutztiere",
      "href": "/de/animal-tracking"
    },
    {
      "label": "Haustiertechnologie",
      "href": "/de/pet-technology"
    },
    {
      "label": "Sensoren für die Nutztierüberwachung erklärt",
      "href": "/de/blog/livestock-monitoring-sensors"
    }
  ],
  "note": "Dieser Abschnitt beschreibt individuelle Engineering-Dienstleistungen. Geräte zur Gesundheitsüberwachung unterstützen die tierärztliche Diagnose, ersetzen sie aber nicht. Referenzdesigns auf unserer Projektseite sind Konzepte und Prototypen, keine käuflichen Produkte."
};

const faqCopy = {"heading": "Häufige Fragen"};

const faqs = [
  {
    "question": "Was ist Tiergesundheitsüberwachung?",
    "answer": "Tiergesundheitsüberwachung nutzt Sensoren am oder in der Nähe des Tieres, um Signale wie Aktivität, Ruhe, Wiederkauen, Temperatur und Fressverhalten zu erfassen, und warnt, wenn sich das Muster eines Tieres so verändert, dass Krankheit, Brunst oder Verletzung möglich sind."
  },
  {
    "question": "Können Sensoren Krankheiten bei Rindern erkennen?",
    "answer": "Sensoren stellen keine Diagnose, aber Veränderungen bei Wiederkauen, Aktivität, Liegezeit und Temperatur zeigen sich oft vor sichtbaren Symptomen. Die Überwachung markiert, welche Tiere kontrolliert werden sollten, damit Tierarzt oder Betreuer früher handeln können."
  },
  {
    "question": "Wie lange halten die Batterien?",
    "answer": "Das hängt von den Sensoren ab, davon, wie oft Daten verarbeitet und gesendet werden, und von der Batteriegröße. Die Verarbeitung im Gerät und das Senden von Zusammenfassungen statt Rohdaten sind der wichtigste Hebel für längere Laufzeit."
  },
  {
    "question": "Entwickeln Sie Gesundheitsgeräte auch für Haustiere?",
    "answer": "Ja. Wir entwickeln leichte Wearables für Hunde und Katzen sowie Halsbänder, Ohrmarken und Fußbänder für Rinder, Schafe, Ziegen und Pferde."
  },
  {
    "question": "Lassen sich die Daten an unsere Herdensoftware anbinden?",
    "answer": "Oft ja. Wir können Daten über eine Schnittstelle an eine bestehende Plattform senden oder für das Projekt ein einfaches Dashboard bauen."
  }
];

const cta = {
  "heading": "Benötigen Sie ein individuelles Gerät zur Tiergesundheit?",
  "description": "Wir entwickeln Sensoren, Firmware und Alarme passend zu Ihren Tieren, Ihrer Umgebung und den Zuständen, die erkannt werden sollen.",
  "primaryLabel": "Projekt starten",
  "secondaryLabel": "Alle Lösungen ansehen"
};

export default function AnimalHealthMonitoringPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: hero.breadcrumb }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          {hero.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">{hero.intro}</p>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={image.height}
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority
          className="h-auto w-full rounded-2xl shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
          {chips.heading}
        </h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {chips.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="animal-health-monitoring-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="animal-health-monitoring-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
        </div>
      </section>

      <ServiceScope id="animal-health-monitoring-scope" copy={scope} />

      <section aria-labelledby="animal-health-monitoring-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="animal-health-monitoring-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref="/de/contact"
        secondaryLabel={cta.secondaryLabel}
        secondaryHref="/de/solutions"
      />
    </>
  );
}
