import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "GNSS + LoRa vs. GNSS + LTE-M pour le suivi des animaux | PawSync",
  description:
    "Le GNSS détermine la position ; LoRa et LTE-M sont des couches de communication distinctes qui transmettent cette position. Une comparaison pratique pour le matériel de suivi animal.",
  alternates: buildAlternates("fr", "blog/gnss-lora-vs-gnss-ltem"),
  openGraph: buildOpenGraph("fr", "blog/gnss-lora-vs-gnss-ltem"),
};

export default function BlogArticleGnssConnectivityFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Blog", href: "/fr/blog" }, { label: "GNSS + LoRa vs. GNSS + LTE-M" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Notes d&apos;ingénierie</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          GNSS + LoRa vs. GNSS + LTE-M pour le suivi des animaux
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Une clarification sur deux problèmes différents souvent confondus dans les textes marketing du suivi animal — et comment vraiment choisir entre les deux.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            &quot;GPS vs. LoRa&quot; est une formulation courante dans les textes produits liés au suivi
            animal, mais elle compare deux éléments qui résolvent des problèmes entièrement différents. Le
            GNSS (le GPS, Galileo, GLONASS et BeiDou sont tous des constellations GNSS) détermine{" "}
            <em>où</em> se trouve un appareil en recevant des signaux temporels émis par des satellites et
            en calculant une position. Il ne transmet rien à personne — c&apos;est un processus de réception
            pure qui se déroule entièrement sur l&apos;appareil. LoRa, en revanche, est un module radio de
            communication : son rôle est de faire sortir cette position (ou toute autre donnée) de
            l&apos;appareil vers un endroit utile, comme une application mobile ou un tableau de bord cloud.
            Un tracker a besoin des deux — un moyen de connaître sa position, et un moyen de la transmettre
            — et ce sont deux décisions de conception indépendantes.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            La vraie décision : quel module radio transmet la position ?
          </h2>
          <p>
            Une fois qu&apos;un appareil dispose d&apos;une position GNSS, il lui faut une liaison de
            communication pour la transmettre. Pour les trackers animaliers, les deux choix les plus
            courants sont LoRa (généralement via LoRaWAN, le protocole de couche réseau maintenu par la LoRa
            Alliance) et LTE-M (LTE Cat-M1, une norme cellulaire IoT basse consommation définie par le 3GPP
            à partir de la Release 13). Les deux sont conçus pour des transmissions peu fréquentes et de
            faible volume — une position GPS ne représente que quelques octets — plutôt que pour un flux
            continu, ce qui permet de maîtriser la consommation d&apos;énergie d&apos;un collier ou d&apos;une
            balise alimentés par batterie.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LoRa / LoRaWAN
          </h3>
          <p>
            LoRa fonctionne dans des bandes radio ISM sans licence (863–870 MHz dans l&apos;UE, 902–928 MHz
            aux États-Unis, avec des variations régionales ailleurs) et est généralement déployé en
            topologie en étoile, où les appareils envoient des données vers une passerelle que vous
            possédez ou vers un réseau public partagé. Ses avantages pratiques sont une faible consommation
            à l&apos;émission et l&apos;absence de frais récurrents auprès d&apos;un opérateur. Sa limite est
            la couverture : un appareil n&apos;est joignable que s&apos;il se trouve à portée d&apos;une
            passerelle — souvent plusieurs kilomètres en terrain dégagé avec ligne de vue directe, mais
            nettement moins en présence de collines, d&apos;arbres ou de bâtiments. Les réglementations sur
            les bandes sans licence imposent aussi, dans de nombreuses régions, des limites de cycle
            d&apos;utilisation à la fréquence d&apos;émission, ce qui renforce l&apos;adéquation de LoRa avec
            des transmissions périodiques et peu fréquentes plutôt qu&apos;avec des mises à jour quasi
            continues.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LTE-M
          </h3>
          <p>
            LTE-M s&apos;appuie sur l&apos;infrastructure mobile existante, si bien que la couverture s&apos;étend
            partout où l&apos;opérateur capte un signal — sans passerelle à déployer ni à entretenir. Cette
            commodité a un coût récurrent : une carte SIM et un forfait de données par appareil, ainsi
            qu&apos;une dépendance à la couverture de l&apos;opérateur dans la zone précise où évoluent les
            animaux (des zones sans couverture subsistent encore en pâturage ou en zone d&apos;élevage
            éloignée). La consommation d&apos;énergie par transmission est généralement plus élevée qu&apos;avec
            LoRa, bien que les modules LTE-M modernes réduisent nettement cet écart grâce au Power Saving
            Mode (PSM) et à l&apos;eDRX (Discontinuous Reception étendu) — tous deux définis dans la norme
            3GPP — qui permettent au modem de rester en veille profonde entre des connexions programmées au
            réseau.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Comment choisir concrètement
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Portée par rapport à l&apos;infrastructure.</strong> Si les animaux restent à portée de
              passerelles que vous pouvez installer — une exploitation, une zone de pâturage fixe — LoRa
              évite les coûts récurrents. S&apos;ils se déplacent au-delà de toute infrastructure que vous
              contrôlez, la couverture opérateur de LTE-M est généralement la seule option qui continue de
              fonctionner.
            </li>
            <li>
              <strong>Structure de coûts.</strong> LoRa échange un coût d&apos;investissement et
              d&apos;entretien de passerelle contre un coût quasi nul par message. LTE-M échange cette
              infrastructure initiale contre un forfait de données récurrent par appareil — le bon choix
              dépend de la taille du parc et de la manière dont le budget est structuré.
            </li>
            <li>
              <strong>Couverture réelle, pas cartes de couverture.</strong> Les cartes de couverture
              cellulaire en zone rurale sont souvent optimistes ; il en va de même pour la portée supposée
              des passerelles LoRa une fois le relief et la végétation réels pris en compte. Dans les deux
              cas, un test de liaison sur site est utile avant de s&apos;engager sur une conception à
              l&apos;échelle du parc.
            </li>
            <li>
              <strong>Budget énergétique.</strong> À fréquence de transmission égale, les transmissions LoRa
              consomment généralement moins d&apos;énergie qu&apos;une connexion LTE-M, un écart qui compte
              d&apos;autant plus que la fréquence de transmission augmente. À fréquence faible et avec un
              PSM/eDRX bien réglé, l&apos;écart se réduit.
            </li>
          </ul>

          <p>
            Aucune des deux technologies ne remplace le GNSS, et aucune n&apos;est universellement
            &quot;meilleure&quot; que l&apos;autre — elles répondent à une question différente (comment faire
            sortir les données ?) de celle du GNSS (où suis-je ?). La bonne combinaison — GNSS + LoRa ou
            GNSS + LTE-M — dépend de l&apos;endroit où les animaux se déplacent réellement par rapport à
            l&apos;infrastructure et à la couverture disponibles à cet endroit, et de la manière dont le
            coût est le mieux structuré pour le parc concerné.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Une question précise sur la portée, le terrain ou la taille du parc ?{" "}
          <Link href="/fr/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Contactez-nous</Link> et nous vous aiderons à cadrer la bonne approche de connectivité.
        </p>
      </article>

      <CTABanner
        heading="Vous cadrez un dispositif de suivi ?"
        description="Parlez-nous des animaux, du terrain et de l'infrastructure avec lesquels vous travaillez — nous vous aiderons à évaluer les compromis de connectivité."
        primaryLabel="Démarrer votre projet"
        primaryHref="/fr/contact"
        secondaryLabel="Retour au blog"
        secondaryHref="/fr/blog"
      />
    </>
  );
}
