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
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Développement de dispositifs pour animaux | PawSync",
  description:
    "Développement sur mesure de dispositifs pour animaux : wearables, colliers et trackers avec carte PCB, micrologiciel et prototype.",
  alternates: buildAlternates("fr", "pet-technology"),
  openGraph: buildOpenGraph("fr", "pet-technology"),
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

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Ce que vous pouvez commander",
  "intro": "Confiez à PawSync une seule étape ou le parcours complet, du concept à un prototype testé. Les équipes produit déjà structurées commencent souvent par une revue d'architecture ou par la seule conception de carte PCB.",
  "options": [
    {
      "title": "Architecture & faisabilité",
      "description": "Définir capteurs, connectivité, contraintes de batterie et de boîtier avant de figer une carte."
    },
    {
      "title": "Conception de carte PCB",
      "description": "Schéma et routage de cartes compactes alimentées par batterie, revus pour l'alimentation et les performances RF."
    },
    {
      "title": "Micrologiciel embarqué",
      "description": "Firmware pour l'acquisition des capteurs, le fonctionnement basse consommation, la connectivité sans fil et les échanges avec l'application."
    },
    {
      "title": "Prototype & tests",
      "description": "Prototypes fonctionnels, essais en laboratoire et essais de terrain documentés par rapport à vos exigences."
    },
    {
      "title": "Préparation à la fabrication",
      "description": "Nomenclature, fichiers de fabrication et procédures de test pour un transfert à un fabricant de votre choix. PawSync prépare ces documents ; il n'assure pas lui-même la production en série."
    }
  ],
  "stages": [
    "Découverte",
    "Architecture",
    "Schéma & PCB",
    "Micrologiciel",
    "Prototype",
    "Tests",
    "Préparation à la fabrication"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Autonomie vs. fréquence de rapport",
      "description": "Des mises à jour de position ou de capteurs plus fréquentes réduisent l'autonomie. Nous calons l'intervalle sur la durée de fonctionnement requise."
    },
    {
      "title": "Taille et confort vs. capacité de batterie",
      "description": "Un dispositif porté au cou est limité par le poids, la taille du boîtier et le confort de l'animal, ce qui plafonne la batterie embarquée."
    },
    {
      "title": "GNSS et une seconde radio",
      "description": "Le GNSS détermine la position ; le LoRa ou le cellulaire la transmet à une passerelle ou au cloud. Le bon choix dépend de la portée, de la couverture et du coût d'exploitation."
    },
    {
      "title": "Protection contre l'eau et les chocs",
      "description": "L'étanchéité et la robustesse sont vérifiées par des essais sur le boîtier fini. Nous ne supposons aucun indice de protection avant de l'avoir testé."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Type de dispositif et taille de l'animal visé",
    "Fonctions souhaitées : localisation, activité, capteurs de santé, alimentation ou accès",
    "Fréquence de rapport et autonomie visées",
    "Connectivité et environnement de couverture",
    "Volume cible et calendrier",
    "Matériel ou boîtier existant à réutiliser"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Développement de trackers animaux",
      "href": "/fr/animal-tracking"
    },
    {
      "label": "Développement de distributeurs intelligents",
      "href": "/fr/smart-feeding"
    },
    {
      "label": "Électronique & micrologiciel sur mesure",
      "href": "/fr/custom-electronics"
    },
    {
      "label": "Conception basse consommation (article)",
      "href": "/fr/blog/low-power-animal-tracker-design"
    },
    {
      "label": "GNSS + LoRa vs. GNSS + LTE-M (article)",
      "href": "/fr/blog/gnss-lora-vs-gnss-ltem"
    },
    {
      "label": "Conception de carte PCB pour tracker (article)",
      "href": "/fr/blog/pet-tracker-pcb-design"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Les designs de référence présentés sur notre page Projets sont des concepts et des prototypes, et non des produits à acheter."
};

export default function PetTechnologyPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Technologie pour animaux de compagnie" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Technologie pour animaux de compagnie</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">Développement sur mesure de dispositifs pour animaux</h1>
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

      <ServiceScope id="pet-scope" copy={scope} />

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
