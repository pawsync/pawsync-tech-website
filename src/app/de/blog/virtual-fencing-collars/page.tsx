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
  title: "Virtueller Weidezaun: So funktionieren die Halsbänder | PawSync",
  description:
    "Virtuelle Zäune für Weidetiere technisch erklärt: GNSS-Geofencing im Halsband, Abfolge von Ton- und Stromsignal, Energiebedarf – und die Rechtslage in Deutschland und Österreich.",
  alternates: buildAlternates("de", "blog/virtual-fencing-collars"),
  openGraph: buildOpenGraph("de", "blog/virtual-fencing-collars", {
    url: "/blog/virtual-fencing-collars/og.jpg",
    alt: "Holstein-Kühe mit GNSS-Halsbändern grasen nahe einer virtuellen Zaunlinie, darüber ein Satellit",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/virtual-fencing-collars/og.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "de",
  route: "blog/virtual-fencing-collars",
  headline: "Virtueller Weidezaun: Wie GNSS-Halsbänder funktionieren – Technik, Signale und Energie",
  description: metadata.description ?? "",
  image: "/blog/virtual-fencing-collars/og.jpg",
});

export default function BlogArticleVirtualFencingCollarsDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Virtueller Weidezaun" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Virtueller Weidezaun: Wie GNSS-Halsbänder funktionieren – Technik, Signale und Energie
        </h1>
        <ArticleDate route="blog/virtual-fencing-collars" locale="de" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein virtueller Zaun ersetzt Draht und Pfähle durch eine Grenze auf der Karte. Alles, was dafür nötig
          ist – die Position des Tieres kennen, rechtzeitig warnen und das monatelang mit einem Akku – muss in
          einem Halsband passieren, das draußen an einem Tier in Bewegung hängt.
        </p>
        <Image
          src="/blog/virtual-fencing-collars/hero.webp"
          alt="Holstein-Kühe mit GNSS-Halsbändern grasen nahe einer virtuellen Zaunlinie, darüber ein Satellit"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Zuerst: die Rechtslage in Deutschland und Österreich
          </h2>
          <p>
            Wer sich in Deutschland oder Österreich mit virtuellen Zäunen beschäftigt, muss die Rechtslage
            kennen. Halsbänder, die Weidetiere mit einem elektrischen Impuls begrenzen, sind in beiden Ländern
            derzeit nicht für den regulären Einsatz zugelassen; maßgeblich ist jeweils das Tierschutzrecht. In
            Österreich wurde ein entsprechender Antrag mit Verweis auf das Verbot elektrisierender Geräte
            abgelehnt. In Deutschland fordern Fachleute, etwa aus dem Thünen-Institut, eine rechtliche
            Grundlage, und Praxisversuche wie an der Universität Göttingen haben das Verhalten von Rindern an
            virtuellen Grenzen untersucht. Andere Länder sind weiter: Schweden hat seine Vorschriften für
            Rinderweiden geändert, und in Ländern wie den USA und Großbritannien sind kommerzielle Systeme bereits
            im Einsatz.
          </p>
          <p>
            Für Hersteller und Entwickler im deutschsprachigen Raum heißt das: Die Technik ist relevant – für
            Exportmärkte, für Forschung und für den Fall einer künftigen Zulassung –, aber jedes Projekt muss die
            aktuellen Regeln im jeweiligen Zielmarkt prüfen. Dieser Artikel beschreibt die Technik, nicht die
            Zulässigkeit im Einzelfall (Stand: November 2026).
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Aus welchen Komponenten ein virtueller Zaun besteht
          </h2>
          <p>
            Jedes Tier trägt ein Halsband mit GNSS-Empfänger (Satellitenortung), einem kleinen Prozessor, einem
            Lautsprecher, einer Schaltung für einen kurzen, energiearmen elektrischen Impuls und einem Akku –
            meist mit kleinem Solarmodul. Der Betrieb zeichnet die Grenze in einer Web- oder Smartphone-App. Eine
            Funkverbindung – Mobilfunk, LoRa oder eine eigene Basisstation – überträgt neue Grenzen zu den
            Halsbändern und Statusdaten zurück.
          </p>
          <p>
            Entscheidend ist, wo die Entscheidung fällt. In gut konstruierten Systemen ist die Grenze im Halsband
            gespeichert, und das Halsband prüft seine Position selbst. So funktioniert der Zaun auch dann, wenn
            die Funkverbindung abreißt – und auf abgelegenen Weiden passiert das regelmäßig.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Wie das Halsband die Grenze erkennt
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Geofencing im Mikrocontroller
          </h3>
          <p>
            Die Grenze liegt als Polygon vor, also als Liste von Koordinaten. Bei jeder Positionsbestimmung prüft
            die Firmware, ob der Punkt innerhalb liegt, und berechnet den Abstand zur nächsten Kante. Dieser
            Abstand steuert alles Weitere. Üblich ist eine Warnzone knapp innerhalb der Grenze; über die
            Bewegungsrichtung lässt sich erkennen, ob das Tier auf die Grenze zuläuft oder an ihr entlang.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Mit GNSS-Ungenauigkeit umgehen
          </h3>
          <p>
            Ein Einfrequenz-GNSS-Empfänger ist bei freiem Himmel typischerweise auf wenige Meter genau. Unter
            Bäumen, an steilen Hängen oder in Gebäudenähe wird es ungenauer, einzelne Positionen können springen.
            Eine einzelne Rohposition darf deshalb nie allein ein Signal auslösen. Bewährt haben sich:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Qualitätsfilter</strong> – Positionen mit zu wenigen Satelliten oder schlechter Genauigkeitsangabe verwerfen.</li>
            <li><strong>Plausibilitätsprüfung</strong> – Sprünge verwerfen, die das Tier physisch nicht geschafft haben kann.</li>
            <li><strong>Glättung</strong> – Position und Richtung über mehrere Messungen mitteln, ergänzt durch Beschleunigungsdaten.</li>
            <li><strong>Pufferzone</strong> – die Warnzone so weit innen legen, dass normale GNSS-Abweichungen sie nicht verschieben.</li>
          </ul>
          <p>
            Ebenso wichtig ist die Antennenlage: Die GNSS-Antenne muss oben auf dem Nacken freie Sicht zum Himmel
            haben. Viele Halsbänder verwenden deshalb ein Gegengewicht, damit sich die Elektronik nicht verdreht.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Die Signalfolge: erst Ton, dann Impuls
          </h2>
          <p>
            Veröffentlichte Beschreibungen kommerzieller Systeme folgen demselben Muster: Betritt das Tier die
            Warnzone, ertönt ein akustisches Signal. Dreht es um, passiert nichts weiter. Läuft es weiter auf die
            Grenze zu, folgt ein kurzer elektrischer Impuls. Die Tiere lernen, den Ton mit dem Impuls zu
            verbinden, und reagieren nach einer Lernphase meist schon auf den Ton. Die Signallogik ist dabei
            ebenso eine Tierschutzfrage wie eine Regelungsaufgabe:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Feste Grenzen</strong> für Impulsenergie, Anzahl und Wiederholung – in der Firmware und möglichst auch in der Hardware.</li>
            <li><strong>Sicherer Zustand</strong> – bei schlechter Positionsqualität oder leerem Akku keine Impulse, sondern eine Meldung.</li>
            <li><strong>Protokollierung</strong> jedes Tons und Impulses mit Zeit und Ort, damit Häufigkeit und schlecht gesetzte Grenzen sichtbar werden.</li>
            <li><strong>Rückkehrregel</strong> – ein Tier jenseits der Grenze wird zurückgeführt, nicht an der Rückkehr gehindert.</li>
          </ul>

          <figure>
            <Image
              src="/blog/virtual-fencing-collars/diagram.webp"
              alt="Diagramm einer Weide mit virtueller Grenze und Warnzone: 1 Tonsignal beim Betreten der Warnzone, 2 kurzer Impuls nur, wenn das Tier weiterläuft, 3 kehrt es um, enden die Signale"
              width={1536}
              height={1024}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Die Signalfolge im Prinzip: erst Ton, ein Impuls nur, wenn das Tier weiterläuft, und nichts mehr, sobald es umkehrt.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Energie: die Grenze hinter allen anderen Entscheidungen
          </h2>
          <p>
            Die Akkulaufzeit reicht je nach Quelle von einigen Monaten bis zu einer ganzen Weidesaison – abhängig
            davon, wie oft die Position bestimmt wird und wie oft Signale ausgelöst werden.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>GNSS-Rate:</strong> Der Empfänger ist meist der größte Verbraucher. Häufige Messungen nur nahe der Grenze, seltene im Inneren oder wenn das Tier liegt, sparen viel Energie.</li>
            <li><strong>Funkverkehr:</strong> Zusammenfassungen und Ereignisse statt jeder einzelnen Position übertragen.</li>
            <li><strong>Signale:</strong> Eine ungünstig gesetzte Grenze, die ständig Signale auslöst, kann den Verbrauch dominieren.</li>
            <li><strong>Solar:</strong> Im Sommer hilfreich, im Winter und bei verdrehtem Halsband kaum. Ausgelegt wird auf den ungünstigsten Monat.</li>
          </ul>
          <p>
            Mehr zu Tastgrad und Ruhestrom-Budget lesen Sie in{" "}
            <Link href="/de/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Stromsparende Elektronik für Tier-Tracker im Außeneinsatz
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Funkanbindung und Mechanik
          </h2>
          <p>
            Weil die Grenze im Halsband liegt, dient die Funkverbindung der Verwaltung, nicht der Echtzeitsteuerung.
            LTE-M oder NB-IoT braucht keine Infrastruktur auf dem Hof, aber Netzabdeckung; LoRaWAN braucht ein
            eigenes Gateway, benötigt aber weniger Energie pro Nachricht. Unser{" "}
            <Link href="/de/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Vergleich GNSS + LoRa vs. GNSS + LTE-M
            </Link>{" "}
            geht darauf genauer ein. Mechanisch muss das Halsband Regen, Schlamm, Frost, Sonne und Scheuern an
            Pfählen aushalten: passende Schutzart, Zugentlastung, ein Verschluss, der das Tier nicht verletzt,
            und Elektroden, die durch das Fell zuverlässig Kontakt geben, ohne die Haut zu schädigen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Was vor der Entwicklung geklärt sein sollte
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Tierart und Größe – Rinder, Schafe und Ziegen brauchen unterschiedliche Halsbänder.</li>
            <li>Zielmärkte und deren Tierschutzvorgaben – in Deutschland und Österreich derzeit entscheidend.</li>
            <li>Geforderte Laufzeit und ob Solarladung am Standort realistisch ist.</li>
            <li>Funkversorgung: Mobilfunk oder ein eigenes LoRaWAN-Gateway.</li>
            <li>Weideflächen: offenes Grünland oder Wald und Hanglagen.</li>
            <li>Welche Daten der Betrieb tatsächlich sehen muss.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Häufige Fragen
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Ersetzt ein virtueller Zaun den Außenzaun?
          </h3>
          <p>
            In der Regel nicht. Fachempfehlungen sehen meist vor, an Straßen, Nachbarflächen und anderen kritischen Grenzen einen festen Zaun beizubehalten und den virtuellen Zaun innerhalb davon einzusetzen – etwa für Umtriebsweide, zum Schutz von Gewässerrändern oder Nachwuchsflächen und zur Unterteilung großer Koppeln ohne feste Zäune. Der feste Außenzaun ist das Sicherheitsnetz, falls ein Halsband ausfällt oder ein Tier nicht reagiert.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie lange brauchen Tiere, um einen virtuellen Zaun zu lernen?
          </h3>
          <p>
            Berichte aus Praxis und Beratung sprechen eher von Tagen als von Wochen, abhängig von Tierart, Alter, Herdenverhalten und der Art des Trainings. Bewährt hat sich, die virtuelle Grenze zunächst entlang eines vorhandenen festen Zauns einzuführen, damit die Tiere den Ton mit der Grenze verbinden, bevor der feste Zaun wegfällt. Das Signalprotokoll zeigt am zuverlässigsten, wann die Tiere gelernt haben: Die Zahl der Korrekturen sollte schnell sinken.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Was passiert, wenn der Akku leer ist oder das GNSS-Signal fehlt?
          </h3>
          <p>
            Ein gut konstruiertes Halsband geht in einen sicheren Zustand: Bei leerem Akku oder unzuverlässiger Position gibt es keine Signale mehr, statt zu raten. Das Tier wird von diesem Halsband dann aber auch nicht mehr begrenzt. Deshalb sind frühzeitige Akkuwarnungen, klare Alarme bei Positionsverlust und ein fester Außenzaun so wichtig. Der Akkustand sollte für jedes einzelne Tier sichtbar sein, nicht nur als Herdendurchschnitt.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Funktioniert ein virtueller Zaun auch bei Schafen und Ziegen?
          </h3>
          <p>
            Einige kommerzielle Systeme werden neben Rindern auch für Schafe und Ziegen angeboten. Kleinere Tiere brauchen leichtere Halsbänder, eine andere Passform und an die Tierart angepasste Signalstärken. Die Körpergröße begrenzt außerdem den Platz für Akku und Solarmodul, sodass lange Laufzeiten bei kleinen Wiederkäuern schwerer zu erreichen sind als bei Rindern.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Ist die Technik für Entwickler in Deutschland und Österreich überhaupt relevant?
          </h3>
          <p>
            Ja, aus mehreren Gründen: für Exportmärkte, in denen virtuelle Zäune erlaubt sind, für Forschungsprojekte und für den Fall, dass sich die Rechtslage ändert. Viele Bausteine – GNSS-Ortung, stromsparende Funkanbindung, robuste Halsbandmechanik – sind zudem für reine Ortungs- und Überwachungshalsbänder ohne Stromimpuls genauso gefragt.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Sie entwickeln ein Produkt für virtuelle Zäune oder Tierortung?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link> –
          Halsband-Elektronik, GNSS- und Energiekonzept können nach Ihren Anforderungen entwickelt werden. Siehe
          auch{" "}
          <ArticleServiceLink locale="de" href="/de/virtual-fencing" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Virtuelle Einzäunung</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">GPS-Tracker für Tiere</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Sie entwickeln ein Halsband für virtuelle Zäune?"
        description="Nennen Sie uns Tierart, Zielmärkte und gewünschte Laufzeit – wir helfen bei GNSS, Signallogik und Energiekonzept."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Virtuelle Einzäunung"
        secondaryHref="/de/virtual-fencing"
        secondaryLocale="de"
      />
    </>
  );
}
