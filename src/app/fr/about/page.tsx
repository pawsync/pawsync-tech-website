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
  title: "À propos | PawSync",
  description:
    "PawSync associe ingénierie électronique, connectivité IoT, systèmes embarqués, capteurs et automatisation pour créer une technologie pratique au service des animaux et de l'agriculture.",
  alternates: buildAlternates("fr", "about"),
};

const focusAreas = [
  { icon: CircuitBoard, label: "Matériel" },
  { icon: FileCode, label: "Micrologiciel" },
  { icon: Radio, label: "IoT" },
  { icon: Bluetooth, label: "Communication sans fil" },
  { icon: Cpu, label: "Capteurs" },
  { icon: Battery, label: "Électronique de puissance" },
  { icon: CircuitBoard, label: "Conception de cartes PCB" },
  { icon: Settings2, label: "Automatisation" },
];

const approach = [
  "Ingénierie pratique — des solutions à la mesure du problème, sans surdimensionnement",
  "Des solutions sur mesure conçues autour de vos animaux et de votre environnement",
  "Validation du prototype avant tout engagement de production",
  "Une conception orientée production dès le premier schéma",
  "Une documentation technique claire à chaque étape",
];

export default function AboutPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "À propos" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>À propos de PawSync</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Une technologie au service d&apos;une meilleure gestion animale et agricole
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          PawSync associe ingénierie électronique, connectivité IoT, systèmes
          embarqués, capteurs et automatisation pour créer une technologie
          pratique au service des animaux et de l&apos;agriculture — d&apos;un
          simple collier de suivi à un réseau complet de surveillance
          d&apos;exploitation.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-8 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
            <Target className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Notre mission
          </h2>
          <p className="mt-2 text-[var(--ts-gray)]">
            Développer des systèmes électroniques pratiques, fiables et
            intelligents qui améliorent la surveillance, l&apos;automatisation
            et la prise de décision pour les animaux et les personnes qui en
            prennent soin.
          </p>
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Notre expertise en ingénierie</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Là où réside notre expertise
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
          <Eyebrow>Notre approche</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Comment nous concevons
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
        heading="Construisons quelque chose ensemble"
        description="Parlez-nous des animaux, de l'environnement et du problème que vous cherchez à résoudre."
        primaryLabel="Discuter de votre projet"
        primaryHref="/fr/contact"
      />
    </>
  );
}
