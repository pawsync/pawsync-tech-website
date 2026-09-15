import { ArrowDown, Cpu, Droplets, Gauge, MonitorSmartphone, Waves } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const capabilities = [
  "Water Tank Level", "Flow Monitoring", "Pump Control", "Valve Control",
  "Water Availability", "Leak Detection", "Low Water Alerts",
  "Automatic Tank Refill", "Remote Pump Control", "Water Usage History",
];

const flow = [
  { icon: Droplets, label: "Tank" },
  { icon: Gauge, label: "Sensor" },
  { icon: Cpu, label: "Controller" },
  { icon: Waves, label: "Pump / Valve" },
  { icon: MonitorSmartphone, label: "IoT Dashboard" },
];

export default function PoultryWaterManagement() {
  return (
    <section aria-labelledby="poultry-water-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
          {/* System architecture flow diagram */}
          <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] lg:order-1">
            {flow.map((step, i) => (
              <div key={step.label} className="flex w-full flex-col items-center">
                <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--ts-navy)]/8 bg-[var(--ts-bg)] px-4 py-3">
                  <step.icon className="h-4 w-4 shrink-0 text-[var(--ts-dark-green)]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="lg:order-2">
            <Eyebrow>Water Management</Eyebrow>
            <h2 id="poultry-water-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Reliable Water Monitoring &amp; Control
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
              Keep tanks, lines and pumps under continuous watch — with
              alerts before a shortage becomes a problem.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-sm text-[var(--ts-navy)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-green)]" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
