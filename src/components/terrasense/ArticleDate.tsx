import type { Locale } from "@/i18n/config";
import { articlePublishedDate, type BlogPostRoute } from "@/lib/structuredData";

const publishedLabels: Record<Locale, string> = {
  en: "Published",
  de: "Veröffentlicht am",
  fr: "Publié le",
};

// Visible publication date for an article, matching the datePublished in
// its BlogPosting JSON-LD. Formatted in PawSync's local time zone so the
// calendar day matches the published timestamp regardless of where the
// site is built.
export default function ArticleDate({ route, locale = "en" }: { route: BlogPostRoute; locale?: Locale }) {
  const published = articlePublishedDate(route);
  const formatted = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(published));

  return (
    <p className="mt-3 text-sm text-[var(--ts-gray)]">
      {publishedLabels[locale]} <time dateTime={published}>{formatted}</time>
    </p>
  );
}
