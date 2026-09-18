import type { Metadata } from "next";
import TerraSenseHero from "@/components/terrasense/home/fr/TerraSenseHero";
import SolutionsOverview from "@/components/terrasense/home/fr/SolutionsOverview";
import EngineeredHardware from "@/components/terrasense/home/fr/EngineeredHardware";
import TechnologyWorkflow from "@/components/terrasense/home/fr/TechnologyWorkflow";
import LiveIntelligence from "@/components/terrasense/home/fr/LiveIntelligence";
import WhyChooseUs from "@/components/terrasense/home/fr/WhyChooseUs";
import IndustriesGrid from "@/components/terrasense/home/fr/IndustriesGrid";
import DevelopmentProcess from "@/components/terrasense/home/fr/DevelopmentProcess";
import CapabilitiesStrip from "@/components/terrasense/home/fr/CapabilitiesStrip";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "PawSync | Électronique intelligente pour animaux, exploitations agricoles et environnements connectés",
  description:
    "PawSync conçoit du matériel IoT sur mesure, du suivi GPS des animaux, des clôtures virtuelles, de l'alimentation intelligente, la surveillance du bétail, l'automatisation agricole et des capteurs environnementaux — du concept à la production.",
  alternates: buildAlternates("fr", ""),
  openGraph: {
    siteName: "PawSync",
    url: "https://pawsync.tech/fr",
    type: "website",
    title: "PawSync | Électronique intelligente pour animaux, exploitations agricoles et environnements connectés",
    description:
      "PawSync conçoit du matériel IoT sur mesure, du suivi GPS des animaux, des clôtures virtuelles, de l'alimentation intelligente, la surveillance du bétail, l'automatisation agricole et des capteurs environnementaux — du concept à la production.",
  },
};

export default function TerraSenseHomePageFr() {
  return (
    <>
      <TerraSenseHero />
      <SolutionsOverview />
      <EngineeredHardware />
      <TechnologyWorkflow />
      <LiveIntelligence />
      <WhyChooseUs />
      <IndustriesGrid />
      <DevelopmentProcess />
      <CapabilitiesStrip />
      <CTABanner
        eyebrow="Construisons quelque chose de fiable"
        heading="Prêt à développer votre produit Animal-Tech ou AgriTech ?"
        description="Des trackers connectés et distributeurs de nourriture intelligents à la surveillance environnementale, l'irrigation et l'automatisation agricole complète, PawSync aide à transformer les idées de produits en matériel connecté fiable."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Découvrir nos compétences"
        secondaryHref="/fr/custom-electronics"
      />
    </>
  );
}
