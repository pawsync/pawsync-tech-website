import type { Metadata } from "next";
import {
  Battery,
  Cpu,
  History,
  MapPinned,
  Radio,
  Satellite,
  ShieldCheck,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Développement de trackers GPS pour animaux | PawSync",
  description:
    "Développement de trackers GPS et GNSS sur mesure : carte PCB basse consommation, micrologiciel, LoRa ou cellulaire et prototype.",
  alternates: buildAlternates("fr", "animal-tracking"),
  openGraph: buildOpenGraph("fr", "animal-tracking"),
};

const capabilities = [
  { icon: Satellite, title: "Localisation GPS en temps réel", description: "Mises à jour de localisation programmées ou continues, adaptées à l'animal et à l'usage." },
  { icon: MapPinned, title: "Alertes de zone virtuelle", description: "Soyez averti dès qu'un animal suivi quitte une zone définie." },
  { icon: History, title: "Historique de localisation", description: "Trajets complets pour un animal individuel ou des groupes entiers." },
  { icon: Users, title: "Vue de flotte multi-animaux", description: "Surveillez animaux de compagnie, troupeaux ou animaux de travail depuis un tableau de bord unique." },
  { icon: Radio, title: "Connectivité longue portée", description: "GPS/GNSS associé à un relais LoRa, LTE ou satellite selon la portée requise." },
  { icon: Battery, title: "Conception optimisée pour la batterie", description: "Matériel et micrologiciel basse consommation conçus pour des semaines ou des mois entre les charges." },
  { icon: ShieldCheck, title: "Boîtiers robustes", description: "Boîtiers résistants aux intempéries et aux chocs pour un usage en extérieur." },
  { icon: Cpu, title: "Dimensionnement sur mesure", description: "Formats collier, boucle d'oreille ou harnais adaptés à l'espèce." },
];

const faqs = [
  { question: "Les dispositifs de suivi peuvent-ils fonctionner sans couverture cellulaire ?", answer: "Oui. Nous concevons des systèmes autour du LoRa et d'autres protocoles basse consommation longue portée pour les sites à couverture cellulaire limitée ou inexistante, avec synchronisation des données dès qu'une passerelle ou une connexion cellulaire est atteinte." },
  { question: "Quelle est généralement la durée de vie de la batterie ?", answer: "Cela dépend de la fréquence des mises à jour, du type de connectivité et de la taille du boîtier — nous concevons le budget énergétique selon votre intervalle de rapport requis et votre cycle d'utilisation." },
  { question: "Pouvez-vous suivre plusieurs espèces avec une seule plateforme ?", answer: "Oui. Le tableau de bord et le backend peuvent prendre en charge des flottes mixtes — animaux de compagnie, bétail et animaux de travail — avec un matériel dimensionné par espèce." },
];

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment un projet de tracker est cadré",
  "intro": "Un projet de tracker dépend du budget énergétique, du choix radio et de la taille du boîtier. Ce sont ces points que nous cadrons avec vous avant de figer une carte.",
  "options": [
    {
      "title": "Conception de carte GNSS",
      "description": "Carte compacte alimentée par batterie, avec récepteur GNSS, placement de l'antenne et chemin d'alimentation."
    },
    {
      "title": "Micrologiciel basse consommation",
      "description": "Fonctionnement cyclé, réveil déclenché par le mouvement et logique de rapport calée sur votre autonomie cible."
    },
    {
      "title": "Intégration de la connectivité",
      "description": "Passage vers une passerelle LoRa, LTE-M ou BLE, choisi selon la portée, la couverture et le coût d'exploitation."
    },
    {
      "title": "Budget énergétique & boîtier",
      "description": "Dimensionnement de la batterie, circuit de charge et contraintes du boîtier vérifiés ensemble."
    },
    {
      "title": "Prototype & essais terrain",
      "description": "Prototypes testés selon votre fréquence de rapport et votre environnement, avec résultats documentés."
    }
  ],
  "stages": [
    "Découverte",
    "Budget énergie & radio",
    "Schéma & PCB",
    "Micrologiciel",
    "Prototype",
    "Essais terrain",
    "Préparation à la fabrication"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Fréquence de rapport vs. autonomie",
      "description": "Des rapports plus fréquents réduisent l'autonomie. Nous calons l'intervalle sur la durée de fonctionnement dont vous avez besoin."
    },
    {
      "title": "Temps d'acquisition GNSS vs. consommation",
      "description": "Une localisation plus rapide consomme généralement davantage. La stratégie d'acquisition dépend de la fréquence réelle du besoin de position."
    },
    {
      "title": "Portée vs. coût d'exploitation",
      "description": "Le cellulaire couvre de grandes zones mais implique des forfaits de données ; le LoRa nécessite des passerelles mais évite les forfaits cellulaires par appareil sur un réseau privé."
    },
    {
      "title": "Taille vs. capacité de batterie",
      "description": "Un dispositif porté au cou est limité par le poids et le confort, ce qui fixe la taille maximale de la batterie."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Espèce, taille et comportement habituel de l'animal",
    "Intervalle de localisation souhaité et fréquence de changement de batterie acceptable",
    "Environnement d'utilisation : terrain ouvert, bâtiments, zones urbaines",
    "Passerelle ou infrastructure cellulaire déjà disponible",
    "Volume cible et calendrier",
    "Collier ou boîtier existant à intégrer"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Développement de dispositifs pour animaux",
      "href": "/fr/pet-technology"
    },
    {
      "label": "Matériel de suivi du bétail",
      "href": "/fr/livestock-technology"
    },
    {
      "label": "Conception basse consommation (article)",
      "href": "/fr/blog/low-power-animal-tracker-design"
    },
    {
      "label": "GNSS + LoRa vs. GNSS + LTE-M (article)",
      "href": "/fr/blog/gnss-lora-vs-gnss-ltem"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Les designs de référence présentés sur notre page Projets sont des concepts et des prototypes, et non des produits à acheter."
};

export default function AnimalTrackingPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Solutions", href: "/fr/solutions" }, { label: "Suivi des animaux" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Suivi des animaux</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">Développement sur mesure de trackers GPS & GNSS</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des systèmes de localisation en temps réel ou périodiques qui
          gardent les animaux de compagnie, le bétail et d&apos;autres animaux
          localisables — sur l&apos;exploitation ou loin d&apos;elle.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="fr" />
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Fonctionnalités</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Conçu pour un suivi fiable sur le terrain
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <ServiceCard key={item.title} locale="fr" {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ServiceScope id="tracking-scope" copy={scope} />

      <CTABanner
        heading="Besoin d'un dispositif de suivi sur mesure ?"
        description="Nous concevrons le matériel selon vos animaux, votre terrain, votre portée et vos exigences de connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
