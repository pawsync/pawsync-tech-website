import type { Metadata } from "next";
import {
  Bird,
  Building2,
  Cpu,
  Dog,
  HeartPulse,
  Home,
  Microscope,
  Milk,
  PawPrint,
  Sprout,
  Tractor,
  TreePine,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Secteurs | PawSync",
  description:
    "PawSync conçoit de l'électronique pour les entreprises pet-tech, les exploitations d'élevage et avicoles, la technologie vétérinaire et les start-ups AgriTech.",
  alternates: buildAlternates("fr", "industries"),
};

const industries: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Dog, label: "Entreprises de technologie pour animaux de compagnie", href: "/fr/pet-technology" },
  { icon: Tractor, label: "Exploitations d'élevage", href: "/fr/livestock-technology" },
  { icon: Milk, label: "Exploitations laitières" },
  { icon: Bird, label: "Exploitations avicoles", href: "/fr/poultry-farming" },
  { icon: PawPrint, label: "Exploitations équestres" },
  { icon: HeartPulse, label: "Technologie vétérinaire" },
  { icon: Home, label: "Refuges pour animaux" },
  { icon: Building2, label: "Chenils" },
  { icon: TreePine, label: "Recherche sur la faune sauvage" },
  { icon: Sprout, label: "Agriculture intelligente" },
  { icon: Warehouse, label: "Fabricants d'équipements agricoles" },
  { icon: Microscope, label: "Entreprises de gestion agricole" },
  { icon: Cpu, label: "Start-ups IoT" },
  { icon: Zap, label: "Start-ups AgriTech" },
];

export default function IndustriesPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Secteurs" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Secteurs</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Conçu pour la technologie animale &amp; agricole
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Partout où les animaux et l&apos;électronique se rencontrent, il y a
          de fortes chances que nous ayons déjà conçu quelque chose de
          similaire.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const cardClass =
              "flex flex-col items-center gap-3 rounded-2xl border border-[var(--ts-navy)]/8 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]";
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                  <industry.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-[var(--ts-navy)]">{industry.label}</span>
              </>
            );
            return industry.href ? (
              <Link key={industry.label} href={industry.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={industry.label} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner
        heading="Vous ne voyez pas votre secteur ?"
        description="Si des animaux et de l'électronique sont impliqués, il y a de bonnes chances que nous puissions vous aider."
        primaryLabel="Discuter de votre projet"
        primaryHref="/fr/contact"
      />
    </>
  );
}
