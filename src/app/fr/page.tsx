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
import { absoluteUrl, buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Électronique sur mesure pour animaux, fermes & IoT | PawSync",
  description:
    "PawSync conçoit du matériel IoT sur mesure pour animaux et exploitations : suivi GPS, clôture virtuelle, alimentation intelligente, surveillance du bétail.",
  alternates: buildAlternates("fr", ""),
  openGraph: {
    siteName: "PawSync",
    url: absoluteUrl("fr", ""),
    type: "website",
    title: "Électronique sur mesure pour animaux, fermes & IoT | PawSync",
    description:
      "PawSync conçoit du matériel IoT sur mesure pour animaux et exploitations : suivi GPS, clôture virtuelle, alimentation intelligente, surveillance du bétail.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PawSync — Ingénierie électronique et IoT sur mesure pour animaux & exploitations agricoles",
      },
    ],
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
