import type { Metadata } from "next";
import {
  Building2,
  Droplets,
  Flower2,
  Home,
  PawPrint,
  Sprout,
  Warehouse,
  CloudRain,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Surveillance environnementale | PawSync",
  description:
    "Capteurs environnementaux 24 h/24 pour les bâtiments d'élevage, bâtiments avicoles, serres et refuges — température, humidité, qualité de l'air et plus encore.",
  alternates: buildAlternates("fr", "environmental-monitoring"),
};

const sensors = [
  "Température", "Humidité", "Qualité de l'air", "CO2", "Ammoniac", "Fumée",
  "Niveau d'eau", "Pluie", "Humidité du sol", "Lumière", "Pression", "Vent", "Température des équipements",
];

const applications = [
  { icon: Warehouse, title: "Surveillance des bâtiments d'élevage", description: "Une conscience climatique continue pour les bâtiments bovins et équins." },
  { icon: PawPrint, title: "Surveillance des bâtiments avicoles", description: "Des tolérances environnementales étroites suivies en permanence." },
  { icon: Flower2, title: "Surveillance des serres", description: "Suivi de la température, de l'humidité et de la lumière pour une culture maîtrisée." },
  { icon: Home, title: "Surveillance des refuges pour animaux", description: "Des conditions confortables et sûres pour les animaux hébergés et en famille d'accueil." },
  { icon: Building2, title: "Surveillance du stockage d'aliments", description: "Détection d'humidité et de température pour protéger l'aliment stocké." },
  { icon: Droplets, title: "Surveillance des réservoirs d'eau", description: "Mesure du niveau et de la qualité pour un approvisionnement en eau fiable." },
  { icon: Sprout, title: "Surveillance des exploitations en plein air", description: "Des capteurs résistants aux intempéries pour les conditions de plein champ." },
];

export default function EnvironmentalMonitoringPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Surveillance environnementale" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Surveillance environnementale</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Une conscience environnementale agricole 24 h/24
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des réseaux de capteurs qui veillent jour et nuit sur les
          conditions dont dépendent les animaux et les équipements.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <CloudRain className="h-5 w-5 text-[var(--ts-green)]" aria-hidden="true" />
          <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Capteurs que nous intégrons
          </h2>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {sensors.map((sensor) => (
            <span
              key={sensor}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {sensor}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Applications</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Où elle est utilisée
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <ServiceCard key={item.title} locale="fr" {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Besoin d'une surveillance environnementale sur mesure ?"
        description="Nous concevrons le réseau de capteurs selon votre site, vos tolérances et votre connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
