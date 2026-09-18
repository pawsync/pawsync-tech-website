import type { Metadata } from "next";
import {
  Battery,
  Cpu,
  History,
  MapPinned,
  Radio,
  Satellite,
  ShieldCheck,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Animal Tracking | PawSync",
  description:
    "GPS and GNSS animal tracking systems for pets, livestock and other animals — real-time location, geofence alerts, and long-range connectivity.",
  alternates: buildAlternates("en", "animal-tracking"),
};

const capabilities = [
  { icon: Satellite, title: "Real-Time GPS Location", description: "Scheduled or continuous location updates sized to the animal and use case." },
  { icon: MapPinned, title: "Geofence & Zone Alerts", description: "Get notified the moment a tracked animal leaves a defined area." },
  { icon: History, title: "Location History", description: "Full movement trails for individual animals or entire groups." },
  { icon: Users, title: "Multi-Animal Fleet View", description: "Monitor pets, herds or working animals from a single dashboard." },
  { icon: Radio, title: "Long-Range Connectivity", description: "GPS/GNSS paired with LoRa, LTE or satellite backhaul depending on range." },
  { icon: Battery, title: "Battery-Optimized Design", description: "Low-power hardware and firmware built for weeks or months between charges." },
  { icon: ShieldCheck, title: "Rugged Enclosures", description: "Weather- and impact-resistant housings for field and outdoor use." },
  { icon: Cpu, title: "Custom Device Sizing", description: "Collar, ear-tag or harness form factors sized for the species." },
];

const faqs = [
  { question: "Can tracking devices work without cellular coverage?", answer: "Yes. We design systems around LoRa and other low-power wide-area protocols for sites with limited or no cellular signal, syncing data once a gateway or cellular connection is reached." },
  { question: "How long does battery life typically last?", answer: "It depends on update frequency, connectivity type and enclosure size — we design the power budget around your required reporting interval and duty cycle." },
  { question: "Can you track multiple species with one platform?", answer: "Yes. The dashboard and backend can support mixed fleets — pets, livestock, and working animals — with device hardware sized per species." },
];

export default function AnimalTrackingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: "Animal Tracking" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Animal Tracking</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          GPS &amp; GNSS Animal Tracking Systems
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Real-time or periodic location systems that keep pets, livestock
          and other animals findable — on the property or far from it.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard />
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Built for reliable field tracking
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
        heading="Need a Custom Tracking Device?"
        description="We'll design hardware around your animals, terrain, range and connectivity requirements."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
