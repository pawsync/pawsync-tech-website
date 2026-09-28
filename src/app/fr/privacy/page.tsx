import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Avis de confidentialité | PawSync",
  description: "Comment PawSync.tech traite les informations que vous transmettez via le formulaire de demande de projet.",
  alternates: buildAlternates("fr", "privacy"),
  openGraph: buildOpenGraph("fr", "privacy"),
};

export default function PrivacyPageFr() {
  return (
    <>
      <Breadcrumb locale="fr" items={[{ label: "Avis de confidentialité" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Avis de confidentialité</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Avis de confidentialité
        </h1>
        <p className="mt-3 text-sm text-[var(--ts-gray)]">Dernière mise à jour le 28 septembre 2026</p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Qui exploite ce site
            </h2>
            <p className="mt-2">
              PawSync.tech est un site indépendant exploité personnellement par Tahir Nazeer.
              Il ne s&apos;agit pas d&apos;une société enregistrée, et cet avis ne le présente
              pas comme telle.
            </p>
            <p className="mt-2">
              Le pied de page de ce site mentionne <strong>Pak-EL LAB</strong> pour le travail
              d&apos;ingénierie réalisé sur PawSync.tech. Cette mention n&apos;affirme pas que
              Pak-EL LAB possède, exploite ou est responsable du traitement des données
              transmises via le formulaire de contact — PawSync.tech est exploité
              personnellement, comme indiqué ci-dessus, et le rôle de Pak-EL LAB se limite à
              l&apos;ingénierie.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Ce que couvre cet avis
            </h2>
            <p className="mt-2">
              Cet avis décrit ce qu&apos;il advient des informations que vous transmettez via
              le formulaire de demande de projet de ce site. Il ne couvre aucun autre canal de
              communication PawSync, sauf indication contraire.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Informations que nous collectons
            </h2>
            <p className="mt-2">Lorsque vous soumettez le formulaire de demande de projet, nous collectons :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Votre nom, votre entreprise (facultatif), votre adresse e-mail, votre numéro de téléphone (facultatif) et votre pays</li>
              <li>Le type de projet et la quantité prévue que vous sélectionnez</li>
              <li>La description de votre projet</li>
              <li>Un seul fichier facultatif que vous choisissez de joindre (jusqu&apos;à 8 Mo, format de document ou d&apos;image courant)</li>
              <li>
                Un champ anti-spam caché (&quot;pot de miel&quot;) qui doit rester vide ; les
                soumissions où il est rempli sont traitées comme du spam et écartées
              </li>
            </ul>
            <p className="mt-2">
              Ce site n&apos;utilise pas de cookies, d&apos;analyse ni de scripts publicitaires
              qui lui soient propres — c&apos;est un fait vérifié directement dans le code du
              site. Ce que la plateforme d&apos;hébergement enregistre au niveau de
              l&apos;infrastructure au-delà de cela ne peut pas être confirmé par cet avis pour
              l&apos;instant.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Comment votre soumission est transmise et qui la voit
            </h2>
            <p className="mt-2">
              Les soumissions de formulaire sont traitées par <strong>Netlify, Inc.</strong>, la
              plateforme tierce qui héberge ce site et son infrastructure de traitement de
              formulaires (Netlify Forms). Les soumissions au formulaire{" "}
              <code>project-inquiry</code> sont stockées dans le tableau de bord Formulaires du
              compte Netlify de PawSync, configuré pour envoyer une notification par e-mail à{" "}
              <strong>contact@pawsync.tech</strong> pour chaque nouvelle soumission.
            </p>
            <p className="mt-2">
              Tahir Nazeer examine personnellement ces notifications. La boîte
              contact@pawsync.tech a été vérifiée et ne transfère vers aucune autre adresse,
              et le compte Netlify a été vérifié pour toute intégration au-delà de cette
              notification par e-mail — aucune n&apos;a été trouvée. Le flux
              Netlify-vers-e-mail décrit ci-dessus est le trajet complet de ces données.
            </p>
            <p className="mt-2">
              La manière dont Netlify traite lui-même les données qu&apos;il stocke relève de
              la politique de confidentialité propre à Netlify, disponible sur{" "}
              <span className="italic">netlify.com/privacy</span> — cet avis ne reformule pas
              les conditions de Netlify ; veuillez les consulter directement pour savoir
              comment Netlify traite lui-même les données stockées.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Pourquoi nous collectons ces informations
            </h2>
            <p className="mt-2">
              Les informations et le fichier que vous transmettez servent uniquement à
              examiner votre demande de projet et à vous répondre. Nous ne vendons pas ces
              informations et ne les utilisons pas à des fins publicitaires.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Combien de temps nous les conservons
            </h2>
            <p className="mt-2">
              Les messages de demande, les fichiers téléversés et les e-mails de notification
              correspondants sont conservés jusqu&apos;à 12 mois après le dernier échange avec
              vous, puis supprimés de Netlify et de la boîte e-mail. Il s&apos;agit d&apos;un
              processus <strong>manuel</strong> effectué par Tahir Nazeer, et non
              d&apos;une suppression automatique ou imposée par un système — cet avis
              n&apos;affirme pas le contraire.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Vos droits
            </h2>
            <p className="mt-2">
              Vous pouvez demander l&apos;accès à, la correction de, ou la suppression de vos
              informations transmises à tout moment en contactant contact@pawsync.tech ; ces
              demandes sont traitées manuellement. Cet avis ne revendique aucune certification
              ni conformité au RGPD ou à toute autre réglementation de confidentialité
              spécifique.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Contact
            </h2>
            <p className="mt-2">
              Les questions relatives à cet avis, ou les demandes concernant vos informations
              transmises, peuvent être adressées à <strong>contact@pawsync.tech</strong>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
