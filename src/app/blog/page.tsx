import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";

export const metadata: Metadata = {
  title: "Blog | PawSync",
  description:
    "Engineering notes on animal tracking, farm IoT, virtual fencing, wireless protocols, and building electronics for outdoor environments.",
};

const articles = [
  { title: "How IoT Is Transforming Livestock Farming", excerpt: "A look at how connected sensors and tracking are changing day-to-day herd management." },
  { title: "GPS vs LoRa for Animal Tracking", excerpt: "Two very different technologies, each suited to different range, power, and accuracy needs." },
  { title: "How Virtual Fencing Technology Works", excerpt: "Breaking down the GPS, communication, and alert layers behind a virtual boundary." },
  { title: "Building Low-Power Animal Tracking Devices", excerpt: "Design decisions that determine whether a tracker lasts days or months on a charge." },
  { title: "IoT Sensors Every Smart Farm Should Consider", excerpt: "The core sensor types that give a farm real visibility into its operations." },
  { title: "How Automated Feeding Systems Work", excerpt: "From hopper to mobile app — the hardware chain behind scheduled, portion-controlled feeding." },
  { title: "Using RFID for Livestock Identification", excerpt: "Why RFID remains the standard for reliable, low-cost animal identification." },
  { title: "Environmental Monitoring for Poultry Farms", excerpt: "The narrow tolerances poultry housing requires, and how sensors help hold them." },
  { title: "How Smart Sensors Can Prevent Farm Equipment Failures", excerpt: "Early-warning monitoring for pumps, generators, and other critical infrastructure." },
  { title: "Designing Electronics for Outdoor Agricultural Environments", excerpt: "Dust, moisture, temperature swings — engineering hardware that survives the field." },
  { title: "BLE vs Wi-Fi vs LoRa for Farm IoT Devices", excerpt: "Choosing the right wireless protocol based on range, power, and infrastructure." },
  { title: "What Goes Into Developing a Custom IoT Product?", excerpt: "A walkthrough of the stages between an idea and a manufacturable device." },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Engineering notes on animal &amp; farm technology
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Practical write-ups on the hardware, wireless protocols, and
          design decisions behind connected animal and farm electronics.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                <Newspaper className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-base font-bold leading-snug text-[var(--ts-navy)]">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{article.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--ts-gray)]">
          Full articles coming soon — these are in-progress topics for our
          engineering blog.
        </p>
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
