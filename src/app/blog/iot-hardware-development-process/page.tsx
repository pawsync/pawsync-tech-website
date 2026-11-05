import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ArticleDate from "@/components/terrasense/ArticleDate";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";
import { blogPostingJsonLd, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "IoT Hardware Development: Prototype to Production | PawSync",
  description:
    "The IoT hardware development process step by step: requirements, proof of concept, EVT, DVT and PVT builds, and CE, UKCA and FCC certification for connected devices.",
  alternates: buildAlternates("en", "blog/iot-hardware-development-process"),
  openGraph: buildOpenGraph("en", "blog/iot-hardware-development-process", {
    url: "/blog/iot-hardware-development-process/og.jpg",
    alt: "Product development stages: a breadboard proof of concept, a custom PCB for EVT and DVT, and a finished enclosure for PVT",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/iot-hardware-development-process/og.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "en",
  route: "blog/iot-hardware-development-process",
  headline: "From Prototype to Production: The IoT Hardware Development Process",
  description: metadata.description ?? "",
  image: "/blog/iot-hardware-development-process/og.jpg",
});

export default function BlogArticleIotHardwareDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "IoT Hardware Development" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          From Prototype to Production: The IoT Hardware Development Process
        </h1>
        <ArticleDate route="blog/iot-hardware-development-process" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A working prototype on the bench is an important milestone — but it is usually less than half of
          the way to a product that can be built in volume, certified and sold. This is what the remaining
          stages are for, and why skipping them tends to cost more than it saves.
        </p>
        <Image
          src="/blog/iot-hardware-development-process/hero.webp"
          alt="Product development stages: a breadboard proof of concept, a custom PCB for EVT and DVT, and a finished enclosure for PVT"
          width={1755}
          height={896}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            The stages at a glance
          </h2>
          <p>
            Hardware teams commonly describe electronics product development as a sequence of gated stages.
            Names and sample quantities vary between companies, but the logic is consistent: each stage
            answers a specific question before more money is committed.
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Requirements</strong> — what must the device do, where, for how long, and at what cost?</li>
            <li><strong>Proof of concept</strong> — can the core technical risk be solved at all?</li>
            <li><strong>Prototype</strong> — does a custom design work in a realistic form?</li>
            <li><strong>EVT</strong> (engineering validation test) — does the design meet its functional requirements?</li>
            <li><strong>DVT</strong> (design validation test) — does it survive testing and pass certification?</li>
            <li><strong>PVT</strong> (production validation test) — can the factory build it reliably at volume?</li>
            <li><strong>Mass production</strong> — ramp-up, with field feedback flowing back into the design.</li>
          </ol>

          <figure>
            <Image
              src="/blog/iot-hardware-development-process/diagram.webp"
              alt="Diagram of the six stages: 1 requirements, 2 proof of concept, 3 prototype, 4 EVT, 5 DVT with CE, UKCA and FCC certification, 6 PVT, with firmware developed alongside every stage"
              width={1755}
              height={896}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              The six stages from idea to production, with certification in DVT and firmware running alongside.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            1. Requirements: the cheapest place to change your mind
          </h2>
          <p>
            Good requirements for an IoT device are specific and measurable: battery life at a stated reporting
            interval, operating temperature range, ingress protection, enclosure size and weight, target
            markets (which decides the certifications), connectivity available where the device will be used,
            and target unit cost at a realistic volume. Vague requirements such as &ldquo;long battery
            life&rdquo; or &ldquo;rugged&rdquo; are where projects later lose months. Every item on this list
            changes the hardware — so it is far cheaper to change it in a document than on a PCB.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            2. Proof of concept: retire the biggest risk first
          </h2>
          <p>
            A proof of concept is usually built from development kits and evaluation boards. Its job is not to
            look like a product, but to answer the riskiest question early: will the radio reach from the field
            to the gateway? Can the sensor detect what it needs to? Is the power budget realistic? Keeping it
            narrow and fast is the point.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            3. Prototype: the first custom PCB
          </h2>
          <p>
            The first custom board brings components, power supply, antenna and firmware together in something
            close to the final size. This is where problems that development kits hide appear: antenna
            performance inside an enclosure, sleep current that is ten times higher than expected because of
            one leaking circuit, or a connector that doesn&apos;t fit. Plan for at least one board revision.
            Our article on{" "}
            <Link href="/blog/pet-tracker-pcb-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              designing a PCB for an animal tracker
            </Link>{" "}
            shows how much the enclosure and antenna drive layout decisions.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            4. EVT: does the design meet the specification?
          </h2>
          <p>
            EVT units are built with production-intent components and a near-final layout, typically in
            small quantities. Each requirement is tested and recorded: functions, power consumption in every
            operating mode, radio performance, sensor accuracy and firmware behaviour. Problems found here are
            still relatively cheap to fix. A common mistake is ordering expensive production tooling (such as
            injection moulds) at this stage, before the design has been validated.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            5. DVT: environmental testing and certification
          </h2>
          <p>
            DVT units should be built using production-intent processes and materials, because they are the
            ones that go through environmental testing (temperature, humidity, vibration, drop, water and dust)
            and pre-compliance and certification testing. For connected devices, certification is often the
            biggest single source of delay, so it pays to plan it from the start.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Certification by target market
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>European Union:</strong> CE marking. For products with a radio, the Radio Equipment
              Directive (2014/53/EU) applies, including cybersecurity requirements for many internet-connected
              radio products since August 2025. The EU Cyber Resilience Act adds further obligations for
              products with digital elements, with its main requirements applying from December 2027.
            </li>
            <li>
              <strong>United Kingdom:</strong> UKCA marking for Great Britain, with CE marking also accepted for
              many product categories — check current UK government guidance for your product type.
            </li>
            <li>
              <strong>United States:</strong> FCC authorisation under Part 15. Using a pre-certified radio module
              reduces the work significantly, but the finished product still needs its own testing for
              unintentional emissions, and cellular network operators may have their own device approval
              requirements.
            </li>
            <li>
              <strong>Batteries:</strong> lithium cells and battery packs need UN 38.3 test documentation to be
              shipped.
            </li>
          </ul>
          <p>
            Choosing pre-certified radio modules, keeping the antenna design close to the module
            manufacturer&apos;s reference, and running pre-compliance scans before formal testing all reduce
            the risk of a failed test late in the project.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            6. PVT: proving the production line
          </h2>
          <p>
            PVT is the first run on the real production line, with final tooling, test fixtures and processes.
            The question is no longer &ldquo;does the design work?&rdquo; but &ldquo;does every unit work, and
            can we prove it?&rdquo; That requires design for manufacture and design for test decisions made
            much earlier: test points on the PCB, a programming and calibration fixture, an end-of-line
            functional test, and a way to record each unit&apos;s serial number, firmware version and test
            result.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Firmware runs alongside the hardware stages
          </h2>
          <p>
            Firmware development doesn&apos;t wait for final hardware. It starts on development kits during the
            proof of concept and matures with each build. Two capabilities are worth designing in early for
            connected devices: <strong>secure over-the-air (OTA) updates</strong>, so field units can be fixed
            without a recall, and <strong>remote diagnostics</strong> — battery voltage, signal strength,
            reset reasons — so problems can be understood without retrieving the device.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Where IoT hardware projects usually go wrong
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Requirements that leave out the operating environment or target markets.</li>
            <li>Committing to production tooling before the design has passed validation.</li>
            <li>Treating certification as a final step instead of a design input.</li>
            <li>Measuring battery life on the bench, not in realistic radio and temperature conditions.</li>
            <li>No plan for testing units in production or updating them in the field.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Agriculture and animal devices: extra considerations
          </h2>
          <p>
            Devices for farms and animals add their own constraints: wide temperature swings, mud, water and
            ammonia; animals that chew, rub and kick; long distances to the nearest gateway; and users who need
            devices to work for a full season without attention. These belong in the requirements on day one —
            they shape the enclosure, the battery and the radio choice. Our{" "}
            <Link href="/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              notes on low-power design for outdoor trackers
            </Link>{" "}
            go into the power side in more detail.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frequently asked questions
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How long does IoT hardware development take?
          </h3>
          <p>
            It depends on complexity, certification scope and how many board revisions are needed, so be wary of fixed promises. For a connected device with a custom PCB, radio and enclosure, the path from requirements to production commonly spans many months. Certification testing, enclosure tooling and component lead times are often the longest items — which is why they should be planned from the start, not at the end.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            What drives the cost of developing a connected device?
          </h3>
          <p>
            The main drivers are the number of distinct functions and sensors, the radio technologies involved, the target markets (each adds certification work), environmental requirements such as waterproofing, the enclosure and its tooling, and the production volume. Clear requirements reduce cost more reliably than anything else, because they reduce redesigns.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Can a development board or module go straight into the product?
          </h3>
          <p>
            For very small volumes or pilots, a ready-made module or system-on-module can be a sensible shortcut. For volume production, a custom PCB is usually smaller, cheaper per unit and better suited to the enclosure, battery and antenna. Many products combine the two: a pre-certified radio module on a custom carrier board.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            If the radio module is certified, does the product still need testing?
          </h3>
          <p>
            Yes. A pre-certified module simplifies the radio part of compliance, but the finished product still has to meet the applicable requirements as a whole — for example EMC, safety and, in the EU, the Radio Equipment Directive as applied to the complete device. The module&apos;s certification is a head start, not a substitute.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planning a connected device and want to get the early stages right?{" "}
          <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Start a conversation</Link> —
          requirements, PCB design, firmware and prototypes can be developed per project. See also{" "}
          <ArticleServiceLink locale="en" href="/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Custom Electronics</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/how-we-work" className="font-semibold text-[var(--ts-dark-green)] hover:underline">How We Work</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Turning a Prototype into a Product?"
        description="Tell us where your project stands and where it needs to go — we'll help you plan the next stage."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Custom Electronics"
        secondaryHref="/custom-electronics"
        secondaryLocale="en"
      />
    </>
  );
}
