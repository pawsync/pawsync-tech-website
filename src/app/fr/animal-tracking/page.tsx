import type { Metadata } from "next";
import {
  Battery,
  Cpu,
  History,
  MapPinned,
  Radio,
  Satellite,
  ShieldCheck,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Suivi des animaux | PawSync",
  description:
    "Systèmes de suivi GPS et GNSS pour animaux de compagnie, bétail et autres animaux — localisation en temps réel, alertes de zone virtuelle et connectivité longue portée.",
  alternates: buildAlternates("fr", "animal-tracking"),
};

const capabilities = [
  { icon: Satellite, title: "Localisation GPS en temps réel", description: "Mises à jour de localisation programmées ou continues, adaptées à l'animal et à l'usage." },
  { icon: MapPinned, title: "Alertes de zone virtuelle", description: "Soyez averti dès qu'un animal suivi quitte une zone définie." },
  { icon: History, title: "Historique de localisation", description: "Trajets complets pour un animal individuel ou des groupes entiers." },
  { icon: Users, title: "Vue de flotte multi-animaux", description: "Surveillez animaux de compagnie, troupeaux ou animaux de travail depuis un tableau de bord unique." },
  { icon: Radio, title: "Connectivité longue portée", description: "GPS/GNSS associé à un relais LoRa, LTE ou satellite selon la portée requise." },
  { icon: Battery, title: "Conception optimisée pour la batterie", description: "Matériel et micrologiciel basse consommation conçus pour des semaines ou des mois entre les charges." },
  { icon: ShieldCheck, title: "Boîtiers robustes", description: "Boîtiers résistants aux intempéries et aux chocs pour un usage en extérieur." },
  { icon: Cpu, title: "Dimensionnement sur mesure", description: "Formats collier, boucle d'oreille ou harnais adaptés à l'espèce." },
];

const faqs = [
  { question: "Les dispositifs de suivi peuvent-ils fonctionner sans couverture cellulaire ?", answer: "Oui. Nous concevons des systèmes autour du LoRa et d'autres protocoles basse consommation longue portée pour les sites à couverture cellulaire limitée ou inexistante, avec synchronisation des données dès qu'une passerelle ou une connexion cellulaire est atteinte." },
  { question: "Quelle est généralement la durée de vie de la batterie ?", answer: "Cela dépend de la fréquence des mises à jour, du type de connectivité et de la taille du boîtier — nous concevons le budget énergétique selon votre intervalle de rapport requis et votre cycle d'utilisation." },
  { question: "Pouvez-vous suivre plusieurs espèces avec une seule plateforme ?", answer: "Oui. Le tableau de bord et le backend peuvent prendre en charge des flottes mixtes — animaux de compagnie, bétail et animaux de travail — avec un matériel dimensionné par espèce." },
];

export default function AnimalTrackingPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Solutions", href: "/fr/solutions" }, { label: "Suivi des animaux" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Suivi des animaux</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Systèmes de suivi GPS &amp; GNSS des animaux
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des systèmes de localisation en temps réel ou périodiques qui
          gardent les animaux de compagnie, le bétail et d&apos;autres animaux
          localisables — sur l&apos;exploitation ou loin d&apos;elle.
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
              Conçu pour un suivi fiable sur le terrain
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
        heading="Besoin d'un dispositif de suivi sur mesure ?"
        description="Nous concevrons le matériel selon vos animaux, votre terrain, votre portée et vos exigences de connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
