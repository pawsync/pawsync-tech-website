import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Smart Irrigation & Water Management Systems | PawSync",
  description:
    "Custom smart irrigation systems: soil moisture sensors, automated valves and pumps, tank and flow monitoring, and weather-aware scheduling for farms and greenhouses.",
  alternates: buildAlternates("en", "smart-irrigation"),
  openGraph: buildOpenGraph("en", "smart-irrigation"),
};

const hero = {
  "breadcrumb": "Smart Irrigation",
  "eyebrow": "Smart Irrigation & Water Management",
  "h1": "Smart Irrigation Systems for Farms, Pasture & Greenhouses",
  "intro": "Soil moisture sensing, automated valves and pumps, and tank and flow monitoring, so water is applied when it is needed and problems are caught early."
};

const image = {
  "src": "/home/solutions/irrigation-full.webp",
  "alt": "Smart irrigation infographic: a solar-powered controller, soil moisture probe, solenoid valve and flow meter in a crop field",
  "height": 613
};

const chips = {
  "heading": "What the system can measure and control",
  "items": [
    "Soil moisture",
    "Soil temperature",
    "Rainfall",
    "Tank level",
    "Flow rate",
    "Pressure",
    "Valves",
    "Pumps",
    "Weather data",
    "Leak detection",
    "Solar power"
  ]
};

const detailsCopy = {
  "eyebrow": "How It Saves Water",
  "heading": "What a Smart Irrigation System Does",
  "intro": "Timers water on a schedule whether the ground needs it or not. A smart irrigation system uses measurements to decide when and how much to water, and warns you when something goes wrong.",
  "items": [
    {
      "title": "Soil moisture sensing",
      "description": "Probes at root depth show how much water is actually available to crops or pasture, so irrigation starts when soil dries out rather than at a fixed time."
    },
    {
      "title": "Automated valves & pumps",
      "description": "Solenoid valves and pump controllers switch zones on and off by soil moisture, schedule or remote command, with a manual override."
    },
    {
      "title": "Weather-aware scheduling",
      "description": "Rainfall sensors and forecasts let the system skip or shorten cycles when rain is expected or has already fallen."
    },
    {
      "title": "Tank & reservoir levels",
      "description": "Level sensors in tanks, dams and reservoirs show how much water is left and stop pumps before they run dry."
    },
    {
      "title": "Flow & leak detection",
      "description": "Flow meters compare expected and actual flow per zone, flagging burst pipes, blocked lines and valves that fail to open or close."
    },
    {
      "title": "Off-grid operation",
      "description": "Solar-powered controllers and low-power wireless nodes for remote fields with no mains power or cabling."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How a Smart Irrigation System Is Designed",
  "intro": "Field size, water source, crop and power supply all shape an irrigation design. These are the parts we work through with you before hardware is built.",
  "options": [
    {
      "title": "Sensor nodes",
      "description": "Soil moisture, rain, level and flow sensors on low-power wireless nodes, built to survive mud, sun and frost."
    },
    {
      "title": "Valve & pump controllers",
      "description": "Controllers for solenoid valves, pumps and existing irrigation equipment, with local rules that keep working offline."
    },
    {
      "title": "Field connectivity",
      "description": "LoRaWAN for wide areas, or cellular for isolated sites, chosen by field size, terrain and distance to the gateway."
    },
    {
      "title": "Power design",
      "description": "Battery and solar sizing so field nodes and controllers run through cloudy weeks without maintenance."
    },
    {
      "title": "Dashboard & alerts",
      "description": "Soil moisture trends, water use per zone and alerts for leaks, low tanks and failed valves, on phone or web."
    }
  ],
  "stages": [
    "Site survey",
    "Zone & sensor plan",
    "Hardware design",
    "Firmware",
    "Pilot zone",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Number of probes vs. cost",
      "description": "Soil varies across a field. More probes give a better picture but cost more; we place them where soil and crop differences matter most."
    },
    {
      "title": "Automatic vs. advisory",
      "description": "Some farms want valves to switch automatically; others prefer alerts and a recommendation. Both can be built, with manual control kept."
    },
    {
      "title": "Solar vs. battery only",
      "description": "Solar adds cost and size but removes battery changes for valve controllers and pumps, which draw more power than sensors."
    },
    {
      "title": "Retrofit vs. new system",
      "description": "Adding sensors and control to existing pumps and valves is cheaper; a new layout can be designed for automation from the start."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Crops or pasture, field sizes and number of zones",
    "Water source: well, tank, reservoir or mains",
    "Existing pumps, valves and controllers",
    "Power available at pumps and in the field",
    "Distances between fields and to the farm buildings",
    "Whether you want automatic control or alerts only"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Farm automation",
      "href": "/farm-automation"
    },
    {
      "label": "Environmental monitoring",
      "href": "/environmental-monitoring"
    },
    {
      "label": "Planning a LoRaWAN farm network",
      "href": "/blog/lorawan-farm-network-planning"
    },
    {
      "label": "IoT hardware development",
      "href": "/custom-electronics"
    }
  ],
  "note": "This section describes custom engineering services. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "What is a smart irrigation system?",
    "answer": "A smart irrigation system uses soil moisture sensors, weather data and flow and level sensors to decide when and how much to water, controls valves and pumps automatically or by remote command, and alerts you to leaks or faults."
  },
  {
    "question": "How do soil moisture sensors control irrigation?",
    "answer": "Probes at root depth report how wet the soil is. When moisture drops below a level set for the crop and soil type, the controller opens the valve for that zone, and closes it when the target is reached or a time limit passes."
  },
  {
    "question": "Can it work on fields without power or internet?",
    "answer": "Yes. Field nodes and valve controllers can run on batteries and solar, and connect over LoRaWAN to a gateway near the farm buildings or over cellular where there is no gateway."
  },
  {
    "question": "Can you add sensors to our existing irrigation?",
    "answer": "Often, yes. Many existing pumps and valves can be controlled through relays or their own controllers. We check compatibility during scoping."
  },
  {
    "question": "Does smart irrigation also work for livestock water?",
    "answer": "Yes. The same tank-level, flow and pump control is used for livestock water supply, with alerts when troughs or tanks run low."
  }
];

const cta = {
  "heading": "Need a Custom Smart Irrigation System?",
  "description": "We'll design sensors, controllers and connectivity around your fields, water source and power supply.",
  "primaryLabel": "Start Your Project",
  "secondaryLabel": "View All Solutions"
};

export default function SmartIrrigationPage() {
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
        primaryHref="/contact"
        secondaryLabel={cta.secondaryLabel}
        secondaryHref="/solutions"
      />
    </>
  );
}
