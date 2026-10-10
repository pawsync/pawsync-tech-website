"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import type { Locale } from "@/i18n/config";
import { trackEvent } from "@/lib/analytics";

// Thin client-component wrapper so a blog article (a server component) can
// still fire the "Article Service Click" event on a link to a related
// service page — a bare onClick handler can't be passed to next/link from
// a server component, so this is the smallest possible client boundary for
// just that one anchor, leaving the rest of the article server-rendered.
interface ArticleServiceLinkProps extends ComponentProps<typeof Link> {
  locale: Locale;
}

export default function ArticleServiceLink({ locale, onClick, ...props }: ArticleServiceLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent("Article Service Click", { locale });
        onClick?.(event);
      }}
    />
  );
}
