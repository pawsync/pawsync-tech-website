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
  Radar,
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
  title: "Livestock GPS Tracking & Remote Monitoring Systems | PawSync",
  description:
    "Custom-engineered GPS tracking, virtual fencing, RFID identification, and remote health/activity monitoring hardware for cattle, sheep, goats, and horses.",
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
  { icon: Satellite, title: "Livestock GPS Tracking", description: "Location tracking built for open range and large pastures." },
  { icon: Radar, title: "Cattle Tracking", description: "Collar and ear-tag hardware sized for cattle herds." },
  { icon: Radar, title: "Sheep Tracking", description: "Lightweight tracking devices for flock management." },
  { icon: Radar, title: "Goat Tracking", description: "Rugged tracking hardware for browsing herds." },
  { icon: Radar, title: "Horse Tracking", description: "GPS and activity tracking built for equine welfare." },
  { icon: Activity, title: "Animal Activity Monitoring", description: "Movement and behavior data across the whole herd." },
  { icon: HeartPulse, title: "Heat / Estrus Detection", description: "Activity-pattern analysis to help flag breeding windows." },
  { icon: MapPinned, title: "Movement Monitoring", description: "Historical movement trails for individual animals or groups." },
  { icon: HeartPulse, title: "Health Indicators", description: "Vitals and activity trends that support earlier intervention." },
  { icon: Activity, title: "Grazing Monitoring", description: "Time-in-zone data to inform rotational grazing decisions." },
  { icon: MapPinned, title: "Virtual Fencing", description: "GPS-based boundaries that reduce dependency on physical fencing." },
  { icon: Hash, title: "RFID Identification", description: "Individual animal identification for records and access control." },
  { icon: Hash, title: "Animal Counting", description: "Automated headcounts at gates, chutes, and water points." },
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

export default function LivestockTechnologyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Livestock Technology" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Livestock Technology</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Connected Livestock Monitoring &amp; Management
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Tracking, health monitoring, and virtual fencing hardware built
          for cattle, sheep, goats, and horses on working land.
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
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Built for the whole herd
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="livestock-connectivity-heading" className="bg-[var(--ts-navy)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="livestock-connectivity-heading" className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
            Connectivity Built Around the Herd
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
