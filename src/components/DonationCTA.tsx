import Link from "next/link";
import { Heart, HeartHandshake } from "lucide-react";

export default function DonationCTA() {
  return (
    <section
      id="donate-cta"
      aria-labelledby="donate-cta-heading"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-500 py-16 text-white sm:py-20"
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
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-inset ring-white/30">
          <HeartHandshake className="h-4 w-4" aria-hidden="true" />
          Join the PawSync community
        </span>

        <h2
          id="donate-cta-heading"
          className="mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl"
        >
          Ready to change a life?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-orange-50">
          Every donation funds vet care, food, and shelter. Every volunteer
          hour brings a pet closer to home. However you help, it matters.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/donate#donation-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-orange-700 shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg active:translate-y-0 active:bg-orange-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Donate Now
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-orange-700 active:translate-y-0 active:bg-orange-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
          >
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
