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
  "blog/gnss-lora-vs-gnss-ltem",
  "blog/low-power-animal-tracker-design",
  "blog/pet-tracker-pcb-design",
  "blog/smart-pet-feeder-engineering",
  "blog/wireless-poultry-monitoring-design",
  "contact",
  "custom-electronics",
  "environmental-monitoring",
  "farm-automation",
  "how-we-work",
  "industries",
  "livestock-technology",
  "pet-technology",
  "poultry-farming",
  "privacy",
  "projects",
  "smart-feeding",
  "solutions",
  "virtual-fencing",
] as const;

export type Route = (typeof routes)[number];

// Date each page's visible content last changed substantively, for the
// sitemap's <lastmod> (PawSync local time, UTC+5). Google only trusts
// lastmod when it tracks real content changes, so this replaces stamping
// every URL with the build time. Each date was checked against the commit
// diffs rather than taken from the latest commit: changes that only touched
// styling, accessibility attributes, analytics, metadata titles, or added a
// link are not counted. A per-locale object is used where translations
// changed on different days. Update the entry when a page's content changes.
export const routeLastModified: Record<Route, string | Record<Locale, string>> = {
  "": "2026-10-02",
  about: "2026-10-10",
  "animal-tracking": "2026-10-27",
  blog: "2026-10-09",
  "blog/gnss-lora-vs-gnss-ltem": "2026-09-28",
  "blog/low-power-animal-tracker-design": "2026-09-28",
  "blog/pet-tracker-pcb-design": "2026-10-09",
  "blog/smart-pet-feeder-engineering": "2026-10-09",
  "blog/wireless-poultry-monitoring-design": "2026-10-09",
  contact: "2026-10-02",
  "custom-electronics": "2026-10-04",
  "environmental-monitoring": { en: "2026-10-26", de: "2026-10-02", fr: "2026-10-02" },
  "farm-automation": "2026-10-27",
  "how-we-work": { en: "2026-09-16", de: "2026-09-18", fr: "2026-09-18" },
  industries: "2026-10-02",
  "livestock-technology": "2026-10-27",
  "pet-technology": "2026-10-27",
  "poultry-farming": { en: "2026-10-26", de: "2026-10-04", fr: "2026-10-04" },
  privacy: "2026-09-28",
  projects: "2026-10-09",
  "smart-feeding": "2026-10-27",
  solutions: "2026-10-27",
  "virtual-fencing": "2026-10-27",
};

export function lastModifiedFor(locale: Locale, route: Route): string {
  const entry = routeLastModified[route];
  return typeof entry === "string" ? entry : entry[locale];
}

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

// Builds a page's `openGraph` field. Next.js does not field-merge nested
// metadata objects between layout and page — a page-level `openGraph`
// entirely replaces the root layout's, rather than filling in just the
// fields it omits. Every page that needs its own canonical `url` here must
// therefore also restate `siteName`/`type`/`images`, or those silently
// disappear from that page's social metadata.
export function buildOpenGraph(locale: Locale, route: string): Metadata["openGraph"] {
  return {
    siteName: "PawSync",
    type: "website",
    url: absoluteUrl(locale, route),
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PawSync — Custom Electronics & IoT Engineering for Animals & Farms",
      },
    ],
  };
}
