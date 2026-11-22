import type { Metadata } from "next";
import TerraSenseHero from "@/components/terrasense/home/TerraSenseHero";
import SolutionsOverview from "@/components/terrasense/home/SolutionsOverview";
import EngineeredHardware from "@/components/terrasense/home/EngineeredHardware";
import TechnologyWorkflow from "@/components/terrasense/home/TechnologyWorkflow";
import LiveIntelligence from "@/components/terrasense/home/LiveIntelligence";
import WhyChooseUs from "@/components/terrasense/home/WhyChooseUs";
import IndustriesGrid from "@/components/terrasense/home/IndustriesGrid";
import DevelopmentProcess from "@/components/terrasense/home/DevelopmentProcess";
import CapabilitiesStrip from "@/components/terrasense/home/CapabilitiesStrip";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Custom Electronics for Animals, Farms & IoT | PawSync",
  description:
    "PawSync designs custom IoT hardware for animals and farms: GPS tracking, virtual fencing, smart feeding, livestock and environmental monitoring.",
  alternates: buildAlternates("en", ""),
  openGraph: buildOpenGraph("en", ""),
};

export default function TerraSenseHomePage() {
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
        eyebrow="Let's build something reliable"
        heading="Ready to Build Your Animal-Tech or AgriTech Product?"
        description="From connected trackers and smart feeders to environmental monitoring, irrigation and complete farm automation, PawSync helps turn product ideas into reliable connected hardware."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Explore Our Capabilities"
        secondaryHref="/custom-electronics"
      />
    </>
  );
}
