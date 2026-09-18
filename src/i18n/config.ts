import type { Metadata } from "next";

export const locales = ["en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteUrl = "https://pawsync.tech";

// Every indexable route, keyed by the same slug used in every locale (per
// the site's URL structure decision: /de/about, /fr/about mirror /about).
// "" is the homepage.
export const routes = [
  "",
  "about",
  "animal-tracking",
  "blog",
  "contact",
  "custom-electronics",
  "environmental-monitoring",
  "farm-automation",
  "how-we-work",
  "industries",
  "livestock-technology",
  "pet-technology",
  "poultry-farming",
  "projects",
  "smart-feeding",
  "solutions",
  "virtual-fencing",
] as const;

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "" : `/${locale}`;
}

// Path a page in `locale` should use for an internal link to `route`
// (e.g. localizedHref("de", "contact") -> "/de/contact"). Next.js strips
// trailing slashes by default (redirecting "/de/" -> "/de"), so the
// locale homepage must be built without one to stay self-referencing.
export function localizedHref(locale: Locale, route: string): string {
  const clean = route.replace(/^\//, "");
  const prefix = localePrefix(locale);
  if (!clean) return prefix || "/";
  return `${prefix}/${clean}`;
}

// Detects the active locale from a (client-side) pathname, e.g. from
// usePathname() in shared chrome components. Defaults to "en" for any
// unprefixed path.
export function localeFromPathname(pathname: string | null): Locale {
  if (!pathname) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "en";
}

// Rewrites an internal href (which may include a #hash) to the equivalent
// localized path, e.g. localizeInternalHref("de", "/solutions#faq") ->
// "/de/solutions#faq". Used by shared chrome (header/footer) whose link
// arrays are authored once in the English/unprefixed form.
export function localizeInternalHref(locale: Locale, href: string): string {
  if (locale === "en") return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

// Given the current pathname (possibly locale-prefixed) and a target
// locale, returns the equivalent path in that locale — used by the
// language switcher so it preserves the current page instead of always
// going to that locale's homepage.
export function switchLocalePath(pathname: string, target: Locale): string {
  const match = pathname.match(/^\/(de|fr)(\/.*)?$/);
  const unprefixed = match ? match[2] ?? "/" : pathname || "/";
  if (target === "en") return unprefixed;
  return unprefixed === "/" ? `/${target}` : `/${target}${unprefixed}`;
}

// Absolute URL for a route in a given locale, used for canonical/hreflang.
export function absoluteUrl(locale: Locale, route: string): string {
  const clean = route.replace(/^\//, "");
  const prefix = localePrefix(locale);
  if (!clean) return `${siteUrl}${prefix || "/"}`;
  return `${siteUrl}${prefix}/${clean}`;
}

// Builds the `alternates` field for a page's Metadata export: a
// self-referencing canonical plus reciprocal hreflang for every locale,
// with x-default pointing at the English (unprefixed) URL.
export function buildAlternates(locale: Locale, route: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = absoluteUrl(l, route);
  }
  languages["x-default"] = absoluteUrl("en", route);

  return {
    canonical: absoluteUrl(locale, route),
    languages,
  };
}
