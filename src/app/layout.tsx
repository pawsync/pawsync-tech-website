import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Used by the TerraSense product-development site (see app/terrasense) for a
// distinct, more technical display typeface than PawSync.tech's Poppins.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawsync.tech"),
  title: "PawSync.tech | Connected Animal Technology",
  description:
    "PawSync.tech builds connected technology for pets and animals — GPS tracking, health monitoring, and smart devices — alongside pet adoption, veterinary care, and animal welfare services.",
  openGraph: {
    siteName: "PawSync",
    url: "https://pawsync.tech",
    type: "website",
  },
};

// This root layout is intentionally minimal: it only owns <html>/<body>,
// fonts, and global CSS. Each product on this domain (PawSync.tech, TerraSense)
// supplies its own header/footer/theme via a nested layout, so the two
// brands never bleed into each other. See:
//   src/app/(pawhaven)/layout.tsx
//   src/app/terrasense/layout.tsx
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
