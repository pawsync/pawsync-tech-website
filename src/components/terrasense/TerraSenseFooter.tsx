import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import TerraSenseLogo from "@/components/terrasense/TerraSenseLogo";

// Every link resolves to a real, substantive page or in-page section —
// no placeholders.
const columns = [
  {
    heading: "Solutions",
    links: [
      { label: "Animal Tracking", href: "/solutions#tracking-location" },
      { label: "Virtual Fencing", href: "/solutions#virtual-fencing" },
      { label: "Smart Feeding", href: "/solutions#smart-feeding" },
      { label: "Health Monitoring", href: "/solutions#health-monitoring" },
      { label: "Farm Automation", href: "/farm-automation" },
      { label: "Smart Irrigation", href: "/solutions#smart-irrigation" },
      { label: "Environmental Monitoring", href: "/environmental-monitoring" },
    ],
  },
  {
    heading: "Engineering",
    links: [
      { label: "Custom Electronics", href: "/custom-electronics" },
      { label: "PCB Design", href: "/custom-electronics#services" },
      { label: "Firmware Development", href: "/custom-electronics#services" },
      { label: "IoT Development", href: "/custom-electronics#services" },
      { label: "Prototype Development", href: "/custom-electronics#process" },
      { label: "Production Support", href: "/custom-electronics#process" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Pet Technology", href: "/pet-technology" },
      { label: "Livestock", href: "/livestock-technology" },
      { label: "Dairy", href: "/industries" },
      { label: "Poultry", href: "/poultry-farming" },
      { label: "Veterinary", href: "/industries" },
      { label: "Smart Agriculture", href: "/industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function TerraSenseFooter() {
  return (
    <footer className="bg-[var(--ts-navy)] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block transition-opacity hover:opacity-85">
              <TerraSenseLogo variant="light" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Smart electronics for animals, farms &amp; connected
              environments. Custom IoT hardware, embedded firmware, and
              PCB engineering — from concept to production.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                Engineering &amp; product development, remote-first
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-words hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ts-green)]" aria-hidden="true" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="break-words hover:text-white">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 transition-colors hover:text-[var(--ts-accent)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/50 sm:text-left">
          <p>© {new Date().getFullYear()} PawSync Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
