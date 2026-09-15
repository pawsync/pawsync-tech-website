import type { Metadata } from "next";
import {
  Bluetooth,
  Droplets,
  DoorClosed,
  DoorOpen,
  HeartPulse,
  MapPin,
  MapPinned,
  Radar,
  Satellite,
  Activity,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Pet Technology | PawSync",
  description:
    "Smart pet devices we design and build — GPS trackers, activity monitors, smart collars, virtual fencing, RFID access, smart feeders, and more.",
};

const solutions = [
  { icon: Satellite, title: "GPS Pet Trackers", description: "Collar-mounted location tracking for lost-pet recovery and daily monitoring." },
  { icon: Activity, title: "Activity Trackers", description: "Motion and exercise tracking that builds a picture of daily wellbeing." },
  { icon: HeartPulse, title: "Pet Health Monitoring", description: "Wearable sensors for temperature, activity, and rest pattern tracking." },
  { icon: Radar, title: "Smart Collars", description: "Multi-sensor collar hardware combining GPS, BLE, and health monitoring in one device." },
  { icon: MapPinned, title: "Virtual Pet Fencing", description: "GPS-based boundaries with real-time alerts when a pet leaves a safe zone." },
  { icon: DoorOpen, title: "RFID Pet Access", description: "Microchip-based identification for secure, selective entry systems." },
  { icon: DoorClosed, title: "Smart Pet Doors", description: "App-controlled doors that open only for recognized, authorized pets." },
  { icon: UtensilsCrossed, title: "Smart Feeders", description: "Scheduled, portion-controlled feeding with remote monitoring." },
  { icon: Droplets, title: "Automatic Water Monitoring", description: "Water level and consumption sensors that flag unusual drinking patterns." },
  { icon: Thermometer, title: "Pet Temperature Monitoring", description: "Continuous temperature sensing for early awareness of potential issues." },
  { icon: Bluetooth, title: "BLE Pet Devices", description: "Low-power Bluetooth hardware for smartphone-connected accessories." },
  { icon: MapPin, title: "Lost-Pet Location Systems", description: "Location history and last-known-position alerts to speed up recovery." },
];

const deviceSpec = [
  "GPS", "BLE", "Accelerometer", "Temperature sensing",
  "Rechargeable battery", "Mobile app", "Geofence alerts", "Activity history",
];

export default function PetTechnologyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Pet Technology" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Pet Technology</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Connected Technology for Smarter Pet Care
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          From GPS trackers to smart feeders, we design the hardware behind
          modern pet-tech products — for pet-tech startups, shelters, and
          device brands alike.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Example Build</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Example Smart Pet Device
            </h2>
            <p className="mt-4 text-lg text-[var(--ts-gray)]">
              A representative specification for a connected pet tracker.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <div className="flex flex-wrap gap-2.5">
              {deviceSpec.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full border border-[var(--ts-navy)]/10 bg-[var(--ts-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Build a Pet Technology Product"
        description="From concept to prototype, we can help you design the electronics behind your next pet-tech product."
        primaryLabel="Discuss Your Project"
        primaryHref="/terrasense/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/terrasense/solutions"
      />
    </>
  );
}
