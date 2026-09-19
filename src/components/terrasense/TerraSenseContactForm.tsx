"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Paperclip, Send } from "lucide-react";
import type { Locale } from "@/i18n/config";

const projectTypesByLocale: Record<Locale, string[]> = {
  en: [
    "Animal Tracking",
    "Virtual Fencing",
    "Smart Feeding",
    "Health Monitoring",
    "Farm Automation",
    "Environmental Monitoring",
    "Custom PCB",
    "IoT Product Development",
    "Prototype Development",
    "Other",
  ],
  de: [
    "Tier-Tracking",
    "Virtuelle Einzäunung",
    "Intelligente Fütterung",
    "Gesundheitsüberwachung",
    "Hofautomatisierung",
    "Umweltüberwachung",
    "Kundenspezifische Leiterplatte",
    "IoT-Produktentwicklung",
    "Prototypenentwicklung",
    "Sonstiges",
  ],
  fr: [
    "Suivi des animaux",
    "Clôture virtuelle",
    "Alimentation intelligente",
    "Suivi de la santé",
    "Automatisation agricole",
    "Surveillance environnementale",
    "Carte PCB sur mesure",
    "Développement de produit IoT",
    "Développement de prototype",
    "Autre",
  ],
};

// Kept identical to the values in public/project-inquiry.html (the static
// detection copy of this form) so Netlify's dashboard shows the same
// option set regardless of which locale a visitor submitted from.
const quantitiesByLocale: Record<Locale, string[]> = {
  en: ["Prototype Only", "1–10", "10–100", "100–1,000", "1,000+"],
  de: ["Nur Prototyp", "1–10", "10–100", "100–1.000", "1.000+"],
  fr: ["Prototype uniquement", "1–10", "10–100", "100–1 000", "1 000+"],
};

const dict: Record<Locale, {
  successHeading: string;
  successBody: string;
  errorMessage: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  selectProjectType: string;
  quantity: string;
  selectQuantity: string;
  description: string;
  descriptionPlaceholder: string;
  uploadLabel: string;
  uploadCta: string;
  submit: string;
  submitting: string;
}> = {
  en: {
    successHeading: "Thank you.",
    successBody:
      "Your project request has been received. The PawSync team will review your requirements and contact you shortly.",
    errorMessage:
      "Something went wrong and your request could not be sent. Please try again, or email us directly at contact@pawsync.tech.",
    fullName: "Full Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    country: "Country",
    projectType: "Project Type",
    selectProjectType: "Select a project type",
    quantity: "Expected Quantity",
    selectQuantity: "Select expected quantity",
    description: "Project Description",
    descriptionPlaceholder: "Tell us about the animals, environment, and functionality you have in mind…",
    uploadLabel: "Upload specifications or product requirements",
    uploadCta: "Attach a file (optional)",
    submit: "Submit Project Request",
    submitting: "Sending…",
  },
  de: {
    successHeading: "Vielen Dank.",
    successBody:
      "Ihre Projektanfrage ist bei uns eingegangen. Das PawSync-Team prüft Ihre Anforderungen und meldet sich in Kürze bei Ihnen.",
    errorMessage:
      "Leider ist ein Fehler aufgetreten, und Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an contact@pawsync.tech.",
    fullName: "Vollständiger Name",
    company: "Unternehmen",
    email: "E-Mail",
    phone: "Telefon",
    country: "Land",
    projectType: "Projektart",
    selectProjectType: "Projektart auswählen",
    quantity: "Erwartete Stückzahl",
    selectQuantity: "Erwartete Stückzahl auswählen",
    description: "Projektbeschreibung",
    descriptionPlaceholder: "Erzählen Sie uns von den Tieren, der Umgebung und der gewünschten Funktionalität…",
    uploadLabel: "Spezifikationen oder Anforderungen hochladen",
    uploadCta: "Datei anhängen (optional)",
    submit: "Projektanfrage senden",
    submitting: "Wird gesendet…",
  },
  fr: {
    successHeading: "Merci.",
    successBody:
      "Votre demande de projet a bien été reçue. L'équipe PawSync examinera vos besoins et vous contactera prochainement.",
    errorMessage:
      "Une erreur s'est produite et votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous écrire directement à contact@pawsync.tech.",
    fullName: "Nom complet",
    company: "Entreprise",
    email: "E-mail",
    phone: "Téléphone",
    country: "Pays",
    projectType: "Type de projet",
    selectProjectType: "Sélectionnez un type de projet",
    quantity: "Quantité prévue",
    selectQuantity: "Sélectionnez la quantité prévue",
    description: "Description du projet",
    descriptionPlaceholder: "Parlez-nous des animaux, de l'environnement et des fonctionnalités envisagées…",
    uploadLabel: "Téléverser des spécifications ou exigences produit",
    uploadCta: "Joindre un fichier (facultatif)",
    submit: "Envoyer la demande de projet",
    submitting: "Envoi en cours…",
  },
};

const inputClasses =
  "w-full rounded-xl border border-[var(--ts-navy)]/15 bg-white px-3.5 py-2.5 text-[0.9375rem] text-[var(--ts-navy)] transition-colors focus:border-[var(--ts-green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-1";

type Status = "idle" | "submitting" | "success" | "error";

export default function TerraSenseContactForm({ locale = "en" }: { locale?: Locale }) {
  const idPrefix = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const t = dict[locale];
  const projectTypes = projectTypesByLocale[locale];
  const quantities = quantitiesByLocale[locale];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      // Sent as multipart/form-data (not URL-encoded) so any attached
      // files are transmitted along with the rest of the fields — the
      // browser sets the correct Content-Type header, including the
      // multipart boundary, automatically when the body is a FormData
      // instance. Do not set Content-Type manually here.
      const response = await fetch("/", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("Netlify Forms submission failed:", response.status, response.statusText);
        setStatus("error");
      }
    } catch (err) {
      console.error("Netlify Forms submission error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl border border-[var(--ts-green)]/30 bg-[var(--ts-green)]/8 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--ts-green)]" aria-hidden="true" />
        <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
          {t.successHeading}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ts-gray)]">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form
      name="project-inquiry"
      method="POST"
      action="/"
      encType="multipart/form-data"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <input type="hidden" name="form-name" value="project-inquiry" />
      <p hidden>
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {status === "error" && (
        <div role="status" aria-live="polite" className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{t.errorMessage}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} label={t.fullName} required>
          <input id={`${idPrefix}-name`} name="name" type="text" required className={inputClasses} />
        </Field>
        <Field id={`${idPrefix}-company`} label={t.company}>
          <input id={`${idPrefix}-company`} name="company" type="text" className={inputClasses} />
        </Field>
        <Field id={`${idPrefix}-email`} label={t.email} required>
          <input id={`${idPrefix}-email`} name="email" type="email" required className={inputClasses} />
        </Field>
        <Field id={`${idPrefix}-phone`} label={t.phone}>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" className={inputClasses} />
        </Field>
        <Field id={`${idPrefix}-country`} label={t.country}>
          <input id={`${idPrefix}-country`} name="country" type="text" className={inputClasses} />
        </Field>
        <Field id={`${idPrefix}-project-type`} label={t.projectType} required>
          <select
            id={`${idPrefix}-project-type`}
            name="projectType"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              {t.selectProjectType}
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={`${idPrefix}-quantity`} label={t.quantity}>
        <select id={`${idPrefix}-quantity`} name="quantity" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            {t.selectQuantity}
          </option>
          {quantities.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </Field>

      <Field id={`${idPrefix}-description`} label={t.description} required>
        <textarea
          id={`${idPrefix}-description`}
          name="description"
          required
          rows={5}
          placeholder={t.descriptionPlaceholder}
          className={`${inputClasses} resize-y`}
        />
      </Field>

      <div>
        <label htmlFor={`${idPrefix}-files`} className="block text-sm font-medium text-[var(--ts-navy)]">
          {t.uploadLabel}
        </label>
        <label
          htmlFor={`${idPrefix}-files`}
          className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[var(--ts-navy)]/20 bg-[var(--ts-bg)] px-4 py-4 text-sm text-[var(--ts-gray)] transition-colors hover:border-[var(--ts-green)] hover:text-[var(--ts-navy)]"
        >
          <Paperclip className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
          {fileNames.length > 0 ? fileNames.join(", ") : t.uploadCta}
        </label>
        <input
          id={`${idPrefix}-files`}
          name="files"
          type="file"
          multiple
          className="sr-only"
          onChange={(event) => setFileNames(Array.from(event.target.files ?? []).map((f) => f.name))}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[var(--ts-dark-green)] sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--ts-navy)]">
        {label}
        {required && <span className="text-[var(--ts-green)]"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
