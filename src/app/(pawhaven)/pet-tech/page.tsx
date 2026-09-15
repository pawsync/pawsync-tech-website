import type { Metadata } from "next";
import PetTechHero from "@/components/PetTechHero";
import PetTechDevices from "@/components/PetTechDevices";
import WherePetTechHelps from "@/components/WherePetTechHelps";
import PetTechCTA from "@/components/PetTechCTA";

export const metadata: Metadata = {
  title: "Pet Tech & Devices | PawSync.tech",
  description:
    "GPS trackers, smart feeders, and health monitors PawSync uses to help keep animals safe, healthy, and easier to care for.",
};

export default function PetTechPage() {
  return (
    <>
      <PetTechHero />
      <PetTechDevices />
      <WherePetTechHelps />
      <PetTechCTA />
    </>
  );
}
