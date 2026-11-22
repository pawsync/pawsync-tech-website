import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Détection des urgences & catastrophes agricoles | PawSync",
  description:
    "Systèmes d'alerte précoce sur mesure pour exploitations et structures animales : fumée, risque d'incendie, inondation, chaleur et froid extrêmes, fuites d'eau, pannes électriques et d'équipements, avec alarmes SMS, application et locales.",
  alternates: buildAlternates("fr", "emergency-detection"),
  openGraph: buildOpenGraph("fr", "emergency-detection"),
};

const hero = {
  "breadcrumb": "Détection des urgences & catastrophes",
  "eyebrow": "Détection des urgences & catastrophes",
  "h1": "Systèmes d'alerte précoce pour exploitations & structures animales",
  "intro": "Des capteurs et alarmes qui signalent tôt la fumée, le risque d'incendie, les inondations, les températures extrêmes, les fuites d'eau et les pannes électriques ou d'équipements, pour agir avant que les animaux ou les bâtiments ne soient touchés."
};

const image = {
  "src": "/home/solutions/emergency-full.webp",
  "alt": "Infographie détection des urgences et catastrophes : station de capteurs solaire au-dessus d'une ville dans la vallée, avec exemples d'inondation, d'incendie, de séisme, de glissement de terrain et d'intempéries",
  "height": 613
};

const chips = {
  "heading": "Ce que le système peut détecter",
  "items": [
    "Fumée",
    "Chaleur & risque d'incendie",
    "Froid extrême",
    "Inondation",
    "Fuites d'eau",
    "Coupure électrique",
    "État du groupe électrogène",
    "Panne de pompe",
    "Panne de ventilation",
    "Niveaux de gaz",
    "Intempéries"
  ]
};

const detailsCopy = {
  "eyebrow": "Pourquoi chaque minute compte",
  "heading": "Les urgences qu'un système d'alerte précoce peut repérer",
  "intro": "Dans une exploitation, un ventilateur en panne, une conduite d'eau vide ou un petit incendie peuvent nuire à de nombreux animaux en quelques heures, souvent la nuit. Les systèmes d'alerte précoce sont conçus pour le remarquer les premiers et s'assurer que quelqu'un est prévenu.",
  "items": [
    {
      "title": "Panne de ventilation & d'électricité",
      "description": "Dans les bâtiments avicoles et porcins fermés, une coupure de courant ou un ventilateur en panne peut vite entraîner une chaleur dangereuse. La surveillance du courant, des ventilateurs et de la température avec une alarme secourue par batterie laisse au personnel le temps d'agir."
    },
    {
      "title": "Fumée & risque d'incendie",
      "description": "Des capteurs de fumée et de chaleur dans les bâtiments, stockages de foin et locaux d'aliments, ainsi que le suivi de température des moteurs et armoires électriques, peuvent signaler un risque d'incendie avant que les flammes ne s'étendent."
    },
    {
      "title": "Inondations & fuites d'eau",
      "description": "Des capteurs de niveau dans les bâtiments en zone basse et près des cours d'eau, et le suivi du débit sur les conduites, alertent en cas de montée des eaux ou de rupture de canalisation."
    },
    {
      "title": "Chaleur & froid extrêmes",
      "description": "Des seuils de température et d'humidité pour le stress thermique ou le risque de gel, y compris le gel des conduites qui peut priver les animaux d'eau."
    },
    {
      "title": "Panne d'équipement",
      "description": "Pompes, groupes électrogènes, refroidisseurs et systèmes d'alimentation surveillés en courant, durée de fonctionnement et défauts, pour qu'une machine à l'arrêt soit vite repérée."
    },
    {
      "title": "Alarmes en escalade",
      "description": "Niveaux d'avertissement et critique, avec sirène locale, SMS, appels et notifications qui passent à la personne suivante si personne n'acquitte."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Services d'ingénierie",
  "heading": "Comment se conçoit un système d'alerte précoce",
  "intro": "Un système d'alarme n'est utile que s'il fonctionne encore quand autre chose est tombé en panne. Redondance et solutions de repli sont prévues dès le départ. Voici les points que nous étudions avec vous.",
  "options": [
    {
      "title": "Stations de capteurs",
      "description": "Capteurs de fumée, de chaleur, de niveau d'eau, d'électricité et d'équipements placés là où les risques sont les plus élevés, conçus pour la poussière, l'humidité et l'extérieur."
    },
    {
      "title": "Alimentation indépendante",
      "description": "Secours par batterie et solaire pour que détection et alarmes continuent pendant la coupure même qu'elles signalent."
    },
    {
      "title": "Chemins d'alerte redondants",
      "description": "Plus d'un moyen de joindre les personnes, par exemple cellulaire et LoRaWAN, plus une sirène locale qui fonctionne sans aucun réseau."
    },
    {
      "title": "Logique d'alarme",
      "description": "États normal, avertissement et critique, temporisations contre les fausses alarmes, et règles d'escalade pour savoir qui est prévenu et quand."
    },
    {
      "title": "Tests & autodiagnostic",
      "description": "Autotests réguliers des capteurs, batteries et communications, avec une alerte quand une partie du système cesse de répondre."
    }
  ],
  "stages": [
    "Analyse des risques",
    "Plan capteurs & alarmes",
    "Conception matérielle",
    "Firmware & logique d'alarme",
    "Installation pilote",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Compromis techniques",
  "tradeoffs": [
    {
      "title": "Sensibilité vs. fausses alarmes",
      "description": "Une alarme qui sonne trop souvent finit ignorée. Temporisations, confirmation par un second capteur et seuils raisonnables gardent les alarmes crédibles."
    },
    {
      "title": "Cellulaire vs. LoRaWAN vs. sirène locale",
      "description": "Le cellulaire atteint directement les téléphones ; LoRaWAN couvre un site à faible coût ; une sirène fonctionne sans réseau. Les sites critiques combinent généralement les trois."
    },
    {
      "title": "Autonomie de secours vs. coût",
      "description": "Un secours plus long coûte plus et prend plus de place. Il est dimensionné selon la durée de coupure à couvrir avant que quelqu'un arrive."
    },
    {
      "title": "Autonome vs. intégré",
      "description": "Un système autonome continue de fonctionner si d'autres systèmes de l'exploitation tombent ; l'intégration aux régulateurs climatiques apporte du contexte mais crée des dépendances."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Les urgences qui vous préoccupent le plus",
    "Les bâtiments, animaux et équipements à protéger",
    "La couverture mobile et internet sur le site",
    "Les alarmes, automates ou groupes électrogènes existants",
    "Qui doit être alerté, et dans quel ordre",
    "Le délai pour qu'une personne arrive sur place"
  ],
  "linksHeading": "Pages et articles associés",
  "links": [
    {
      "label": "Surveillance environnementale",
      "href": "/fr/environmental-monitoring"
    },
    {
      "label": "Automatisation agricole",
      "href": "/fr/farm-automation"
    },
    {
      "label": "Systèmes de surveillance avicole",
      "href": "/fr/poultry-farming"
    },
    {
      "label": "Planifier un réseau LoRaWAN agricole",
      "href": "/fr/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "Cette section décrit des services d'ingénierie sur mesure. Un système d'alerte précoce complète les alarmes incendie certifiées et la réglementation locale, sans les remplacer. Les conceptions de référence de notre page Projets sont des concepts et des prototypes, et non des produits disponibles à l'achat."
};

const faqCopy = {"heading": "Questions fréquentes"};

const faqs = [
  {
    "question": "Que peut détecter un système d'alerte précoce agricole ?",
    "answer": "Les systèmes types surveillent la fumée et le risque d'incendie, les pannes de ventilation et d'électricité, la chaleur ou le froid extrêmes, les inondations et fuites d'eau, ainsi que les défauts de pompes, groupes électrogènes ou équipements, et alertent par sirène, SMS, appel ou application."
  },
  {
    "question": "L'alarme fonctionne-t-elle pendant une coupure de courant ?",
    "answer": "Elle le doit, et nous la concevons pour cela. Capteurs, automate et communications fonctionnent sur secours batterie ou solaire, et une sirène locale peut retentir même si internet et le réseau mobile sont coupés."
  },
  {
    "question": "Comment évitez-vous les fausses alarmes ?",
    "answer": "Avec des seuils raisonnables, de courtes temporisations avant l'alarme, la confirmation par un second capteur quand c'est important, et des niveaux d'avertissement et critique séparés. Les seuils sont ajustés lors d'une installation pilote."
  },
  {
    "question": "Cela remplace-t-il une alarme incendie certifiée ?",
    "answer": "Non. Un système d'alerte précoce ajoute une surveillance que les détecteurs incendie ne couvrent pas, comme la ventilation, l'eau et les pannes d'équipements. La détection incendie certifiée exigée par la réglementation doit rester en place."
  },
  {
    "question": "Qui reçoit les alertes ?",
    "answer": "Vous le décidez. Les alertes peuvent être envoyées à plusieurs personnes dans l'ordre, et passer à la suivante si personne n'acquitte dans un délai fixé."
  }
];

const cta = {
  "heading": "Besoin d'un système d'alerte précoce pour votre site ?",
  "description": "Nous concevons capteurs, alimentation de secours et chemins d'alerte selon les risques, les bâtiments et les animaux à protéger.",
  "primaryLabel": "Démarrer votre projet",
  "secondaryLabel": "Voir toutes les solutions"
};

export default function EmergencyDetectionPageFr() {
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

      <section aria-labelledby="emergency-detection-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="emergency-detection-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="emergency-detection-scope" copy={scope} />

      <section aria-labelledby="emergency-detection-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="emergency-detection-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
