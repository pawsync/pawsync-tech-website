import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Engineering Blog: Animal Tracking & Farm IoT | PawSync",
  description:
    "Engineering notes on animal tracking, farm IoT, virtual fencing, wireless protocols, and building electronics for outdoor environments.",
  alternates: buildAlternates("en", "blog"),
  openGraph: buildOpenGraph("en", "blog"),
};

const articles = [
  {
    title: "How Virtual Fencing Collars Work: GNSS, Cues and Power Design",
    excerpt: "How a collar knows where the boundary is, how audio and electrical cues are sequenced, and what limits battery life.",
    href: "/blog/virtual-fencing-collars",
    image: "/blog/virtual-fencing-collars/hero.svg",
  },
  {
    title: "Livestock Monitoring Sensors: What Each Sensor Measures",
    excerpt: "GPS, activity, water, gate and fence sensors — what each tells you, how it's powered, and how to connect it across a ranch.",
    href: "/blog/livestock-monitoring-sensors",
    image: "/blog/livestock-monitoring-sensors/hero.svg",
  },
  {
    title: "Ammonia, CO₂ and Humidity Sensors in Poultry Houses",
    excerpt: "Sensor types, placement at bird height, calibration and drift — and why CO₂ auto-calibration fails in a stocked house.",
    href: "/blog/poultry-house-air-quality-sensors",
    image: "/blog/poultry-house-air-quality-sensors/hero.svg",
  },
  {
    title: "From Prototype to Production: The IoT Hardware Development Process",
    excerpt: "Requirements, proof of concept, EVT, DVT and PVT — plus CE, UKCA and FCC certification for connected devices.",
    href: "/blog/iot-hardware-development-process",
    image: "/blog/iot-hardware-development-process/hero.svg",
  },
  {
    title: "Planning a LoRaWAN Network for a Farm",
    excerpt: "Gateway placement, realistic range, EU868 vs. US915, airtime limits and battery life for farm sensor networks.",
    href: "/blog/lorawan-farm-network-planning",
    image: "/blog/lorawan-farm-network-planning/hero.svg",
  },
  {
    title: "GNSS + LoRa vs. GNSS + LTE-M for Animal Tracking",
    excerpt: "GNSS determines position; LoRa and LTE-M are separate communication layers that get that position off the device. A practical comparison.",
    href: "/blog/gnss-lora-vs-gnss-ltem",
  },
  {
    title: "Designing Low-Power Electronics for Outdoor Animal Trackers",
    excerpt: "Battery life in a wearable tracker is a power-budget problem. The engineering techniques that determine whether a device lasts days or months.",
    href: "/blog/low-power-animal-tracker-design",
  },
  {
    title: "Designing a PCB for a Pet or Animal Tracker",
    excerpt: "A collar- or tag-mounted tracker isn't a smaller GPS board. Antenna placement, stack-up, and enclosure constraints that drive the design.",
    href: "/blog/pet-tracker-pcb-design",
  },
  {
    title: "Smart Pet Feeder Hardware & Firmware Engineering",
    excerpt: "Portion accuracy, load-cell calibration, jam detection, and RFID recognition — the engineering decisions behind a smart pet feeder.",
    href: "/blog/smart-pet-feeder-engineering",
  },
  {
    title: "Planning a Wireless Poultry House Monitoring Network",
    excerpt: "Sensor placement, protocol choice, and gateway planning — and why one sensor per house usually isn't enough.",
    href: "/blog/wireless-poultry-monitoring-design",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering notes on animal &amp; farm technology
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Practical write-ups on the hardware, wireless protocols, and
          design decisions behind connected animal and farm electronics.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
            >
              {article.image ? (
                <Image
                  src={article.image}
                  alt=""
                  width={1200}
                  height={600}
                  unoptimized
                  className="aspect-[2/1] h-auto w-full border-b border-[var(--ts-navy)]/8 object-cover"
                />
              ) : (
                <div className="flex aspect-[2/1] w-full items-center justify-center border-b border-[var(--ts-navy)]/8 bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/15">
                  <Newspaper className="h-10 w-10 text-[var(--ts-dark-green)]/70" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-[family-name:var(--font-manrope)] text-lg font-bold leading-snug text-[var(--ts-navy)]">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-dark-green)]">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Have a Topic You'd Like Us to Cover?"
        description="If there's an animal-tech or farm IoT question you'd like answered, let us know."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
