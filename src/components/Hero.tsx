import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, HeartHandshake, PawPrint } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80",
    alt: "Adoptable French Bulldog puppy in a cozy sweater, ready to meet his new family",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=600&q=80",
    alt: "Young golden retriever puppy resting, waiting to be adopted",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80",
    alt: "A caretaker gently examining a rescued cat",
    className: "",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-900/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-900/15"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-16 md:grid-cols-2 md:items-start md:pt-10 md:pb-20 lg:gap-14 lg:px-8 lg:pt-12 lg:pb-24">
        <div className="relative animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-700 ring-1 ring-inset ring-orange-200/70 dark:bg-orange-900/40 dark:text-orange-300 dark:ring-orange-800/50">
            <PawPrint className="h-3.5 w-3.5" aria-hidden="true" />
            Animal Welfare &amp; Pet Services
          </span>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.4rem] dark:text-stone-50">
            Every pet deserves a loving home
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            PawSync rescues, heals, and rehomes animals in need. Browse
            adoptable pets, book a vet visit, or lend a hand — every bit of
            support helps a paw find its forever family.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
            <Link
              href="/adopt"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 active:bg-orange-800 active:shadow-sm focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              Find a Pet
            </Link>
            <Link
              href="/vet-care"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-teal-600 px-6 py-3.5 text-base font-semibold text-teal-700 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:text-white active:translate-y-0 active:bg-teal-700 active:text-white dark:text-teal-400 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              Book Vet Visit
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <HeartHandshake className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Rescue, veterinary care, and rehoming — all in one place
          </div>
        </div>

        <div className="grid h-[320px] grid-cols-2 grid-rows-2 gap-3.5 sm:h-[360px] sm:gap-4 lg:h-[420px] lg:gap-5">
          {heroImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl shadow-md shadow-stone-900/10 ring-1 ring-stone-900/5 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 45vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                priority={image.className.includes("row-span-2")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
