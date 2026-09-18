import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Automatisation agricole | PawSync",
  description:
    "Systèmes de contrôle intelligents pour le climat, l'eau, l'alimentation et les infrastructures — avec contrôle par smartphone et tableau de bord pour les exploitations modernes.",
  alternates: buildAlternates("fr", "farm-automation"),
};

const categories = [
  {
    icon: Fan,
    title: "Contrôle climatique",
    items: ["Température", "Humidité", "Ventilation", "Chauffage", "Refroidissement", "Ventilateurs"],
  },
  {
    icon: Droplets,
    title: "Gestion de l'eau",
    items: ["Surveillance des réservoirs d'eau", "Abreuvement automatique", "Contrôle des pompes", "Suivi du débit", "Détection de fuites", "Alertes de disponibilité de l'eau"],
  },
  {
    icon: UtensilsCrossed,
    title: "Automatisation de l'alimentation",
    items: ["Distributeurs programmés", "Surveillance du niveau d'aliment", "Distributeurs motorisés", "Contrôle des portions"],
  },
  {
    icon: Warehouse,
    title: "Surveillance des infrastructures",
    items: ["Portes", "Portails", "Systèmes électriques", "Générateurs", "Pompes", "Moteurs", "Zones de stockage"],
  },
  {
    icon: MonitorSmartphone,
    title: "Contrôle à distance",
    items: ["Contrôle par smartphone", "Tableau de bord web", "Règles automatiques", "Commande manuelle", "Alertes"],
  },
];

export default function FarmAutomationPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Automatisation agricole" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Automatisation agricole</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Systèmes de contrôle intelligents pour les exploitations modernes
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Un système connecté unique pour contrôler le climat, l&apos;eau,
          l&apos;alimentation et l&apos;infrastructure — depuis un téléphone
          ou un tableau de bord web.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                <category.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--ts-bg)] px-3 py-1 text-xs font-medium text-[var(--ts-navy)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Règles d&apos;automatisation</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Une logique simple et configurable
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Chaque contrôleur fonctionne selon les règles que vous définissez
            — aucune dépendance au cloud n&apos;est requise pour les actions
            critiques.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-sm text-[var(--ts-accent)]">
            <Terminal className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              SI température &gt; limite configurée
              <br />
              ALORS activer la ventilation et envoyer une alerte.
            </span>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Besoin d'un système IoT agricole sur mesure ?"
        description="Concevons ensemble le matériel selon votre environnement, vos animaux et vos exigences opérationnelles."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
