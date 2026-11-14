import type { Locale } from "@/i18n/config";

/**
 * Owner-supplied photos (1600x900 webp in public/photos/), shared by the EN/DE/FR pages.
 * Alt text describes the scene only; it makes no product or capability claims.
 */
export const photos = {
  "pet-tracker-prototype": {
    en: "Engineer fitting a circuit board into a 3D-printed pet tracker enclosure, with a collar, battery and CAD model on the bench",
    de: "Ingenieur setzt eine Leiterplatte in ein 3D-gedrucktes Gehäuse eines Haustier-Trackers, daneben Halsband, Akku und CAD-Modell",
    fr: "Ingénieur insérant une carte électronique dans le boîtier imprimé en 3D d'un traceur pour animaux, avec collier, batterie et modèle CAO",
  },
  "tracker-assembly-inspection": {
    en: "Technician inspecting a tracker enclosure with a magnifier next to a tray of assembled circuit boards",
    de: "Technikerin prüft ein Tracker-Gehäuse mit der Lupe neben einem Tablett bestückter Leiterplatten",
    fr: "Technicienne inspectant un boîtier de traceur à la loupe à côté d'un plateau de cartes assemblées",
  },
  "power-battery-design": {
    en: "Engineer probing a power-management circuit board connected to a lithium battery, with a bench power supply and oscilloscope",
    de: "Ingenieur misst an einer Leiterplatte zur Energieversorgung mit Lithium-Akku, daneben Labornetzteil und Oszilloskop",
    fr: "Ingénieur mesurant une carte de gestion d'alimentation reliée à une batterie lithium, avec alimentation de laboratoire et oscilloscope",
  },
  "tracking-interface": {
    en: "Illustrative tracking interface showing animal locations on a map, with a collar tracker and gateway on the desk",
    de: "Illustrative Tracking-Oberfläche mit Tierstandorten auf einer Karte, daneben ein Halsband-Tracker und ein Gateway",
    fr: "Interface de suivi illustrative montrant la position des animaux sur une carte, avec un collier traceur et une passerelle",
  },
  "prototype-assembly": {
    en: "Engineer assembling an animal tracker prototype, with enclosures, a collar and design sketches on the bench",
    de: "Ingenieur baut einen Tier-Tracker-Prototyp zusammen, mit Gehäusen, Halsband und Entwurfsskizzen auf dem Tisch",
    fr: "Ingénieur assemblant un prototype de traceur pour animaux, avec boîtiers, collier et croquis sur l'établi",
  },
  "board-assembly": {
    en: "Circuit board being loaded into a test fixture, with trays of boards and tracker enclosures",
    de: "Leiterplatte wird in eine Prüfvorrichtung eingesetzt, daneben Tabletts mit Leiterplatten und Tracker-Gehäusen",
    fr: "Carte électronique placée dans un banc de test, avec des plateaux de cartes et de boîtiers de traceurs",
  },
  "product-architecture": {
    en: "Two engineers sketching a collar tracker's enclosure and block diagram, with components laid out on the desk",
    de: "Zwei Ingenieure skizzieren Gehäuse und Blockschaltbild eines Halsband-Trackers, Bauteile liegen auf dem Tisch",
    fr: "Deux ingénieurs esquissant le boîtier et le schéma fonctionnel d'un collier traceur, composants posés sur le bureau",
  },
  "pcb-design": {
    en: "PCB design workstation with a schematic and board layout on screen, a populated board and a bare PCB on the desk",
    de: "Arbeitsplatz für Leiterplattenentwurf mit Schaltplan und Layout am Bildschirm, bestückter und unbestückter Platine",
    fr: "Poste de conception de circuits imprimés avec schéma et routage à l'écran, carte assemblée et circuit nu sur le bureau",
  },
  "firmware-debugging": {
    en: "Firmware being debugged on a tracker circuit board connected to a laptop and oscilloscope",
    de: "Firmware-Debugging an einer Tracker-Leiterplatte, verbunden mit Laptop und Oszilloskop",
    fr: "Débogage du micrologiciel sur la carte d'un traceur reliée à un ordinateur portable et à un oscilloscope",
  },
  "rfid-feeder": {
    en: "Dairy cow with an ear tag at a feeder fitted with an RFID reader",
    de: "Milchkuh mit Ohrmarke an einem Futterplatz mit RFID-Lesegerät",
    fr: "Vache laitière avec boucle auriculaire devant une mangeoire équipée d'un lecteur RFID",
  },
  "pasture-connectivity": {
    en: "Pasture with grazing cattle, a weather station and a fence-mounted wireless gateway, with a tracking collar on the rail",
    de: "Weide mit grasenden Rindern, Wetterstation und Funk-Gateway am Zaunpfosten, ein Tracking-Halsband liegt auf dem Zaun",
    fr: "Pâturage avec bovins, station météo et passerelle sans fil fixée à un poteau, un collier de suivi posé sur la clôture",
  },
} satisfies Record<string, Record<Locale, string>>;

export type PhotoName = keyof typeof photos;

/** How We Work: photo shown under a stage, keyed by the stage's position (0-based) in the 12-stage list. */
export const stagePhotos: Partial<Record<number, PhotoName>> = {
  1: "product-architecture",
  4: "pcb-design",
  5: "firmware-debugging",
  6: "prototype-assembly",
  7: "tracker-assembly-inspection",
  11: "board-assembly",
};
