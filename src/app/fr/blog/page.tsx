import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog | PawSync",
  description:
    "Notes d'ingénierie sur le suivi des animaux, l'IoT agricole, la clôture virtuelle, les protocoles sans fil et la conception d'électronique pour les environnements extérieurs.",
  alternates: buildAlternates("fr", "blog"),
  openGraph: buildOpenGraph("fr", "blog"),
};

const articles = [
  {
    title: "GNSS + LoRa vs. GNSS + LTE-M pour le suivi des animaux",
    excerpt: "Le GNSS détermine la position ; LoRa et LTE-M sont des couches de communication distinctes qui transmettent cette position. Une comparaison pratique.",
    href: "/fr/blog/gnss-lora-vs-gnss-ltem",
  },
  {
    title: "Concevoir une électronique basse consommation pour trackers d'animaux extérieurs",
    excerpt: "L'autonomie d'un tracker portable est un problème de budget énergétique. Les techniques qui déterminent si un appareil tient des jours ou des mois.",
    href: "/fr/blog/low-power-animal-tracker-design",
  },
  {
    title: "Concevoir une carte PCB pour un tracker animalier",
    excerpt: "Un tracker porté au collier n'est pas une carte GPS miniature. Placement d'antenne, empilage des couches et contraintes de boîtier.",
    href: "/fr/blog/pet-tracker-pcb-design",
  },
  {
    title: "Ingénierie matérielle & logicielle d'un distributeur intelligent",
    excerpt: "Précision des portions, calibration de cellule de charge, détection de blocage et reconnaissance RFID — les choix d'ingénierie d'un distributeur.",
    href: "/fr/blog/smart-pet-feeder-engineering",
  },
  {
    title: "Planifier un réseau de surveillance avicole sans fil",
    excerpt: "Placement des capteurs, choix du protocole et planification des passerelles — et pourquoi un capteur ne suffit pas.",
    href: "/fr/blog/wireless-poultry-monitoring-design",
  },
];

export default function BlogPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Notes d&apos;ingénierie sur la technologie animale &amp; agricole
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des articles pratiques sur le matériel, les protocoles sans fil et
          les choix de conception derrière l&apos;électronique connectée
          pour animaux et exploitations agricoles.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group flex flex-col rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <Newspaper className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold leading-snug text-[var(--ts-navy)]">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-dark-green)]">
                Lire l&apos;article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Un sujet que vous aimeriez que nous abordions ?"
        description="Si vous avez une question sur l'Animal-Tech ou l'IoT agricole à laquelle vous aimeriez une réponse, faites-le-nous savoir."
        primaryLabel="Contactez-nous"
        primaryHref="/fr/contact"
      />
    </>
  );
}
