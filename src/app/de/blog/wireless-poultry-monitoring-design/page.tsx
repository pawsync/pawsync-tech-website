import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Planung drahtloser Geflügelüberwachung | PawSync",
  description:
    "Sensorplatzierung, Protokollwahl und Gateway-Planung für ein drahtloses Überwachungsnetz im Geflügelstall — und warum ein Sensor pro Stall meist nicht reicht.",
  alternates: buildAlternates("de", "blog/wireless-poultry-monitoring-design"),
  openGraph: buildOpenGraph("de", "blog/wireless-poultry-monitoring-design"),
};

export default function BlogArticleWirelessPoultryMonitoringDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Geflügelüberwachung planen" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Ein drahtloses Überwachungsnetz für den Geflügelstall planen
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein einzelner Sensor in der Stallmitte zeigt die durchschnittliche Bedingung an genau diesem einen Punkt — nicht, was am Boden nahe den Zuluftventilatoren passiert, oder oben am First, wo sich Wärme sammelt.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Warum ein Sensor pro Stall meist nicht reicht
          </h2>
          <p>
            Kommerzielle Geflügelställe sind thermisch nicht gleichmäßig. Luft, die durch Zuluftöffnungen
            oder Tunnellüftungsventilatoren eintritt, erzeugt kühlere Zonen nahe den Einlässen und wärmere
            weiter im Stall; Wärme und Feuchtigkeit neigen dazu, sich vom Boden bis zum First zu
            schichten; und Anlagen, Futterleitungen oder Teilvorhänge können Bereiche schaffen, die sich
            anders verhalten als der Rest des Stalls. Ein einzelner, zentral platzierter Sensor liefert
            einen realen Messwert, aber es ist ein Durchschnitt, der ein lokales Problem — eine kalte
            Zone nahe einem undichten Einlass oder einen Hotspot bei einem ausgefallenen Ventilator —
            völlig übersehen kann. Mehrpunkt-Sensorik, mit Knoten platziert dort, wo die Bedingungen
            tatsächlich variieren, erfasst, was ein einzelner Sensor strukturell nicht kann.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Was tatsächlich gemessen werden sollte
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Temperatur und relative Luftfeuchtigkeit</strong> sind die Basis — beide beeinflussen
              Tierwohl und Gesundheit direkt und können über Länge und Höhe eines Stalls deutlich variieren.
            </li>
            <li>
              <strong>Ammoniak (NH₃)</strong> ist besonders relevant, weil es schon bei moderaten
              Konzentrationen die Atemwege reizt und meist mit Einstreufeuchtigkeit und
              Lüftungsangemessenheit korreliert — oft einer der aussagekräftigsten Messwerte, um ein sich
              entwickelndes Problem zu erkennen, bevor es sich im Verhalten der Herde zeigt.
            </li>
            <li>
              <strong>CO₂</strong> ist ein sekundärer, aber nützlicher Indikator für die allgemeine
              Lüftungsangemessenheit, da er widerspiegelt, wie viel Frischluft tatsächlich an einem
              gegebenen Punkt im Stall ankommt.
            </li>
            <li>
              <strong>Luftgeschwindigkeit</strong> wird seltener gemessen, ist aber relevant in Ställen mit
              Hitzestress-Minderungssystemen (Tunnellüftung, Kühlpads), wo die Luftströmung auf Tierhöhe
              entscheidend ist, nicht nur die Nennleistung des Ventilators.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Funkprotokoll für eine metallische/dichte Struktur wählen
          </h2>
          <p>
            Geflügelställe sind typischerweise lange, niedrige, metallverkleidete Gebäude — keine
            freundliche HF-Umgebung. Wi-Fi kann mit Reichweite und Dämpfung durch Bauteile und Anlagen
            kämpfen, besonders am fernen Ende eines langen Stalls. LoRa schneidet für diese Art von
            Struktur meist besser ab: niedrigere Datenrate, aber deutlich bessere Reichweite und
            Durchdringung — das passt zu periodischen Sensormesswerten (Temperatur und Feuchtigkeit müssen
            nicht mehrmals pro Sekunde aktualisiert werden) weit besser als zu einer
            bandbreitenintensiven Anwendung. In Nachrüstsituationen, in denen ein Stall bereits über einen
            verdrahteten Steuerungsbus verfügt, bleibt ein RS485-/Modbus-Bus eine praktische, zuverlässige
            Rückfalloption, statt ihn allein um des Austauschs willen zu ersetzen.
          </p>
          <p>
            Es gibt nicht das eine richtige Protokoll für jeden Standort — Hoflayout, Stallgröße,
            vorhandene Infrastruktur und Internetverfügbarkeit fließen alle ein, weshalb dies pro Standort
            bewertet wird, statt auf eine Standardantwort festgelegt zu werden.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Gateway-Platzierung und Reichweitenplanung
          </h2>
          <p>
            Ein einzelnes Gateway deckt möglicherweise einen Stall komfortabel ab, stößt aber auf einem
            Mehrstall-Standort mit größerer Distanz oder baulicher Abschirmung zwischen den Gebäuden an
            Grenzen. Anzahl und Platzierung der Gateways richten sich nach Stallanzahl und Layout, nicht
            nach einer festen Zahl pro Betrieb — Sichtverbindung und bauliche Störungen zählen mehr als
            die reine Entfernung. Für sehr lange Ställe oder Standorte mit Abdeckungslücken erweitert ein
            Relais- oder Repeater-Knoten die Abdeckung, ohne an jedem Gebäude ein eigenes Gateway zu
            benötigen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Lokale Steuerung vs. Cloud-Abhängigkeit bei einem Ausfall
          </h2>
          <p>
            Steuerungslogik — schwellenwertbasierte Relaisschaltung, lokale Alarme — kann so ausgelegt
            werden, dass sie direkt auf dem Stallcontroller läuft, Sensormesswerte auswertet und Reaktionen
            auslöst, ohne für jede Entscheidung einen Umweg über einen Cloud-Dienst zu benötigen. Das ist
            besonders bei einem Verbindungsausfall relevant: Ein System, das für jede Steuerungsentscheidung
            von der Cloud abhängt, versagt genau dann, wenn ein Netzwerkproblem mit einem
            Umweltproblem zusammenfällt — der denkbar ungünstigste Zeitpunkt für einen Ausfall. Während
            eines Ausfalls nicht synchronisierte Daten werden lokal zwischengespeichert und nach
            Wiederherstellung der Verbindung hochgeladen, aber die Steuerungs- und Alarmlogik selbst wartet
            nicht auf diese Verbindung.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alarmdesign: Fehlalarme und verpasste Ereignisse vermeiden
          </h2>
          <p>
            Ein Schwellenwertalarm, der sofort bei Überschreiten einer Grenze auslöst, neigt zu
            Fehlalarmen — eine kurz geöffnete Tür, ein Sensor, der eine kurze Zugluft misst, oder
            gewöhnliches Rauschen im Sensorsignal. Verlangt man, dass ein Messwert eine definierte Dauer
            über (oder unter) einem Schwellenwert bleibt, bevor ein Alarm ausgelöst wird, reduziert das
            Fehlalarme deutlich, ohne eine Reaktion auf ein echtes, anhaltendes Problem spürbar zu
            verzögern. Diese Dauer richtig zu wählen — lang genug, um Rauschen herauszufiltern, kurz genug,
            um ein echtes Ereignis früh zu erfassen — ist selbst eine Designentscheidung, spezifisch für
            jeden überwachten Parameter.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Stromversorgung für Feldknoten
          </h2>
          <p>
            Die meisten Umweltsensorknoten in einem versorgten Geflügelstall laufen mit Netzstrom, da die
            Infrastruktur bereits vorhanden ist. Akku- oder Akku-plus-Solar-Betrieb wird relevant für
            Knoten außerhalb vorhandener Verkabelung oder während einer Nachrüstphase, bevor feste
            Verkabelung installiert ist — in diesem Fall folgt das Energiebudget des Knotens derselben
            allgemeinen Duty-Cycling-Logik wie bei jedem akkubetriebenen Sensordesign, dimensioniert auf
            das tatsächlich benötigte Meldeintervall der Anwendung, statt standardmäßig auf
            Dauerbetrieb zu setzen.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planen Sie ein Überwachungsnetz für einen konkreten Standort?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link>, wir
          helfen Ihnen bei Sensorplatzierung und Protokollwahl für Ihr Stalllayout. Das gesamte
          Geflügel-Angebot zeigen{" "}
          <Link href="/de/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Geflügelfarm-Technologie</Link> und{" "}
          <Link href="/de/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Umweltüberwachung</Link>.
        </p>
      </article>

      <CTABanner
        heading="Planen Sie ein Geflügel-Überwachungsnetz?"
        description="Nennen Sie uns Stallanzahl, Layout und vorhandene Infrastruktur — wir helfen bei Sensorplatzierung und Konnektivität."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Geflügelfarm-Technologie"
        secondaryHref="/de/poultry-farming"
      />
    </>
  );
}
