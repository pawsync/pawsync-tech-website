import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bird,
  Cloud,
  Droplets,
  Fan,
  HeartPulse,
  Radar,
  Activity,
  Satellite,
  Settings2,
  Thermometer,
  UtensilsCrossed,
  CircuitBoard,
  Waves,
  type LucideIcon,
} from "lucide-react";
import ServiceCard from "@/components/terrasense/ServiceCard";
import Eyebrow from "@/components/terrasense/Eyebrow";

const smallerSolutions: { icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    icon: Radar,
    title: "Virtuelle Einzäunung",
    description: "GPS- oder Funk-basierte Grenzsysteme, die helfen, Tierbewegungen ohne physische Einzäunung zu überwachen.",
    href: "/de/solutions#virtual-fencing",
  },
  {
    icon: UtensilsCrossed,
    title: "Intelligente Fütterungssysteme",
    description: "Automatisierte Fütterungsgeräte mit Zeitplänen, Portionskontrolle, Sensoren und Fernüberwachung.",
    href: "/de/solutions#smart-feeding",
  },
  {
    icon: HeartPulse,
    title: "Tiergesundheitsüberwachung",
    description: "Tragbare oder fest installierte Elektronik für Aktivität, Temperatur, Bewegung und tägliches Gesundheits-Tracking.",
    href: "/de/solutions#health-monitoring",
  },
  {
    icon: Activity,
    title: "Nutztierüberwachung",
    description: "Bewegung, Verhalten, Standort und Umweltbedingungen von Nutztieren erfassen.",
    href: "/de/livestock-technology",
  },
  {
    icon: Bird,
    title: "Intelligente Geflügelüberwachung",
    description: "Vernetzte Umweltüberwachung und Automatisierung für Temperatur, Luftfeuchtigkeit, Belüftung, Futter, Wasser und kritische Hofausrüstung.",
    href: "/de/poultry-farming",
  },
  {
    icon: Waves,
    title: "Intelligente Bewässerung & Wassermanagement",
    description: "Bodenfeuchtemessung, automatisierte Ventile und Pumpen sowie wetterabhängige Steuerung zur Optimierung des Wasserverbrauchs.",
    href: "/de/solutions#smart-irrigation",
  },
  {
    icon: AlertTriangle,
    title: "Notfall- & Gefahrenerkennung",
    description: "Frühwarnsysteme für extreme Hitze, Kälte, Rauch, Brandrisiko, Überflutung, Wasseraustritt und Geräteausfälle.",
    href: "/de/solutions#safety-detection",
  },
  {
    icon: CircuitBoard,
    title: "Kundenspezifische IoT-Geräte",
    description: "Individuell entwickelte Elektronik, zugeschnitten auf die genauen Anforderungen des Kunden.",
    href: "/de/custom-electronics",
  },
];

export default function SolutionsOverview() {
  return (
    <section aria-labelledby="solutions-overview-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Unsere Lösungen</Eyebrow>
        <h2
          id="solutions-overview-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Technologie für Tiere &amp; Landwirtschaft
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Elf zentrale Problemfelder, für die wir vernetzte Hardware entwickeln.
        </p>
      </div>

      {/* Three featured solutions — each with a distinct visual treatment */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Featured 1: real photo */}
        <Link
          href="/de/solutions#tracking-location"
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(14,27,38,0.18)]"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1696426036297-e0afd5254b75?auto=format&fit=crop&w=700&q=75"
              alt="Eine Kuh steht auf einer üppigen Weide, stellvertretend für ein getracktes Tier im Feld"
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Satellite className="h-3.5 w-3.5" aria-hidden="true" />
              GPS &amp; GNSS
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Tier-Tracking
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ts-gray)]">
              Echtzeit- oder periodische GPS-Ortungssysteme für Haustiere, Nutztiere und andere Tiere — ausgelegt auf Reichweite, Akkulaufzeit und Gelände.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-green)]">
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Featured 2: dashboard mockup */}
        <Link
          href="/de/farm-automation"
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(14,27,38,0.18)]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-[var(--ts-navy)] p-4">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative grid h-full grid-cols-2 gap-2.5">
              {[
                { icon: Fan, label: "Belüftung", value: "AN", tone: "on" as const },
                { icon: Droplets, label: "Bewässerung", value: "AUTO", tone: "on" as const },
                { icon: Thermometer, label: "Stalltemp.", value: "24,5 °C", tone: "neutral" as const },
                { icon: Settings2, label: "Futterspender", value: "Geplant", tone: "neutral" as const },
              ].map((tile) => (
                <div key={tile.label} className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <tile.icon className="h-3.5 w-3.5 text-white/50" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] text-white/50">{tile.label}</p>
                    <p className={`text-xs font-semibold ${tile.tone === "on" ? "text-[var(--ts-accent)]" : "text-white/80"}`}>{tile.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Hofautomatisierung
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ts-gray)]">
              Steuern Sie Bewässerung, Fütterung, Belüftung, Pumpen, Ventilatoren, Heizungen und Kühlsysteme über eine vernetzte Plattform.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-green)]">
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Featured 3: sensor readout mockup */}
        <Link
          href="/de/environmental-monitoring"
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(14,27,38,0.18)]"
        >
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[var(--ts-dark-green)] to-[var(--ts-navy)] p-5">
            <div className="flex h-full flex-col justify-center gap-3">
              {[
                { icon: Thermometer, label: "Temperatur", value: "24,6 °C" },
                { icon: Droplets, label: "Luftfeuchtigkeit", value: "61 %" },
                { icon: Cloud, label: "Luftqualität", value: "Gut" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
                  <span className="flex items-center gap-2 text-xs text-white/70">
                    <row.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {row.label}
                  </span>
                  <span className="text-xs font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Umweltüberwachung
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ts-gray)]">
              Überwachen Sie Temperatur, Luftfeuchtigkeit, Luftqualität, Wasserbedingungen und weitere Umweltparameter in Echtzeit.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-green)]">
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>

      {/* Remaining eight solutions — compact cards, four per row so the grid
          resolves evenly at every desktop width */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {smallerSolutions.map((solution) => (
          <ServiceCard key={solution.title} locale="de" {...solution} />
        ))}
      </div>
    </section>
  );
}
