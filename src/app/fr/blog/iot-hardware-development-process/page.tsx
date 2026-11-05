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
  title: "Développement de produit IoT : du prototype à la série | PawSync",
  description:
    "Les étapes du développement d'un produit électronique IoT : cahier des charges, preuve de concept, EVT, DVT et PVT, marquage CE, directive RED et Cyber Resilience Act.",
  alternates: buildAlternates("fr", "blog/iot-hardware-development-process"),
  openGraph: buildOpenGraph("fr", "blog/iot-hardware-development-process", {
    url: "/blog/iot-hardware-development-process/og-fr.jpg",
    alt: "Étapes du développement produit : preuve de concept sur platine d'essai, circuit imprimé sur mesure pour l'EVT et la DVT, boîtier fini pour la PVT",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/iot-hardware-development-process/og-fr.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "fr",
  route: "blog/iot-hardware-development-process",
  headline: "Du prototype à la série : les étapes du développement d'un produit IoT",
  description: metadata.description ?? "",
  image: "/blog/iot-hardware-development-process/og-fr.jpg",
});

export default function BlogArticleIotHardwareDevelopmentFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Du prototype à la série" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Du prototype à la série : les étapes du développement d&apos;un produit IoT
        </h1>
        <ArticleDate route="blog/iot-hardware-development-process" locale="fr" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Un prototype qui fonctionne sur l&apos;établi est une étape importante – mais c&apos;est généralement
          moins de la moitié du chemin vers un produit fabriqué en série, certifié et commercialisé. Voici à quoi
          servent les étapes suivantes, et pourquoi les sauter coûte souvent plus cher qu&apos;on ne le pense.
        </p>
        <Image
          src="/blog/iot-hardware-development-process/hero-fr.webp"
          alt="Étapes du développement produit : preuve de concept sur platine d'essai, circuit imprimé sur mesure pour l'EVT et la DVT, boîtier fini pour la PVT"
          width={1755}
          height={896}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Les étapes en un coup d&apos;œil
          </h2>
          <p>
            Le développement électronique s&apos;organise couramment en étapes successives, chacune validée avant
            la suivante. Les appellations et les quantités varient d&apos;une entreprise à l&apos;autre, mais la
            logique reste la même : chaque étape répond à une question précise avant d&apos;engager davantage de
            budget.
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Cahier des charges</strong> – que doit faire l&apos;appareil, où, combien de temps et à quel coût ?</li>
            <li><strong>Preuve de concept</strong> – le principal risque technique peut-il être levé ?</li>
            <li><strong>Prototype</strong> – une conception sur mesure fonctionne-t-elle sous une forme réaliste ?</li>
            <li><strong>EVT</strong> (validation d&apos;ingénierie) – la conception répond-elle aux exigences fonctionnelles ?</li>
            <li><strong>DVT</strong> (validation de conception) – résiste-t-elle aux essais et passe-t-elle la certification ?</li>
            <li><strong>PVT</strong> (validation de production) – l&apos;usine peut-elle la fabriquer de façon fiable en volume ?</li>
            <li><strong>Production en série</strong> – montée en cadence, avec les retours terrain qui alimentent la conception.</li>
          </ol>

          <figure>
            <Image
              src="/blog/iot-hardware-development-process/diagram-fr.webp"
              alt="Schéma des six étapes : 1 cahier des charges, 2 preuve de concept, 3 prototype, 4 EVT, 5 DVT avec certification CE, UKCA et FCC, 6 PVT ; le firmware avance en parallèle"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Les six étapes de l&apos;idée à la série, avec la certification en DVT et le firmware en parallèle.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            1. Cahier des charges : le moment le moins cher pour changer d&apos;avis
          </h2>
          <p>
            Un bon cahier des charges pour un objet connecté est précis et mesurable : autonomie à un intervalle de
            transmission donné, plage de température, indice de protection, taille et poids du boîtier, marchés
            cibles (qui déterminent les certifications), connectivité disponible sur le lieu d&apos;utilisation et
            coût unitaire visé à un volume réaliste. Des exigences floues comme « longue autonomie » ou « robuste »
            font perdre des mois plus tard. Chaque point modifie le matériel – il est bien moins coûteux de le
            changer dans un document que sur un circuit imprimé.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            2. Preuve de concept : lever d&apos;abord le plus gros risque
          </h2>
          <p>
            La preuve de concept s&apos;appuie généralement sur des cartes de développement et d&apos;évaluation.
            Elle n&apos;a pas à ressembler à un produit, mais doit répondre tôt à la question la plus risquée : la
            liaison radio atteint-elle la passerelle depuis le champ ? Le capteur détecte-t-il ce qu&apos;il doit ?
            Le budget énergétique est-il réaliste ? Rester ciblé et rapide, c&apos;est tout l&apos;intérêt.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            3. Prototype : le premier circuit imprimé sur mesure
          </h2>
          <p>
            La première carte réunit composants, alimentation, antenne et firmware dans un format proche du final.
            C&apos;est là qu&apos;apparaissent les problèmes que masquent les cartes de développement : performances
            de l&apos;antenne dans le boîtier, courant de veille dix fois supérieur au prévu à cause d&apos;un seul
            circuit qui fuit, connecteur qui ne rentre pas. Prévoyez au moins une révision de carte. Notre article
            sur la{" "}
            <Link href="/fr/blog/pet-tracker-pcb-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              conception d&apos;un circuit imprimé pour tracker animalier
            </Link>{" "}
            montre à quel point le boîtier et l&apos;antenne dictent le routage.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            4. EVT : la conception respecte-t-elle la spécification ?
          </h2>
          <p>
            Les unités EVT utilisent des composants de série et un routage quasi définitif, en petite quantité.
            Chaque exigence est testée et documentée : fonctions, consommation dans chaque mode, performances
            radio, précision des capteurs, comportement du firmware. Les défauts restent relativement peu coûteux à
            corriger. Erreur fréquente : commander dès ce stade des outillages de série coûteux, comme des moules
            d&apos;injection.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            5. DVT : essais environnementaux et certification
          </h2>
          <p>
            Les unités DVT doivent être fabriquées avec les procédés et matériaux de série, car ce sont elles qui
            passent les essais environnementaux (température, humidité, vibrations, chute, eau et poussière) ainsi
            que les pré-essais et essais de conformité. Pour un objet connecté, la certification est souvent la
            principale source de retard : mieux vaut la prévoir dès le départ.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Ce qui s&apos;applique en France et dans l&apos;UE
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Marquage CE :</strong> pour un produit radio, la directive sur les équipements radioélectriques
              (RED, 2014/53/UE) s&apos;applique, y compris, depuis août 2025, des exigences de cybersécurité pour de
              nombreux équipements radio connectés à internet.
            </li>
            <li>
              <strong>Cyber Resilience Act :</strong> ce règlement européen ajoute des obligations pour les produits
              comportant des éléments numériques, avec des exigences principales applicables à partir de décembre
              2027. Mieux vaut prévoir dès aujourd&apos;hui la mise à jour et la gestion des vulnérabilités.
            </li>
            <li>
              <strong>Export :</strong> marquage UKCA pour la Grande-Bretagne (le CE y reste accepté pour de
              nombreuses catégories), autorisation FCC (Part 15) pour les États-Unis.
            </li>
            <li>
              <strong>Batteries :</strong> les cellules et batteries lithium doivent disposer d&apos;une
              documentation d&apos;essais UN 38.3 pour être expédiées.
            </li>
          </ul>
          <p>
            Choisir des modules radio pré-certifiés, rester proche de l&apos;antenne de référence du fabricant du
            module et effectuer des pré-essais avant les essais officiels réduisent nettement le risque d&apos;un
            échec tardif.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            6. PVT : valider la production
          </h2>
          <p>
            La PVT est la première série sur la vraie ligne de production, avec outillages, bancs de test et
            procédés définitifs. La question n&apos;est plus « la conception fonctionne-t-elle ? » mais « chaque
            unité fonctionne-t-elle, et peut-on le prouver ? ». Cela suppose des choix de conception pour la
            fabrication et le test faits bien plus tôt : points de test sur la carte, banc de programmation et
            d&apos;étalonnage, test fonctionnel en fin de ligne, et traçabilité du numéro de série, de la version de
            firmware et du résultat de test de chaque unité.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Le firmware avance en parallèle du matériel
          </h2>
          <p>
            Le développement du firmware n&apos;attend pas le matériel définitif : il commence sur cartes de
            développement et mûrit à chaque itération. Deux fonctions méritent d&apos;être prévues tôt :{" "}
            <strong>les mises à jour à distance (OTA) sécurisées</strong>, pour corriger les appareils sur le terrain
            sans rappel – un point également attendu par le Cyber Resilience Act – et le <strong>diagnostic à
            distance</strong> (tension batterie, niveau de signal, causes de redémarrage).
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Les écueils les plus fréquents
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Un cahier des charges qui ignore l&apos;environnement d&apos;utilisation ou les marchés cibles.</li>
            <li>Des outillages de série commandés avant la validation de la conception.</li>
            <li>La certification traitée comme une dernière étape plutôt que comme une donnée de conception.</li>
            <li>Une autonomie mesurée sur l&apos;établi, pas dans des conditions radio et de température réelles.</li>
            <li>Aucun plan pour tester en production ni mettre à jour sur le terrain.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Agriculture et animaux : des contraintes en plus
          </h2>
          <p>
            Les appareils pour les exploitations et les animaux ajoutent leurs propres contraintes : fortes
            variations de température, boue, eau et ammoniac, animaux qui mordent, frottent et donnent des coups,
            longues distances jusqu&apos;à la passerelle, et utilisateurs qui attendent une saison entière sans
            intervention. Ces points doivent figurer dans le cahier des charges dès le premier jour. Pour la partie
            énergie, voir nos{" "}
            <Link href="/fr/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              notes sur l&apos;électronique basse consommation pour trackers
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Questions fréquentes
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Combien de temps dure le développement d&apos;un produit IoT ?
          </h3>
          <p>
            Cela dépend de la complexité, du périmètre de certification et du nombre de révisions de carte : méfiez-vous des promesses forfaitaires. Pour un objet connecté avec circuit imprimé sur mesure, radio et boîtier, le chemin du cahier des charges à la série s&apos;étend couramment sur de nombreux mois. Essais de certification, outillage du boîtier et délais d&apos;approvisionnement des composants sont souvent les postes les plus longs : ils doivent être planifiés dès le départ.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Qu&apos;est-ce qui détermine le coût de développement ?
          </h3>
          <p>
            Les principaux facteurs sont le nombre de fonctions et de capteurs, les technologies radio, les marchés cibles (chacun ajoute de la certification), les exigences d&apos;environnement comme l&apos;étanchéité, le boîtier et son outillage, et les volumes de production. Un cahier des charges clair réduit les coûts plus sûrement que tout le reste, car il évite les reconceptions.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Peut-on intégrer directement une carte de développement ou un module ?
          </h3>
          <p>
            Pour de très petites séries ou un pilote, un module prêt à l&apos;emploi ou un system-on-module peut être un raccourci judicieux. En série, une carte sur mesure est généralement plus compacte, moins chère à l&apos;unité et mieux adaptée au boîtier, à la batterie et à l&apos;antenne. Beaucoup de produits combinent les deux : un module radio pré-certifié sur une carte porteuse sur mesure.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Si le module radio est certifié, faut-il encore tester le produit ?
          </h3>
          <p>
            Oui. Un module pré-certifié simplifie la partie radio de la conformité, mais le produit fini doit satisfaire aux exigences applicables dans son ensemble – CEM, sécurité électrique et, dans l&apos;UE, la directive RED appliquée à l&apos;appareil complet. La certification du module est une avance, pas un substitut.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous préparez un objet connecté et voulez bien lancer les premières étapes ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> –
          cahier des charges, conception de cartes, firmware et prototypes peuvent être développés par projet.
          Voir aussi{" "}
          <ArticleServiceLink locale="fr" href="/fr/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Électronique sur mesure & produits IoT</ArticleServiceLink> et{" "}
          <ArticleServiceLink locale="fr" href="/fr/how-we-work" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Notre méthode</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Du prototype au produit ?"
        description="Dites-nous où en est votre projet et où il doit aller – nous vous aidons à planifier l'étape suivante."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Électronique sur mesure"
        secondaryHref="/fr/custom-electronics"
        secondaryLocale="fr"
      />
    </>
  );
}
