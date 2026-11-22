import type { Metadata } from "next";
import {
  Bird,
  Building2,
  Cpu,
  Dog,
  HeartPulse,
  Home,
  Microscope,
  Milk,
  PawPrint,
  Sprout,
  Tractor,
  TreePine,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Secteurs : technologie animale, élevage, aviculture | PawSync",
  description:
    "PawSync conçoit de l'électronique pour les objets connectés pour animaux, l'élevage, l'aviculture, la technologie vétérinaire et les start-ups AgriTech.",
  alternates: buildAlternates("fr", "industries"),
  openGraph: buildOpenGraph("fr", "industries"),
};

const industries: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Dog, label: "Entreprises de technologie pour animaux de compagnie", href: "/fr/pet-technology" },
  { icon: Tractor, label: "Exploitations d'élevage", href: "/fr/livestock-technology" },
  { icon: Milk, label: "Exploitations laitières" },
  { icon: Bird, label: "Exploitations avicoles", href: "/fr/poultry-farming" },
  { icon: PawPrint, label: "Exploitations équestres" },
  { icon: HeartPulse, label: "Technologie vétérinaire" },
  { icon: Home, label: "Refuges pour animaux" },
  { icon: Building2, label: "Pensions pour animaux" },
  { icon: TreePine, label: "Recherche sur la faune sauvage" },
  { icon: Sprout, label: "Agriculture intelligente" },
  { icon: Warehouse, label: "Fabricants d'équipements agricoles" },
  { icon: Microscope, label: "Entreprises de gestion agricole" },
  { icon: Cpu, label: "Start-ups IoT" },
  { icon: Zap, label: "Start-ups AgriTech" },
];

const detailsCopy = {
  "eyebrow": "Ce que nous concevons",
  "heading": "Ce que nous concevons pour chaque secteur",
  "intro": "Les mêmes compétences de base – capteurs, électronique basse consommation, connectivité sans fil et firmware – s'appliquent différemment dans chaque secteur. Voici les problèmes pour lesquels nous concevons le plus souvent du matériel.",
  "items": [
    {
      "title": "Entreprises de technologie pour animaux de compagnie",
      "description": "Traceurs GPS et d'activité, distributeurs intelligents et produits connectés pour animaux, conçus pour un format réduit, une longue autonomie et une installation simple, prêts pour la fabrication."
    },
    {
      "title": "Élevages bovins & laitiers",
      "description": "Surveillance du bétail à distance, suivi des bovins, colliers de clôture virtuelle et capteurs d'eau et de barrières qui fonctionnent sur de grandes prairies avec peu ou pas de couverture cellulaire."
    },
    {
      "title": "Élevages avicoles",
      "description": "Capteurs avicoles sans fil pour la température, l'humidité, l'ammoniac et le CO2, avec suivi de la ventilation, de l'alimentation et de l'eau sur plusieurs bâtiments."
    },
    {
      "title": "Vétérinaire & bien-être animal",
      "description": "Dispositifs de suivi de la santé et de l'activité, et surveillance environnementale pour cliniques, refuges, chenils et pensions."
    },
    {
      "title": "Recherche sur la faune",
      "description": "Dispositifs de suivi et de mesure légers et durables pour les études de terrain, où le poids, l'isolement des sites et l'autonomie guident chaque choix de conception."
    },
    {
      "title": "Start-up AgriTech & IoT",
      "description": "De la preuve de concept à un appareil prêt pour la production : conception de cartes, firmware, prototypes et dossiers de fabrication, pour tester le marché et passer à l'échelle."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Travailler avec nous",
  "heading": "Comment nous travaillons avec différents clients",
  "intro": "Une exploitation, une marque pour animaux de compagnie et une équipe de recherche n'attendent pas la même chose d'un partenaire d'ingénierie. Nous adaptons la collaboration à qui fabriquera, vendra et assurera le support de l'appareil.",
  "options": [
    {
      "title": "Entreprises produits",
      "description": "Développement matériel complet d'un appareil vendu sous votre marque, avec documentation et dossiers remis à votre fabricant."
    },
    {
      "title": "Exploitations & opérateurs",
      "description": "Un système de surveillance ou de commande sur mesure pour votre site, conçu selon vos bâtiments, vos animaux et votre connectivité."
    },
    {
      "title": "Start-up",
      "description": "Un développement par étapes qui met tôt un prototype fonctionnel entre les mains des utilisateurs, avant d'investir dans l'outillage de production."
    },
    {
      "title": "Équipes de recherche",
      "description": "De petites séries d'appareils spécialisés, construits selon les exigences de mesure, de poids et d'autonomie d'une étude."
    },
    {
      "title": "Fabricants d'équipements",
      "description": "Ajout de capteurs, de connectivité ou de surveillance à distance à des équipements agricoles ou de soins aux animaux existants."
    }
  ],
  "stages": [
    "Découverte",
    "Exigences",
    "Architecture",
    "Prototype",
    "Essais",
    "Préparation de la production"
  ],
  "tradeoffsHeading": "Ce qui oriente chaque projet",
  "tradeoffs": [
    {
      "title": "Coût unitaire vs. volume",
      "description": "Un appareil produit à des milliers d'exemplaires ne se conçoit pas comme une série de cinquante. Le volume visé oriente le choix des composants et du boîtier."
    },
    {
      "title": "Module standard vs. matériel sur mesure",
      "description": "Quand un module existant suffit, nous l'utilisons. Une carte sur mesure se justifie quand la taille, la consommation ou le coût l'exigent."
    },
    {
      "title": "Rapidité vs. préparation à la certification",
      "description": "Un prototype rapide valide l'idée ; un produit destiné à la vente demande aussi des choix de conception compatibles avec la certification radio et sécurité."
    },
    {
      "title": "Fonctions vs. autonomie",
      "description": "Chaque capteur supplémentaire et chaque envoi plus fréquent coûtent de l'autonomie. Chaque secteur place cette limite différemment."
    }
  ],
  "inquiryHeading": "Informations utiles pour cadrer un projet",
  "inquiry": [
    "Votre secteur et qui utilisera l'appareil",
    "Le problème que l'appareil doit résoudre",
    "Le volume de production prévu",
    "L'autonomie et la connectivité nécessaires",
    "Le calendrier et les éventuelles certifications",
    "Le matériel, les logiciels ou les prototypes existants"
  ],
  "linksHeading": "Pages associées",
  "links": [
    {
      "label": "Technologie pour animaux de compagnie",
      "href": "/fr/pet-technology"
    },
    {
      "label": "Surveillance du bétail à distance",
      "href": "/fr/livestock-technology"
    },
    {
      "label": "Systèmes de surveillance avicole",
      "href": "/fr/poultry-farming"
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
    "question": "Travaillez-vous uniquement avec des exploitations agricoles ?",
    "answer": "Non. Nous travaillons aussi avec des marques pour animaux de compagnie, des organisations vétérinaires et de bien-être animal, des équipes de recherche, des fabricants d'équipements et des start-up. Leur point commun : l'électronique pour les animaux, les exploitations ou les environnements connectés."
  },
  {
    "question": "Pouvez-vous développer un produit que nous vendrons sous notre marque ?",
    "answer": "Oui. Nous prenons en charge la conception matérielle, le firmware et les prototypes, puis remettons les fichiers de conception, la nomenclature et les procédures de test dont votre fabricant a besoin."
  },
  {
    "question": "Travaillez-vous avec des start-up à un stade précoce ?",
    "answer": "Oui. Beaucoup de projets partent d'une idée ou d'un prototype sommaire. Nous aidons à définir les exigences, à construire un prototype fonctionnel et à planifier le passage à la production."
  },
  {
    "question": "Mon secteur n'est pas listé. Pouvez-vous quand même nous aider ?",
    "answer": "Probablement. Si votre projet concerne les animaux, l'agriculture ou des capteurs connectés, envoyez-nous une courte description et nous vous dirons si cela correspond."
  }
];

export default function IndustriesPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Secteurs" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Secteurs</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Conçu pour la technologie animale &amp; agricole
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Partout où les animaux et l&apos;électronique se rencontrent, c&apos;est
          précisément le type de problème pour lequel nous concevons du
          matériel.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const cardClass =
              "flex flex-col items-center gap-3 rounded-2xl border border-[var(--ts-navy)]/8 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]";
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                  <industry.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-[var(--ts-navy)]">{industry.label}</span>
              </>
            );
            return industry.href ? (
              <Link key={industry.label} href={industry.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={industry.label} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="industries-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="industries-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="industries-scope" copy={scope} />

      <section aria-labelledby="industries-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="industries-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Vous ne voyez pas votre secteur ?"
        description="Si des animaux et de l'électronique sont impliqués, il y a de bonnes chances que nous puissions vous aider."
        primaryLabel="Discuter de votre projet"
        primaryHref="/fr/contact"
      />
    </>
  );
}
