import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import PoultryHero from "@/components/terrasense/poultry/PoultryHero";
import PoultrySolutionsOverview from "@/components/terrasense/poultry/PoultrySolutionsOverview";
import PoultryEnvironmentalMonitoring from "@/components/terrasense/poultry/PoultryEnvironmentalMonitoring";
import PoultryClimateAutomation from "@/components/terrasense/poultry/PoultryClimateAutomation";
import PoultrySmartFeeding from "@/components/terrasense/poultry/PoultrySmartFeeding";
import PoultryWaterManagement from "@/components/terrasense/poultry/PoultryWaterManagement";
import PoultrySafetyWarning from "@/components/terrasense/poultry/PoultrySafetyWarning";
import PoultryCentralController from "@/components/terrasense/poultry/PoultryCentralController";
import PoultryMultiHouseMonitoring from "@/components/terrasense/poultry/PoultryMultiHouseMonitoring";
import PoultryConnectivity from "@/components/terrasense/poultry/PoultryConnectivity";
import PoultryCustomElectronics from "@/components/terrasense/poultry/PoultryCustomElectronics";
import PoultryApplications from "@/components/terrasense/poultry/PoultryApplications";

export const metadata: Metadata = {
  title: "Poultry Farm Technology & Automation | PawSync",
  description:
    "Custom IoT devices and engineering for poultry farm automation — poultry house monitoring, temperature and humidity sensors, ventilation control, smart feeding, water monitoring, and LoRa-connected poultry farm controllers.",
};

const faqs = [
  {
    question: "Can you develop a custom poultry farm controller?",
    answer:
      "Yes. We design custom controller hardware and firmware around your specific poultry house layout, equipment, and control requirements — from a single-house unit to a multi-house platform.",
  },
  {
    question: "Can temperature and humidity be monitored remotely?",
    answer:
      "Yes. Sensor data can be viewed remotely through a mobile or web dashboard, with configurable alerts when readings move outside set ranges.",
  },
  {
    question: "Can multiple poultry houses be monitored from one dashboard?",
    answer:
      "Yes. Systems can be designed to aggregate data from multiple houses, multiple sensor nodes, and multiple gateways into a single dashboard view.",
  },
  {
    question: "Can the system automatically control ventilation?",
    answer:
      "Yes. Ventilation, fans, and related equipment can be automated using configurable rules based on temperature, humidity, or air-quality readings, with manual override always available.",
  },
  {
    question: "Can feed and water levels be monitored?",
    answer:
      "Yes. Feed silo and hopper levels, and water tank levels and flow, can be monitored continuously with alerts for low levels or abnormal conditions.",
  },
  {
    question: "Can I receive alerts when environmental conditions become abnormal?",
    answer:
      "Yes. Alerts can be configured to notify operators through mobile notification, SMS where supported, email, local buzzer, warning light, or the web dashboard when monitored values exceed set thresholds.",
  },
  {
    question: "Can LoRa be used across a large poultry farm?",
    answer:
      "Yes. LoRa / LoRaWAN is well suited to covering large farm sites with low-power sensor nodes, and is one of several connectivity options we select based on farm size and layout.",
  },
  {
    question: "Can the system work without continuous internet access?",
    answer:
      "Local control logic can be designed to keep running on-site even if internet or cloud connectivity is temporarily unavailable, with data syncing once connectivity is restored.",
  },
  {
    question: "Can you integrate existing fans, pumps, motors, and equipment?",
    answer:
      "In many cases, yes. We assess your existing equipment during the discovery phase to determine the right sensor, relay, or control integration approach.",
  },
  {
    question: "Can you design the PCB and firmware?",
    answer:
      "Yes. Custom PCB design and embedded firmware development are core parts of our engineering process, from schematic through production files.",
  },
  {
    question: "Can you develop a prototype before production?",
    answer:
      "Yes. We build and validate a working prototype before moving toward production preparation, so the design is tested before committing to manufacturing.",
  },
  {
    question: "Can the system monitor power failures?",
    answer:
      "Yes. Power monitoring can detect loss of mains power or selected equipment power conditions and trigger configured alerts.",
  },
  {
    question: "Can the system connect to a mobile application?",
    answer:
      "Yes. Dashboards and alerts can be designed for mobile and web access, giving operators visibility into farm status from anywhere.",
  },
];

export default function PoultryFarmingPage() {
  return (
    <>
      <PoultryHero />

      <div className="bg-[var(--ts-bg)]">
        <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: "Poultry Farming" }]} />
      </div>

      <PoultrySolutionsOverview />
      <PoultryEnvironmentalMonitoring />
      <PoultryClimateAutomation />
      <PoultrySmartFeeding />
      <PoultryWaterManagement />
      <PoultrySafetyWarning />
      <PoultryCentralController />
      <PoultryMultiHouseMonitoring />
      <PoultryConnectivity />
      <PoultryCustomElectronics />
      <PoultryApplications />

      <section aria-labelledby="poultry-faq-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="poultry-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Common Questions About Poultry Farm Technology
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        eyebrow="Engineering technology for the farm"
        heading="Ready to Build Your Poultry Farm Technology?"
        description="PawSync designs the IoT devices, sensors, controllers, and connected hardware that monitor and automate modern poultry operations."
        primaryLabel="Discuss Your Poultry Project"
        primaryHref="/contact"
        secondaryLabel="Explore All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
