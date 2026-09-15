import type { AdoptionStatus } from "@/types/pet";

export const statusStyles: Record<AdoptionStatus, string> = {
  Available: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Urgent: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

export const statusDotStyles: Record<AdoptionStatus, string> = {
  Available: "bg-teal-500",
  Pending: "bg-amber-500",
  Urgent: "bg-rose-500",
};

export const statusLabels: Record<AdoptionStatus, string> = {
  Available: "Available for Adoption",
  Pending: "Adoption Pending",
  Urgent: "Urgent — Needs a Home",
};
