"use client";

import { Heart } from "lucide-react";
import type { Pet } from "@/types/pet";
import { useFavorites } from "@/hooks/useFavorites";

// Reuses the same shared favorites store as PetCard — not a separate
// favorite system, just a different visual treatment for the profile page.
export default function SaveToFavoritesButton({ pet }: { pet: Pet }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(pet.id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(pet.id)}
      aria-pressed={favorited}
      aria-label={
        favorited ? `Remove ${pet.name} from favorites` : `Save ${pet.name} to favorites`
      }
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-200 px-6 py-3.5 text-base font-semibold text-stone-700 transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-600 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-stone-700 dark:text-stone-200 dark:focus-visible:ring-offset-stone-950"
    >
      <Heart
        className={`h-5 w-5 transition-colors ${favorited ? "fill-rose-500 text-rose-500" : ""}`}
        aria-hidden="true"
      />
      {favorited ? "Saved to Favorites" : "Save to Favorites"}
    </button>
  );
}
