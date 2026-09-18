import type { Metadata } from "next";
import {
  ArrowRight,
  BatteryCharging,
  Cloud,
  CircuitBoard,
  ClipboardCheck,
  Compass,
  Factory,
  FileCode,
  FlaskConical,
  Radio,
  ScanLine,
  Thermometer,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Électronique sur mesure & développement de produits IoT | PawSync",
  description:
    "Conception de cartes PCB sur mesure, micrologiciels embarqués, ingénierie IoT GPS et LoRa, et accompagnement du prototype à la production pour la technologie animale et agricole.",
  alternates: buildAlternates("fr", "custom-electronics"),
};

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Workflow,
    title: "Concept produit & architecture",
    description: "Développement du concept produit et architecture électronique qui équilibre performance, coût et fabricabilité.",
  },
  {
    icon: CircuitBoard,
    title: "Conception de schémas & cartes PCB",
    description: "Conception de schémas, disposition des cartes PCB, revue de conception et sélection de composants pour une électronique de terrain fiable.",
  },
  {
    icon: FileCode,
    title: "Micrologiciel embarqué",
    description: "Développement de micrologiciels sur plateformes ESP32, STM32, nRF52 et Arduino, adaptés à votre matériel.",
  },
  {
    icon: Thermometer,
    title: "Intégration de capteurs",
    description: "Intégration de capteurs GPS et environnementaux — d'un capteur unique à un nœud multi-capteurs complet.",
  },
  {
    icon: Radio,
    title: "Connectivité sans fil",
    description: "Connectivité IoT LoRa, Bluetooth, Wi-Fi et cellulaire, conçue pour la portée, la fiabilité et l'autonomie.",
  },
  {
    icon: ScanLine,
    title: "Systèmes RFID",
    description: "Systèmes d'identification RFID pour le suivi des animaux, le contrôle d'accès et la reconnaissance à l'alimentation.",
  },
  {
    icon: BatteryCharging,
    title: "Conception d'alimentation & batterie",
    description: "Conception de dispositifs alimentés par batterie et gestion de l'énergie pour une longue autonomie sur le terrain.",
  },
  {
    icon: Cloud,
    title: "Intégration logicielle & cloud",
    description: "Communication avec l'application mobile et intégration d'API cloud qui relie votre matériel à un tableau de bord exploitable.",
  },
  {
    icon: FlaskConical,
    title: "Développement de prototypes",
    description: "Des prototypes fonctionnels que vous pouvez tenir en main, tester et valider avant de vous engager en production.",
  },
  {
    icon: Factory,
    title: "Accompagnement à la fabrication",
    description: "Un accompagnement à la préparation de fabrication pour faire passer un prototype validé vers la production.",
  },
];

const processSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: "Idée" },
  { icon: Workflow, label: "Architecture" },
  { icon: CircuitBoard, label: "PCB" },
  { icon: FileCode, label: "Micrologiciel" },
  { icon: FlaskConical, label: "Prototype" },
  { icon: ClipboardCheck, label: "Tests" },
  { icon: Factory, label: "Production" },
];

const exampleSpecs = [
  "GPS", "BLE", "Accéléromètre", "Détection de température",
  "Batterie rechargeable", "Application mobile", "Alertes de zone virtuelle", "Historique d'activité",
];

const faqs: FAQItem[] = [
  {
    question: "Pouvez-vous développer un dispositif de suivi animal entièrement sur mesure ?",
    answer: "Oui. Nous concevons le matériel, le micrologiciel et la connectivité selon votre animal, votre environnement, votre portée et vos exigences d'autonomie spécifiques, plutôt que d'adapter un produit standard.",
  },
  {
    question: "Les trackers GPS peuvent-ils fonctionner dans des exploitations isolées ?",
    answer: "Oui, avec le bon choix technologique. Le GPS fournit la localisation, tandis que la connectivité LoRa ou cellulaire fait remonter ces données depuis des zones sans Wi-Fi local — nous vous aidons à choisir la bonne combinaison pour votre exploitation.",
  },
  {
    question: "Quelle technologie sans fil convient le mieux au suivi du bétail ?",
    answer: "Cela dépend de la portée, de la taille du troupeau et du budget. Le LoRa convient aux grandes propriétés avec des mises à jour peu fréquentes ; le cellulaire convient aux animaux qui se déplacent au-delà d'une seule exploitation ; le BLE convient aux données courte portée et haute fréquence près d'un bâtiment ou d'une passerelle. Nous vous aidons à peser les compromis.",
  },
  {
    question: "Pouvez-vous développer des systèmes de surveillance agricole basés sur LoRa ?",
    answer: "Oui. LoRa et LoRaWAN sont au cœur de notre travail sur les réseaux de capteurs sans fil, y compris l'architecture des passerelles et les nœuds de capteurs optimisés pour la batterie.",
  },
  {
    question: "Les dispositifs de surveillance animale peuvent-ils fonctionner sur batterie ?",
    answer: "Oui — la plupart des dispositifs que nous concevons sont alimentés par batterie, avec une gestion de l'énergie spécifiquement conçue pour une longue autonomie sur le terrain.",
  },
  {
    question: "Pouvez-vous développer des dispositifs connectés à une application mobile ?",
    answer: "Oui. Nous concevons la communication côté dispositif et l'intégration d'API cloud dont une application mobile ou un tableau de bord a besoin pour afficher des données en direct et historiques.",
  },
  {
    question: "Pouvez-vous concevoir à la fois le matériel et le micrologiciel ?",
    answer: "Oui, les deux sont des compétences internes essentielles — du schéma et de la conception PCB jusqu'au micrologiciel embarqué qui s'exécute dessus.",
  },
  {
    question: "Pouvez-vous aider à faire passer un prototype en production ?",
    answer: "Oui. Nous préparons les fichiers PCB, la nomenclature, les fichiers de fabrication, les procédures de test et la documentation technique pour accompagner cette transition.",
  },
  {
    question: "Pouvez-vous développer des contrôleurs agricoles sur mesure ?",
    answer: "Oui — des contrôleurs qui gèrent la température, l'humidité, l'irrigation, l'alimentation, les ventilateurs, les pompes et d'autres équipements agricoles font régulièrement partie de notre travail.",
  },
  {
    question: "Vos systèmes peuvent-ils surveiller plusieurs sites agricoles ?",
    answer: "Oui, lorsque le plan de connectivité le permet (généralement des passerelles cellulaires ou connectées à Internet par site), un seul tableau de bord peut réunir plusieurs sites.",
  },
  {
    question: "Quels capteurs peuvent être intégrés à un système de surveillance agricole ?",
    answer: "Les choix courants incluent les capteurs de température, d'humidité, de qualité de l'air, de niveau d'eau, d'humidité du sol, de mouvement et de charge — la bonne combinaison dépend de ce que vous devez surveiller.",
  },
  {
    question: "Pouvez-vous développer des dispositifs RFID d'identification du bétail ?",
    answer: "Oui. L'identification RFID est l'un de nos éléments de base standard pour la reconnaissance à l'alimentation, le contrôle d'accès et le comptage des animaux.",
  },
];

export default function CustomElectronicsPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Électronique sur mesure" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Services d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Électronique sur mesure &amp; développement de produits IoT
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Lorsqu&apos;un dispositif standard ne suffit pas, nous en
          concevons un qui convient — le matériel, le micrologiciel et la
          connectivité qui relient le tout.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} locale="fr" {...service} />
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-20 bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Notre processus</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              De l&apos;idée à la production
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
            {processSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex w-28 flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[var(--ts-navy)]/8">
                    <step.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-[var(--ts-green)] sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
              Exemple de spécification d&apos;un dispositif intelligent
            </h3>
            <p className="mt-1 text-sm text-[var(--ts-gray)]">
              Une configuration représentative pour un tracker animal connecté :
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exampleSpecs.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full bg-[var(--ts-dark-green)]/8 px-3.5 py-1.5 text-xs font-medium text-[var(--ts-dark-green)]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Une idée de produit Animal-Tech ?"
        description="Des trackers GPS aux contrôleurs agricoles automatisés, nous pouvons vous aider à développer votre électronique du concept au prototype."
        primaryLabel="Développer un produit de technologie animale"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
