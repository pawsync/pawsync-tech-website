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
  title: "IoT-Elektronikentwicklung: Vom Prototyp zur Serie | PawSync",
  description:
    "Der Ablauf der IoT-Hardwareentwicklung Schritt für Schritt: Anforderungen, Machbarkeitsnachweis, EVT, DVT und PVT sowie CE-Kennzeichnung, RED und Cyber Resilience Act.",
  alternates: buildAlternates("de", "blog/iot-hardware-development-process"),
  openGraph: buildOpenGraph("de", "blog/iot-hardware-development-process", {
    url: "/blog/iot-hardware-development-process/og-de.jpg",
    alt: "Phasen der Produktentwicklung: Machbarkeitsaufbau auf dem Steckbrett, eigene Leiterplatte für EVT und DVT, fertiges Gehäuse für PVT",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/iot-hardware-development-process/og-de.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "de",
  route: "blog/iot-hardware-development-process",
  headline: "Vom Prototyp zur Serie: Der Ablauf der IoT-Elektronikentwicklung",
  description: metadata.description ?? "",
  image: "/blog/iot-hardware-development-process/og-de.jpg",
});

export default function BlogArticleIotHardwareDevelopmentDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Vom Prototyp zur Serie" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Vom Prototyp zur Serie: Der Ablauf der IoT-Elektronikentwicklung
        </h1>
        <ArticleDate route="blog/iot-hardware-development-process" locale="de" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein funktionierender Prototyp auf dem Labortisch ist ein wichtiger Meilenstein – aber meist weniger als
          die Hälfte des Weges zu einem Produkt, das in Stückzahlen gefertigt, zertifiziert und verkauft werden
          kann. Dafür sind die folgenden Phasen da, und deshalb kostet es meist mehr, sie zu überspringen.
        </p>
        <Image
          src="/blog/iot-hardware-development-process/hero-de.webp"
          alt="Phasen der Produktentwicklung: Machbarkeitsaufbau auf dem Steckbrett, eigene Leiterplatte für EVT und DVT, fertiges Gehäuse für PVT"
          width={1755}
          height={896}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Die Phasen im Überblick
          </h2>
          <p>
            In der Elektronikentwicklung hat sich eine Abfolge von Phasen mit klaren Freigabepunkten etabliert.
            Bezeichnungen und Stückzahlen unterscheiden sich von Unternehmen zu Unternehmen, die Logik ist aber
            gleich: Jede Phase beantwortet eine bestimmte Frage, bevor mehr Geld gebunden wird.
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Anforderungen</strong> – was muss das Gerät wo, wie lange und zu welchen Kosten leisten?</li>
            <li><strong>Machbarkeitsnachweis</strong> – ist das größte technische Risiko überhaupt lösbar?</li>
            <li><strong>Prototyp</strong> – funktioniert ein eigenes Design in realistischer Form?</li>
            <li><strong>EVT</strong> (Engineering Validation Test) – erfüllt das Design die funktionalen Anforderungen?</li>
            <li><strong>DVT</strong> (Design Validation Test) – besteht es Umwelt- und Zulassungsprüfungen?</li>
            <li><strong>PVT</strong> (Production Validation Test) – kann die Fertigung es zuverlässig in Stückzahl bauen?</li>
            <li><strong>Serienproduktion</strong> – Hochlauf, Rückmeldungen aus dem Feld fließen ins Design zurück.</li>
          </ol>

          <figure>
            <Image
              src="/blog/iot-hardware-development-process/diagram-de.webp"
              alt="Diagramm der sechs Phasen: 1 Anforderungen, 2 Machbarkeitsnachweis, 3 Prototyp, 4 EVT, 5 DVT mit CE-, UKCA- und FCC-Zulassung, 6 PVT; die Firmware entsteht parallel"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Die sechs Phasen von der Idee bis zur Serie – Zulassung in der DVT, Firmware parallel dazu.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            1. Anforderungen: hier sind Änderungen am günstigsten
          </h2>
          <p>
            Gute Anforderungen an ein IoT-Gerät sind konkret und messbar: Akkulaufzeit bei einem genannten
            Meldeintervall, Betriebstemperaturbereich, Schutzart, Gehäusegröße und Gewicht, Zielmärkte (sie
            bestimmen die Zulassungen), verfügbare Funkversorgung am Einsatzort und Zielkosten bei realistischer
            Stückzahl. Vage Vorgaben wie „lange Laufzeit“ oder „robust“ kosten später Monate. Jeder Punkt dieser
            Liste verändert die Hardware – in einem Dokument ist eine Änderung weitaus günstiger als auf einer
            Leiterplatte.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            2. Machbarkeitsnachweis: das größte Risiko zuerst
          </h2>
          <p>
            Der Machbarkeitsnachweis entsteht meist aus Entwicklungs- und Evaluierungsboards. Er muss nicht wie ein
            Produkt aussehen, sondern früh die riskanteste Frage beantworten: Reicht die Funkverbindung vom Feld
            bis zum Gateway? Erfasst der Sensor, was er erfassen soll? Ist das Energiebudget realistisch? Eng
            und schnell ist hier das Ziel.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            3. Prototyp: die erste eigene Leiterplatte
          </h2>
          <p>
            Die erste eigene Platine bringt Bauteile, Stromversorgung, Antenne und Firmware in annähernd finaler
            Größe zusammen. Jetzt zeigen sich Probleme, die Entwicklungsboards verdecken: Antennenleistung im
            Gehäuse, ein Ruhestrom, der wegen einer einzigen Leckstelle zehnmal höher ist als erwartet, oder ein
            Steckverbinder, der nicht passt. Mindestens eine Platinenrevision sollte eingeplant sein. Unser Beitrag
            zum{" "}
            <Link href="/de/blog/pet-tracker-pcb-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Leiterplattendesign für einen Tier-Tracker
            </Link>{" "}
            zeigt, wie stark Gehäuse und Antenne das Layout bestimmen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            4. EVT: erfüllt das Design die Spezifikation?
          </h2>
          <p>
            EVT-Muster entstehen mit serienreifen Bauteilen und nahezu finalem Layout, meist in kleiner Stückzahl.
            Jede Anforderung wird geprüft und dokumentiert: Funktionen, Stromaufnahme in jedem Betriebszustand,
            Funkleistung, Sensorgenauigkeit, Firmwareverhalten. Fehler sind hier noch vergleichsweise günstig zu
            beheben. Ein häufiger Fehler ist, bereits jetzt teure Serienwerkzeuge wie Spritzgussformen zu bestellen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            5. DVT: Umweltprüfungen und Zulassung
          </h2>
          <p>
            DVT-Muster sollten mit serienreifen Prozessen und Werkstoffen gebaut werden, denn sie durchlaufen die
            Umweltprüfungen (Temperatur, Feuchte, Vibration, Fall, Wasser und Staub) sowie Vorab- und
            Zulassungsmessungen. Bei vernetzten Geräten ist die Zulassung oft die größte einzelne Verzögerung – es
            lohnt sich, sie von Anfang an einzuplanen.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Was für Deutschland, Österreich und die EU gilt
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>CE-Kennzeichnung:</strong> Für Geräte mit Funk gilt die Funkanlagenrichtlinie (RED,
              2014/53/EU). Seit August 2025 gehören dazu für viele internetfähige Funkgeräte auch
              Cybersicherheitsanforderungen.
            </li>
            <li>
              <strong>Cyber Resilience Act:</strong> Die EU-Verordnung stellt weitere Anforderungen an Produkte mit
              digitalen Elementen; die wesentlichen Pflichten gelten ab Dezember 2027. Wer heute ein vernetztes
              Produkt plant, sollte Update-Fähigkeit und Schwachstellenmanagement von Beginn an berücksichtigen.
            </li>
            <li>
              <strong>Exportmärkte:</strong> Für Großbritannien gilt die UKCA-Kennzeichnung (CE wird für viele
              Produktgruppen weiter anerkannt), für die USA eine FCC-Zulassung nach Part 15.
            </li>
            <li>
              <strong>Batterien:</strong> Lithiumzellen und -akkus brauchen für den Versand eine Prüfdokumentation
              nach UN 38.3.
            </li>
          </ul>
          <p>
            Vorzertifizierte Funkmodule, ein Antennendesign nah an der Referenz des Modulherstellers und
            Vorab-Messungen vor der formalen Prüfung senken das Risiko eines späten Fehlschlags deutlich.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            6. PVT: die Fertigung nachweisen
          </h2>
          <p>
            PVT ist der erste Lauf auf der echten Fertigungslinie mit finalen Werkzeugen, Prüfadaptern und
            Prozessen. Die Frage lautet nicht mehr „funktioniert das Design?“, sondern „funktioniert jedes Gerät,
            und können wir es belegen?“. Dafür müssen Entscheidungen zu fertigungs- und prüfgerechtem Design früh
            gefallen sein: Testpunkte auf der Leiterplatte, eine Programmier- und Kalibriervorrichtung, ein
            Endtest und die Erfassung von Seriennummer, Firmwarestand und Prüfergebnis je Gerät.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Firmware läuft parallel zur Hardware
          </h2>
          <p>
            Die Firmwareentwicklung wartet nicht auf die finale Hardware. Sie beginnt auf Entwicklungsboards und
            reift mit jedem Muster. Zwei Funktionen sollten früh eingeplant werden: <strong>sichere
            Over-the-Air-Updates</strong>, damit Geräte im Feld ohne Rückruf korrigiert werden können – auch im
            Hinblick auf den Cyber Resilience Act –, und <strong>Ferndiagnose</strong> mit Akkuspannung,
            Signalstärke und Reset-Ursachen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Wo IoT-Hardwareprojekte typischerweise scheitern
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Anforderungen ohne Einsatzumgebung oder Zielmärkte.</li>
            <li>Serienwerkzeuge, bevor das Design validiert ist.</li>
            <li>Zulassung als letzter Schritt statt als Designvorgabe.</li>
            <li>Akkulaufzeit im Labor gemessen statt unter realen Funk- und Temperaturbedingungen.</li>
            <li>Kein Konzept für Prüfung in der Fertigung und Updates im Feld.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Landwirtschaft und Tiere: zusätzliche Anforderungen
          </h2>
          <p>
            Geräte für Höfe und Tiere bringen eigene Randbedingungen mit: große Temperaturschwankungen, Schlamm,
            Wasser und Ammoniak, Tiere, die beißen, scheuern und treten, weite Wege zum nächsten Gateway – und
            Nutzer, die eine ganze Saison ohne Wartung erwarten. Diese Punkte gehören vom ersten Tag an in die
            Anforderungen, denn sie bestimmen Gehäuse, Akku und Funkwahl. Mehr zur Energieseite in unseren{" "}
            <Link href="/de/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Notizen zu stromsparender Elektronik für Tier-Tracker
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Häufige Fragen
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wie lange dauert die Entwicklung eines IoT-Geräts?
          </h3>
          <p>
            Das hängt von Komplexität, Zulassungsumfang und der Zahl der Platinenrevisionen ab – Vorsicht also bei pauschalen Zusagen. Für ein vernetztes Gerät mit eigener Leiterplatte, Funk und Gehäuse erstreckt sich der Weg von den Anforderungen bis zur Serie häufig über viele Monate. Zulassungsprüfungen, Gehäusewerkzeuge und Bauteil-Lieferzeiten sind oft die längsten Posten und gehören deshalb von Anfang an in die Planung.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Was bestimmt die Entwicklungskosten?
          </h3>
          <p>
            Die wichtigsten Faktoren sind die Zahl der Funktionen und Sensoren, die eingesetzten Funktechnologien, die Zielmärkte (jeder bringt Zulassungsaufwand), Umweltanforderungen wie Wasserdichtheit, das Gehäuse mit seinen Werkzeugen sowie die Stückzahl. Klare Anforderungen senken die Kosten zuverlässiger als alles andere, weil sie Neukonstruktionen vermeiden.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Kann ein Entwicklungsboard oder Modul direkt ins Produkt?
          </h3>
          <p>
            Für sehr kleine Stückzahlen oder Pilotprojekte kann ein fertiges Modul oder System-on-Module eine sinnvolle Abkürzung sein. In der Serie ist eine eigene Leiterplatte meist kleiner, günstiger pro Stück und besser auf Gehäuse, Akku und Antenne abgestimmt. Viele Produkte kombinieren beides: ein vorzertifiziertes Funkmodul auf einer eigenen Trägerplatine.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Muss das Produkt geprüft werden, wenn das Funkmodul zertifiziert ist?
          </h3>
          <p>
            Ja. Ein vorzertifiziertes Modul vereinfacht den Funkteil der Konformität, aber das fertige Produkt muss die geltenden Anforderungen als Ganzes erfüllen – etwa EMV, elektrische Sicherheit und in der EU die Funkanlagenrichtlinie für das vollständige Gerät. Die Modulzertifizierung ist ein Vorsprung, kein Ersatz.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Worauf sollten Unternehmen in Deutschland und Österreich besonders achten?
          </h3>
          <p>
            Neben CE-Kennzeichnung und Funkanlagenrichtlinie rückt die Cybersicherheit in den Vordergrund: Sichere Updates, ein Prozess für den Umgang mit Schwachstellen und eine nachvollziehbare Dokumentation der Softwarestände sollten schon in der Entwicklung angelegt werden, damit spätere Pflichten aus dem Cyber Resilience Act nicht zu einer Neukonstruktion führen.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Was gehört in ein Lastenheft für ein IoT-Gerät?
          </h3>
          <p>
            Mindestens: Einsatzzweck und Nutzer, die Umgebung (Temperaturbereich, Feuchte, Staub, mechanische
            Belastung), die geforderte Laufzeit bei einem konkreten Meldeintervall, die verfügbare Funkversorgung am
            Einsatzort, Zielmärkte und damit die nötigen Zulassungen, Gehäusevorgaben wie Größe, Gewicht und
            Schutzart, Anforderungen an Updates und Datenschutz sowie Zielkosten und geplante Stückzahlen. Je
            konkreter diese Punkte sind, desto belastbarer werden Angebot, Zeitplan und Architektur – und desto
            seltener muss später nachkonstruiert werden.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Sie planen ein vernetztes Gerät und möchten die frühen Phasen richtig aufsetzen?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Sprechen Sie uns an</Link> –
          Anforderungen, Leiterplattendesign, Firmware und Prototypen können projektbezogen entwickelt werden.
          Siehe auch{" "}
          <ArticleServiceLink locale="de" href="/de/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Individuelle Elektronik & IoT-Produktentwicklung</ArticleServiceLink> und{" "}
          <ArticleServiceLink locale="de" href="/de/how-we-work" className="font-semibold text-[var(--ts-dark-green)] hover:underline">So arbeiten wir</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Vom Prototyp zum Produkt?"
        description="Sagen Sie uns, wo Ihr Projekt steht und wohin es soll – wir helfen bei der Planung der nächsten Phase."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Individuelle Elektronik"
        secondaryHref="/de/custom-electronics"
        secondaryLocale="de"
      />
    </>
  );
}
