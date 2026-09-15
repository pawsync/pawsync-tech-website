import Link from "next/link";
import { Compass, Radar } from "lucide-react";

export default function TerraSenseNotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ts-dark-green)]/10">
        <Radar className="h-8 w-8 text-[var(--ts-dark-green)]" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)]">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 text-[var(--ts-gray)]">
        The page you&apos;re looking for may have moved, or the link might
        be out of date.
      </p>
      <Link
        href="/terrasense"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2"
      >
        <Compass className="h-5 w-5" aria-hidden="true" />
        Back to PawSync home
      </Link>
    </div>
  );
}
