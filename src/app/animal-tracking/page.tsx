import type { Metadata } from "next";
import {
  Battery,
  Cpu,
  History,
  MapPinned,
  Radio,
  Satellite,
  ShieldCheck,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "GPS Animal Tracker Development | PawSync",
  description:
    "Custom GPS and GNSS animal tracker development: low-power PCB design, firmware, LoRa or cellular connectivity and prototyping.",
  alternates: buildAlternates("en", "animal-tracking"),
  openGraph: buildOpenGraph("en", "animal-tracking"),
};

const capabilities = [
  { icon: Satellite, title: "Real-Time GPS Location", description: "Scheduled or continuous location updates sized to the animal and use case." },
  { icon: MapPinned, title: "Geofence & Zone Alerts", description: "Get notified the moment a tracked animal leaves a defined area." },
  { icon: History, title: "Location History", description: "Full movement trails for individual animals or entire groups." },
  { icon: Users, title: "Multi-Animal Fleet View", description: "Monitor pets, herds or working animals from a single dashboard." },
  { icon: Radio, title: "Long-Range Connectivity", description: "GPS/GNSS paired with LoRa, LTE or satellite backhaul depending on range." },
  { icon: Battery, title: "Battery-Optimized Design", description: "Low-power hardware and firmware built for weeks or months between charges." },
  { icon: ShieldCheck, title: "Rugged Enclosures", description: "Weather- and impact-resistant housings for field and outdoor use." },
  { icon: Cpu, title: "Custom Device Sizing", description: "Collar, ear-tag or harness form factors sized for the species." },
];

const faqs = [
  { question: "Can tracking devices work without cellular coverage?", answer: "Yes. We design systems around LoRa and other low-power wide-area protocols for sites with limited or no cellular signal, syncing data once a gateway or cellular connection is reached." },
  { question: "How long does battery life typically last?", answer: "It depends on update frequency, connectivity type and enclosure size — we design the power budget around your required reporting interval and duty cycle." },
  { question: "Can you track multiple species with one platform?", answer: "Yes. The dashboard and backend can support mixed fleets — pets, livestock, and working animals — with device hardware sized per species." },
];

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How a Tracker Project Is Scoped",
  "intro": "Tracker projects turn on power budget, radio choice and enclosure size. These are the parts we scope with you before any board is committed.",
  "options": [
    {
      "title": "GNSS tracker PCB design",
      "description": "Compact, battery-powered board layout with a GNSS receiver, antenna placement and power-path design."
    },
    {
      "title": "Low-power firmware",
      "description": "Duty-cycled operation, motion-triggered wake and reporting logic set around your run-time target."
    },
    {
      "title": "Connectivity integration",
      "description": "LoRa, LTE-M or BLE gateway handoff, chosen against your range, coverage and running cost."
    },
    {
      "title": "Power budget & enclosure",
      "description": "Battery sizing, charging circuit and enclosure constraints checked together rather than one at a time."
    },
    {
      "title": "Prototype & field testing",
      "description": "Prototypes tested against your reporting interval and environment, with results documented."
    }
  ],
  "stages": [
    "Discovery",
    "Power & radio budget",
    "Schematic & PCB",
    "Firmware",
    "Prototype",
    "Field testing",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Reporting interval vs. battery life",
      "description": "More frequent location updates shorten battery life. We set the interval against the run time you need."
    },
    {
      "title": "GNSS acquisition time vs. power",
      "description": "Faster position fixes usually draw more current. The acquisition strategy depends on how often a fix is genuinely needed."
    },
    {
      "title": "Radio range vs. running cost",
      "description": "Cellular covers wide areas but adds data plans; LoRa needs gateway coverage but avoids per-device cellular plans on a private network."
    },
    {
      "title": "Size vs. battery capacity",
      "description": "A collar-mounted device is limited by weight and wearer comfort, which sets the largest battery you can use."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Animal type, size and typical behavior",
    "Required location interval and acceptable battery-change schedule",
    "Coverage environment: open land, buildings, urban areas",
    "Gateway or cellular infrastructure already available",
    "Target volume and timeline",
    "Any existing collar or enclosure to integrate"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Pet device development",
      "href": "/pet-technology"
    },
    {
      "label": "Livestock tracking hardware",
      "href": "/livestock-technology"
    },
    {
      "label": "Low-power tracker design (article)",
      "href": "/blog/low-power-animal-tracker-design"
    },
    {
      "label": "GNSS + LoRa vs. GNSS + LTE-M (article)",
      "href": "/blog/gnss-lora-vs-gnss-ltem"
    }
  ],
  "note": "This section describes custom engineering services. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

export default function AnimalTrackingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: "Animal Tracking" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Animal Tracking</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">Custom GPS & GNSS Animal Tracker Development</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Real-time or periodic location systems that keep pets, livestock
          and other animals findable — on the property or far from it.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard />
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Built for reliable field tracking
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ServiceScope id="tracking-scope" copy={scope} />

      <CTABanner
        heading="Need a Custom Tracking Device?"
        description="We'll design hardware around your animals, terrain, range and connectivity requirements."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
