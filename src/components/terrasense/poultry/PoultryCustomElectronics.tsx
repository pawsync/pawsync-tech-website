import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const services = [
  "Custom PCB Design", "Embedded Firmware", "Sensor Integration", "IoT Connectivity",
  "LoRa Systems", "Wi-Fi Systems", "LTE Connectivity", "Farm Controllers",
  "Motor & Relay Control", "Power Management", "Gateway Development",
  "Prototype Development", "Testing", "Manufacturing Preparation",
];

const flow = ["Idea", "Architecture", "Schematic", "PCB", "Firmware", "Prototype", "Testing", "Production"];

export default function PoultryCustomElectronics() {
  return (
    <section aria-labelledby="poultry-custom-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Custom Engineering</Eyebrow>
        <h2 id="poultry-custom-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Need a Custom Poultry Electronics Product?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
          PawSync can develop custom electronics and IoT hardware around
          your poultry operation or commercial product idea.
        </p>
      </div>

      {/* Flow */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {flow.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              {step}
            </span>
            {i < flow.length - 1 && (
              <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2.5">
        {services.map((s) => (
          <span key={s} className="rounded-full bg-[var(--ts-dark-green)]/8 px-3.5 py-1.5 text-xs font-medium text-[var(--ts-dark-green)]">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/terrasense/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2"
        >
          Discuss Your Poultry Project
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
