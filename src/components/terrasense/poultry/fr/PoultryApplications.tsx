import Image from "next/image";
import Eyebrow from "@/components/terrasense/Eyebrow";

const applications = [
  "Élevages de poulets de chair", "Élevages de poules pondeuses", "Élevages de reproducteurs", "Couvoirs",
  "Bâtiments avicoles", "Systèmes d'alimentation", "Systèmes d'eau",
  "Fabricants d'équipements agricoles", "Entreprises de technologie avicole",
];

export default function PoultryApplications() {
  return (
    <section aria-labelledby="poultry-applications-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pour qui nous concevons</Eyebrow>
          <h2 id="poultry-applications-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Applications avicoles
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            Des exploitations à bâtiment unique aux entreprises technologiques
            du secteur avicole.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl shadow-xl">
          <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
            <Image
              src="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=1400&q=75"
              alt="Une poule dans un environnement d'élevage avicole"
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
