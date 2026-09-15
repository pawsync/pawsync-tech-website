"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Paperclip, Send } from "lucide-react";

const projectTypes = [
  "Pet GPS Tracking",
  "Smart Collar / Wearable",
  "Virtual Fencing",
  "Activity Monitoring",
  "Health Monitoring",
  "Smart Feeding",
  "Livestock Monitoring",
  "Poultry Monitoring",
  "Environmental Monitoring",
  "Farm Automation",
  "Custom IoT Device",
  "PCB Design",
  "Embedded Firmware",
  "Prototype Development",
  "Other",
];

const projectStages = [
  "Idea / Concept",
  "Requirements Ready",
  "Prototype Exists",
  "Existing Product Improvement",
  "Production Preparation",
];

const quantities = ["Prototype Only", "1–10", "10–100", "100–1,000", "1,000+"];

const connectivityOptions = [
  "Not Sure Yet",
  "Bluetooth / BLE",
  "Wi-Fi",
  "LoRa / LoRaWAN",
  "LTE / Cellular",
  "GPS / GNSS",
  "RFID / NFC",
  "Multiple Technologies",
];

const inputClasses =
  "mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 transition-colors focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300";

const labelClasses = "block text-sm font-semibold text-stone-800";

export default function ContactForm() {
  const idPrefix = useId();
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "");
    const description = String(formData.get("description") ?? "").trim();

    if (!name || !email || !projectType || !description) {
      setError("Please fill in all required fields marked with *.");
      return;
    }
    setError(null);
    // No backend is wired up yet — see note below. We acknowledge the
    // request locally rather than pretending it was sent anywhere.
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div id="project-form" className="scroll-mt-24 rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-sky-600" aria-hidden="true" />
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
          Thanks — your project request has been recorded
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-stone-600">
          This form isn&apos;t connected to a backend yet, so nothing was
          actually sent to our team. In production, this would route
          directly to our project inbox. For now,{" "}
          <a href="mailto:contact@pawsync.tech" className="font-semibold text-sky-700 underline underline-offset-2">
            email us directly
          </a>{" "}
          and we&apos;ll follow up.
        </p>
      </div>
    );
  }

  return (
    <form
      id="project-form"
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-24 space-y-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClasses}>
            Full Name <span className="text-sky-600">*</span>
          </label>
          <input id={`${idPrefix}-name`} name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClasses}>
            Email <span className="text-sky-600">*</span>
          </label>
          <input id={`${idPrefix}-email`} name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-company`} className={labelClasses}>
            Company / Organization
          </label>
          <input id={`${idPrefix}-company`} name="company" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-country`} className={labelClasses}>
            Country
          </label>
          <input id={`${idPrefix}-country`} name="country" type="text" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-phone`} className={labelClasses}>
            WhatsApp / Phone
          </label>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 border-t border-stone-100 pt-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-type`} className={labelClasses}>
            Project Type <span className="text-sky-600">*</span>
          </label>
          <select id={`${idPrefix}-type`} name="projectType" required defaultValue="" className={inputClasses}>
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-stage`} className={labelClasses}>
            Project Stage
          </label>
          <select id={`${idPrefix}-stage`} name="stage" defaultValue="" className={inputClasses}>
            <option value="" disabled>Select a stage</option>
            {projectStages.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-quantity`} className={labelClasses}>
            Expected Quantity
          </label>
          <select id={`${idPrefix}-quantity`} name="quantity" defaultValue="" className={inputClasses}>
            <option value="" disabled>Select a quantity</option>
            {quantities.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-connectivity`} className={labelClasses}>
            Connectivity Requirements
          </label>
          <select id={`${idPrefix}-connectivity`} name="connectivity" defaultValue="" className={inputClasses}>
            <option value="" disabled>Select connectivity</option>
            {connectivityOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-stone-100 pt-6">
        <label htmlFor={`${idPrefix}-description`} className={labelClasses}>
          Project Description <span className="text-sky-600">*</span>
        </label>
        <textarea
          id={`${idPrefix}-description`}
          name="description"
          required
          rows={5}
          placeholder="Tell us what you want to build, the main functions, target users, required sensors or connectivity, and any technical constraints."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-file`} className={labelClasses}>
          Upload Specifications or Reference Files
        </label>
        <div className="mt-1.5 flex items-center gap-3">
          <label
            htmlFor={`${idPrefix}-file`}
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-dashed border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:border-sky-400 hover:text-sky-700"
          >
            <Paperclip className="h-4 w-4" aria-hidden="true" />
            Choose file
          </label>
          <input
            id={`${idPrefix}-file`}
            name="file"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
            className="sr-only"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
          />
          <span className="truncate text-sm text-stone-500">
            {fileName ?? "PDF, DOCX, PNG, JPG or ZIP"}
          </span>
        </div>
      </div>

      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-sm text-rose-600">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Submit Project Request
      </button>
      <p className="text-xs text-stone-400">
        This form is not yet connected to a backend or email service —
        submissions are not currently sent or stored. Backend integration
        (e.g. an API route or form service) is required before this goes
        live.
      </p>
    </form>
  );
}
