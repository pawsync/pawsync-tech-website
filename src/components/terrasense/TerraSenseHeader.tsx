"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TerraSenseLogo from "@/components/terrasense/TerraSenseLogo";
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

const solutionsMenu: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Solutions Overview", href: "/solutions", icon: Sparkles },
  { label: "Animal Tracking", href: "/solutions#tracking-location", icon: Satellite },
  { label: "Virtual Fencing", href: "/solutions#virtual-fencing", icon: Radar },
  { label: "Smart Feeding", href: "/solutions#smart-feeding", icon: UtensilsCrossed },
  { label: "Animal Health Monitoring", href: "/solutions#health-monitoring", icon: HeartPulse },
  { label: "Livestock Monitoring", href: "/livestock-technology", icon: Tractor },
  { label: "Pet Technology", href: "/pet-technology", icon: Dog },
  { label: "Poultry Farming", href: "/poultry-farming", icon: Bird },
  { label: "Farm Automation", href: "/farm-automation", icon: Settings2 },
  { label: "Environmental Monitoring", href: "/environmental-monitoring", icon: CloudRain },
  { label: "Safety & Disaster Detection", href: "/solutions#safety-detection", icon: AlertTriangle },
];

const engineeringMenu: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Custom Electronics", href: "/custom-electronics", icon: CircuitBoard },
  { label: "PCB Design", href: "/custom-electronics#services", icon: Activity },
  { label: "Embedded Firmware", href: "/custom-electronics#services", icon: FileCode },
  { label: "IoT Development", href: "/custom-electronics#services", icon: Wifi },
  { label: "Prototype Development", href: "/custom-electronics#process", icon: FlaskConical },
];

const allSolutionsLinks = [...solutionsMenu, ...engineeringMenu];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function TerraSenseHeader() {
  const pathname = usePathname();
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);
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
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-[padding] duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="PawSync — Home"
          className="group flex items-center transition-opacity hover:opacity-80"
        >
          <TerraSenseLogo />
        </Link>

        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          <li key="home">
            <Link
              href="/"
              aria-current={isActive("/") && pathname === "/" ? "true" : undefined}
              className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ts-green)] after:transition-transform after:duration-200 hover:text-[var(--ts-dark-green)] hover:after:scale-x-100 ${
                pathname === "/" ? "text-[var(--ts-dark-green)] after:scale-x-100" : "text-[var(--ts-gray)]"
              }`}
            >
              Home
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
              Solutions
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
                    Solutions
                  </p>
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-bg)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                        <item.icon className="h-3.5 w-3.5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="border-l border-[var(--ts-navy)]/8 pl-4">
                  <p className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">
                    Engineering
                  </p>
                  {engineeringMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-bg)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                        <item.icon className="h-3.5 w-3.5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                      </span>
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="mt-3 flex items-center justify-center rounded-xl bg-[var(--ts-dark-green)]/8 px-3 py-2.5 text-center text-xs font-semibold text-[var(--ts-dark-green)] transition-colors hover:bg-[var(--ts-dark-green)]/15"
                  >
                    Discuss a Custom Project
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ts-green)] after:transition-transform after:duration-200 hover:text-[var(--ts-dark-green)] hover:after:scale-x-100 ${
                    active ? "text-[var(--ts-dark-green)] after:scale-x-100" : "text-[var(--ts-gray)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ts-dark-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-bg)]"
          >
            Start Your Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--ts-navy)] transition-colors hover:bg-[var(--ts-dark-green)]/10 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="terrasense-mobile-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="terrasense-mobile-menu"
        className={`overflow-hidden border-t border-[var(--ts-navy)]/10 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[32rem] overflow-y-auto" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--ts-dark-green)]/10 ${
                pathname === "/" ? "bg-[var(--ts-dark-green)]/10 text-[var(--ts-dark-green)]" : "text-[var(--ts-navy)]"
              }`}
            >
              Home
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
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isMobileSolutionsOpen ? "max-h-[40rem]" : "max-h-0"}`}>
              <p className="mt-1 pl-7 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">Solutions</p>
              <ul className="mt-1 space-y-1 pl-4">
                {solutionsMenu.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-[var(--ts-gray)] transition-colors hover:bg-[var(--ts-dark-green)]/10 hover:text-[var(--ts-dark-green)]"
                    >
                      <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-2 pl-7 text-[11px] font-bold uppercase tracking-wider text-[var(--ts-gray)]">Engineering</p>
              <ul className="mt-1 space-y-1 pl-4">
                {engineeringMenu.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-[var(--ts-gray)] transition-colors hover:bg-[var(--ts-dark-green)]/10 hover:text-[var(--ts-dark-green)]"
                    >
                      <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--ts-dark-green)]/10 ${
                    active ? "bg-[var(--ts-dark-green)]/10 text-[var(--ts-dark-green)]" : "text-[var(--ts-navy)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-[var(--ts-dark-green)] px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--ts-navy)]"
            >
              Start Your Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
