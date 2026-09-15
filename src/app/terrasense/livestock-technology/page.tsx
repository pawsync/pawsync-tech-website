import type { Metadata } from "next";
import {
  AlertTriangle,
  Battery,
  Droplets,
  HeartPulse,
  Hash,
  MapPinned,
  Radar,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Livestock Technology | PawSync",
  description:
    "Livestock GPS tracking, virtual fencing, RFID identification, and health monitoring hardware for cattle, sheep, goats, and horses.",
};

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
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
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

      <CTABanner
        heading="Need a Custom Livestock Monitoring System?"
        description="Let's design hardware around your herd, terrain, and connectivity requirements."
        primaryLabel="Start Your Project"
        primaryHref="/terrasense/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/terrasense/solutions"
      />
    </>
  );
}
