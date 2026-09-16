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
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Environmental Monitoring | PawSync",
  description:
    "24/7 environmental sensing for barns, poultry houses, greenhouses, and shelters — temperature, humidity, air quality, and more.",
};

const sensors = [
  "Temperature", "Humidity", "Air Quality", "CO2", "Ammonia", "Smoke",
  "Water Level", "Rain", "Soil Moisture", "Light", "Pressure", "Wind", "Equipment Temperature",
];

const applications = [
  { icon: Warehouse, title: "Barn Monitoring", description: "Continuous climate awareness for cattle and horse barns." },
  { icon: PawPrint, title: "Poultry House Monitoring", description: "Tight environmental tolerances tracked around the clock." },
  { icon: Flower2, title: "Greenhouse Monitoring", description: "Temperature, humidity, and light tracking for controlled growing." },
  { icon: Home, title: "Animal Shelter Monitoring", description: "Comfortable, safe conditions for sheltered and fostered animals." },
  { icon: Building2, title: "Feed Storage Monitoring", description: "Moisture and temperature sensing to protect stored feed." },
  { icon: Droplets, title: "Water Tank Monitoring", description: "Level and quality sensing for reliable water supply." },
  { icon: Sprout, title: "Outdoor Farm Monitoring", description: "Weather-hardened sensors for open-field conditions." },
];

export default function EnvironmentalMonitoringPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Environmental Monitoring" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Environmental Monitoring</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          24/7 Farm Environmental Awareness
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
