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
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Über uns | PawSync",
  description:
    "PawSync verbindet Elektronik-Engineering, IoT-Konnektivität, Embedded-Systeme, Sensorik und Automatisierung zu praxisnaher Technologie für Tierhaltung und Landwirtschaft.",
  alternates: buildAlternates("de", "about"),
};

const focusAreas = [
  { icon: CircuitBoard, label: "Hardware" },
  { icon: FileCode, label: "Firmware" },
  { icon: Radio, label: "IoT" },
  { icon: Bluetooth, label: "Funkkommunikation" },
  { icon: Cpu, label: "Sensorik" },
  { icon: Battery, label: "Leistungselektronik" },
  { icon: CircuitBoard, label: "Leiterplattendesign" },
  { icon: Settings2, label: "Automatisierung" },
];

const approach = [
  "Praxisnahes Engineering — Lösungen im Maßstab des Problems, nicht überkonstruiert",
  "Individuelle Lösungen, zugeschnitten auf Ihre Tiere und Umgebung",
  "Prototypvalidierung vor jeder Produktionsentscheidung",
  "Produktionsorientiertes Design ab dem ersten Schaltplan",
  "Klare technische Dokumentation in jeder Phase",
];

export default function AboutPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Über uns" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Über PawSync</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Technologie für besseres Tier- & Hofmanagement
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          PawSync verbindet Elektronik-Engineering, IoT-Konnektivität,
          Embedded-Systeme, Sensorik und Automatisierung zu praxisnaher
          Technologie für Tierhaltung und Landwirtschaft — von einem
          einzelnen Tracking-Halsband bis zu einem vollständigen
          Hofüberwachungsnetzwerk.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-8 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
            <Target className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Unsere Mission
          </h2>
          <p className="mt-2 text-[var(--ts-gray)]">
            Entwicklung praxisnaher, zuverlässiger und intelligenter
            elektronischer Systeme, die Überwachung, Automatisierung und
            Entscheidungsfindung für Tiere und die Menschen, die sich um sie
            kümmern, verbessern.
          </p>
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Unser Engineering-Fokus</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Wo unsere Expertise liegt
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
          <Eyebrow>Unser Ansatz</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Wie wir entwickeln
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
        heading="Lassen Sie uns gemeinsam etwas bauen"
        description="Erzählen Sie uns von den Tieren, der Umgebung und dem Problem, das Sie lösen möchten."
        primaryLabel="Ihr Projekt besprechen"
        primaryHref="/de/contact"
      />
    </>
  );
}
