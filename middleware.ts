import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lets the root layout render the correct <html lang> per locale without
// restructuring routing into a [locale] segment: we detect the locale from
// the URL prefix here and hand it to the layout via a request header.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.startsWith("/de/") || pathname === "/de"
    ? "de"
    : pathname.startsWith("/fr/") || pathname === "/fr"
      ? "fr"
      : "en";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand/).*)"],
};
