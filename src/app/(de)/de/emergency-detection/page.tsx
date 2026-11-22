import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Notfall- & Katastrophenerkennung für Höfe | PawSync",
  description:
    "Individuelle Frühwarnsysteme für Höfe und Tierhaltungen: Rauch, Brandrisiko, Hochwasser, extreme Hitze und Kälte, Wasserlecks sowie Strom- und Geräteausfall, mit SMS-, App- und lokalen Alarmen.",
  alternates: buildAlternates("de", "emergency-detection"),
  openGraph: buildOpenGraph("de", "emergency-detection"),
};

const hero = {
  "breadcrumb": "Notfall- & Katastrophenerkennung",
  "eyebrow": "Notfall- & Katastrophenerkennung",
  "h1": "Frühwarnsysteme für Höfe & Tierhaltungen",
  "intro": "Sensoren und Alarme, die Rauch, Brandrisiko, Hochwasser, extreme Temperaturen, Wasserlecks sowie Strom- oder Geräteausfälle früh melden, damit gehandelt werden kann, bevor Tiere oder Gebäude Schaden nehmen."
};

const image = {
  "src": "/home/solutions/emergency-full.webp",
  "alt": "Infografik Notfall- und Katastrophenerkennung: solarbetriebene Sensorstation über einem Ort im Tal, mit Beispielen für Hochwasser, Feuer, Erdbeben, Erdrutsch und Unwetter",
  "height": 613
};

const chips = {
  "heading": "Was das System erkennen kann",
  "items": [
    "Rauch",
    "Hitze & Brandrisiko",
    "Extreme Kälte",
    "Hochwasser",
    "Wasserlecks",
    "Stromausfall",
    "Notstromstatus",
    "Pumpenausfall",
    "Lüftungsausfall",
    "Gaswerte",
    "Unwetter"
  ]
};

const detailsCopy = {
  "eyebrow": "Warum Minuten zählen",
  "heading": "Notfälle, die ein Frühwarnsystem erkennen kann",
  "intro": "Auf einem Hof kann ein ausgefallener Lüfter, eine leere Wasserleitung oder ein kleines Feuer innerhalb weniger Stunden vielen Tieren schaden, oft nachts. Frühwarnsysteme sind darauf ausgelegt, es zuerst zu bemerken und sicherzustellen, dass jemand davon erfährt.",
  "items": [
    {
      "title": "Lüftungs- & Stromausfall",
      "description": "In geschlossenen Geflügel- und Schweineställen kann ein Stromausfall oder ein defekter Lüfter schnell zu gefährlicher Hitze führen. Überwachung von Strom, Lüftern und Temperatur mit batteriegepuffertem Alarm verschafft dem Personal Zeit."
    },
    {
      "title": "Rauch & Brandrisiko",
      "description": "Rauch- und Hitzesensoren in Ställen, Heulagern und Futterräumen sowie Temperaturüberwachung von Motoren und Schaltschränken können ein Brandrisiko melden, bevor sich Flammen ausbreiten."
    },
    {
      "title": "Hochwasser & Wasserlecks",
      "description": "Wasserstandssensoren in tief gelegenen Gebäuden und an Gewässern sowie Durchflussüberwachung der Leitungen warnen vor steigendem Wasser und Rohrbrüchen."
    },
    {
      "title": "Extreme Hitze & Kälte",
      "description": "Temperatur- und Feuchtegrenzwerte für Hitzestress oder Frostgefahr, einschließlich eingefrorener Wasserleitungen, durch die Tiere ohne Wasser bleiben können."
    },
    {
      "title": "Geräteausfall",
      "description": "Pumpen, Notstromaggregate, Kühlanlagen und Fütterungstechnik werden auf Stromaufnahme, Laufzeit und Störungen überwacht, damit eine stehende Maschine schnell auffällt."
    },
    {
      "title": "Eskalierende Alarme",
      "description": "Warn- und Kritikstufen mit lokaler Sirene, SMS, Anruf und App-Benachrichtigung, die an die nächste Person weitergehen, wenn niemand quittiert."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering-Dienstleistungen",
  "heading": "So wird ein Frühwarnsystem entwickelt",
  "intro": "Ein Alarmsystem ist nur nützlich, wenn es noch funktioniert, wenn etwas anderes ausgefallen ist. Redundanz und Rückfallwege werden von Anfang an mitgeplant. Diese Punkte klären wir mit Ihnen.",
  "options": [
    {
      "title": "Sensorstationen",
      "description": "Rauch-, Hitze-, Wasserstands-, Strom- und Gerätesensoren dort, wo die Risiken am größten sind, gebaut für Staub, Feuchte und den Außeneinsatz."
    },
    {
      "title": "Unabhängige Stromversorgung",
      "description": "Batterie- und Solarpufferung, damit Erkennung und Alarme gerade während des Stromausfalls weiterlaufen, vor dem sie warnen."
    },
    {
      "title": "Redundante Alarmwege",
      "description": "Mehr als ein Weg, Menschen zu erreichen, etwa Mobilfunk und LoRaWAN, dazu eine lokale Sirene, die ganz ohne Netz funktioniert."
    },
    {
      "title": "Alarmlogik",
      "description": "Zustände Normal, Warnung und Kritisch, Verzögerungen gegen Fehlalarme und Eskalationsregeln, wer wann benachrichtigt wird."
    },
    {
      "title": "Tests & Selbstprüfung",
      "description": "Regelmäßige Selbsttests von Sensoren, Batterien und Kommunikation, mit einem Alarm, wenn ein Teil des Systems sich nicht mehr meldet."
    }
  ],
  "stages": [
    "Risikoanalyse",
    "Sensor- & Alarmplan",
    "Hardware-Design",
    "Firmware & Alarmlogik",
    "Pilotinstallation",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Technische Abwägungen",
  "tradeoffs": [
    {
      "title": "Empfindlichkeit vs. Fehlalarme",
      "description": "Ein Alarm, der zu oft auslöst, wird ignoriert. Verzögerungen, Bestätigung durch einen zweiten Sensor und sinnvolle Grenzwerte halten Alarme glaubwürdig."
    },
    {
      "title": "Mobilfunk vs. LoRaWAN vs. lokale Sirene",
      "description": "Mobilfunk erreicht Telefone direkt; LoRaWAN deckt einen Standort günstig ab; eine Sirene funktioniert ohne Netz. Kritische Standorte kombinieren meist alle drei."
    },
    {
      "title": "Größe der Notstrompufferung vs. Kosten",
      "description": "Längere Pufferung kostet mehr und braucht mehr Platz. Sie wird danach ausgelegt, wie lange ein Ausfall überbrückt werden muss, bis jemand vor Ort ist."
    },
    {
      "title": "Eigenständig vs. integriert",
      "description": "Ein eigenständiges System läuft weiter, wenn andere Hofsysteme ausfallen; die Anbindung an Klimasteuerungen liefert mehr Kontext, schafft aber Abhängigkeiten."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Welche Notfälle Ihnen die größten Sorgen machen",
    "Zu schützende Gebäude, Tiere und Geräte",
    "Mobilfunkabdeckung und Internet am Standort",
    "Vorhandene Alarme, Steuerungen oder Notstromaggregate",
    "Wer in welcher Reihenfolge alarmiert werden soll",
    "Wie schnell jemand vor Ort sein kann"
  ],
  "linksHeading": "Verwandte Seiten und Artikel",
  "links": [
    {
      "label": "Umweltüberwachung",
      "href": "/de/environmental-monitoring"
    },
    {
      "label": "Hofautomatisierung",
      "href": "/de/farm-automation"
    },
    {
      "label": "Geflügel-Überwachungssysteme",
      "href": "/de/poultry-farming"
    },
    {
      "label": "Ein LoRaWAN-Netz für den Hof planen",
      "href": "/de/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "Dieser Abschnitt beschreibt individuelle Engineering-Dienstleistungen. Ein Frühwarnsystem ergänzt zertifizierte Brandmeldeanlagen und örtliche Sicherheitsvorschriften, ersetzt sie aber nicht. Referenzdesigns auf unserer Projektseite sind Konzepte und Prototypen, keine käuflichen Produkte."
};

const faqCopy = {"heading": "Häufige Fragen"};

const faqs = [
  {
    "question": "Was kann ein Frühwarnsystem auf dem Hof erkennen?",
    "answer": "Typische Systeme überwachen Rauch und Brandrisiko, Lüftungs- und Stromausfall, extreme Hitze oder Kälte, Hochwasser und Wasserlecks sowie Störungen an Pumpen, Notstromaggregaten oder Geräten und alarmieren per Sirene, SMS, Anruf oder App."
  },
  {
    "question": "Funktioniert der Alarm auch bei Stromausfall?",
    "answer": "Er sollte, und wir planen dafür. Sensoren, Steuerung und Kommunikation laufen über Batterie- oder Solarpufferung, und eine lokale Sirene kann auch ertönen, wenn Internet und Mobilfunk ausgefallen sind."
  },
  {
    "question": "Wie vermeiden Sie Fehlalarme?",
    "answer": "Mit sinnvollen Grenzwerten, kurzen Verzögerungen vor dem Alarm, Bestätigung durch einen zweiten Sensor, wo es darauf ankommt, und getrennten Warn- und Kritikstufen. Die Grenzwerte werden bei einer Pilotinstallation abgestimmt."
  },
  {
    "question": "Ersetzt das eine zertifizierte Brandmeldeanlage?",
    "answer": "Nein. Ein Frühwarnsystem ergänzt Überwachung, die Brandmelder nicht abdecken, etwa Lüftung, Wasser und Geräteausfall. Eine vorgeschriebene zertifizierte Brandmeldung sollte bestehen bleiben."
  },
  {
    "question": "Wer erhält die Alarme?",
    "answer": "Das legen Sie fest. Alarme können nacheinander an mehrere Personen gehen und an die nächste Person eskalieren, wenn innerhalb einer festgelegten Zeit niemand quittiert."
  }
];

const cta = {
  "heading": "Benötigen Sie ein Frühwarnsystem für Ihren Standort?",
  "description": "Wir entwickeln Sensoren, Notstromversorgung und Alarmwege passend zu den Risiken, Gebäuden und Tieren, die geschützt werden sollen.",
  "primaryLabel": "Projekt starten",
  "secondaryLabel": "Alle Lösungen ansehen"
};

export default function EmergencyDetectionPageDe() {
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

      <section aria-labelledby="emergency-detection-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="emergency-detection-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="emergency-detection-scope" copy={scope} />

      <section aria-labelledby="emergency-detection-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="emergency-detection-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
