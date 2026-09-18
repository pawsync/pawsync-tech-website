import type { Metadata } from "next";
import {
  ArrowDown,
  Cpu,
  Gauge,
  Hash,
  History,
  MonitorSmartphone,
  Settings2,
  ShieldAlert,
  UtensilsCrossed,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Alimentation intelligente | PawSync",
  description:
    "Systèmes d'alimentation automatisés avec horaires, contrôle des portions, identification RFID et surveillance à distance pour animaux de compagnie et bétail.",
  alternates: buildAlternates("fr", "smart-feeding"),
};

const capabilities = [
  { icon: Settings2, title: "Distribution programmée", description: "Une alimentation automatisée selon un horaire quotidien ou multi-horaires configurable." },
  { icon: Gauge, title: "Contrôle des portions", description: "Des quantités de distribution précises, ajustées à chaque animal ou groupe." },
  { icon: Hash, title: "Identification RFID des animaux", description: "Reconnaître chaque animal pour donner le bon régime au bon animal." },
  { icon: UtensilsCrossed, title: "Capteurs de niveau d'aliment", description: "Savoir quand une trémie ou un silo s'épuise avant qu'il ne soit vide." },
  { icon: ShieldAlert, title: "Détection de bourrage et de panne", description: "Des alertes lorsqu'un moteur, une vis ou une ligne de distribution ne fonctionne pas correctement." },
  { icon: MonitorSmartphone, title: "Surveillance à distance", description: "Consulter l'état et l'historique de l'alimentation depuis un téléphone ou un tableau de bord web." },
  { icon: History, title: "Historique de consommation", description: "Suivre la consommation d'aliment dans le temps pour repérer tôt les tendances ou anomalies." },
  { icon: Cpu, title: "Contrôleurs sur mesure", description: "Des contrôleurs d'alimentation conçus sur mesure pour vos équipements et vos espèces." },
];

const flow = [
  { icon: UtensilsCrossed, label: "Silo / trémie" },
  { icon: Gauge, label: "Capteur de niveau" },
  { icon: Cpu, label: "Contrôleur" },
  { icon: Settings2, label: "Moteur / vis d'alimentation" },
  { icon: MonitorSmartphone, label: "Tableau de bord" },
];

const faqs = [
  { question: "Le système peut-il identifier chaque animal individuellement ?", answer: "Oui — l'identification par RFID permet au système de distribuer différents régimes ou portions à différents animaux partageant le même poste d'alimentation." },
  { question: "Que se passe-t-il si la ligne d'alimentation se bloque ?", answer: "La détection de panne peut signaler un problème de moteur ou de distribution et envoyer une alerte, plutôt que d'échouer silencieusement à nourrir." },
  { question: "Puis-je surveiller les niveaux d'aliment à distance ?", answer: "Oui — les capteurs de niveau sur les trémies ou silos remontent l'état au tableau de bord, avec des alertes de niveau bas configurables selon votre calendrier." },
];

export default function SmartFeedingPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Solutions", href: "/fr/solutions" }, { label: "Alimentation intelligente" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Alimentation intelligente</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Systèmes d&apos;alimentation intelligents
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des dispositifs d&apos;alimentation automatisés avec horaires,
          contrôle des portions, capteurs et surveillance à distance pour
          animaux de compagnie, bétail et sites multi-animaux.
        </p>
      </section>

      {/* Flow diagram */}
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-[var(--ts-navy)]/8 bg-[var(--ts-dark-green)]/5 p-6 sm:p-8">
          {flow.map((step, i) => (
            <div key={step.label} className="flex w-full max-w-xs flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <step.icon className="h-4 w-4 shrink-0 text-[var(--ts-dark-green)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--ts-navy)]">{step.label}</span>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Fonctionnalités</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Une alimentation automatisée et traçable
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
        heading="Besoin d'un contrôleur d'alimentation sur mesure ?"
        description="Nous concevrons le matériel selon votre système d'alimentation, vos espèces et la disposition de votre site."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
