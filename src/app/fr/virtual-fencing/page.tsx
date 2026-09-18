import type { Metadata } from "next";
import {
  Bell,
  MapPinned,
  Radar,
  Settings2,
  ShieldAlert,
  Smartphone,
  Users,
  Vibrate,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Clôture virtuelle | PawSync",
  description:
    "Des systèmes de clôture virtuelle GPS et sans fil qui donnent aux animaux la liberté de se déplacer dans des zones définies, réduisant la dépendance à la clôture physique traditionnelle.",
  alternates: buildAlternates("fr", "virtual-fencing"),
};

const capabilities = [
  { icon: Radar, title: "Limites personnalisées et ajustables", description: "Dessinez et mettez à jour les zones depuis une application — sans fil, sans poteaux à déplacer." },
  { icon: Bell, title: "Alertes de mouvement en temps réel", description: "Des notifications dès qu'un animal s'approche ou franchit une limite." },
  { icon: MapPinned, title: "Prise en charge de plusieurs zones", description: "Faites tourner les zones de pâturage ou gérez des zones distinctes pour différents groupes." },
  { icon: Smartphone, title: "Configuration à distance", description: "Mettez à jour les limites depuis le terrain ou le bureau, sans intervention sur site." },
  { icon: Vibrate, title: "Signaux audio et haptiques", description: "Des signaux progressifs sur le collier qui avertissent un animal avant qu'il n'atteigne la limite." },
  { icon: ShieldAlert, title: "Alertes de prévention d'évasion", description: "Une alerte précoce lorsqu'un animal se dirige rapidement vers une limite." },
  { icon: Users, title: "Zones multi-animaux", description: "Gérez des limites pour des animaux individuels ou des troupeaux entiers à la fois." },
  { icon: Settings2, title: "Intégration avec le suivi", description: "S'associe à notre matériel de suivi GPS pour un système combiné de localisation et de délimitation." },
];

const faqs = [
  { question: "La clôture virtuelle remplace-t-elle entièrement la clôture physique ?", answer: "Elle peut réduire la dépendance à la clôture physique dans de nombreux contextes, mais la bonne approche dépend du terrain, du type d'animal et des exigences locales — nous vous aidons à évaluer ce qui convient." },
  { question: "Comment un animal apprend-il la limite ?", answer: "Les colliers utilisent généralement un signal audio progressif et, sur certains systèmes, une brève impulsion douce, donnant à l'animal l'occasion de faire demi-tour avant d'atteindre la limite." },
  { question: "Les zones peuvent-elles être modifiées à distance ?", answer: "Oui — les limites sont généralement configurables depuis une application mobile ou web, sans avoir à déplacer physiquement le matériel." },
];

export default function VirtualFencingPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Solutions", href: "/fr/solutions" }, { label: "Clôture virtuelle" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Clôture virtuelle</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Clôture virtuelle GPS &amp; sans fil
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Donnez aux animaux la liberté de se déplacer dans des zones
          définies, avec une conscience de la localisation à la place — ou
          en complément — de la clôture traditionnelle.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="fr" />
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Fonctionnalités</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Des limites sans fil
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <ServiceCard key={item.title} locale="fr" {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Besoin d'un système de clôture virtuelle sur mesure ?"
        description="Nous concevrons le matériel et la logique de délimitation selon vos animaux et votre terrain."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
