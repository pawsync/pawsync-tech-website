import Image from "next/image";
import { BatteryCharging, Factory, Layers, ShieldCheck, Wifi, Wrench } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const reasons = [
  {
    icon: Layers,
    title: "Vollständige Produktentwicklung",
    description: "Vom Konzept und der Bauteilauswahl über Leiterplatte und Firmware bis zur Prototyp- und Produktionsdokumentation.",
  },
  {
    icon: Wrench,
    title: "Individuelles Engineering",
    description: "Lösungen, zugeschnitten auf Ihre spezifischen Tiere, Umgebung, Reichweite, Akkulaufzeit und Konnektivitätsanforderungen.",
  },
  {
    icon: Wifi,
    title: "IoT-Konnektivität",
    description: "Bluetooth-, Wi-Fi-, LoRa-, GPS- und mobilfunkvernetzte Systeme.",
  },
  {
    icon: BatteryCharging,
    title: "Stromsparendes Design",
    description: "Batteriebetriebene Elektronik, optimiert für lange Betriebszeit.",
  },
  {
    icon: ShieldCheck,
    title: "Feldtaugliche Lösungen",
    description: "Design-Überlegungen für Höfe, Außenbereiche, Staub, Feuchtigkeit, Temperaturschwankungen und den täglichen Einsatz.",
  },
  {
    icon: Factory,
    title: "Vom Prototyp zur Serie",
    description: "Unterstützung vom frühen Prototyp bis zur Fertigungsvorbereitung.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Warum PawSync</Eyebrow>
        <h2
          id="why-choose-us-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Warum mit PawSync zusammenarbeiten
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Ingenieurdisziplin gepaart mit praxisnahem, felderprobtem Design.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1661112176771-591411832406?auto=format&fit=crop&w=700&q=75"
            alt="Nahaufnahme einer grünen Leiterplatte mit elektronischen Bauteilen"
            fill
            sizes="(min-width: 1024px) 32vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ts-navy)]/60 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Kundenspezifisches Leiterplattendesign
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
