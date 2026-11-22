import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Suivi de la santé animale : dispositifs & capteurs | PawSync",
  description:
    "Dispositifs sur mesure de suivi de la santé animale : capteurs d'activité, de rumination, de température et de comportement pour bovins, bétail et animaux de compagnie, avec alertes aux premiers signes de maladie.",
  alternates: buildAlternates("fr", "animal-health-monitoring"),
  openGraph: buildOpenGraph("fr", "animal-health-monitoring"),
};

const hero = {
  "breadcrumb": "Suivi de la santé animale",
  "eyebrow": "Suivi de la santé animale",
  "h1": "Dispositifs de suivi de la santé pour le bétail & les animaux de compagnie",
  "intro": "Des capteurs portés ou installés qui suivent l'activité, le repos, la température et le comportement, pour repérer plus tôt les changements pouvant signaler une maladie, des chaleurs ou une blessure."
};

const image = {
  "src": "/home/solutions/animal-health-full.webp",
  "alt": "Infographie suivi de la santé animale : vache avec collier et boucle auriculaire, une passerelle et les étapes mesurer, connecter, analyser, surveiller, alerter",
  "height": 675
};

const chips = {
  "heading": "Signaux mesurables",
  "items": [
    "Activité",
    "Repos & temps couché",
    "Rumination",
    "Température corporelle",
    "Temps d'alimentation",
    "Visites à l'abreuvoir",
    "Localisation",
    "Posture",
    "Fréquence cardiaque",
    "Poids",
    "Conditions ambiantes"
  ]
};

const detailsCopy = {
  "eyebrow": "Ce que montrent les données",
  "heading": "Des signes précoces, pas seulement des données",
  "intro": "Le suivi de la santé est utile lorsqu'il transforme les mesures en alertes précoces. Un écart soudain par rapport au comportement habituel d'un animal compte souvent plus qu'une valeur isolée.",
  "items": [
    {
      "title": "Activité & repos",
      "description": "Les accéléromètres dans les colliers, boucles auriculaires ou bracelets de patte montrent combien un animal bouge et se couche. Une forte baisse peut signaler une boiterie ou une maladie ; une hausse peut signaler des chaleurs chez les bovins."
    },
    {
      "title": "Rumination & alimentation",
      "description": "Le temps de mastication et d'alimentation est l'un des premiers indicateurs de problèmes digestifs ou métaboliques chez les bovins, souvent avant les symptômes visibles."
    },
    {
      "title": "Température",
      "description": "Les tendances de température cutanée, auriculaire ou par bolus aident à repérer la fièvre et le stress thermique. L'emplacement compte : la peau suit la météo, les tendances sont donc comparées animal par animal."
    },
    {
      "title": "Visites à l'abreuvoir & à l'auge",
      "description": "Des capteurs aux abreuvoirs et aux auges, associés au RFID, montrent quels animaux mangent et boivent moins que d'habitude."
    },
    {
      "title": "Animaux de compagnie",
      "description": "Les profils d'activité, de sommeil et de grattage issus d'objets portés légers aident propriétaires et vétérinaires à voir des changements progressifs de santé."
    },
    {
      "title": "Alertes & tendances",
      "description": "Des règles et des références par animal transforment les mesures brutes en une courte liste d'animaux à vérifier aujourd'hui, avec un historique pour le vétérinaire."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment se développe un dispositif de suivi de la santé",
  "intro": "Un dispositif de santé doit être petit, confortable et fonctionner des mois sur batterie, tout en mesurant de façon fiable sur un animal en mouvement. Voici les points que nous cadrons avec vous.",
  "options": [
    {
      "title": "Matériel porté",
      "description": "Colliers, boucles auriculaires, bracelets de patte ou harnais avec capteurs de mouvement et de température, dimensionnés pour l'animal et son environnement."
    },
    {
      "title": "Traitement embarqué",
      "description": "Un firmware qui classe activité, repos et rumination sur l'appareil, pour n'envoyer que des synthèses et préserver la batterie."
    },
    {
      "title": "Connectivité",
      "description": "BLE, LoRaWAN ou LTE-M selon que les animaux sont en bâtiment, au pâturage ou à la maison."
    },
    {
      "title": "Références & alertes",
      "description": "Références et règles d'alerte par animal, élaborées avec vos vétérinaires ou experts, envoyées vers un tableau de bord ou une application."
    },
    {
      "title": "Validation terrain",
      "description": "Les prototypes sont testés sur les animaux par rapport à des observations ou des mesures de référence avant la production."
    }
  ],
  "stages": [
    "Découverte",
    "Choix des capteurs",
    "Conception matérielle",
    "Firmware & algorithmes",
    "Prototype",
    "Validation terrain",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Fréquence d'échantillonnage vs. autonomie",
      "description": "Détecter la rumination ou la démarche demande un échantillonnage rapide du mouvement, coûteux en énergie. Le traitement embarqué limite l'usage de la radio."
    },
    {
      "title": "Taille du dispositif vs. capacité",
      "description": "Une boucle plus petite est plus confortable mais contient une batterie plus petite. La taille de l'animal et la fréquence de remplacement fixent la limite."
    },
    {
      "title": "Point de mesure vs. précision",
      "description": "Oreille, cou, patte et mesure interne captent des signaux différents. Le bon emplacement dépend de ce qu'il faut détecter."
    },
    {
      "title": "Sensibilité des alertes vs. fausses alarmes",
      "description": "Trop sensibles, les alertes perdent la confiance du personnel ; trop strictes, de vrais problèmes passent inaperçus. Les seuils sont ajustés pendant la validation."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Espèce, âge et conditions de logement ou de pâturage",
    "Les problèmes de santé ou événements à détecter",
    "L'endroit où l'animal peut porter un dispositif",
    "L'autonomie nécessaire et la taille acceptable",
    "Les logiciels de gestion de troupeau ou vétérinaires existants",
    "Le volume visé et le calendrier"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Surveillance du bétail à distance",
      "href": "/fr/livestock-technology"
    },
    {
      "label": "Suivi GPS des bovins et du bétail",
      "href": "/fr/animal-tracking"
    },
    {
      "label": "Technologie pour animaux de compagnie",
      "href": "/fr/pet-technology"
    },
    {
      "label": "Les capteurs de suivi du bétail expliqués",
      "href": "/fr/blog/livestock-monitoring-sensors"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Les dispositifs de suivi de la santé aident au diagnostic vétérinaire mais ne le remplacent pas. Les conceptions de référence de notre page Projets sont des concepts et des prototypes, et non des produits disponibles à l'achat."
};

const faqCopy = {"heading": "Questions fréquentes"};

const faqs = [
  {
    "question": "Qu'est-ce que le suivi de la santé animale ?",
    "answer": "Le suivi de la santé animale utilise des capteurs portés par les animaux ou installés à proximité pour suivre l'activité, le repos, la rumination, la température et l'alimentation, et alerte lorsque le comportement d'un animal change d'une façon qui peut indiquer une maladie, des chaleurs ou une blessure."
  },
  {
    "question": "Les capteurs peuvent-ils détecter une maladie chez les bovins ?",
    "answer": "Les capteurs ne posent pas de diagnostic, mais les changements de rumination, d'activité, de temps couché et de température apparaissent souvent avant les symptômes visibles. Le suivi indique quels animaux vérifier, pour qu'un vétérinaire ou un éleveur intervienne plus tôt."
  },
  {
    "question": "Quelle est l'autonomie des batteries ?",
    "answer": "Elle dépend des capteurs, de la fréquence de traitement et d'envoi des données, et de la taille de la batterie. Traiter les données sur l'appareil et envoyer des synthèses plutôt que des données brutes est le principal levier d'autonomie."
  },
  {
    "question": "Concevez-vous aussi des dispositifs de santé pour animaux de compagnie ?",
    "answer": "Oui. Nous concevons des objets portés légers pour chiens et chats ainsi que des colliers, boucles auriculaires et bracelets de patte pour bovins, ovins, caprins et chevaux."
  },
  {
    "question": "Les données peuvent-elles rejoindre notre logiciel de gestion de troupeau ?",
    "answer": "Souvent, oui. Nous pouvons envoyer les données vers une plateforme existante par API, ou réaliser un tableau de bord simple pour le projet."
  }
];

const cta = {
  "heading": "Besoin d'un dispositif de santé animale sur mesure ?",
  "description": "Nous concevons capteurs, firmware et alertes selon vos animaux, votre environnement et les situations à détecter.",
  "primaryLabel": "Démarrer votre projet",
  "secondaryLabel": "Voir toutes les solutions"
};

export default function AnimalHealthMonitoringPageFr() {
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

      <section aria-labelledby="animal-health-monitoring-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="animal-health-monitoring-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="animal-health-monitoring-scope" copy={scope} />

      <section aria-labelledby="animal-health-monitoring-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="animal-health-monitoring-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
