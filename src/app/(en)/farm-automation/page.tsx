import type { Metadata } from "next";
import { Fan, MonitorSmartphone, Terminal, UtensilsCrossed, Warehouse, Droplets } from "lucide-react";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import ServiceScope, { type ServiceScopeCopy } from "@/components/terrasense/ServiceScope";
import FAQAccordion from "@/components/terrasense/FAQAccordion";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Farm Automation & Control Systems | PawSync",
  description:
    "Custom control systems for climate, water, feeding, and infrastructure, with smartphone and web dashboard control developed to your requirements.",
  alternates: buildAlternates("en", "farm-automation"),
  openGraph: buildOpenGraph("en", "farm-automation"),
};

const categories = [
  {
    icon: Fan,
    title: "Climate Control",
    items: ["Temperature", "Humidity", "Ventilation", "Heating", "Cooling", "Fans"],
  },
  {
    icon: Droplets,
    title: "Water Management",
    items: ["Water tank monitoring", "Automatic watering", "Pump control", "Flow monitoring", "Leak detection", "Water availability alerts"],
  },
  {
    icon: UtensilsCrossed,
    title: "Feeding Automation",
    items: ["Scheduled feeders", "Feed level monitoring", "Motorized dispensers", "Portion control"],
  },
  {
    icon: Warehouse,
    title: "Infrastructure Monitoring",
    items: ["Doors", "Gates", "Power systems", "Generators", "Pumps", "Motors", "Storage areas"],
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Control",
    items: ["Smartphone control", "Web dashboard", "Automatic rules", "Manual override", "Alerts"],
  },
];

const detailsCopy = {
  "eyebrow": "What Can Be Automated",
  "heading": "Farm Automation, System by System",
  "intro": "Farm automation works best when each control loop is simple and reliable: a sensor, a rule and an output, with a manual override. These are the systems we most often automate.",
  "items": [
    {
      "title": "Barn & poultry house climate",
      "description": "Fans, inlets, heaters, cooling pads and misting switched by temperature, humidity, ammonia or CO2 readings, in stages rather than all at once."
    },
    {
      "title": "Watering & pumps",
      "description": "Pumps started by tank level or schedule, flow monitored to catch leaks and blocked lines, and an alert when water stops reaching the animals."
    },
    {
      "title": "Feeding",
      "description": "Scheduled feeders and dispensers with feed-level sensing, motor and auger monitoring, and a record of when each feed ran."
    },
    {
      "title": "Irrigation",
      "description": "Valves and pumps driven by soil moisture, weather and schedules, so water is applied when crops or pasture actually need it."
    },
    {
      "title": "Doors, gates & lighting",
      "description": "Motorised doors and gates with position sensing, and lighting programmes for poultry and greenhouses, controlled locally or from a phone."
    },
    {
      "title": "Power & backup equipment",
      "description": "Mains failure detection, generator start and status, and battery backup for the controller itself, so critical systems keep running."
    }
  ]
};

const scope: ServiceScopeCopy = {
  "eyebrow": "Engineering Services",
  "heading": "How a Farm Control System Is Designed",
  "intro": "Automation touches equipment that animals depend on, so safety and fallback behaviour are designed in from the start. These are the parts we work through with you.",
  "options": [
    {
      "title": "Controller hardware",
      "description": "Custom boards or rugged controllers with relays and motor drivers sized for your fans, pumps and actuators, in enclosures for farm conditions."
    },
    {
      "title": "Local rules & fail-safes",
      "description": "Critical rules run on the controller itself, so ventilation or watering keeps working if the internet or cloud connection drops."
    },
    {
      "title": "Sensor integration",
      "description": "Climate, water-level, flow and equipment sensors wired or wireless, chosen to match what each rule needs to know."
    },
    {
      "title": "Remote control & alerts",
      "description": "Phone and web control with manual override, alarm notifications and a log of what switched and why."
    },
    {
      "title": "Integration with existing equipment",
      "description": "Connecting to the fans, pumps and controllers already on site where possible, rather than replacing everything."
    }
  ],
  "stages": [
    "Process review",
    "Control logic",
    "Hardware design",
    "Firmware",
    "Bench testing",
    "On-site pilot",
    "Production preparation"
  ],
  "tradeoffsHeading": "Engineering trade-offs",
  "tradeoffs": [
    {
      "title": "Local control vs. cloud features",
      "description": "Rules on the controller keep working offline; dashboards, history and remote changes need a connection. Critical actions stay local."
    },
    {
      "title": "Full automation vs. manual override",
      "description": "Every automated output keeps a manual mode, so staff can take control during maintenance or unusual conditions."
    },
    {
      "title": "Wired vs. wireless",
      "description": "Wired sensors and outputs are the most reliable for safety-critical loops; wireless saves cabling across large or older buildings."
    },
    {
      "title": "Retrofit vs. new equipment",
      "description": "Adding control to existing fans and pumps is cheaper, but older equipment may limit what can be measured or switched safely."
    }
  ],
  "inquiryHeading": "Information that helps us scope a project",
  "inquiry": [
    "Which equipment you want to control and how it is switched today",
    "The conditions or schedules that should trigger each action",
    "What must keep working during a power or internet outage",
    "Number and size of buildings or areas",
    "Existing controllers or software on site",
    "Who should receive alerts and be able to change settings"
  ],
  "linksHeading": "Related pages and articles",
  "links": [
    {
      "label": "Environmental monitoring",
      "href": "/environmental-monitoring"
    },
    {
      "label": "Poultry monitoring systems",
      "href": "/poultry-farming"
    },
    {
      "label": "Smart feeding systems",
      "href": "/smart-feeding"
    },
    {
      "label": "Planning a LoRaWAN farm network",
      "href": "/blog/lorawan-farm-network-planning"
    }
  ],
  "note": "This section describes custom engineering services. Reference designs on our Projects page are concepts and prototypes, not products available to purchase."
};

const faqCopy = {"heading": "Common questions"};

const faqs = [
  {
    "question": "What is farm automation?",
    "answer": "Farm automation uses sensors and controllers to run equipment such as fans, heaters, pumps, feeders and gates by rules or schedules, with alerts and remote control from a phone or computer."
  },
  {
    "question": "What happens if the internet goes down?",
    "answer": "We design critical rules to run on the local controller, so ventilation, heating or watering keep working without internet. Remote access and alerts resume when the connection returns."
  },
  {
    "question": "Can you automate the equipment I already have?",
    "answer": "Often, yes. Many fans, pumps and heaters can be switched through relays or contactors, and some existing controllers can be connected directly. We check what is safe and practical during scoping."
  },
  {
    "question": "Can I still control things manually?",
    "answer": "Yes. Each automated output keeps a manual mode on site and in the app, so staff can override the rules when needed."
  },
  {
    "question": "How is farm automation different from monitoring?",
    "answer": "Monitoring measures conditions and alerts you; automation also acts on them, for example starting fans when temperature rises. Most projects start with monitoring and add control where it saves the most work."
  }
];

export default function FarmAutomationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Farm Automation" }]} />

      <section className="mx-auto max-w-4xl px-4 pb-4 pt-8 text-center sm:px-6 sm:pt-10 lg:px-8">
        <Eyebrow>Farm Automation</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-5xl">
          Intelligent Control Systems for Modern Farms
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ts-gray)]">
          We design connected control systems for climate, water, feeding,
          and infrastructure — with phone or web dashboard control developed
          to your requirements.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10 ring-1 ring-inset ring-[var(--ts-dark-green)]/10">
                <category.icon className="h-6 w-6 text-[var(--ts-dark-green)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--ts-bg)] px-3 py-1 text-xs font-medium text-[var(--ts-navy)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--ts-gray)]">
          These are capabilities we design into custom systems, not an
          off-the-shelf product. Software such as dashboards, apps and alerts
          is developed per project to your requirements.
        </p>
      </section>

      <section className="bg-[var(--ts-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Automation Rules</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, configurable logic
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Controllers can be designed to run on rules you set — with no
            cloud dependency for critical actions.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-sm text-[var(--ts-accent)]">
            <Terminal className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              IF temperature &gt; configured limit
              <br />
              THEN activate ventilation and send alert.
            </span>
          </div>
        </div>
      </section>

      <section aria-labelledby="farm-details-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{detailsCopy.eyebrow}</Eyebrow>
          <h2 id="farm-details-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
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

      <ServiceScope id="farm-scope" copy={scope} />

      <section aria-labelledby="farm-faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="farm-faq-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            {faqCopy.heading}
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Need a Custom Farm IoT System?"
        description="Let's design hardware around your environment, animals, and operational requirements."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
