import type { MetadataRoute } from "next";
import { absoluteUrl, lastModifiedFor, locales, routes } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = absoluteUrl(l, route);
    }
    languages["x-default"] = absoluteUrl("en", route);

    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(locale, route),
        lastModified: lastModifiedFor(locale, route),
        alternates: { languages },
      });
    }
  }

  return entries;
}
