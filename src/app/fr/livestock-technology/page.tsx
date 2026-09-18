import type { Metadata } from "next";
import {
  AlertTriangle,
  Battery,
  Droplets,
  HeartPulse,
  Hash,
  MapPinned,
  Radar,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Technologie pour le bétail | PawSync",
  description:
    "Suivi GPS du bétail, clôture virtuelle, identification RFID et matériel de suivi de la santé pour les bovins, ovins, caprins et chevaux.",
  alternates: buildAlternates("fr", "livestock-technology"),
};

const solutions = [
  { icon: Satellite, title: "Suivi GPS du bétail", description: "Localisation conçue pour les pâturages ouverts et les grandes étendues." },
  { icon: Radar, title: "Suivi des bovins", description: "Matériel de collier et de boucle d'oreille dimensionné pour les troupeaux bovins." },
  { icon: Radar, title: "Suivi des ovins", description: "Dispositifs de suivi légers pour la gestion des troupeaux." },
  { icon: Radar, title: "Suivi des caprins", description: "Matériel de suivi robuste pour les troupeaux en pâturage." },
  { icon: Radar, title: "Suivi équin", description: "Suivi GPS et de l'activité conçu pour le bien-être équin." },
  { icon: Activity, title: "Suivi de l'activité animale", description: "Données de mouvement et de comportement sur l'ensemble du troupeau." },
  { icon: HeartPulse, title: "Détection des chaleurs", description: "Analyse des schémas d'activité pour aider à repérer les fenêtres de reproduction." },
  { icon: MapPinned, title: "Suivi des déplacements", description: "Historique des déplacements pour un animal individuel ou des groupes." },
  { icon: HeartPulse, title: "Indicateurs de santé", description: "Constantes vitales et tendances d'activité pour une intervention plus précoce." },
  { icon: Activity, title: "Suivi du pâturage", description: "Données de temps passé par zone pour éclairer les décisions de pâturage tournant." },
  { icon: MapPinned, title: "Clôture virtuelle", description: "Des limites basées sur le GPS qui réduisent la dépendance à la clôture physique." },
  { icon: Hash, title: "Identification RFID", description: "Identification individuelle des animaux pour les registres et le contrôle d'accès." },
  { icon: Hash, title: "Comptage des animaux", description: "Comptages automatisés aux portails, couloirs et points d'eau." },
  { icon: Droplets, title: "Suivi de la consommation d'eau", description: "Capteurs de débit et de niveau signalant les schémas de consommation anormaux." },
  { icon: UtensilsCrossed, title: "Suivi de l'alimentation", description: "Suivi du niveau et de la consommation d'aliment sur les postes d'alimentation." },
];

const alerts = [
  { icon: AlertTriangle, label: "Animal ayant quitté la zone désignée" },
  { icon: Activity, label: "Inactivité inhabituelle" },
  { icon: ThermometerSun, label: "Température ambiante élevée" },
  { icon: Droplets, label: "Niveau d'eau bas" },
  { icon: UtensilsCrossed, label: "Anomalie d'alimentation" },
  { icon: Battery, label: "Problème de batterie potentiel du dispositif" },
];

export default function LivestockTechnologyPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Technologie pour le bétail" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Technologie pour le bétail</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Surveillance &amp; gestion connectées du bétail
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Du matériel de suivi, de surveillance de la santé et de clôture
          virtuelle conçu pour les bovins, ovins, caprins et chevaux sur
          l&apos;exploitation.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="fr" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {alerts.map((alert) => (
            <div
              key={alert.label}
              className="flex items-center gap-2.5 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <alert.icon className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              {alert.label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Conçu pour tout le troupeau
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ServiceCard key={item.title} locale="fr" {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Besoin d'un système de surveillance du bétail sur mesure ?"
        description="Concevons ensemble le matériel selon votre troupeau, votre terrain et vos exigences de connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
