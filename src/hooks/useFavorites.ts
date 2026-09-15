"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "pawsync:favorites";

function readStoredFavorites(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

// Single shared favorites store (backed by localStorage) so the Adopt grid,
// the homepage teaser, and individual pet profile pages all stay in sync
// instead of each keeping their own separate favorite state.
export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    // localStorage is only available client-side; deferring the read into a
    // frame callback (rather than calling setState synchronously in the
    // effect body) avoids a hydration mismatch and cascading-render warning.
    const frameId = requestAnimationFrame(() => setFavorites(readStoredFavorites()));
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setFavorites(readStoredFavorites());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleFavorite = useCallback((petId: number) => {
    setFavorites((prev) => {
      const next = prev.includes(petId)
        ? prev.filter((id) => id !== petId)
        : [...prev, petId];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage unavailable (private mode, etc.) — state still
        // updates in-memory for the current session.
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (petId: number) => favorites.includes(petId),
    [favorites]
  );

  return { favorites, isFavorite, toggleFavorite };
}
