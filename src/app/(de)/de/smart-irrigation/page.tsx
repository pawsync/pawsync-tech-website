import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Intelligente Bewässerung & Wassermanagement | PawSync",
  description:
    "Individuelle intelligente Bewässerungssysteme: Bodenfeuchtesensoren, automatische Ventile und Pumpen, Tank- und Durchflussüberwachung sowie wetterabhängige Steuerung für Höfe und Gewächshäuser.",
  alternates: buildAlternates("de", "smart-irrigation"),
  openGraph: buildOpenGraph("de", "smart-irrigation"),
};

const hero = {
  "breadcrumb": "Intelligente Bewässerung",
  "eyebrow": "Intelligente Bewässerung & Wassermanagement",
  "h1": "Intelligente Bewässerungssysteme für Felder, Weiden & Gewächshäuser",
  "intro": "Bodenfeuchtemessung, automatische Ventile und Pumpen sowie Tank- und Durchflussüberwachung, damit Wasser dann ausgebracht wird, wenn es gebraucht wird, und Probleme früh auffallen."
};

const image = {
  "src": "/home/solutions/irrigation-full.webp",
  "alt": "Infografik intelligente Bewässerung: solarbetriebene Steuerung, Bodenfeuchtesonde, Magnetventil und Durchflussmesser auf einem Feld",
  "height": 613
};

const chips = {
  "heading": "Was das System messen und steuern kann",
  "items": [
    "Bodenfeuchte",
    "Bodentemperatur",
    "Niederschlag",
    "Tankfüllstand",
    "Durchfluss",
    "Druck",
    "Ventile",
    "Pumpen",
    "Wetterdaten",
    "Leckerkennung",
    "Solarstrom"
  ]
};

const detailsCopy = {
  "eyebrow": "So wird Wasser gespart",
  "heading": "Was ein intelligentes Bewässerungssystem leistet",
  "intro": "Zeitschaltuhren bewässern nach Plan, ob der Boden es braucht oder nicht. Ein intelligentes Bewässerungssystem entscheidet anhand von Messwerten, wann und wie viel bewässert wird, und warnt, wenn etwas schiefgeht.",
  "items": [
    {
      "title": "Bodenfeuchtemessung",
      "description": "Sonden in Wurzeltiefe zeigen, wie viel Wasser Kulturen oder Weide tatsächlich zur Verfügung steht, sodass die Bewässerung startet, wenn der Boden austrocknet, statt zu einer festen Uhrzeit."
    },
    {
      "title": "Automatische Ventile & Pumpen",
      "description": "Magnetventile und Pumpensteuerungen schalten Zonen nach Bodenfeuchte, Zeitplan oder Fernbefehl, mit Handbetrieb."
    },
    {
      "title": "Wetterabhängige Steuerung",
      "description": "Regensensoren und Wettervorhersagen lassen das System Zyklen auslassen oder verkürzen, wenn Regen erwartet wird oder bereits gefallen ist."
    },
    {
      "title": "Tank- & Speicherfüllstände",
      "description": "Füllstandssensoren in Tanks, Teichen und Speichern zeigen, wie viel Wasser noch da ist, und stoppen Pumpen, bevor sie trocken laufen."
    },
    {
      "title": "Durchfluss & Leckerkennung",
      "description": "Durchflussmesser vergleichen erwarteten und tatsächlichen Durchfluss pro Zone und melden geplatzte Leitungen, Verstopfungen und Ventile, die nicht öffnen oder schließen."
    },
    {
      "title": "Betrieb ohne Netzanschluss",
      "description": "Solarbetriebene Steuerungen und stromsparende Funkknoten für abgelegene Felder ohne Netzstrom oder Verkabelung."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering-Dienstleistungen",
  "heading": "So wird ein intelligentes Bewässerungssystem entwickelt",
  "intro": "Feldgröße, Wasserquelle, Kultur und Stromversorgung prägen jedes Bewässerungsdesign. Diese Punkte klären wir mit Ihnen, bevor Hardware gebaut wird.",
  "options": [
    {
      "title": "Sensorknoten",
      "description": "Bodenfeuchte-, Regen-, Füllstands- und Durchflusssensoren auf stromsparenden Funkknoten, gebaut für Schlamm, Sonne und Frost."
    },
    {
      "title": "Ventil- & Pumpensteuerungen",
      "description": "Steuerungen für Magnetventile, Pumpen und vorhandene Bewässerungstechnik, mit lokalen Regeln, die auch offline weiterlaufen."
    },
    {
      "title": "Feldkonnektivität",
      "description": "LoRaWAN für große Flächen oder Mobilfunk für abgelegene Standorte, gewählt nach Feldgröße, Gelände und Entfernung zum Gateway."
    },
    {
      "title": "Energiekonzept",
      "description": "Auslegung von Batterie und Solar, damit Feldknoten und Steuerungen auch wolkige Wochen ohne Wartung durchhalten."
    },
    {
      "title": "Dashboard & Alarme",
      "description": "Bodenfeuchteverläufe, Wasserverbrauch pro Zone und Alarme bei Lecks, niedrigem Tankstand und defekten Ventilen, per Smartphone oder Web."
    }
  ],
  "stages": [
    "Standortaufnahme",
    "Zonen- & Sensorplan",
    "Hardware-Design",
    "Firmware",
    "Pilotzone",
    "Produktionsvorbereitung"
  ],
  "tradeoffsHeading": "Technische Abwägungen",
  "tradeoffs": [
    {
      "title": "Anzahl der Sonden vs. Kosten",
      "description": "Der Boden ist nicht überall gleich. Mehr Sonden geben ein besseres Bild, kosten aber mehr; wir setzen sie dort, wo Boden- und Kulturunterschiede am meisten zählen."
    },
    {
      "title": "Automatisch vs. beratend",
      "description": "Manche Betriebe möchten, dass Ventile automatisch schalten; andere bevorzugen Alarme und eine Empfehlung. Beides ist möglich, der Handbetrieb bleibt erhalten."
    },
    {
      "title": "Solar vs. nur Batterie",
      "description": "Solar erhöht Kosten und Größe, erspart aber Batteriewechsel bei Ventilsteuerungen und Pumpen, die mehr Strom brauchen als Sensoren."
    },
    {
      "title": "Nachrüstung vs. neues System",
      "description": "Vorhandene Pumpen und Ventile mit Sensorik und Steuerung nachzurüsten ist günstiger; eine neue Anlage kann von Anfang an für Automatisierung ausgelegt werden."
    }
  ],
  "inquiryHeading": "Angaben, die die Projektabschätzung ermöglichen",
  "inquiry": [
    "Kulturen oder Weide, Feldgrößen und Anzahl der Zonen",
    "Wasserquelle: Brunnen, Tank, Speicher oder Netz",
    "Vorhandene Pumpen, Ventile und Steuerungen",
    "Verfügbarer Strom an den Pumpen und im Feld",
    "Entfernungen zwischen den Feldern und zu den Hofgebäuden",
    "Ob automatische Steuerung oder nur Alarme gewünscht sind"
  ],
  "linksHeading": "Verwandte Seiten und Artikel",
  "links": [
    {
      "label": "Hofautomatisierung",
      "href": "/de/farm-automation"
    },
    {
      "label": "Umweltüberwachung",
      "href": "/de/environmental-monitoring"
    },
    {
      "label": "Ein LoRaWAN-Netz für den Hof planen",
      "href": "/de/blog/lorawan-farm-network-planning"
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
    "question": "Was ist ein intelligentes Bewässerungssystem?",
    "answer": "Ein intelligentes Bewässerungssystem nutzt Bodenfeuchtesensoren, Wetterdaten sowie Durchfluss- und Füllstandssensoren, um zu entscheiden, wann und wie viel bewässert wird, steuert Ventile und Pumpen automatisch oder per Fernbefehl und warnt bei Lecks oder Störungen."
  },
  {
    "question": "Wie steuern Bodenfeuchtesensoren die Bewässerung?",
    "answer": "Sonden in Wurzeltiefe melden, wie feucht der Boden ist. Fällt die Feuchte unter einen für Kultur und Bodenart festgelegten Wert, öffnet die Steuerung das Ventil der Zone und schließt es, wenn der Zielwert erreicht oder eine Zeitgrenze abgelaufen ist."
  },
  {
    "question": "Funktioniert das auf Feldern ohne Strom oder Internet?",
    "answer": "Ja. Feldknoten und Ventilsteuerungen können mit Batterie und Solar laufen und sich per LoRaWAN mit einem Gateway bei den Hofgebäuden verbinden oder per Mobilfunk, wo es kein Gateway gibt."
  },
  {
    "question": "Können Sie unsere vorhandene Bewässerung mit Sensoren nachrüsten?",
    "answer": "Oft ja. Viele vorhandene Pumpen und Ventile lassen sich über Relais oder ihre eigenen Steuerungen ansteuern. Die Kompatibilität prüfen wir bei der Projektabschätzung."
  },
  {
    "question": "Eignet sich das auch für die Wasserversorgung der Tiere?",
    "answer": "Ja. Dieselbe Füllstands-, Durchfluss- und Pumpensteuerung wird für die Tränkwasserversorgung eingesetzt, mit Alarmen, wenn Tränken oder Tanks leer werden."
  }
];

const cta = {
  "heading": "Benötigen Sie ein individuelles Bewässerungssystem?",
  "description": "Wir entwickeln Sensoren, Steuerungen und Konnektivität passend zu Ihren Feldern, Ihrer Wasserquelle und Ihrer Stromversorgung.",
  "primaryLabel": "Projekt starten",
  "secondaryLabel": "Alle Lösungen ansehen"
};

export default function SmartIrrigationPageDe() {
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

      <section aria-labelledby="smart-irrigation-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="smart-irrigation-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="smart-irrigation-scope" copy={scope} />

      <section aria-labelledby="smart-irrigation-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="smart-irrigation-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
