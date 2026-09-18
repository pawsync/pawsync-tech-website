import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import TerraSenseHeader from "@/components/terrasense/TerraSenseHeader";
import TerraSenseFooter from "@/components/terrasense/TerraSenseFooter";
import BackToTop from "@/components/terrasense/BackToTop";
import type { Locale } from "@/i18n/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawsync.tech"),
  title: "PawSync | Smart Electronics for Animals, Farms & Connected Environments",
  description:
    "PawSync designs custom IoT hardware, GPS animal tracking, virtual fencing, smart feeding, livestock monitoring, farm automation and environmental sensors — from concept to production.",
  openGraph: {
    siteName: "PawSync",
    url: "https://pawsync.tech",
    type: "website",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") as Locale | null) ?? "en";

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="terrasense-theme flex min-h-full flex-col bg-[var(--ts-bg)] text-[var(--ts-navy)]">
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
      </body>
    </html>
  );
}
