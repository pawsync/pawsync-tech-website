"use client";

import Image from "next/image";
import Link from "next/link";
import { Cake, Heart, MapPin, Sparkles, Users } from "lucide-react";
import type { Pet } from "@/types/pet";
import { useFavorites } from "@/hooks/useFavorites";
import { statusStyles } from "@/lib/petStatus";

interface PetCardProps {
  pet: Pet;
  /** Set on the first card in a grid so Next/Image can eagerly load the
   * likely LCP element instead of lazy-loading it. */
  priority?: boolean;
}

// Shared card used by the homepage "Featured Pets" teaser, the full Adopt
// grid, and the "You may also like" strip on a pet's profile page.
export default function PetCard({ pet, priority = false }: PetCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(pet.id);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-stone-900 dark:ring-stone-800">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Link
          href={`/adopt/${pet.id}`}
          className="absolute inset-0"
          aria-label={`View ${pet.name}'s profile`}
        >
          <Image
            src={pet.image}
            alt={`${pet.name}, a ${pet.age} old ${pet.breed}`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            priority={priority}
          />
        </Link>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 shadow-sm dark:bg-stone-900/90 dark:text-stone-200">
          {pet.species}
        </span>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleFavorite(pet.id);
          }}
          aria-pressed={favorited}
          aria-label={
            favorited ? `Remove ${pet.name} from favorites` : `Save ${pet.name} to favorites`
          }
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-400 shadow-sm transition-all hover:text-rose-500 active:scale-90 focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 dark:bg-stone-900/90 dark:text-stone-500"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${favorited ? "fill-rose-500 text-rose-500" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
            {pet.name}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[pet.status]}`}
          >
            {pet.status}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2 text-sm text-stone-500 dark:text-stone-400">
          <span>{pet.breed}</span>
          <span className="flex shrink-0 items-center gap-1 text-xs">
            <Cake className="h-3.5 w-3.5" aria-hidden="true" />
            {pet.age}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 text-xs text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true" />
            {pet.gender}
          </span>
          <span className="flex min-w-0 items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true" />
            <span className="truncate">{pet.location}</span>
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1.5 truncate text-xs italic text-stone-500 dark:text-stone-400">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-orange-400" aria-hidden="true" />
          {pet.personality.slice(0, 2).join(", ")}
        </p>

        <Link
          href={`/adopt/${pet.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-700 active:bg-orange-800 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-stone-900"
        >
          View Profile
        </Link>
      </div>
    </article>
  );
}
