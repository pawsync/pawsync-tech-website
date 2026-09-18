"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Paperclip, Send } from "lucide-react";
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

const quantitiesByLocale: Record<Locale, string[]> = {
  en: ["Prototype Only", "1–10", "10–100", "100–1,000", "1,000+"],
  de: ["Nur Prototyp", "1–10", "10–100", "100–1.000", "1.000+"],
  fr: ["Prototype uniquement", "1–10", "10–100", "100–1 000", "1 000+"],
};

const dict: Record<Locale, {
  successHeading: string;
  successBody: string;
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
}> = {
  en: {
    successHeading: "Thanks — your project request has been recorded",
    successBody:
      "This is a demo form with no backend connected yet, so nothing was actually sent. A production version of this site would route this request to our engineering team and follow up by email.",
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
  },
  de: {
    successHeading: "Vielen Dank — Ihre Projektanfrage wurde erfasst",
    successBody:
      "Dies ist ein Demoformular ohne angebundenes Backend, es wurde also nichts tatsächlich versendet. Eine Produktivversion dieser Website würde diese Anfrage an unser Engineering-Team weiterleiten und per E-Mail nachfassen.",
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
  },
  fr: {
    successHeading: "Merci — votre demande de projet a été enregistrée",
    successBody:
      "Il s'agit d'un formulaire de démonstration sans backend connecté ; rien n'a donc été réellement envoyé. Une version en production de ce site transmettrait cette demande à notre équipe d'ingénierie et assurerait un suivi par e-mail.",
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
  },
};

const inputClasses =
  "w-full rounded-xl border border-[var(--ts-navy)]/15 bg-white px-3.5 py-2.5 text-[0.9375rem] text-[var(--ts-navy)] transition-colors focus:border-[var(--ts-green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-1";

export default function TerraSenseContactForm({ locale = "en" }: { locale?: Locale }) {
  const idPrefix = useId();
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const t = dict[locale];
  const projectTypes = projectTypesByLocale[locale];
  const quantities = quantitiesByLocale[locale];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No backend is connected yet — this records the request locally and
    // tells the visitor honestly rather than pretending it was sent.
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-[var(--ts-green)]/30 bg-[var(--ts-green)]/8 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--ts-green)]" aria-hidden="true" />
        <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
          {t.successHeading}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ts-gray)]">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ts-dark-green)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-navy)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-green)] focus-visible:ring-offset-2 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {t.submit}
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
