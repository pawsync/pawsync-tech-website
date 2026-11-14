import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { photos, stagePhotos, type PhotoName } from "@/components/terrasense/photos";

const frame =
  "overflow-hidden rounded-3xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_24px_48px_-24px_rgba(14,27,38,0.25)]";

/** Wide photo placed under a page's intro section. */
export default function PagePhoto({ name, locale = "en" }: { name: PhotoName; locale?: Locale }) {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className={frame}>
        <Image
          src={`/photos/${name}.webp`}
          alt={photos[name][locale]}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}

/** Smaller photo under a How We Work stage; renders nothing for stages without a photo. */
export function StagePhoto({ index, locale = "en" }: { index: number; locale?: Locale }) {
  const name = stagePhotos[index];
  if (!name) return null;
  return (
    <div className="mt-3 overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white">
      <Image
        src={`/photos/${name}.webp`}
        alt={photos[name][locale]}
        width={1600}
        height={900}
        sizes="(min-width: 768px) 640px, 90vw"
        className="block h-auto w-full"
      />
    </div>
  );
}
