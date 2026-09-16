import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Farm Automation | PawSync",
  description:
    "Intelligent control systems for climate, water, feeding, and infrastructure — with smartphone and dashboard control for modern farms.",
};

const categories = [
  {
    icon: Fan,
    title: "Climate Control",
    items: ["Temperature", "Humidity", "Ventilation", "Heating", "Cooling", "Fans"],
  },
  {
    icon: Droplets,
    title: "Water Management",
    items: ["Water tank monitoring", "Automatic watering", "Pump control", "Flow monitoring", "Leak detection", "Water availability alerts"],
  },
  {
    icon: UtensilsCrossed,
    title: "Feeding Automation",
    items: ["Scheduled feeders", "Feed level monitoring", "Motorized dispensers", "Portion control"],
  },
  {
    icon: Warehouse,
    title: "Infrastructure Monitoring",
    items: ["Doors", "Gates", "Power systems", "Generators", "Pumps", "Motors", "Storage areas"],
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Control",
    items: ["Smartphone control", "Web dashboard", "Automatic rules", "Manual override", "Alerts"],
  },
];

export default function FarmAutomationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Farm Automation" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Farm Automation</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Intelligent Control Systems for Modern Farms
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          One connected system to control climate, water, feeding, and
          infrastructure — from a phone or a web dashboard.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                <category.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--ts-bg)] px-3 py-1 text-xs font-medium text-[var(--ts-navy)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Automation Rules</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, configurable logic
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Every controller runs on rules you set — no cloud dependency
            required for critical actions.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-sm text-[var(--ts-accent)]">
            <Terminal className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              IF temperature &gt; configured limit
              <br />
              THEN activate ventilation and send alert.
            </span>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a Custom Farm IoT System?"
        description="Let's design hardware around your environment, animals, and operational requirements."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
