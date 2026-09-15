import type { Metadata } from "next";
import {
  Apple,
  Bell,
  CloudRain,
  Cpu,
  Gauge,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Home,
  MapPinned,
  MonitorSmartphone,
  PawPrint,
  Radar,
  Satellite,
  Stethoscope,
  Users,
} from "lucide-react";
import ServiceCategorySection, { type ServiceItem } from "@/components/ServiceCategorySection";
import ServicesCTA from "@/components/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | PawSync.tech",
  description:
    "Everything PawSync offers in one place — pet care, farm and livestock technology, and smart devices for animal welfare.",
};

const petCareServices: ServiceItem[] = [
  {
    icon: PawPrint,
    title: "Adoption",
    description: "Browse adoptable dogs, cats, and rabbits and find your new best friend.",
    href: "/adopt",
  },
  {
    icon: HeartHandshake,
    title: "Rescue",
    description: "We take in animals from unsafe situations and give them a path to a new home.",
    href: "/get-involved?interest=partner",
  },
  {
    icon: Home,
    title: "Foster",
    description: "Open your home temporarily and help an animal get ready for adoption.",
    href: "/get-involved?interest=foster",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Checkups, vaccinations, emergency support, and more from our vet partners.",
    href: "/vet-care",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Positive-reinforcement behavior support for pets settling into a new home.",
    href: "/vet-care#vet-care-services",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Personalized diet guidance for weight, allergies, and life-stage needs.",
    href: "/vet-care#vet-care-services",
  },
];

const farmServices: ServiceItem[] = [
  {
    icon: Radar,
    title: "Virtual Fencing",
    description: "GPS-based boundaries that keep livestock safely contained without physical fences.",
    href: "/livestock#virtual-fencing",
  },
  {
    icon: Satellite,
    title: "GPS Livestock Tracking",
    description: "Real-time location tracking for cattle, sheep, goats, and horses.",
    href: "/livestock#virtual-fencing",
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring",
    description: "Vitals and activity tracking that helps catch illness earlier.",
    href: "/livestock#animal-health",
  },
  {
    icon: Users,
    title: "Herd Management",
    description: "Grazing plans, breeding records, and nutrition tracking for the whole herd.",
    href: "/livestock#cattle-farming",
  },
  {
    icon: CloudRain,
    title: "Environmental Monitoring",
    description: "Temperature, humidity, and air-quality sensors for barns and pastures.",
    href: "/livestock",
  },
];

const techServices: ServiceItem[] = [
  {
    icon: Satellite,
    title: "GPS Collars",
    description: "Collar-mounted trackers for pets and working animals alike.",
    href: "/pet-tech#gps-trackers",
  },
  {
    icon: MapPinned,
    title: "Tracking Devices",
    description: "Location hardware built for reliability in the field.",
    href: "/pet-tech#gps-trackers",
  },
  {
    icon: Cpu,
    title: "Smart Sensors",
    description: "Health and environmental sensors that feed live data to your dashboard.",
    href: "/pet-tech#health-monitors",
  },
  {
    icon: Gauge,
    title: "Farm Monitoring",
    description: "One dashboard for everything happening across your property.",
    href: "/livestock",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile & Dashboard Connectivity",
    description: "Check on animals and equipment from your phone, anywhere.",
    href: "/pet-tech",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    description: "Instant notifications for boundary breaches, low battery, and more.",
    href: "/livestock#virtual-fencing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
          Services built around pet wellbeing
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          Everything PawSync offers, organized in one place — from pet
          adoption and veterinary care to farm technology and smart
          devices.
        </p>
      </section>

      <ServiceCategorySection
        id="pet-care"
        eyebrow="Pet Care"
        heading="Care for pets, start to finish"
        description="Adoption, rescue, fostering, and everything a pet needs to thrive."
        items={petCareServices}
        accent="orange"
        tone="default"
      />

      <ServiceCategorySection
        id="farm-livestock"
        eyebrow="Farm & Livestock"
        heading="Technology for working animals"
        description="Smart tools built for ranches, farms, and the animals that work them."
        items={farmServices}
        accent="teal"
        tone="muted"
      />

      <ServiceCategorySection
        id="smart-technology"
        eyebrow="Smart Technology"
        heading="Devices that keep watch"
        description="The hardware behind every alert, location, and health reading."
        items={techServices}
        accent="amber"
        tone="default"
      />

      <ServicesCTA />
    </>
  );
}
