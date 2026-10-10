import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Conception de carte PCB pour tracker animalier | PawSync",
  description:
    "Un tracker porté au collier n'est pas une carte GPS miniature. Placement d'antenne, empilage des couches et contraintes de boîtier qui déterminent la conception.",
  alternates: buildAlternates("fr", "blog/pet-tracker-pcb-design"),
  openGraph: buildOpenGraph("fr", "blog/pet-tracker-pcb-design"),
};

export default function BlogArticlePetTrackerPCBFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Conception PCB tracker" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Concevoir une carte PCB pour un tracker animalier : ce que le format impose réellement
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Un tracker porté au collier ou en médaille n&apos;est pas une version miniature d&apos;une carte GPS classique — le format lui-même impose la plupart des décisions difficiles.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            Une carte de tracker GPS/GNSS pour un prototype de laboratoire et une carte destinée à être
            portée des mois durant sur un collier sont, électriquement, des circuits similaires.
            Mécaniquement et électromagnétiquement, ce ne sont pas du tout le même problème. Tout ce qui
            suit découle d&apos;un seul fait : la carte doit être petite, rester proche du corps d&apos;un
            animal en mouvement, et survivre en extérieur sans que personne ne l&apos;ouvre pour corriger
            une erreur.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Partir de la contrainte, pas du composant
          </h2>
          <p>
            Il est tentant de commencer un design de tracker en choisissant un module GNSS et une radio,
            puis de router la carte autour. En pratique, les dimensions du boîtier, la géométrie du collier
            ou de la médaille, et la taille de batterie visée sont généralement fixées en premier, car ce
            sont les contraintes les plus difficiles à modifier ensuite — la carte doit tenir dans
            l&apos;enveloppe qu&apos;elles laissent. Le choix des composants découle de cette enveloppe, pas
            l&apos;inverse.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Le placement de l&apos;antenne est souvent le plus difficile
          </h2>
          <p>
            C&apos;est là que se concentre l&apos;essentiel de la difficulté technique d&apos;un tracker
            portable, et c&apos;est facile à sous-estimer avant d&apos;avoir soi-même routé une carte.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Type d&apos;antenne GNSS.</strong> Une antenne patch céramique offre une performance
              fiable avec une zone d&apos;exclusion de plan de masse connue, mais son encombrement minimal
              entre directement en concurrence avec tout le reste sur une petite carte. Une antenne
              intégrée en piste PCB ou de type puce peut être plus petite et moins coûteuse, mais plus
              sensible aux erreurs de routage et à tout ce qui se trouve à proximité — y compris la
              batterie, les fermoirs métalliques du collier, ou un boîtier conducteur.
            </li>
            <li>
              <strong>Charge due au corps de l&apos;animal.</strong> Une antenne montée près du corps
              d&apos;un animal — surtout un animal de grande taille — subit une charge RF due à ce corps
              que la fiche technique d&apos;une antenne en espace libre ne prend pas en compte. Cela peut
              désaccorder l&apos;antenne et réduire à la fois la sensibilité et le rendement de
              rayonnement. La réponse pratique consiste à valider la performance de l&apos;antenne dans une
              position et une orientation de montage proches du cas d&apos;usage réel, pas seulement sur
              banc ouvert.
            </li>
            <li>
              <strong>Zones d&apos;exclusion et désensibilisation.</strong> L&apos;antenne GNSS a besoin de
              distance par rapport au bruit de commutation numérique et à la batterie. S&apos;il y a une
              seconde radio sur la même carte — LoRa, LTE-M ou BLE —, elle a besoin de sa propre zone
              d&apos;exclusion, et idéalement d&apos;une séparation physique avec l&apos;antenne GNSS, pour
              que la puissance d&apos;émission de la seconde radio ne désensibilise pas le chemin de
              réception GNSS, bien plus sensible.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Empilage et nombre de couches
          </h2>
          <p>
            Un design simple à faible débit peut parfois se contenter de deux couches. En pratique, dès
            qu&apos;un front-end GNSS, une seconde radio, un circuit de charge de batterie et des
            interfaces capteurs cohabitent sur la même petite carte, un empilage quatre couches avec un
            plan de masse dédié et continu sous le front-end RF est généralement le choix le plus fiable —
            il donne à la section GNSS un plan de référence propre et éloigne les pistes numériques
            bruyantes de la RF sensible.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alimentation et protection de la batterie sur la carte
          </h2>
          <p>
            Pour une pile primaire au lithium (non rechargeable), le chemin d&apos;alimentation est
            relativement simple : un régulateur linéaire à faible chute ou un petit convertisseur
            buck-boost, dimensionné pour le courant que le GNSS et la radio consomment pendant leurs
            phases actives, pas seulement en veille.
          </p>
          <p>
            Pour une cellule lithium-ion ou LiPo rechargeable, la carte a besoin d&apos;un circuit de
            protection de batterie — surintensité, surtension et coupure en sous-tension — comme composant
            de sécurité non négociable, plus un circuit de charge si l&apos;appareil se recharge par USB,
            un socle à broches pogo, ou le solaire. Le choix de la topologie du régulateur (linéaire ou
            buck-boost) est lui-même un compromis : un régulateur linéaire est plus simple et moins
            bruyant, mais dissipe l&apos;écart de tension en chaleur, ce qui pèse davantage aux courants
            plus élevés qu&apos;une acquisition GNSS ou une émission radio exigent brièvement.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Choix des composants : module ou solution discrète
          </h2>
          <p>
            Un module GNSS plus radio précertifié amène un design vers un prototype fonctionnel plus vite,
            porte déjà une certification radio FCC/CE, et réduit le risque de routage RF — moyennant un
            surcoût de taille et de prix unitaire par rapport à des composants discrets. Une approche en
            composants discrets peut être plus petite et moins chère en volume, mais déplace
            l&apos;expertise de routage RF et le processus de certification vers le projet. Le choix
            pertinent dépend du volume de production, du calendrier et de la marge de conception RF
            souhaitée — il n&apos;existe pas de réponse universellement correcte.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Concevoir pour le boîtier, pas seulement pour la carte
          </h2>
          <p>
            Le contour de la carte, la position des trous de fixation et l&apos;emplacement des connecteurs
            doivent être décidés avec le boîtier, pas après. Les boîtiers portés au collier ou en médaille
            nécessitent souvent un enrobage ou un vernis de protection autour de la carte contre
            l&apos;humidité et les vibrations — mais tout indice de protection spécifique contre
            l&apos;eau ou la poussière (un indice IP, par exemple) doit être validé par des essais réels
            sur l&apos;appareil fini et assemblé. Ce n&apos;est pas quelque chose qu&apos;une conception de
            carte peut revendiquer seule, indépendamment du boîtier dans lequel elle finit.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Concevoir tôt pour la fabricabilité
          </h2>
          <p>
            Une carte qui fonctionne parfaitement sur banc peut rester pénible à fabriquer en volume si la
            mise en panneau, les points de test pour les essais en circuit ou fonctionnels, et le placement
            des composants pour le pick-and-place n&apos;ont pas été pris en compte dès le routage. Une
            revue de fabricabilité avant de figer le routage — et non après le premier lot de prototypes —
            est une assurance peu coûteuse contre des reprises ultérieures.
          </p>

          <p>
            Rien de tout cela n&apos;est exotique selon les standards du matériel embarqué. Ce qui fait
            tenir une conception de tracker PCB sur le terrain, c&apos;est généralement le fait que le
            placement d&apos;antenne, l&apos;intégration au boîtier et la fabricabilité aient été traités
            comme des contraintes de routage dès le départ, plutôt que comme des problèmes à corriger après
            le premier lot de cartes.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous cadrez un projet de tracker et ne savez pas par où commencer ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link>, nous
          vous aiderons à clarifier les contraintes avant de figer un routage. Pour le choix de
          connectivité de la seconde radio, voir notre comparaison{" "}
          <Link href="/fr/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">GNSS + LoRa vs. GNSS + LTE-M</Link>. Pour le
          volet budget énergétique de la conception, voir{" "}
          <Link href="/fr/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Concevoir une électronique basse consommation pour trackers d&apos;animaux extérieurs</Link>.
        </p>
      </article>

      <CTABanner
        heading="Un circuit de tracker à cadrer ?"
        description="Indiquez-nous votre format cible, l'autonomie souhaitée et vos besoins de connectivité — nous vous aiderons à arbitrer les choix de routage."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Développement de trackers animaux"
        secondaryHref="/fr/animal-tracking"
        secondaryLocale="fr"
      />
    </>
  );
}
