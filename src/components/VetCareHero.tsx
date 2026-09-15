import Image from "next/image";
import { CalendarHeart, ShieldCheck, Stethoscope } from "lucide-react";

export default function VetCareHero() {
  return (
    <section id="vet-care-hero" aria-label="Vet Care introduction" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-900/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-16 md:grid-cols-2 md:items-center lg:gap-14 lg:px-8 lg:pt-12 lg:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-200/70 dark:bg-teal-900/40 dark:text-teal-300 dark:ring-teal-800/50">
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
            Compassionate Veterinary Care
          </span>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
            Helping every pet live a healthier life
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            From routine checkups to ongoing care, our veterinary partners
            help pets receive the attention they need at every stage of
            life.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href="#find-vet-care"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 active:bg-orange-800 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              Book a Vet Visit
            </a>
            <a
              href="#vet-care-services"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-teal-600 px-6 py-3.5 text-base font-semibold text-teal-700 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:text-white active:translate-y-0 active:bg-teal-700 active:text-white dark:text-teal-400 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              View Our Services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Connecting you with veterinary-care resources and partners
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md ring-1 ring-stone-900/5">
          <Image
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80"
            alt="A caretaker gently examining a rescued cat"
            fill
            sizes="(min-width: 768px) 45vw, 92vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
