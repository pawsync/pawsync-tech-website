import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog | PawSync",
  description:
    "Engineering-Notizen zu Tier-Tracking, Hof-IoT, virtueller Einzäunung, Funkprotokollen und dem Bau von Elektronik für den Außeneinsatz.",
  alternates: buildAlternates("de", "blog"),
};

const articles = [
  { title: "Wie IoT die Nutztierhaltung verändert", excerpt: "Ein Blick darauf, wie vernetzte Sensoren und Tracking das tägliche Herdenmanagement verändern." },
  { title: "GPS vs. LoRa für Tier-Tracking", excerpt: "Zwei sehr unterschiedliche Technologien, jede geeignet für unterschiedliche Anforderungen an Reichweite, Energie und Genauigkeit." },
  { title: "Wie virtuelle Einzäunung funktioniert", excerpt: "Die GPS-, Kommunikations- und Alarmebenen hinter einer virtuellen Grenze im Detail." },
  { title: "Entwicklung stromsparender Tier-Tracking-Geräte", excerpt: "Designentscheidungen, die bestimmen, ob ein Tracker Tage oder Monate mit einer Ladung durchhält." },
  { title: "IoT-Sensoren für jeden intelligenten Hof", excerpt: "Die zentralen Sensortypen, die einem Betrieb echte Einblicke in seine Abläufe geben." },
  { title: "Wie automatisierte Fütterungssysteme funktionieren", excerpt: "Vom Futterbehälter zur mobilen App — die Hardwarekette hinter geplanter, portionsgesteuerter Fütterung." },
  { title: "RFID für die Nutztieridentifikation", excerpt: "Warum RFID der Standard für zuverlässige, kostengünstige Tieridentifikation bleibt." },
  { title: "Umweltüberwachung für Geflügelfarmen", excerpt: "Die engen Toleranzen, die die Geflügelhaltung erfordert, und wie Sensoren helfen, sie einzuhalten." },
  { title: "Wie intelligente Sensoren Ausfälle von Hofanlagen verhindern können", excerpt: "Frühwarnüberwachung für Pumpen, Generatoren und andere kritische Infrastruktur." },
  { title: "Elektronikdesign für landwirtschaftliche Außenumgebungen", excerpt: "Staub, Feuchtigkeit, Temperaturschwankungen — Hardware entwickeln, die im Feld übersteht." },
  { title: "BLE vs. Wi-Fi vs. LoRa für Hof-IoT-Geräte", excerpt: "Das richtige Funkprotokoll wählen — je nach Reichweite, Energiebedarf und Infrastruktur." },
  { title: "Was steckt in der Entwicklung eines individuellen IoT-Produkts?", excerpt: "Ein Überblick über die Phasen zwischen einer Idee und einem fertigungsreifen Gerät." },
];

export default function BlogPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering-Notizen zu Tier- &amp; Hoftechnologie
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Praxisnahe Beiträge zu Hardware, Funkprotokollen und
          Designentscheidungen hinter vernetzter Tier- und Hofelektronik.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <Newspaper className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-base font-bold leading-snug text-[var(--ts-navy)]">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--ts-gray)]">
          Vollständige Artikel folgen in Kürze — dies sind laufende Themen
          für unseren Engineering-Blog.
        </p>
      </section>

      <CTABanner
        heading="Möchten Sie, dass wir ein bestimmtes Thema behandeln?"
        description="Wenn Sie eine Frage zu Animal-Tech oder Hof-IoT beantwortet haben möchten, lassen Sie es uns wissen."
        primaryLabel="Kontaktieren Sie uns"
        primaryHref="/de/contact"
      />
    </>
  );
}
