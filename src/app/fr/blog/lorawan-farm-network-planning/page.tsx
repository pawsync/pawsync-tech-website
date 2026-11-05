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
  title: "LoRaWAN agricole : planifier le réseau | PawSync",
  description:
    "Planifier un réseau LoRaWAN agricole : emplacement et hauteur de la passerelle, portée réaliste, bande EU868 et rapport cyclique, autonomie des capteurs, réseau public ou privé.",
  alternates: buildAlternates("fr", "blog/lorawan-farm-network-planning"),
  openGraph: buildOpenGraph("fr", "blog/lorawan-farm-network-planning", {
    url: "/blog/lorawan-farm-network-planning/og-fr.jpg",
    alt: "Illustration d'un réseau LoRaWAN agricole : une passerelle sur un silo atteint les capteurs des champs, une cuve et une station météo ; un capteur derrière une haie n'est pas atteint",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/lorawan-farm-network-planning/og-fr.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "fr",
  route: "blog/lorawan-farm-network-planning",
  headline: "Planifier un réseau LoRaWAN sur une exploitation : passerelles, portée et autonomie",
  description: metadata.description ?? "",
  image: "/blog/lorawan-farm-network-planning/og-fr.jpg",
});

export default function BlogArticleLorawanFarmNetworkFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "LoRaWAN sur l'exploitation" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Planifier un réseau LoRaWAN sur une exploitation : passerelles, portée et autonomie
        </h1>
        <ArticleDate route="blog/lorawan-farm-network-planning" locale="fr" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          LoRaWAN convient naturellement à l&apos;agriculture : petits capteurs sur batterie, quelques octets par
          message, grandes distances et pas de Wi-Fi dans les champs. Mais la fiabilité d&apos;un réseau
          d&apos;exploitation dépend bien plus de sa planification que des capteurs eux-mêmes.
        </p>
        <Image
          src="/blog/lorawan-farm-network-planning/hero-fr.webp"
          alt="Illustration d'un réseau LoRaWAN agricole : une passerelle sur un silo atteint les capteurs des champs, une cuve et une station météo ; un capteur derrière une haie n'est pas atteint"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            L&apos;architecture d&apos;un réseau LoRaWAN
          </h2>
          <p>
            Un réseau LoRaWAN comporte quatre éléments. Les <strong>objets</strong> – sondes d&apos;humidité du
            sol, capteurs de niveau, stations météo, trackers – envoient de courts messages radio. Les{" "}
            <strong>passerelles</strong> les reçoivent et les transmettent via une connexion internet. Un{" "}
            <strong>serveur de réseau</strong> élimine les doublons, gère les clés de sécurité et adapte le débit
            de chaque objet. Une <strong>application</strong> stocke les données et déclenche les alertes. Les
            objets ne sont pas liés à une passerelle précise : toute passerelle à portée peut recevoir un message,
            ce qui explique pourquoi une seconde passerelle comble si efficacement les zones blanches.
          </p>

          <figure>
            <Image
              src="/blog/lorawan-farm-network-planning/diagram-fr.webp"
              alt="Schéma d'un réseau LoRaWAN : les capteurs envoient de courts messages radio, les passerelles les relaient via Internet, un serveur réseau supprime les doublons et gère clés et débit, une application stocke les données et déclenche les alertes"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Les quatre éléments d&apos;un réseau LoRaWAN. Les capteurs ne sont liés à aucune passerelle : une deuxième passerelle peut combler les zones mal couvertes.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Portée réaliste : pourquoi le chiffre de la brochure s&apos;applique rarement
          </h2>
          <p>
            Selon les sources, la portée en zone rurale va de quelques kilomètres à plus de dix. Les deux peuvent
            être vrais. Elle dépend surtout :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>de la hauteur de l&apos;antenne de la passerelle</strong> – souvent le facteur principal. Une passerelle sur un mât ou un silo couvre bien plus que dans un bureau ;</li>
            <li><strong>du relief et des obstacles</strong> – collines, haies, bois et bâtiments atténuent ou bloquent le signal. La radio a besoin d&apos;un dégagement (zone de Fresnel), pas seulement d&apos;une vue directe ;</li>
            <li><strong>de l&apos;antenne et de la position du capteur</strong> – un capteur au sol, dans une cuve métallique ou dans un maïs haut perd beaucoup de signal ;</li>
            <li><strong>du facteur d&apos;étalement</strong> – plus il est élevé, plus la portée augmente, mais plus l&apos;émission dure, ce qui coûte en batterie et en temps d&apos;antenne.</li>
          </ul>
          <p>
            La méthode fiable est un <strong>relevé de couverture</strong> : installer une passerelle provisoire à
            l&apos;emplacement prévu, puis parcourir l&apos;exploitation avec un testeur terrain en notant le niveau
            de signal aux emplacements réels des capteurs. Une après-midi de mesures remplace beaucoup de
            suppositions.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            La bande EU868 et le rapport cyclique
          </h2>
          <p>
            En France et dans le reste de l&apos;Europe, LoRaWAN fonctionne dans la bande libre autour de 868 MHz
            (plan de fréquences EU868). La plupart des canaux sont soumis à une <strong>limite de rapport
            cyclique</strong> : sur les sous-bandes principales, un objet ne peut émettre que 1 % du temps. Pour un
            capteur qui envoie une mesure toutes les 15 minutes, aucun problème ; pour un appareil qui doit
            transmettre beaucoup de données avec un facteur d&apos;étalement élevé, c&apos;est une limite stricte.
            Pour un produit destiné aussi aux États-Unis, un autre plan (US915) s&apos;applique, avec ses propres
            règles : objets et passerelles doivent toujours correspondre au plan du pays d&apos;utilisation.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Passerelle : emplacement, alimentation et connexion
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Hauteur et position :</strong> aussi haut et central que possible – mât, silo ou toit de hangar – avec une antenne extérieure et un câble court à faibles pertes.</li>
            <li><strong>Alimentation :</strong> une passerelle fonctionne en continu. Le secteur est le plus simple ; un mât isolé demande panneau solaire et batterie dimensionnés pour les semaines les plus sombres.</li>
            <li><strong>Connexion :</strong> Ethernet depuis le bureau, modem cellulaire ou faisceau hertzien. Sans connexion, la passerelle collecte des données que personne ne voit.</li>
            <li><strong>Foudre :</strong> une antenne extérieure sur une structure haute exige une protection contre les surtensions et une mise à la terre.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Réseau public, communautaire ou privé ?
          </h2>
          <p>
            Des <strong>opérateurs nationaux</strong> proposent des réseaux LoRaWAN publics, mais la couverture
            rurale reste souvent incomplète : vérifiez sur l&apos;exploitation elle-même, pas sur la carte. Les{" "}
            <strong>réseaux communautaires</strong> comme The Things Network sont gratuits, mais limitent le temps
            d&apos;antenne par une politique d&apos;usage équitable (par exemple 30 secondes d&apos;émission
            montante par objet et par jour) et n&apos;offrent aucune garantie de service. Un{" "}
            <strong>réseau privé</strong> – vos propres passerelles et un serveur de réseau hébergé ou interne –
            donne la maîtrise complète de la couverture et des données, au prix de l&apos;infrastructure à gérer.
            Pour les exploitations dont les alertes sont critiques, un réseau privé ou hybride avec ses propres
            passerelles est généralement le choix le plus sûr.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Autonomie des capteurs LoRaWAN
          </h2>
          <p>
            Une autonomie de plusieurs années est atteignable – mais seulement avec la bonne combinaison
            d&apos;intervalle de transmission, de facteur d&apos;étalement et de capteur. Les principaux facteurs :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>la fréquence des émissions et la durée de chaque message sur les ondes ;</li>
            <li>le capteur lui-même – certains, comme les capteurs de gaz ou à ultrasons, consomment beaucoup à chaque mesure ;</li>
            <li>le courant de veille entre deux mesures, qui domine quand les envois sont rares ;</li>
            <li>la température : le froid réduit la capacité utile.</li>
          </ul>
          <p>
            Les piles lithium primaires (de type Li-SOCl₂) sont courantes pour les nœuds longue durée grâce à leur
            faible autodécharge.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Mesurer est simple, commander demande réflexion
          </h2>
          <p>
            La plupart des objets LoRaWAN sont de classe A : ils n&apos;écoutent le réseau que brièvement après leur
            propre émission. Idéal pour un capteur sur pile, mais une commande – ouvrir une vanne, démarrer une
            pompe – peut attendre le prochain message. Pour la commande, utilisez des objets de classe C (toujours
            à l&apos;écoute, donc généralement sur secteur), gardez la logique critique sur l&apos;automate local et
            confirmez toujours que l&apos;action a bien eu lieu. Pour des boucles de régulation rapides, une liaison
            filaire ou locale reste souvent le meilleur outil.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Liste de contrôle
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Cartographier les capteurs et l&apos;intervalle réellement nécessaire pour chacun.</li>
            <li>Choisir des emplacements de passerelle avec hauteur, alimentation et connexion.</li>
            <li>Faire un relevé de couverture aux emplacements réels des capteurs.</li>
            <li>Choisir le modèle : privé, communautaire, opérateur ou hybride.</li>
            <li>Vérifier le plan de fréquences de chaque objet et passerelle (EU868 en Europe).</li>
            <li>Dimensionner les batteries sur la consommation mesurée, pas sur le meilleur cas de la fiche technique.</li>
          </ol>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Questions fréquentes
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Combien de passerelles LoRaWAN faut-il pour une exploitation ?
          </h3>
          <p>
            Cela dépend bien plus du relief que de la surface. Une passerelle bien placée sur une structure haute couvre le cœur de nombreuses exploitations ; collines, bois et parcelles éloignées peuvent exiger une seconde passerelle ou un mât. Seul un relevé de couverture aux emplacements réels des capteurs permet de trancher – et comme toute passerelle peut recevoir tout objet, en ajouter une plus tard est simple.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Combien de capteurs une passerelle peut-elle gérer ?
          </h3>
          <p>
            Une passerelle LoRaWAN peut recevoir les messages d&apos;un très grand nombre d&apos;objets. Aux intervalles agricoles habituels – un petit message toutes les quelques minutes à une fois par heure – sa capacité est rarement le facteur limitant. Le temps d&apos;antenne l&apos;est davantage : les objets à facteur d&apos;étalement élevé occupent le canal plus longtemps. Une bonne couverture, qui permet des facteurs plus bas, profite donc à la fois à l&apos;autonomie et à la capacité.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            LoRaWAN peut-il transmettre des images ou de la vidéo ?
          </h3>
          <p>
            Non. LoRaWAN est conçu pour de petits messages, de quelques dizaines d&apos;octets en général. Pièges photographiques, vidéo ou mises à jour de firmware demandent une autre liaison, cellulaire ou Wi-Fi. Le schéma courant : LoRaWAN pour les données capteurs et les alertes, cellulaire pour les rares appareils qui ont besoin de débit.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            LoRaWAN est-il sécurisé ?
          </h3>
          <p>
            LoRaWAN chiffre le trafic en AES-128 à deux niveaux : une clé protège la couche réseau, une autre protège les données applicatives de bout en bout. En pratique, la sécurité dépend de la gestion des clés – une clé unique par objet, jamais imprimée sur une étiquette ni déposée dans un dépôt de code, et un serveur de réseau de confiance.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous prévoyez des capteurs ou des passerelles LoRaWAN pour une exploitation ou un produit ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> –
          nœuds capteurs et architectures réseau peuvent être développés pour votre site. Voir aussi{" "}
          <ArticleServiceLink locale="fr" href="/fr/farm-automation" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Automatisation agricole</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Capteurs environnementaux</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Vous planifiez un réseau de capteurs sur votre exploitation ?"
        description="Décrivez votre site, vos capteurs et vos besoins – nous vous aidons sur la couverture, l'énergie et les objets."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Automatisation agricole"
        secondaryHref="/fr/farm-automation"
        secondaryLocale="fr"
      />
    </>
  );
}
