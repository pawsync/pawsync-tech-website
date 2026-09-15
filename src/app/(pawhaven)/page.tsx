import Hero from "@/components/Hero";
import FeaturedPets from "@/components/FeaturedPets";
import ImpactCounter from "@/components/ImpactCounter";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import PetTechTeaser from "@/components/PetTechTeaser";
import SuccessStories from "@/components/SuccessStories";
import DonationCTA from "@/components/DonationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPets />
      <ImpactCounter />
      <HowItWorks />
      <Services />
      <PetTechTeaser />
      <SuccessStories />
      <DonationCTA />
    </>
  );
}
