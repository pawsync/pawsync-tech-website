import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog d'ingénierie : suivi animal & IoT agricole | PawSync",
  description:
    "Notes d'ingénierie : suivi des animaux, IoT agricole, clôture virtuelle, protocoles sans fil et électronique pour environnements extérieurs.",
  alternates: buildAlternates("fr", "blog"),
  openGraph: buildOpenGraph("fr", "blog"),
};

const articles = [
  {
    title: "Clôture virtuelle : comment fonctionnent les colliers GNSS",
    excerpt: "Géorepérage dans le collier, séquence signal sonore puis impulsion, autonomie de la batterie et cadre réglementaire selon les pays.",
    href: "/fr/blog/virtual-fencing-collars",
    image: "/blog/virtual-fencing-collars/hero.svg",
  },
  {
    title: "Capteurs pour le suivi du bétail",
    excerpt: "GPS, activité, RFID, abreuvoirs, barrières et clôtures : ce que mesure chaque capteur, comment l'alimenter et le connecter.",
    href: "/fr/blog/livestock-monitoring-sensors",
    image: "/blog/livestock-monitoring-sensors/hero.svg",
  },
  {
    title: "Capteurs d'ammoniac, de CO₂ et d'humidité en bâtiment avicole",
    excerpt: "Types de capteurs, installation à hauteur des animaux, étalonnage et dérive – et pourquoi l'auto-étalonnage CO₂ échoue en bâtiment occupé.",
    href: "/fr/blog/poultry-house-air-quality-sensors",
    image: "/blog/poultry-house-air-quality-sensors/hero.svg",
  },
  {
    title: "Du prototype à la série : les étapes du développement d'un produit IoT",
    excerpt: "Cahier des charges, preuve de concept, EVT, DVT et PVT – avec le marquage CE, la directive RED et le Cyber Resilience Act.",
    href: "/fr/blog/iot-hardware-development-process",
    image: "/blog/iot-hardware-development-process/hero.svg",
  },
  {
    title: "Planifier un réseau LoRaWAN sur une exploitation",
    excerpt: "Emplacement des passerelles, portée réaliste, bande EU868 et rapport cyclique, autonomie des capteurs agricoles.",
    href: "/fr/blog/lorawan-farm-network-planning",
    image: "/blog/lorawan-farm-network-planning/hero.svg",
  },
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
    title: "Concevoir la carte PCB d'un tracker pour animaux",
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
            >
              {article.image ? (
                <Image
                  src={article.image}
                  alt=""
                  width={1200}
                  height={600}
                  unoptimized
                  className="aspect-[2/1] h-auto w-full border-b border-[var(--ts-navy)]/8 object-cover"
                />
              ) : (
                <div className="flex aspect-[2/1] w-full items-center justify-center border-b border-[var(--ts-navy)]/8 bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/15">
                  <Newspaper className="h-10 w-10 text-[var(--ts-dark-green)]/70" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold leading-snug text-[var(--ts-navy)]">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-dark-green)]">
                  Lire l&apos;article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Un sujet que vous aimeriez que nous abordions ?"
        description="Si vous avez une question sur la technologie animale ou l'IoT agricole à laquelle vous aimeriez une réponse, faites-le-nous savoir."
        primaryLabel="Contactez-nous"
        primaryHref="/fr/contact"
      />
    </>
  );
}
