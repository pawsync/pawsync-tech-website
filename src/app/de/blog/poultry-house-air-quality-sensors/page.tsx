import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ArticleDate from "@/components/terrasense/ArticleDate";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";
import { blogPostingJsonLd, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Ammoniak-, CO₂- und Feuchtesensoren im Geflügelstall | PawSync",
  description:
    "Stallklima im Geflügelstall messen: Sensortypen für Ammoniak, CO₂ und Luftfeuchte, Montage auf Tierhöhe, Kalibrierung, Drift sowie Staub und Nassreinigung.",
  alternates: buildAlternates("de", "blog/poultry-house-air-quality-sensors"),
  openGraph: buildOpenGraph("de", "blog/poultry-house-air-quality-sensors"),
};

const articleJsonLd = blogPostingJsonLd({
  locale: "de",
  route: "blog/poultry-house-air-quality-sensors",
  headline: "Ammoniak-, CO₂- und Feuchtesensoren im Geflügelstall: Montage, Kalibrierung und Drift",
  description: metadata.description ?? "",
});

export default function BlogArticlePoultryAirQualitySensorsDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Stallklima-Sensoren Geflügel" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Ammoniak-, CO₂- und Feuchtesensoren im Geflügelstall: Montage, Kalibrierung und Drift
        </h1>
        <ArticleDate route="blog/poultry-house-air-quality-sensors" locale="de" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Messwerte zur Stallluft steuern die Lüftung im Geflügelstall. Ammoniak-, CO₂- und Feuchtesensoren
          reagieren aber sehr unterschiedlich auf Staub, Nässe und ammoniakhaltige Luft – und ein Sensor, der
          unbemerkt driftet, ist schlechter als gar keiner.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Warum diese drei Messgrößen zählen
          </h2>
          <p>
            Ammoniak (NH₃) entsteht in der Einstreu und steigt mit Einstreufeuchte und schlechtem Luftaustausch.
            Kohlendioxid (CO₂) stammt vor allem von den Tieren und aus gasbefeuerten Heizungen und zeigt gut, wie
            viel Frischluft tatsächlich bei den Tieren ankommt. Die relative Luftfeuchte verbindet beides: feuchte
            Luft führt zu nasser Einstreu, nasse Einstreu setzt mehr Ammoniak frei. Erst zusammen ergeben die drei
            Werte ein belastbares Bild der Lüftung.
          </p>
          <p>
            Dazu kommen rechtliche Gründe. Für Masthühner bei höherer Besatzdichte legt die EU-Richtlinie
            2007/43/EG Grenzwerte von 20 ppm Ammoniak und 3.000 ppm CO₂ fest, gemessen in Kopfhöhe der Tiere,
            sowie Vorgaben zur Luftfeuchte bei kalter Witterung. Die Richtlinie ist in nationales Recht umgesetzt,
            in Deutschland in der Tierschutz-Nutztierhaltungsverordnung. Maßgeblich sind die jeweils aktuellen
            nationalen Regeln und gegebenenfalls Vorgaben von Qualitätsprogrammen – das Prinzip aber ist klar:
            Gemessen wird, was die Tiere einatmen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Ammoniaksensoren
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Elektrochemisch oder Metalloxid?
          </h3>
          <p>
            In Tierhaltungsanlagen kommen überwiegend <strong>elektrochemische Zellen</strong> zum Einsatz: Ammoniak
            reagiert an einer Elektrode und erzeugt einen Strom proportional zur Konzentration. Sie sind selektiv
            und im niedrigen ppm-Bereich genau, haben aber eine begrenzte Lebensdauer, weil sich der Elektrolyt
            verbraucht, und ihre Empfindlichkeit ändert sich mit dem Alter. Hersteller geben eine typische
            Lebensdauer und ein Kalibrierintervall an – beides gehört in den Wartungsplan, nicht nur ins
            Datenblatt.
          </p>
          <p>
            <strong>Metalloxid-Sensoren (MOS)</strong> sind deutlich günstiger und in vielen Low-Cost-IoT-Projekten
            zu finden. Sie reagieren auf Ammoniak, aber auch auf andere Gase, und ihr Signal hängt stark von
            Temperatur und Feuchte ab. Für Trends sind sie brauchbar, für Entscheidungen gegenüber einem
            20-ppm-Grenzwert ohne sorgfältige Kompensation und regelmäßigen Abgleich mit einem Referenzgerät nicht.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Prüfen, ob der Wert stimmt
          </h3>
          <p>
            Weil elektrochemische Zellen langsam an Empfindlichkeit verlieren, kann ein Sensor plausible Werte
            liefern und trotzdem zu niedrig messen. Ein regelmäßiger <strong>Begasungstest</strong> mit bekannter
            Konzentration deckt das auf; im Betrieb ist der Vergleich mit einem Handmessgerät in Tierhöhe eine
            praktische Alternative. Wichtig ist, das Ergebnis zu dokumentieren: Erst ein Kalibrierprotokoll macht
            aus einer Zahl auf dem Bildschirm einen belastbaren Nachweis.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            CO₂-Sensoren und die Falle der Autokalibrierung
          </h2>
          <p>
            Für diese Anwendung werden meist <strong>NDIR-Sensoren</strong> (nichtdispersiv infrarot) eingesetzt.
            Sie messen, wie viel Infrarotlicht CO₂ absorbiert, verbrauchen sich nicht und eignen sich gut für die
            Dauermessung.
          </p>
          <p>
            Die Falle ist die <strong>automatische Basislinienkalibrierung (ABC)</strong>, die bei vielen günstigen
            NDIR-Modulen ab Werk aktiv ist. ABC geht davon aus, dass der Sensor alle paar Tage Außenluft mit rund
            400 ppm sieht, und setzt den tiefsten gemessenen Wert stillschweigend als Nullpunkt. Im Büro, das
            nachts leer ist, funktioniert das. In einem belegten Geflügelstall sinkt CO₂ nie auf Außenluftniveau –
            ABC verschiebt den Nullpunkt nach oben, und der Sensor misst zunehmend zu niedrig. In Tierställen sollte
            ABC daher in der Regel abgeschaltet und manuell kalibriert werden, zum Beispiel in Frischluft während
            der Serviceperiode.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Feuchte- und Temperatursensoren
          </h2>
          <p>
            Kapazitive Feuchtesensoren sind Standard: klein, sparsam und im Neuzustand genau. Im Geflügelstall
            setzen ihnen Kondensation, Staub und Ammoniak zu, was die Messwerte mit der Zeit verschieben kann. Eine
            Filterkappe (Sinter- oder Membranfilter) hält Staub und Spritzwasser ab und lässt Luft durch. Sensoren
            mit Heizfunktion können Kondenswasser austreiben. Auch hier gilt: Nur der regelmäßige Abgleich mit
            einem Referenzgerät zeigt, ob der Wert noch stimmt.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Montage: dort messen, wo die Tiere sind
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Höhe:</strong> auf Tierhöhe montieren, nicht unter der Decke, wo es bequem ist. Ammoniak und Temperatur an der Einstreu unterscheiden sich deutlich vom Firstbereich.</li>
            <li><strong>Position im Stall:</strong> nicht direkt vor Zuluftklappen, Ventilatoren oder Heizungen. Bei größeren Ställen und Tunnellüftung braucht es mehrere Messpunkte.</li>
            <li><strong>Schutz:</strong> Geflügel pickt an allem Neuen – Sensoren brauchen einen Schutzkorb, Kabel gehören außer Reichweite.</li>
            <li><strong>Zugänglichkeit:</strong> Wer prüfen, reinigen und kalibrieren muss, braucht einfachen Zugang. Ein Sensor, für den man Leiter und Werkzeug braucht, wird nicht gewartet.</li>
          </ul>
          <p>
            Mehrpunkt-Layouts, Funkprotokolle und Gateway-Planung behandeln wir in{" "}
            <Link href="/de/blog/wireless-poultry-monitoring-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Ein drahtloses Überwachungsnetz für den Geflügelstall planen
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Staub und Nassreinigung: für die Serviceperiode konstruieren
          </h2>
          <p>
            Zwischen zwei Durchgängen wird der Stall ausgemistet, nass gereinigt – oft mit Hochdruck – und
            desinfiziert. Ein Sensor, der monatelang Staub übersteht, kann bei einer einzigen Reinigung ausfallen.
            Entweder wird das Gehäuse für Strahlwasser und Desinfektionsmittel ausgelegt (passende Schutzart,
            beständige Werkstoffe), oder die Sensoren lassen sich vor der Reinigung schnell abstecken und
            entnehmen. Abnehmbare Sensorköpfe haben einen weiteren Vorteil: Sie können im leeren Stall in Ruhe
            kalibriert oder getauscht werden.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Von Messwerten zu Entscheidungen
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Werte in festen Abständen speichern (alle paar Minuten ist üblich), damit Verläufe sichtbar werden.</li>
            <li>Bei anhaltenden Werten alarmieren, nicht bei kurzen Spitzen durch geöffnete Tore.</li>
            <li>Sensoren melden, deren Werte sich nicht mehr ändern – eine flache Linie ist oft ein Defekt, keine stabile Luft.</li>
            <li>Die Kalibrierhistorie zusammen mit den Daten aufbewahren.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Häufige Fragen
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie oft sollten Ammoniaksensoren kalibriert werden?
          </h3>
          <p>
            Das vom Hersteller angegebene Intervall ist das Minimum. In der Praxis deckt ein kurzer Begasungstest oder der Vergleich mit einem Handmessgerät in der Serviceperiode – wenn der Stall leer und zugänglich ist – die meisten Abweichungen auf, bevor sie Folgen haben. Elektrochemische Zellen haben außerdem eine begrenzte Lebensdauer: Planen Sie nicht nur Kalibrierungen, sondern auch den rechtzeitigen Austausch ein.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Ab welchem Ammoniakwert wird es kritisch?
          </h3>
          <p>
            Für Masthühner bei höherer Besatzdichte legt die EU-Richtlinie 2007/43/EG einen Grenzwert von 20 ppm in Kopfhöhe der Tiere fest; in Deutschland ist dieser Wert in der Tierschutz-Nutztierhaltungsverordnung verankert. Viele Betriebe und Berater streben deutlich niedrigere Werte an, weil Ammoniak auch die Tiergesundheit und die Arbeitsbedingungen im Stall beeinflusst. Maßgeblich sind die für Ihren Betrieb geltenden Vorschriften und Programme.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Reicht ein Sensorsatz für den ganzen Stall?
          </h3>
          <p>
            In einem kleinen Stall unter Umständen ja. In langen Ställen mit Tunnellüftung unterscheiden sich die Bedingungen an der Zuluftseite und an der Ventilatorseite oft erheblich – mehrere Messpunkte ergeben ein deutlich genaueres Bild. Mehrpunkt-Layouts beschreiben wir ausführlicher in unserem Beitrag zur drahtlosen Geflügelüberwachung.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Kabelgebunden oder drahtlos?
          </h3>
          <p>
            Beides funktioniert. Kabelgebundene Sensoren passen zu Neubauten oder Ställen mit vorhandenem Steuerungsbus und kommen ganz ohne Batterien aus. Drahtlose Sensoren erleichtern Nachrüstungen und zusätzliche Messpunkte erheblich. In beiden Fällen gilt: auf Staub, Ammoniak und Nassreinigung auslegen und die Sensoren für Reinigung und Kalibrierung leicht erreichbar montieren.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Welche Daten sollte ein Stallklima-System mindestens speichern?
          </h3>
          <p>
            Neben Ammoniak, CO₂, Luftfeuchte und Temperatur je Messpunkt sind Zeitstempel, Sensorkennung und die Kalibrierhistorie wichtig. Hilfreich sind außerdem Lüftungsstufe und Heizungsstatus, weil sich Messwerte erst im Zusammenhang mit der Lüftung sinnvoll bewerten lassen. So lassen sich Auffälligkeiten später nachvollziehen – auch gegenüber Kontrollstellen oder Abnehmern.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie lange hält ein elektrochemischer Ammoniaksensor?
          </h3>
          <p>
            Die Lebensdauer gibt der Hersteller im Datenblatt an; sie hängt im Stall stark von den Bedingungen ab.
            Dauerhaft hohe Ammoniakkonzentrationen, sehr trockene oder sehr warme Luft und häufige Feuchtewechsel
            verbrauchen die Zelle schneller. Ein steigender Abgleichbedarf bei der Kalibrierung oder eine träge
            Reaktion beim Begasungstest sind typische Zeichen, dass der Austausch bevorsteht. Praktisch ist deshalb
            ein Sensordesign, bei dem sich die Messzelle oder der ganze Sensorkopf ohne Werkzeug wechseln lässt –
            idealerweise in der Serviceperiode, wenn der Stall ohnehin leer ist. Ein Ersatzsensor auf Vorrat
            verhindert, dass ein Messpunkt wochenlang ausfällt.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Sie entwickeln Sensorik für Geflügelställe?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link> –
          Sensorknoten, Gehäuse und Kalibrierfunktionen können nach Ihren Anforderungen entwickelt werden. Siehe
          auch{" "}
          <ArticleServiceLink locale="de" href="/de/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Geflügelfarm-Technologie</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Umweltsensoren für Hof & Stall</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Sie planen Stallklima-Messung für Geflügel?"
        description="Beschreiben Sie Ihre Ställe und Messaufgaben – wir helfen bei Sensorwahl, Montage und Gehäusekonzept."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Geflügelfarm-Technologie"
        secondaryHref="/de/poultry-farming"
        secondaryLocale="de"
      />
    </>
  );
}
