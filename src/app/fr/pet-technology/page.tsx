import type { Metadata } from "next";
import {
  Bluetooth,
  Droplets,
  DoorClosed,
  DoorOpen,
  HeartPulse,
  MapPin,
  MapPinned,
  Radar,
  Satellite,
  Activity,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Technologie pour animaux de compagnie | PawSync",
  description:
    "Des dispositifs intelligents pour animaux de compagnie que nous concevons et fabriquons — trackers GPS, moniteurs d'activité, colliers intelligents, clôture virtuelle, accès RFID, distributeurs intelligents et plus encore.",
  alternates: buildAlternates("fr", "pet-technology"),
};

const solutions = [
  { icon: Satellite, title: "Trackers GPS pour animaux de compagnie", description: "Suivi de localisation monté sur collier pour retrouver un animal perdu et le suivi quotidien." },
  { icon: Activity, title: "Trackers d'activité", description: "Suivi du mouvement et de l'exercice qui dresse un portrait du bien-être quotidien." },
  { icon: HeartPulse, title: "Suivi de la santé des animaux de compagnie", description: "Capteurs portables pour le suivi de la température, de l'activité et des cycles de repos." },
  { icon: Radar, title: "Colliers intelligents", description: "Matériel de collier multi-capteurs combinant GPS, BLE et suivi de santé en un seul dispositif." },
  { icon: MapPinned, title: "Clôture virtuelle pour animaux de compagnie", description: "Des limites basées sur le GPS avec des alertes en temps réel lorsqu'un animal quitte une zone sûre." },
  { icon: DoorOpen, title: "Accès RFID pour animaux de compagnie", description: "Identification par micropuce pour des systèmes d'entrée sécurisés et sélectifs." },
  { icon: DoorClosed, title: "Chatières et portes intelligentes", description: "Des portes contrôlées par application qui ne s'ouvrent que pour les animaux reconnus et autorisés." },
  { icon: UtensilsCrossed, title: "Distributeurs intelligents", description: "Une alimentation programmée et dosée avec surveillance à distance." },
  { icon: Droplets, title: "Suivi automatique de l'eau", description: "Des capteurs de niveau et de consommation d'eau qui signalent des schémas de consommation inhabituels." },
  { icon: Thermometer, title: "Suivi de la température de l'animal", description: "Une détection continue de la température pour une identification précoce d'éventuels problèmes." },
  { icon: Bluetooth, title: "Dispositifs BLE pour animaux de compagnie", description: "Du matériel Bluetooth basse consommation pour des accessoires connectés au smartphone." },
  { icon: MapPin, title: "Systèmes de localisation d'animaux perdus", description: "Historique de localisation et alertes de dernière position connue pour accélérer la recherche." },
];

const deviceSpec = [
  "GPS", "BLE", "Accéléromètre", "Détection de température",
  "Batterie rechargeable", "Application mobile", "Alertes de zone virtuelle", "Historique d'activité",
];

export default function PetTechnologyPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Technologie pour animaux de compagnie" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Technologie pour animaux de compagnie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Une technologie connectée pour des soins plus intelligents
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des trackers GPS aux distributeurs intelligents, nous concevons le
          matériel derrière les produits pet-tech modernes — pour les
          start-ups pet-tech, les refuges et les marques de dispositifs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <ServiceCard key={item.title} locale="fr" {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Exemple de réalisation</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Exemple de dispositif intelligent pour animal de compagnie
            </h2>
            <p className="mt-4 text-lg text-[var(--ts-gray)]">
              Une spécification représentative pour un tracker connecté
              pour animal de compagnie.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <div className="flex flex-wrap gap-2.5">
              {deviceSpec.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full border border-[var(--ts-navy)]/10 bg-[var(--ts-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Développer un produit de technologie pour animaux de compagnie"
        description="Du concept au prototype, nous pouvons vous aider à concevoir l'électronique de votre prochain produit pet-tech."
        primaryLabel="Discuter de votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
