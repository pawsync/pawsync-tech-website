import {
  AlertTriangle,
  CircuitBoard,
  Droplets,
  Fan,
  Flame,
  Lightbulb,
  MonitorSmartphone,
  PlugZap,
  Thermometer,
  UtensilsCrossed,
  Waves,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const solutions: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Thermometer, title: "Suivi de la température", description: "Surveillance des températures ambiantes dans les bâtiments avicoles." },
  { icon: Droplets, title: "Suivi de l'humidité", description: "Mesure et suivi des conditions d'humidité." },
  { icon: Wind, title: "Suivi de la qualité de l'air", description: "Intégration de capteurs pour les paramètres environnementaux pertinents tels que le CO2 et l'ammoniac, le cas échéant." },
  { icon: Fan, title: "Contrôle de la ventilation", description: "Surveillance et contrôle des ventilateurs et des équipements de ventilation selon les conditions environnementales configurées." },
  { icon: Flame, title: "Contrôle du chauffage et du refroidissement", description: "Automatisation des chauffages, équipements de refroidissement, ventilateurs et systèmes climatiques associés." },
  { icon: UtensilsCrossed, title: "Alimentation intelligente", description: "Surveillance des niveaux d'aliment et automatisation des horaires ou équipements de distribution." },
  { icon: Droplets, title: "Suivi de l'eau", description: "Surveillance des niveaux de réservoir, de la disponibilité de l'eau, du débit et des conditions anormales." },
  { icon: Waves, title: "Abreuvement automatique", description: "Contrôle des pompes, vannes et équipements d'abreuvement." },
  { icon: Lightbulb, title: "Automatisation de l'éclairage", description: "Contrôle de l'éclairage du bâtiment avicole selon des horaires ou des règles configurables." },
  { icon: AlertTriangle, title: "Alertes environnementales", description: "Alertes lorsque les valeurs surveillées dépassent les limites configurées." },
  { icon: Wrench, title: "Suivi des équipements", description: "Surveillance des ventilateurs, pompes, moteurs, distributeurs et autres équipements agricoles importants." },
  { icon: PlugZap, title: "Détection de panne d'alimentation", description: "Détection d'une perte d'alimentation secteur ou de conditions d'alimentation sur les équipements sélectionnés." },
  { icon: Zap, title: "Surveillance des urgences", description: "Surveillance des conditions liées à la chaleur, au froid, à la fumée, aux inondations, au manque d'eau et aux pannes d'équipement." },
  { icon: MonitorSmartphone, title: "Surveillance à distance de l'exploitation", description: "Consultation de l'état de l'exploitation via des tableaux de bord mobiles ou web." },
  { icon: CircuitBoard, title: "Dispositifs IoT avicoles sur mesure", description: "Conception de matériel sur mesure selon les exigences spécifiques de l'exploitation." },
];

export default function PoultrySolutionsOverview() {
  return (
    <section id="solutions" aria-labelledby="poultry-solutions-heading" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Solutions avicoles</Eyebrow>
        <h2
          id="poultry-solutions-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Une technologie connectée sur toute l&apos;exploitation avicole
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Quinze domaines de problèmes, une seule équipe d&apos;ingénierie —
          matériel, micrologiciel et connectivité conçus autour de votre
          exploitation.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3.5 border-b border-[var(--ts-navy)]/8 py-4 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
              <item.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold text-[var(--ts-navy)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
