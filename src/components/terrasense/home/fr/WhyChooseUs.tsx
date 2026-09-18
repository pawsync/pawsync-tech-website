import Image from "next/image";
import { BatteryCharging, Factory, Layers, ShieldCheck, Wifi, Wrench } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const reasons = [
  {
    icon: Layers,
    title: "Développement produit complet",
    description: "Du concept et du choix des composants à la carte PCB, au micrologiciel et à la documentation de prototype et de production.",
  },
  {
    icon: Wrench,
    title: "Ingénierie sur mesure",
    description: "Des solutions conçues selon vos animaux, votre environnement, l'autonomie de la batterie et vos besoins de connectivité spécifiques.",
  },
  {
    icon: Wifi,
    title: "Connectivité IoT",
    description: "Systèmes connectés en Bluetooth, Wi-Fi, LoRa, GPS et cellulaire.",
  },
  {
    icon: BatteryCharging,
    title: "Conception basse consommation",
    description: "Électronique alimentée par batterie, optimisée pour une longue autonomie.",
  },
  {
    icon: ShieldCheck,
    title: "Solutions prêtes pour le terrain",
    description: "Conception pensée pour les exploitations agricoles, les environnements extérieurs, la poussière, l'humidité, les écarts de température et l'usage quotidien.",
  },
  {
    icon: Factory,
    title: "Du prototype à la production",
    description: "Accompagnement du prototype initial jusqu'à la préparation de la fabrication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Pourquoi PawSync</Eyebrow>
        <h2
          id="why-choose-us-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Pourquoi travailler avec PawSync
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Rigueur d&apos;ingénierie alliée à une conception pratique et éprouvée sur le terrain.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1661112176771-591411832406?auto=format&fit=crop&w=700&q=75"
            alt="Gros plan d'une carte de circuit imprimé verte avec des composants électroniques"
            fill
            sizes="(min-width: 1024px) 32vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ts-navy)]/60 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Conception de cartes PCB sur mesure
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-5 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_16px_32px_-12px_rgba(14,27,38,0.16)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <reason.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-manrope)] text-base font-bold text-[var(--ts-navy)]">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ts-gray)]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
