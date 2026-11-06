import type { Locale } from "@/i18n/config";

/**
 * Card media for the eight compact homepage solution cards (EN/DE/FR share the same images).
 * Images are the owner-supplied infographics, uncropped: 1200px-wide *-full.webp files in public/home/solutions/.
 * Each card's image frame takes the image's own shape (width x height below), so the whole
 * picture always fills the frame edge to edge at every screen size. To swap an image, replace
 * the file and update its height here.
 */
export type SolutionMedia = { src: string; alt: string; width: number; height: number } | "panel";

const images: Record<string, { file: string; height: number; alt: Record<Locale, string> }> = {
  "/virtual-fencing": {
    file: "virtual-fencing",
    height: 614,
    alt: {
      en: "Virtual fencing infographic: a cow wearing a collar in a pasture next to a virtual boundary line",
      de: "Infografik virtuelle Einzäunung: Kuh mit Halsband auf einer Weide neben einer virtuellen Grenzlinie",
      fr: "Infographie clôture virtuelle : vache portant un collier dans un pâturage près d'une limite virtuelle",
    },
  },
  "/smart-feeding": {
    file: "smart-feeding",
    height: 614,
    alt: {
      en: "Smart pet feeder infographic: dog and cat beside an automatic feeder with a cut-away of the dispenser and control board",
      de: "Infografik intelligenter Futterspender: Hund und Katze neben einem Futterautomaten mit Schnittansicht von Dosierer und Steuerplatine",
      fr: "Infographie distributeur intelligent : chien et chat à côté d'un distributeur avec vue en coupe du doseur et de la carte de commande",
    },
  },
  "/solutions#health-monitoring": {
    file: "animal-health",
    height: 675,
    alt: {
      en: "Animal health monitoring infographic: a cow with a collar and ear tag, a gateway and the sense, connect, analyze, monitor, alert steps",
      de: "Infografik Tiergesundheitsüberwachung: Kuh mit Halsband und Ohrmarke, ein Gateway und die Schritte Erfassen, Verbinden, Analysieren, Überwachen, Alarmieren",
      fr: "Infographie suivi de la santé animale : vache avec collier et boucle auriculaire, une passerelle et les étapes mesurer, connecter, analyser, surveiller, alerter",
    },
  },
  "/livestock-technology": {
    file: "livestock",
    height: 614,
    alt: {
      en: "Livestock monitoring infographic: a cow wearing a collar with sheep grazing behind, and the GPS/LoRa/LTE-M to cloud to app data path",
      de: "Infografik Nutztierüberwachung: Kuh mit Halsband, dahinter grasende Schafe, und der Datenweg GPS/LoRa/LTE-M zur Cloud und App",
      fr: "Infographie surveillance du bétail : vache portant un collier, moutons au pâturage, et le trajet des données GPS/LoRa/LTE-M vers le cloud et l'application",
    },
  },
  "/poultry-farming": {
    file: "poultry",
    height: 614,
    alt: {
      en: "Smart poultry monitoring infographic: inside a poultry house with an environmental sensor node, feed and water monitoring and a LoRa gateway",
      de: "Infografik Geflügelüberwachung: Geflügelstall mit Umweltsensorknoten, Futter- und Wasserüberwachung und LoRa-Gateway",
      fr: "Infographie suivi avicole : bâtiment avicole avec nœud de capteurs d'ambiance, suivi de l'aliment et de l'eau et passerelle LoRa",
    },
  },
  "/solutions#smart-irrigation": {
    file: "irrigation",
    height: 613,
    alt: {
      en: "Smart irrigation infographic: a solar-powered controller, soil moisture probe, solenoid valve and flow meter in a crop field",
      de: "Infografik intelligente Bewässerung: solarbetriebene Steuerung, Bodenfeuchtesonde, Magnetventil und Durchflussmesser auf einem Feld",
      fr: "Infographie irrigation intelligente : contrôleur solaire, sonde d'humidité du sol, électrovanne et débitmètre dans une parcelle",
    },
  },
  "/solutions#safety-detection": {
    file: "emergency",
    height: 613,
    alt: {
      en: "Emergency and disaster detection infographic: a solar-powered sensor station above a valley town, with flood, fire, earthquake, landslide and severe weather examples",
      de: "Infografik Notfall- und Katastrophenerkennung: solarbetriebene Sensorstation über einem Ort im Tal, mit Beispielen für Hochwasser, Feuer, Erdbeben, Erdrutsch und Unwetter",
      fr: "Infographie détection des urgences et catastrophes : station de capteurs solaire au-dessus d'une ville dans la vallée, avec exemples d'inondation, d'incendie, de séisme, de glissement de terrain et d'intempéries",
    },
  },
  "/custom-electronics": {
    file: "custom-iot",
    height: 613,
    alt: {
      en: "Custom IoT devices infographic: sensor enclosures, a circuit board and trackers, with the define, design, prototype, manufacture steps",
      de: "Infografik kundenspezifische IoT-Geräte: Sensorgehäuse, Leiterplatte und Tracker, mit den Schritten Definieren, Entwickeln, Prototyp, Fertigung",
      fr: "Infographie objets connectés sur mesure : boîtiers de capteurs, carte électronique et traceurs, avec les étapes définir, concevoir, prototyper, fabriquer",
    },
  },
};

/** Looks up the card media by the card's link, ignoring the /de or /fr prefix. Cards without an image get a styled panel. */
export function getSolutionMedia(href: string, locale: Locale): SolutionMedia {
  const key = href.replace(/^\/(de|fr)(?=\/)/, "");
  const entry = images[key];
  if (!entry) return "panel";
  return { src: `/home/solutions/${entry.file}-full.webp`, alt: entry.alt[locale], width: 1200, height: entry.height };
}
