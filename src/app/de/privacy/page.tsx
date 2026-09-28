import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Datenschutzhinweis | PawSync",
  description: "Wie PawSync.tech mit den über das Projektanfrage-Formular übermittelten Informationen umgeht.",
  alternates: buildAlternates("de", "privacy"),
  openGraph: buildOpenGraph("de", "privacy"),
};

export default function PrivacyPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Datenschutzhinweis" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Datenschutzhinweis</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Datenschutzhinweis
        </h1>
        <p className="mt-3 text-sm text-[var(--ts-gray)]">Zuletzt aktualisiert am 28. September 2026</p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Wer diese Website betreibt
            </h2>
            <p className="mt-2">
              PawSync.tech ist eine unabhängige Website, die persönlich von Tahir Nazeer
              betrieben wird. Es handelt sich nicht um ein eingetragenes Unternehmen, und
              dieser Hinweis beschreibt sie nicht als solches.
            </p>
            <p className="mt-2">
              Die Fußzeile dieser Website nennt <strong>Pak-EL LAB</strong> als Engineering-
              Partner für PawSync.tech. Diese Nennung ist keine Aussage darüber, dass Pak-EL
              LAB PawSync.tech besitzt, betreibt oder für die Verarbeitung der über das
              Kontaktformular übermittelten Daten verantwortlich ist — PawSync.tech wird, wie
              oben beschrieben, persönlich betrieben, und die Rolle von Pak-EL LAB beschränkt
              sich auf das Engineering.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Was dieser Hinweis abdeckt
            </h2>
            <p className="mt-2">
              Dieser Hinweis beschreibt, was mit den Informationen geschieht, die Sie über das
              Projektanfrage-Formular auf dieser Website übermitteln. Er deckt keine anderen
              PawSync-Kommunikationskanäle ab, sofern nicht anders angegeben.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Informationen, die wir erheben
            </h2>
            <p className="mt-2">Wenn Sie das Projektanfrage-Formular absenden, erheben wir:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Ihren Namen, Unternehmen (optional), E-Mail-Adresse, Telefonnummer (optional) und Land</li>
              <li>Die von Ihnen gewählte Projektart und erwartete Stückzahl</li>
              <li>Ihre Projektbeschreibung</li>
              <li>Eine optionale, einzelne von Ihnen angehängte Datei (bis zu 8 MB, gängiges Dokument- oder Bildformat)</li>
              <li>
                Ein verstecktes Anti-Spam-Feld (&quot;Honeypot&quot;), das leer bleiben sollte; Übermittlungen,
                bei denen es ausgefüllt ist, werden als Spam behandelt und verworfen
              </li>
            </ul>
            <p className="mt-2">
              Diese Website verwendet keine eigenen Cookies, Analyse- oder Werbeskripte — dies
              ist eine direkt im Quellcode der Website verifizierte Tatsache. Ob die Hosting-
              Plattform auf Infrastrukturebene darüber hinaus etwas protokolliert, kann dieser
              Hinweis derzeit nicht bestätigen.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Wie Ihre Übermittlung weitergeleitet wird und wer sie sieht
            </h2>
            <p className="mt-2">
              Formularübermittlungen werden von <strong>Netlify, Inc.</strong> verarbeitet, der
              Drittplattform, die diese Website und ihre Formularverarbeitung hostet (Netlify
              Forms). Übermittlungen an das Formular <code>project-inquiry</code> werden im
              Formular-Dashboard des PawSync-Netlify-Kontos gespeichert, das so konfiguriert
              ist, dass es für jede neue Übermittlung eine E-Mail-Benachrichtigung an{" "}
              <strong>contact@pawsync.tech</strong> sendet.
            </p>
            <p className="mt-2">
              Tahir Nazeer prüft diese Benachrichtigungen persönlich. Das Postfach
              contact@pawsync.tech wurde überprüft und leitet nicht an eine andere Adresse
              weiter, und das Netlify-Konto wurde auf Integrationen über diese
              E-Mail-Benachrichtigung hinaus geprüft — es wurden keine gefunden. Der oben
              beschriebene Netlify-zu-E-Mail-Ablauf ist der vollständige Weg, den diese Daten
              nehmen.
            </p>
            <p className="mt-2">
              Wie Netlify die von ihm gespeicherten Daten selbst handhabt, unterliegt Netlifys
              eigener Datenschutzerklärung unter{" "}
              <span className="italic">netlify.com/privacy</span> — dieser Hinweis gibt
              Netlifys Bedingungen nicht wieder; bitte prüfen Sie diese direkt, um zu erfahren,
              wie Netlify selbst gespeicherte Daten verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Warum wir diese Informationen erheben
            </h2>
            <p className="mt-2">
              Die von Ihnen übermittelten Angaben und Dateien werden ausschließlich zur Prüfung
              Ihrer Projektanfrage und zur Beantwortung verwendet. Wir verkaufen diese
              Informationen nicht und nutzen sie nicht für Werbung.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Wie lange wir sie aufbewahren
            </h2>
            <p className="mt-2">
              Anfragenachrichten, hochgeladene Dateien und die zugehörigen
              Benachrichtigungs-E-Mails werden bis zu 12 Monate nach dem letzten Austausch mit
              Ihnen aufbewahrt und anschließend aus Netlify und dem E-Mail-Postfach gelöscht.
              Dies ist ein <strong>manueller</strong> Vorgang, der von Tahir Nazeer durchgeführt
              wird, keine automatische oder systemseitig erzwungene Löschung — dieser Hinweis
              behauptet nichts anderes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie können jederzeit Zugang zu, Berichtigung oder Löschung Ihrer übermittelten
              Informationen verlangen, indem Sie contact@pawsync.tech kontaktieren; solche
              Anfragen werden manuell bearbeitet. Dieser Hinweis erhebt keinen Anspruch auf
              Zertifizierung oder Einhaltung der DSGVO oder einer anderen spezifischen
              Datenschutzvorschrift.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Kontakt
            </h2>
            <p className="mt-2">
              Fragen zu diesem Hinweis oder Anliegen zu Ihren übermittelten Informationen
              können an <strong>contact@pawsync.tech</strong> gerichtet werden.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
