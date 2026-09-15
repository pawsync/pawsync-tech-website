"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Every primary nav item is now a real route with its own page, so active
// state is a simple pathname match — no scroll-spy / homepage-anchor
// fallback needed anymore. Pet Technology leads so PawSync's tech identity
// is the first thing visible in the nav; Services/Our Impact/Donate stay
// reachable through the footer and in-page CTAs rather than crowding the bar.
const navLinks = [
  { label: "Pet Technology", href: "/pet-tech" },
  { label: "Adopt", href: "/adopt" },
  { label: "Livestock", href: "/livestock" },
  { label: "Vet Care", href: "/vet-care" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close the mobile menu whenever the viewport grows back to desktop size.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Subtle elevation once the page has scrolled — the header stays legible
  // (solid background) at all times, but only picks up shadow weight once
  // there's content moving underneath it.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isLinkActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--background)]/95 transition-shadow duration-300 ${
        isScrolled
          ? "border-orange-100 shadow-[0_1px_12px_rgba(28,25,23,0.06)] backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/85"
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
          aria-label="PawSync.tech — Home"
          className="group flex items-center rounded-md transition-opacity hover:opacity-80"
        >
          <Image
            // Compact variant (icon + wordmark, tagline cropped out) — the
            // full logo's tagline becomes illegible at navbar height, and
            // the brief explicitly allows dropping it here for readability.
            src="/brand/pawsync-logo-compact.png"
            alt="PawSync.tech — Connected Care for Every Paw"
            width={1306}
            height={705}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-orange-600 after:transition-transform after:duration-200 hover:text-orange-600 hover:after:scale-x-100 active:text-orange-700 dark:hover:text-orange-400 dark:after:bg-orange-400 ${
                    isActive
                      ? "text-orange-600 after:scale-x-100 dark:text-orange-400"
                      : "text-stone-700 dark:text-stone-300"
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
            href="/contact#project-form"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Start Your Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 transition-colors hover:bg-orange-50 hover:text-orange-600 active:bg-orange-100 lg:hidden dark:text-stone-200 dark:hover:bg-stone-800"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-orange-100 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 active:bg-orange-100 dark:hover:bg-stone-800 ${
                    isActive
                      ? "bg-orange-50 text-orange-600 dark:bg-stone-800 dark:text-orange-400"
                      : "text-stone-700 dark:text-stone-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/contact#project-form"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-sky-600 px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              Start Your Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
