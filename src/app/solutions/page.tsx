import type { Metadata } from "next";
import {
  AlertTriangle,
  CircuitBoard,
  CloudRain,
  HeartPulse,
  Radar,
  Activity,
  RadioTower,
  Satellite,
  Settings2,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";

export const metadata: Metadata = {
  title: "Smart Animal & Farm Technology Solutions | PawSync",
  description:
    "GPS animal tracking, virtual fencing, health monitoring, smart feeding, livestock monitoring, farm automation, smart irrigation, environmental monitoring, disaster detection, wireless sensor networks and custom IoT systems.",
};

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const categories: Category[] = [
  {
    id: "tracking-location",
    icon: Satellite,
    title: "Tracking & Location",
    description:
      "Real-time or periodic GPS/GNSS location systems that keep pets, livestock and other animals findable — on the property or far from it.",
    points: ["Real-time & scheduled GPS updates", "Geofence & zone alerts", "Full location history", "Multi-animal fleet view"],
  },
  {
    id: "virtual-fencing",
    icon: Radar,
    title: "Virtual Fencing",
    description:
      "GPS and wireless boundary systems that give animals freedom to roam within defined zones, with location awareness in place of traditional fencing.",
    points: ["Custom, adjustable boundaries", "Real-time movement alerts", "Multiple zone support", "Remote configuration from the field or office"],
  },
  {
    id: "health-monitoring",
    icon: HeartPulse,
    title: "Health Monitoring",
    description:
      "Wearable or installed electronics that track activity, temperature, and rest patterns to support earlier awareness of health changes.",
    points: ["Daily activity & rest tracking", "Temperature sensing", "Irregular-pattern alerts", "Historical trend data"],
  },
  {
    id: "smart-feeding",
    icon: UtensilsCrossed,
    title: "Smart Feeding",
    description:
      "Automated feeding devices with schedules, portion control, sensors and remote monitoring for pets, livestock and multi-animal facilities.",
    points: ["Scheduled, portion-controlled dispensing", "RFID-based animal identification", "Feed-level & jam alerts", "Remote monitoring & history"],
  },
  {
    id: "livestock-monitoring",
    icon: Activity,
    title: "Livestock Monitoring",
    description:
      "Track movement, behavior, location and environmental conditions across a herd, with dashboards built for group — not individual — management.",
    points: ["Herd-level location & movement", "Behavior & grazing patterns", "Environmental exposure tracking", "Configurable group alerts"],
  },
  {
    id: "farm-automation",
    icon: Settings2,
    title: "Farm Automation",
    description:
      "Control watering, feeding, ventilation, pumps, fans, heaters and cooling systems automatically, with manual override always available.",
    points: ["Rule-based automation (\"if this, then that\")", "Remote smartphone & web control", "Equipment status monitoring", "Manual override at any time"],
  },
  {
    id: "smart-irrigation",
    icon: Waves,
    title: "Smart Irrigation & Water Management",
    description:
      "Connected irrigation systems using soil-moisture sensing, environmental data, and water-level monitoring, with automated valves and pumps to optimize water usage and crop conditions.",
    points: ["Soil moisture & tank-level monitoring", "Automated valve & pump control", "Weather-aware scheduling", "Leak & failure alerts"],
  },
  {
    id: "environmental-monitoring",
    icon: CloudRain,
    title: "Environmental Monitoring",
    description:
      "Continuous monitoring of temperature, humidity, air quality and water conditions across barns, coops, greenhouses and storage areas.",
    points: ["Multi-sensor coverage per site", "Configurable threshold alerts", "Historical environmental trends", "Barn, greenhouse & shelter-ready hardware"],
  },
  {
    id: "safety-detection",
    icon: AlertTriangle,
    title: "Safety & Disaster Detection",
    description:
      "Early-warning systems for extreme heat, cold, smoke, fire risk, flooding, water leaks and equipment failure — before they become emergencies.",
    points: ["Normal / Warning / Critical status", "Mobile, SMS, email & local alarm alerts", "Redundant sensing where it matters", "Power & pump failure detection"],
  },
  {
    id: "wireless-sensor-networks",
    icon: RadioTower,
    title: "Wireless Sensor Networks",
    description:
      "Networks of low-power sensor nodes communicating over LoRa, BLE, Wi-Fi or cellular — built to cover large farms without a wire in sight.",
    points: ["Long-range LoRa mesh coverage", "Gateway & base-station architecture", "Battery-optimized nodes", "Scales from one barn to a whole ranch"],
  },
  {
    id: "custom-iot",
    icon: CircuitBoard,
    title: "Custom IoT Systems",
    description:
      "When an off-the-shelf device doesn't fit, we design the electronics — hardware, firmware and connectivity — around your exact requirements.",
    points: ["Custom hardware & PCB design", "Tailored embedded firmware", "Mobile app & cloud API integration", "Support from prototype to production"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Solutions" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Smart Animal &amp; Farm Technology Solutions
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Ten problem areas, one engineering team. Every category below is
          hardware, firmware and connectivity we design in-house — jump to
          the one you need, or talk to us about something that isn&apos;t
          listed yet.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--ts-green)] to-[var(--ts-accent)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                  <category.icon className="h-7 w-7 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--ts-navy)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
                {category.title}
              </h2>
              <p className="mt-2 text-[var(--ts-gray)]">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--ts-navy)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-green)]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Need a Custom Farm IoT System?"
        heading="Let's design hardware around your environment, animals and operational requirements."
        description="Whether it's one of the categories above or something entirely new, our engineering team can scope it with you."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="See Our Engineering Process"
        secondaryHref="/custom-electronics"
      />
    </>
  );
}
