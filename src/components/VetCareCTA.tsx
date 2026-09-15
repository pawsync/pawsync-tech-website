import { CalendarHeart, ShieldCheck } from "lucide-react";

export default function VetCareCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 to-teal-600 py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
          Healthy pets make happy families.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-teal-50">
          Give your companion the care and attention they deserve.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#find-vet-care"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-teal-700 shadow-md transition-all hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-lg active:translate-y-0"
          >
            <CalendarHeart className="h-5 w-5" aria-hidden="true" />
            Book a Vet Visit
          </a>
          <a
            href="#vet-care-services"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-teal-700 active:translate-y-0"
          >
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            Explore Vet Services
          </a>
        </div>
      </div>
    </section>
  );
}
