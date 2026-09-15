import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ProjectCard from "@/components/terrasense/ProjectCard";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Projects | PawSync",
  description:
    "Example PawSync engineering builds — GPS trackers, virtual fencing prototypes, farm sensors, and IoT gateways.",
};

const projects = [
  {
    title: "GPS Animal Tracker",
    industry: "Pet Technology",
    stage: "Production-Ready",
    technology: ["GPS/GNSS", "BLE", "LTE-M"],
    challenge: "Needed sub-meter location accuracy in a collar-mountable form factor with multi-day battery life.",
    solution: "Combined a low-power GNSS module with duty-cycled cellular reporting and motion-triggered wake.",
    features: ["Geofence alerts", "Activity history", "Mobile app"],
  },
  {
    title: "Smart Pet Collar",
    industry: "Pet Technology",
    stage: "Prototype",
    technology: ["BLE", "IMU", "Temp Sensor"],
    challenge: "Combine health monitoring and location awareness without a bulky, uncomfortable device.",
    solution: "Integrated an IMU and temperature sensor onto a compact PCB with a flexible collar housing.",
    features: ["Activity tracking", "Temp alerts", "Rechargeable"],
  },
  {
    title: "Virtual Fencing Prototype",
    industry: "Livestock",
    stage: "Field Testing",
    technology: ["GPS/GNSS", "LoRa", "Solar"],
    challenge: "Contain grazing cattle across large pastures without installing physical fencing.",
    solution: "GPS collar with progressive audio cues, reporting position over a LoRa mesh to a solar gateway.",
    features: ["Custom zones", "Escape alerts", "Solar-backed"],
  },
  {
    title: "Livestock Monitoring Node",
    industry: "Livestock",
    stage: "Production-Ready",
    technology: ["LoRa", "IMU", "RFID"],
    challenge: "Track herd activity and location across terrain with poor cellular coverage.",
    solution: "Long-range LoRa nodes reporting to a central gateway, with RFID for individual identification.",
    features: ["Multi-animal fleet view", "Low-power design", "RFID ID"],
  },
  {
    title: "LoRa Farm Sensor",
    industry: "Smart Agriculture",
    stage: "Production-Ready",
    technology: ["LoRa", "Environmental Sensors"],
    challenge: "Monitor temperature, humidity, and soil moisture across a large property with one gateway.",
    solution: "Battery-powered sensor nodes with multi-year life, reporting over a long-range LoRa network.",
    features: ["Multi-sensor", "Years of battery life", "Gateway-ready"],
  },
  {
    title: "Smart Feeding Controller",
    industry: "Farm Automation",
    stage: "Production-Ready",
    technology: ["Load Cell", "RFID", "Wi-Fi"],
    challenge: "Deliver accurate, individually-tracked feed portions across multiple animals.",
    solution: "Load-cell dispensing with RFID recognition, logged and reviewable via a mobile dashboard.",
    features: ["Portion control", "Jam detection", "Feed history"],
  },
  {
    title: "Temperature & Humidity Monitor",
    industry: "Poultry Farming",
    stage: "Production-Ready",
    technology: ["Environmental Sensors", "Wi-Fi"],
    challenge: "Hold tight environmental tolerances in a poultry house with instant alerting on drift.",
    solution: "Multi-point sensor array with threshold-based alerts delivered to a facility dashboard.",
    features: ["Threshold alerts", "Multi-zone", "Historical trends"],
  },
  {
    title: "Automatic Watering Controller",
    industry: "Smart Agriculture",
    stage: "Prototype",
    technology: ["Flow Sensor", "Soil Moisture", "Cellular IoT"],
    challenge: "Automate irrigation based on real soil conditions rather than fixed timers.",
    solution: "Soil-moisture-triggered valve control with flow monitoring and leak detection.",
    features: ["Leak detection", "Rule-based logic", "Remote override"],
  },
  {
    title: "RFID Animal Identification System",
    industry: "Livestock",
    stage: "Production-Ready",
    technology: ["RFID", "Embedded Controller"],
    challenge: "Reliably identify individual animals at feeding and access points in outdoor conditions.",
    solution: "Weatherproof RFID readers integrated with feed and gate controllers for automated counting.",
    features: ["Animal counting", "Access control", "Field-hardened"],
  },
  {
    title: "Environmental Alert Device",
    industry: "Animal Shelters",
    stage: "Field Testing",
    technology: ["Smoke Sensor", "Temp Sensor", "Cellular IoT"],
    challenge: "Detect fire and extreme-temperature risk in unattended animal housing.",
    solution: "Redundant smoke and temperature sensing with cellular-backed alerts independent of Wi-Fi.",
    features: ["Local alarm", "SMS + app alerts", "Battery backup"],
  },
  {
    title: "Farm Gateway",
    industry: "Smart Agriculture",
    stage: "Production-Ready",
    technology: ["LoRaWAN", "Cellular", "Solar"],
    challenge: "Aggregate data from dozens of field sensors with no existing network infrastructure.",
    solution: "Solar-powered LoRaWAN gateway with cellular backhaul to the cloud dashboard.",
    features: ["Solar-backed", "30-day backup", "Multi-node capacity"],
  },
  {
    title: "Battery-Powered IoT Device",
    industry: "Custom Electronics",
    stage: "Prototype",
    technology: ["Power Management", "BLE", "Low-Power MCU"],
    challenge: "Push battery life from days to months without sacrificing sensor accuracy.",
    solution: "Aggressive duty-cycling and power-gated sensors managed by a low-power microcontroller.",
    features: ["Months of battery life", "Sleep-mode design", "BLE reporting"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Projects" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Projects</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Example engineering builds
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Representative projects across pet technology, livestock, and
          farm automation — the kinds of problems we design hardware to
          solve.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <CTABanner
        heading="Have a Similar Problem to Solve?"
        description="Tell us about your animals, environment, and requirements — we'll scope what it takes to build it."
        primaryLabel="Start Your Project"
        primaryHref="/terrasense/contact"
      />
    </>
  );
}
