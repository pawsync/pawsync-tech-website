import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import PoultryHero from "@/components/terrasense/poultry/fr/PoultryHero";
import PoultrySolutionsOverview from "@/components/terrasense/poultry/fr/PoultrySolutionsOverview";
import PoultryEnvironmentalMonitoring from "@/components/terrasense/poultry/fr/PoultryEnvironmentalMonitoring";
import PoultryClimateAutomation from "@/components/terrasense/poultry/fr/PoultryClimateAutomation";
import PoultrySmartFeeding from "@/components/terrasense/poultry/fr/PoultrySmartFeeding";
import PoultryWaterManagement from "@/components/terrasense/poultry/fr/PoultryWaterManagement";
import PoultrySafetyWarning from "@/components/terrasense/poultry/fr/PoultrySafetyWarning";
import PoultryCentralController from "@/components/terrasense/poultry/fr/PoultryCentralController";
import PoultryMultiHouseMonitoring from "@/components/terrasense/poultry/fr/PoultryMultiHouseMonitoring";
import PoultryConnectivity from "@/components/terrasense/poultry/fr/PoultryConnectivity";
import PoultryCustomElectronics from "@/components/terrasense/poultry/fr/PoultryCustomElectronics";
import PoultryApplications from "@/components/terrasense/poultry/fr/PoultryApplications";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Technologie et automatisation pour élevages avicoles | PawSync",
  description:
    "Dispositifs IoT sur mesure et ingénierie pour l'automatisation des élevages avicoles — surveillance des bâtiments, capteurs de température et d'humidité, contrôle de la ventilation, alimentation intelligente, suivi de l'eau et contrôleurs avicoles connectés en LoRa.",
  alternates: buildAlternates("fr", "poultry-farming"),
};

const faqs = [
  {
    question: "Pouvez-vous développer un contrôleur d'exploitation avicole sur mesure ?",
    answer:
      "Oui. Nous concevons du matériel et un micrologiciel de contrôleur sur mesure adaptés à la disposition de votre bâtiment avicole, à vos équipements et à vos exigences de contrôle spécifiques — d'une unité pour un seul bâtiment à une plateforme multi-bâtiments.",
  },
  {
    question: "La température et l'humidité peuvent-elles être surveillées à distance ?",
    answer:
      "Oui. Les données des capteurs peuvent être consultées à distance via un tableau de bord mobile ou web, avec des alertes configurables lorsque les relevés sortent des plages définies.",
  },
  {
    question: "Plusieurs bâtiments avicoles peuvent-ils être surveillés depuis un seul tableau de bord ?",
    answer:
      "Oui. Les systèmes peuvent être conçus pour agréger les données de plusieurs bâtiments, de plusieurs capteurs et de plusieurs passerelles en une seule vue de tableau de bord.",
  },
  {
    question: "Le système peut-il contrôler automatiquement la ventilation ?",
    answer:
      "Oui. La ventilation, les ventilateurs et les équipements associés peuvent être automatisés selon des règles configurables basées sur la température, l'humidité ou la qualité de l'air, avec une commande manuelle toujours disponible.",
  },
  {
    question: "Les niveaux d'aliment et d'eau peuvent-ils être surveillés ?",
    answer:
      "Oui. Les niveaux des silos et trémies d'alimentation, ainsi que les niveaux et débits des réservoirs d'eau, peuvent être surveillés en continu avec des alertes en cas de niveau bas ou de conditions anormales.",
  },
  {
    question: "Puis-je recevoir des alertes lorsque les conditions environnementales deviennent anormales ?",
    answer:
      "Oui. Des alertes peuvent être configurées pour notifier les opérateurs par notification mobile, SMS si disponible, e-mail, avertisseur local, voyant d'alerte ou tableau de bord web lorsque les valeurs surveillées dépassent les seuils configurés.",
  },
  {
    question: "Le LoRa peut-il être utilisé sur un grand élevage avicole ?",
    answer:
      "Oui. Le LoRa / LoRaWAN convient bien pour couvrir de grands sites agricoles avec des capteurs basse consommation, et constitue l'une des options de connectivité que nous sélectionnons selon la taille et la disposition de l'exploitation.",
  },
  {
    question: "Le système peut-il fonctionner sans accès Internet continu ?",
    answer:
      "La logique de contrôle locale peut être conçue pour continuer à fonctionner sur site même si la connectivité Internet ou cloud est temporairement indisponible, avec synchronisation des données une fois la connexion rétablie.",
  },
  {
    question: "Pouvez-vous intégrer les ventilateurs, pompes, moteurs et équipements existants ?",
    answer:
      "Dans de nombreux cas, oui. Nous évaluons votre équipement existant lors de la phase de découverte pour déterminer la bonne approche d'intégration des capteurs, relais ou commandes.",
  },
  {
    question: "Pouvez-vous concevoir la carte PCB et le micrologiciel ?",
    answer:
      "Oui. La conception de cartes PCB sur mesure et le développement de micrologiciels embarqués font partie intégrante de notre processus d'ingénierie, du schéma aux fichiers de fabrication.",
  },
  {
    question: "Pouvez-vous développer un prototype avant la production ?",
    answer:
      "Oui. Nous construisons et validons un prototype fonctionnel avant de passer à la préparation de la production, afin que la conception soit testée avant tout engagement de fabrication.",
  },
  {
    question: "Le système peut-il surveiller les pannes d'alimentation ?",
    answer:
      "Oui. La surveillance de l'alimentation peut détecter une perte de courant secteur ou certaines conditions d'alimentation des équipements et déclencher des alertes configurées.",
  },
  {
    question: "Le système peut-il se connecter à une application mobile ?",
    answer:
      "Oui. Les tableaux de bord et alertes peuvent être conçus pour un accès mobile et web, donnant aux opérateurs une visibilité sur l'état de l'exploitation depuis n'importe où.",
  },
];

export default function PoultryFarmingPageFr() {
  return (
    <>
      <PoultryHero />

      <div className="bg-[var(--ts-bg)]">
        <Breadcrumb locale="fr" items={[{ label: "Secteurs", href: "/fr/industries" }, { label: "Aviculture" }]} />
      </div>

      <PoultrySolutionsOverview />
      <PoultryEnvironmentalMonitoring />
      <PoultryClimateAutomation />
      <PoultrySmartFeeding />
      <PoultryWaterManagement />
      <PoultrySafetyWarning />
      <PoultryCentralController />
      <PoultryMultiHouseMonitoring />
      <PoultryConnectivity />
      <PoultryCustomElectronics />
      <PoultryApplications />

      <section aria-labelledby="poultry-faq-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="poultry-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Questions fréquentes sur la technologie avicole
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        eyebrow="Concevoir la technologie de l'exploitation"
        heading="Prêt à développer votre technologie avicole ?"
        description="PawSync conçoit les dispositifs IoT, capteurs, contrôleurs et matériel connecté qui surveillent et automatisent les élevages avicoles modernes."
        primaryLabel="Discuter de votre projet avicole"
        primaryHref="/fr/contact"
        secondaryLabel="Découvrir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
