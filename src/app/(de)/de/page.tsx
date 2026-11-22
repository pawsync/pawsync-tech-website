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
import { absoluteUrl, buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Elektronik nach Maß für Tiere, Höfe & IoT | PawSync",
  description:
    "PawSync entwickelt individuelle IoT-Hardware für Tiere und Höfe: GPS-Tracking, virtuelle Einzäunung, intelligente Fütterung, Nutztier- und Umweltüberwachung.",
  alternates: buildAlternates("de", ""),
  openGraph: {
    siteName: "PawSync",
    url: absoluteUrl("de", ""),
    type: "website",
    title: "Elektronik nach Maß für Tiere, Höfe & IoT | PawSync",
    description:
      "PawSync entwickelt individuelle IoT-Hardware für Tiere und Höfe: GPS-Tracking, virtuelle Einzäunung, intelligente Fütterung, Nutztier- und Umweltüberwachung.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PawSync – Individuelle Elektronik- und IoT-Entwicklung für Tiere & Höfe",
      },
    ],
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
        heading="Bereit, Ihr Tiertechnologie- oder AgriTech-Produkt zu entwickeln?"
        description="Von vernetzten Trackern und intelligenten Futterautomaten bis zu Umweltüberwachung, Bewässerung und vollständiger Hofautomatisierung – PawSync hilft dabei, Produktideen in zuverlässige vernetzte Hardware zu verwandeln."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Unsere Kompetenzen entdecken"
        secondaryHref="/de/custom-electronics"
      />
    </>
  );
}
