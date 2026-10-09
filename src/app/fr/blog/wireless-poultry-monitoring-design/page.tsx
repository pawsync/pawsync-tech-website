import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Conception de surveillance avicole sans fil | PawSync",
  description:
    "Placement des capteurs, choix du protocole et planification des passerelles pour un réseau de surveillance avicole sans fil — et pourquoi un capteur ne suffit pas.",
  alternates: buildAlternates("fr", "blog/wireless-poultry-monitoring-design"),
  openGraph: buildOpenGraph("fr", "blog/wireless-poultry-monitoring-design"),
};

export default function BlogArticleWirelessPoultryMonitoringFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "Surveillance avicole" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Planifier un réseau de surveillance sans fil pour un bâtiment avicole
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Un seul capteur suspendu au milieu d&apos;un bâtiment avicole indique la condition moyenne à cet unique point — pas ce qui se passe au sol près des ventilateurs d&apos;entrée d&apos;air, ni près du faîte où la chaleur s&apos;accumule.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Pourquoi un capteur par bâtiment ne suffit généralement pas
          </h2>
          <p>
            Les bâtiments avicoles commerciaux ne sont pas thermiquement uniformes. L&apos;air entrant par
            les entrées d&apos;air ou les ventilateurs de ventilation tunnel crée des zones plus fraîches
            près des entrées et plus chaudes plus loin dans le bâtiment ; chaleur et humidité ont tendance
            à se stratifier du sol au faîte ; et les équipements, lignes d&apos;alimentation ou rideaux
            partiels peuvent créer des poches qui se comportent différemment du reste du bâtiment. Un
            unique capteur placé au centre renvoie un chiffre réel, mais c&apos;est une moyenne qui peut
            totalement manquer un problème localisé — une zone froide près d&apos;une entrée d&apos;air
            qui fuit, ou un point chaud près d&apos;un ventilateur en panne. La mesure multipoint, avec des
            nœuds placés pour couvrir les zones qui varient réellement, capte ce qu&apos;un capteur unique
            ne peut structurellement pas voir.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Que mesurer réellement
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Température et humidité relative</strong> constituent la base — toutes deux
              affectent directement le confort et la santé des volailles, et peuvent varier sensiblement
              sur la longueur et la hauteur d&apos;un bâtiment.
            </li>
            <li>
              <strong>L&apos;ammoniac (NH₃)</strong> compte particulièrement car il irrite les voies
              respiratoires même à concentration modérée et tend à corréler avec l&apos;humidité de la
              litière et l&apos;adéquation de la ventilation — souvent l&apos;un des indicateurs les plus
              exploitables pour détecter un problème naissant avant qu&apos;il ne devienne visible dans le
              comportement du troupeau.
            </li>
            <li>
              <strong>Le CO₂</strong> est un indicateur secondaire mais utile de l&apos;adéquation générale
              de la ventilation, puisqu&apos;il reflète la quantité d&apos;air frais atteignant réellement
              un point donné du bâtiment.
            </li>
            <li>
              <strong>La vitesse de l&apos;air</strong> est mesurée moins couramment mais devient pertinente
              dans les bâtiments équipés de systèmes de réduction du stress thermique (ventilation tunnel,
              panneaux refroidissants), où le débit d&apos;air au niveau des volailles compte davantage que
              le débit nominal du ventilateur.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Choisir un protocole sans fil pour une structure métallique dense
          </h2>
          <p>
            Les bâtiments avicoles sont typiquement des structures longues, basses, à bardage métallique —
            un environnement RF peu favorable. Le Wi-Fi peut souffrir de portée et d&apos;atténuation à
            travers les éléments structurels et les équipements, surtout vers l&apos;extrémité d&apos;un
            bâtiment long. Le LoRa se comporte généralement mieux pour ce type de structure : débit plus
            faible, mais portée et pénétration nettement meilleures — ce qui convient bien mieux à des
            relevés de capteurs périodiques (température et humidité n&apos;ont pas besoin d&apos;être
            mises à jour plusieurs fois par seconde) qu&apos;à une application gourmande en bande passante.
            Dans les situations de rénovation où un bâtiment dispose déjà d&apos;un bus de contrôle câblé,
            un bus RS485/Modbus reste une solution de repli pratique et fiable, plutôt qu&apos;un système à
            remplacer pour le principe.
          </p>
          <p>
            Il n&apos;existe pas de protocole universellement correct pour chaque site — disposition de
            l&apos;exploitation, taille du bâtiment, infrastructure existante et disponibilité d&apos;Internet
            entrent tous en jeu, c&apos;est pourquoi ce choix est évalué site par site plutôt que fixé par
            défaut.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Placement des passerelles et planification de la portée
          </h2>
          <p>
            Une seule passerelle peut couvrir confortablement un bâtiment mais atteindre ses limites sur un
            site à plusieurs bâtiments avec une distance importante ou des obstructions structurelles entre
            eux. Le nombre et le placement des passerelles s&apos;adaptent au nombre de bâtiments et à leur
            disposition, pas à un chiffre fixe par exploitation — la ligne de vue et les interférences
            structurelles comptent plus que la distance brute. Pour des bâtiments très longs ou des sites
            avec des zones de couverture insuffisante, un nœud relais étend la couverture sans nécessiter
            une passerelle à chaque bâtiment.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Contrôle local vs. dépendance au cloud en cas de coupure
          </h2>
          <p>
            La logique de contrôle — commutation de relais par seuil, alarmes locales — peut être conçue
            pour s&apos;exécuter directement sur le contrôleur du bâtiment, évaluant les relevés de
            capteurs et déclenchant des réponses sans nécessiter d&apos;aller-retour vers un service cloud
            pour chaque décision. Cela compte particulièrement en cas de coupure de connexion : un système
            qui dépend du cloud pour chaque décision de contrôle cesse de fonctionner précisément quand un
            problème réseau coïncide avec un problème environnemental — le pire moment possible pour une
            panne. Les données non synchronisées pendant une coupure sont mises en file d&apos;attente
            localement et téléversées une fois la connexion rétablie, mais la logique de contrôle et
            d&apos;alerte elle-même n&apos;attend pas cette connexion.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Conception des alertes : éviter les fausses alarmes et les événements manqués
          </h2>
          <p>
            Une alerte par seuil qui se déclenche dès le franchissement d&apos;une limite est sujette aux
            déclenchements intempestifs — une porte brièvement ouverte, un capteur mesurant un courant
            d&apos;air momentané, ou un bruit ordinaire du signal. Exiger qu&apos;un relevé reste au-delà
            (ou en deçà) d&apos;un seuil pendant une durée définie avant de déclencher une alerte réduit
            nettement les fausses alarmes sans retarder sensiblement la réponse à un problème réel et
            persistant. Bien calibrer cette durée — assez longue pour filtrer le bruit, assez courte pour
            capter tôt un événement réel — est elle-même une décision de conception propre à chaque
            paramètre surveillé.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alimentation des nœuds de terrain
          </h2>
          <p>
            La plupart des nœuds de capteurs environnementaux dans un bâtiment avicole alimenté fonctionnent
            sur secteur, l&apos;infrastructure étant déjà en place. L&apos;alimentation par batterie ou
            batterie plus solaire devient pertinente pour les nœuds situés hors des circuits de câblage
            existants, ou pendant une phase de rénovation avant l&apos;installation d&apos;un câblage
            permanent — auquel cas le budget énergétique du nœud suit la même logique générale de cyclage
            que tout design de capteur sur batterie, dimensionnée selon l&apos;intervalle de rapport
            réellement nécessaire à l&apos;application plutôt qu&apos;un fonctionnement continu par défaut.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Vous planifiez un réseau de surveillance pour un site précis ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link>, nous
          vous aiderons à travailler le placement des capteurs et le choix du protocole selon la
          disposition de votre bâtiment. Pour l&apos;ensemble des solutions avicoles, voir{" "}
          <Link href="/fr/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Technologie avicole</Link> et{" "}
          <Link href="/fr/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Surveillance environnementale</Link>.
        </p>
      </article>

      <CTABanner
        heading="Vous planifiez un réseau de surveillance avicole ?"
        description="Indiquez-nous le nombre de bâtiments, leur disposition et l'infrastructure existante — nous vous aiderons sur le placement des capteurs et la connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Technologie avicole"
        secondaryHref="/fr/poultry-farming"
      />
    </>
  );
}
