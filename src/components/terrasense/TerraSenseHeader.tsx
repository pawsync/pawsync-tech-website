"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TerraSenseLogo from "@/components/terrasense/TerraSenseLogo";
import type { Locale } from "@/i18n/config";
import { localeFromPathname, localizeInternalHref, switchLocalePath } from "@/i18n/config";
import {
  Activity,
  AlertTriangle,
  Bird,
  ChevronDown,
  CircuitBoard,
  CloudRain,
  Dog,
  FileCode,
  FlaskConical,
  HeartPulse,
  Menu,
  Radar,
  Satellite,
  Settings2,
  Sparkles,
  Tractor,
  UtensilsCrossed,
  Wifi,
  X,
  type LucideIcon,
} from "lucide-react";

const solutionsMenu: { key: string; href: string; icon: LucideIcon }[] = [
  { key: "solutionsOverview", href: "/solutions", icon: Sparkles },
  { key: "animalTracking", href: "/solutions#tracking-location", icon: Satellite },
  { key: "virtualFencing", href: "/solutions#virtual-fencing", icon: Radar },
  { key: "smartFeeding", href: "/solutions#smart-feeding", icon: UtensilsCrossed },
  { key: "healthMonitoring", href: "/solutions#health-monitoring", icon: HeartPulse },
  { key: "livestockMonitoring", href: "/livestock-technology", icon: Tractor },
  { key: "petTechnology", href: "/pet-technology", icon: Dog },
  { key: "poultryFarming", href: "/poultry-farming", icon: Bird },
  { key: "farmAutomation", href: "/farm-automation", icon: Settings2 },
  { key: "environmentalMonitoring", href: "/environmental-monitoring", icon: CloudRain },
  { key: "safetyDetection", href: "/solutions#safety-detection", icon: AlertTriangle },
];

const engineeringMenu: { key: string; href: string; icon: LucideIcon }[] = [
  { key: "customElectronics", href: "/custom-electronics", icon: CircuitBoard },
  { key: "pcbDesign", href: "/custom-electronics#services", icon: Activity },
  { key: "embeddedFirmware", href: "/custom-electronics#services", icon: FileCode },
  { key: "iotDevelopment", href: "/custom-electronics#services", icon: Wifi },
  { key: "prototypeDevelopment", href: "/custom-electronics#process", icon: FlaskConical },
];

const allSolutionsLinks = [...solutionsMenu, ...engineeringMenu];

const navLinks: { key: string; href: string }[] = [
  { key: "home", href: "/" },
  { key: "industries", href: "/industries" },
  { key: "howWeWork", href: "/how-we-work" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

const dict: Record<Locale, Record<string, string>> = {
  en: {
    home: "Home",
    industries: "Industries",
    howWeWork: "How We Work",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    solutionsOverview: "Solutions Overview",
    animalTracking: "Animal Tracking",
    virtualFencing: "Virtual Fencing",
    smartFeeding: "Smart Feeding",
    healthMonitoring: "Animal Health Monitoring",
    livestockMonitoring: "Livestock Monitoring",
    petTechnology: "Pet Technology",
    poultryFarming: "Poultry Farming",
    farmAutomation: "Farm Automation",
    environmentalMonitoring: "Environmental Monitoring",
    safetyDetection: "Safety & Disaster Detection",
    customElectronics: "Custom Electronics",
    pcbDesign: "PCB Design",
    embeddedFirmware: "Embedded Firmware",
    iotDevelopment: "IoT Development",
    prototypeDevelopment: "Prototype Development",
    solutionsTrigger: "Solutions",
    solutionsColumn: "Solutions",
    engineeringColumn: "Engineering",
    discussProject: "Discuss a Custom Project",
    startProject: "Start Your Project",
    openMenu: "Open main menu",
    closeMenu: "Close main menu",
    homeAria: "PawSync — Home",
    primaryNav: "Primary",
  },
  de: {
    home: "Startseite",
    industries: "Branchen",
    howWeWork: "So arbeiten wir",
    about: "Über uns",
    blog: "Blog",
    contact: "Kontakt",
    solutionsOverview: "Lösungsübersicht",
    animalTracking: "Tier-Tracking",
    virtualFencing: "Virtuelle Einzäunung",
    smartFeeding: "Intelligente Fütterung",
    healthMonitoring: "Tiergesundheitsüberwachung",
    livestockMonitoring: "Nutztierüberwachung",
    petTechnology: "Haustiertechnologie",
    poultryFarming: "Geflügelhaltung",
    farmAutomation: "Hofautomatisierung",
    environmentalMonitoring: "Umweltüberwachung",
    safetyDetection: "Sicherheit & Gefahrenerkennung",
    customElectronics: "Kundenspezifische Elektronik",
    pcbDesign: "Leiterplattendesign (PCB)",
    embeddedFirmware: "Embedded-Firmware",
    iotDevelopment: "IoT-Entwicklung",
    prototypeDevelopment: "Prototypenentwicklung",
    solutionsTrigger: "Lösungen",
    solutionsColumn: "Lösungen",
    engineeringColumn: "Engineering",
    discussProject: "Individuelles Projekt besprechen",
    startProject: "Projekt starten",
    openMenu: "Hauptmenü öffnen",
    closeMenu: "Hauptmenü schließen",
    homeAria: "PawSync — Startseite",
    primaryNav: "Hauptnavigation",
  },
  fr: {
    home: "Accueil",
    industries: "Secteurs",
    howWeWork: "Notre méthode",
    about: "À propos",
    blog: "Blog",
    contact: "Contact",
    solutionsOverview: "Vue d'ensemble des solutions",
    animalTracking: "Suivi des animaux",
    virtualFencing: "Clôture virtuelle",
    smartFeeding: "Alimentation intelligente",
    healthMonitoring: "Suivi de la santé animale",
    livestockMonitoring: "Surveillance du bétail",
    petTechnology: "Technologie pour animaux de compagnie",
    poultryFarming: "Aviculture",
    farmAutomation: "Automatisation agricole",
    environmentalMonitoring: "Surveillance environnementale",
    safetyDetection: "Sécurité et détection des risques",
    customElectronics: "Électronique sur mesure",
    pcbDesign: "Conception de cartes PCB",
    embeddedFirmware: "Micrologiciel embarqué",
    iotDevelopment: "Développement IoT",
    prototypeDevelopment: "Développement de prototypes",
    solutionsTrigger: "Solutions",
    solutionsColumn: "Solutions",
    engineeringColumn: "Ingénierie",
    discussProject: "Discuter d'un projet sur mesure",
    startProject: "Démarrer votre projet",
    openMenu: "Ouvrir le menu principal",
    closeMenu: "Fermer le menu principal",
    homeAria: "PawSync — Accueil",
    primaryNav: "Navigation principale",
  },
};

const languageLabels: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "de", label: "DE" },
  { locale: "fr", label: "FR" },
];

export default function TerraSenseHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = dict[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const solutionsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Subtle elevation once the page has scrolled — the header stays legible
  // (solid background) at all times, but only picks up shadow/blur weight
  // once there's content moving underneath it.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close the Solutions dropdown on outside click or Escape.
  useEffect(() => {
    if (!isSolutionsOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSolutionsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSolutionsOpen]);

  const homeHref = localizeInternalHref(locale, "/");
  const contactHref = localizeInternalHref(locale, "/contact");

  const isActive = (href: string) => {
    const localizedTarget = localizeInternalHref(locale, href).split("#")[0];
    return href === "/" ? pathname === homeHref : pathname.startsWith(localizedTarget);
  };
  const isSolutionsActive = allSolutionsLinks.some((item) => isActive(item.href));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--ts-bg)]/95 transition-shadow duration-300 ${
        isScrolled
          ? "border-[var(--ts-navy)]/10 shadow-[0_1px_12px_rgba(14,27,38,0.06)] backdrop-blur supports-[backdrop-filter]:bg-[var(--ts-bg)]/85"
          : "border-transparent"
      }`}
    >
      <nav
        aria-label={t.primaryNav}
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-[padding] duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <Link
          href={homeHref}
          onClick={() => setIsOpen(false)}
          aria-label={t.homeAria}
          className="group flex items-center transition-opacity hover:opacity-80"
        >
          <TerraSenseLogo locale={locale} />
        </Link>

        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          <li key="home">
            <Link
              href={homeHref}
              aria-current={pathname === homeHref ? "true" : undefined}
              className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ts-green)] after:transition-transform after:duration-200 hover:text-[var(--ts-dark-green)] hover:after:scale-x-100 ${
                pathname === homeHref ? "text-[var(--ts-dark-green)] after:scale-x-100" : "text-[var(--ts-gray)]"
              }`}
            >
              {t.home}
            </Link>
          </li>

          <li ref={solutionsRef} className="relative">
            <button
              type="button"
              onClick={() => setIsSolutionsOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={isSolutionsOpen}
              className={`flex items-center gap-1 py-1 text-sm font-medium transition-colors hover:text-[var(--ts-dark-green)] ${
                isSolutionsActive ? "text-[var(--ts-dark-green)]" : "text-[var(--ts-gray)]"
              }`}
            >
              {t.solutionsTrigger}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`absolute left-1/2 top-full z-10 mt-3 w-[38rem] -translate-x-1/2 rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-4 shadow-xl transition-all duration-200 ${
                isSolutionsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="grid grid-cols-[1.3fr_1fr] gap-4">
                <div>
                  <p className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">
                    {t.solutionsColumn}
                  </p>
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.key}
                      href={localizeInternalHref(locale, item.href)}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-bg)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                        <item.icon className="h-3.5 w-3.5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                      </span>
                      {t[item.key]}
                    </Link>
                  ))}
                </div>
                <div className="border-l border-[var(--ts-navy)]/8 pl-4">
                  <p className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">
                    {t.engineeringColumn}
                  </p>
                  {engineeringMenu.map((item) => (
                    <Link
                      key={item.key}
                      href={localizeInternalHref(locale, item.href)}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-bg)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                        <item.icon className="h-3.5 w-3.5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                      </span>
                      {t[item.key]}
                    </Link>
                  ))}
                  <Link
                    href={contactHref}
                    onClick={() => setIsSolutionsOpen(false)}
                    className="mt-3 flex items-center justify-center rounded-xl bg-[var(--ts-dark-green)]/8 px-3 py-2.5 text-center text-xs font-semibold text-[var(--ts-dark-green)] transition-colors hover:bg-[var(--ts-dark-green)]/15"
                  >
                    {t.discussProject}
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.key}>
                <Link
                  href={localizeInternalHref(locale, link.href)}
                  aria-current={active ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ts-green)] after:transition-transform after:duration-200 hover:text-[var(--ts-dark-green)] hover:after:scale-x-100 ${
                    active ? "text-[var(--ts-dark-green)] after:scale-x-100" : "text-[var(--ts-gray)]"
                  }`}
                >
                  {t[link.key]}
                </Link>
              </li>
            );
          })}

          <li className="flex items-center gap-1 border-l border-[var(--ts-navy)]/10 pl-5 text-xs font-semibold text-[var(--ts-gray)]" aria-label="Language">
            {languageLabels.map(({ locale: l, label }, index) => (
              <span key={l} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true" className="text-[var(--ts-navy)]/20">|</span>}
                <Link
                  href={switchLocalePath(pathname, l)}
                  aria-current={locale === l ? "true" : undefined}
                  className={`rounded px-1 py-0.5 transition-colors hover:text-[var(--ts-dark-green)] ${
                    locale === l ? "text-[var(--ts-dark-green)]" : ""
                  }`}
                >
                  {label}
                </Link>
              </span>
            ))}
          </li>
        </ul>

        <div className="hidden lg:block">
          <Link
            href={contactHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--ts-dark-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-bg)]"
          >
            {t.startProject}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-dark-green)]/10 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="terrasense-mobile-menu"
          aria-label={isOpen ? t.closeMenu : t.openMenu}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="terrasense-mobile-menu"
        className={`overflow-hidden border-t border-[var(--ts-navy)]/10 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[36rem] overflow-y-auto" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          <li>
            <Link
              href={homeHref}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--ts-dark-green)]/10 ${
                pathname === homeHref ? "bg-[var(--ts-dark-green)]/10 text-[var(--ts-dark-green)]" : "text-[var(--ts-navy)]"
              }`}
            >
              {t.home}
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
              aria-expanded={isMobileSolutionsOpen}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--ts-dark-green)]/10 ${
                isSolutionsActive ? "text-[var(--ts-dark-green)]" : "text-[var(--ts-navy)]"
              }`}
            >
              {t.solutionsTrigger}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isMobileSolutionsOpen ? "max-h-[40rem]" : "max-h-0"}`}>
              <p className="mt-1 pl-7 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">{t.solutionsColumn}</p>
              <ul className="mt-1 space-y-1 pl-4">
                {solutionsMenu.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={localizeInternalHref(locale, item.href)}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-[var(--ts-gray)] transition-colors hover:bg-[var(--ts-dark-green)]/10 hover:text-[var(--ts-dark-green)]"
                    >
                      <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {t[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-2 pl-7 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">{t.engineeringColumn}</p>
              <ul className="mt-1 space-y-1 pl-4">
                {engineeringMenu.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={localizeInternalHref(locale, item.href)}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-[var(--ts-gray)] transition-colors hover:bg-[var(--ts-dark-green)]/10 hover:text-[var(--ts-dark-green)]"
                    >
                      <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {t[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.key}>
                <Link
                  href={localizeInternalHref(locale, link.href)}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--ts-dark-green)]/10 ${
                    active ? "bg-[var(--ts-dark-green)]/10 text-[var(--ts-dark-green)]" : "text-[var(--ts-navy)]"
                  }`}
                >
                  {t[link.key]}
                </Link>
              </li>
            );
          })}

          <li className="flex items-center justify-center gap-2 pt-2 text-sm font-semibold text-[var(--ts-gray)]">
            {languageLabels.map(({ locale: l, label }, index) => (
              <span key={l} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true" className="text-[var(--ts-navy)]/20">|</span>}
                <Link
                  href={switchLocalePath(pathname, l)}
                  onClick={() => setIsOpen(false)}
                  aria-current={locale === l ? "true" : undefined}
                  className={`rounded px-2 py-1 transition-colors hover:text-[var(--ts-dark-green)] ${
                    locale === l ? "text-[var(--ts-dark-green)]" : ""
                  }`}
                >
                  {label}
                </Link>
              </span>
            ))}
          </li>

          <li className="pt-2">
            <Link
              href={contactHref}
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-[var(--ts-dark-green)] px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--ts-navy)]"
            >
              {t.startProject}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
