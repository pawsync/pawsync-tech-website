import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Automatisation agricole & systèmes de commande | PawSync",
  description:
    "Systèmes de contrôle sur mesure pour le climat, l'eau, l'alimentation et les infrastructures, pilotables par smartphone ou tableau de bord web.",
  alternates: buildAlternates("fr", "farm-automation"),
  openGraph: buildOpenGraph("fr", "farm-automation"),
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

const detailsCopy = {
  "eyebrow": "Ce qui peut être automatisé",
  "heading": "L'automatisation agricole, système par système",
  "intro": "L'automatisation agricole fonctionne le mieux quand chaque boucle de commande est simple et fiable : un capteur, une règle et une sortie, avec un mode manuel. Voici les systèmes que nous automatisons le plus souvent.",
  "items": [
    {
      "title": "Climat des bâtiments d'élevage & avicoles",
      "description": "Ventilateurs, entrées d'air, chauffages, pads de refroidissement et brumisation commandés par paliers selon la température, l'humidité, l'ammoniac ou le CO2."
    },
    {
      "title": "Abreuvement & pompes",
      "description": "Pompes démarrées selon le niveau ou un horaire, débit surveillé pour détecter fuites et conduites bouchées, et alerte lorsque l'eau n'arrive plus aux animaux."
    },
    {
      "title": "Alimentation",
      "description": "Distributeurs programmés avec détection du niveau d'aliment, surveillance des moteurs et des vis, et historique de chaque distribution."
    },
    {
      "title": "Irrigation",
      "description": "Vannes et pompes pilotées selon l'humidité du sol, la météo et des horaires, pour arroser quand les cultures ou les prairies en ont réellement besoin."
    },
    {
      "title": "Portes, barrières & éclairage",
      "description": "Portes et barrières motorisées avec détection de position, et programmes d'éclairage pour la volaille et les serres, commandés sur place ou depuis un téléphone."
    },
    {
      "title": "Électricité & secours",
      "description": "Détection de coupure secteur, démarrage et état du groupe électrogène, et batterie de secours pour l'automate lui-même, afin que les systèmes critiques continuent de fonctionner."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment se conçoit un système de commande agricole",
  "intro": "L'automatisation agit sur des équipements dont dépendent les animaux : la sécurité et le comportement de repli sont donc prévus dès le départ. Voici les points que nous étudions avec vous.",
  "options": [
    {
      "title": "Matériel de commande",
      "description": "Cartes sur mesure ou automates robustes avec relais et pilotes de moteurs dimensionnés pour vos ventilateurs, pompes et actionneurs, dans des boîtiers adaptés à l'élevage."
    },
    {
      "title": "Règles locales & sécurité",
      "description": "Les règles critiques tournent sur l'automate lui-même, pour que la ventilation ou l'abreuvement continuent si internet ou le cloud tombent."
    },
    {
      "title": "Intégration des capteurs",
      "description": "Capteurs de climat, de niveau, de débit et d'équipements, filaires ou sans fil, choisis selon ce que chaque règle doit savoir."
    },
    {
      "title": "Commande à distance & alertes",
      "description": "Commande par téléphone et web avec mode manuel, notifications d'alarme et historique de ce qui a été commuté et pourquoi."
    },
    {
      "title": "Intégration de l'existant",
      "description": "Raccordement aux ventilateurs, pompes et automates déjà présents lorsque c'est possible, plutôt que de tout remplacer."
    }
  ],
  "stages": [
    "Analyse du procédé",
    "Logique de commande",
    "Conception matérielle",
    "Firmware",
    "Essais en atelier",
    "Pilote sur site",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Commande locale vs. fonctions cloud",
      "description": "Les règles sur l'automate fonctionnent hors ligne ; tableaux de bord, historique et modifications à distance nécessitent une connexion. Les actions critiques restent locales."
    },
    {
      "title": "Automatisation complète vs. mode manuel",
      "description": "Chaque sortie automatisée garde un mode manuel, pour que le personnel reprenne la main pendant la maintenance ou en conditions inhabituelles."
    },
    {
      "title": "Filaire vs. sans fil",
      "description": "Les capteurs et sorties filaires sont les plus fiables pour les boucles critiques ; le sans-fil évite le câblage dans les bâtiments grands ou anciens."
    },
    {
      "title": "Modernisation vs. équipement neuf",
      "description": "Ajouter une commande aux ventilateurs et pompes existants coûte moins cher, mais un équipement ancien peut limiter ce qui peut être mesuré ou commandé en sécurité."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Les équipements à commander et comment ils sont commutés aujourd'hui",
    "Les conditions ou horaires qui doivent déclencher chaque action",
    "Ce qui doit continuer à fonctionner en cas de coupure électrique ou internet",
    "Nombre et taille des bâtiments ou zones",
    "Automates ou logiciels déjà présents sur le site",
    "Qui doit recevoir les alertes et pouvoir modifier les réglages"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Surveillance environnementale",
      "href": "/fr/environmental-monitoring"
    },
    {
      "label": "Systèmes de surveillance avicole",
      "href": "/fr/poultry-farming"
    },
    {
      "label": "Systèmes d'alimentation intelligents",
      "href": "/fr/smart-feeding"
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
    "question": "Qu'est-ce que l'automatisation agricole ?",
    "answer": "L'automatisation agricole utilise des capteurs et des automates pour faire fonctionner des équipements comme ventilateurs, chauffages, pompes, distributeurs et barrières selon des règles ou des horaires, avec alertes et commande à distance depuis un téléphone ou un ordinateur."
  },
  {
    "question": "Que se passe-t-il si internet tombe ?",
    "answer": "Nous plaçons les règles critiques sur l'automate local, pour que la ventilation, le chauffage ou l'abreuvement continuent sans internet. L'accès à distance et les alertes reprennent au retour de la connexion."
  },
  {
    "question": "Pouvez-vous automatiser mes équipements existants ?",
    "answer": "Souvent, oui. Beaucoup de ventilateurs, pompes et chauffages peuvent être commandés par relais ou contacteurs, et certains automates existants peuvent être raccordés directement. Nous vérifions ce qui est sûr et réaliste lors du cadrage."
  },
  {
    "question": "Puis-je toujours commander manuellement ?",
    "answer": "Oui. Chaque sortie automatisée garde un mode manuel sur place et dans l'application, pour que le personnel puisse passer outre les règles si nécessaire."
  },
  {
    "question": "Quelle différence entre automatisation et surveillance ?",
    "answer": "La surveillance mesure les conditions et vous alerte ; l'automatisation agit en plus, par exemple en démarrant les ventilateurs quand la température monte. La plupart des projets commencent par la surveillance et ajoutent la commande là où elle fait gagner le plus de travail."
  }
];

export default function FarmAutomationPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Automatisation agricole" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Automatisation agricole</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Systèmes de contrôle intelligents pour les exploitations modernes
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Nous concevons des systèmes de contrôle connectés pour le climat,
          l&apos;eau, l&apos;alimentation et l&apos;infrastructure — avec un
          contrôle par téléphone ou tableau de bord web selon vos besoins.
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
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ts-gray)]">
          Ce sont des fonctionnalités que nous intégrons à des systèmes sur
          mesure, et non un produit standard. Les logiciels tels que tableaux
          de bord, applications et alertes sont développés pour chaque projet
          selon vos besoins.
        </p>
      </section>

      <section className="bg-[var(--ts-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Règles d&apos;automatisation</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Une logique simple et configurable
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Les contrôleurs peuvent être conçus pour fonctionner selon les
            règles que vous définissez — sans dépendance au cloud pour les
            actions critiques.
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

      <section aria-labelledby="farm-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="farm-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="farm-scope" copy={scope} />

      <section aria-labelledby="farm-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="farm-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
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
