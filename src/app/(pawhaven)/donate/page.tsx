import type { Metadata } from "next";
import DonationCTA from "@/components/DonationCTA";
import DonationForm from "@/components/DonationForm";
import DonationBreakdown from "@/components/DonationBreakdown";

export const metadata: Metadata = {
  title: "Donate | PawSync.tech",
  description:
    "Support PawSync with a one-time or monthly donation. See exactly how your gift helps animals in our care.",
};

export default function DonatePage() {
  return (
    <>
      <DonationCTA />
      <section id="donation-form" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Make a gift
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            Choose an amount and how often you&apos;d like to give.
          </p>
        </div>
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <DonationForm />
        </div>
      </section>
      <DonationBreakdown />
    </>
  );
}
