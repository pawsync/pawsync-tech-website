import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Battery,
  CircuitBoard,
  Compass,
  ClipboardCheck,
  Droplets,
  Factory,
  FileCode,
  FlaskConical,
  HeartPulse,
  Hash,
  MapPinned,
  MonitorSmartphone,
  Radar,
  RadioTower,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Remote Livestock & Cattle Monitoring Systems | PawSync",
  description:
    "Custom wireless livestock monitoring hardware: GPS tracking, virtual fencing, RFID identification, and remote health/activity monitoring for cattle, sheep, goats, and horses.",
  alternates: buildAlternates("en", "livestock-technology"),
  openGraph: buildOpenGraph("en", "livestock-technology"),
};

const connectivity: { icon: LucideIcon; label: string }[] = [
  { icon: Satellite, label: "GPS / GNSS" },
  { icon: Radar, label: "LoRa / LoRaWAN" },
  { icon: Activity, label: "Cellular / LTE-M" },
  { icon: Battery, label: "BLE (gateway handoff)" },
];

const processSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: "Idea" },
  { icon: Workflow, label: "Architecture" },
  { icon: CircuitBoard, label: "PCB" },
  { icon: FileCode, label: "Firmware" },
  { icon: FlaskConical, label: "Prototype" },
  { icon: ClipboardCheck, label: "Testing" },
  { icon: Factory, label: "Production" },
];

const faqs: FAQItem[] = [
  {
    question: "What is a livestock monitoring system made of?",
    answer:
      "Four layers, each designed per project: a device on the animal (a collar or ear tag with GNSS and, where needed, motion sensing), a radio link (LoRa or cellular), a gateway that receives data on site and forwards it to the cloud, and a web or mobile dashboard with configurable alerts. We scope which layers you need — and how they connect to anything you already run — during discovery.",
  },
  {
    question: "How does remote cattle monitoring work?",
    answer:
      "A collar or ear tag on each animal records its GNSS position, and a LoRa or cellular radio reports it back to a gateway or the cloud at an interval set against battery life. Alerts can be designed for events such as an animal leaving a designated area or showing unusual inactivity. The right combination depends on how far your cattle range and what coverage exists on your land.",
  },
  {
    question: "GPS or LoRa — which one tracks my herd?",
    answer:
      "GPS/GNSS determines a device's position; it doesn't transmit that position anywhere on its own. A second radio — typically LoRa or cellular — carries the location data back to a gateway or the cloud. Which one fits depends on how far your animals roam relative to any gateway infrastructure you can place.",
  },
  {
    question: "Does the system keep working if internet or cloud connectivity drops?",
    answer:
      "Local logic can be designed to keep logging and alerting on-site during an outage, with data syncing once connectivity is restored — this is a design decision we make with you based on how critical continuous visibility is for your operation.",
  },
  {
    question: "What determines battery life and reporting interval?",
    answer:
      "Battery life is a trade-off against how often a device reports its position — more frequent updates use more energy. We size the battery and tune the reporting interval (and techniques like motion-triggered wake) to your target run time between charges or replacements, rather than promising a fixed number upfront.",
  },
  {
    question: "What maintenance do tracking devices need?",
    answer:
      "Outdoor collar and ear-tag hardware needs periodic battery service (recharge or replacement, depending on the chemistry chosen) and a physical check for wear. We size the maintenance interval to the chemistry and duty cycle during the design phase.",
  },
  {
    question: "Does virtual fencing physically contain animals?",
    answer:
      "No — it alerts and cues the animal as it approaches a boundary; it doesn't physically restrain it the way a fence does. Whether it reduces your need for physical fencing depends on terrain, animal type, and local requirements, which we assess with you.",
  },
  {
    question: "What information do you need from us to start a project?",
    answer:
      "Typically: the animals and herd size, the terrain and area to be covered, existing connectivity or gateway infrastructure (if any), your target battery life and reporting frequency, and any equipment you need the system to integrate with. We scope the rest together in discovery.",
  },
  {
    question: "How does a project move from idea to a working device?",
    answer:
      "Discovery and architecture first (your animals, environment, and requirements), then schematic and PCB design, firmware, a working prototype you can test in real conditions, and manufacturing-preparation files once the design is validated.",
  },
];

const solutions = [
  { icon: Satellite, title: "Livestock GPS Tracking", description: "Location tracking built for open range and large pastures.", href: "/animal-tracking" },
  { icon: Radar, title: "Cattle Tracking", description: "Collar or ear-tag hardware designed around your herd and range." },
  { icon: Radar, title: "Sheep Tracking", description: "Lightweight tracking devices for flock management." },
  { icon: Radar, title: "Goat Tracking", description: "Rugged tracking hardware for browsing herds." },
  { icon: Radar, title: "Horse Tracking", description: "GPS and activity tracking designed with equine welfare in mind." },
  { icon: Activity, title: "Animal Activity Monitoring", description: "Movement and behavior data across the whole herd." },
  { icon: HeartPulse, title: "Heat / Estrus Detection", description: "Activity-pattern analysis can be designed in to help flag possible breeding windows." },
  { icon: MapPinned, title: "Movement Monitoring", description: "Historical movement trails for individual animals or groups." },
  { icon: HeartPulse, title: "Health Indicators", description: "Activity and behavior trends that can help flag animals needing attention." },
  { icon: Activity, title: "Grazing Monitoring", description: "Time-in-zone data to inform rotational grazing decisions." },
  { icon: MapPinned, title: "Virtual Fencing", description: "GPS-based boundaries that reduce dependency on physical fencing.", href: "/virtual-fencing" },
  { icon: Hash, title: "RFID Identification", description: "Individual animal identification for records and access control." },
  { icon: Hash, title: "Animal Counting", description: "RFID-based headcounts at gates, chutes, or water points, designed to your layout." },
  { icon: Droplets, title: "Water Consumption Monitoring", description: "Flow and level sensors that flag abnormal drinking patterns." },
  { icon: UtensilsCrossed, title: "Feeding Monitoring", description: "Feed-level and consumption tracking across feeding stations." },
];

const alerts = [
  { icon: AlertTriangle, label: "Animal left designated area" },
  { icon: Activity, label: "Unusual inactivity" },
  { icon: ThermometerSun, label: "High environmental temperature" },
  { icon: Droplets, label: "Low water level" },
  { icon: UtensilsCrossed, label: "Feeding abnormality" },
  { icon: Battery, label: "Potential device battery issue" },
];

const systemLayers = [
  { icon: Radar, title: "1. On the animal", description: "A collar or ear tag with GNSS and, where needed, motion sensing." },
  { icon: Activity, title: "2. Radio link", description: "LoRa for long range at low power, or cellular (LTE-M) where coverage allows." },
  { icon: RadioTower, title: "3. Gateway", description: "Receives data on site and forwards it to the cloud; local logic can keep logging during an outage." },
  { icon: MonitorSmartphone, title: "4. Dashboard & alerts", description: "A web or mobile view with configurable alerts, designed to your requirements as part of the project." },
];

export default function LivestockTechnologyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Livestock Technology" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Livestock Technology</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Remote Livestock Monitoring &amp; Management Systems
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          We design and develop custom tracking, activity-monitoring, and
          virtual fencing hardware for cattle, sheep, goats, and horses on
          working land.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {alerts.map((alert) => (
            <div
              key={alert.label}
              className="flex items-center gap-2.5 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <alert.icon className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              {alert.label}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-[var(--ts-gray)]">
          Example alert types a custom system can be designed to raise —
          illustrative only.
        </p>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Livestock Monitoring Solutions for Cattle, Sheep, Goats &amp; Horses
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ts-gray)]">
            These are custom engineering services: we design and develop
            hardware to your requirements. They are not off-the-shelf
            products, and examples on our Projects page are reference
            designs, not field-tested deployments.
          </p>
        </div>
      </section>

      <section aria-labelledby="livestock-cattle-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Cattle</Eyebrow>
          <h2 id="livestock-cattle-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Remote Cattle Monitoring
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
            Remote cattle monitoring starts with two questions: how far your
            cattle range, and how often you need to hear from them. We
            design custom collar or ear-tag hardware around those answers —
            pairing GNSS positioning with a LoRa or cellular link back to a
            gateway or the cloud, and sizing the battery to your reporting
            interval. Activity data can be added where it helps flag animals
            that need attention. Each design is scoped to your herd, terrain,
            and infrastructure, and validated as a prototype before
            production.
          </p>
        </div>
      </section>

      <section aria-labelledby="livestock-system-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>System Overview</Eyebrow>
            <h2 id="livestock-system-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              How a Remote Livestock Monitoring System Works
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {systemLayers.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="livestock-connectivity-heading" className="bg-[var(--ts-navy)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="livestock-connectivity-heading" className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
            Wireless Connectivity for Remote Livestock Monitoring
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {connectivity.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                <Icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/50">
            GPS/GNSS determines location; a separate radio — LoRa or cellular —
            reports it back to a gateway or the cloud. Range, power budget,
            reporting interval, and existing gateway infrastructure all factor
            into which combination fits your operation. See our comparison of{" "}
            <Link href="/blog/gnss-lora-vs-gnss-ltem" className="underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white">
              GNSS + LoRa vs. GNSS + LTE-M
            </Link>{" "}
            for the trade-offs.
          </p>
        </div>
      </section>

      <section aria-labelledby="livestock-process-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Custom Engineering</Eyebrow>
          <h2 id="livestock-process-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            From Idea to a Working Device
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
            Discovery and architecture come first, followed by schematic and
            PCB design, firmware, a prototype you can test under real
            conditions, and manufacturing-preparation files once the design
            is validated. See our related{" "}
            <Link href="/blog/pet-tracker-pcb-design" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              tracker PCB design
            </Link>{" "}
            and{" "}
            <Link href="/blog/low-power-animal-tracker-design" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              low-power animal tracker design
            </Link>{" "}
            write-ups, or our{" "}
            <Link href="/custom-electronics" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              custom electronics engineering
            </Link>{" "}
            services for how we approach this work.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {processSteps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ts-navy)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <Icon className="h-4 w-4 text-[var(--ts-green)]" aria-hidden="true" />
                {label}
              </span>
              {i < processSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Common Questions
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Need a Custom Livestock Monitoring System?"
        description="Let's design hardware around your herd, terrain, and connectivity requirements."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
