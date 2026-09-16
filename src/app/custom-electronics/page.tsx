import type { Metadata } from "next";
import {
  ArrowRight,
  BatteryCharging,
  Cloud,
  CircuitBoard,
  ClipboardCheck,
  Compass,
  Factory,
  FileCode,
  FlaskConical,
  Radio,
  ScanLine,
  Thermometer,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";

export const metadata: Metadata = {
  title: "Custom Electronics & IoT Product Development | PawSync",
  description:
    "Custom PCB design, embedded firmware development, GPS and LoRa IoT engineering, and prototype-to-production support for animal and farm technology products.",
};

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Workflow,
    title: "Product Concept & Architecture",
    description: "Product concept development and electronics architecture that balances performance, cost and manufacturability.",
  },
  {
    icon: CircuitBoard,
    title: "Schematic & PCB Design",
    description: "Schematic design, PCB layout, design review and component selection for reliable field electronics.",
  },
  {
    icon: FileCode,
    title: "Embedded Firmware",
    description: "Firmware development on ESP32, STM32, nRF52 and Arduino platforms, tailored to your hardware.",
  },
  {
    icon: Thermometer,
    title: "Sensor Integration",
    description: "GPS and environmental sensor integration — from a single sensor to a full multi-sensor node.",
  },
  {
    icon: Radio,
    title: "Wireless Connectivity",
    description: "LoRa, Bluetooth, Wi-Fi and cellular IoT connectivity engineered for range, reliability and power.",
  },
  {
    icon: ScanLine,
    title: "RFID Systems",
    description: "RFID identification systems for animal tracking, access control and feeding recognition.",
  },
  {
    icon: BatteryCharging,
    title: "Power & Battery Design",
    description: "Battery-powered device design and power management for long field-operating life.",
  },
  {
    icon: Cloud,
    title: "Software & Cloud Integration",
    description: "Mobile app communication and cloud API integration that connects your hardware to a usable dashboard.",
  },
  {
    icon: FlaskConical,
    title: "Prototype Development",
    description: "Functional prototypes you can hold, test and validate before committing to production.",
  },
  {
    icon: Factory,
    title: "Manufacturing Support",
    description: "Manufacturing preparation support to help take a validated prototype toward production.",
  },
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

const exampleSpecs = [
  "GPS", "BLE", "Accelerometer", "Temperature sensing",
  "Rechargeable battery", "Mobile app", "Geofence alerts", "Activity history",
];

const faqs: FAQItem[] = [
  {
    question: "Can you develop a completely custom animal tracking device?",
    answer: "Yes. We design the hardware, firmware, and connectivity around your specific animal, environment, range and battery-life requirements, rather than adapting an off-the-shelf product.",
  },
  {
    question: "Can GPS trackers work in remote farms?",
    answer: "Yes, with the right technology choice. GPS provides the location fix, while LoRa or cellular connectivity carries that data back from areas without local Wi-Fi coverage — we help select the right combination for your property.",
  },
  {
    question: "What wireless technology is best for livestock monitoring?",
    answer: "It depends on range, herd size and budget. LoRa suits large properties with infrequent updates; cellular suits animals that roam beyond a single farm; BLE suits short-range, high-frequency data near a barn or gateway. We help you weigh the trade-offs.",
  },
  {
    question: "Can you develop LoRa-based farm monitoring systems?",
    answer: "Yes. LoRa and LoRaWAN are core to our wireless sensor network work, including gateway architecture and battery-optimized sensor nodes.",
  },
  {
    question: "Can animal monitoring devices run on batteries?",
    answer: "Yes — most of the devices we design are battery-powered, with power management engineered specifically for long operating life in the field.",
  },
  {
    question: "Can you develop mobile-app-connected devices?",
    answer: "Yes. We design the device-side communication and cloud API integration that a mobile app or dashboard needs to display live and historical data.",
  },
  {
    question: "Can you design both hardware and firmware?",
    answer: "Yes, both are core in-house capabilities — from schematic and PCB design through to the embedded firmware that runs on it.",
  },
  {
    question: "Can you help move a prototype into production?",
    answer: "Yes. We prepare PCB files, BOM, manufacturing files, test procedures and technical documentation to support that transition.",
  },
  {
    question: "Can you develop custom farm controllers?",
    answer: "Yes — controllers that manage temperature, humidity, watering, feeding, fans, pumps and other farm equipment are a regular part of our work.",
  },
  {
    question: "Can your systems monitor multiple farm locations?",
    answer: "Yes, when the connectivity plan supports it (typically cellular or internet-connected gateways per site), a single dashboard can bring multiple locations together.",
  },
  {
    question: "What sensors can be integrated into a farm monitoring system?",
    answer: "Common choices include temperature, humidity, air quality, water level, soil moisture, motion and load-cell sensors — the right mix depends on what you need to monitor.",
  },
  {
    question: "Can you develop RFID livestock identification devices?",
    answer: "Yes. RFID identification is one of our standard building blocks for feeding recognition, access control and animal counting.",
  },
];

export default function CustomElectronicsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Custom Electronics" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Engineering Services</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Custom Electronics &amp; IoT Product Development
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          When an off-the-shelf device won&apos;t do the job, we design one
          that will — hardware, firmware, and the connectivity that ties it
          all together.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-20 bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Idea to Production
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
            {processSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex w-28 flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[var(--ts-navy)]/8">
                    <step.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-[var(--ts-green)] sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
              Example Smart Device Specification
            </h3>
            <p className="mt-1 text-sm text-[var(--ts-gray)]">
              A representative build for a connected animal tracker:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exampleSpecs.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full bg-[var(--ts-dark-green)]/8 px-3.5 py-1.5 text-xs font-medium text-[var(--ts-dark-green)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Have an Animal-Tech Product Idea?"
        description="From GPS trackers to automated farm controllers, we can help develop your electronics from concept through prototype."
        primaryLabel="Build a Pet Technology Product"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
