import type { Metadata } from "next";
import TerraSenseHero from "@/components/terrasense/home/de/TerraSenseHero";
import SolutionsOverview from "@/components/terrasense/home/de/SolutionsOverview";
import EngineeredHardware from "@/components/terrasense/home/de/EngineeredHardware";
import TechnologyWorkflow from "@/components/terrasense/home/de/TechnologyWorkflow";
import LiveIntelligence from "@/components/terrasense/home/de/LiveIntelligence";
import WhyChooseUs from "@/components/terrasense/home/de/WhyChooseUs";
import IndustriesGrid from "@/components/terrasense/home/de/IndustriesGrid";
import DevelopmentProcess from "@/components/terrasense/home/de/DevelopmentProcess";
import CapabilitiesStrip from "@/components/terrasense/home/de/CapabilitiesStrip";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "PawSync | Intelligente Elektronik für Tiere, Höfe & vernetzte Umgebungen",
  description:
    "PawSync entwickelt kundenspezifische IoT-Hardware, GPS-Tiertracking, virtuelle Einzäunung, intelligente Fütterung, Nutztierüberwachung, Hofautomatisierung und Umweltsensoren — vom Konzept bis zur Serienproduktion.",
  alternates: buildAlternates("de", ""),
  openGraph: {
    siteName: "PawSync",
    url: "https://pawsync.tech/de",
    type: "website",
    title: "PawSync | Intelligente Elektronik für Tiere, Höfe & vernetzte Umgebungen",
    description:
      "PawSync entwickelt kundenspezifische IoT-Hardware, GPS-Tiertracking, virtuelle Einzäunung, intelligente Fütterung, Nutztierüberwachung, Hofautomatisierung und Umweltsensoren — vom Konzept bis zur Serienproduktion.",
  },
};

export default function TerraSenseHomePageDe() {
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
        eyebrow="Lassen Sie uns etwas Zuverlässiges bauen"
        heading="Bereit, Ihr Animal-Tech- oder AgriTech-Produkt zu entwickeln?"
        description="Von vernetzten Trackern und intelligenten Futterautomaten bis zu Umweltüberwachung, Bewässerung und vollständiger Hofautomatisierung — PawSync hilft dabei, Produktideen in zuverlässige vernetzte Hardware zu verwandeln."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Unsere Kompetenzen entdecken"
        secondaryHref="/de/custom-electronics"
      />
    </>
  );
}
