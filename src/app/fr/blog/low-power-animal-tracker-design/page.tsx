import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Concevoir une électronique basse consommation pour trackers d'animaux extérieurs | PawSync",
  description:
    "L'autonomie d'un tracker animalier portable est un problème de budget énergétique. Les techniques qui déterminent si un appareil tient des jours ou des mois.",
  alternates: buildAlternates("fr", "blog/low-power-animal-tracker-design"),
  openGraph: buildOpenGraph("fr", "blog/low-power-animal-tracker-design"),
};

export default function BlogArticleLowPowerDesignFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Conception basse consommation" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Concevoir une électronique basse consommation pour trackers d&apos;animaux extérieurs
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Pourquoi l&apos;autonomie est fondamentalement un problème de budget énergétique, et les techniques qui la font passer de quelques jours à plusieurs mois.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            L&apos;autonomie d&apos;un tracker sur collier ou boucle auriculaire se résume à un seul calcul :
            la consommation moyenne de courant par rapport à la capacité de la batterie. Un appareil
            consommant en moyenne 1 mA sur une cellule de 1000 mAh fonctionne environ 1000 heures (environ
            42 jours), avant de tenir compte des effets de température et de l&apos;autodécharge ; en
            réduisant la consommation moyenne à 0,1 mA, la même cellule peut tenir presque un an. Presque
            chaque décision de conception d&apos;un tracker portable est, d&apos;une manière ou d&apos;une
            autre, une tentative de réduire cette moyenne.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Où passe réellement l&apos;énergie
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Acquisition GNSS.</strong> Recevoir et verrouiller les signaux satellites est l&apos;une
              des opérations les plus gourmandes en énergie d&apos;un tracker, et sa durée compte autant que
              le courant consommé pendant son déroulement. Un <em>démarrage à froid</em> (sans almanach ni
              donnée de position récente) peut prendre plusieurs dizaines de secondes pour obtenir une
              position ; un démarrage <em>tiède</em> ou <em>à chaud</em>, utilisant des données
              d&apos;éphémérides et d&apos;horloge récemment enregistrées, peut se verrouiller en quelques
              secondes. Minimiser les démarrages à froid — en conservant intactes les données de sauvegarde
              du récepteur à travers les cycles de veille — est l&apos;une des décisions énergétiques les
              plus efficaces de toute la conception.
            </li>
            <li>
              <strong>Transmission radio.</strong> L&apos;envoi de données — via LoRa, LTE-M, BLE ou Wi-Fi —
              consomme un courant important pendant la durée (généralement brève) de la transmission. La
              taille de la charge utile, le choix du module radio et la fréquence de transmission
              représentent tous des compromis directs avec l&apos;autonomie.
            </li>
            <li>
              <strong>Capteurs et microcontrôleur.</strong> Une centrale inertielle (accéléromètre/gyroscope),
              un capteur de température et le microcontrôleur lui-même consomment tous un peu de courant
              même en mode basse consommation ; l&apos;effet cumulé de nombreuses petites consommations
              permanentes peut rivaliser avec les consommations plus importantes mais intermittentes.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            La technique centrale : un cyclage rigoureux
          </h2>
          <p>
            Plutôt que de maintenir le microcontrôleur, le récepteur GNSS et le module radio alimentés en
            continu, un tracker bien conçu passe l&apos;essentiel de son temps dans un état de veille
            profonde ne consommant que quelques microampères, se réveillant sur minuterie ou interruption
            pour effectuer une tâche utile, puis retournant en veille. Le travail d&apos;ingénierie consiste
            à décider <em>quand</em> se réveiller et <em>combien</em> faire une fois réveillé.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Réveil déclenché par le mouvement
          </h3>
          <p>
            Un accéléromètre basse consommation peut générer une interruption matérielle lorsqu&apos;il
            détecte un mouvement au-delà d&apos;un seuil, sans que le microcontrôleur principal ait besoin
            d&apos;être éveillé pour le surveiller. Cela permet à une conception de transmettre la position
            plus souvent lorsqu&apos;un animal est activement en mouvement, et de réduire fortement cette
            fréquence lorsqu&apos;il se repose ou paît sur place — un schéma largement utilisé dans le
            matériel de suivi portable en général, car il concentre la dépense énergétique là où les
            données de localisation changent réellement.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            L&apos;intervalle de transmission comme paramètre de conception, pas comme réflexion après coup
          </h3>
          <p>
            Chaque décision concernant l&apos;intervalle de transmission est un compromis direct avec
            l&apos;autonomie : diviser l&apos;intervalle par deux double approximativement l&apos;énergie
            consommée par les positions GNSS et les transmissions radio. Ce compromis mérite d&apos;être
            explicité auprès de qui définit les exigences, plutôt que de choisir par défaut &quot;le plus
            souvent possible&quot; — une application agricole suivant des déplacements à l&apos;échelle
            d&apos;un pâturage nécessite généralement des mises à jour bien moins fréquentes qu&apos;un cas
            d&apos;usage suivant un comportement fin.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Chimie de la batterie et environnement d&apos;exploitation
          </h2>
          <p>
            Les trackers extérieurs doivent aussi survivre à des variations de température que
            l&apos;électronique d&apos;intérieur rencontre rarement, ce qui influence le choix de la batterie
            autant que la conception du circuit. Les piles au lithium primaires (comme le Li-SOCl₂) offrent
            une haute densité énergétique, une longue durée de stockage et une performance relativement
            stable sur une large plage de température, mais ne sont pas rechargeables — l&apos;appareil est
            remplacé ou la pile changée en fin de vie. Les cellules lithium-ion ou LiPo rechargeables
            permettent une charge solaire d&apos;appoint ou une recharge périodique, mais leur capacité
            utile chute plus nettement par temps froid, et leur durée de vie en cycles dépend des profils
            de charge/décharge et de la température. Quelle que soit la chimie retenue, le budget
            énergétique doit prévoir une marge pour la perte de capacité à la température la plus basse à
            laquelle l&apos;appareil doit fonctionner, pas seulement à température ambiante.
          </p>

          <p>
            Aucune de ces techniques n&apos;est exotique — il s&apos;agit de pratiques standard en systèmes
            embarqués. Ce qui rend l&apos;autonomie d&apos;un tracker satisfaisante ou décevante tient
            généralement à la constance avec laquelle ces techniques ont été appliquées ensemble, et à la
            précocité avec laquelle le budget énergétique a été traité comme une contrainte réelle plutôt
            que comme quelque chose à corriger après le premier prototype.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous travaillez sur un objectif d&apos;autonomie pour votre propre appareil ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> et nous vous aiderons à cadrer le budget énergétique.
        </p>
      </article>

      <CTABanner
        heading="Un budget énergétique à clarifier ?"
        description="Indiquez-nous votre objectif d'autonomie, la fréquence de transmission et l'environnement — nous vous aiderons à cadrer ce qui est réalisable."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Retour au blog"
        secondaryHref="/fr/blog"
      />
    </>
  );
}
