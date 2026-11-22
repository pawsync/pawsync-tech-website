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
  title: "Farm & Barn Environmental Monitoring Sensors | PawSync",
  description:
    "24/7 environmental sensing for barns, poultry houses, greenhouses, and shelters — temperature, humidity, air quality, and more.",
  alternates: buildAlternates("en", "environmental-monitoring"),
  openGraph: buildOpenGraph("en", "environmental-monitoring"),
};

const sensors = [
  "Temperature", "Humidity", "Air Quality", "CO2", "Ammonia", "Smoke",
  "Water Level", "Rain", "Soil Moisture", "Light", "Pressure", "Wind", "Equipment Temperature",
];

const applications = [
  { icon: Warehouse, title: "Barn Monitoring", description: "Continuous climate awareness for cattle and horse barns." },
  { icon: PawPrint, title: "Poultry House Monitoring", description: "Tight environmental tolerances tracked around the clock.", href: "/poultry-farming" },
  { icon: Flower2, title: "Greenhouse Monitoring", description: "Temperature, humidity, and light tracking for controlled growing." },
  { icon: Home, title: "Animal Shelter Monitoring", description: "Comfortable, safe conditions for sheltered and fostered animals." },
  { icon: Building2, title: "Feed Storage Monitoring", description: "Moisture and temperature sensing to protect stored feed." },
  { icon: Droplets, title: "Water Tank Monitoring", description: "Level and quality sensing for reliable water supply." },
  { icon: Sprout, title: "Outdoor Farm Monitoring", description: "Weather-hardened sensors for open-field conditions." },
];

const detailsCopy = {
  "eyebrow": "What to Measure",
  "heading": "What Each Measurement Tells You",
  "intro": "A farm environmental monitoring system is only useful if it measures what actually affects your animals, crops and equipment. These are the readings we most often build systems around, and why each one matters.",
  "items": [
    {
      "title": "Temperature & humidity",
      "description": "Together they show heat stress risk for cattle, pigs and poultry, and drive fans, cooling pads, misting and heaters. Readings at animal height are more useful than one sensor near the roof."
    },
    {
      "title": "Ammonia & CO2",
      "description": "In closed housing these show whether ventilation is keeping up. Ammonia irritates eyes and airways; rising CO2 means too little fresh air is coming in."
    },
    {
      "title": "Smoke & equipment temperature",
      "description": "Early warning for barn and feed-store fires, overheating motors, pumps and electrical panels, before a fault becomes an emergency."
    },
    {
      "title": "Water level & supply",
      "description": "Tank, trough and reservoir levels, so an empty tank, a stuck float valve or a leak is caught before animals go without water."
    },
    {
      "title": "Feed storage conditions",
      "description": "Moisture and temperature inside silos and feed rooms, where damp patches and hotspots lead to mould and spoiled feed."
    },
    {
      "title": "Soil, rain, wind & light",
      "description": "For greenhouses and outdoor plots: soil moisture for irrigation timing, rain and wind for storm alerts, and light levels for controlled growing."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How a Monitoring Network Is Built",
  "intro": "Every site is different: building sizes, distances, power and internet access all shape the design. These are the parts we work through with you before hardware is built.",
  "options": [
    {
      "title": "Sensor node design",
      "description": "Battery- or mains-powered nodes that combine the sensors you need on one board, with calibration and self-check features."
    },
    {
      "title": "Gateway & connectivity",
      "description": "LoRaWAN, Wi-Fi or LTE-M, chosen by distance between buildings, wall materials and whether the site has internet."
    },
    {
      "title": "Enclosures for farm conditions",
      "description": "Housings rated for dust, condensation, ammonia and washdown, with sensor openings that stay accurate in dirty air."
    },
    {
      "title": "Alerts & dashboard",
      "description": "Thresholds, alarms by SMS, email or app, and data sent to an existing platform or a dashboard built for the project."
    },
    {
      "title": "Pilot installation",
      "description": "A small set of nodes installed in one building first, to check range, battery life and sensor accuracy before scaling up."
    }
  ],
  "stages": [
    "Site requirements",
    "Sensor selection",
    "Network design",
    "Prototype nodes",
    "Pilot install",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Reading interval vs. battery life",
      "description": "Readings every minute drain batteries far faster than every 15 minutes. We set the interval by how fast each condition can change."
    },
    {
      "title": "LoRaWAN vs. Wi-Fi vs. cellular",
      "description": "LoRaWAN covers a whole farm from one gateway at low power; Wi-Fi suits buildings that already have it; cellular suits isolated sites with no internet."
    },
    {
      "title": "Sensor cost vs. accuracy and drift",
      "description": "Low-cost gas sensors drift faster in ammonia-laden air. Where a reading drives ventilation or alarms, a better sensor or regular calibration is worth it."
    },
    {
      "title": "More sensors vs. simpler maintenance",
      "description": "Each extra node is another battery and enclosure to maintain. We aim for the fewest sensors that still give representative readings."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Type and number of buildings or areas to monitor",
    "What you need to measure and the limits that matter",
    "Distances between buildings and to the farm office",
    "Mains power and internet available on site",
    "How you want to receive alerts",
    "Any existing controllers, sensors or software to connect to"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Poultry monitoring systems",
      "href": "/poultry-farming"
    },
    {
      "label": "Farm automation",
      "href": "/farm-automation"
    },
    {
      "label": "Ammonia, CO2 and humidity sensors in poultry houses",
      "href": "/blog/poultry-house-air-quality-sensors"
    },
    {
      "label": "Planning a LoRaWAN farm network",
      "href": "/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "This section describes custom engineering services. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "What does a farm environmental monitoring system include?",
    "answer": "Sensor nodes in each building or area, a gateway or network connection that collects their readings, and a dashboard or app that shows the data and sends alerts. We design the nodes and connectivity around your site."
  },
  {
    "question": "Can sensors survive ammonia, dust and washdown?",
    "answer": "Yes, if the enclosure and sensors are chosen for it. Barn and poultry-house nodes need sealed housings, protected sensor openings and materials that resist ammonia, plus a plan for cleaning and calibration."
  },
  {
    "question": "Do I need internet in every building?",
    "answer": "No. With LoRaWAN, one well-placed gateway can often cover a whole farm, and only the gateway needs an internet connection. Sites with no internet can use a cellular gateway."
  },
  {
    "question": "How are alerts sent?",
    "answer": "Typically by SMS, email or app notification when a reading crosses a limit you set, such as high temperature, low water or smoke. Alert rules and who receives them are set during the project."
  },
  {
    "question": "Can the system also control fans, heaters or pumps?",
    "answer": "Yes. Monitoring can be linked to relays and controllers so equipment switches automatically. See our farm automation page for how monitoring and control work together."
  }
];

export default function EnvironmentalMonitoringPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Environmental Monitoring" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Environmental Monitoring</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          24/7 Environmental Monitoring for Farms &amp; Barns
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Sensor networks that keep watch over the conditions animals and
          equipment depend on, day and night.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <CloudRain className="h-5 w-5 text-[var(--ts-green)]" aria-hidden="true" />
          <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Sensors we integrate
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
            <Eyebrow>Applications</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Where it&apos;s used
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <ServiceCard key={item.title} {...item} />
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
        heading="Need Environmental Monitoring Built to Spec?"
        description="We'll design the sensor network around your facility, tolerances, and connectivity."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
