import Link from "next/link";
import { Heart, Mail } from "lucide-react";

export default function PetTechCTA() {
  return (
    <section
      id="pet-tech-cta"
      aria-labelledby="pet-tech-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-500 py-16 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="pet-tech-cta-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl"
        >
          Help us equip more animals with the right tech
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-orange-50">
          Trackers, monitors, and smart feeders aren&apos;t cheap — your
          support helps us provide them to every animal in our care.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-orange-700 shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg active:translate-y-0"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Donate Now
          </Link>
          <a
            href="mailto:contact@pawsync.tech?subject=Pet%20Tech%20%26%20Devices"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-orange-700 active:translate-y-0"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}
