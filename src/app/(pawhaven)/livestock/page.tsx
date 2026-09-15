import type { Metadata } from "next";
import LivestockHero from "@/components/LivestockHero";
import LivestockServices from "@/components/LivestockServices";
import HowVirtualFencingWorks from "@/components/HowVirtualFencingWorks";
import LivestockTechWorkflow from "@/components/LivestockTechWorkflow";
import LivestockCTA from "@/components/LivestockCTA";

export const metadata: Metadata = {
  title: "Farm & Livestock Care | PawSync.tech",
  description:
    "GPS virtual fencing, remote animal health monitoring, and cattle farming support from PawSync's Farm & Livestock Program.",
};

export default function LivestockPage() {
  return (
    <>
      <LivestockHero />
      <LivestockServices />
      <HowVirtualFencingWorks />
      <LivestockTechWorkflow />
      <LivestockCTA />
    </>
  );
}
