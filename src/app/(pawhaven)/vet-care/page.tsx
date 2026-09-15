import type { Metadata } from "next";
import VetCareHero from "@/components/VetCareHero";
import VetCareServices from "@/components/VetCareServices";
import FindVetCareForm from "@/components/FindVetCareForm";
import VetCareCTA from "@/components/VetCareCTA";

export const metadata: Metadata = {
  title: "Vet Care | PawSync.tech",
  description:
    "Compassionate veterinary care from PawSync — routine checkups, vaccinations, emergency support, spay/neuter, nutrition, and behavioral guidance.",
};

export default function VetCarePage() {
  return (
    <>
      <VetCareHero />
      <VetCareServices />
      <FindVetCareForm />
      <VetCareCTA />
    </>
  );
}
