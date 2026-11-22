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
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import ServiceCard from "@/components/terrasense/ServiceCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Capteurs environnementaux pour fermes & bâtiments | PawSync",
  description:
    "Capteurs environnementaux 24 h/24 pour les bâtiments d'élevage, bâtiments avicoles, serres et refuges — température, humidité, qualité de l'air et plus encore.",
  alternates: buildAlternates("fr", "environmental-monitoring"),
  openGraph: buildOpenGraph("fr", "environmental-monitoring"),
};

const sensors = [
  "Température", "Humidité", "Qualité de l'air", "CO2", "Ammoniac", "Fumée",
  "Niveau d'eau", "Pluie", "Humidité du sol", "Lumière", "Pression", "Vent", "Température des équipements",
];

const applications = [
  { icon: Warehouse, title: "Surveillance des bâtiments d'élevage", description: "Une surveillance climatique continue pour les bâtiments bovins et équins." },
  { icon: PawPrint, title: "Surveillance des bâtiments avicoles", description: "Des tolérances environnementales étroites suivies en permanence.", href: "/fr/poultry-farming" },
  { icon: Flower2, title: "Surveillance des serres", description: "Suivi de la température, de l'humidité et de la lumière pour une culture maîtrisée." },
  { icon: Home, title: "Surveillance des refuges pour animaux", description: "Des conditions confortables et sûres pour les animaux hébergés et en famille d'accueil." },
  { icon: Building2, title: "Surveillance du stockage d'aliments", description: "Détection d'humidité et de température pour protéger l'aliment stocké." },
  { icon: Droplets, title: "Surveillance des réservoirs d'eau", description: "Mesure du niveau et de la qualité pour un approvisionnement en eau fiable." },
  { icon: Sprout, title: "Surveillance des exploitations en plein air", description: "Des capteurs résistants aux intempéries pour les conditions de plein champ." },
];

const detailsCopy = {
  "eyebrow": "Ce qu'il faut mesurer",
  "heading": "Ce que chaque mesure vous apprend",
  "intro": "Un système de surveillance environnementale pour l'exploitation n'est utile que s'il mesure ce qui affecte réellement vos animaux, vos cultures et vos équipements. Voici les mesures autour desquelles nous construisons le plus souvent nos systèmes, et pourquoi chacune compte.",
  "items": [
    {
      "title": "Température & humidité",
      "description": "Ensemble, elles indiquent le risque de stress thermique pour les bovins, les porcs et les volailles, et pilotent ventilateurs, pads de refroidissement, brumisation et chauffage. Une mesure à hauteur d'animal est plus utile qu'un capteur sous le toit."
    },
    {
      "title": "Ammoniac & CO2",
      "description": "Dans les bâtiments fermés, elles montrent si la ventilation suit. L'ammoniac irrite les yeux et les voies respiratoires ; un CO2 en hausse signifie qu'il entre trop peu d'air frais."
    },
    {
      "title": "Fumée & température des équipements",
      "description": "Alerte précoce en cas d'incendie dans un bâtiment d'élevage ou un stockage d'aliments, et en cas de surchauffe de moteurs, pompes ou armoires électriques, avant qu'une panne ne devienne une urgence."
    },
    {
      "title": "Niveau d'eau & alimentation",
      "description": "Niveaux des cuves, abreuvoirs et réservoirs, pour repérer une cuve vide, un flotteur bloqué ou une fuite avant que les animaux ne manquent d'eau."
    },
    {
      "title": "Stockage des aliments",
      "description": "Humidité et température dans les silos et locaux d'aliments, où les zones humides et les points chauds entraînent moisissures et aliments gâtés."
    },
    {
      "title": "Sol, pluie, vent & lumière",
      "description": "Pour les serres et les parcelles extérieures : humidité du sol pour l'irrigation, pluie et vent pour les alertes météo, et luminosité pour la culture contrôlée."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment se construit un réseau de surveillance",
  "intro": "Chaque site est différent : taille des bâtiments, distances, alimentation électrique et accès internet orientent la conception. Voici les points que nous étudions avec vous avant de fabriquer le matériel.",
  "options": [
    {
      "title": "Conception des nœuds capteurs",
      "description": "Nœuds sur batterie ou sur secteur réunissant les capteurs nécessaires sur une seule carte, avec fonctions d'étalonnage et d'autodiagnostic."
    },
    {
      "title": "Passerelle & connectivité",
      "description": "LoRaWAN, Wi-Fi ou LTE-M, choisis selon la distance entre bâtiments, les matériaux des murs et la présence d'internet sur le site."
    },
    {
      "title": "Boîtiers adaptés à l'élevage",
      "description": "Boîtiers résistants à la poussière, à la condensation, à l'ammoniac et au lavage, avec des ouvertures de capteurs qui restent précises en air chargé."
    },
    {
      "title": "Alertes & tableau de bord",
      "description": "Seuils, alarmes par SMS, e-mail ou application, et envoi des données vers une plateforme existante ou un tableau de bord dédié au projet."
    },
    {
      "title": "Installation pilote",
      "description": "Quelques nœuds installés d'abord dans un bâtiment pour vérifier la portée, l'autonomie et la précision avant de déployer à plus grande échelle."
    }
  ],
  "stages": [
    "Besoins du site",
    "Choix des capteurs",
    "Conception du réseau",
    "Nœuds prototypes",
    "Installation pilote",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Fréquence de mesure vs. autonomie",
      "description": "Une mesure par minute vide les batteries bien plus vite qu'une toutes les 15 minutes. Nous fixons l'intervalle selon la vitesse à laquelle chaque paramètre peut changer."
    },
    {
      "title": "LoRaWAN vs. Wi-Fi vs. cellulaire",
      "description": "LoRaWAN couvre souvent toute l'exploitation avec une passerelle et peu d'énergie ; le Wi-Fi convient aux bâtiments déjà équipés ; le cellulaire aux sites isolés sans internet."
    },
    {
      "title": "Coût du capteur vs. précision et dérive",
      "description": "Les capteurs de gaz bon marché dérivent plus vite en air chargé d'ammoniac. Quand une mesure pilote la ventilation ou les alarmes, un meilleur capteur ou un étalonnage régulier en vaut la peine."
    },
    {
      "title": "Plus de capteurs vs. maintenance plus simple",
      "description": "Chaque nœud supplémentaire est une batterie et un boîtier de plus à entretenir. Nous visons le moins de capteurs possible tout en gardant des mesures représentatives."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Type et nombre de bâtiments ou de zones à surveiller",
    "Ce qu'il faut mesurer et les seuils importants",
    "Distances entre les bâtiments et jusqu'au bureau de l'exploitation",
    "Électricité et internet disponibles sur le site",
    "Comment vous souhaitez recevoir les alertes",
    "Automates, capteurs ou logiciels existants à connecter"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Systèmes de surveillance avicole",
      "href": "/fr/poultry-farming"
    },
    {
      "label": "Automatisation agricole",
      "href": "/fr/farm-automation"
    },
    {
      "label": "Capteurs d'ammoniac, de CO2 et d'humidité en bâtiment avicole",
      "href": "/fr/blog/poultry-house-air-quality-sensors"
    },
    {
      "label": "Planifier un réseau LoRaWAN agricole",
      "href": "/fr/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Les conceptions de référence de notre page Projets sont des concepts et des prototypes, et non des produits disponibles à l'achat."
};

const faqCopy = {"heading": "Questions fréquentes"};

const faqs = [
  {
    "question": "Que comprend un système de surveillance environnementale agricole ?",
    "answer": "Des nœuds capteurs dans chaque bâtiment ou zone, une passerelle ou une connexion réseau qui collecte leurs mesures, et un tableau de bord ou une application qui affiche les données et envoie les alertes. Nous concevons les nœuds et la connectivité en fonction de votre site."
  },
  {
    "question": "Les capteurs résistent-ils à l'ammoniac, à la poussière et au lavage ?",
    "answer": "Oui, si le boîtier et les capteurs sont choisis pour cela. Les nœuds pour bâtiments d'élevage et avicoles demandent des boîtiers étanches, des ouvertures de capteurs protégées et des matériaux résistants à l'ammoniac, ainsi qu'un plan de nettoyage et d'étalonnage."
  },
  {
    "question": "Faut-il internet dans chaque bâtiment ?",
    "answer": "Non. Avec LoRaWAN, une passerelle bien placée peut souvent couvrir toute l'exploitation, et seule la passerelle a besoin d'internet. Les sites sans internet peuvent utiliser une passerelle cellulaire."
  },
  {
    "question": "Comment les alertes sont-elles envoyées ?",
    "answer": "En général par SMS, e-mail ou notification d'application lorsqu'une mesure dépasse un seuil que vous fixez, par exemple une température élevée, un manque d'eau ou de la fumée. Les règles d'alerte et leurs destinataires sont définis pendant le projet."
  },
  {
    "question": "Le système peut-il aussi piloter ventilateurs, chauffages ou pompes ?",
    "answer": "Oui. La surveillance peut être reliée à des relais et à des automates pour que les équipements se commandent automatiquement. Notre page sur l'automatisation agricole explique comment surveillance et commande fonctionnent ensemble."
  }
];

export default function EnvironmentalMonitoringPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Surveillance environnementale" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Surveillance environnementale</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Surveillance environnementale 24 h/24 pour exploitations &amp; bâtiments d&apos;élevage
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

      <section aria-labelledby="env-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="env-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {detailsCopy.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">{detailsCopy.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailsCopy.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceScope id="env-scope" copy={scope} />

      <section aria-labelledby="env-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="env-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
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
