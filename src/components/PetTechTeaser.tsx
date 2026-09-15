import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, DoorOpen, HeartPulse, Satellite } from "lucide-react";

const highlights = [
  { icon: Satellite, label: "GPS & Activity Trackers" },
  { icon: Droplets, label: "Smart Feeders & Hydration" },
  { icon: HeartPulse, label: "Health & Vitals Monitors" },
  { icon: DoorOpen, label: "Smart Shelters & Doors" },
];

export default function PetTechTeaser() {
  return (
    <section
      id="pet-tech-teaser"
      aria-labelledby="pet-tech-teaser-heading"
      className="bg-stone-50 py-16 sm:py-20 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-200/70 dark:bg-teal-900/40 dark:text-teal-300 dark:ring-teal-800/50">
              <Satellite className="h-4 w-4" aria-hidden="true" />
              Pet Tech &amp; Devices
            </span>

            <h2
              id="pet-tech-teaser-heading"
              className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
            >
              Technology that looks out for them
            </h2>
            <p className="mt-4 max-w-xl text-lg text-stone-600 dark:text-stone-300">
              GPS trackers, smart feeders, and health monitors — the
              electronics PawSync uses and recommends to help keep animals
              safe, healthy, and easier to care for.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>

            <Link
              href="/pet-tech"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 active:bg-orange-800 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950"
            >
              Explore Pet Tech &amp; Devices
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md ring-1 ring-stone-900/5">
            <Image
              src="https://images.unsplash.com/photo-1644076829117-33c549118444?auto=format&fit=crop&w=1000&q=80"
              alt="A happy dog wearing a collar, the kind of everyday gear that smart trackers and health tags attach to"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
