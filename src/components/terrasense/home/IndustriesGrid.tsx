import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const industries: { image: string; alt: string; label: string; tagline: string; href?: string }[] = [
  {
    image: "https://images.unsplash.com/photo-1644076829117-33c549118444?auto=format&fit=crop&w=500&q=75",
    alt: "A black Labrador wearing a red collar",
    label: "Pet Technology",
    tagline: "Tracking • Health • Safety",
    href: "/pet-technology",
  },
  {
    image: "https://images.unsplash.com/photo-1573611236714-1fe596de1fd3?auto=format&fit=crop&w=500&q=75",
    alt: "A tagged calf standing in a green pasture",
    label: "Livestock Farming",
    tagline: "Tracking • Health • Automation",
    href: "/livestock-technology",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=75",
    alt: "A Holstein dairy cow standing in a field",
    label: "Dairy Farming",
    tagline: "Herd Monitoring • Yield Data",
  },
  {
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=500&q=75",
    alt: "A chicken in a poultry farm setting",
    label: "Poultry Farming",
    tagline: "Climate • Feeding • Water • Automation",
    href: "/poultry-farming",
  },
  {
    image: "https://images.unsplash.com/photo-1599635406076-0f40532a59fc?auto=format&fit=crop&w=500&q=75",
    alt: "Horses standing in a misty pasture at sunrise",
    label: "Horse & Equine Technology",
    tagline: "Location • Activity Tracking",
  },
  {
    image: "https://images.unsplash.com/photo-1665849325502-92a086699cb5?auto=format&fit=crop&w=500&q=75",
    alt: "A close-up of a deer in a forest",
    label: "Wildlife Monitoring",
    tagline: "Conservation • Movement Data",
  },
  {
    image: "https://images.unsplash.com/photo-1656407410275-e63e689bcd90?auto=format&fit=crop&w=500&q=75",
    alt: "Aerial view of precision agriculture equipment in a field",
    label: "Smart Agriculture",
    tagline: "Sensors • Automation",
  },
];

export default function IndustriesGrid() {
  return (
    <section aria-labelledby="industries-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Who We Build For</Eyebrow>
          <h2
            id="industries-heading"
            className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            Wherever animals and electronics meet, we build for it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const isFeatured = industry.label === "Poultry Farming";
            const cardClass = `group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.28)] ${
              isFeatured ? "ring-2 ring-[var(--ts-green)] ring-offset-2 ring-offset-[var(--ts-dark-green)]/5" : ""
            }`;
            const content = (
              <>
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {isFeatured && (
                  <span className="absolute right-3 top-3 rounded-full bg-[var(--ts-green)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--ts-navy)]">
                    Featured
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-sm font-bold uppercase tracking-wide text-white">{industry.label}</span>
                  <p className="mt-0.5 text-[11px] text-white/70">{industry.tagline}</p>
                </div>
              </>
            );
            return industry.href ? (
              <Link key={industry.label} href={industry.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={industry.label} className={cardClass}>
                {content}
              </div>
            );
          })}

          {/* Non-photo accent tile — startups & custom projects */}
          <div className="group relative flex aspect-[3/4] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--ts-dark-green)] to-[var(--ts-navy)] p-4 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.28)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Zap className="h-6 w-6 text-[var(--ts-accent)]" aria-hidden="true" />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-white">Startups &amp; Custom Projects</span>
              <p className="mt-0.5 text-[11px] text-white/60">Animal-Tech • AgriTech</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-green)]"
          >
            View all industries
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
