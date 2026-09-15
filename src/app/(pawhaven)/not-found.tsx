import Link from "next/link";
import { Compass, PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/40">
        <PawPrint className="h-8 w-8 text-orange-600 dark:text-orange-300" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 text-stone-600 dark:text-stone-300">
        The page or pet profile you&apos;re looking for may have moved, or the
        link might be out of date.
      </p>
      <Link
        href="/adopt"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
      >
        <Compass className="h-5 w-5" aria-hidden="true" />
        Browse adoptable pets
      </Link>
    </div>
  );
}
