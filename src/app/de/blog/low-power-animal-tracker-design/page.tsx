import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Stromsparende Elektronik für Tier-Tracker im Außeneinsatz | PawSync",
  description:
    "Die Akkulaufzeit eines tragbaren Tier-Trackers ist ein Energiebudget-Problem. Die Techniken, die entscheiden, ob ein Gerät Tage oder Monate durchhält.",
  alternates: buildAlternates("de", "blog/low-power-animal-tracker-design"),
  openGraph: buildOpenGraph("de", "blog/low-power-animal-tracker-design"),
};

export default function BlogArticleLowPowerDesignDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog", href: "/de/blog" }, { label: "Stromsparendes Tracker-Design" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering-Notizen</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Stromsparende Elektronik für Tier-Tracker im Außeneinsatz
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Warum Akkulaufzeit im Kern ein Energiebudget-Problem ist, und die Techniken, die sie von Tagen auf Monate strecken.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            Die Akkulaufzeit eines Halsband- oder Ohrmarken-Trackers läuft auf eine einzige Rechnung
            hinaus: durchschnittliche Stromaufnahme gegenüber Akkukapazität. Ein Gerät mit durchschnittlich
            1 mA Stromaufnahme aus einer 1000-mAh-Zelle läuft rund 1000 Stunden (etwa 42 Tage), bevor
            Temperatureffekte und Selbstentladung berücksichtigt werden; senkt man die durchschnittliche
            Stromaufnahme auf 0,1 mA, kann dieselbe Zelle fast ein Jahr halten. Nahezu jede
            Designentscheidung bei einem tragbaren Tracker ist auf die eine oder andere Weise ein Versuch,
            diesen Durchschnitt zu senken.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Wo die Energie tatsächlich hingeht
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>GNSS-Erfassung.</strong> Der Empfang und die Verriegelung auf Satellitensignale gehört
              zu den energieintensivsten Vorgängen eines Trackers, und wie lange er dauert, ist ebenso
              wichtig wie die Stromaufnahme während des Vorgangs. Ein <em>Kaltstart</em> (ohne aktuelle
              Almanach- oder Positionsdaten) kann zehn bis mehrere zehn Sekunden bis zur Positionsbestimmung
              dauern; ein <em>Warm-</em> oder <em>Hot-Start</em>, der kürzlich gespeicherte Ephemeriden- und
              Zeitdaten nutzt, kann in wenigen Sekunden verriegeln. Kaltstarts zu minimieren — indem die
              Sicherungsdaten des Empfängers über Schlafzyklen hinweg erhalten bleiben — ist eine der
              wirkungsvollsten Energieentscheidungen im gesamten Design.
            </li>
            <li>
              <strong>Funkübertragung.</strong> Das Senden von Daten — über LoRa, LTE-M, BLE oder Wi-Fi —
              erfordert für die (meist kurze) Dauer der Übertragung erheblichen Strom. Nutzlastgröße,
              Funkwahl und Meldehäufigkeit stehen alle in direktem Zielkonflikt mit der Akkulaufzeit.
            </li>
            <li>
              <strong>Sensoren und der Mikrocontroller.</strong> Ein IMU (Beschleunigungssensor/Gyroskop),
              ein Temperatursensor und der Mikrocontroller selbst ziehen auch im Stromsparmodus etwas Strom;
              die kumulierte Wirkung vieler kleiner Dauerverbraucher kann mit den größeren, intermittierenden
              Verbrauchern konkurrieren.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Die Kerntechnik: konsequentes Duty-Cycling
          </h2>
          <p>
            Statt Mikrocontroller, GNSS-Empfänger und Funkmodul dauerhaft mit Strom zu versorgen, verbringt
            ein gut konzipierter Tracker die überwiegende Zeit in einem Tiefschlafzustand mit nur
            Mikroampere-Verbrauch, wacht per Timer oder Interrupt für sinnvolle Aufgaben auf und kehrt
            danach in den Schlaf zurück. Die eigentliche Entwicklungsarbeit liegt darin, zu entscheiden,{" "}
            <em>wann</em> aufgewacht wird und <em>wie viel</em> im Wachzustand erledigt wird.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Bewegungsausgelöstes Aufwachen
          </h3>
          <p>
            Ein stromsparender Beschleunigungssensor kann einen Hardware-Interrupt auslösen, sobald er
            Bewegung oberhalb eines Schwellenwerts erkennt, ohne dass der Haupt-Mikrocontroller dafür wach
            sein muss. So kann ein Design die Position häufiger melden, während sich ein Tier aktiv bewegt,
            und die Meldefrequenz deutlich reduzieren, wenn es ruht oder auf der Stelle grast — ein weit
            verbreitetes Muster in tragbarer Tracking-Hardware generell, da es den Energieeinsatz dort
            konzentriert, wo sich die Standortdaten tatsächlich ändern.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Meldeintervall als Designvorgabe, nicht als Nachgedanke
          </h3>
          <p>
            Jede Entscheidung zum Meldeintervall ist ein direkter Kompromiss zur Akkulaufzeit: Eine
            Halbierung des Intervalls verdoppelt in etwa den Energieverbrauch für GNSS-Positionsbestimmungen
            und Funkübertragungen. Diesen Zielkonflikt sollte man explizit mit denjenigen klären, die die
            Anforderungen definieren, statt standardmäßig &quot;so oft wie möglich&quot; anzusetzen — eine
            landwirtschaftliche Anwendung, die Bewegungen im Weidemaßstab verfolgt, benötigt in der Regel
            deutlich seltenere Updates als ein Anwendungsfall mit feingranularer Verhaltensverfolgung.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Akkuchemie und Einsatzumgebung
          </h2>
          <p>
            Tracker im Außeneinsatz müssen zudem Temperaturschwankungen überstehen, die Elektronik im
            Innenbereich selten erlebt, und das beeinflusst die Akkuwahl ebenso stark wie das Schaltungsdesign.
            Primäre Lithiumzellen (etwa Li-SOCl₂) bieten hohe Energiedichte, lange Lagerfähigkeit und
            vergleichsweise stabile Leistung über einen weiten Temperaturbereich, sind aber nicht
            wiederaufladbar — das Gerät wird ersetzt oder die Batterie am Ende der Lebensdauer getauscht.
            Wiederaufladbare Lithium-Ionen- oder LiPo-Zellen unterstützen Solarladung oder periodisches
            Nachladen, verlieren aber bei Kälte spürbarer an nutzbarer Kapazität, und ihre Zyklenlebensdauer
            hängt von Lade-/Entladeverhalten und Temperatur ab. Unabhängig von der gewählten Chemie braucht
            das Energiebudget Reserve für Kapazitätsminderung bei der niedrigsten Temperatur, bei der das
            Gerät betrieben werden soll — nicht nur bei Raumtemperatur.
          </p>

          <p>
            Keine dieser Techniken ist exotisch — es handelt sich um Standardpraxis im Embedded-Bereich. Ob
            die Akkulaufzeit eines Trackers überzeugt oder enttäuscht, hängt meist davon ab, wie konsequent
            diese Techniken gemeinsam angewendet wurden und wie früh im Designprozess das Energiebudget als
            reale Randbedingung behandelt wurde — statt als etwas, das man nach dem ersten Prototyp
            nachbessert.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Arbeiten Sie an einem Akkulaufzeit-Ziel für Ihr eigenes Gerät?{" "}
          <Link href="/de/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Kontaktieren Sie uns</Link>, und wir helfen Ihnen, das Energiebudget zu skizzieren.
        </p>
      </article>

      <CTABanner
        heading="Haben Sie ein Energiebudget zu klären?"
        description="Nennen Sie uns Ihr Akkulaufzeit-Ziel, die Meldefrequenz und die Einsatzumgebung — wir helfen Ihnen, das Machbare zu skizzieren."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
        secondaryLabel="Zurück zum Blog"
        secondaryHref="/de/blog"
      />
    </>
  );
}
