import { Heart, HeartHandshake, Home, Stethoscope } from "lucide-react";

const allocation = [
  { icon: Stethoscope, label: "Veterinary Care", percent: 40, color: "bg-teal-500" },
  { icon: Home, label: "Food & Shelter", percent: 30, color: "bg-orange-500" },
  { icon: HeartHandshake, label: "Rescue Operations", percent: 20, color: "bg-rose-500" },
  { icon: Heart, label: "Foster Support", percent: 10, color: "bg-amber-500" },
];

export default function DonationBreakdown() {
  return (
    <section aria-labelledby="donation-breakdown-heading" className="bg-stone-50 py-16 sm:py-20 dark:bg-stone-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="donation-breakdown-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Where your donation goes
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            An illustrative breakdown of how gifts typically support our
            work.
          </p>
        </div>

        <div className="mt-10 space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900">
          {allocation.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-stone-700 dark:text-stone-200">
                  <item.icon className="h-4 w-4 text-stone-400 dark:text-stone-500" aria-hidden="true" />
                  {item.label}
                </span>
                <span className="font-semibold text-stone-900 dark:text-stone-50">{item.percent}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-stone-400 dark:text-stone-500">
          Illustrative figures for demonstration — not audited financial
          data.
        </p>
      </div>
    </section>
  );
}
