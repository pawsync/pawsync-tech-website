import type { Metadata } from "next";
import PetFinder from "@/components/PetFinder";
import AdoptCTA from "@/components/AdoptCTA";

export const metadata: Metadata = {
  title: "Adopt a Pet | PawSync.tech",
  description:
    "Browse adoptable dogs, cats, and rabbits waiting for their forever home at PawSync.",
};

export default function AdoptPage() {
  return (
    <>
      <PetFinder />
      <AdoptCTA />
    </>
  );
}
