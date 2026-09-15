import type { Metadata } from "next";
import GetInvolvedInteractive from "@/components/GetInvolvedInteractive";

export const metadata: Metadata = {
  title: "Get Involved | PawSync.tech",
  description:
    "Volunteer, foster, adopt, donate, or partner with PawSync — find the way you'd like to help animals in need.",
};

function firstValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function GetInvolvedPage(props: PageProps<"/get-involved">) {
  const searchParams = await props.searchParams;
  const initialInterest = firstValue(searchParams.interest);
  const initialPet = firstValue(searchParams.pet);

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
          Get Involved
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          However you&apos;d like to help, there&apos;s a place for you at
          PawSync. Pick an option below to get started.
        </p>
      </section>

      <GetInvolvedInteractive initialInterest={initialInterest} initialPet={initialPet} />
    </>
  );
}
