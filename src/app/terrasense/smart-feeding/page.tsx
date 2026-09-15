import type { Metadata } from "next";
import {
  ArrowDown,
  Cpu,
  Gauge,
  Hash,
  History,
  MonitorSmartphone,
  Settings2,
  ShieldAlert,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Smart Feeding | PawSync",
  description:
    "Automated feeding systems with schedules, portion control, RFID identification, feed-level sensors and remote monitoring for pets, livestock and multi-animal facilities.",
};

const capabilities = [
  { icon: Settings2, title: "Scheduled Dispensing", description: "Automated feeding on a configurable daily or multi-time schedule." },
  { icon: Gauge, title: "Portion Control", description: "Precise dispensing amounts tuned to each animal or group." },
  { icon: Hash, title: "RFID Animal Identification", description: "Recognize individual animals to feed the right diet to the right one." },
  { icon: UtensilsCrossed, title: "Feed-Level Sensors", description: "Know when a hopper or silo is running low before it runs out." },
  { icon: ShieldAlert, title: "Jam & Fault Detection", description: "Alerts when a motor, auger or dispensing line isn't working correctly." },
  { icon: MonitorSmartphone, title: "Remote Monitoring", description: "Check feeding status and history from a phone or web dashboard." },
  { icon: History, title: "Consumption History", description: "Track feed usage over time to spot trends or anomalies early." },
  { icon: Cpu, title: "Custom Controllers", description: "Purpose-built feeding controllers sized to your equipment and species." },
];

const flow = [
  { icon: UtensilsCrossed, label: "Feed Silo / Hopper" },
  { icon: Gauge, label: "Level Sensor" },
  { icon: Cpu, label: "Controller" },
  { icon: Settings2, label: "Feed Motor / Auger" },
  { icon: MonitorSmartphone, label: "Dashboard" },
];

const faqs = [
  { question: "Can the system identify individual animals?", answer: "Yes — RFID-based identification lets the system dispense different diets or portions to different animals sharing the same feeding station." },
  { question: "What happens if the feed line jams?", answer: "Fault detection can flag a motor or dispensing issue and send an alert, rather than silently failing to feed." },
  { question: "Can I monitor feed levels remotely?", answer: "Yes — level sensors on hoppers or silos report status to the dashboard, with low-feed alerts configurable to your schedule." },
];

export default function SmartFeedingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Solutions", href: "/terrasense/solutions" }, { label: "Smart Feeding" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Smart Feeding</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Smart Feeding Systems
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Automated feeding devices with schedules, portion control, sensors
          and remote monitoring for pets, livestock and multi-animal
          facilities.
        </p>
      </section>

      {/* Flow diagram */}
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-[var(--ts-navy)]/8 bg-[var(--ts-dark-green)]/5 p-6 sm:p-8">
          {flow.map((step, i) => (
            <div key={step.label} className="flex w-full max-w-xs flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <step.icon className="h-4 w-4 shrink-0 text-[var(--ts-dark-green)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Feeding, automated and accountable
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

      <CTABanner
        heading="Need a Custom Feeding Controller?"
        description="We'll design hardware around your feed system, species and facility layout."
        primaryLabel="Start Your Project"
        primaryHref="/terrasense/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/terrasense/solutions"
      />
    </>
  );
}
