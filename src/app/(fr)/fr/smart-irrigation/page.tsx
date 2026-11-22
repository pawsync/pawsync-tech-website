import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Irrigation intelligente & gestion de l'eau | PawSync",
  description:
    "Systèmes d'irrigation intelligents sur mesure : sondes d'humidité du sol, vannes et pompes automatisées, suivi des cuves et du débit, et programmation selon la météo pour exploitations et serres.",
  alternates: buildAlternates("fr", "smart-irrigation"),
  openGraph: buildOpenGraph("fr", "smart-irrigation"),
};

const hero = {
  "breadcrumb": "Irrigation intelligente",
  "eyebrow": "Irrigation intelligente & gestion de l'eau",
  "h1": "Systèmes d'irrigation intelligents pour cultures, prairies & serres",
  "intro": "Mesure de l'humidité du sol, vannes et pompes automatisées, et suivi des cuves et du débit, pour arroser quand c'est nécessaire et repérer les problèmes tôt."
};

const image = {
  "src": "/home/solutions/irrigation-full.webp",
  "alt": "Infographie irrigation intelligente : contrôleur solaire, sonde d'humidité du sol, électrovanne et débitmètre dans une parcelle",
  "height": 613
};

const chips = {
  "heading": "Ce que le système peut mesurer et commander",
  "items": [
    "Humidité du sol",
    "Température du sol",
    "Pluviométrie",
    "Niveau des cuves",
    "Débit",
    "Pression",
    "Vannes",
    "Pompes",
    "Données météo",
    "Détection de fuites",
    "Énergie solaire"
  ]
};

const detailsCopy = {
  "eyebrow": "Comment économiser l'eau",
  "heading": "Ce que fait un système d'irrigation intelligent",
  "intro": "Un programmateur arrose à heure fixe, que le sol en ait besoin ou non. Un système d'irrigation intelligent s'appuie sur des mesures pour décider quand et combien arroser, et vous alerte quand quelque chose ne va pas.",
  "items": [
    {
      "title": "Mesure de l'humidité du sol",
      "description": "Des sondes à la profondeur des racines montrent l'eau réellement disponible pour les cultures ou la prairie, pour démarrer l'irrigation quand le sol s'assèche plutôt qu'à heure fixe."
    },
    {
      "title": "Vannes & pompes automatisées",
      "description": "Électrovannes et commandes de pompes ouvrent et ferment les zones selon l'humidité du sol, un horaire ou une commande à distance, avec mode manuel."
    },
    {
      "title": "Programmation selon la météo",
      "description": "Pluviomètres et prévisions permettent de sauter ou raccourcir des cycles quand la pluie est annoncée ou déjà tombée."
    },
    {
      "title": "Niveaux des cuves & réservoirs",
      "description": "Des capteurs de niveau dans les cuves, bassins et réservoirs montrent l'eau restante et arrêtent les pompes avant qu'elles ne tournent à sec."
    },
    {
      "title": "Débit & détection de fuites",
      "description": "Les débitmètres comparent le débit attendu et réel par zone, et signalent canalisations éclatées, conduites bouchées et vannes qui ne s'ouvrent ou ne se ferment pas."
    },
    {
      "title": "Fonctionnement autonome",
      "description": "Contrôleurs solaires et nœuds sans fil basse consommation pour les parcelles éloignées sans électricité ni câblage."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment se conçoit un système d'irrigation intelligent",
  "intro": "La taille des parcelles, la source d'eau, la culture et l'alimentation électrique orientent chaque conception. Voici les points que nous étudions avec vous avant de fabriquer le matériel.",
  "options": [
    {
      "title": "Nœuds capteurs",
      "description": "Capteurs d'humidité du sol, de pluie, de niveau et de débit sur des nœuds sans fil basse consommation, conçus pour résister à la boue, au soleil et au gel."
    },
    {
      "title": "Commandes de vannes & pompes",
      "description": "Contrôleurs pour électrovannes, pompes et équipements d'irrigation existants, avec des règles locales qui fonctionnent hors ligne."
    },
    {
      "title": "Connectivité au champ",
      "description": "LoRaWAN pour les grandes surfaces, ou cellulaire pour les sites isolés, selon la taille des parcelles, le relief et la distance à la passerelle."
    },
    {
      "title": "Conception énergétique",
      "description": "Dimensionnement batterie et solaire pour que nœuds et contrôleurs passent les semaines nuageuses sans entretien."
    },
    {
      "title": "Tableau de bord & alertes",
      "description": "Tendances d'humidité du sol, consommation d'eau par zone et alertes en cas de fuite, de cuve basse ou de vanne défaillante, sur téléphone ou web."
    }
  ],
  "stages": [
    "Relevé du site",
    "Plan des zones & capteurs",
    "Conception matérielle",
    "Firmware",
    "Zone pilote",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Nombre de sondes vs. coût",
      "description": "Le sol varie dans une parcelle. Plus de sondes donnent une meilleure image mais coûtent plus ; nous les plaçons là où les différences de sol et de culture comptent le plus."
    },
    {
      "title": "Automatique vs. conseil",
      "description": "Certaines exploitations veulent des vannes qui s'ouvrent seules ; d'autres préfèrent des alertes et une recommandation. Les deux sont possibles, avec la commande manuelle conservée."
    },
    {
      "title": "Solaire vs. batterie seule",
      "description": "Le solaire ajoute coût et encombrement mais évite les changements de batterie des commandes de vannes et des pompes, plus gourmandes que les capteurs."
    },
    {
      "title": "Modernisation vs. nouveau système",
      "description": "Ajouter capteurs et commande à des pompes et vannes existantes coûte moins cher ; une nouvelle installation peut être pensée pour l'automatisation dès le départ."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Cultures ou prairies, taille des parcelles et nombre de zones",
    "Source d'eau : forage, cuve, réservoir ou réseau",
    "Pompes, vannes et contrôleurs existants",
    "Électricité disponible aux pompes et au champ",
    "Distances entre les parcelles et jusqu'aux bâtiments",
    "Si vous souhaitez une commande automatique ou seulement des alertes"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Automatisation agricole",
      "href": "/fr/farm-automation"
    },
    {
      "label": "Surveillance environnementale",
      "href": "/fr/environmental-monitoring"
    },
    {
      "label": "Planifier un réseau LoRaWAN agricole",
      "href": "/fr/blog/lorawan-farm-network-planning"
    },
    {
      "label": "Développement de produits IoT",
      "href": "/fr/custom-electronics"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Les conceptions de référence de notre page Projets sont des concepts et des prototypes, et non des produits disponibles à l'achat."
};

const faqCopy = {"heading": "Questions fréquentes"};

const faqs = [
  {
    "question": "Qu'est-ce qu'un système d'irrigation intelligent ?",
    "answer": "Un système d'irrigation intelligent utilise des sondes d'humidité du sol, des données météo et des capteurs de débit et de niveau pour décider quand et combien arroser, commande vannes et pompes automatiquement ou à distance, et vous alerte en cas de fuite ou de panne."
  },
  {
    "question": "Comment les sondes d'humidité du sol pilotent-elles l'irrigation ?",
    "answer": "Des sondes à la profondeur des racines indiquent l'humidité du sol. Quand elle passe sous un seuil fixé selon la culture et le type de sol, le contrôleur ouvre la vanne de la zone, puis la ferme quand la cible est atteinte ou qu'une durée limite est écoulée."
  },
  {
    "question": "Cela fonctionne-t-il sur des parcelles sans électricité ni internet ?",
    "answer": "Oui. Nœuds et commandes de vannes peuvent fonctionner sur batterie et solaire, et se connecter en LoRaWAN à une passerelle près des bâtiments, ou en cellulaire là où il n'y a pas de passerelle."
  },
  {
    "question": "Pouvez-vous équiper notre irrigation existante de capteurs ?",
    "answer": "Souvent, oui. Beaucoup de pompes et vannes existantes peuvent être commandées par relais ou par leurs propres contrôleurs. Nous vérifions la compatibilité lors du cadrage."
  },
  {
    "question": "Est-ce aussi adapté à l'abreuvement du bétail ?",
    "answer": "Oui. Le même suivi de niveau, de débit et la même commande de pompes servent à l'alimentation en eau du bétail, avec des alertes quand abreuvoirs ou cuves baissent."
  }
];

const cta = {
  "heading": "Besoin d'un système d'irrigation intelligent sur mesure ?",
  "description": "Nous concevons capteurs, contrôleurs et connectivité selon vos parcelles, votre source d'eau et votre alimentation électrique.",
  "primaryLabel": "Démarrer votre projet",
  "secondaryLabel": "Voir toutes les solutions"
};

export default function SmartIrrigationPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: hero.breadcrumb }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          {hero.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">{hero.intro}</p>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={image.height}
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority
          className="h-auto w-full rounded-2xl shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
          {chips.heading}
        </h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {chips.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="smart-irrigation-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="smart-irrigation-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
        </div>
      </section>

      <ServiceScope id="smart-irrigation-scope" copy={scope} />

      <section aria-labelledby="smart-irrigation-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="smart-irrigation-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref="/fr/contact"
        secondaryLabel={cta.secondaryLabel}
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
