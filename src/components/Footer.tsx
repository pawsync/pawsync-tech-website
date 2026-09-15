"use client";

import { useId, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Globe, Mail, MessageCircle, Send } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const solutionsLinks = [
  { label: "Animal GPS Tracking", href: "/pet-tech#gps-trackers" },
  { label: "Smart Collars", href: "/pet-tech#gps-trackers" },
  { label: "Virtual Fencing", href: "/livestock#virtual-fencing" },
  { label: "Activity Monitoring", href: "/pet-tech#health-monitors" },
  { label: "Smart Feeding", href: "/pet-tech#smart-feeders" },
];

const farmLinks = [
  { label: "Livestock GPS Tracking", href: "/livestock" },
  { label: "Animal Health Monitoring", href: "/livestock#animal-health" },
  { label: "Cattle Farming", href: "/livestock#cattle-farming" },
  { label: "Virtual Fencing", href: "/livestock#virtual-fencing" },
];

const engineeringLinks = [
  { label: "Custom Electronics", href: "/services#smart-technology" },
  { label: "IoT Development", href: "/services#smart-technology" },
  { label: "Sensor Integration", href: "/services#smart-technology" },
  { label: "Mobile & Dashboard Connectivity", href: "/services#smart-technology" },
];

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const communityLinks = [
  { label: "Adopt a Pet", href: "/adopt" },
  { label: "Vet Care", href: "/vet-care" },
  { label: "Donate", href: "/donate" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setStatus("error");
      return;
    }
    // No backend wired up yet — acknowledge the signup locally rather than
    // faking a real subscription.
    setStatus("success");
    setEmail("");
  };

  return (
    <footer id="newsletter" className="scroll-mt-20 bg-[#07131d] text-slate-300">
      {/* Subtle blue/cyan divider instead of a heavy brand-color bar */}
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* Let's Build Something — contact CTA */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-400">Let&apos;s Build Something</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
              Have an Animal-Tech or IoT product idea?
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sky-400 transition-colors hover:bg-white/5 hover:text-sky-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <Link
              href="/contact#project-form"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-base font-semibold text-[#07131d] shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-lg active:translate-y-0"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" aria-label="PawSync.tech — Home" className="inline-block transition-opacity hover:opacity-85">
              <Image
                // Full variant (icon + wordmark + tagline) — sized larger
                // than the navbar's compact mark so "Connected Care for
                // Every Paw" stays legible.
                src="/brand/pawsync-logo-transparent-trimmed.png"
                alt="PawSync.tech — Connected Care for Every Paw"
                width={1306}
                height={780}
                className="h-16 w-auto sm:h-[4.5rem]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-slate-400">
              Connected technology for pets, livestock and modern animal care.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              GPS tracking • IoT • Smart Monitoring
            </p>
          </div>

          <nav aria-label="Solutions">
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:text-sky-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Farm Technology">
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">Farm Technology</h3>
            <ul className="mt-4 space-y-3">
              {farmLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:text-sky-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Engineering">
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">Engineering</h3>
            <ul className="mt-4 space-y-3">
              {engineeringLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:text-sky-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:text-sky-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-wider text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{WHATSAPP_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                <a href="https://pawsync.tech" className="hover:text-white">pawsync.tech</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Community / Animal Welfare — kept, but visually secondary */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-500">Community / Animal Welfare</h3>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {communityLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-sky-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">Stay in the loop</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-400">
            Get occasional updates on animal technology, IoT solutions and
            product development.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 max-w-md" noValidate>
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>
            <div className="flex gap-2">
              <input
                id={emailId}
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status === "error") setStatus("idle");
                }}
                aria-invalid={status === "error"}
                aria-describedby={`${emailId}-status`}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#07131d] transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">Subscribe</span>
              </button>
            </div>
            <p id={`${emailId}-status`} role="status" aria-live="polite" className="mt-2 flex items-center gap-1.5 text-xs">
              {status === "success" && (
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Thanks for subscribing! Check your inbox soon.
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-1.5 text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Please enter a valid email address.
                </span>
              )}
            </p>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PawSync.tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <span className="hidden text-slate-600 sm:inline">Designed for connected animal technology.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
