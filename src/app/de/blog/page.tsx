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
    "Engineering-Notizen zu Tier-Tracking, Hof-IoT, virtueller Einzäunung, Funkprotokollen und dem Bau von Elektronik für den Außeneinsatz.",
  alternates: buildAlternates("de", "blog"),
  openGraph: buildOpenGraph("de", "blog"),
};

const articles = [
  {
    title: "GNSS + LoRa vs. GNSS + LTE-M für Tier-Tracking",
    excerpt: "GNSS bestimmt die Position; LoRa und LTE-M sind separate Kommunikationsebenen, die diese Position vom Gerät übertragen. Ein praktischer Vergleich.",
    href: "/de/blog/gnss-lora-vs-gnss-ltem",
  },
  {
    title: "Stromsparende Elektronik für Tier-Tracker im Außeneinsatz",
    excerpt: "Die Akkulaufzeit eines tragbaren Trackers ist ein Energiebudget-Problem. Die Techniken, die entscheiden, ob ein Gerät Tage oder Monate durchhält.",
    href: "/de/blog/low-power-animal-tracker-design",
  },
];

export default function BlogPageDe() {
  return (
    <>
      <Breadcrumb locale="de" items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering-Notizen zu Tier- &amp; Hoftechnologie
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Praxisnahe Beiträge zu Hardware, Funkprotokollen und
          Designentscheidungen hinter vernetzter Tier- und Hofelektronik.
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
                Artikel lesen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Möchten Sie, dass wir ein bestimmtes Thema behandeln?"
        description="Wenn Sie eine Frage zu Animal-Tech oder Hof-IoT beantwortet haben möchten, lassen Sie es uns wissen."
        primaryLabel="Kontaktieren Sie uns"
        primaryHref="/de/contact"
      />
    </>
  );
}
