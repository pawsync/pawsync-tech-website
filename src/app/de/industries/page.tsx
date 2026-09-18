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
  title: "Branchen | PawSync",
  description:
    "PawSync entwickelt Elektronik für Pet-Tech-Unternehmen, Nutztier-, Milchvieh- und Geflügelbetriebe, Veterinärtechnologie, Wildtierforschung und AgriTech-Start-ups.",
  alternates: buildAlternates("de", "industries"),
};

const industries: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Dog, label: "Pet-Tech-Unternehmen", href: "/de/pet-technology" },
  { icon: Tractor, label: "Nutztierbetriebe", href: "/de/livestock-technology" },
  { icon: Milk, label: "Milchviehbetriebe" },
  { icon: Bird, label: "Geflügelbetriebe", href: "/de/poultry-farming" },
  { icon: PawPrint, label: "Pferdebetriebe" },
  { icon: HeartPulse, label: "Veterinärtechnologie" },
  { icon: Home, label: "Tierheime" },
  { icon: Building2, label: "Tierpensionen" },
  { icon: TreePine, label: "Wildtierforschung" },
  { icon: Sprout, label: "Intelligente Landwirtschaft" },
  { icon: Warehouse, label: "Landtechnik-Unternehmen" },
  { icon: Microscope, label: "Hofmanagement-Unternehmen" },
  { icon: Cpu, label: "IoT-Start-ups" },
  { icon: Zap, label: "AgriTech-Start-ups" },
];

export default function IndustriesPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Branchen" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Branchen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Entwickelt für Tier- &amp; Agrartechnologie
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Wo Tiere und Elektronik aufeinandertreffen, haben wir vermutlich
          bereits Ähnliches entwickelt.
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
        heading="Ihre Branche nicht gefunden?"
        description="Wenn Tiere und Elektronik im Spiel sind, können wir wahrscheinlich helfen."
        primaryLabel="Ihr Projekt besprechen"
        primaryHref="/de/contact"
      />
    </>
  );
}
