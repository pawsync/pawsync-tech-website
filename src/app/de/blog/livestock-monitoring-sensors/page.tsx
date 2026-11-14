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
  title: "Sensoren für die Weidetier-Überwachung im Überblick | PawSync",
  description:
    "Sensoren zur Fernüberwachung von Rindern und Weidetieren: GPS, Aktivität, RFID, Tränke, Tor und Weidezaun – was sie messen und wie sie vernetzt werden.",
  alternates: buildAlternates("de", "blog/livestock-monitoring-sensors"),
  openGraph: buildOpenGraph("de", "blog/livestock-monitoring-sensors", {
    url: "/blog/livestock-monitoring-sensors/og-de.jpg",
    alt: "Weide mit einer Kuh mit Halsband, Zaunsensor, Tränkesensor und solarbetriebener Wetterstation, verbunden mit einem Funkmast: Sensoren am Tier und an der Infrastruktur",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/livestock-monitoring-sensors/og-de.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "de",
  route: "blog/livestock-monitoring-sensors",
  headline: "Sensoren für die Weidetier-Überwachung: Was sie messen und wie man sie anbindet",
  description: metadata.description ?? "",
  image: "/blog/livestock-monitoring-sensors/og-de.jpg",
});

export default function BlogArticleLivestockMonitoringSensorsDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Sensoren für Weidetiere" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Sensoren für die Weidetier-Überwachung: Was sie messen und wie man sie anbindet
        </h1>
        <ArticleDate route="blog/livestock-monitoring-sensors" locale="de" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein System zur Fernüberwachung von Weidetieren ist nur so gut wie die Sensoren draußen auf der
          Fläche. Bevor man eine Plattform oder ein Funknetz auswählt, lohnt sich ein klarer Blick darauf, was
          jeder Sensortyp leisten kann – und was er an Energie und Wartung kostet.
        </p>
        <Image
          src="/blog/livestock-monitoring-sensors/hero-de.webp"
          alt="Weide mit einer Kuh mit Halsband, Zaunsensor, Tränkesensor und solarbetriebener Wetterstation, verbunden mit einem Funkmast: Sensoren am Tier und an der Infrastruktur"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Zwei Gruppen: am Tier und an der Infrastruktur
          </h2>
          <p>
            Sensoren <strong>am Tier</strong> – Halsband, Ohrmarke, Fußband – zeigen, wo sich Tiere aufhalten und
            wie sie sich bewegen. Sensoren <strong>an der Infrastruktur</strong> – an Tränken, Wasserbehältern,
            Toren, Weidezäunen und Wetterstationen – zeigen, ob funktioniert, worauf die Tiere angewiesen sind.
            Viele Probleme im Weidebetrieb zeigen sich zuerst an der Infrastruktur: eine Tränke, die nicht mehr
            nachläuft, oder ein Weidezaun ohne Spannung. Solche Sensoren sind oft günstiger, leichter zu
            versorgen und einfacher zu warten als alles, was ein Tier trägt – ein guter Startpunkt.
          </p>

          <figure>
            <Image
              src="/blog/livestock-monitoring-sensors/diagram-de.webp"
              alt="Diagramm: Sensoren am Tier (GNSS-Ortung, Aktivität, RFID) und an der Infrastruktur (Wasserstand, Tore und Zäune, Wetter) senden Daten über ein Gateway oder Netz an ein Dashboard mit Alarmen"
              width={1754}
              height={897}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Zwei Sensorgruppen, ein Datenweg: vom Tier oder von der Infrastruktur über Gateway oder Netz zu Dashboard und Alarmen.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Sensoren am Tier
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            GPS / GNSS-Ortung
          </h3>
          <p>
            Ein GNSS-Empfänger im Halsband oder in der Ohrmarke liefert die Position: Wo steht die Herde, hat ein
            Tier die Fläche verlassen, welcher Teil der Weide wird genutzt? Bei freiem Himmel liegt die
            Genauigkeit typischerweise bei wenigen Metern, unter Bäumen oder in steilem Gelände darunter. Der
            Empfänger ist meist der größte Stromverbraucher – das Meldeintervall ist deshalb der wichtigste Hebel
            für die Akkulaufzeit.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Beschleunigungssensoren für Aktivität
          </h3>
          <p>
            Ein dreiachsiger Beschleunigungssensor misst Bewegung. Mit passender Firmware lassen sich grobe
            Verhaltensweisen wie Gehen, Stehen und Liegen unterscheiden und Veränderungen im Tagesverlauf
            erkennen. Der Sensor braucht sehr wenig Energie und hilft dem Gerät selbst: Hat sich das Tier nicht
            bewegt, kann die nächste GNSS-Messung entfallen.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            RFID-Kennzeichnung
          </h3>
          <p>
            Niederfrequente RFID-Ohrmarken (134,2 kHz nach ISO 11784/11785) sind passiv, haben also keine
            Batterie und werden gelesen, wenn ein Tier an einem Lesegerät vorbeigeht – an Tor, Treibgang oder
            Waage. Für Schafe und Ziegen ist die elektronische Kennzeichnung in der EU ohnehin vorgeschrieben. Eine
            Ortung leisten die Marken allein nicht, aber zusammen mit festen Lesegeräten zeigen sie, welches Tier
            wann wo war, etwa an der Tränke oder auf einer Durchlaufwaage.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Sensoren an der Infrastruktur
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Füllstand von Tränken und Wasserfässern
          </h3>
          <p>
            Die Wasserkontrolle ist der häufigste Grund für die tägliche Runde über die Weiden. Ultraschallsensoren
            messen berührungslos von oben, können aber durch Schaum, Schmutz und Kondenswasser gestört werden.
            Tauchdrucksensoren sind robust und genau, brauchen aber ein Kabel ins Becken und Frostschutz. Einfache
            Schwimmerschalter genügen für einen zuverlässigen „Leer“-Alarm. Wertvoll ist vor allem der Verlauf:
            Sinkt der Pegel schneller als sonst, deutet das auf ein Leck oder ein defektes Schwimmerventil hin.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Tore und Weidezäune
          </h3>
          <p>
            Ein Reedkontakt am Tor meldet „offen“ oder „geschlossen“ und hält mit einer kleinen Batterie
            jahrelang. Ein Weidezaun-Monitor misst die Impulsspannung auf dem Draht und meldet, wenn sie abfällt –
            meist das erste Zeichen für Bewuchs oder einen gerissenen Draht. Beide senden sehr kleine, seltene
            Nachrichten und passen damit gut zu stromsparenden Funknetzen.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wetter und Weidezustand
          </h3>
          <p>
            Eine lokale Wetterstation liefert den Kontext zu allen anderen Daten – etwa Hitzerisiko an heißen,
            windstillen Tagen oder die Erklärung für einen steigenden Wasserverbrauch. Bodenfeuchtesensoren helfen
            bei der Planung des Weidewechsels. Mehr dazu auf unserer Seite{" "}
            <ArticleServiceLink locale="de" href="/de/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Umweltsensoren für Hof & Stall</ArticleServiceLink>.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Sensoren über große Flächen vernetzen
          </h2>
          <p>
            Weidesensoren senden wenige Bytes im Abstand von Minuten oder Stunden – von Orten ohne Strom und
            WLAN. Damit bleiben im Wesentlichen drei Optionen:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>LoRaWAN</strong> – der Betrieb installiert ein oder mehrere Gateways, die Sensoren erreichen
              sie im offenen Gelände über mehrere Kilometer. Sehr wenig Energie pro Nachricht, keine
              SIM-Karte je Gerät. Die Reichweite hängt stark von Gelände und Gateway-Höhe ab.
            </li>
            <li>
              <strong>Mobilfunk (LTE-M / NB-IoT)</strong> – keine eigene Infrastruktur, aber nur bei Netzabdeckung
              und mit Datentarif je Gerät.
            </li>
            <li>
              <strong>Satelliten-IoT</strong> – für Standorte ohne Mobilfunk und ohne sinnvollen Gateway-Platz, mit
              höheren Kosten pro Nachricht und engeren Datenlimits.
            </li>
          </ul>
          <p>
            Häufig ist eine Mischung sinnvoll: LoRaWAN rund um den Hof und die Hauptweiden, Mobilfunk für entlegene
            Flächen. Unser{" "}
            <Link href="/de/blog/lorawan-farm-network-planning" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Leitfaden zur Planung eines LoRaWAN-Netzes für den Hof
            </Link>{" "}
            behandelt Gateway-Standort und Abdeckung.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Energie und Wartung: die versteckten Kosten
          </h2>
          <p>
            Jede Batterie auf der Weide ist eine künftige Wartungsfahrt. Beim Vergleich von Sensoren lohnt sich
            die Frage, wie lange die Batterie beim tatsächlich benötigten Meldeintervall hält, ob sie vor Ort
            gewechselt werden kann und was passiert, wenn sie schwach wird. Feste Sensoren lassen sich oft mit
            einem kleinen Solarmodul versorgen, Geräte am Tier kaum. Ein längeres Meldeintervall ist meist der
            günstigste Weg zu längerer Laufzeit – es lohnt sich also zu fragen, wie aktuell jeder Wert wirklich
            sein muss.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alarme, die auch gelesen werden
          </h2>
          <p>
            Den Nutzen zeigt ein Überwachungssystem über Alarme: Wasser niedrig, Zaun ohne Spannung, Tor offen,
            Tier außerhalb der Fläche. Bei zu vielen Fehlalarmen werden Meldungen ignoriert. Bewährt hat sich, einen
            Zustand erst nach einer Mindestdauer zu melden, statt einer Flut einen Alarm mit Erinnerung zu senden
            und jedem Alarm eine klare Handlung zuzuordnen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Ein praktischer Einstieg
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Die Kontrollen auflisten, für die heute gefahren wird – Wasser, Zäune, Tore, Tierzahl.</li>
            <li>Mit der Kontrolle beginnen, die am meisten Zeit oder Risiko kostet.</li>
            <li>Die Funkversorgung an den tatsächlichen Sensorstandorten prüfen.</li>
            <li>Meldeintervalle und Alarmregeln festlegen und die Batterien danach auslegen.</li>
            <li>Geräte am Tier ergänzen, wenn Netz und Alarmierung zuverlässig laufen.</li>
          </ol>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Häufige Fragen
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie genau ist die GPS-Ortung von Rindern?
          </h3>
          <p>
            Bei freiem Himmel ist ein üblicher Einfrequenz-GNSS-Empfänger im Halsband oder in der Ohrmarke auf wenige Meter genau. Das reicht, um zu erkennen, auf welcher Koppel oder in welchem Teil der Weide ein Tier steht, ob Tiere die Fläche verlassen und wie sich das Weideverhalten über die Zeit entwickelt. Um festzustellen, welches Tier genau an einer bestimmten Tränke steht, reicht es nicht – dafür eignet sich RFID an der Wasserstelle.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie lange halten die Batterien von Weidesensoren?
          </h3>
          <p>
            Das hängt vor allem vom Meldeintervall und der Funktechnik ab. Infrastruktursensoren, die alle 15 bis 60 Minuten eine kleine Nachricht per LoRaWAN senden, laufen mit einer Lithium-Primärzelle häufig mehrere Jahre. GPS-Tracker brauchen pro Meldung deutlich mehr Energie; ihre Laufzeit reicht je nach Ortungsintervall und Solarunterstützung von Wochen bis zu Jahren. Fragen Sie immer nach der Laufzeit bei Ihrem Meldeintervall, nicht nach dem Bestwert.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            LoRaWAN oder Mobilfunk – was passt besser?
          </h3>
          <p>
            Ist der Mobilfunkempfang überall dort zuverlässig, wo Sensoren stehen sollen, und geht es um wenige Geräte, ist Mobilfunk am schnellsten eingerichtet. Ist die Abdeckung lückenhaft oder sind Dutzende bis Hunderte Sensoren geplant, ist ein eigenes LoRaWAN-Netz im Betrieb meist günstiger und funktioniert auch dort, wo das Handy keinen Empfang hat. Viele Betriebe kombinieren beides.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wohin gehen die Sensordaten?
          </h3>
          <p>
            Jedes Sensornetz braucht ein Backend, in dem Daten gespeichert, angezeigt und in Alarme übersetzt werden. Das kann eine bestehende IoT-Plattform sein, eine Anbindung an die Herdenmanagement-Software oder eine eigene Anwendung. Die Entscheidung sollte früh fallen, weil sie Datenformat, Netzwerkserver und den Weg der Alarme zu den zuständigen Personen beeinflusst.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Lohnt sich die Überwachung auch für kleinere Betriebe?
          </h3>
          <p>
            Oft schon, wenn man klein anfängt: Ein Füllstandssensor an einer weit entfernten Tränke oder ein Weidezaun-Monitor kann bereits regelmäßige Kontrollfahrten ersetzen. Sinnvoll ist, mit der Kontrolle zu beginnen, die am meisten Zeit kostet, und das System erst zu erweitern, wenn Funkversorgung und Alarmierung zuverlässig funktionieren.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Sie brauchen Sensoren oder Tracker für Ihren Betrieb oder Ihr Produkt?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link> –
          Sensorknoten, Tracker und Gateways können nach Ihren Anforderungen entwickelt werden. Siehe auch{" "}
          <ArticleServiceLink locale="de" href="/de/livestock-technology" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Fernüberwachung von Rindern & Weidetieren</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">GPS-Tracker für Tiere</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Sie planen ein Projekt zur Weidetier-Überwachung?"
        description="Sagen Sie uns, was Sie wo überwachen möchten – wir helfen bei Sensoren, Funkanbindung und Energieversorgung."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Weidetier-Überwachung"
        secondaryHref="/de/livestock-technology"
        secondaryLocale="de"
      />
    </>
  );
}
