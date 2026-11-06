import type { Locale } from "@/i18n/config";

/**
 * Card media for the eight compact homepage solution cards (EN/DE/FR share the same images).
 * Images are 800x400 (2:1) files in public/home/solutions/ and are shown whole at every screen size.
 * Optional `position` (CSS object-position, e.g. "50% 30%") picks which part stays in view if the
 * strip's shape is ever changed; the default is the centre.
 */
export type SolutionMedia = { src: string; alt: string; position?: string } | "panel";

const images: Record<string, { file: string; alt: Record<Locale, string>; position?: string }> = {
  "/virtual-fencing": {
    file: "virtual-fencing",
    alt: {
      en: "Cow wearing a collar in a pasture, with a virtual boundary line across the grass",
      de: "Kuh mit Halsband auf einer Weide, mit einer virtuellen Grenzlinie im Gras",
      fr: "Vache portant un collier dans un pâturage, avec une limite virtuelle tracée dans l'herbe",
    },
  },
  "/smart-feeding": {
    file: "smart-feeding",
    alt: {
      en: "Dog and cat beside an automatic feeder",
      de: "Hund und Katze neben einem automatischen Futterspender",
      fr: "Chien et chat à côté d'un distributeur automatique de nourriture",
    },
  },
  "/solutions#health-monitoring": {
    file: "animal-health",
    alt: {
      en: "Close-up of a cow with an ear tag on a farm",
      de: "Nahaufnahme einer Kuh mit Ohrmarke auf einem Hof",
      fr: "Gros plan d'une vache avec une boucle auriculaire dans une exploitation",
    },
  },
  "/livestock-technology": {
    file: "livestock",
    alt: {
      en: "Cow wearing a collar, with sheep grazing in the background",
      de: "Kuh mit Halsband, im Hintergrund grasende Schafe",
      fr: "Vache portant un collier, avec des moutons qui paissent en arrière-plan",
    },
  },
  "/poultry-farming": {
    file: "poultry",
    alt: {
      en: "Inside a poultry house with drinkers and ventilation fans",
      de: "Blick in einen Geflügelstall mit Tränken und Lüftern",
      fr: "Intérieur d'un bâtiment avicole avec abreuvoirs et ventilateurs",
    },
  },
  "/solutions#smart-irrigation": {
    file: "irrigation",
    alt: {
      en: "Soil moisture probe, drip line and irrigation valve in a crop field",
      de: "Bodenfeuchtesonde, Tropfschlauch und Bewässerungsventil auf einem Feld",
      fr: "Sonde d'humidité du sol, goutte-à-goutte et vanne d'irrigation dans une parcelle",
    },
  },
  "/solutions#safety-detection": {
    file: "emergency",
    alt: {
      en: "Weather station and sensor enclosure with a warning symbol on a pole above a valley town",
      de: "Wetterstation und Sensorgehäuse mit Warnsymbol an einem Mast über einem Ort im Tal",
      fr: "Station météo et boîtier de capteurs avec un symbole d'alerte sur un mât au-dessus d'une ville dans la vallée",
    },
  },
  "/custom-electronics": {
    file: "custom-iot",
    alt: {
      en: "Sensor enclosures and a circuit board on a workbench",
      de: "Sensorgehäuse und eine Leiterplatte auf einer Werkbank",
      fr: "Boîtiers de capteurs et carte électronique sur un établi",
    },
  },
};

/** Looks up the card media by the card's link, ignoring the /de or /fr prefix. Cards without a photo get a styled panel. */
export function getSolutionMedia(href: string, locale: Locale): SolutionMedia {
  const key = href.replace(/^\/(de|fr)(?=\/)/, "");
  const entry = images[key];
  if (!entry) return "panel";
  return { src: `/home/solutions/${entry.file}.webp`, alt: entry.alt[locale], position: entry.position };
}
