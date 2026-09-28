import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "GNSS + LoRa vs. GNSS + LTE-M für Tier-Tracking | PawSync",
  description:
    "GNSS bestimmt die Position; LoRa und LTE-M sind separate Kommunikationsebenen, die diese Position vom Gerät übertragen. Ein praktischer Vergleich für Tier-Tracking-Hardware.",
  alternates: buildAlternates("de", "blog/gnss-lora-vs-gnss-ltem"),
  openGraph: buildOpenGraph("de", "blog/gnss-lora-vs-gnss-ltem"),
};

export default function BlogArticleGnssConnectivityDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "GNSS + LoRa vs. GNSS + LTE-M" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          GNSS + LoRa vs. GNSS + LTE-M für Tier-Tracking
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Eine Klarstellung zu zwei unterschiedlichen Problemen, die in der Marketingsprache für Tier-Tracking oft vermischt werden — und wie man wirklich zwischen ihnen wählt.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            &quot;GPS vs. LoRa&quot; ist eine gängige Formulierung in Produkttexten für Tier-Tracking, doch sie
            vergleicht zwei Dinge, die völlig unterschiedliche Probleme lösen. GNSS (GPS, Galileo, GLONASS
            und BeiDou sind alle GNSS-Konstellationen) bestimmt, <em>wo</em> sich ein Gerät befindet, indem es
            Zeitsignale von Satelliten empfängt und daraus eine Positionsbestimmung berechnet. Dabei wird
            nichts an irgendjemanden gesendet — es ist ein reiner Empfangsvorgang, der vollständig auf dem
            Gerät stattfindet. LoRa hingegen ist ein Funkmodul für die Kommunikation: seine Aufgabe ist es,
            diese Positionsbestimmung (oder andere Daten) vom Gerät weg an einen nützlichen Ort zu bringen,
            etwa eine App oder ein Cloud-Dashboard. Ein Tracker benötigt beides — eine Möglichkeit, den
            eigenen Standort zu kennen, und eine Möglichkeit, ihn zu melden — und das sind zwei unabhängige
            Designentscheidungen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Die eigentliche Entscheidung: welches Funkmodul meldet die Position?
          </h2>
          <p>
            Sobald ein Gerät eine GNSS-Position hat, benötigt es eine Kommunikationsverbindung, um sie zu
            übertragen. Für Tier-Tracker sind die zwei gängigsten Optionen LoRa (meist als LoRaWAN, das von
            der LoRa Alliance gepflegte Netzwerkprotokoll) und LTE-M (LTE Cat-M1, ein stromsparender
            Mobilfunk-IoT-Standard, definiert von 3GPP ab Release 13). Beide sind für seltene Übertragungen
            mit kleinem Datenvolumen ausgelegt — eine GPS-Position umfasst nur wenige Byte — statt für
            kontinuierliches Streaming, was den Energieverbrauch für ein batteriebetriebenes Halsband oder
            Tag überschaubar hält.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LoRa / LoRaWAN
          </h3>
          <p>
            LoRa arbeitet in lizenzfreien ISM-Funkbändern (863–870 MHz in der EU, 902–928 MHz in den USA,
            mit regionalen Abweichungen andernorts) und wird typischerweise in einer Stern-Topologie
            eingesetzt, bei der Geräte Daten an ein selbst betriebenes oder ein öffentlich geteiltes
            Gateway senden. Praktische Vorteile sind ein geringer Sendeenergiebedarf und keine laufenden
            Gebühren für einen Mobilfunkanbieter. Die Einschränkung ist die Reichweite: Ein Gerät ist nur
            erreichbar, wenn ein Gateway in Reichweite ist — bei offenem Gelände mit Sichtlinie oft mit
            mehreren Kilometern angegeben, aber deutlich geringer bei Hügeln, Bäumen oder Gebäuden im Weg.
            Vorschriften für lizenzfreie Bänder schreiben in vielen Regionen zudem Duty-Cycle-Grenzen für die
            Sendehäufigkeit vor, was LoRas Eignung für periodische, selten aktualisierte Meldungen statt
            nahezu kontinuierlicher Updates unterstreicht.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LTE-M
          </h3>
          <p>
            LTE-M nutzt die bestehende Mobilfunkinfrastruktur, sodass die Abdeckung überall dort reicht, wo
            der Anbieter Empfang hat — ohne ein eigenes Gateway aufzubauen oder zu warten. Diese Bequemlichkeit
            hat laufende Kosten zur Folge: eine SIM-Karte und einen Datentarif pro Gerät, sowie eine
            Abhängigkeit von der Mobilfunkabdeckung in dem konkreten Gebiet, in dem sich die Tiere bewegen
            (in abgelegenen Weiden oder Weideflächen bestehen weiterhin Abdeckungslücken). Der
            Energieverbrauch pro Übertragung ist generell höher als bei LoRa, wobei moderne LTE-M-Module
            diesen Unterschied durch Power Saving Mode (PSM) und erweiterten Discontinuous Reception (eDRX)
            — beide im 3GPP-Standard definiert — deutlich verringern, indem sie das Modem zwischen
            geplanten Netzwerk-Check-ins tief schlafen lassen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Wie man wirklich entscheidet
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Reichweite im Verhältnis zur Infrastruktur.</strong> Bleiben die Tiere in Reichweite
              von Gateways, die Sie selbst platzieren können — ein Hof, eine feste Weidefläche —, vermeidet
              LoRa laufende Kosten. Bewegen sie sich über jede von Ihnen kontrollierte Infrastruktur hinaus,
              ist die Mobilfunkabdeckung von LTE-M meist die einzige Option, die zuverlässig funktioniert.
            </li>
            <li>
              <strong>Kostenstruktur.</strong> LoRa tauscht Investitions- und Wartungskosten für Gateways
              gegen nahezu kostenlose Einzelmeldungen. LTE-M tauscht diese Vorabinfrastruktur gegen einen
              laufenden Datentarif pro Gerät — die richtige Wahl hängt von der Flottengröße und der
              Budgetierung ab.
            </li>
            <li>
              <strong>Tatsächliche Abdeckung statt Abdeckungskarten.</strong> Mobilfunk-Abdeckungskarten für
              ländliche Gebiete sind oft zu optimistisch; Gleiches gilt für angenommene LoRa-Gateway-Reichweiten,
              sobald reales Gelände und Vegetation berücksichtigt werden. Bei beiden Wegen lohnt sich eine
              Funkverbindungsprüfung vor Ort, bevor man sich auf ein flottenweites Design festlegt.
            </li>
            <li>
              <strong>Energiebudget.</strong> Bei gleicher Meldefrequenz verbrauchen LoRa-Übertragungen
              typischerweise weniger Energie als ein LTE-M-Check-in, was bei steigender Meldefrequenz stärker
              ins Gewicht fällt. Bei niedriger Meldefrequenz und gut abgestimmtem PSM/eDRX verringert sich
              der Unterschied.
            </li>
          </ul>

          <p>
            Keine der beiden Technologien ersetzt GNSS, und keine ist grundsätzlich &quot;besser&quot; als die
            andere — sie beantworten eine andere Frage (wie bekomme ich Daten heraus?) als GNSS (wo bin
            ich?). Die richtige Kombination — GNSS + LoRa oder GNSS + LTE-M — hängt davon ab, wohin sich die
            Tiere tatsächlich bewegen im Verhältnis zur dort verfügbaren Infrastruktur und Abdeckung, und
            davon, wie die Kosten für die jeweilige Flotte am sinnvollsten strukturiert werden.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Haben Sie eine konkrete Frage zu Reichweite, Gelände oder Flottengröße?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link>, und wir helfen Ihnen, den passenden Konnektivitätsansatz zu skizzieren.
        </p>
      </article>

      <CTABanner
        heading="Planen Sie ein Tracking-Gerät?"
        description="Erzählen Sie uns von den Tieren, dem Gelände und der Infrastruktur, mit denen Sie arbeiten — wir helfen Ihnen, die Konnektivitäts-Abwägungen zu bewerten."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Zurück zum Blog"
        secondaryHref="/de/blog"
      />
    </>
  );
}
