import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog | PawSync",
  description:
    "Engineering notes on animal tracking, farm IoT, virtual fencing, wireless protocols, and building electronics for outdoor environments.",
  alternates: buildAlternates("en", "blog"),
  openGraph: buildOpenGraph("en", "blog"),
};

const articles = [
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
              className="group flex flex-col rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <Newspaper className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold leading-snug text-[var(--ts-navy)]">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ts-dark-green)]">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
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
