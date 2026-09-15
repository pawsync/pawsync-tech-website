"use client";

import { useId, useState, type FormEvent } from "react";
import { Heart, HeartHandshake, Home, Info, Stethoscope, UtensilsCrossed } from "lucide-react";

const presetAmounts = [10, 25, 50, 100];

const helpsProvide = [
  { icon: Stethoscope, label: "Veterinary treatment" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Home, label: "Shelter" },
  { icon: HeartHandshake, label: "Rescue" },
  { icon: Heart, label: "Foster care" },
];

export default function DonationForm() {
  const idPrefix = useId();
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const amount = selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (amount <= 0) return;
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center dark:border-teal-800 dark:bg-teal-900/30">
        <Heart className="mx-auto h-10 w-10 text-teal-600 dark:text-teal-400" aria-hidden="true" />
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
          Thank you for your intent to give
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-stone-600 dark:text-stone-300">
          This demo isn&apos;t connected to a payment provider yet, so no
          charge was made. A production version of this page would process
          your ${amount.toLocaleString()} {frequency === "monthly" ? "monthly" : "one-time"} gift
          through Stripe or PayPal. For now,{" "}
          <a href="mailto:contact@pawsync.tech" className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">
            email our team
          </a>{" "}
          to give directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900"
    >
      <fieldset>
        <legend className="text-sm font-semibold text-stone-900 dark:text-stone-50">Donation amount</legend>
        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-5">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setSelectedAmount(preset)}
              aria-pressed={selectedAmount === preset}
              className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                selectedAmount === preset
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-stone-100 text-stone-700 hover:bg-orange-50 hover:text-orange-700 dark:bg-stone-800 dark:text-stone-200"
              }`}
            >
              ${preset}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedAmount("custom")}
            aria-pressed={selectedAmount === "custom"}
            className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
              selectedAmount === "custom"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-stone-100 text-stone-700 hover:bg-orange-50 hover:text-orange-700 dark:bg-stone-800 dark:text-stone-200"
            }`}
          >
            Custom
          </button>
        </div>
        {selectedAmount === "custom" && (
          <div className="mt-3">
            <label htmlFor={`${idPrefix}-custom`} className="sr-only">
              Custom donation amount in dollars
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">$</span>
              <input
                id={`${idPrefix}-custom`}
                type="number"
                min={1}
                inputMode="decimal"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                placeholder="Enter amount"
                required
                className="w-full rounded-xl border border-stone-200 bg-white py-2.5 pl-7 pr-3.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              />
            </div>
          </div>
        )}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-stone-900 dark:text-stone-50">Donation type</legend>
        <div className="mt-3 inline-flex rounded-full bg-stone-100 p-1 dark:bg-stone-800">
          {(["once", "monthly"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFrequency(option)}
              aria-pressed={frequency === option}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                frequency === option
                  ? "bg-white text-orange-700 shadow-sm dark:bg-stone-900 dark:text-orange-400"
                  : "text-stone-500 dark:text-stone-400"
              }`}
            >
              {option === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 rounded-xl bg-stone-50 p-4 dark:bg-stone-800/60">
        <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
          Your donation helps provide
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {helpsProvide.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5 text-sm text-stone-600 dark:text-stone-300">
              <item.icon className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="submit"
        disabled={amount <= 0}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <Heart className="h-5 w-5" aria-hidden="true" />
        Donate ${amount > 0 ? amount.toLocaleString() : "—"}{frequency === "monthly" && amount > 0 ? " / month" : ""}
      </button>

      <p className="mt-4 flex items-start gap-2 text-xs text-stone-400 dark:text-stone-500">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Demo checkout — no payment provider is connected yet. This form is
        ready for future Stripe or PayPal integration.
      </p>
    </form>
  );
}
