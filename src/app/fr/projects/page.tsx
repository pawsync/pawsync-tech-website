import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ProjectCard from "@/components/terrasense/ProjectCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Projets | PawSync",
  description:
    "Exemples de réalisations d'ingénierie PawSync — trackers GPS, prototypes de clôture virtuelle, capteurs agricoles et passerelles IoT.",
  alternates: buildAlternates("fr", "projects"),
};

const projects = [
  {
    title: "Tracker GPS pour animaux",
    industry: "Technologie pour animaux de compagnie",
    stage: "Prêt pour la production",
    technology: ["GPS/GNSS", "BLE", "LTE-M"],
    challenge: "Nécessitait une précision de localisation infra-métrique dans un format monté sur collier avec une autonomie de plusieurs jours.",
    solution: "Combinaison d'un module GNSS basse consommation avec un rapport cellulaire à cycle de service et un réveil déclenché par le mouvement.",
    features: ["Alertes de zone virtuelle", "Historique d'activité", "Application mobile"],
  },
  {
    title: "Collier intelligent pour animaux de compagnie",
    industry: "Technologie pour animaux de compagnie",
    stage: "Prototype",
    technology: ["BLE", "IMU", "Capteur de temp."],
    challenge: "Combiner suivi de santé et conscience de la localisation sans dispositif encombrant ni inconfortable.",
    solution: "Intégration d'un IMU et d'un capteur de température sur une carte compacte avec un boîtier de collier flexible.",
    features: ["Suivi d'activité", "Alertes de température", "Rechargeable"],
  },
  {
    title: "Prototype de clôture virtuelle",
    industry: "Bétail",
    stage: "Essais sur le terrain",
    technology: ["GPS/GNSS", "LoRa", "Solaire"],
    challenge: "Contenir des bovins en pâturage sur de grandes étendues sans installer de clôture physique.",
    solution: "Collier GPS avec signaux audio progressifs, transmettant la position via un maillage LoRa vers une passerelle solaire.",
    features: ["Zones personnalisées", "Alertes d'évasion", "Alimenté par le solaire"],
  },
  {
    title: "Nœud de surveillance du bétail",
    industry: "Bétail",
    stage: "Prêt pour la production",
    technology: ["LoRa", "IMU", "RFID"],
    challenge: "Suivre l'activité et la localisation du troupeau sur un terrain à faible couverture cellulaire.",
    solution: "Nœuds LoRa longue portée transmettant à une passerelle centrale, avec RFID pour l'identification individuelle.",
    features: ["Vue de flotte multi-animaux", "Conception basse consommation", "ID RFID"],
  },
  {
    title: "Capteur agricole LoRa",
    industry: "Agriculture intelligente",
    stage: "Prêt pour la production",
    technology: ["LoRa", "Capteurs environnementaux"],
    challenge: "Surveiller la température, l'humidité et l'humidité du sol sur une grande propriété avec une seule passerelle.",
    solution: "Nœuds de capteurs alimentés par batterie à longue autonomie, transmettant via un réseau LoRa longue portée.",
    features: ["Multi-capteurs", "Des années d'autonomie", "Compatible passerelle"],
  },
  {
    title: "Contrôleur d'alimentation intelligent",
    industry: "Automatisation agricole",
    stage: "Prêt pour la production",
    technology: ["Capteur de charge", "RFID", "Wi-Fi"],
    challenge: "Distribuer des portions d'aliment précises et suivies individuellement pour plusieurs animaux.",
    solution: "Distribution par capteur de charge avec reconnaissance RFID, enregistrée et consultable via un tableau de bord mobile.",
    features: ["Contrôle des portions", "Détection de bourrage", "Historique d'alimentation"],
  },
  {
    title: "Moniteur de température et d'humidité",
    industry: "Aviculture",
    stage: "Prêt pour la production",
    technology: ["Capteurs environnementaux", "Wi-Fi"],
    challenge: "Maintenir des tolérances environnementales strictes dans un bâtiment avicole avec alerte instantanée en cas de dérive.",
    solution: "Réseau de capteurs multi-points avec alertes basées sur des seuils transmises à un tableau de bord de site.",
    features: ["Alertes de seuil", "Multi-zone", "Tendances historiques"],
  },
  {
    title: "Contrôleur d'irrigation automatique",
    industry: "Agriculture intelligente",
    stage: "Prototype",
    technology: ["Capteur de débit", "Humidité du sol", "IoT cellulaire"],
    challenge: "Automatiser l'irrigation selon les conditions réelles du sol plutôt que des minuteries fixes.",
    solution: "Contrôle de vanne déclenché par l'humidité du sol avec surveillance du débit et détection de fuites.",
    features: ["Détection de fuites", "Logique par règles", "Commande manuelle à distance"],
  },
  {
    title: "Système d'identification RFID des animaux",
    industry: "Bétail",
    stage: "Prêt pour la production",
    technology: ["RFID", "Contrôleur embarqué"],
    challenge: "Identifier de manière fiable des animaux individuels aux points d'alimentation et d'accès en conditions extérieures.",
    solution: "Lecteurs RFID étanches intégrés aux contrôleurs d'alimentation et de portails pour un comptage automatisé.",
    features: ["Comptage des animaux", "Contrôle d'accès", "Résistant au terrain"],
  },
  {
    title: "Dispositif d'alerte environnementale",
    industry: "Refuges pour animaux",
    stage: "Essais sur le terrain",
    technology: ["Capteur de fumée", "Capteur de temp.", "IoT cellulaire"],
    challenge: "Détecter les risques d'incendie et de température extrême dans des logements pour animaux sans surveillance.",
    solution: "Détection redondante de fumée et de température avec alertes soutenues par le cellulaire, indépendantes du Wi-Fi.",
    features: ["Alarme locale", "Alertes SMS + application", "Batterie de secours"],
  },
  {
    title: "Passerelle agricole",
    industry: "Agriculture intelligente",
    stage: "Prête pour la production",
    technology: ["LoRaWAN", "Cellulaire", "Solaire"],
    challenge: "Agréger les données de dizaines de capteurs de terrain sans infrastructure réseau existante.",
    solution: "Passerelle LoRaWAN alimentée par le solaire avec relais cellulaire vers le tableau de bord cloud.",
    features: ["Alimenté par le solaire", "Secours de 30 jours", "Capacité multi-nœuds"],
  },
  {
    title: "Dispositif IoT alimenté par batterie",
    industry: "Électronique sur mesure",
    stage: "Prototype",
    technology: ["Gestion de l'alimentation", "BLE", "MCU basse consommation"],
    challenge: "Faire passer l'autonomie de la batterie de quelques jours à plusieurs mois sans sacrifier la précision des capteurs.",
    solution: "Cyclage agressif et capteurs à alimentation contrôlée, gérés par un microcontrôleur basse consommation.",
    features: ["Des mois d'autonomie", "Conception en mode veille", "Rapport BLE"],
  },
];

export default function ProjectsPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Projets" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Projets</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Exemples de réalisations d&apos;ingénierie
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des projets représentatifs en technologie pour animaux de
          compagnie, bétail et automatisation agricole — le type de
          problèmes pour lesquels nous concevons du matériel.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} locale="fr" {...project} />
          ))}
        </div>
      </section>

      <CTABanner
        heading="Un problème similaire à résoudre ?"
        description="Parlez-nous de vos animaux, de votre environnement et de vos exigences — nous cadrerons ensemble ce qu'il faut pour le construire."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
      />
    </>
  );
}
