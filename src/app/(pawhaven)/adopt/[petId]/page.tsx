import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Cake,
  CircleCheck,
  CircleDashed,
  ClipboardList,
  DollarSign,
  Mail,
  MapPin,
  PawPrint,
  Ruler,
  Users,
} from "lucide-react";
import { pets } from "@/data/pets";
import { statusDotStyles, statusLabels, statusStyles } from "@/lib/petStatus";
import PetCard from "@/components/PetCard";
import SaveToFavoritesButton from "@/components/SaveToFavoritesButton";

export function generateStaticParams() {
  return pets.map((pet) => ({ petId: String(pet.id) }));
}

function findPet(petId: string) {
  return pets.find((pet) => pet.id === Number(petId));
}

export async function generateMetadata(
  props: PageProps<"/adopt/[petId]">
): Promise<Metadata> {
  const { petId } = await props.params;
  const pet = findPet(petId);
  if (!pet) return { title: "Pet Not Found | PawSync.tech" };
  return {
    title: `${pet.name} | Adopt at PawSync.tech`,
    description: pet.description,
  };
}

const healthItems = (pet: (typeof pets)[number]) => [
  { label: "Vaccinated", done: pet.vaccinated },
  { label: "Microchipped", done: pet.microchipped },
  { label: "Health Checked", done: pet.healthChecked },
  { label: "Spayed / Neutered", done: pet.spayedNeutered },
];

// General shelter process — applies to every adoption, not a claim about
// this specific animal.
const adoptionRequirements = [
  "Complete a short adoption application",
  "Meet the pet in person before adopting",
  "Bring a valid photo ID to your visit",
  "Landlord or HOA approval if you rent your home",
  "A home visit may be requested for some animals",
];

export default async function PetProfilePage(props: PageProps<"/adopt/[petId]">) {
  const { petId } = await props.params;
  const pet = findPet(petId);

  if (!pet) notFound();

  const sameSpecies = pets.filter((p) => p.id !== pet.id && p.species === pet.species);
  const otherPets = pets.filter((p) => p.id !== pet.id && p.species !== pet.species);
  const relatedPets = [...sameSpecies, ...otherPets].slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/adopt"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-500 transition-colors hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all pets
        </Link>
      </div>

      {/* Top: image + key info */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md ring-1 ring-stone-900/5">
            <Image
              src={pet.image}
              alt={`${pet.name}, a ${pet.age} old ${pet.breed}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                {pet.species}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[pet.status]}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[pet.status]}`}
                  aria-hidden="true"
                />
                {statusLabels[pet.status]}
              </span>
            </div>

            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
              {pet.name}
            </h1>
            <p className="mt-1 text-lg text-stone-500 dark:text-stone-400">{pet.breed}</p>

            <dl className="mt-6 grid grid-cols-2 gap-5 rounded-2xl border border-stone-200 bg-white p-5 sm:grid-cols-4 dark:border-stone-800 dark:bg-stone-900">
              <div className="flex items-start gap-2">
                <Cake className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-stone-500 dark:text-stone-400">Age</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200">{pet.age}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-stone-500 dark:text-stone-400">Gender</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200">{pet.gender}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-stone-500 dark:text-stone-400">Size</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200">{pet.size}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-stone-500 dark:text-stone-400">Location</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200">{pet.location}</dd>
                </div>
              </div>
            </dl>

            <p className="mt-5 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
              <DollarSign className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              Adoption fee:{" "}
              <span className="font-semibold text-stone-900 dark:text-stone-50">${pet.adoptionFee}</span>
              <span className="text-stone-400 dark:text-stone-500">
                — covers vaccinations, microchip &amp; spay/neuter
              </span>
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/get-involved?interest=adopt&pet=${encodeURIComponent(pet.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 active:bg-orange-800 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
              >
                <PawPrint className="h-5 w-5" aria-hidden="true" />
                Apply to Adopt {pet.name}
              </Link>
              <SaveToFavoritesButton pet={pet} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
          About {pet.name}
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 dark:text-stone-300">{pet.description}</p>
      </section>

      {/* Personality */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
          Personality
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {pet.personality.map((trait) => (
            <span
              key={trait}
              className="rounded-full bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
            >
              {trait}
            </span>
          ))}
        </div>
      </section>

      {/* Health & Care */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
          Health &amp; Care
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {healthItems(pet).map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm dark:border-stone-800 dark:bg-stone-900"
            >
              {item.done ? (
                <CircleCheck className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              ) : (
                <CircleDashed className="h-4 w-4 shrink-0 text-stone-300 dark:text-stone-600" aria-hidden="true" />
              )}
              <span className={item.done ? "text-stone-700 dark:text-stone-200" : "text-stone-400 dark:text-stone-500"}>
                {item.label}
                {!item.done && " — not yet"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Adoption Requirements */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
          Adoption Requirements
        </h2>
        <ul className="mt-3 space-y-2 rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
          {adoptionRequirements.map((requirement) => (
            <li key={requirement} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-200">
              <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              {requirement}
            </li>
          ))}
        </ul>
      </section>

      {/* Location / Shelter */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
          Where to meet {pet.name}
        </h2>
        <div className="mt-3 flex flex-col items-start justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5 sm:flex-row sm:items-center dark:border-stone-800 dark:bg-stone-900">
          <p className="flex items-center gap-2 text-stone-700 dark:text-stone-200">
            <MapPin className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
            {pet.location}
          </p>
          <a
            href={`mailto:contact@pawsync.tech?subject=${encodeURIComponent(`Schedule a visit with ${pet.name}`)}`}
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-700 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:text-white active:translate-y-0 dark:text-teal-400 dark:hover:text-white"
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      {/* Adoption CTA */}
      <section className="relative mt-10 overflow-hidden bg-gradient-to-br from-orange-600 to-orange-500 py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Think {pet.name} could be the one?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-orange-50">
            Take the next step and give them the loving home they deserve.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={`/get-involved?interest=adopt&pet=${encodeURIComponent(pet.name)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-orange-700 shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg active:translate-y-0"
            >
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              Start Adoption Application
            </Link>
            <a
              href={`mailto:contact@pawsync.tech?subject=${encodeURIComponent(`Asking about ${pet.name}`)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-orange-700 active:translate-y-0"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Ask About {pet.name}
            </a>
          </div>
        </div>
      </section>

      {/* You may also like */}
      {relatedPets.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 dark:text-stone-50">
            You may also like
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPets.map((relatedPet) => (
              <li key={relatedPet.id}>
                <PetCard pet={relatedPet} />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/adopt"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 transition-colors hover:text-orange-800 dark:text-orange-400"
            >
              View All Pets
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
