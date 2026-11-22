import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Farm Emergency & Disaster Detection Systems | PawSync",
  description:
    "Custom early-warning systems for farms and animal facilities: smoke, fire risk, flooding, extreme heat and cold, water leaks, power and equipment failure, with SMS, app and local alarms.",
  alternates: buildAlternates("en", "emergency-detection"),
  openGraph: buildOpenGraph("en", "emergency-detection"),
};

const hero = {
  "breadcrumb": "Emergency & Disaster Detection",
  "eyebrow": "Emergency & Disaster Detection",
  "h1": "Early-Warning Systems for Farms & Animal Facilities",
  "intro": "Sensors and alarms that flag smoke, fire risk, flooding, extreme temperatures, water leaks and power or equipment failure early, so people can act before animals or property are harmed."
};

const image = {
  "src": "/home/solutions/emergency-full.webp",
  "alt": "Emergency and disaster detection infographic: a solar-powered sensor station above a valley town, with flood, fire, earthquake, landslide and severe weather examples",
  "height": 613
};

const chips = {
  "heading": "What the system can detect",
  "items": [
    "Smoke",
    "Heat & fire risk",
    "Extreme cold",
    "Flooding",
    "Water leaks",
    "Power failure",
    "Generator status",
    "Pump failure",
    "Ventilation failure",
    "Gas levels",
    "Severe weather"
  ]
};

const detailsCopy = {
  "eyebrow": "Why Minutes Matter",
  "heading": "Emergencies an Early-Warning System Can Catch",
  "intro": "On a farm, a failed fan, an empty water line or a small fire can harm many animals within hours, often at night. Early-warning systems are designed to notice first and make sure someone hears about it.",
  "items": [
    {
      "title": "Ventilation & power failure",
      "description": "In closed poultry and pig houses, a power cut or failed fan can quickly lead to dangerous heat. Power, fan and temperature monitoring with a battery-backed alarm gives staff time to respond."
    },
    {
      "title": "Smoke & fire risk",
      "description": "Smoke and heat sensors in barns, hay stores and feed rooms, plus temperature monitoring of motors and electrical panels, can flag fire risk before flames spread."
    },
    {
      "title": "Flooding & water leaks",
      "description": "Water-level sensors in low-lying buildings and near rivers, and flow monitoring on supply lines, warn of rising water and burst pipes."
    },
    {
      "title": "Extreme heat & cold",
      "description": "Temperature and humidity thresholds for heat stress or frost risk, including frozen water lines that can leave animals without water."
    },
    {
      "title": "Equipment failure",
      "description": "Pumps, generators, chillers and feed systems monitored for current, run time and faults, so a stopped machine is noticed quickly."
    },
    {
      "title": "Escalating alarms",
      "description": "Warning and critical levels, with local sirens, SMS, calls and app alerts that escalate to the next person if nobody acknowledges."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How an Early-Warning System Is Designed",
  "intro": "An alarm system is only useful if it still works when something else has failed. Redundancy and fallback paths are designed in from the start. These are the parts we work through with you.",
  "options": [
    {
      "title": "Sensor stations",
      "description": "Smoke, heat, water-level, power and equipment sensors placed where risks are highest, built for dust, moisture and outdoor exposure."
    },
    {
      "title": "Independent power",
      "description": "Battery and solar backup so detection and alarms keep running through the power cut they are warning about."
    },
    {
      "title": "Redundant alert paths",
      "description": "More than one way to reach people, such as cellular and LoRaWAN, plus a local siren that works without any network."
    },
    {
      "title": "Alarm logic",
      "description": "Normal, warning and critical states, delays to avoid false alarms, and escalation rules for who is contacted and when."
    },
    {
      "title": "Testing & self-checks",
      "description": "Regular self-tests of sensors, batteries and communication, with an alert when part of the system stops reporting."
    }
  ],
  "stages": [
    "Risk review",
    "Sensor & alarm plan",
    "Hardware design",
    "Firmware & alarm logic",
    "Pilot install",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Sensitivity vs. false alarms",
      "description": "An alarm that sounds too often gets ignored. Delays, confirmation from a second sensor and sensible thresholds keep alarms trustworthy."
    },
    {
      "title": "Cellular vs. LoRaWAN vs. local siren",
      "description": "Cellular reaches phones directly; LoRaWAN covers a site cheaply; a siren works with no network. Critical sites usually combine them."
    },
    {
      "title": "Battery backup size vs. cost",
      "description": "Longer backup costs more and adds size. The backup is sized by how long an outage must be covered before someone arrives."
    },
    {
      "title": "Standalone vs. integrated",
      "description": "A standalone system keeps working if other farm systems fail; integration with climate controllers adds context but adds dependencies."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "The emergencies you are most concerned about",
    "Buildings, animals and equipment to protect",
    "Mobile coverage and internet on site",
    "Existing alarms, controllers or generators",
    "Who should be alerted, in what order",
    "How quickly someone can reach the site"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Environmental monitoring",
      "href": "/environmental-monitoring"
    },
    {
      "label": "Farm automation",
      "href": "/farm-automation"
    },
    {
      "label": "Poultry monitoring systems",
      "href": "/poultry-farming"
    },
    {
      "label": "Planning a LoRaWAN farm network",
      "href": "/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "This section describes custom engineering services. An early-warning system supports, but does not replace, certified fire alarms and local safety regulations. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "What can a farm early-warning system detect?",
    "answer": "Typical systems watch for smoke and fire risk, ventilation and power failure, extreme heat or cold, flooding and water leaks, and pump, generator or equipment faults, and alert people by siren, SMS, call or app."
  },
  {
    "question": "Will the alarm still work during a power cut?",
    "answer": "It should, and we design for it. Sensors, controller and communication run on battery or solar backup, and a local siren can sound even if the internet and mobile network are down."
  },
  {
    "question": "How do you avoid false alarms?",
    "answer": "With sensible thresholds, short delays before alarming, confirmation from a second sensor where it matters, and separate warning and critical levels. Thresholds are tuned during a pilot installation."
  },
  {
    "question": "Does this replace a certified fire alarm?",
    "answer": "No. An early-warning system adds monitoring that fire alarms don't cover, such as ventilation, water and equipment failure. Certified fire detection required by local regulations should stay in place."
  },
  {
    "question": "Who receives the alerts?",
    "answer": "You decide. Alerts can go to several people in order, escalating to the next person if nobody acknowledges within a set time."
  }
];

const cta = {
  "heading": "Need an Early-Warning System for Your Site?",
  "description": "We'll design sensors, backup power and alarm paths around the risks, buildings and animals you need to protect.",
  "primaryLabel": "Start Your Project",
  "secondaryLabel": "View All Solutions"
};

export default function EmergencyDetectionPage() {
  return (
    <>
      <Breadcrumb items={[{ label: hero.breadcrumb }]} />

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
        primaryHref="/contact"
        secondaryLabel={cta.secondaryLabel}
        secondaryHref="/solutions"
      />
    </>
  );
}
