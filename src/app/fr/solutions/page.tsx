import type { Metadata } from "next";
import {
  AlertTriangle,
  CircuitBoard,
  CloudRain,
  HeartPulse,
  Radar,
  Activity,
  RadioTower,
  Satellite,
  Settings2,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Solutions technologiques intelligentes pour animaux & exploitations agricoles | PawSync",
  description:
    "Suivi GPS des animaux, clôture virtuelle, suivi de la santé, alimentation intelligente, surveillance du bétail, automatisation agricole, irrigation intelligente, surveillance environnementale, détection des risques, réseaux de capteurs sans fil et systèmes IoT sur mesure.",
  alternates: buildAlternates("fr", "solutions"),
};

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const categories: Category[] = [
  {
    id: "tracking-location",
    icon: Satellite,
    title: "Suivi & localisation",
    description:
      "Des systèmes de localisation GPS/GNSS en temps réel ou périodiques qui gardent les animaux de compagnie, le bétail et d'autres animaux localisables — sur l'exploitation ou loin d'elle.",
    points: ["Mises à jour GPS en temps réel et programmées", "Alertes de zone virtuelle", "Historique complet de localisation", "Vue de flotte multi-animaux"],
  },
  {
    id: "virtual-fencing",
    icon: Radar,
    title: "Clôture virtuelle",
    description:
      "Des systèmes de délimitation GPS et sans fil qui donnent aux animaux la liberté de se déplacer dans des zones définies, avec une conscience de la localisation à la place de la clôture traditionnelle.",
    points: ["Limites personnalisées et ajustables", "Alertes de mouvement en temps réel", "Prise en charge de plusieurs zones", "Configuration à distance depuis le terrain ou le bureau"],
  },
  {
    id: "health-monitoring",
    icon: HeartPulse,
    title: "Suivi de la santé",
    description:
      "Une électronique portable ou installée qui suit l'activité, la température et les cycles de repos pour aider à une détection plus précoce des changements de santé.",
    points: ["Suivi quotidien de l'activité et du repos", "Détection de température", "Alertes de schémas irréguliers", "Données de tendance historiques"],
  },
  {
    id: "smart-feeding",
    icon: UtensilsCrossed,
    title: "Alimentation intelligente",
    description:
      "Des dispositifs d'alimentation automatisés avec horaires, contrôle des portions, capteurs et surveillance à distance pour animaux de compagnie, bétail et sites multi-animaux.",
    points: ["Distribution programmée et dosée", "Identification des animaux par RFID", "Alertes de niveau d'aliment et de bourrage", "Surveillance à distance et historique"],
  },
  {
    id: "livestock-monitoring",
    icon: Activity,
    title: "Surveillance du bétail",
    description:
      "Suivez le mouvement, le comportement, la localisation et les conditions environnementales sur un troupeau, avec des tableaux de bord conçus pour une gestion de groupe — pas individuelle.",
    points: ["Localisation et mouvement au niveau du troupeau", "Comportement et schémas de pâturage", "Suivi de l'exposition environnementale", "Alertes de groupe configurables"],
  },
  {
    id: "farm-automation",
    icon: Settings2,
    title: "Automatisation agricole",
    description:
      "Contrôlez automatiquement l'irrigation, l'alimentation, la ventilation, les pompes, les ventilateurs, le chauffage et le refroidissement, avec une commande manuelle toujours disponible.",
    points: ["Automatisation par règles (« si ceci, alors cela »)", "Contrôle à distance par smartphone et web", "Suivi de l'état des équipements", "Commande manuelle à tout moment"],
  },
  {
    id: "smart-irrigation",
    icon: Waves,
    title: "Irrigation intelligente & gestion de l'eau",
    description:
      "Des systèmes d'irrigation connectés utilisant la mesure de l'humidité du sol, des données environnementales et la surveillance du niveau d'eau, avec des vannes et pompes automatisées pour optimiser la consommation d'eau et les conditions des cultures.",
    points: ["Surveillance de l'humidité du sol et du niveau des réservoirs", "Contrôle automatisé des vannes et pompes", "Programmation tenant compte de la météo", "Alertes de fuite et de panne"],
  },
  {
    id: "environmental-monitoring",
    icon: CloudRain,
    title: "Surveillance environnementale",
    description:
      "Une surveillance continue de la température, de l'humidité, de la qualité de l'air et des conditions de l'eau dans les bâtiments d'élevage, poulaillers, serres et zones de stockage.",
    points: ["Couverture multi-capteurs par site", "Alertes de seuil configurables", "Tendances environnementales historiques", "Matériel adapté aux bâtiments, serres et refuges"],
  },
  {
    id: "safety-detection",
    icon: AlertTriangle,
    title: "Sécurité & détection des risques",
    description:
      "Des systèmes d'alerte précoce pour la chaleur extrême, le froid, la fumée, le risque d'incendie, les inondations, les fuites d'eau et les pannes d'équipement — avant qu'ils ne deviennent des urgences.",
    points: ["Statut Normal / Avertissement / Critique", "Alertes mobiles, SMS, e-mail et alarme locale", "Redondance des capteurs là où cela compte", "Détection des pannes d'alimentation et de pompe"],
  },
  {
    id: "wireless-sensor-networks",
    icon: RadioTower,
    title: "Réseaux de capteurs sans fil",
    description:
      "Des réseaux de nœuds de capteurs basse consommation communiquant via LoRa, BLE, Wi-Fi ou cellulaire — conçus pour couvrir de grandes exploitations sans le moindre câble.",
    points: ["Couverture maillée LoRa longue portée", "Architecture de passerelle et de station de base", "Nœuds optimisés pour la batterie", "S'adapte d'un seul bâtiment à toute une exploitation"],
  },
  {
    id: "custom-iot",
    icon: CircuitBoard,
    title: "Systèmes IoT sur mesure",
    description:
      "Lorsqu'un dispositif standard ne convient pas, nous concevons l'électronique — matériel, micrologiciel et connectivité — selon vos exigences précises.",
    points: ["Matériel et conception PCB sur mesure", "Micrologiciel embarqué adapté", "Intégration d'application mobile et d'API cloud", "Accompagnement du prototype à la production"],
  },
];

export default function SolutionsPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Solutions" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Solutions technologiques intelligentes pour animaux &amp; exploitations agricoles
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Dix domaines de problèmes, une seule équipe d&apos;ingénierie.
          Chaque catégorie ci-dessous représente du matériel, du
          micrologiciel et de la connectivité que nous concevons en interne
          — accédez directement à celle dont vous avez besoin, ou
          parlez-nous de quelque chose qui n&apos;y figure pas encore.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--ts-green)] to-[var(--ts-accent)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                  <category.icon className="h-7 w-7 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[var(--ts-navy)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
                {category.title}
              </h2>
              <p className="mt-2 text-[var(--ts-gray)]">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--ts-navy)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ts-green)]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Besoin d'un système IoT agricole sur mesure ?"
        heading="Concevons ensemble le matériel selon votre environnement, vos animaux et vos exigences opérationnelles."
        description="Qu'il s'agisse de l'une des catégories ci-dessus ou de quelque chose d'entièrement nouveau, notre équipe d'ingénierie peut le cadrer avec vous."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir notre processus d'ingénierie"
        secondaryHref="/fr/custom-electronics"
      />
    </>
  );
}
