import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Notre méthode | PawSync",
  description:
    "Notre processus d'ingénierie, de l'analyse des besoins à l'accompagnement de production — les étapes que suit chaque projet PawSync.",
  alternates: buildAlternates("fr", "how-we-work"),
};

const stages = [
  { title: "Analyse des besoins", description: "Comprendre les animaux, l'environnement et les contraintes dans lesquelles le produit doit fonctionner." },
  { title: "Architecture produit", description: "Définir le système global — ce que le dispositif détecte, comment il se connecte et comment il est alimenté." },
  { title: "Choix de la technologie", description: "Choisir les capteurs, le protocole sans fil et la plateforme de microcontrôleur adaptés aux besoins." },
  { title: "Développement du schéma", description: "Concevoir le circuit — sélection des composants, régulation de puissance et parcours des signaux." },
  { title: "Conception de la carte PCB", description: "Disposer la carte pour la fabricabilité, la taille et la fiabilité sur le terrain." },
  { title: "Développement du micrologiciel", description: "Écrire le logiciel embarqué qui fait fonctionner le dispositif et son protocole de communication." },
  { title: "Assemblage du prototype", description: "Construire une unité fonctionnelle pour valider la conception dans des conditions réelles." },
  { title: "Tests fonctionnels", description: "Vérifier que les capteurs, la connectivité et la gestion de l'énergie fonctionnent comme prévu." },
  { title: "Tests sur le terrain", description: "Tester dans l'environnement réel — sur l'animal, dans le bâtiment ou en plein champ." },
  { title: "Améliorations de conception", description: "Affiner selon les données du terrain avant de figer la conception pour la production." },
  { title: "Fichiers de fabrication", description: "Préparer les fichiers Gerber, la nomenclature et les fichiers de placement pour un sous-traitant." },
  { title: "Accompagnement de la production", description: "Accompagner la transition de la série de prototypes vers la fabrication continue." },
];

const deliverables = [
  "Schémas", "Fichiers PCB", "Fichiers Gerber", "Nomenclature", "Fichiers de placement",
  "Code source du micrologiciel", "Protocole de communication", "Documentation du dispositif",
  "Procédures de test", "Matériel prototype",
];

export default function HowWeWorkPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Notre méthode" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Notre méthode</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          De l&apos;ingénierie du concept à la production
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Douze étapes, une équipe responsable, du premier croquis à un
          produit industrialisable.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ol className="relative space-y-8 border-l-2 border-[var(--ts-navy)]/10 pl-8">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ts-dark-green)] text-xs font-bold text-white ring-4 ring-[var(--ts-bg)]">
                {index + 1}
              </span>
              <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {stage.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ts-gray)]">{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Livrables</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Ce que vous obtenez
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[var(--ts-navy)]/8 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Prêt à démarrer la première étape ?"
        description="Parlez-nous du problème que vous cherchez à résoudre, et nous cadrerons ensemble l'analyse des besoins."
        primaryLabel="Discuter de votre projet"
        primaryHref="/fr/contact"
      />
    </>
  );
}
