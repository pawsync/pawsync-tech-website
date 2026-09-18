import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog | PawSync",
  description:
    "Notes d'ingénierie sur le suivi des animaux, l'IoT agricole, la clôture virtuelle, les protocoles sans fil et la conception d'électronique pour les environnements extérieurs.",
  alternates: buildAlternates("fr", "blog"),
};

const articles = [
  { title: "Comment l'IoT transforme l'élevage", excerpt: "Un regard sur la façon dont les capteurs connectés et le suivi changent la gestion quotidienne des troupeaux." },
  { title: "GPS vs LoRa pour le suivi des animaux", excerpt: "Deux technologies très différentes, chacune adaptée à des besoins de portée, d'énergie et de précision distincts." },
  { title: "Comment fonctionne la clôture virtuelle", excerpt: "Décryptage des couches GPS, communication et alerte derrière une frontière virtuelle." },
  { title: "Concevoir des dispositifs de suivi basse consommation", excerpt: "Les choix de conception qui déterminent si un tracker tient des jours ou des mois sur une charge." },
  { title: "Les capteurs IoT à considérer pour toute ferme intelligente", excerpt: "Les principaux types de capteurs qui offrent une réelle visibilité sur les opérations d'une exploitation." },
  { title: "Comment fonctionnent les systèmes d'alimentation automatisés", excerpt: "De la trémie à l'application mobile — la chaîne matérielle derrière une alimentation programmée et dosée." },
  { title: "Utiliser le RFID pour l'identification du bétail", excerpt: "Pourquoi le RFID reste la référence pour une identification animale fiable et économique." },
  { title: "Surveillance environnementale pour les élevages avicoles", excerpt: "Les tolérances étroites qu'exigent les bâtiments avicoles, et comment les capteurs aident à les maintenir." },
  { title: "Comment les capteurs intelligents peuvent prévenir les pannes d'équipement agricole", excerpt: "Une surveillance d'alerte précoce pour les pompes, générateurs et autres infrastructures critiques." },
  { title: "Concevoir de l'électronique pour les environnements agricoles extérieurs", excerpt: "Poussière, humidité, écarts de température — concevoir du matériel qui résiste au terrain." },
  { title: "BLE vs Wi-Fi vs LoRa pour les dispositifs IoT agricoles", excerpt: "Choisir le bon protocole sans fil selon la portée, la consommation et l'infrastructure." },
  { title: "Que comprend le développement d'un produit IoT sur mesure ?", excerpt: "Un parcours des étapes entre une idée et un dispositif industrialisable." },
];

export default function BlogPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Notes d&apos;ingénierie sur la technologie animale &amp; agricole
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Des articles pratiques sur le matériel, les protocoles sans fil et
          les choix de conception derrière l&apos;électronique connectée
          pour animaux et exploitations agricoles.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <Newspaper className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-base font-bold leading-snug text-[var(--ts-navy)]">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--ts-gray)]">
          Les articles complets arrivent bientôt — il s&apos;agit de sujets en
          cours de rédaction pour notre blog d&apos;ingénierie.
        </p>
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
