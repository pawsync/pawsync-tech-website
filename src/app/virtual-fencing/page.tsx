import type { Metadata } from "next";
import {
  Bell,
  MapPinned,
  Radar,
  Settings2,
  ShieldAlert,
  Smartphone,
  Users,
  Vibrate,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Virtual Fencing | PawSync",
  description:
    "GPS and wireless virtual fencing systems that give animals freedom to roam within defined zones, reducing dependency on traditional physical fencing.",
  alternates: buildAlternates("en", "virtual-fencing"),
};

const capabilities = [
  { icon: Radar, title: "Custom Adjustable Boundaries", description: "Draw and update zones from an app — no wires, no posts to move." },
  { icon: Bell, title: "Real-Time Movement Alerts", description: "Notifications the moment an animal approaches or crosses a boundary." },
  { icon: MapPinned, title: "Multiple Zone Support", description: "Rotate grazing areas or manage separate zones for different groups." },
  { icon: Smartphone, title: "Remote Configuration", description: "Update boundaries from the field or the office, no equipment visit needed." },
  { icon: Vibrate, title: "Audio & Haptic Cues", description: "Progressive collar cues that warn an animal before it reaches the edge." },
  { icon: ShieldAlert, title: "Escape Prevention Alerts", description: "Early warning when an animal is moving toward a boundary at speed." },
  { icon: Users, title: "Multi-Animal Zones", description: "Manage boundaries for individual animals or entire herds at once." },
  { icon: Settings2, title: "Tracking Integration", description: "Pairs with our GPS tracking hardware for a combined location + boundary system." },
];

const faqs = [
  { question: "Does virtual fencing replace physical fencing entirely?", answer: "It can reduce dependency on physical fencing in many settings, but the right approach depends on terrain, animal type, and local requirements — we'll help you assess what fits." },
  { question: "How does an animal learn the boundary?", answer: "Collars typically use a progressive audio cue, and in some systems a brief, gentle pulse, giving the animal a chance to turn back before reaching the edge." },
  { question: "Can zones be changed remotely?", answer: "Yes — boundaries are typically configurable from a mobile or web app without needing to physically move any hardware." },
];

export default function VirtualFencingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: "Virtual Fencing" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Virtual Fencing</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          GPS &amp; Wireless Virtual Fencing
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Give animals freedom to roam within defined zones, with location
          awareness in place of — or alongside — traditional fencing.
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
              Boundaries without the wire
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
        heading="Need a Custom Virtual Fencing System?"
        description="We'll design hardware and boundary logic around your animals and land."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
