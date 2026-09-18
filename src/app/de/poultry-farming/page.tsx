import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import PoultryHero from "@/components/terrasense/poultry/de/PoultryHero";
import PoultrySolutionsOverview from "@/components/terrasense/poultry/de/PoultrySolutionsOverview";
import PoultryEnvironmentalMonitoring from "@/components/terrasense/poultry/de/PoultryEnvironmentalMonitoring";
import PoultryClimateAutomation from "@/components/terrasense/poultry/de/PoultryClimateAutomation";
import PoultrySmartFeeding from "@/components/terrasense/poultry/de/PoultrySmartFeeding";
import PoultryWaterManagement from "@/components/terrasense/poultry/de/PoultryWaterManagement";
import PoultrySafetyWarning from "@/components/terrasense/poultry/de/PoultrySafetyWarning";
import PoultryCentralController from "@/components/terrasense/poultry/de/PoultryCentralController";
import PoultryMultiHouseMonitoring from "@/components/terrasense/poultry/de/PoultryMultiHouseMonitoring";
import PoultryConnectivity from "@/components/terrasense/poultry/de/PoultryConnectivity";
import PoultryCustomElectronics from "@/components/terrasense/poultry/de/PoultryCustomElectronics";
import PoultryApplications from "@/components/terrasense/poultry/de/PoultryApplications";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Geflügelfarm-Technologie & Automatisierung | PawSync",
  description:
    "Kundenspezifische IoT-Geräte für die Geflügelautomatisierung — Stallüberwachung, Klimasensoren, Belüftungssteuerung, intelligente Fütterung und LoRa-vernetzte Controller.",
  alternates: buildAlternates("de", "poultry-farming"),
};

const faqs = [
  {
    question: "Können Sie einen individuellen Geflügelfarm-Controller entwickeln?",
    answer:
      "Ja. Wir entwickeln individuelle Controller-Hardware und -Firmware rund um Ihr spezifisches Stalllayout, Ihre Ausrüstung und Steuerungsanforderungen — von einer Einzelstall-Einheit bis zu einer Multi-Stall-Plattform.",
  },
  {
    question: "Können Temperatur und Luftfeuchtigkeit aus der Ferne überwacht werden?",
    answer:
      "Ja. Sensordaten können über ein mobiles oder Web-Dashboard aus der Ferne eingesehen werden, mit konfigurierbaren Alarmen, wenn Messwerte außerhalb festgelegter Bereiche liegen.",
  },
  {
    question: "Können mehrere Geflügelställe von einem Dashboard aus überwacht werden?",
    answer:
      "Ja. Systeme können so ausgelegt werden, dass Daten aus mehreren Ställen, mehreren Sensorknoten und mehreren Gateways in einer einzigen Dashboard-Ansicht zusammengeführt werden.",
  },
  {
    question: "Kann das System die Belüftung automatisch steuern?",
    answer:
      "Ja. Belüftung, Ventilatoren und zugehörige Ausrüstung können anhand konfigurierbarer Regeln basierend auf Temperatur-, Feuchtigkeits- oder Luftqualitätswerten automatisiert werden, wobei eine manuelle Übersteuerung jederzeit möglich ist.",
  },
  {
    question: "Können Futter- und Wasserstände überwacht werden?",
    answer:
      "Ja. Futtersilo- und Behälterfüllstände sowie Wassertankstände und -durchfluss können kontinuierlich überwacht werden, mit Alarmen bei niedrigen Ständen oder abnormalen Bedingungen.",
  },
  {
    question: "Kann ich Alarme erhalten, wenn Umweltbedingungen abnormal werden?",
    answer:
      "Ja. Alarme können so konfiguriert werden, dass Bediener per mobiler Benachrichtigung, SMS (sofern unterstützt), E-Mail, lokalem Summer, Warnleuchte oder Web-Dashboard benachrichtigt werden, wenn überwachte Werte konfigurierte Schwellenwerte überschreiten.",
  },
  {
    question: "Kann LoRa auf einer großen Geflügelfarm eingesetzt werden?",
    answer:
      "Ja. LoRa / LoRaWAN eignet sich gut, um große Betriebsgelände mit stromsparenden Sensorknoten abzudecken, und ist eine von mehreren Konnektivitätsoptionen, die wir je nach Betriebsgröße und Layout auswählen.",
  },
  {
    question: "Kann das System ohne durchgehenden Internetzugang funktionieren?",
    answer:
      "Die lokale Steuerungslogik kann so ausgelegt werden, dass sie vor Ort weiterläuft, auch wenn Internet- oder Cloud-Konnektivität vorübergehend nicht verfügbar ist, mit Datensynchronisation nach Wiederherstellung der Verbindung.",
  },
  {
    question: "Können Sie bestehende Ventilatoren, Pumpen, Motoren und Anlagen integrieren?",
    answer:
      "In vielen Fällen ja. Wir bewerten Ihre bestehende Ausrüstung in der Discovery-Phase, um den richtigen Ansatz für Sensor-, Relais- oder Steuerungsintegration zu bestimmen.",
  },
  {
    question: "Können Sie die Leiterplatte und die Firmware entwickeln?",
    answer:
      "Ja. Individuelles Leiterplattendesign und Embedded-Firmware-Entwicklung sind zentrale Bestandteile unseres Engineering-Prozesses, vom Schaltplan bis zu den Fertigungsdaten.",
  },
  {
    question: "Können Sie einen Prototyp vor der Serienproduktion entwickeln?",
    answer:
      "Ja. Wir bauen und validieren einen funktionsfähigen Prototyp, bevor wir mit der Produktionsvorbereitung fortfahren, sodass das Design getestet ist, bevor die Fertigung verbindlich wird.",
  },
  {
    question: "Kann das System Stromausfälle überwachen?",
    answer:
      "Ja. Die Stromüberwachung kann den Ausfall der Netzspannung oder ausgewählte Geräte-Stromzustände erkennen und konfigurierte Alarme auslösen.",
  },
  {
    question: "Kann das System mit einer mobilen App verbunden werden?",
    answer:
      "Ja. Dashboards und Alarme können für mobilen und Web-Zugriff ausgelegt werden, sodass Bediener von überall Einblick in den Betriebsstatus haben.",
  },
];

export default function PoultryFarmingPageDe() {
  return (
    <>
      <PoultryHero />

      <div className="bg-[var(--ts-bg)]">
        <Breadcrumb locale="de" items={[{ label: "Branchen", href: "/de/industries" }, { label: "Geflügelhaltung" }]} />
      </div>

      <PoultrySolutionsOverview />
      <PoultryEnvironmentalMonitoring />
      <PoultryClimateAutomation />
      <PoultrySmartFeeding />
      <PoultryWaterManagement />
      <PoultrySafetyWarning />
      <PoultryCentralController />
      <PoultryMultiHouseMonitoring />
      <PoultryConnectivity />
      <PoultryCustomElectronics />
      <PoultryApplications />

      <section aria-labelledby="poultry-faq-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="poultry-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Häufige Fragen zur Geflügelfarm-Technologie
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        eyebrow="Technologie für den Hof entwickeln"
        heading="Bereit, Ihre Geflügelfarm-Technologie zu entwickeln?"
        description="PawSync entwickelt die IoT-Geräte, Sensoren, Controller und vernetzte Hardware, die moderne Geflügelbetriebe überwachen und automatisieren."
        primaryLabel="Geflügelprojekt besprechen"
        primaryHref="/de/contact"
        secondaryLabel="Alle Lösungen entdecken"
        secondaryHref="/de/solutions"
      />
    </>
  );
}
