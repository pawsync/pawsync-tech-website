"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ANALYTICS_DOMAIN, ANALYTICS_ENABLED } from "@/lib/analytics";

type PlausibleFn = (name: string, options?: { u?: string }) => void;

// Plausible's base script already fires one pageview on initial load, so
// the route-change effect below must skip its own first run (mount) to
// avoid double-counting that same initial view, then fire manually on every
// later client-side navigation (App Router route changes don't reload the
// script). The URL passed is pathname-only — the query string is never
// read or forwarded, so no URL parameter can reach analytics.
function PlausiblePageviews() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const plausible = (window as typeof window & { plausible?: PlausibleFn }).plausible;
    if (typeof plausible === "function") {
      plausible("pageview", { u: `https://${ANALYTICS_DOMAIN}${pathname}` });
    }
  }, [pathname]);

  return null;
}

export default function PlausibleAnalytics() {
  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script
        defer
        data-domain={ANALYTICS_DOMAIN}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      <PlausiblePageviews />
    </>
  );
}
