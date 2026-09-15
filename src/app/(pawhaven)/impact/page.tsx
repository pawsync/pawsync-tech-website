import type { Metadata } from "next";
import ImpactCounter from "@/components/ImpactCounter";
import ImpactHighlights from "@/components/ImpactHighlights";
import SuccessStories from "@/components/SuccessStories";
import ImpactCTA from "@/components/ImpactCTA";

export const metadata: Metadata = {
  title: "Our Impact | PawSync.tech",
  description:
    "See PawSync's impact — animals helped, adoptions, volunteer and foster stories, and our growing Farm & Livestock program.",
};

export default function ImpactPage() {
  return (
    <>
      <ImpactCounter />
      <ImpactHighlights />
      <SuccessStories />
      <ImpactCTA />
    </>
  );
}
