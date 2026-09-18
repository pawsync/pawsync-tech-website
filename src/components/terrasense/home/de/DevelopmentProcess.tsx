import Link from "next/link";
import {
  ArrowRight,
  CircuitBoard,
  ClipboardCheck,
  Compass,
  FileCode,
  FlaskConical,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Compass,
    title: "Discovery",
    description: "Verständnis des Problems, der Tiere, der Hofumgebung und der Produktanforderungen.",
  },
  {
    icon: Workflow,
    title: "Systemarchitektur",
    description: "Festlegung von Sensoren, Kommunikationstechnologie, Stromversorgung, Elektronik- und Software-Architektur.",
  },
  {
    icon: CircuitBoard,
    title: "Elektronikdesign",
    description: "Schaltplan-Entwicklung, Leiterplattendesign und Bauteilauswahl.",
  },
  {
    icon: FlaskConical,
    title: "Prototypenentwicklung",
    description: "Bau und Validierung eines funktionsfähigen Prototyps.",
  },
  {
    icon: FileCode,
    title: "Firmware & Konnektivität",
    description: "Entwicklung von Embedded-Software, Funkkommunikation und Geräteprotokollen.",
  },
  {
    icon: ClipboardCheck,
    title: "Produktionsvorbereitung",
    description: "Erstellung von Leiterplattendaten, Stückliste, Fertigungsunterlagen, Testverfahren und technischer Dokumentation.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section aria-labelledby="development-process-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Unser Prozess</Eyebrow>
        <h2
          id="development-process-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Von der Idee zum fertigen Produkt
        </h2>
      </div>

      {/* Connected roadmap — horizontal line on desktop, vertical on mobile */}
      <ol className="relative mt-16 flex flex-col gap-10 sm:flex-row sm:gap-4">
        <span
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[var(--ts-green)] via-[var(--ts-navy)]/10 to-[var(--ts-navy)]/10 sm:left-0 sm:top-6 sm:h-px sm:w-full sm:bg-gradient-to-r"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex min-w-0 flex-1 gap-4 sm:flex-col sm:items-center sm:text-center">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--ts-dark-green)] shadow-md ring-4 ring-[var(--ts-bg)]">
              <step.icon className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="min-w-0 sm:mt-4 sm:px-1.5">
              <span className="text-xs font-bold text-[var(--ts-green)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-[family-name:var(--font-manrope)] text-base font-bold text-[var(--ts-navy)]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ts-gray)]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 text-center">
        <Link
          href="/de/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2"
        >
          Ihre Produktidee besprechen
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
