import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pets } from "@/data/pets";
import PetCard from "./PetCard";
import Eyebrow from "./Eyebrow";

// A curated homepage teaser — the full searchable directory lives at
// /adopt; this is just a friendly first look.
const featuredPets = pets.slice(0, 4);

export default function FeaturedPets() {
  return (
    <section
      id="featured-pets"
      aria-labelledby="featured-pets-heading"
      className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Adoptable Now</Eyebrow>
          <h2
            id="featured-pets-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Meet pets looking for a home
          </h2>
          <p className="mt-3 text-lg text-stone-600 dark:text-stone-300">
            A few of the friendly faces waiting for their forever family
            right now.
          </p>
        </div>
        <Link
          href="/adopt"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-50 active:bg-orange-100 dark:text-orange-400 dark:hover:bg-stone-800"
        >
          View all pets
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredPets.map((pet) => (
          <li key={pet.id}>
            <PetCard pet={pet} />
          </li>
        ))}
      </ul>
    </section>
  );
}
