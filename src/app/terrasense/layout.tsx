import type { Metadata } from "next";
import TerraSenseHeader from "@/components/terrasense/TerraSenseHeader";
import TerraSenseFooter from "@/components/terrasense/TerraSenseFooter";
import BackToTop from "@/components/terrasense/BackToTop";

// TerraSense is a separate company from PawSync.tech sharing this codebase —
// metadataBase set here scopes to this segment and below, overriding the
// PawSync.tech domain set in the root layout so OG/canonical URLs under
// /terrasense resolve against TerraSense's own domain instead.
export const metadata: Metadata = {
  metadataBase: new URL("https://terrasense.tech"),
  openGraph: {
    siteName: "PawSync",
    url: "https://terrasense.tech",
    type: "website",
  },
};

export default function TerraSenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="terrasense-theme flex min-h-screen flex-1 flex-col bg-[var(--ts-bg)] text-[var(--ts-navy)]">
      <a
        href="#terrasense-main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--ts-dark-green)] focus:px-5 focus:py-3 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <TerraSenseHeader />
      <main id="terrasense-main-content" className="flex-1">
        {children}
      </main>
      <TerraSenseFooter />
      <BackToTop />
    </div>
  );
}
