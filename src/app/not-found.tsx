"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Radar } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localeFromPathname, localizedHref } from "@/i18n/config";

const dict: Record<Locale, { heading: string; body: string; cta: string }> = {
  en: {
    heading: "We couldn't find that page",
    body: "The page you're looking for may have moved, or the link might be out of date.",
    cta: "Back to PawSync home",
  },
  de: {
    heading: "Diese Seite konnten wir nicht finden",
    body: "Die gesuchte Seite wurde möglicherweise verschoben, oder der Link ist nicht mehr aktuell.",
    cta: "Zurück zur PawSync-Startseite",
  },
  fr: {
    heading: "Nous n'avons pas trouvé cette page",
    body: "La page que vous recherchez a peut-être été déplacée, ou le lien n'est plus valide.",
    cta: "Retour à l'accueil PawSync",
  },
};

// Server-side headers() does NOT carry the middleware-injected x-locale
// header into this boundary for a genuinely unmatched route (confirmed by
// direct testing — the header reads null here even though it's present on
// every normal page render). The browser's address bar still shows the
// attempted URL on a 404, though, so usePathname() reliably recovers the
// locale client-side — the same helper (localeFromPathname) already used
// by the header/footer for exactly this purpose.
export default function TerraSenseNotFound() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = dict[locale];

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ts-dark-green)]/10">
        <Radar className="h-8 w-8 text-[var(--ts-dark-green)]" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)]">
        {t.heading}
      </h1>
      <p className="mt-3 text-[var(--ts-gray)]">{t.body}</p>
      <Link
        href={localizedHref(locale, "")}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2"
      >
        <Compass className="h-5 w-5" aria-hidden="true" />
        {t.cta}
      </Link>
    </div>
  );
}
