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
  title: "LoRaWAN in der Landwirtschaft: Hof-Funknetz planen | PawSync",
  description:
    "LoRaWAN für den landwirtschaftlichen Betrieb planen: Gateway-Standort und Höhe, realistische Reichweite, EU868 und Duty Cycle, Batterielaufzeit sowie privates oder öffentliches Netz.",
  alternates: buildAlternates("de", "blog/lorawan-farm-network-planning"),
  openGraph: buildOpenGraph("de", "blog/lorawan-farm-network-planning", {
    url: "/blog/lorawan-farm-network-planning/og-de.jpg",
    alt: "Illustration eines LoRaWAN-Netzes auf dem Hof: Ein Gateway auf einem Silo erreicht Feldsensoren, Wassertank und Wetterstation; ein Sensor hinter einer Baumreihe wird nicht erreicht",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/lorawan-farm-network-planning/og-de.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "de",
  route: "blog/lorawan-farm-network-planning",
  headline: "Ein LoRaWAN-Netz für den Hof planen: Gateways, Reichweite und Batterielaufzeit",
  description: metadata.description ?? "",
  image: "/blog/lorawan-farm-network-planning/og-de.jpg",
});

export default function BlogArticleLorawanFarmNetworkDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "LoRaWAN für den Hof" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Ein LoRaWAN-Netz für den Hof planen: Gateways, Reichweite und Batterielaufzeit
        </h1>
        <ArticleDate route="blog/lorawan-farm-network-planning" locale="de" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          LoRaWAN passt gut zur Landwirtschaft: kleine batteriebetriebene Sensoren, wenige Bytes pro Nachricht,
          große Entfernungen und kein WLAN auf dem Feld. Ob ein Hof-Funknetz zuverlässig läuft, hängt aber viel
          mehr von der Planung ab als von den Sensoren selbst.
        </p>
        <Image
          src="/blog/lorawan-farm-network-planning/hero-de.webp"
          alt="Illustration eines LoRaWAN-Netzes auf dem Hof: Ein Gateway auf einem Silo erreicht Feldsensoren, Wassertank und Wetterstation; ein Sensor hinter einer Baumreihe wird nicht erreicht"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            So ist ein LoRaWAN-Netz aufgebaut
          </h2>
          <p>
            Ein LoRaWAN-Netz besteht aus vier Teilen. <strong>Endgeräte</strong> – Bodenfeuchtesensoren,
            Füllstandssensoren, Wetterstationen, Tracker – senden kurze Funknachrichten. <strong>Gateways</strong>{" "}
            empfangen sie und leiten sie über eine Internetverbindung weiter. Ein <strong>Netzwerkserver</strong>{" "}
            entfernt Duplikate, verwaltet die Schlüssel und passt die Datenrate jedes Geräts an. Eine{" "}
            <strong>Anwendung</strong> speichert die Daten und löst Alarme aus. Geräte sind nicht an ein bestimmtes
            Gateway gebunden: Jedes Gateway in Reichweite kann eine Nachricht empfangen. Deshalb schließt ein
            zweites Gateway Lücken so wirksam.
          </p>

          <figure>
            <Image
              src="/blog/lorawan-farm-network-planning/diagram-de.webp"
              alt="Diagramm eines LoRaWAN-Netzes: Endgeräte senden kurze Funknachrichten, Gateways leiten sie per Internet weiter, ein Netzwerkserver entfernt Duplikate und verwaltet Schlüssel und Datenrate, eine Anwendung speichert Daten und löst Alarme aus"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Die vier Bausteine eines LoRaWAN-Netzes. Endgeräte sind an kein einzelnes Gateway gebunden, deshalb kann ein zweites Gateway Funklöcher schließen.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Realistische Reichweite statt Prospektwert
          </h2>
          <p>
            Angaben zur Reichweite im ländlichen Raum reichen je nach Quelle von wenigen bis weit über zehn
            Kilometer. Beides kann stimmen. Entscheidend sind:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Antennenhöhe am Gateway</strong> – meist der wichtigste Faktor. Ein Gateway auf Mast oder Silo sieht viel mehr vom Betrieb als eines im Büro.</li>
            <li><strong>Gelände und Hindernisse</strong> – Hügel, Hecken, Waldstreifen und Gebäude dämpfen oder blockieren das Signal. Funk braucht einen freien Korridor (die Fresnel-Zone), nicht nur Sichtverbindung.</li>
            <li><strong>Antenne und Lage des Sensors</strong> – ein Sensor am Boden, in einem Metallbehälter oder in hohem Mais verliert viel Signal gegenüber einem an einem Pfahl.</li>
            <li><strong>Spreizfaktor</strong> – höhere Spreizfaktoren reichen weiter, halten den Sender aber deutlich länger aktiv. Das kostet Batterie und Sendezeit.</li>
          </ul>
          <p>
            Verlässlich plant man mit einer <strong>Funkausleuchtung</strong>: ein provisorisches Gateway am
            geplanten Standort, dann mit einem Feldtester die tatsächlichen Sensorstandorte abfahren und die
            Signalstärke festhalten. Ein Nachmittag Messen ersetzt viel Rätselraten.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            EU868 und der Duty Cycle
          </h2>
          <p>
            In Deutschland, Österreich und dem übrigen Europa arbeitet LoRaWAN im lizenzfreien Band um 868 MHz
            (Frequenzplan EU868). Für die meisten Kanäle gilt eine <strong>Duty-Cycle-Begrenzung</strong>: In den
            Hauptteilbändern darf ein Gerät nur 1 % der Zeit senden. Für einen Sensor mit einem Messwert alle
            15 Minuten ist das kein Problem; für ein Gerät, das bei hohem Spreizfaktor viele Daten übertragen soll,
            ist es eine harte Grenze. Für Produkte, die auch in die USA gehen, gilt dort ein anderer Frequenzplan
            (US915) mit eigenen Regeln – Geräte und Gateways müssen immer zum Plan des Einsatzlandes passen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Gateway: Standort, Strom und Anbindung
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Höhe und Lage:</strong> so hoch und zentral wie möglich – Mast, Silo oder Hallendach – mit Außenantenne und kurzem, dämpfungsarmem Kabel.</li>
            <li><strong>Stromversorgung:</strong> Gateways laufen dauerhaft. Netzstrom ist am einfachsten; ein entfernter Mast braucht Solarmodul und Akku, ausgelegt auf die dunkelsten Wochen des Jahres.</li>
            <li><strong>Internetanbindung:</strong> per Ethernet vom Büro, Mobilfunkmodem oder Richtfunk. Ohne Anbindung sammelt das Gateway Daten, die niemand sieht.</li>
            <li><strong>Blitz- und Überspannungsschutz:</strong> Eine Außenantenne auf einem hohen Bauwerk braucht Überspannungsschutz und Erdung.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Öffentliches, Community- oder privates Netz?
          </h2>
          <p>
            <strong>Öffentliche Netze</strong> – in Deutschland etwa von manchen Stadtwerken betrieben – decken
            ländliche Flächen oft nur teilweise ab; prüfen Sie den konkreten Betrieb, nicht die Karte.{" "}
            <strong>Community-Netze</strong> wie The Things Network sind kostenlos, begrenzen aber die Sendezeit
            über eine Fair-Use-Regel (zum Beispiel 30 Sekunden Uplink-Sendezeit pro Gerät und Tag) und bieten keine
            Verfügbarkeitszusage. Ein <strong>privates Netz</strong> mit eigenen Gateways und gehostetem oder
            selbst betriebenem Netzwerkserver gibt volle Kontrolle über Abdeckung und Daten – bei eigener
            Verantwortung für die Infrastruktur. Für Betriebe mit geschäftskritischen Alarmen ist ein privates oder
            hybrides Netz mit eigenen Gateways meist die verlässlichere Wahl.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Batterielaufzeit von LoRaWAN-Sensoren
          </h2>
          <p>
            Mehrjährige Laufzeiten sind erreichbar – aber nur bei passender Kombination aus Meldeintervall,
            Spreizfaktor und Sensor. Wesentliche Einflüsse:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Wie oft gesendet wird und wie lange jede Nachricht in der Luft ist.</li>
            <li>Der Sensor selbst – Gas- oder Ultraschallsensoren brauchen pro Messung viel Energie.</li>
            <li>Der Ruhestrom zwischen den Messungen, der bei seltenen Meldungen dominiert.</li>
            <li>Die Temperatur: Kälte verringert die nutzbare Kapazität.</li>
          </ul>
          <p>
            Für langlebige Knoten sind Lithium-Primärzellen (etwa Li-SOCl₂) wegen ihrer geringen Selbstentladung
            verbreitet. Energiebudgets und Tastgrad erklären wir in{" "}
            <Link href="/de/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Stromsparende Elektronik für Tier-Tracker im Außeneinsatz
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Messen ist einfach, Steuern braucht mehr Überlegung
          </h2>
          <p>
            Die meisten LoRaWAN-Geräte arbeiten in Klasse A: Sie hören nur kurz nach dem eigenen Senden auf
            Nachrichten aus dem Netz. Ideal für Batteriesensoren – aber ein Befehl wie „Ventil öffnen“ wartet
            womöglich bis zur nächsten Meldung. Für Steuerungen eignen sich Klasse-C-Geräte (ständig empfangsbereit,
            daher meist mit Netzstrom), sicherheitskritische Logik gehört auf die lokale Steuerung, und jede Aktion
            sollte bestätigt werden. Für schnelle Regelkreise ist eine kabelgebundene oder lokale Verbindung oft das
            bessere Werkzeug.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Checkliste für die Planung
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Sensorstandorte und das wirklich nötige Meldeintervall je Sensor festlegen.</li>
            <li>Mögliche Gateway-Standorte mit Höhe, Strom und Internetanbindung auswählen.</li>
            <li>Funkausleuchtung an den tatsächlichen Sensorstandorten durchführen.</li>
            <li>Netzmodell wählen: privat, Community, Betreiber oder hybrid.</li>
            <li>Frequenzplan aller Geräte und Gateways prüfen (EU868 in Europa).</li>
            <li>Batterien nach gemessenem Verbrauch auslegen, nicht nach Datenblatt-Bestwerten.</li>
          </ol>
          <p>
            Speziell für Tracker siehe{" "}
            <Link href="/de/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              GNSS + LoRa vs. GNSS + LTE-M für Tier-Tracking
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Häufige Fragen
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie viele LoRaWAN-Gateways braucht ein Betrieb?
          </h3>
          <p>
            Das hängt viel stärker vom Gelände als von der Fläche ab. Ein gut platziertes Gateway auf einem hohen Bauwerk deckt bei vielen Betrieben den Kernbereich ab; Hügel, Wald und entfernte Schläge können ein zweites Gateway oder einen Mast erfordern. Verlässlich entscheiden lässt sich das nur mit einer Funkausleuchtung an den tatsächlichen Sensorstandorten – und weil jedes Gateway jedes Gerät empfangen kann, ist eine spätere Erweiterung unkompliziert.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie viele Sensoren schafft ein Gateway?
          </h3>
          <p>
            Ein LoRaWAN-Gateway kann Nachrichten sehr vieler Geräte empfangen. Bei typischen landwirtschaftlichen Meldeintervallen – eine kleine Nachricht alle paar Minuten bis einmal pro Stunde – ist die Gateway-Kapazität selten der Engpass. Begrenzend ist eher die Sendezeit: Geräte mit hohem Spreizfaktor belegen den Kanal länger. Gute Abdeckung, die niedrigere Spreizfaktoren erlaubt, hilft deshalb sowohl der Batterielaufzeit als auch der Kapazität.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Kann LoRaWAN Bilder oder Videos übertragen?
          </h3>
          <p>
            Nein. LoRaWAN ist für kleine Nachrichten von typischerweise einigen Dutzend Bytes ausgelegt. Wildkameras, Videos oder Firmware-Images brauchen eine andere Verbindung wie Mobilfunk oder WLAN. Bewährt hat sich, LoRaWAN für Sensordaten und Alarme zu nutzen und Mobilfunk nur für die wenigen Geräte, die Bandbreite brauchen.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Ist LoRaWAN sicher?
          </h3>
          <p>
            LoRaWAN verschlüsselt den Datenverkehr mit AES-128 auf zwei Ebenen: Ein Schlüssel schützt die Netzwerkebene, ein weiterer die Nutzdaten durchgängig bis zur Anwendung. In der Praxis hängt die Sicherheit vom Schlüsselmanagement ab – eindeutige Schlüssel je Gerät, keine Schlüssel auf Etiketten oder in Code-Repositories und ein vertrauenswürdiger Netzwerkserver.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Darf man ein LoRaWAN-Gateway einfach selbst betreiben?
          </h3>
          <p>
            LoRaWAN nutzt in Europa lizenzfreie Frequenzen um 868 MHz; ein eigenes Gateway braucht keine individuelle Frequenzzuteilung, die Nutzung ist über eine Allgemeinzuteilung geregelt. Einzuhalten sind aber die Vorgaben für diese Frequenzen, etwa zu Sendeleistung und Duty Cycle – handelsübliche, CE-gekennzeichnete Gateways und Geräte sind dafür ausgelegt, solange Antennen und Einstellungen nicht verändert werden.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Welche laufenden Kosten hat ein privates LoRaWAN-Netz?
          </h3>
          <p>
            Neben der einmaligen Anschaffung von Gateways, Antennen und Montagematerial fallen vor allem drei Posten
            an: die Internetanbindung des Gateways (bei Mobilfunk ein Datentarif), der Netzwerkserver – als
            gehosteter Dienst mit Abonnement oder selbst betrieben mit entsprechendem Wartungsaufwand – sowie die
            Wartung vor Ort, etwa Sichtkontrollen nach Unwettern und der Batterietausch bei Sensoren. Pro Sensor
            entstehen dagegen keine Mobilfunkgebühren, was LoRaWAN vor allem bei vielen Sensoren wirtschaftlich
            macht. Wer die Kosten vergleichen will, sollte deshalb immer die geplante Sensorzahl über mehrere Jahre
            zugrunde legen.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Sie planen LoRaWAN-Sensoren oder Gateways für einen Betrieb oder ein Produkt?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link> –
          Sensorknoten und Netzkonzepte können für Ihren Standort entwickelt werden. Siehe auch{" "}
          <ArticleServiceLink locale="de" href="/de/farm-automation" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Hofautomatisierung</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Umweltsensoren für Hof & Stall</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Sie planen ein Sensornetz für Ihren Hof?"
        description="Beschreiben Sie Standort, Sensoren und Anforderungen – wir helfen bei Abdeckung, Energie und Geräten."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Hofautomatisierung"
        secondaryHref="/de/farm-automation"
        secondaryLocale="de"
      />
    </>
  );
}
