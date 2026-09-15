import type { Metadata } from "next";
import {
  ArrowRight,
  Cpu,
  Globe2,
  Handshake,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Radio,
  Rocket,
  Satellite,
  Timer,
  Wrench,
} from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact PawSync | Animal-Tech & IoT Product Development",
  description:
    "Contact PawSync to discuss smart animal tracking, GPS devices, virtual fencing, livestock monitoring, poultry technology, custom IoT electronics, PCB design and embedded firmware development.",
};

const contactCards = [
  {
    icon: Rocket,
    title: "Start a Project",
    description: "Custom hardware, IoT, tracking, monitoring, PCB, or firmware.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Technology collaboration, product development, or integration.",
  },
  {
    icon: Wrench,
    title: "Existing Project",
    description: "Need help improving, debugging, or expanding an existing product?",
  },
];

const understandingItems = [
  "What the product should do",
  "Target animal or application",
  "Required sensors",
  "Connectivity requirements",
  "Expected quantity",
  "Target timeline",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — dark, technology-forward, distinct from the rest of the
          site's warm/light identity (matches the footer's tech treatment) */}
      <section className="relative overflow-hidden bg-[#07131d]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky-500/10 blur-[110px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-14 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-20 lg:pt-20">
          <div>
            <Eyebrow tone="sky">Contact PawSync</Eyebrow>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Let&apos;s Build Smarter Animal Technology
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Have a Pet-Tech, Animal-Tech, livestock, poultry, tracking,
              monitoring, or custom IoT product idea? Tell us what
              you&apos;re building and we&apos;ll review your requirements.
            </p>
            <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
              <a
                href="#project-form"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sky-500 px-6 py-3.5 text-base font-semibold text-[#07131d] shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg active:translate-y-0"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: compact tracking-dashboard visual */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  DOG #024 · ONLINE
                </span>
                <Satellite className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[11px] text-slate-400">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" aria-hidden="true" />Location</span>
                  <span className="font-medium text-slate-200">Home Zone</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Activity</span>
                  <span className="font-medium text-slate-200">Normal</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Battery</span>
                  <span className="font-medium text-slate-200">86%</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5"><Radio className="h-3 w-3" aria-hidden="true" />Connection</span>
                  <span className="font-medium text-slate-200">LTE / GPS</span>
                </div>
              </dl>
              <p className="mt-3 border-t border-white/10 pt-2.5 text-[10px] text-slate-500">Last update: 12 sec ago</p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Today</span>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[11px] text-slate-400">
                <div className="flex items-center justify-between gap-2">
                  <span>Distance</span>
                  <span className="font-medium text-slate-200">4.8 km</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Active</span>
                  <span className="font-medium text-slate-200">3h 12m</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Rest</span>
                  <span className="font-medium text-slate-200">8h 34m</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Temperature</span>
                  <span className="font-medium text-sky-400">Normal</span>
                </div>
              </dl>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-500">
              Sample dashboard for illustration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {contactCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                <card.icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold text-stone-900">{card.title}</h3>
              <p className="mt-1.5 text-sm text-stone-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow tone="sky">Project Inquiries</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Tell us about your product, problem, or system requirements.
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                <span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-stone-900 hover:text-sky-700">
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                <span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-900 hover:text-sky-700">
                    {WHATSAPP_DISPLAY}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Timer className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                <span>Project inquiries are welcome 24/7.</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                <span>Remote engineering and product development services available worldwide.</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:translate-y-0"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send an Email
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700 transition-all hover:-translate-y-0.5 hover:bg-sky-50 active:translate-y-0"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wide text-stone-700">
                What Helps Us Understand Your Project
              </h3>
              <ol className="mt-4 space-y-2.5">
                {understandingItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-700">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-stone-500">
                Existing specifications, diagrams, photos, or reference
                products are helpful.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#07131d] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Cpu className="h-6 w-6 text-sky-400" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Not Sure Which Technology You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Tell us the problem you&apos;re trying to solve. We can help
            define the electronics, sensors, connectivity and system
            architecture.
          </p>
          <a
            href="#project-form"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-base font-semibold text-[#07131d] shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg active:translate-y-0"
          >
            <Layers className="h-5 w-5" aria-hidden="true" />
            Discuss Your Idea
          </a>
        </div>
      </section>
    </>
  );
}
