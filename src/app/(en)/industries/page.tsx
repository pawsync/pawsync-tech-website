import type { Metadata } from "next";
import {
  Bird,
  Building2,
  Cpu,
  Dog,
  HeartPulse,
  Home,
  Microscope,
  Milk,
  PawPrint,
  Sprout,
  Tractor,
  TreePine,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Industries: Pet Tech, Livestock, Poultry & AgriTech | PawSync",
  description:
    "PawSync designs electronics for pet-tech companies, livestock, dairy and poultry farms, veterinary technology, wildlife research, and AgriTech startups.",
  alternates: buildAlternates("en", "industries"),
  openGraph: buildOpenGraph("en", "industries"),
};

const industries: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Dog, label: "Pet Technology Companies", href: "/pet-technology" },
  { icon: Tractor, label: "Livestock Farms", href: "/livestock-technology" },
  { icon: Milk, label: "Dairy Farms" },
  { icon: Bird, label: "Poultry Farms", href: "/poultry-farming" },
  { icon: PawPrint, label: "Horse Farms" },
  { icon: HeartPulse, label: "Veterinary Technology" },
  { icon: Home, label: "Animal Shelters" },
  { icon: Building2, label: "Pet Boarding & Kennels" },
  { icon: TreePine, label: "Wildlife Research" },
  { icon: Sprout, label: "Smart Agriculture" },
  { icon: Warehouse, label: "Agricultural Equipment Companies" },
  { icon: Microscope, label: "Farm Management Companies" },
  { icon: Cpu, label: "IoT Startups" },
  { icon: Zap, label: "AgriTech Startups" },
];

const detailsCopy = {
  "eyebrow": "What We Build",
  "heading": "What We Build for Each Industry",
  "intro": "The same core skills, sensors, low-power electronics, wireless connectivity and firmware, are applied differently in each industry. These are the problems we most often design hardware for.",
  "items": [
    {
      "title": "Pet technology companies",
      "description": "GPS and activity trackers, smart feeders and connected pet products, designed for small size, long battery life and consumer-friendly setup, ready for manufacturing."
    },
    {
      "title": "Livestock & dairy farms",
      "description": "Remote livestock monitoring, cattle tracking, virtual fencing collars and water and gate sensors that work across large pastures with little or no cellular coverage."
    },
    {
      "title": "Poultry farms",
      "description": "Wireless poultry sensors for temperature, humidity, ammonia and CO2, with ventilation, feeding and water monitoring across multiple houses."
    },
    {
      "title": "Veterinary & animal welfare",
      "description": "Health and activity monitoring devices, and environmental monitoring for clinics, shelters, kennels and boarding facilities."
    },
    {
      "title": "Wildlife research",
      "description": "Lightweight, long-life tracking and sensing devices for field studies, where weight limits, remote locations and battery life drive every design choice."
    },
    {
      "title": "AgriTech & IoT startups",
      "description": "From proof of concept to a production-ready device: PCB design, firmware, prototypes and manufacturing files, so a startup can test the market and scale."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Working With Us",
  "heading": "How We Work With Different Clients",
  "intro": "A farm, a pet-tech brand and a research team need different things from an engineering partner. We adapt the engagement to who will build, sell and support the device.",
  "options": [
    {
      "title": "Product companies",
      "description": "Full hardware development for a device you will sell under your brand, with documentation and files handed over for your manufacturer."
    },
    {
      "title": "Farms & operators",
      "description": "A custom monitoring or control system for your own site, designed around your buildings, animals and connectivity."
    },
    {
      "title": "Startups",
      "description": "Staged development that gets a working prototype in front of users early, before committing to production tooling."
    },
    {
      "title": "Research teams",
      "description": "Small batches of specialised devices built to a study's measurement, weight and battery requirements."
    },
    {
      "title": "Equipment manufacturers",
      "description": "Adding sensors, connectivity or remote monitoring to existing agricultural or animal-care equipment."
    }
  ],
  "stages": [
    "Discovery",
    "Requirements",
    "Architecture",
    "Prototype",
    "Testing",
    "Production preparation"
  ],
  "tradeoffsHeading": "What shapes each project",
  "tradeoffs": [
    {
      "title": "Unit cost vs. volume",
      "description": "A device made in the thousands is designed differently from a batch of fifty. Target volume sets component and enclosure choices."
    },
    {
      "title": "Off-the-shelf vs. custom hardware",
      "description": "Where an existing module does the job, we use it. Custom boards make sense when size, power or cost requires them."
    },
    {
      "title": "Speed vs. certification readiness",
      "description": "A quick prototype proves the idea; a product for sale also needs design choices that support radio and safety certification."
    },
    {
      "title": "Features vs. battery life",
      "description": "Every extra sensor or more frequent report costs battery life. Each industry draws that line differently."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Your industry and who will use the device",
    "The problem the device should solve",
    "Expected production volume",
    "Required battery life and connectivity",
    "Timeline and any certification needs",
    "Existing hardware, software or prototypes"
  ],
  "linksHeading": "Related pages",
  "links": [
    {
      "label": "Pet technology",
      "href": "/pet-technology"
    },
    {
      "label": "Remote livestock monitoring",
      "href": "/livestock-technology"
    },
    {
      "label": "Poultry monitoring systems",
      "href": "/poultry-farming"
    },
    {
      "label": "IoT hardware development",
      "href": "/custom-electronics"
    }
  ],
  "note": "This section describes custom engineering services. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "Do you only work with farms?",
    "answer": "No. We also work with pet-tech brands, veterinary and animal-welfare organisations, research teams, equipment manufacturers and startups. What they share is electronics for animals, farms or connected environments."
  },
  {
    "question": "Can you develop a product we will sell under our own brand?",
    "answer": "Yes. We can handle hardware design, firmware and prototypes, then hand over the design files, bill of materials and test procedures your manufacturer needs."
  },
  {
    "question": "Do you work with startups at an early stage?",
    "answer": "Yes. Many projects start from an idea or a rough prototype. We help define requirements, build a working prototype, and plan the path to production."
  },
  {
    "question": "My industry isn't listed. Can you still help?",
    "answer": "Probably. If your project involves animals, agriculture or connected sensors, contact us with a short description and we'll tell you whether it fits."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Industries" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Industries</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Built for animal &amp; agriculture technology
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          Wherever animals and electronics meet, it&apos;s the kind of
          problem we design hardware to solve.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const cardClass =
              "flex flex-col items-center gap-3 rounded-2xl border border-[var(--ts-navy)]/8 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]";
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
                  <industry.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-[var(--ts-navy)]">{industry.label}</span>
              </>
            );
            return industry.href ? (
              <Link key={industry.label} href={industry.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={industry.label} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="industries-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="industries-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {detailsCopy.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ts-gray)]">{detailsCopy.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailsCopy.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
              <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceScope id="industries-scope" copy={scope} />

      <section aria-labelledby="industries-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="industries-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Don't See Your Industry?"
        description="If animals and electronics are involved, there's a good chance we can help."
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
