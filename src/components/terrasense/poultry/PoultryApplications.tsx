import Image from "next/image";
import Eyebrow from "@/components/terrasense/Eyebrow";

const applications = [
  "Broiler Farms", "Layer Farms", "Breeder Farms", "Hatcheries",
  "Poultry Houses", "Feed Systems", "Water Systems",
  "Farm Equipment Companies", "Poultry Technology Companies",
];

export default function PoultryApplications() {
  return (
    <section aria-labelledby="poultry-applications-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Who We Build For</Eyebrow>
          <h2 id="poultry-applications-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Poultry Applications
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            From single-house operations to poultry-industry technology
            companies.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl shadow-xl">
          <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
            <Image
              src="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=1400&q=75"
              alt="A chicken in a poultry farm environment"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ts-navy)]/85 via-[var(--ts-navy)]/40 to-[var(--ts-navy)]/10" />
          </div>
          <div className="absolute inset-0 flex flex-wrap content-end gap-2.5 p-5 sm:p-8">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
