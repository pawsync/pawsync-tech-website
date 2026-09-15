import type { Metadata } from "next";
import {
  Battery,
  Bluetooth,
  CircuitBoard,
  Cpu,
  FileCode,
  Radio,
  Settings2,
  Target,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "About | PawSync",
  description:
    "PawSync combines electronics engineering, IoT connectivity, embedded systems, sensors, and automation to build practical technology for animal care and agriculture.",
};

const focusAreas = [
  { icon: CircuitBoard, label: "Hardware" },
  { icon: FileCode, label: "Firmware" },
  { icon: Radio, label: "IoT" },
  { icon: Bluetooth, label: "Wireless Communication" },
  { icon: Cpu, label: "Sensors" },
  { icon: Battery, label: "Power Electronics" },
  { icon: CircuitBoard, label: "PCB Design" },
  { icon: Settings2, label: "Automation" },
];

const approach = [
  "Practical engineering — solutions sized to the problem, not over-built",
  "Custom solutions designed around your animals and environment",
  "Prototype validation before any production commitment",
  "Production-focused design from the first schematic",
  "Clear technical documentation at every stage",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>About PawSync</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering Technology for Better Animal &amp; Farm Management
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          PawSync combines electronics engineering, IoT connectivity,
          embedded systems, sensors, and automation to create practical
          technology for animal care and agriculture — from a single
          tracking collar to a full farm monitoring network.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-8 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
            <Target className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Our Mission
          </h2>
          <p className="mt-2 text-[var(--ts-gray)]">
            Develop practical, reliable, and intelligent electronic systems
            that improve monitoring, automation, and decision-making for
            animals and the people who care for them.
          </p>
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Engineering Focus</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Where our expertise lives
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--ts-navy)]/8 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                  <area.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-[var(--ts-navy)]">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            How we build
          </h2>
        </div>
        <ul className="mt-10 space-y-3">
          {approach.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-[var(--ts-navy)]/8 bg-white px-5 py-4 text-sm text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTABanner
        heading="Let's Build Something Together"
        description="Tell us about the animals, environment, and problem you're trying to solve."
        primaryLabel="Discuss Your Project"
        primaryHref="/terrasense/contact"
      />
    </>
  );
}
