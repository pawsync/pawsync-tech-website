"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import TerraSenseLogo from "@/components/terrasense/TerraSenseLogo";
import type { Locale } from "@/i18n/config";
import { localeFromPathname, localizeInternalHref } from "@/i18n/config";

interface FooterLink {
  key: string;
  href: string;
}

interface FooterColumn {
  headingKey: string;
  links: FooterLink[];
}

// Every link resolves to a real, substantive page or in-page section —
// no placeholders.
const columns: FooterColumn[] = [
  {
    headingKey: "solutions",
    links: [
      { key: "animalTracking", href: "/solutions#tracking-location" },
      { key: "virtualFencing", href: "/solutions#virtual-fencing" },
      { key: "smartFeeding", href: "/solutions#smart-feeding" },
      { key: "healthMonitoring", href: "/solutions#health-monitoring" },
      { key: "farmAutomation", href: "/farm-automation" },
      { key: "smartIrrigation", href: "/solutions#smart-irrigation" },
      { key: "environmentalMonitoring", href: "/environmental-monitoring" },
    ],
  },
  {
    headingKey: "engineering",
    links: [
      { key: "customElectronics", href: "/custom-electronics" },
      { key: "pcbDesign", href: "/custom-electronics#services" },
      { key: "firmwareDevelopment", href: "/custom-electronics#services" },
      { key: "iotDevelopment", href: "/custom-electronics#services" },
      { key: "prototypeDevelopment", href: "/custom-electronics#process" },
      { key: "productionSupport", href: "/custom-electronics#process" },
    ],
  },
  {
    headingKey: "industries",
    links: [
      { key: "petTechnology", href: "/pet-technology" },
      { key: "livestock", href: "/livestock-technology" },
      { key: "dairy", href: "/industries" },
      { key: "poultry", href: "/poultry-farming" },
      { key: "veterinary", href: "/industries" },
      { key: "smartAgriculture", href: "/industries" },
    ],
  },
  {
    headingKey: "company",
    links: [
      { key: "about", href: "/about" },
      { key: "howWeWork", href: "/how-we-work" },
      { key: "projects", href: "/projects" },
      { key: "blog", href: "/blog" },
      { key: "contact", href: "/contact" },
    ],
  },
];

const dict: Record<Locale, Record<string, string>> = {
  en: {
    solutions: "Solutions",
    engineering: "Engineering",
    industries: "Industries",
    company: "Company",
    animalTracking: "Animal Tracking",
    virtualFencing: "Virtual Fencing",
    smartFeeding: "Smart Feeding",
    healthMonitoring: "Health Monitoring",
    farmAutomation: "Farm Automation",
    smartIrrigation: "Smart Irrigation",
    environmentalMonitoring: "Environmental Monitoring",
    customElectronics: "Custom Electronics",
    pcbDesign: "PCB Design",
    firmwareDevelopment: "Firmware Development",
    iotDevelopment: "IoT Development",
    prototypeDevelopment: "Prototype Development",
    productionSupport: "Production Support",
    petTechnology: "Pet Technology",
    livestock: "Livestock",
    dairy: "Dairy",
    poultry: "Poultry",
    veterinary: "Veterinary",
    smartAgriculture: "Smart Agriculture",
    about: "About",
    howWeWork: "How We Work",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    tagline:
      "Smart electronics for animals, farms & connected environments. Custom IoT hardware, embedded firmware, and PCB engineering — from concept to production.",
    location: "Engineering & product development, remote-first",
    rights: "PawSync Technologies. All rights reserved.",
  },
  de: {
    solutions: "Lösungen",
    engineering: "Engineering",
    industries: "Branchen",
    company: "Unternehmen",
    animalTracking: "Tier-Tracking",
    virtualFencing: "Virtuelle Einzäunung",
    smartFeeding: "Intelligente Fütterung",
    healthMonitoring: "Gesundheitsüberwachung",
    farmAutomation: "Hofautomatisierung",
    smartIrrigation: "Intelligente Bewässerung",
    environmentalMonitoring: "Umweltüberwachung",
    customElectronics: "Kundenspezifische Elektronik",
    pcbDesign: "Leiterplattendesign (PCB)",
    firmwareDevelopment: "Firmware-Entwicklung",
    iotDevelopment: "IoT-Entwicklung",
    prototypeDevelopment: "Prototypenentwicklung",
    productionSupport: "Produktionsunterstützung",
    petTechnology: "Haustiertechnologie",
    livestock: "Nutztiere",
    dairy: "Milchvieh",
    poultry: "Geflügel",
    veterinary: "Veterinärwesen",
    smartAgriculture: "Intelligente Landwirtschaft",
    about: "Über uns",
    howWeWork: "So arbeiten wir",
    projects: "Projekte",
    blog: "Blog",
    contact: "Kontakt",
    tagline:
      "Intelligente Elektronik für Tiere, Höfe und vernetzte Umgebungen. Kundenspezifische IoT-Hardware, Embedded-Firmware und Leiterplattenentwicklung — vom Konzept bis zur Serienproduktion.",
    location: "Engineering & Produktentwicklung, remote-first",
    rights: "PawSync Technologies. Alle Rechte vorbehalten.",
  },
  fr: {
    solutions: "Solutions",
    engineering: "Ingénierie",
    industries: "Secteurs",
    company: "Entreprise",
    animalTracking: "Suivi des animaux",
    virtualFencing: "Clôture virtuelle",
    smartFeeding: "Alimentation intelligente",
    healthMonitoring: "Suivi de la santé",
    farmAutomation: "Automatisation agricole",
    smartIrrigation: "Irrigation intelligente",
    environmentalMonitoring: "Surveillance environnementale",
    customElectronics: "Électronique sur mesure",
    pcbDesign: "Conception de cartes PCB",
    firmwareDevelopment: "Développement de micrologiciels",
    iotDevelopment: "Développement IoT",
    prototypeDevelopment: "Développement de prototypes",
    productionSupport: "Accompagnement à la production",
    petTechnology: "Technologie pour animaux de compagnie",
    livestock: "Bétail",
    dairy: "Élevage laitier",
    poultry: "Volailles",
    veterinary: "Vétérinaire",
    smartAgriculture: "Agriculture intelligente",
    about: "À propos",
    howWeWork: "Notre méthode",
    projects: "Projets",
    blog: "Blog",
    contact: "Contact",
    tagline:
      "Électronique intelligente pour les animaux, les exploitations agricoles et les environnements connectés. Matériel IoT sur mesure, micrologiciels embarqués et conception de cartes PCB — du concept à la production.",
    location: "Ingénierie et développement produit, en télétravail",
    rights: "PawSync Technologies. Tous droits réservés.",
  },
};

export default function TerraSenseFooter() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = dict[locale];

  return (
    <footer className="bg-[var(--ts-navy)] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href={localizeInternalHref(locale, "/")} className="inline-block transition-opacity hover:opacity-85">
              <TerraSenseLogo variant="light" locale={locale} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{t.tagline}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                {t.location}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-words hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="break-words hover:text-white">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.headingKey} aria-label={t[column.headingKey]}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
                {t[column.headingKey]}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.key}>
                    <Link href={localizeInternalHref(locale, link.href)} className="text-white/60 transition-colors hover:text-[var(--ts-accent)]">
                      {t[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/50 sm:text-left">
          <p>© {new Date().getFullYear()} {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
