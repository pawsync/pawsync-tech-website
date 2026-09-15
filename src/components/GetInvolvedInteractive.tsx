"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Home,
  Handshake,
  PawPrint,
  Stethoscope,
  Tractor,
  type LucideIcon,
} from "lucide-react";

interface InvolvementOption {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const options: InvolvementOption[] = [
  { value: "volunteer", label: "Volunteer", description: "Lend your time at events, walks, or the shelter.", icon: HeartHandshake },
  { value: "foster", label: "Foster an Animal", description: "Open your home temporarily to a pet in need.", icon: Home },
  { value: "adopt", label: "Adopt", description: "Find your new best friend.", icon: PawPrint },
  { value: "donate", label: "Donate", description: "Fund vet care, food, and shelter.", icon: Heart },
  { value: "partner", label: "Partner with PawSync", description: "Explore a general partnership.", icon: Handshake },
  { value: "farm-partnership", label: "Farm Partnership", description: "Bring our Livestock program to your ranch.", icon: Tractor },
  { value: "vet-partnership", label: "Veterinary Partnership", description: "Join our network of vet care providers.", icon: Stethoscope },
  { value: "sponsorship", label: "Corporate Sponsorship", description: "Support PawSync as a business partner.", icon: Briefcase },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GetInvolvedInteractive({
  initialInterest,
  initialPet,
}: {
  initialInterest: string;
  initialPet: string;
}) {
  const idPrefix = useId();
  const formRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState(initialInterest);
  const [message, setMessage] = useState(
    initialPet ? `I'm interested in adopting ${initialPet}.` : ""
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const selectOption = (value: string) => {
    setSelected(value);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const help = String(formData.get("help") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!help) nextErrors.help = "Please select how you'd like to help.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitted");
  };

  return (
    <>
      <section aria-labelledby="get-involved-options-heading" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h2 id="get-involved-options-heading" className="sr-only">
          Ways to get involved
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => selectOption(option.value)}
                aria-pressed={isSelected}
                className={`group flex flex-col items-start rounded-2xl border p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? "border-orange-400 bg-orange-50 ring-2 ring-orange-300 dark:border-orange-600 dark:bg-orange-900/20"
                    : "border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                    isSelected ? "bg-orange-200 dark:bg-orange-800/50" : "bg-orange-100 dark:bg-orange-900/40"
                  }`}
                >
                  <Icon className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold text-stone-900 dark:text-stone-50">
                  {option.label}
                </h3>
                <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">{option.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={formRef}
        id="inquiry-form"
        aria-labelledby="inquiry-form-heading"
        className="scroll-mt-20 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="text-center">
          <h2
            id="inquiry-form-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Tell us how you&apos;d like to help
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            We&apos;ll follow up by email to get you started.
          </p>
        </div>

        {status === "submitted" ? (
          <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center dark:border-teal-800 dark:bg-teal-900/30">
            <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
              Thanks — your inquiry has been recorded
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-stone-600 dark:text-stone-300">
              This demo form isn&apos;t connected to a backend yet, so
              nothing was actually sent. In production, this would reach
              our team directly. For now,{" "}
              <a href="mailto:contact@pawsync.tech" className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">
                email us
              </a>{" "}
              and we&apos;ll follow up right away.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  id={`${idPrefix}-name`}
                  name="name"
                  type="text"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                />
                {errors.name && (
                  <p id={`${idPrefix}-name-error`} className="mt-1.5 flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                  Email <span className="text-orange-600">*</span>
                </label>
                <input
                  id={`${idPrefix}-email`}
                  name="email"
                  type="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                />
                {errors.email && (
                  <p id={`${idPrefix}-email-error`} className="mt-1.5 flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${idPrefix}-phone`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                  Phone
                </label>
                <input
                  id={`${idPrefix}-phone`}
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-location`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                  Location
                </label>
                <input
                  id={`${idPrefix}-location`}
                  name="location"
                  type="text"
                  placeholder="City, State"
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-help`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                How would you like to help? <span className="text-orange-600">*</span>
              </label>
              <select
                id={`${idPrefix}-help`}
                name="help"
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
                aria-invalid={Boolean(errors.help)}
                aria-describedby={errors.help ? `${idPrefix}-help-error` : undefined}
                className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
              {errors.help && (
                <p id={`${idPrefix}-help-error`} className="mt-1.5 flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.help}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium text-stone-700 dark:text-stone-200">
                Message
              </label>
              <textarea
                id={`${idPrefix}-message`}
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us a bit more…"
                className="mt-1.5 w-full resize-y rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 focus:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </section>
    </>
  );
}
