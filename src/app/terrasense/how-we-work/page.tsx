import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "How We Work | PawSync",
  description:
    "Our engineering process from requirement analysis through production support — the stages every PawSync project moves through.",
};

const stages = [
  { title: "Requirement Analysis", description: "Understand the animals, environment, and constraints the product needs to work within." },
  { title: "Product Architecture", description: "Define the overall system — what the device senses, how it connects, and how it's powered." },
  { title: "Technology Selection", description: "Choose the sensors, wireless protocol, and microcontroller platform that fit the requirements." },
  { title: "Schematic Development", description: "Design the circuit — component selection, power regulation, and signal paths." },
  { title: "PCB Design", description: "Lay out the board for manufacturability, size, and reliability in the field." },
  { title: "Firmware Development", description: "Write the embedded software that runs the device and its communication protocol." },
  { title: "Prototype Assembly", description: "Build a working unit to validate the design against real conditions." },
  { title: "Functional Testing", description: "Verify sensors, connectivity, and power management perform as designed." },
  { title: "Field Testing", description: "Test in the actual environment — on the animal, in the barn, or out on the range." },
  { title: "Design Improvements", description: "Refine based on field data before locking the design for production." },
  { title: "Manufacturing Files", description: "Prepare Gerbers, BOM, and pick-and-place files for a contract manufacturer." },
  { title: "Production Support", description: "Support the transition from prototype run to ongoing manufacturing." },
];

const deliverables = [
  "Schematics", "PCB Files", "Gerber Files", "BOM", "Pick-and-Place Files",
  "Firmware Source Code", "Communication Protocol", "Device Documentation",
  "Test Procedures", "Prototype Hardware",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "How We Work" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>How We Work</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering From Concept to Production
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Twelve stages, one accountable team, from the first sketch to a
          manufacturable product.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ol className="relative space-y-8 border-l-2 border-[var(--ts-navy)]/10 pl-8">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ts-dark-green)] text-xs font-bold text-white ring-4 ring-[var(--ts-bg)]">
                {index + 1}
              </span>
              <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {stage.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ts-gray)]">{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Deliverables</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            What you walk away with
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Start the First Stage?"
        description="Tell us about the problem you're solving and we'll scope the requirement analysis together."
        primaryLabel="Discuss Your Project"
        primaryHref="/terrasense/contact"
      />
    </>
  );
}
