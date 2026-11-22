import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Animal Health Monitoring Devices & Sensors | PawSync",
  description:
    "Custom animal health monitoring devices: activity, rumination, temperature and behaviour sensors for cattle, livestock and pets, with alerts for early signs of illness.",
  alternates: buildAlternates("en", "animal-health-monitoring"),
  openGraph: buildOpenGraph("en", "animal-health-monitoring"),
};

const hero = {
  "breadcrumb": "Animal Health Monitoring",
  "eyebrow": "Animal Health Monitoring",
  "h1": "Animal Health Monitoring Devices for Livestock & Pets",
  "intro": "Wearable and installed sensors that track activity, rest, temperature and behaviour, so changes that can signal illness, heat or injury are noticed earlier."
};

const image = {
  "src": "/home/solutions/animal-health-full.webp",
  "alt": "Animal health monitoring infographic: a cow with a collar and ear tag, a gateway and the sense, connect, analyze, monitor, alert steps",
  "height": 675
};

const chips = {
  "heading": "Signals we can measure",
  "items": [
    "Activity",
    "Rest & lying time",
    "Rumination",
    "Body temperature",
    "Feeding time",
    "Drinking visits",
    "Location",
    "Posture",
    "Heart rate",
    "Weight",
    "Environmental conditions"
  ]
};

const detailsCopy = {
  "eyebrow": "What the Data Shows",
  "heading": "Early Signs, Not Just Data",
  "intro": "Health monitoring is useful when it turns readings into early warnings. Sudden changes from an animal's own normal pattern often matter more than any single value.",
  "items": [
    {
      "title": "Activity & rest",
      "description": "Accelerometers in collars, ear tags or leg bands show how much an animal moves and lies down. A sharp drop can signal lameness or illness; a rise can signal heat in cattle."
    },
    {
      "title": "Rumination & feeding",
      "description": "Time spent chewing and eating is one of the earliest indicators of digestive or metabolic problems in cattle, often before visible symptoms."
    },
    {
      "title": "Temperature",
      "description": "Skin, ear or bolus temperature trends help flag fever and heat stress. Placement matters: skin readings follow the weather, so trends are compared per animal."
    },
    {
      "title": "Water & feed visits",
      "description": "Sensors at troughs and feeders, combined with RFID, show which animals are eating and drinking less than usual."
    },
    {
      "title": "Pets & companion animals",
      "description": "Activity, sleep and scratching patterns from lightweight wearables help owners and vets see gradual changes in a pet's health."
    },
    {
      "title": "Alerts & trends",
      "description": "Rules and baselines per animal turn raw readings into a short list of animals to check today, with history for the vet."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How a Health Monitoring Device Is Developed",
  "intro": "Health devices have to be small, comfortable and run for months on a battery, while measuring reliably on a moving animal. These are the parts we scope with you.",
  "options": [
    {
      "title": "Wearable hardware",
      "description": "Collars, ear tags, leg bands or harness devices with motion and temperature sensors, sized for the animal and its environment."
    },
    {
      "title": "On-device processing",
      "description": "Firmware that classifies activity, rest and rumination on the device, so only summaries are sent and battery life is preserved."
    },
    {
      "title": "Connectivity",
      "description": "BLE, LoRaWAN or LTE-M depending on whether animals are in a barn, on pasture or at home."
    },
    {
      "title": "Baselines & alerts",
      "description": "Per-animal baselines and alert rules, developed with your vets or domain experts, sent to a dashboard or app."
    },
    {
      "title": "Field validation",
      "description": "Prototype devices tested on animals against observations or reference measurements before production."
    }
  ],
  "stages": [
    "Discovery",
    "Sensor selection",
    "Hardware design",
    "Firmware & algorithms",
    "Prototype",
    "Field validation",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Sampling rate vs. battery life",
      "description": "Detecting rumination or gait needs fast motion sampling, which costs power. Processing on the device keeps radio use low."
    },
    {
      "title": "Device size vs. capacity",
      "description": "A smaller tag is more comfortable but holds a smaller battery. Animal size and how often the battery can be changed set the limit."
    },
    {
      "title": "Measurement site vs. accuracy",
      "description": "Ear, neck, leg and internal measurements each see different signals. The right site depends on what you need to detect."
    },
    {
      "title": "Alert sensitivity vs. false alarms",
      "description": "Too sensitive and staff stop trusting alerts; too strict and real problems are missed. Thresholds are tuned during validation."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Species, age and housing or pasture conditions",
    "The health conditions or events you want to detect",
    "Where on the animal a device can be worn",
    "Required battery life and acceptable device size",
    "Existing herd management or vet software",
    "Target volume and timeline"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Remote livestock monitoring",
      "href": "/livestock-technology"
    },
    {
      "label": "Cattle and livestock GPS tracking",
      "href": "/animal-tracking"
    },
    {
      "label": "Pet technology",
      "href": "/pet-technology"
    },
    {
      "label": "Livestock monitoring sensors explained",
      "href": "/blog/livestock-monitoring-sensors"
    }
  ],
  "note": "This section describes custom engineering services. Health monitoring devices support, but do not replace, veterinary diagnosis. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "What is animal health monitoring?",
    "answer": "Animal health monitoring uses sensors worn by or installed near animals to track signals such as activity, rest, rumination, temperature and feeding, and to alert you when an animal's pattern changes in a way that can indicate illness, heat or injury."
  },
  {
    "question": "Can sensors detect illness in cattle?",
    "answer": "Sensors can't diagnose disease, but changes in rumination, activity, lying time and temperature often appear before visible symptoms. Monitoring flags which animals to check, so a vet or stockperson can act sooner."
  },
  {
    "question": "How long do the batteries last?",
    "answer": "It depends on the sensors, how often data is processed and sent, and the battery size. Processing on the device and sending summaries instead of raw data is the main way we extend battery life."
  },
  {
    "question": "Do you build health devices for pets as well as livestock?",
    "answer": "Yes. We design lightweight wearables for dogs and cats as well as collars, ear tags and leg bands for cattle, sheep, goats and horses."
  },
  {
    "question": "Can the data connect to our existing herd software?",
    "answer": "Often, yes. We can send data to an existing platform through an API, or build a simple dashboard for the project."
  }
];

const cta = {
  "heading": "Need a Custom Animal Health Device?",
  "description": "We'll design sensors, firmware and alerts around your animals, environment and the conditions you need to detect.",
  "primaryLabel": "Start Your Project",
  "secondaryLabel": "View All Solutions"
};

export default function AnimalHealthMonitoringPage() {
  return (
    <>
      <Breadcrumb items={[{ label: hero.breadcrumb }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          {hero.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">{hero.intro}</p>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={image.height}
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority
          className="h-auto w-full rounded-2xl shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]"
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
          {chips.heading}
        </h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {chips.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--ts-navy)]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ts-navy)] shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="animal-health-monitoring-details-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
            <h2 id="animal-health-monitoring-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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
        </div>
      </section>

      <ServiceScope id="animal-health-monitoring-scope" copy={scope} />

      <section aria-labelledby="animal-health-monitoring-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="animal-health-monitoring-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref="/contact"
        secondaryLabel={cta.secondaryLabel}
        secondaryHref="/solutions"
      />
    </>
  );
}
