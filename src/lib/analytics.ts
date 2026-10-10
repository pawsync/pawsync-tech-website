import type { Locale } from "@/i18n/config";

// Master switch. Unset (the default in every environment until explicitly
// configured in Netlify) keeps analytics fully inactive: no script tag is
// rendered and trackEvent() is a no-op. Flip to "true" only after a
// Plausible account exists and activation has been explicitly approved.
export const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

// The site's own public domain name — not an account credential. Plausible's
// client-side script needs no API key or site ID for pageviews or custom
// events; the dashboard login is the only credential, and it never touches
// this codebase.
export const ANALYTICS_DOMAIN = "pawsync.tech";

export type AnalyticsEventName =
  | "Contact CTA Click"
  | "Contact Form Success"
  | "Article Service Click";

// Props are deliberately limited to locale only — never form field values,
// free text, names, emails, or URL query strings, so there is no path for
// personal or form content to reach Plausible.
export interface AnalyticsEventProps {
  locale: Locale;
}

type PlausibleFn = (name: string, options?: { props?: Record<string, string> }) => void;

export function trackEvent(name: AnalyticsEventName, props: AnalyticsEventProps): void {
  if (!ANALYTICS_ENABLED) return;
  if (typeof window === "undefined") return;
  const plausible = (window as typeof window & { plausible?: PlausibleFn }).plausible;
  if (typeof plausible !== "function") return;
  plausible(name, { props: { locale: props.locale } });
}
