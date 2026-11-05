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
  title: "Capteurs NH₃, CO₂ et humidité en élevage avicole | PawSync",
  description:
    "Mesurer l'ambiance d'un bâtiment avicole : types de capteurs d'ammoniac, de CO₂ et d'humidité, installation à hauteur des animaux, étalonnage, dérive, poussière et lavage.",
  alternates: buildAlternates("fr", "blog/poultry-house-air-quality-sensors"),
  openGraph: buildOpenGraph("fr", "blog/poultry-house-air-quality-sensors", {
    url: "/blog/poultry-house-air-quality-sensors/og-fr.jpg",
    alt: "Intérieur d'un bâtiment avicole avec capteurs d'ammoniac (NH₃), de CO₂ et d'humidité relative au-dessus des volailles, entrée d'air et ventilateur d'extraction",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/poultry-house-air-quality-sensors/og-fr.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "fr",
  route: "blog/poultry-house-air-quality-sensors",
  headline: "Capteurs d'ammoniac, de CO₂ et d'humidité en bâtiment avicole : installation, étalonnage et dérive",
  description: metadata.description ?? "",
  image: "/blog/poultry-house-air-quality-sensors/og-fr.jpg",
});

export default function BlogArticlePoultryAirQualitySensorsFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Capteurs d'ambiance avicole" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Capteurs d&apos;ammoniac, de CO₂ et d&apos;humidité en bâtiment avicole : installation, étalonnage et dérive
        </h1>
        <ArticleDate route="blog/poultry-house-air-quality-sensors" locale="fr" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Les mesures d&apos;ambiance pilotent la ventilation d&apos;un bâtiment avicole. Mais les capteurs
          d&apos;ammoniac, de CO₂ et d&apos;humidité réagissent très différemment à la poussière, à
          l&apos;humidité et à l&apos;air chargé d&apos;ammoniac – et un capteur qui dérive sans qu&apos;on le
          sache est pire que pas de capteur du tout.
        </p>
        <Image
          src="/blog/poultry-house-air-quality-sensors/hero-fr.webp"
          alt="Intérieur d'un bâtiment avicole avec capteurs d'ammoniac (NH₃), de CO₂ et d'humidité relative au-dessus des volailles, entrée d'air et ventilateur d'extraction"
          width={1754}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Pourquoi ces trois mesures comptent
          </h2>
          <p>
            L&apos;ammoniac (NH₃) provient de la litière et augmente avec son humidité et un renouvellement
            d&apos;air insuffisant. Le dioxyde de carbone (CO₂) vient surtout des animaux et des chauffages au gaz :
            il indique bien la quantité d&apos;air neuf qui arrive réellement aux volailles. L&apos;humidité
            relative relie les deux : un air humide mouille la litière, et une litière humide libère davantage
            d&apos;ammoniac. Lues ensemble, ces trois valeurs en disent bien plus sur la ventilation qu&apos;une
            seule.
          </p>
          <p>
            Il y a aussi une raison réglementaire. Pour les poulets de chair élevés à des densités plus élevées, la
            directive européenne 2007/43/CE, transposée en droit français, fixe des seuils de 20 ppm
            d&apos;ammoniac et de 3 000 ppm de CO₂, mesurés à hauteur de la tête des animaux, ainsi que des
            exigences sur l&apos;humidité par temps froid. Vérifiez les règles nationales en vigueur et les cahiers
            des charges qui s&apos;appliquent à votre élevage ; le principe reste le même : la mesure doit refléter
            ce que respirent les animaux.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Capteurs d&apos;ammoniac
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Électrochimique ou oxyde métallique ?
          </h3>
          <p>
            Dans les bâtiments d&apos;élevage, la plupart des capteurs professionnels sont des{" "}
            <strong>cellules électrochimiques</strong> : l&apos;ammoniac réagit sur une électrode et produit un
            courant proportionnel à la concentration. Elles sont sélectives et précises aux faibles teneurs, mais
            leur durée de vie est limitée – l&apos;électrolyte s&apos;épuise – et leur sensibilité évolue avec
            l&apos;âge. Les fabricants indiquent une durée de vie typique et un intervalle d&apos;étalonnage : les
            deux doivent figurer dans le plan de maintenance, pas seulement dans la fiche technique.
          </p>
          <p>
            Les <strong>capteurs à oxyde métallique (MOS)</strong> sont bien moins chers et courants dans les
            projets IoT à bas coût. Ils réagissent à l&apos;ammoniac, mais aussi à d&apos;autres gaz, et leur
            signal dépend fortement de la température et de l&apos;humidité. Ils peuvent montrer une tendance,
            mais pas fonder une décision par rapport à un seuil de 20 ppm sans compensation soignée et comparaison
            régulière avec un appareil de référence.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Vérifier que la mesure est juste
          </h3>
          <p>
            Comme une cellule électrochimique perd progressivement sa sensibilité, un capteur peut afficher des
            valeurs plausibles tout en sous-estimant. Un <strong>test au gaz</strong> régulier, avec une
            concentration connue, permet de le détecter ; sur le terrain, la comparaison avec un appareil portable
            à hauteur des animaux est une alternative pratique. Dans tous les cas, notez le résultat : c&apos;est le
            registre d&apos;étalonnage qui transforme un chiffre à l&apos;écran en preuve.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Capteurs de CO₂ et le piège de l&apos;auto-étalonnage
          </h2>
          <p>
            La plupart des capteurs de CO₂ utilisés ici sont de type <strong>NDIR</strong> (infrarouge non
            dispersif) : ils mesurent l&apos;absorption de la lumière infrarouge par le CO₂. Ils ne
            s&apos;usent pas au contact du gaz et conviennent bien à la mesure en continu.
          </p>
          <p>
            Le piège est l&apos;<strong>étalonnage automatique de la ligne de base (ABC)</strong>, activé par défaut
            sur de nombreux modules bon marché. L&apos;ABC suppose que le capteur voit de l&apos;air extérieur –
            environ 400 ppm – tous les quelques jours, et recale discrètement son zéro sur la valeur la plus basse
            observée. Cela fonctionne dans un bureau vide la nuit. Dans un bâtiment avicole occupé, le CO₂ ne
            redescend jamais au niveau extérieur : l&apos;ABC décale progressivement le zéro et le capteur
            sous-estime. En bâtiment d&apos;élevage, il faut en règle générale désactiver l&apos;ABC et étalonner
            manuellement, par exemple à l&apos;air libre pendant le vide sanitaire.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Capteurs d&apos;humidité et de température
          </h2>
          <p>
            Les capteurs d&apos;humidité capacitifs sont la norme : petits, sobres et précis à l&apos;état neuf. En
            bâtiment avicole, ils subissent condensation, poussière et ammoniac, qui peuvent décaler les mesures
            avec le temps. Un capuchon filtrant (fritté ou à membrane) protège l&apos;élément sensible tout en
            laissant passer l&apos;air, et les capteurs dotés d&apos;une fonction de chauffe peuvent éliminer la
            condensation. Là encore, seule une comparaison régulière avec une référence garantit que la mesure
            reste juste.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Installation : mesurer là où sont les animaux
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Hauteur :</strong> à hauteur des animaux, pas sous le plafond par commodité. L&apos;ammoniac et la température au niveau de la litière diffèrent nettement de ceux du faîtage.</li>
            <li><strong>Position :</strong> pas directement devant les entrées d&apos;air, les ventilateurs ou les chauffages. Les grands bâtiments et la ventilation tunnel demandent plusieurs points de mesure.</li>
            <li><strong>Protection :</strong> les volailles picorent tout ce qui est nouveau ; les capteurs ont besoin d&apos;une grille, les câbles doivent être hors de portée.</li>
            <li><strong>Accès :</strong> un capteur qu&apos;on ne peut atteindre qu&apos;avec une échelle et des outils ne sera pas entretenu.</li>
          </ul>
          <p>
            Nous traitons les implantations multipoints, les protocoles radio et les passerelles dans{" "}
            <Link href="/fr/blog/wireless-poultry-monitoring-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Planifier un réseau de surveillance sans fil en bâtiment avicole
            </Link>
            .
          </p>

          <figure>
            <Image
              src="/blog/poultry-house-air-quality-sensors/diagram-fr.webp"
              alt="Schéma d'installation des capteurs en bâtiment avicole : à hauteur des animaux côté entrées, au milieu et côté ventilateurs, les mesures sont représentatives ; près du plafond ou devant une entrée d'air, elles sont trompeuses"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Mesurer là où sont les animaux : plusieurs points à hauteur des animaux le long du bâtiment, loin des entrées d&apos;air, des ventilateurs et du plafond.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Poussière et lavage : concevoir pour le vide sanitaire
          </h2>
          <p>
            Entre deux lots, le bâtiment est curé, lavé – souvent au nettoyeur haute pression – et désinfecté. Un
            capteur qui résiste des mois à la poussière peut lâcher en un seul lavage. Deux approches : un boîtier
            conçu pour les jets d&apos;eau et les désinfectants (indice de protection et matériaux adaptés), ou des
            capteurs qui se débranchent et se retirent rapidement avant le lavage. Les têtes de mesure amovibles ont
            un autre avantage : on peut les étalonner ou les remplacer à l&apos;atelier pendant le vide sanitaire.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Des mesures aux décisions
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Enregistrer les mesures à intervalle régulier (toutes les quelques minutes) pour voir les tendances.</li>
            <li>Alerter sur des valeurs durables, pas sur des pics dus à une porte ouverte.</li>
            <li>Signaler les capteurs dont la valeur ne bouge plus : une ligne plate est souvent une panne, pas un air stable.</li>
            <li>Conserver l&apos;historique d&apos;étalonnage avec les données.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Questions fréquentes
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            À quelle fréquence étalonner les capteurs d&apos;ammoniac ?
          </h3>
          <p>
            L&apos;intervalle indiqué par le fabricant est un minimum. En pratique, un test au gaz rapide ou une comparaison avec un appareil portable pendant le vide sanitaire – quand le bâtiment est vide et accessible – détecte la plupart des dérives avant qu&apos;elles ne posent problème. Les cellules électrochimiques ont aussi une durée de vie limitée : prévoyez leur remplacement, pas seulement leur étalonnage.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            À partir de quel taux d&apos;ammoniac faut-il s&apos;inquiéter ?
          </h3>
          <p>
            Pour les poulets de chair à densité plus élevée, la directive 2007/43/CE fixe une limite de 20 ppm à hauteur de la tête des animaux. Beaucoup d&apos;éleveurs et de conseillers visent des valeurs nettement inférieures, car l&apos;ammoniac affecte aussi la santé des volailles et le confort de travail. Référez-vous aux règles et cahiers des charges applicables à votre élevage.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Un seul jeu de capteurs suffit-il pour tout le bâtiment ?
          </h3>
          <p>
            Dans un petit bâtiment, éventuellement. Dans un bâtiment long en ventilation tunnel, les conditions côté entrées d&apos;air et côté ventilateurs peuvent différer nettement : plusieurs points de mesure donnent une image bien plus juste. Notre article sur les réseaux de surveillance avicole sans fil détaille les implantations multipoints.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Capteurs filaires ou sans fil ?
          </h3>
          <p>
            Les deux fonctionnent. Les capteurs filaires conviennent aux bâtiments neufs ou déjà équipés d&apos;un bus de terrain, sans aucune pile. Les capteurs sans fil facilitent beaucoup la rénovation et l&apos;ajout de points de mesure. Dans tous les cas, concevez pour la poussière, l&apos;ammoniac et le lavage, et rendez les capteurs faciles d&apos;accès pour le nettoyage et l&apos;étalonnage.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous concevez des capteurs pour bâtiments avicoles ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> –
          nœuds capteurs, boîtiers et fonctions d&apos;étalonnage peuvent être développés selon votre cahier des
          charges. Voir aussi{" "}
          <ArticleServiceLink locale="fr" href="/fr/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Technologie avicole</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Capteurs environnementaux</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Vous préparez la mesure d'ambiance en élevage avicole ?"
        description="Décrivez vos bâtiments et ce que vous devez mesurer – nous vous aidons sur le choix des capteurs, l'installation et le boîtier."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Technologie avicole"
        secondaryHref="/fr/poultry-farming"
        secondaryLocale="fr"
      />
    </>
  );
}
