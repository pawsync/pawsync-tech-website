import type { Metadata } from "next";
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import TerraSenseContactForm from "@/components/terrasense/TerraSenseContactForm";
import Eyebrow from "@/components/terrasense/Eyebrow";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";
import { buildAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Contact | PawSync",
  description:
    "Tell PawSync about your animal-tech or farm IoT idea and our engineering team will help turn the concept into a practical electronic product.",
  alternates: buildAlternates("en", "contact"),
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Eyebrow align="left">Contact</Eyebrow>
            <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
              Have an Animal-Tech or Farm IoT Idea?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ts-gray)]">
              Tell us what you want to build and we&apos;ll help turn the
              concept into a practical electronic product.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">Email</dt>
                  <dd className="break-words text-sm text-[var(--ts-gray)]">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--ts-dark-green)]">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">Phone</dt>
                  <dd className="break-words text-sm text-[var(--ts-gray)]">
                    <a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--ts-dark-green)]">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">WhatsApp</dt>
                  <dd className="break-words text-sm text-[var(--ts-gray)]">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ts-dark-green)]">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">Website</dt>
                  <dd className="break-words text-sm text-[var(--ts-gray)]">
                    <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ts-dark-green)]">
                      {WEBSITE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">Where we work</dt>
                  <dd className="text-sm text-[var(--ts-gray)]">Remote-first engineering team, projects worldwide</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[var(--ts-navy)]">Response time</dt>
                  <dd className="text-sm text-[var(--ts-gray)]">We typically reply within a few business days</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] sm:p-8">
            <TerraSenseContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
