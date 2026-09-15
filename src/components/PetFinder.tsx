"use client";

import { useId, useMemo, useState } from "react";
import { RotateCcw, Search, SearchX, SlidersHorizontal } from "lucide-react";
import { pets } from "@/data/pets";
import type { Species } from "@/types/pet";
import PetCard from "./PetCard";

const filters: Array<{ label: string; value: Species | "All" }> = [
  { label: "All", value: "All" },
  { label: "Dogs", value: "Dog" },
  { label: "Cats", value: "Cat" },
  { label: "Rabbits", value: "Rabbit" },
];

export default function PetFinder() {
  const [activeFilter, setActiveFilter] = useState<Species | "All">("All");
  const [query, setQuery] = useState("");
  const searchInputId = useId();

  const visiblePets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return pets.filter((pet) => {
      const matchesFilter = activeFilter === "All" || pet.species === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        pet.name.toLowerCase().includes(normalizedQuery) ||
        pet.breed.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const hasActiveFilters = activeFilter !== "All" || query.trim().length > 0;

  const clearFilters = () => {
    setActiveFilter("All");
    setQuery("");
  };

  return (
    <section
      id="adopt"
      aria-labelledby="adopt-heading"
      className="scroll-mt-20 bg-stone-50 pb-20 pt-8 sm:pt-9 lg:pt-10 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="adopt-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Meet your future best friend
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            Filter by species or search by name and breed to find a pet
            who&apos;s ready to meet you.
          </p>
        </div>

        {/* Unified filter + search toolbar */}
        <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4 dark:border-stone-800 dark:bg-stone-900">
          <div
            role="group"
            aria-label="Filter pets by species"
            className="flex flex-wrap gap-2 overflow-x-auto"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-stone-900 ${
                    isActive
                      ? "bg-orange-600 text-white shadow-sm hover:bg-orange-700"
                      : "bg-stone-100 text-stone-600 hover:bg-orange-50 hover:text-orange-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                  }`}
                >
                  {filter.value === "All" && (
                    <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <label htmlFor={searchInputId} className="sr-only">
              Search pets by name or breed
            </label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
              aria-hidden="true"
            />
            <input
              id={searchInputId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or breed…"
              className="w-full rounded-full border border-stone-200 bg-stone-50 py-2.5 pl-10 pr-4 text-sm text-stone-800 placeholder:text-stone-400 transition-colors focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:focus:bg-stone-900"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p role="status" aria-live="polite" className="text-sm text-stone-500 dark:text-stone-400">
            {visiblePets.length} of {pets.length} pets waiting for a home
          </p>
          {hasActiveFilters && visiblePets.length > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-orange-700 transition-colors hover:text-orange-800 active:text-orange-900 dark:text-orange-400"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>

        {visiblePets.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visiblePets.map((pet, index) => (
              <li key={pet.id}>
                <PetCard pet={pet} priority={index === 0} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 flex flex-col items-center rounded-3xl border border-dashed border-stone-300 bg-white/60 px-6 py-16 text-center dark:border-stone-700 dark:bg-stone-900/40">
            <SearchX className="h-10 w-10 text-stone-400" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-stone-900 dark:text-stone-50">
              No pets found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-stone-500 dark:text-stone-400">
              Try changing your search or selecting another category.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700 active:bg-orange-800 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
