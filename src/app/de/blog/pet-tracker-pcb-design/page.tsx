import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Leiterplattendesign für Tier-Tracker | PawSync",
  description:
    "Ein Halsband- oder Anhänger-Tracker ist keine kleinere GPS-Platine. Antennenplatzierung, Lagenaufbau und Gehäusevorgaben, die das Design wirklich bestimmen.",
  alternates: buildAlternates("de", "blog/pet-tracker-pcb-design"),
  openGraph: buildOpenGraph("de", "blog/pet-tracker-pcb-design"),
};

export default function BlogArticlePetTrackerPCBDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Tracker-Leiterplattendesign" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Leiterplattendesign für einen Haustier- oder Tier-Tracker: Was der Formfaktor wirklich vorgibt
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Ein Halsband- oder Anhänger-Tracker ist nicht einfach eine kleinere GPS-Platine — der Formfaktor selbst bestimmt die meisten der schwierigen Entscheidungen.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            Eine GPS/GNSS-Tracker-Platine für einen Laboraufbau und eine, die monatelang an einem Halsband
            getragen wird, sind elektrisch gesehen ähnliche Schaltungen. Mechanisch und elektromagnetisch
            sind es völlig unterschiedliche Aufgaben. Alles Folgende ergibt sich aus einer Tatsache: Die
            Platine muss klein sein, nah am Körper eines sich bewegenden Tieres sitzen und im Freien
            überstehen, ohne dass jemand sie öffnet, um einen Fehler zu beheben.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Mit der Einschränkung beginnen, nicht mit dem Chip
          </h2>
          <p>
            Es liegt nahe, ein Tracker-Design mit der Auswahl eines GNSS-Moduls und eines Funkmoduls zu
            beginnen und die Platine darum herum zu entwerfen. In der Praxis stehen die Gehäusemaße, die
            Geometrie des Halsbands oder der Anhängerklemme und die angestrebte Akkugröße meist zuerst fest
            — sie sind die Vorgaben, die sich später am schwersten ändern lassen, und die Platine muss in
            den Raum passen, den sie übrig lassen. Die Bauteilauswahl folgt aus diesem Rahmen, nicht
            umgekehrt.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Die Antennenplatzierung ist meist der schwierigste Teil
          </h2>
          <p>
            Hier liegt der Großteil der technischen Herausforderung eines tragbaren Trackers, und das wird
            leicht unterschätzt, bevor man selbst eine Platine layoutet hat.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>GNSS-Antennentyp.</strong> Eine Keramik-Patch-Antenne liefert zuverlässige Leistung
              mit einer bekannten Freihaltezone auf der Massefläche, hat aber einen Mindest-Platzbedarf, der
              direkt mit allem anderen auf einer kleinen Platine konkurriert. Eine eingebettete
              Leiterbahn- oder Chip-Antenne kann kleiner und günstiger sein, reagiert aber empfindlicher
              auf Layoutfehler und auf alles in ihrer Nähe — einschließlich des Akkus, metallischer
              Verschlüsse am Halsband oder eines leitfähigen Gehäuses.
            </li>
            <li>
              <strong>Körperbelastung.</strong> Eine Antenne, die nah am Körper eines Tieres montiert ist —
              besonders bei größeren Tieren —, erfährt eine HF-Belastung durch diesen Körper, die ein
              Antennen-Datenblatt für den freien Raum nicht berücksichtigt. Das kann die Antenne verstimmen
              und sowohl Empfindlichkeit als auch Abstrahlwirkungsgrad verringern. In der Praxis hilft nur,
              die Antennenleistung in einer Montageposition und Ausrichtung nahe am tatsächlichen
              Einsatzfall zu prüfen, nicht nur auf freier Werkbank.
            </li>
            <li>
              <strong>Freihaltezonen und Empfindlichkeitsverlust (Desense).</strong> Die GNSS-Antenne
              braucht Abstand zu digitalem Schaltrauschen und zum Akku. Ist ein zweites Funkmodul auf
              derselben Platine vorhanden — LoRa, LTE-M oder BLE —, braucht auch dieses eine eigene
              Freihaltezone und idealerweise physischen Abstand zur GNSS-Antenne, damit die Sendeleistung
              des zweiten Funkmoduls den (deutlich empfindlicheren) GNSS-Empfangspfad nicht stört.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Lagenaufbau und Layer-Anzahl
          </h2>
          <p>
            Ein einfaches Design mit niedriger Datenrate kommt mitunter mit zwei Lagen aus. Sobald jedoch
            ein GNSS-Frontend, ein zweites Funkmodul, eine Ladeschaltung und Sensorschnittstellen auf
            derselben kleinen Platine laufen, ist ein vierlagiger Aufbau mit einer durchgehenden,
            dedizierten Massefläche unter dem HF-Frontend meist die zuverlässigere Wahl — er gibt dem
            GNSS-Bereich eine saubere Referenzebene und hält verrauschte digitale Leiterbahnen von
            empfindlicher HF fern.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Spannungsversorgung und Batterieschutz auf der Platine
          </h2>
          <p>
            Bei einer nicht wiederaufladbaren Primärzelle ist der Strompfad vergleichsweise einfach: ein
            Low-Dropout-Regler oder ein kleiner Buck-Boost-Wandler, dimensioniert auf den Strom, den GNSS
            und Funkmodul während ihrer aktiven Phasen benötigen — nicht nur im Ruhezustand.
          </p>
          <p>
            Bei einer wiederaufladbaren Lithium-Ionen- oder LiPo-Zelle braucht die Platine einen
            Batterieschutz-IC — Überstrom-, Überspannungs- und Unterspannungsabschaltung — als
            nicht verhandelbares Sicherheitsbauteil, dazu einen Lade-IC, falls das Gerät über USB, eine
            Pogo-Pin-Dockingstation oder Solar geladen wird. Die Wahl der Reglertopologie (LDO oder
            Buck-Boost) ist selbst ein Kompromiss: Ein LDO ist einfacher und rauschärmer, verheizt aber die
            Spannungsdifferenz als Wärme — das fällt bei den höheren Strömen, die ein GNSS-Fix oder eine
            Funkübertragung kurzzeitig benötigen, stärker ins Gewicht.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Bauteilauswahl: Modul oder diskrete Lösung
          </h2>
          <p>
            Ein vorzertifiziertes GNSS-plus-Funk-Modul bringt ein Design schneller zu einem
            funktionsfähigen Prototyp, verfügt bereits über FCC-/CE-Funkzulassung und reduziert das
            HF-Layout-Risiko — zu einem Aufpreis bei Größe und Stückkosten gegenüber diskreten Bauteilen.
            Ein diskreter Chipsatz-Ansatz kann in Stückzahl kleiner und günstiger sein, verlagert aber die
            HF-Layout-Expertise und den Zulassungsprozess ins Projekt. Was sinnvoll ist, hängt von
            Produktionsvolumen, Zeitplan und dem gewünschten HF-Design-Spielraum ab — eine allgemeingültig
            richtige Antwort gibt es nicht.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Für das Gehäuse entwerfen, nicht nur für die Platine
          </h2>
          <p>
            Platinenumriss, Position der Befestigungsbohrungen und Steckerplatzierung müssen zusammen mit
            dem Gehäuse festgelegt werden, nicht danach. Halsband- oder Anhänger-Gehäuse erfordern oft ein
            Vergießen oder eine Schutzlackierung der Platine gegen Feuchtigkeit und Vibration — aber eine
            konkrete Schutzart gegen Wasser oder Staub (etwa eine IP-Schutzklasse) muss durch tatsächliche
            Prüfung am fertig montierten Gerät nachgewiesen werden. Das lässt sich nicht allein aus dem
            Platinendesign ableiten, unabhängig vom Gehäuse, in dem es am Ende steckt.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frühzeitig für die Fertigbarkeit entwerfen
          </h2>
          <p>
            Eine Platine, die auf der Werkbank einwandfrei funktioniert, kann in der Fertigung trotzdem
            mühsam werden, wenn Paneelisierung, Testpunkte für In-Circuit- oder Funktionstests und die
            Bauteilplatzierung für die Bestückungsautomaten nicht schon beim Layout berücksichtigt wurden.
            Eine Prüfung auf Fertigbarkeit vor Abschluss des Layouts — nicht erst nach dem ersten
            Prototypenlauf — ist eine günstige Absicherung gegen spätere Nacharbeit.
          </p>

          <p>
            Nichts davon ist für Embedded-Hardware ungewöhnlich. Ob ein Tracker-Leiterplattendesign im
            Feldeinsatz hält, hängt meist davon ab, wie früh Antennenplatzierung, Gehäuseintegration und
            Fertigbarkeit als Vorgaben ins Layout eingeflossen sind — statt als Probleme, die erst nach der
            ersten Platinencharge behoben werden.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planen Sie ein Tracker-Projekt und wissen nicht, wo Sie anfangen sollen?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link>, wir
          helfen Ihnen, die Vorgaben zu klären, bevor Sie sich auf ein Layout festlegen. Zur Wahl der
          Konnektivität des zweiten Funkmoduls siehe unseren Vergleich von{" "}
          <Link href="/de/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">GNSS + LoRa vs. GNSS + LTE-M</Link>. Zur
          Energiebudget-Seite des Designs siehe{" "}
          <Link href="/de/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Stromsparende Elektronik für Tier-Tracker im Außeneinsatz</Link>.
        </p>
      </article>

      <CTABanner
        heading="Haben Sie eine Tracker-Leiterplatte zu planen?"
        description="Nennen Sie uns Ihren Formfaktor, die gewünschte Akkulaufzeit und Ihre Konnektivitätsanforderungen — wir helfen bei den Layout-Abwägungen."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Tier-Tracking-Entwicklung"
        secondaryHref="/de/animal-tracking"
      />
    </>
  );
}
