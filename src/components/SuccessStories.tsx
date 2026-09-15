import { Quote } from "lucide-react";
import Eyebrow from "./Eyebrow";

interface Story {
  quote: string;
  adopter: string;
  petName: string;
}

const stories: Story[] = [
  {
    quote:
      "Biscuit turned our quiet house into a home. The PawSync team made every step of the adoption easy and stress-free.",
    adopter: "The Ramirez Family",
    petName: "adopted Biscuit",
  },
  {
    quote:
      "We weren't sure we were ready for a cat, but Luna's foster notes made it an easy decision. She's been perfect from day one.",
    adopter: "Priya N.",
    petName: "adopted Luna",
  },
  {
    quote:
      "The vet team caught a health issue early during Duke's check-up and got him back on track before we even brought him home.",
    adopter: "Marcus T.",
    petName: "adopted Duke",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-heading"
      className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow tone="teal">Illustrative Stories</Eyebrow>
        <h2
          id="success-stories-heading"
          className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          What adoption day could look like
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Sample stories illustrating the kind of experience we aim to
          provide — not verified customer testimonials.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <figure
            key={story.adopter}
            className="flex flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900"
          >
            <Quote
              className="h-8 w-8 text-orange-300 dark:text-orange-700"
              aria-hidden="true"
            />
            <blockquote className="mt-4 flex-1 text-stone-600 dark:text-stone-300">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-stone-100 pt-4 dark:border-stone-800">
              <p className="font-semibold text-stone-900 dark:text-stone-50">
                {story.adopter}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {story.petName}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
