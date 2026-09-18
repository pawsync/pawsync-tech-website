import Image from "next/image";
import type { Locale } from "@/i18n/config";

const altTextByLocale: Record<Locale, string> = {
  en: "PawSync — Home",
  de: "PawSync — Startseite",
  fr: "PawSync — Accueil",
};

// Official PawSync logo, supplied as a flat (non-transparent) white-background
// PNG at 1536x1024 (3:2). On the light header background it blends in; on the
// dark footer it's wrapped in a small white card so the baked-in white
// background reads as an intentional badge rather than a rendering glitch.
// The image itself is never cropped, stretched, or recolored.
export default function TerraSenseLogo({ variant = "dark", locale = "en" }: { variant?: "dark" | "light"; locale?: Locale }) {
  const isLight = variant === "light";

  const image = (
    <Image
      src="/brand/pawsync-logo.png"
      alt={altTextByLocale[locale]}
      width={1536}
      height={1024}
      priority
      className="h-8 w-auto object-contain sm:h-9"
    />
  );

  return (
    <span className="inline-flex items-center gap-2.5">
      {isLight ? (
        <span className="flex shrink-0 items-center rounded-lg bg-white p-1.5">{image}</span>
      ) : (
        image
      )}
      <span
        className={`font-[family-name:var(--font-manrope)] text-xl font-extrabold tracking-tight ${
          isLight ? "text-white" : "text-[var(--ts-navy)]"
        }`}
      >
        PawSync
      </span>
    </span>
  );
}
