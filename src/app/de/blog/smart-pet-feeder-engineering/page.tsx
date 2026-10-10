import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Hardware- & Firmware-Engineering Futterautomat | PawSync",
  description:
    "Portionsgenauigkeit, Wägezellen-Kalibrierung, Störungserkennung und RFID-Erkennung — die Engineering-Entscheidungen hinter einem intelligenten Futterautomaten.",
  alternates: buildAlternates("de", "blog/smart-pet-feeder-engineering"),
  openGraph: buildOpenGraph("de", "blog/smart-pet-feeder-engineering"),
};

export default function BlogArticleSmartFeederEngineeringDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Futterautomaten-Engineering" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Hardware- &amp; Firmware-Engineering für intelligente Futterautomaten: Portionsgenauigkeit, Störungserkennung und Wägesensorik
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein intelligenter Futterautomat wirkt von außen einfach — Motor, Behälter, Zeitschaltung. Die Technik, die ihn zuverlässig macht, steckt in der Sensorik und der Firmware, nicht im Dosiermechanismus selbst.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Das eigentliche Sensorproblem: eine Portion messen, nicht nur ausgeben
          </h2>
          <p>
            Der einfachste Weg, einen automatischen Futterautomaten zu bauen, ist offene Steuerung: eine
            Förderschnecke oder eine Klappe für eine feste Zeit betätigen und annehmen, dass dabei eine
            feste Portion entsteht. Das funktioniert, bis der Füllstand im Behälter die Durchflussrate
            ändert, sich die Futterart in der Dichte unterscheidet oder der Mechanismus sich leicht
            abnutzt — all das lässt eine zeitgesteuerte Ausgabe von der eigentlich vorgesehenen Portion
            abweichen.
          </p>
          <p>
            Eine geschlossene Regelung — die tatsächlich ausgegebene Masse messen, typischerweise über eine
            Wägezelle unter Napf oder Behälter, und den Motor stoppen, sobald die Zielmenge erreicht ist —
            ist über diese Schwankungen hinweg genauer, auf Kosten zusätzlicher Sensorik und
            Firmware-Komplexität. Welcher Ansatz passend ist, hängt davon ab, wie wichtig Portionsgenauigkeit
            für den jeweiligen Einsatzfall tatsächlich ist.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Wahl von Wägezelle und Verstärker
          </h2>
          <p>
            Eine Wägezelle muss auf den erwarteten Portions- und Behältergewichtsbereich dimensioniert
            sein — eine Zelle, die weit über das hinaus ausgelegt ist, was sie je messen wird, liefert im
            unteren Bereich eine schlechte Auflösung, während eine zu nah an der Maximallast dimensionierte
            Zelle Überlastschäden riskiert. Der Standardweg, eine Wägezelle auszulesen, führt über einen
            dedizierten 24-Bit-Analog-Digital-Verstärker (der HX711 ist das in dieser Rolle für kleine
            Embedded-Designs am häufigsten eingesetzte Bauteil), der die analoge Signalaufbereitung
            übernimmt, für die ein allgemeiner Mikrocontroller-ADC nicht ausgelegt ist.
          </p>
          <p>
            Auch die mechanische Entkopplung spielt eine Rolle: Eine Wägezelle, die auch Vibrationen des
            Dosiermotors aufnimmt, zeigt Störungen in den Messwerten, die mit dem tatsächlichen
            Futtergewicht nichts zu tun haben — Motor und Messpfad müssen also so weit wie das Gehäuse es
            zulässt mechanisch entkoppelt sein.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Kalibrierung und Drift
          </h2>
          <p>
            Der Nullpunkt einer Wägezelle verschiebt sich mit der Zeit und mit der Temperatur — eine
            einmalige Werkskalibrierung hält nicht unbegrenzt. Firmware, die regelmäßig neu tariert (zum
            Beispiel, wenn der Napf bestätigt leer ist), statt sich allein auf einen bei der Fertigung
            festgelegten Kalibrierwert zu verlassen, ist robuster gegenüber dieser Drift. Das ist ebenso
            eine Firmware-Entscheidung wie eine Hardware-Frage.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Dosiermechanik und die Motorschnittstelle
          </h2>
          <p>
            Der Dosiermechanismus selbst — Förderschnecke, Drehscheibe oder Schwerkraftklappe mit
            Auslösemechanismus — ist größtenteils eine mechanische Konstruktionsentscheidung, meist
            gemeinsam mit einem mechanischen Entwicklungspartner getroffen und nicht rein in der
            Elektronik. Elektronik und Firmware müssen den gewählten Mechanismus ansteuern: ein
            Schrittmotor für präzise Schneckendrehung, ein bürstenbehafteter Gleichstrom-Getriebemotor mit
            Encoder für eine Drehscheibe, oder ein einfacher Aktuator für eine Klappe. Motortreiberwahl und
            Regelkreis der Firmware ergeben sich aus dieser mechanischen Entscheidung.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Störungs- und Fehlererkennung in der Firmware
          </h2>
          <p>
            Eine blockierte Förderschnecke oder eine klemmende Klappe ist ein reales Fehlerbild, und ein
            Futterautomat, der stillschweigend aufhört auszugeben, ohne jemanden zu alarmieren, erfüllt
            seinen Zweck nicht. Die Firmware kann dies auf zwei Arten erkennen: über Stromerfassung am
            Motortreiber, wo sich eine Blockade als anhaltender Stromfluss ohne die erwartete
            Motorbewegung zeigt, oder — falls ein Encoder oder die Wägezelle verfügbar ist — über die
            Beobachtung der erwarteten Gewichtsänderungsrate und das Erkennen einer Abweichung. Eine
            praxisnahe Zustandsmaschine unterscheidet einen normalen Ausgabezyklus, einen
            Wiederholungsversuch nach vermuteter Blockade und einen Fehlerzustand, der einen Alarm statt
            endloser Wiederholungen auslöst.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            RFID-Erkennung für Mehrtierhaushalte
          </h2>
          <p>
            Soll ein Futterautomat erkennen, welches Tier anwesend ist — um die richtige Portion
            auszugeben oder den Zugang zu beschränken —, gibt es zwei praxistaugliche Ansätze. Der eine
            liest den vorhandenen Mikrochip des Tieres aus, bei Heimtieren fast immer ein
            134,2-kHz-Chip nach ISO 11784/11785; dafür wird ein kompatibles Niederfrequenz-Lesegerät
            benötigt, kein generisches 13,56-MHz-HF-Lesegerät, wie es für Zutrittskarten gebaut ist. Der
            andere verwendet einen futterautomaten-spezifischen RFID-Anhänger am Halsband, was einfacher
            umzusetzen und an der Futterstation zuverlässiger auszulesen ist — auf Kosten eines
            zusätzlichen Anhängers, den das Tier tragen muss.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Energiearchitektur: Netz- oder Akkubetrieb
          </h2>
          <p>
            Das Lastprofil eines Futterautomaten unterscheidet sich von dem eines Trackers. Während die
            Herausforderung eines Trackers ein niedriger, gleichmäßiger Durchschnittsverbrauch über Monate
            ist, besteht die Herausforderung eines Futterautomaten in einem seltenen, aber hohen
            Spitzenstrom während jedes Ausgabezyklus, verursacht durch den Motor. Ein netzbetriebenes
            Design umgeht das größtenteils — durchgehende Stromversorgung bedeutet, dass der Spitzenstrom
            des Motors kein Akkulaufzeit-Thema ist, sondern nur eine Frage der Verkabelung und der
            Dimensionierung der Stromversorgung. Ein akkubetriebenes Design muss gezielt für diesen
            Spitzenstrom budgetieren, nicht nur für den Durchschnittsverbrauch zwischen den Ausgaben — eine
            andere Rechnung als die Duty-Cycling-Techniken eines stromsparenden Tracker-Designs.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Konnektivität und die App-Ebene
          </h2>
          <p>
            Konsistent mit unserem generellen Ansatz bei Konnektivität: Zeitgesteuerte Fütterungslogik ist
            zuverlässiger, wenn sie lokal auf dem Controller läuft, statt für jede geplante Ausgabe von
            einer aktiven Verbindung zu App oder Cloud-Dienst abhängig zu sein. Fütterungsverlauf und
            Änderungen am Zeitplan aus der Ferne synchronisieren sich mit der App, sobald eine Verbindung
            besteht — der Futterautomat füttert aber planmäßig weiter, auch wenn das Netzwerk kurzzeitig
            ausfällt.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planen Sie ein Futterautomaten-Projekt?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link>, wir helfen Ihnen, Sensorik,
          Mechanikschnittstelle und Firmware-Architektur durchzudenken. Wie PawSync individuelle
          Geräteentwicklung allgemein angeht, zeigen{" "}
          <ArticleServiceLink locale="de" href="/de/smart-feeding" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Intelligente Fütterungssysteme</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kundenspezifische Elektronik &amp; Firmware</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Haben Sie ein Futterautomaten-Projekt zu planen?"
        description="Nennen Sie uns Ihre Anforderungen an Portionsgenauigkeit, Tieranzahl und Stromquelle — wir helfen bei Sensorik und Firmware-Design."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Intelligente Fütterungssysteme"
        secondaryHref="/de/smart-feeding"
        secondaryLocale="de"
      />
    </>
  );
}
