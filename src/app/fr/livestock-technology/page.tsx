import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Battery,
  CircuitBoard,
  Compass,
  ClipboardCheck,
  Droplets,
  Factory,
  FileCode,
  FlaskConical,
  HeartPulse,
  Hash,
  MapPinned,
  Radar,
  Satellite,
  ThermometerSun,
  UtensilsCrossed,
  Activity,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceCard from "@/components/terrasense/ServiceCard";
import FarmMapDashboard from "@/components/terrasense/FarmMapDashboard";
import FAQAccordion, { type FAQItem } from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Suivi GPS & surveillance à distance du bétail | PawSync",
  description:
    "Matériel sur mesure de suivi GPS, clôture virtuelle, identification RFID et surveillance à distance de la santé et de l'activité pour bovins, ovins, caprins et chevaux.",
  alternates: buildAlternates("fr", "livestock-technology"),
  openGraph: buildOpenGraph("fr", "livestock-technology"),
};

const connectivity: { icon: LucideIcon; label: string }[] = [
  { icon: Satellite, label: "GPS / GNSS" },
  { icon: Radar, label: "LoRa / LoRaWAN" },
  { icon: Activity, label: "Cellulaire / LTE-M" },
  { icon: Battery, label: "BLE (relais passerelle)" },
];

const processSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: "Idée" },
  { icon: Workflow, label: "Architecture" },
  { icon: CircuitBoard, label: "Carte PCB" },
  { icon: FileCode, label: "Firmware" },
  { icon: FlaskConical, label: "Prototype" },
  { icon: ClipboardCheck, label: "Test" },
  { icon: Factory, label: "Production" },
];

const faqs: FAQItem[] = [
  {
    question: "GPS ou LoRa — qu'est-ce qui suit réellement mon troupeau ?",
    answer:
      "Le GPS/GNSS détermine la position d'un dispositif ; il ne la transmet pas lui-même. Un second module radio — généralement LoRa ou cellulaire — renvoie les données de localisation vers une passerelle ou le cloud. Le choix dépend de la distance parcourue par vos animaux par rapport à l'infrastructure de passerelle disponible.",
  },
  {
    question: "Le système continue-t-il de fonctionner en cas de coupure internet ou cloud ?",
    answer:
      "La logique locale peut être conçue pour continuer à enregistrer et à alerter sur site pendant une coupure, avec synchronisation des données une fois la connexion rétablie — une décision que nous prenons avec vous selon l'importance d'une visibilité continue pour votre exploitation.",
  },
  {
    question: "Qu'est-ce qui détermine l'autonomie de la batterie et l'intervalle de rapport ?",
    answer:
      "L'autonomie de la batterie est un compromis avec la fréquence de rapport de position — des mises à jour plus fréquentes consomment plus d'énergie. Nous dimensionnons la batterie et ajustons l'intervalle de rapport (ainsi que des techniques comme le réveil déclenché par le mouvement) selon l'autonomie cible entre charges ou remplacements, plutôt que de promettre un chiffre fixe à l'avance.",
  },
  {
    question: "Quel entretien nécessitent les dispositifs de suivi ?",
    answer:
      "Le matériel de collier ou de boucle d'oreille en extérieur nécessite un entretien périodique de la batterie (recharge ou remplacement, selon la chimie choisie) et une vérification physique de l'usure. Nous dimensionnons l'intervalle d'entretien selon la chimie et le cycle d'utilisation dès la phase de conception.",
  },
  {
    question: "La clôture virtuelle contient-elle physiquement les animaux ?",
    answer:
      "Non — elle alerte et guide l'animal à l'approche d'une limite, sans le retenir physiquement comme le ferait une clôture. Qu'elle réduise ou non votre besoin de clôture physique dépend du terrain, du type d'animal et des exigences locales, que nous évaluons avec vous.",
  },
  {
    question: "Quelles informations devons-nous vous fournir pour démarrer un projet ?",
    answer:
      "En général : les animaux et la taille du troupeau, le terrain et la zone à couvrir, la connectivité ou l'infrastructure de passerelle existante (le cas échéant), votre autonomie et fréquence de rapport cibles, et tout équipement avec lequel le système doit s'intégrer. Nous cadrons le reste ensemble en phase de découverte.",
  },
  {
    question: "Comment un projet passe-t-il de l'idée à un dispositif fonctionnel ?",
    answer:
      "D'abord la découverte et l'architecture (vos animaux, votre environnement et vos exigences), puis la conception du schéma et du circuit imprimé, le firmware, un prototype à tester en conditions réelles, et enfin les fichiers de préparation à la fabrication une fois la conception validée.",
  },
];

const solutions = [
  { icon: Satellite, title: "Suivi GPS du bétail", description: "Localisation conçue pour les pâturages ouverts et les grandes étendues." },
  { icon: Radar, title: "Suivi des bovins", description: "Matériel de collier et de boucle d'oreille dimensionné pour les troupeaux bovins." },
  { icon: Radar, title: "Suivi des ovins", description: "Dispositifs de suivi légers pour la gestion des troupeaux." },
  { icon: Radar, title: "Suivi des caprins", description: "Matériel de suivi robuste pour les troupeaux en pâturage." },
  { icon: Radar, title: "Suivi équin", description: "Suivi GPS et de l'activité conçu pour le bien-être équin." },
  { icon: Activity, title: "Suivi de l'activité animale", description: "Données de mouvement et de comportement sur l'ensemble du troupeau." },
  { icon: HeartPulse, title: "Détection des chaleurs", description: "Analyse des schémas d'activité pour aider à repérer les fenêtres de reproduction." },
  { icon: MapPinned, title: "Suivi des déplacements", description: "Historique des déplacements pour un animal individuel ou des groupes." },
  { icon: HeartPulse, title: "Indicateurs de santé", description: "Constantes vitales et tendances d'activité pour une intervention plus précoce." },
  { icon: Activity, title: "Suivi du pâturage", description: "Données de temps passé par zone pour éclairer les décisions de pâturage tournant." },
  { icon: MapPinned, title: "Clôture virtuelle", description: "Des limites basées sur le GPS qui réduisent la dépendance à la clôture physique." },
  { icon: Hash, title: "Identification RFID", description: "Identification individuelle des animaux pour les registres et le contrôle d'accès." },
  { icon: Hash, title: "Comptage des animaux", description: "Comptages automatisés aux portails, couloirs et points d'eau." },
  { icon: Droplets, title: "Suivi de la consommation d'eau", description: "Capteurs de débit et de niveau signalant les schémas de consommation anormaux." },
  { icon: UtensilsCrossed, title: "Suivi de l'alimentation", description: "Suivi du niveau et de la consommation d'aliment sur les postes d'alimentation." },
];

const alerts = [
  { icon: AlertTriangle, label: "Animal ayant quitté la zone désignée" },
  { icon: Activity, label: "Inactivité inhabituelle" },
  { icon: ThermometerSun, label: "Température ambiante élevée" },
  { icon: Droplets, label: "Niveau d'eau bas" },
  { icon: UtensilsCrossed, label: "Anomalie d'alimentation" },
  { icon: Battery, label: "Problème de batterie potentiel du dispositif" },
];

export default function LivestockTechnologyPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Technologie pour le bétail" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Technologie pour le bétail</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Surveillance &amp; gestion connectées du bétail
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Du matériel de suivi, de surveillance de la santé et de clôture
          virtuelle conçu pour les bovins, ovins, caprins et chevaux sur
          l&apos;exploitation.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FarmMapDashboard locale="fr" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {alerts.map((alert) => (
            <div
              key={alert.label}
              className="flex items-center gap-2.5 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-4 py-3 text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <alert.icon className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              {alert.label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
              Conçu pour tout le troupeau
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ServiceCard key={item.title} locale="fr" {...item} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="livestock-connectivity-heading-fr" className="bg-[var(--ts-navy)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="livestock-connectivity-heading-fr" className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
            Une connectivité adaptée au troupeau
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {connectivity.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                <Icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/50">
            Le GPS/GNSS détermine la localisation ; un second module radio —
            LoRa ou cellulaire — la transmet à une passerelle ou au cloud. La
            portée, le budget énergétique, l&apos;intervalle de rapport et
            l&apos;infrastructure de passerelle existante déterminent la
            combinaison adaptée à votre exploitation. Voir notre comparaison{" "}
            <Link href="/fr/blog/gnss-lora-vs-gnss-ltem" className="underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white">
              GNSS + LoRa vs. GNSS + LTE-M
            </Link>{" "}
            pour les compromis.
          </p>
        </div>
      </section>

      <section aria-labelledby="livestock-process-heading-fr" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ingénierie sur mesure</Eyebrow>
          <h2 id="livestock-process-heading-fr" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            De l&apos;idée à un dispositif fonctionnel
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">
            La découverte et l&apos;architecture viennent d&apos;abord, suivies
            de la conception du schéma et du circuit imprimé, du firmware,
            d&apos;un prototype testable en conditions réelles, puis des
            fichiers de préparation à la fabrication une fois la conception
            validée. Voir aussi notre article sur la{" "}
            <Link href="/fr/blog/low-power-animal-tracker-design" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              conception électronique basse consommation pour trackers d&apos;animaux
            </Link>{" "}
            ou nos services d&apos;{" "}
            <Link href="/fr/custom-electronics" className="underline decoration-[var(--ts-dark-green)]/30 underline-offset-2 hover:decoration-[var(--ts-dark-green)]">
              électronique sur mesure
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {processSteps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ts-navy)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <Icon className="h-4 w-4 text-[var(--ts-green)]" aria-hidden="true" />
                {label}
              </span>
              {i < processSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
              )}
            </div>
          ))}
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
        heading="Besoin d'un système de surveillance du bétail sur mesure ?"
        description="Concevons ensemble le matériel selon votre troupeau, votre terrain et vos exigences de connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Voir toutes les solutions"
        secondaryHref="/fr/solutions"
      />
    </>
  );
}
