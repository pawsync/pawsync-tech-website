import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Ingénierie de distributeur intelligent | PawSync",
  description:
    "Précision des portions, calibration de cellule de charge, détection de blocage et reconnaissance RFID — les choix d'ingénierie d'un distributeur intelligent.",
  alternates: buildAlternates("fr", "blog/smart-pet-feeder-engineering"),
  openGraph: buildOpenGraph("fr", "blog/smart-pet-feeder-engineering"),
};

export default function BlogArticleSmartFeederEngineeringFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Ingénierie du distributeur" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Ingénierie matérielle &amp; logicielle d&apos;un distributeur intelligent : précision des portions, détection de blocage et mesure par cellule de charge
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Un distributeur intelligent paraît simple de l&apos;extérieur — moteur, trémie, minuterie. L&apos;ingénierie qui le rend fiable se trouve dans les capteurs et le micrologiciel, pas dans le mécanisme de distribution lui-même.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Le vrai problème de mesure : mesurer une portion, pas seulement la distribuer
          </h2>
          <p>
            La façon la plus simple de construire un distributeur automatique est en boucle ouverte :
            actionner une vis sans fin ou une trappe pendant une durée fixe et supposer que cela produit
            une portion fixe. Cela fonctionne jusqu&apos;à ce que le niveau de la trémie change le débit,
            que le type d&apos;aliment change de densité, ou que le mécanisme s&apos;use légèrement — tout
            cela fait dériver une distribution chronométrée par rapport à la portion censée être délivrée.
          </p>
          <p>
            Une conception en boucle fermée — mesurer le poids réellement distribué, typiquement via une
            cellule de charge sous le bol ou la trémie, et arrêter le moteur une fois le poids cible
            atteint — est plus précise face à ces variations, au prix d&apos;une sensorique et d&apos;une
            complexité de micrologiciel supplémentaires. L&apos;approche pertinente dépend de
            l&apos;importance réelle de la précision des portions pour l&apos;usage visé.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Choix de la cellule de charge et de l&apos;amplificateur
          </h2>
          <p>
            Une cellule de charge doit être dimensionnée selon la plage de poids de portion et de trémie
            attendue — une cellule largement surdimensionnée par rapport à ce qu&apos;elle mesurera donne
            une résolution médiocre en bas de plage, tandis qu&apos;une cellule trop proche de la charge
            maximale risque d&apos;être endommagée par surcharge. La méthode standard pour lire une cellule
            de charge passe par un amplificateur analogique-numérique 24 bits dédié (le HX711 est le
            composant le plus couramment utilisé dans ce rôle pour les designs embarqués de petite taille),
            qui gère le conditionnement de signal analogique bas niveau qu&apos;un ADC de microcontrôleur
            généraliste n&apos;est pas conçu pour assurer.
          </p>
          <p>
            L&apos;isolation mécanique compte également ici : une cellule de charge qui capte aussi les
            vibrations du moteur de distribution affichera un bruit dans ses mesures qui n&apos;a rien à
            voir avec le poids d&apos;aliment réel — le moteur et le chemin de mesure doivent donc être
            découplés mécaniquement autant que le boîtier le permet.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Calibration et dérive
          </h2>
          <p>
            Le décalage de zéro d&apos;une cellule de charge se déplace avec le temps et la température —
            une calibration unique en usine ne tient pas indéfiniment. Un micrologiciel qui retare
            périodiquement (par exemple lorsque le bol est confirmé vide), plutôt que de se reposer
            uniquement sur une valeur de calibration fixée à la fabrication, est plus robuste face à cette
            dérive. C&apos;est autant une décision de micrologiciel qu&apos;une question matérielle.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Mécanique de distribution et interface moteur
          </h2>
          <p>
            Le mécanisme de distribution lui-même — vis sans fin, disque rotatif, ou trappe à gravité avec
            mécanisme de libération — relève en grande partie d&apos;une décision d&apos;ingénierie
            mécanique, généralement prise avec un partenaire de conception mécanique plutôt que dans la
            seule électronique. L&apos;électronique et le micrologiciel doivent piloter le mécanisme
            retenu : un moteur pas à pas pour une rotation précise de la vis, un motoréducteur à courant
            continu à balais avec encodeur pour un disque, ou un simple actionneur pour une trappe. Le
            choix du pilote moteur et la boucle de contrôle du micrologiciel découlent de ce choix
            mécanique.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Détection de blocage et de défaut dans le micrologiciel
          </h2>
          <p>
            Une vis sans fin bloquée ou une trappe coincée est un mode de défaillance réel, et un
            distributeur qui cesse silencieusement de distribuer sans alerter personne ne remplit pas son
            rôle. Le micrologiciel peut le détecter de deux façons : par détection de courant sur le
            pilote moteur, où un blocage se traduit par un courant soutenu sans le mouvement moteur
            attendu, ou — si un encodeur ou la cellule de charge est disponible — en surveillant le taux de
            variation de poids attendu et en signalant un écart. Une machine à états pratique distingue un
            cycle de distribution normal, une tentative de reprise après blocage suspecté, et un état de
            défaut qui déclenche une alerte plutôt que des tentatives indéfinies.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Reconnaissance RFID pour les foyers à plusieurs animaux
          </h2>
          <p>
            Lorsqu&apos;un distributeur doit reconnaître quel animal est présent — pour délivrer la bonne
            portion ou restreindre l&apos;accès —, deux approches sont réalistes. L&apos;une lit la puce
            existante de l&apos;animal, presque toujours une puce 134,2 kHz ISO 11784/11785 chez les
            animaux de compagnie ; une lecture fiable nécessite un lecteur basse fréquence compatible, pas
            un lecteur HF générique 13,56 MHz conçu pour les badges d&apos;accès. L&apos;autre utilise une
            étiquette RFID dédiée au distributeur, portée au collier, plus simple à mettre en œuvre et plus
            fiable à lire au poste d&apos;alimentation, au prix d&apos;une étiquette supplémentaire à faire
            porter à l&apos;animal.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Architecture d&apos;alimentation : secteur ou batterie
          </h2>
          <p>
            Le profil de consommation d&apos;un distributeur diffère de celui d&apos;un tracker. Là où le
            défi d&apos;un tracker est une consommation moyenne faible et régulière sur des mois, celui
            d&apos;un distributeur est un pic de courant peu fréquent mais élevé à chaque cycle de
            distribution, causé par le moteur. Une conception alimentée par le secteur contourne
            l&apos;essentiel de ce problème — une alimentation continue signifie que le pic de courant du
            moteur n&apos;est pas un enjeu d&apos;autonomie, seulement une question de câblage et de
            dimensionnement de l&apos;alimentation. Une conception sur batterie doit budgétiser
            spécifiquement ce pic de courant, pas seulement la consommation moyenne entre les distributions
            — un calcul différent des techniques de cyclage utilisées dans une conception de tracker basse
            consommation.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Connectivité et couche application
          </h2>
          <p>
            Dans la continuité de notre approche générale de la connectivité : la logique d&apos;alimentation
            programmée est plus fiable lorsqu&apos;elle s&apos;exécute localement sur le contrôleur plutôt
            que de dépendre d&apos;une connexion active à une application ou à un service cloud pour chaque
            distribution programmée. L&apos;historique d&apos;alimentation et les modifications d&apos;horaire
            à distance se synchronisent avec l&apos;application dès qu&apos;une connexion est disponible,
            mais le distributeur continue d&apos;alimenter selon le programme même si le réseau tombe
            brièvement.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous cadrez un projet de distributeur ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link>, nous vous aiderons à
          travailler la sensorique, l&apos;interface mécanique et l&apos;architecture du micrologiciel. Pour
          notre approche générale du développement de dispositifs sur mesure, voir{" "}
          <ArticleServiceLink locale="fr" href="/fr/smart-feeding" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Systèmes d&apos;alimentation intelligents</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Électronique &amp; micrologiciel sur mesure</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Un projet de distributeur à cadrer ?"
        description="Indiquez-nous vos exigences de précision de portion, le nombre d'animaux et la source d'alimentation — nous vous aiderons sur la sensorique et le micrologiciel."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Systèmes d'alimentation intelligents"
        secondaryHref="/fr/smart-feeding"
        secondaryLocale="fr"
      />
    </>
  );
}
