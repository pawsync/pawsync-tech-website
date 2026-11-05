import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ArticleDate from "@/components/terrasense/ArticleDate";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";
import { blogPostingJsonLd, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Clôture virtuelle : comment marchent les colliers | PawSync",
  description:
    "La clôture virtuelle pour le bétail expliquée côté ingénierie : géorepérage GNSS dans le collier, séquence signal sonore puis impulsion, autonomie de la batterie et cadre réglementaire.",
  alternates: buildAlternates("fr", "blog/virtual-fencing-collars"),
  openGraph: buildOpenGraph("fr", "blog/virtual-fencing-collars", {
    url: "/blog/virtual-fencing-collars/og-fr.jpg",
    alt: "Vaches Holstein équipées de colliers GNSS pâturant près d'une clôture virtuelle, avec un satellite au-dessus",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/virtual-fencing-collars/og-fr.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "fr",
  route: "blog/virtual-fencing-collars",
  headline: "Clôture virtuelle : comment fonctionnent les colliers GNSS – positionnement, signaux et énergie",
  description: metadata.description ?? "",
  image: "/blog/virtual-fencing-collars/og-fr.jpg",
});

export default function BlogArticleVirtualFencingCollarsFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Clôture virtuelle" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Clôture virtuelle : comment fonctionnent les colliers GNSS – positionnement, signaux et énergie
        </h1>
        <ArticleDate route="blog/virtual-fencing-collars" locale="fr" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Une clôture virtuelle remplace les fils et les piquets par une limite tracée sur une carte. Tout ce qui
          la fait fonctionner – savoir où se trouve l&apos;animal, l&apos;avertir au bon moment et tenir des mois
          sur une batterie – doit se passer dans un collier porté dehors par un animal en mouvement.
        </p>
        <Image
          src="/blog/virtual-fencing-collars/hero-fr.webp"
          alt="Vaches Holstein équipées de colliers GNSS pâturant près d'une clôture virtuelle, avec un satellite au-dessus"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Les composants d&apos;un système de clôture virtuelle
          </h2>
          <p>
            Chaque animal porte un collier équipé d&apos;un récepteur GNSS (positionnement par satellite), d&apos;un
            petit processeur, d&apos;un haut-parleur, d&apos;un circuit capable de délivrer une impulsion
            électrique brève et de faible énergie, et d&apos;une batterie – souvent rechargée par un petit panneau
            solaire. L&apos;éleveur trace la limite dans une application web ou mobile. Une liaison radio – réseau
            cellulaire, LoRa ou station de base dédiée – transmet les nouvelles limites aux colliers et remonte
            leur état.
          </p>
          <p>
            Le choix déterminant est l&apos;endroit où se prend la décision. Dans un système bien conçu, la limite
            est stockée dans le collier, qui compare lui-même sa position. Les guides de vulgarisation agricole
            américains (NDSU, NRCS de l&apos;USDA) soulignent que la clôture continue ainsi de fonctionner lorsque
            le réseau est coupé – ce qui arrive régulièrement sur des parcelles isolées.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Comment le collier connaît la limite
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Le géorepérage dans le microcontrôleur
          </h3>
          <p>
            La limite est enregistrée sous forme de polygone, c&apos;est-à-dire une liste de coordonnées. À chaque
            position, le firmware vérifie si le point est à l&apos;intérieur et calcule la distance au bord le plus
            proche. C&apos;est cette distance qui pilote tout le reste. On définit généralement une zone
            d&apos;avertissement juste à l&apos;intérieur de la limite, et la direction de déplacement indique si
            l&apos;animal s&apos;approche de la limite ou la longe.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Composer avec l&apos;imprécision du GNSS
          </h3>
          <p>
            Un récepteur GNSS mono-fréquence est généralement précis à quelques mètres en ciel dégagé. Sous les
            arbres, en pente forte ou près des bâtiments, l&apos;erreur augmente et certaines positions sautent.
            Une position brute ne doit donc jamais déclencher un signal à elle seule. Les techniques utiles :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Filtrage qualité</strong> – écarter les positions calculées avec trop peu de satellites ou une précision estimée médiocre.</li>
            <li><strong>Contrôle de vraisemblance</strong> – rejeter un déplacement physiquement impossible depuis la position précédente.</li>
            <li><strong>Lissage</strong> – moyenner position et cap sur plusieurs mesures, complété par l&apos;accéléromètre.</li>
            <li><strong>Zone tampon</strong> – placer la zone d&apos;avertissement assez loin à l&apos;intérieur pour que l&apos;erreur GNSS normale ne la déplace pas.</li>
          </ul>
          <p>
            L&apos;emplacement de l&apos;antenne compte autant que le firmware : l&apos;antenne GNSS doit être sur
            le dessus du cou, avec une vue dégagée du ciel. De nombreux colliers utilisent un contrepoids pour
            éviter que l&apos;électronique ne tourne.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            La séquence des signaux : d&apos;abord le son, ensuite l&apos;impulsion
          </h2>
          <p>
            Les descriptions publiées des systèmes commerciaux suivent le même schéma. Quand l&apos;animal entre
            dans la zone d&apos;avertissement, le collier émet un signal sonore. S&apos;il fait demi-tour, rien de
            plus ne se passe. S&apos;il continue vers la limite, le collier délivre une courte impulsion
            électrique. Les animaux associent le son à l&apos;impulsion et, après une période d&apos;apprentissage,
            réagissent en général au son seul. La logique des signaux relève autant du bien-être animal que de la
            régulation :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Limites strictes</strong> sur l&apos;énergie, le nombre et la répétition des impulsions, dans le firmware et si possible dans le matériel.</li>
            <li><strong>Comportement sûr par défaut</strong> – si la position est douteuse ou la batterie presque vide, ne plus stimuler et signaler le problème.</li>
            <li><strong>Traçabilité</strong> – enregistrer chaque signal sonore et chaque impulsion avec l&apos;heure et la position, pour repérer une limite mal placée.</li>
            <li><strong>Règle de retour</strong> – un animal qui a franchi la limite doit être guidé vers l&apos;intérieur, pas empêché de revenir.</li>
          </ul>

          <figure>
            <Image
              src="/blog/virtual-fencing-collars/diagram-fr.webp"
              alt="Schéma d'une parcelle avec limite virtuelle et zone d'alerte : 1 signal sonore à l'entrée de la zone d'alerte, 2 brève impulsion seulement si l'animal continue, 3 les signaux cessent s'il fait demi-tour"
              width={1536}
              height={1024}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              La séquence des signaux : d&apos;abord le son, une impulsion seulement si l&apos;animal continue, plus rien dès qu&apos;il fait demi-tour.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            L&apos;énergie : la contrainte derrière toutes les autres
          </h2>
          <p>
            Selon les sources, l&apos;autonomie d&apos;un collier va de quelques mois à une saison de pâturage
            complète, en fonction de la fréquence des positions et du nombre de signaux déclenchés.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Fréquence GNSS :</strong> le récepteur est souvent le plus gros consommateur. Des positions fréquentes seulement près de la limite, rares au centre de la parcelle ou quand l&apos;animal est couché, économisent beaucoup.</li>
            <li><strong>Trafic radio :</strong> envoyer des résumés et des événements plutôt que chaque position.</li>
            <li><strong>Signaux :</strong> une limite mal placée qui déclenche des signaux toute la journée peut dominer la consommation.</li>
            <li><strong>Solaire :</strong> utile en été, beaucoup moins en hiver ou si le collier a tourné. On dimensionne pour le mois le plus défavorable.</li>
          </ul>
          <p>
            Nous détaillons cycles de veille et budget énergétique dans{" "}
            <Link href="/fr/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Électronique basse consommation pour trackers animaliers d&apos;extérieur
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Liaison radio et conception mécanique
          </h2>
          <p>
            La limite étant stockée dans le collier, la liaison radio sert à la gestion, pas au contrôle en temps
            réel. LTE-M ou NB-IoT ne demande aucune infrastructure sur l&apos;exploitation mais suppose une
            couverture ; LoRaWAN nécessite une passerelle mais consomme moins par message. Notre{" "}
            <Link href="/fr/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              comparatif GNSS + LoRa vs GNSS + LTE-M
            </Link>{" "}
            approfondit ces options. Mécaniquement, le collier doit résister à la pluie, à la boue, au gel, au
            soleil et aux frottements : indice de protection adapté, serre-câbles, boucle qui ne blesse pas
            l&apos;animal, et électrodes qui assurent le contact à travers le pelage sans abîmer la peau.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Un cadre réglementaire qui varie selon les pays
          </h2>
          <p>
            Des systèmes commerciaux sont déjà utilisés dans plusieurs pays, notamment aux États-Unis et au
            Royaume-Uni. Mais le statut des colliers à stimulation électrique pour le bétail n&apos;est pas le
            même partout : la Suède a adapté sa réglementation pour les bovins, tandis qu&apos;en Allemagne et en
            Autriche ces colliers ne sont actuellement pas autorisés pour les animaux d&apos;élevage. En France
            comme ailleurs, vérifiez le cadre applicable dans chaque marché cible avant d&apos;engager une
            conception : il peut déterminer non seulement la commercialisation, mais aussi les fonctions
            nécessaires (impulsion, son seul, journalisation).
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            À définir avant de concevoir un collier
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>L&apos;espèce et la taille des animaux – bovins, ovins et caprins n&apos;utilisent pas le même collier.</li>
            <li>L&apos;autonomie visée et la pertinence de la recharge solaire selon la région et la saison.</li>
            <li>La couverture radio sur les exploitations : réseau cellulaire ou passerelle LoRaWAN.</li>
            <li>Le type de parcelles : prairies ouvertes ou zones boisées et pentues.</li>
            <li>Les marchés cibles et leurs règles de bien-être animal.</li>
            <li>Les données dont l&apos;éleveur a réellement besoin.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Questions fréquentes
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Une clôture virtuelle remplace-t-elle la clôture périphérique ?
          </h3>
          <p>
            En général, non. Les recommandations techniques conseillent le plus souvent de conserver une clôture physique le long des routes, des parcelles voisines et des limites à risque, et d&apos;utiliser la clôture virtuelle à l&apos;intérieur – pour le pâturage tournant, la protection de berges ou de zones en repousse, ou la division de grandes parcelles sans clôtures permanentes. La clôture physique reste le filet de sécurité si un collier tombe en panne ou si un animal ne réagit pas.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Combien de temps faut-il aux animaux pour apprendre une clôture virtuelle ?
          </h3>
          <p>
            Les retours d&apos;éleveurs et de conseillers parlent plutôt de jours que de semaines, selon l&apos;espèce, l&apos;âge, le comportement du troupeau et la méthode d&apos;apprentissage. Une approche courante consiste à introduire la limite virtuelle le long d&apos;une clôture physique existante, afin que les animaux associent le signal sonore à la limite avant que la clôture ne soit retirée. Le journal des signaux est le meilleur indicateur : le nombre de corrections doit baisser rapidement.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Que se passe-t-il si la batterie est vide ou si le GNSS ne capte plus ?
          </h3>
          <p>
            Un collier bien conçu se met en sécurité : batterie vide ou position douteuse, il cesse d&apos;émettre des signaux plutôt que de deviner. L&apos;animal n&apos;est alors plus retenu par ce collier, d&apos;où l&apos;importance d&apos;alertes de batterie faible anticipées, d&apos;alarmes claires en cas de perte de position et d&apos;une clôture périphérique. L&apos;état de la batterie doit être visible animal par animal, pas seulement en moyenne.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            La clôture virtuelle fonctionne-t-elle pour les ovins et les caprins ?
          </h3>
          <p>
            Certains systèmes commerciaux sont proposés pour les ovins et caprins en plus des bovins. Les petits animaux demandent des colliers plus légers, un ajustement différent et des niveaux de signal adaptés à l&apos;espèce. Leur taille limite aussi la place pour la batterie et le panneau solaire : les objectifs d&apos;autonomie sont donc plus difficiles à atteindre que pour les bovins.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous développez un produit de clôture virtuelle ou de suivi d&apos;animaux ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> –
          l&apos;électronique du collier, le GNSS et la gestion de l&apos;énergie peuvent être développés selon
          votre cahier des charges. Voir aussi{" "}
          <ArticleServiceLink locale="fr" href="/fr/virtual-fencing" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Clôture virtuelle</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Trackers GPS pour animaux</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Vous développez un collier de clôture virtuelle ?"
        description="Indiquez-nous l'espèce, les marchés cibles et l'autonomie visée – nous vous aidons sur le GNSS, la logique des signaux et l'énergie."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Clôture virtuelle"
        secondaryHref="/fr/virtual-fencing"
        secondaryLocale="fr"
      />
    </>
  );
}
