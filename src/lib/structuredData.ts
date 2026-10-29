import { absoluteUrl, siteUrl, type Locale } from "@/i18n/config";
import { CONTACT_EMAIL, INSTAGRAM_URL, PHONE_TEL } from "@/lib/contact";

// Stable node identifiers so other JSON-LD on the same page (WebSite,
// BlogPosting) can reference the Organization instead of restating it.
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

// JSON.stringify doesn't escape "<", so a string containing "</script>"
// could break out of the tag. Escaping it is the approach recommended in
// node_modules/next/dist/docs/01-app/02-guides/json-ld.md.
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Only properties that are already published elsewhere on the site
// (logo in the header, email/phone on the Contact page, Instagram in the
// footer). No legalName, address, or founding details: PawSync.tech is
// not a registered company (see the About page).
export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "PawSync",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/brand/pawsync-logo.png`,
      width: 1536,
      height: 1024,
    },
    email: CONTACT_EMAIL,
    telephone: PHONE_TEL,
    sameAs: [INSTAGRAM_URL],
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: "PawSync",
    url: siteUrl,
    inLanguage: locale,
    publisher: { "@id": organizationId },
  };
}

// When each article was first published, in PawSync's local time (UTC+5):
// the commit that added it to the deployed main branch (all three locales
// were added in the same commit). None has had a substantive content change
// since — later commits only touched metadata titles and analytics — so
// dateModified equals datePublished. When an article's body is genuinely
// revised, add a `modified` date for the affected locale(s).
type ArticleDates = { published: string; modified?: Partial<Record<Locale, string>> };

export const blogPostDates = {
  "blog/gnss-lora-vs-gnss-ltem": { published: "2026-09-28T11:16:44+05:00" },
  "blog/low-power-animal-tracker-design": { published: "2026-09-28T11:16:44+05:00" },
  "blog/pet-tracker-pcb-design": { published: "2026-10-09T19:23:10+05:00" },
  "blog/smart-pet-feeder-engineering": { published: "2026-10-09T19:23:10+05:00" },
  "blog/wireless-poultry-monitoring-design": { published: "2026-10-09T19:23:10+05:00" },
} satisfies Record<string, ArticleDates>;

export type BlogPostRoute = keyof typeof blogPostDates;

export function articlePublishedDate(route: BlogPostRoute): string {
  return blogPostDates[route].published;
}

export function blogPostingJsonLd({
  locale,
  route,
  headline,
  description,
}: {
  locale: Locale;
  route: BlogPostRoute;
  headline: string;
  description: string;
}) {
  const dates: ArticleDates = blogPostDates[route];
  const url = absoluteUrl(locale, route);
  // Restated inline (not just an @id) so validators that read each
  // <script> block on its own still see the author's name and URL.
  const pawsync = { "@type": "Organization", "@id": organizationId, name: "PawSync", url: siteUrl };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline,
    description,
    inLanguage: locale,
    datePublished: dates.published,
    dateModified: dates.modified?.[locale] ?? dates.published,
    author: pawsync,
    publisher: pawsync,
    isPartOf: { "@id": websiteId },
  };
}
