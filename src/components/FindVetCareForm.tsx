"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, MapPin, PawPrint, Search, Stethoscope } from "lucide-react";

const animalTypes = ["Dog", "Cat", "Rabbit", "Other"];
const serviceTypes = [
  "Routine Checkup",
  "Vaccinations",
  "Emergency Care",
  "Spay / Neuter",
  "Dental Care",
  "Behavioral Consultation",
];

const inputClasses =
  "w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 transition-colors focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100";

export default function FindVetCareForm() {
  const idPrefix = useId();
  const [status, setStatus] = useState<"idle" | "results">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("results");
  };

  return (
    <section
      id="find-vet-care"
      aria-labelledby="find-vet-care-heading"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-20 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="find-vet-care-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Find Veterinary Care
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            Tell us what you&apos;re looking for and we&apos;ll point you
            toward the right care.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor={`${idPrefix}-location`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                Location
              </label>
              <div className="relative mt-1.5">
                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <input
                  id={`${idPrefix}-location`}
                  type="text"
                  required
                  placeholder="City or ZIP code"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-animal`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                Animal Type
              </label>
              <div className="relative mt-1.5">
                <PawPrint className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <select id={`${idPrefix}-animal`} defaultValue="" required className={`${inputClasses} pl-10`}>
                  <option value="" disabled>
                    Select
                  </option>
                  {animalTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-service`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                Service Type
              </label>
              <div className="relative mt-1.5">
                <Stethoscope className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <select id={`${idPrefix}-service`} defaultValue="" required className={`${inputClasses} pl-10`}>
                  <option value="" disabled>
                    Select
                  </option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 sm:w-auto"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Find Care
          </button>

          {status === "results" && (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800 dark:border-teal-800 dark:bg-teal-900/30 dark:text-teal-200"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              <p>
                This is a demo directory with no live veterinary listings
                connected yet. In a production version, this search would
                show real partner clinics matching your criteria. For now,{" "}
                <a href="mailto:contact@pawsync.tech" className="font-semibold underline underline-offset-2">
                  email our team
                </a>{" "}
                and we&apos;ll help you find care directly.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
