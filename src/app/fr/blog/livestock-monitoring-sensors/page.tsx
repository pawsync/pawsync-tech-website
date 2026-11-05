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
  title: "Capteurs pour le suivi du bétail : le guide pratique | PawSync",
  description:
    "Quels capteurs pour le suivi à distance du bétail ? GPS, activité, RFID, abreuvoirs, barrières et clôtures électriques : ce qu'ils mesurent, comment les alimenter et les connecter.",
  alternates: buildAlternates("fr", "blog/livestock-monitoring-sensors"),
  openGraph: buildOpenGraph("fr", "blog/livestock-monitoring-sensors", {
    url: "/blog/livestock-monitoring-sensors/og-fr.jpg",
    alt: "Pâturage avec une vache équipée d'un collier, un capteur de clôture, un capteur d'abreuvoir et une station météo solaire reliés à un mât radio : capteurs sur l'animal et sur les équipements",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/livestock-monitoring-sensors/og-fr.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "fr",
  route: "blog/livestock-monitoring-sensors",
  headline: "Capteurs pour le suivi du bétail : ce que mesure chaque capteur et comment le connecter",
  description: metadata.description ?? "",
  image: "/blog/livestock-monitoring-sensors/og-fr.jpg",
});

export default function BlogArticleLivestockMonitoringSensorsFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Capteurs pour le bétail" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Capteurs pour le suivi du bétail : ce que mesure chaque capteur et comment le connecter
        </h1>
        <ArticleDate route="blog/livestock-monitoring-sensors" locale="fr" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Un système de suivi à distance du bétail ne vaut que par les capteurs installés sur le terrain. Avant de
          choisir une plateforme ou un réseau, il est utile de savoir ce que chaque type de capteur peut – et ne
          peut pas – vous apprendre, et ce qu&apos;il coûte en énergie et en entretien.
        </p>
        <Image
          src="/blog/livestock-monitoring-sensors/hero-fr.webp"
          alt="Pâturage avec une vache équipée d'un collier, un capteur de clôture, un capteur d'abreuvoir et une station météo solaire reliés à un mât radio : capteurs sur l'animal et sur les équipements"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Deux familles : sur l&apos;animal et sur les équipements
          </h2>
          <p>
            Les capteurs <strong>portés par l&apos;animal</strong> – collier, boucle d&apos;oreille, bracelet –
            indiquent où se trouvent les animaux et comment ils se déplacent. Les capteurs <strong>sur les
            équipements</strong> – abreuvoirs, cuves, barrières, clôtures, stations météo – indiquent si ce dont
            les animaux dépendent fonctionne. Beaucoup de problèmes apparaissent d&apos;abord sur les équipements :
            un abreuvoir qui ne se remplit plus ou une clôture électrique sans tension. Ces capteurs sont souvent
            moins chers, plus faciles à alimenter et à entretenir que tout ce que porte un animal – un bon point de
            départ.
          </p>

          <figure>
            <Image
              src="/blog/livestock-monitoring-sensors/diagram-fr.webp"
              alt="Schéma : les capteurs sur l'animal (position GNSS, activité, RFID) et sur les équipements (niveau d'eau, barrières et clôtures, météo) transmettent leurs données via une passerelle ou un réseau vers un tableau de bord avec alertes"
              width={1754}
              height={897}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Deux familles de capteurs, un seul chemin : de l&apos;animal ou des équipements, via une passerelle ou un réseau, jusqu&apos;au tableau de bord et aux alertes.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Capteurs portés par l&apos;animal
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Localisation GPS / GNSS
          </h3>
          <p>
            Un récepteur GNSS dans un collier ou une boucle donne la position : où est le troupeau, un animal
            a-t-il quitté la parcelle, quelle partie de la prairie est pâturée ? En ciel dégagé, la précision est
            généralement de quelques mètres, moins bonne sous les arbres ou en terrain accidenté. Le récepteur est
            souvent le plus gros consommateur ; l&apos;intervalle de remontée est donc le principal levier sur
            l&apos;autonomie.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Accéléromètres pour l&apos;activité
          </h3>
          <p>
            Un accéléromètre trois axes mesure les mouvements. Avec un firmware adapté, il distingue des
            comportements simples – marche, station debout, couchage – et met en évidence les changements du
            rythme quotidien. Il consomme très peu et aide aussi l&apos;appareil lui-même : si l&apos;animal
            n&apos;a pas bougé, la prochaine mesure GNSS peut être sautée.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Identification RFID
          </h3>
          <p>
            Les boucles RFID basse fréquence (134,2 kHz, normes ISO 11784/11785) sont passives : sans batterie,
            elles sont lues au passage devant un lecteur, au couloir de contention, à la barrière ou sur une
            bascule. Pour les ovins et caprins, l&apos;identification électronique est d&apos;ailleurs obligatoire
            dans l&apos;UE. Elles ne localisent pas à elles seules, mais associées à un lecteur fixe, elles
            indiquent quel animal est passé où, par exemple à l&apos;abreuvoir ou sur une bascule de passage.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Capteurs sur les équipements
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Niveau des abreuvoirs et des cuves
          </h3>
          <p>
            Le contrôle de l&apos;eau est la première raison du tour quotidien des parcelles. Les capteurs à
            ultrasons mesurent sans contact depuis le dessus, mais la mousse, les débris et la condensation peuvent
            les perturber. Les capteurs de pression immergés sont robustes et précis, mais demandent un câble dans
            la cuve et une protection contre le gel. Un simple flotteur suffit pour une alarme « niveau bas »
            fiable. L&apos;information la plus utile est la tendance : un niveau qui baisse plus vite que
            d&apos;habitude signale une fuite ou un flotteur défaillant.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Barrières et clôtures électriques
          </h3>
          <p>
            Un contact à lame souple (ILS) sur une barrière signale « ouvert » ou « fermé » pendant des années sur
            une petite pile. Un contrôleur de clôture mesure la tension des impulsions sur le fil et alerte quand
            elle chute – souvent le premier signe d&apos;un contact avec la végétation ou d&apos;un fil cassé. Ces
            capteurs envoient de très petits messages, rarement : idéal pour les réseaux basse consommation.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Météo et état des prairies
          </h3>
          <p>
            Une station météo locale donne le contexte de toutes les autres données – risque de stress thermique
            par temps chaud et sans vent, ou explication d&apos;une hausse de consommation d&apos;eau. Les sondes
            d&apos;humidité du sol aident à organiser la rotation des parcelles. Voir notre page{" "}
            <ArticleServiceLink locale="fr" href="/fr/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Capteurs environnementaux</ArticleServiceLink>.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Connecter les capteurs sur toute l&apos;exploitation
          </h2>
          <p>
            Les capteurs d&apos;élevage envoient quelques octets toutes les quelques minutes ou heures, depuis des
            endroits sans électricité ni Wi-Fi. Trois options s&apos;imposent :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>LoRaWAN</strong> – l&apos;exploitation installe une ou plusieurs passerelles, que les capteurs
              atteignent sur plusieurs kilomètres en terrain dégagé. Très peu d&apos;énergie par message, pas
              d&apos;abonnement par appareil. La portée dépend fortement du relief et de la hauteur de la passerelle.
            </li>
            <li>
              <strong>Réseau cellulaire (LTE-M / NB-IoT)</strong> – aucune infrastructure à installer, mais il faut
              une couverture et un forfait par appareil.
            </li>
            <li>
              <strong>IoT par satellite</strong> – pour les sites sans couverture cellulaire ni emplacement de
              passerelle, avec un coût par message plus élevé et des volumes limités.
            </li>
          </ul>
          <p>
            Une combinaison est souvent la bonne réponse : LoRaWAN autour du siège et des parcelles principales,
            cellulaire pour les points d&apos;eau éloignés. Notre{" "}
            <Link href="/fr/blog/lorawan-farm-network-planning" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              guide pour planifier un réseau LoRaWAN sur une exploitation
            </Link>{" "}
            traite de l&apos;emplacement des passerelles.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Énergie et entretien : le coût caché
          </h2>
          <p>
            Chaque pile dans un pré est un futur déplacement. En comparant des capteurs, demandez combien de temps
            dure la batterie à l&apos;intervalle réellement nécessaire, si elle se remplace sur place et ce qui se
            passe quand elle faiblit. Les capteurs fixes peuvent souvent recevoir un petit panneau solaire, les
            appareils portés par l&apos;animal beaucoup moins. Allonger l&apos;intervalle de remontée est
            généralement le moyen le moins cher de gagner en autonomie.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Des alertes qu&apos;on continue de lire
          </h2>
          <p>
            La valeur d&apos;un système de suivi se mesure à ses alertes : eau basse, clôture sans tension,
            barrière ouverte, animal hors de la parcelle. Trop de fausses alertes, et on finit par les ignorer.
            Bonnes pratiques : n&apos;alerter qu&apos;après une durée minimale, envoyer une alerte avec rappel
            plutôt qu&apos;une avalanche, et associer à chaque alerte une action claire.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Par où commencer
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Lister les contrôles qui imposent aujourd&apos;hui un déplacement – eau, clôtures, barrières, comptage.</li>
            <li>Commencer par celui qui coûte le plus de temps ou de risque.</li>
            <li>Vérifier la couverture radio aux emplacements réels des capteurs.</li>
            <li>Fixer les intervalles et les règles d&apos;alerte, puis dimensionner les batteries.</li>
            <li>Ajouter les appareils portés par les animaux une fois le réseau et les alertes éprouvés.</li>
          </ol>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Questions fréquentes
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Quelle est la précision du suivi GPS des bovins ?
          </h3>
          <p>
            En ciel dégagé, un récepteur GNSS mono-fréquence classique dans un collier ou une boucle est précis à quelques mètres. C&apos;est suffisant pour savoir dans quelle parcelle ou quelle partie de prairie se trouve un animal, détecter une sortie de l&apos;exploitation et suivre le pâturage dans le temps. Ce n&apos;est pas suffisant pour savoir exactement quel animal se trouve à un abreuvoir donné : c&apos;est le rôle de la RFID au point d&apos;eau.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Quelle est l&apos;autonomie des capteurs d&apos;élevage ?
          </h3>
          <p>
            Elle dépend surtout de l&apos;intervalle de transmission et de la radio. Les capteurs d&apos;équipement qui envoient un petit message toutes les 15 à 60 minutes en LoRaWAN fonctionnent couramment plusieurs années sur une pile lithium. Les trackers GPS consomment beaucoup plus par message : leur autonomie va de quelques semaines à plusieurs années selon la fréquence des positions et la présence d&apos;une recharge solaire. Demandez toujours l&apos;autonomie à votre intervalle, pas le meilleur cas.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            LoRaWAN ou réseau cellulaire ?
          </h3>
          <p>
            Si la couverture cellulaire est fiable partout où vous voulez des capteurs et que les appareils sont peu nombreux, le cellulaire est le plus rapide à déployer. Si la couverture est inégale, ou si vous prévoyez des dizaines voire des centaines de capteurs, un réseau LoRaWAN propre à l&apos;exploitation est généralement moins coûteux à l&apos;usage et fonctionne là où le téléphone ne capte pas. Beaucoup d&apos;exploitations combinent les deux.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Où vont les données des capteurs ?
          </h3>
          <p>
            Tout réseau de capteurs a besoin d&apos;un back-end pour stocker, afficher et transformer les données en alertes : plateforme IoT existante, intégration à un logiciel de gestion d&apos;élevage ou application dédiée. Mieux vaut trancher tôt, car ce choix influence le format des données, le serveur de réseau et la façon dont les alertes parviennent aux bonnes personnes.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Besoin de capteurs ou de trackers pour votre exploitation ou votre produit ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> –
          nœuds capteurs, trackers et passerelles peuvent être développés selon votre cahier des charges. Voir
          aussi{" "}
          <ArticleServiceLink locale="fr" href="/fr/livestock-technology" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Surveillance à distance du bétail</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Trackers GPS pour animaux</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Vous préparez un projet de suivi du bétail ?"
        description="Dites-nous ce que vous voulez surveiller et où – nous vous aidons à choisir capteurs, connectivité et alimentation."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Suivi du bétail"
        secondaryHref="/fr/livestock-technology"
        secondaryLocale="fr"
      />
    </>
  );
}
