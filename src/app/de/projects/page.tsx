import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ProjectCard from "@/components/terrasense/ProjectCard";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Projekte | PawSync",
  description:
    "Referenzdesigns und Konzeptarbeiten von PawSync — GPS-Tracker, virtuelle Einzäunung, Hofsensoren und IoT-Gateways.",
  alternates: buildAlternates("de", "projects"),
  openGraph: buildOpenGraph("de", "projects"),
};

const projects = [
  {
    title: "GPS-Tier-Tracker",
    industry: "Haustiertechnologie",
    stage: "Referenzdesign",
    technology: ["GPS/GNSS", "BLE", "LTE-M"],
    challenge: "Benötigte hochgenaue Standortverfolgung in einer halsbandmontierbaren Bauform mit mehrtägiger Akkulaufzeit.",
    solution: "Kombinierte ein stromsparendes GNSS-Modul mit taktgesteuerter Mobilfunkmeldung und bewegungsausgelöstem Aufwachen.",
    features: ["Geofence-Alarme", "Aktivitätsverlauf", "Mobile App"],
  },
  {
    title: "Intelligentes Haustierhalsband",
    industry: "Haustiertechnologie",
    stage: "Referenzdesign",
    technology: ["BLE", "IMU", "Temp.-Sensor"],
    challenge: "Gesundheitsüberwachung und Standortbewusstsein kombinieren, ohne ein sperriges, unbequemes Gerät.",
    solution: "Integration eines IMU- und Temperatursensors auf einer kompakten Leiterplatte mit flexiblem Halsbandgehäuse.",
    features: ["Aktivitäts-Tracking", "Temperaturalarme", "Wiederaufladbar"],
  },
  {
    title: "Prototyp für virtuelle Einzäunung",
    industry: "Nutztiere",
    stage: "Referenzdesign",
    technology: ["GPS/GNSS", "LoRa", "Solar"],
    challenge: "Weidende Rinder auf großen Weideflächen eingrenzen, ohne physische Zäune zu installieren.",
    solution: "GPS-Halsband mit progressiven Audiosignalen, das die Position über eine LoRa-Funkstrecke an ein Solar-Gateway meldet.",
    features: ["Individuelle Zonen", "Ausbruchsalarme", "Solargestützt"],
  },
  {
    title: "Nutztierüberwachungsknoten",
    industry: "Nutztiere",
    stage: "Referenzdesign",
    technology: ["LoRa", "IMU", "RFID"],
    challenge: "Herdenaktivität und Standort über Gelände mit schlechter Mobilfunkabdeckung hinweg verfolgen.",
    solution: "Weitreichende LoRa-Knoten, die an ein zentrales Gateway melden, mit RFID zur individuellen Identifikation.",
    features: ["Mehrtier-Flottenansicht", "Stromsparendes Design", "RFID-ID"],
  },
  {
    title: "LoRa-Hofsensor",
    industry: "Intelligente Landwirtschaft",
    stage: "Referenzdesign",
    technology: ["LoRa", "Umweltsensoren"],
    challenge: "Temperatur, Luftfeuchtigkeit und Bodenfeuchte über eine große Fläche mit einem Gateway überwachen.",
    solution: "Batteriebetriebene Sensorknoten, ausgelegt auf mehrjährige Laufzeit, die über ein Weitverkehrs-LoRa-Netzwerk melden.",
    features: ["Multisensor", "Mehrjähriger Akku-Zielwert", "Gateway-fähig"],
  },
  {
    title: "Intelligenter Fütterungscontroller",
    industry: "Hofautomatisierung",
    stage: "Referenzdesign",
    technology: ["Wägezelle", "RFID", "Wi-Fi"],
    challenge: "Genaue, individuell nachverfolgte Futterportionen über mehrere Tiere hinweg liefern.",
    solution: "Wägezellen-gestützte Ausgabe mit RFID-Erkennung, protokolliert und über ein mobiles Dashboard einsehbar.",
    features: ["Portionskontrolle", "Staufacherkennung", "Fütterungsverlauf"],
  },
  {
    title: "Temperatur- & Feuchtigkeitsmonitor",
    industry: "Geflügelhaltung",
    stage: "Referenzdesign",
    technology: ["Umweltsensoren", "Wi-Fi"],
    challenge: "Enge Umwelttoleranzen in einem Geflügelstall einhalten, mit sofortiger Alarmierung bei Abweichungen.",
    solution: "Mehrpunkt-Sensorarray mit schwellenwertbasierten Alarmen, die an ein Facility-Dashboard übermittelt werden.",
    features: ["Schwellenwertalarme", "Mehrzonig", "Historische Trends"],
  },
  {
    title: "Automatischer Bewässerungscontroller",
    industry: "Intelligente Landwirtschaft",
    stage: "Referenzdesign",
    technology: ["Durchflusssensor", "Bodenfeuchte", "Mobilfunk-IoT"],
    challenge: "Bewässerung anhand tatsächlicher Bodenverhältnisse statt fester Zeitpläne automatisieren.",
    solution: "Bodenfeuchte-gesteuerte Ventilsteuerung mit Durchflussüberwachung und Leckerkennung.",
    features: ["Leckerkennung", "Regelbasierte Logik", "Fernübersteuerung"],
  },
  {
    title: "RFID-Tieridentifikationssystem",
    industry: "Nutztiere",
    stage: "Referenzdesign",
    technology: ["RFID", "Embedded Controller"],
    challenge: "Einzelne Tiere an Fütterungs- und Zugangspunkten unter Außenbedingungen zuverlässig identifizieren.",
    solution: "Wetterfeste RFID-Lesegeräte, integriert mit Fütterungs- und Torcontrollern für automatisierte Zählung.",
    features: ["Tierzählung", "Zutrittskontrolle", "Feldtauglich"],
  },
  {
    title: "Umweltalarmgerät",
    industry: "Tierheime",
    stage: "Referenzdesign",
    technology: ["Rauchsensor", "Temp.-Sensor", "Mobilfunk-IoT"],
    challenge: "Brand- und Extremtemperaturrisiken in unbeaufsichtigten Tierunterkünften erkennen.",
    solution: "Redundante Rauch- und Temperaturerfassung mit mobilfunkgestützten Alarmen, unabhängig von Wi-Fi.",
    features: ["Lokaler Alarm", "SMS- & App-Alarme", "Akku-Backup"],
  },
  {
    title: "Hof-Gateway",
    industry: "Intelligente Landwirtschaft",
    stage: "Referenzdesign",
    technology: ["LoRaWAN", "Mobilfunk", "Solar"],
    challenge: "Daten von Dutzenden Feldsensoren ohne bestehende Netzwerkinfrastruktur zusammenführen.",
    solution: "Solarbetriebenes LoRaWAN-Gateway mit Mobilfunk-Backhaul zum Cloud-Dashboard.",
    features: ["Solargestützt", "30-Tage-Backup-Ziel", "Multi-Knoten-Kapazität"],
  },
  {
    title: "Batteriebetriebenes IoT-Gerät",
    industry: "Kundenspezifische Elektronik",
    stage: "Referenzdesign",
    technology: ["Power Management", "BLE", "Stromsparender Mikrocontroller"],
    challenge: "Akkulaufzeit von Tagen auf Monate erhöhen, ohne die Sensorgenauigkeit zu beeinträchtigen.",
    solution: "Aggressives Duty-Cycling und leistungsgesteuerte Sensoren, verwaltet von einem stromsparenden Mikrocontroller.",
    features: ["Mehrmonatiger Akku-Zielwert", "Schlafmodus-Design", "BLE-Meldung"],
  },
];

export default function ProjectsPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Projekte" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Projekte</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Referenzdesigns &amp; Konzeptarbeiten
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Diese Karten veranschaulichen die Art von Hardware- und
          Firmware-Problemen, für die wir entwickeln — Haustiertechnologie,
          Nutztierhaltung und Hofautomatisierung. Es handelt sich um
          technische Referenzdesigns und Konzeptarbeiten, nicht um
          abgeschlossene Kundenprojekte, ausgelieferte Produkte oder
          feldgetestete Ergebnisse. Erzählen Sie uns von Ihrem Projekt, und
          wir skizzieren gemeinsam, was zur Umsetzung nötig ist.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} locale="de" {...project} />
          ))}
        </div>
      </section>

      <CTABanner
        heading="Haben Sie ein ähnliches Problem zu lösen?"
        description="Erzählen Sie uns von Ihren Tieren, Ihrer Umgebung und Ihren Anforderungen — wir skizzieren gemeinsam, was zur Umsetzung nötig ist."
        primaryLabel="Projekt starten"
        primaryHref="/de/contact"
      />
    </>
  );
}
