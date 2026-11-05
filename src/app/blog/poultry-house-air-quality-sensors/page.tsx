import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import ArticleDate from "@/components/terrasense/ArticleDate";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";
import { blogPostingJsonLd, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Poultry House Ammonia, CO₂ & Humidity Sensors | PawSync",
  description:
    "How ammonia, CO₂ and humidity sensors behave in poultry houses and sheds: sensor types, placement at bird height, calibration, drift and the dust and washdown problem.",
  alternates: buildAlternates("en", "blog/poultry-house-air-quality-sensors"),
  openGraph: buildOpenGraph("en", "blog/poultry-house-air-quality-sensors"),
};

const articleJsonLd = blogPostingJsonLd({
  locale: "en",
  route: "blog/poultry-house-air-quality-sensors",
  headline: "Ammonia, CO₂ and Humidity Sensors in Poultry Houses: Placement, Calibration and Drift",
  description: metadata.description ?? "",
});

export default function BlogArticlePoultryAirQualitySensors() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Poultry Air-Quality Sensors" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Ammonia, CO₂ and Humidity Sensors in Poultry Houses: Placement, Calibration and Drift
        </h1>
        <ArticleDate route="blog/poultry-house-air-quality-sensors" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Air-quality readings drive ventilation decisions in a poultry house or shed. But ammonia, CO₂ and
          humidity sensors all behave differently in dust, moisture and ammonia-laden air — and a sensor
          that has quietly drifted is worse than no sensor at all.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Why these three readings matter
          </h2>
          <p>
            Ammonia (NH₃) comes from litter and rises with litter moisture and poor air exchange. Carbon
            dioxide (CO₂) comes mainly from the birds and from gas-fired heaters, so it is a good indicator of
            how much fresh air is actually reaching the birds. Relative humidity links the two: wet air leads
            to wet litter, and wet litter releases more ammonia. Reading all three together tells you far more
            about ventilation than any one of them alone.
          </p>
          <p>
            There is also a regulatory reason. For broilers kept at higher stocking densities, EU Directive
            2007/43/EC — whose requirements also carried over into UK law — sets limits of 20 ppm ammonia and
            3,000 ppm CO₂, measured at the level of the chickens&apos; heads, along with limits on humidity in
            cold weather. Check the current national rules and any assurance-scheme requirements that apply to
            your farm, but the principle is clear: measurements need to represent what the birds breathe.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Ammonia sensors
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Electrochemical vs. metal-oxide
          </h3>
          <p>
            Most professional ammonia sensors in livestock buildings are <strong>electrochemical cells</strong>:
            ammonia reacts at an electrode and produces a small current proportional to concentration. They
            are selective and accurate at low ppm levels, but they have a limited life — the electrolyte is
            consumed over time — and their sensitivity changes as they age. Manufacturers state a typical
            lifetime and a recommended calibration interval; both belong in the maintenance plan, not just the
            datasheet.
          </p>
          <p>
            <strong>Metal-oxide (MOS) sensors</strong> are much cheaper and appear in many low-cost IoT
            projects. They respond to ammonia, but also to other gases, and their output depends strongly on
            temperature and humidity. They can show trends, but they are not a reliable basis for decisions
            against a 20 ppm limit without careful compensation and regular comparison with a reference
            instrument.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Checking that the reading is real
          </h3>
          <p>
            Because electrochemical cells lose sensitivity gradually, a sensor can keep producing plausible
            numbers while under-reading. A periodic <strong>bump test</strong> — exposing the sensor to a known
            gas concentration and confirming it responds — catches this. Comparing readings against a handheld
            reference meter at bird height is a practical alternative on farm. Either way, record the result:
            a calibration log is what turns a number on a screen into evidence.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            CO₂ sensors and the auto-calibration trap
          </h2>
          <p>
            Most CO₂ sensors for this use are <strong>NDIR</strong> (non-dispersive infrared): they measure how
            much infrared light CO₂ absorbs. NDIR is stable and not consumed by the gas, which makes it a good
            fit for continuous monitoring.
          </p>
          <p>
            The trap is <strong>automatic baseline calibration (ABC)</strong>, enabled by default on many
            low-cost NDIR modules. ABC assumes the sensor sees fresh outdoor air — around 400 ppm — at some
            point every few days, and quietly resets its zero to the lowest value it has seen. That works in an
            office that empties at night. In a stocked poultry house, CO₂ never falls to outdoor levels, so ABC
            gradually shifts the zero upwards and the sensor under-reads. For livestock buildings, ABC should
            normally be disabled and the sensor calibrated manually, for example in fresh air between flocks.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Humidity and temperature sensors
          </h2>
          <p>
            Capacitive relative-humidity sensors are the standard choice: small, low-power and accurate when
            new. In a poultry house they face condensation, dust and ammonia exposure, all of which can shift
            readings over time. A protective filter cap (a sintered or membrane filter) keeps dust and
            splashes off the sensing element while letting air through. Sensors that support a heating cycle
            can drive off condensation. As with gas sensors, a periodic check against a reference instrument is
            the only way to know a humidity reading is still right.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Placement: measure where the birds are
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Height.</strong> Mount sensors at bird height, not at ceiling height where they are easy to
              reach. Ammonia and temperature at the litter can differ a lot from conditions near the roof.
            </li>
            <li>
              <strong>Position along the house.</strong> Avoid placing sensors directly in front of inlets,
              fans or heaters. Conditions near the inlets and at the far end of a tunnel-ventilated house
              differ — larger houses need several measurement points.
            </li>
            <li>
              <strong>Protection.</strong> Birds peck at anything new. Sensors need guards, and cables need to be
              out of reach.
            </li>
            <li>
              <strong>Access.</strong> Someone has to check, clean and calibrate them. A sensor that needs a
              ladder and tools to reach will not be maintained.
            </li>
          </ul>
          <p>
            We cover multi-point layouts, wireless protocols and gateway planning in{" "}
            <Link href="/blog/wireless-poultry-monitoring-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Planning a Wireless Poultry House Monitoring Network
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Dust and washdown: designing for clean-out
          </h2>
          <p>
            Between flocks, houses are cleaned out, washed — often with pressure washers — and disinfected. A
            sensor that survives months of dust can fail in one washdown. Design options are to make the
            enclosure resistant to water jets and disinfectants (with an appropriate IP rating and compatible
            materials), or to make sensors quick to unplug and remove before cleaning. Removable sensor heads
            have another advantage: they can be calibrated or swapped on the bench while the house is empty.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            From readings to decisions
          </h2>
          <p>
            Sensor data becomes useful when it is tied to action: adjusting minimum ventilation, checking for
            wet litter in one area, or investigating a heater. A few practical rules help:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Log readings at a regular interval (every few minutes is typical) so trends are visible.</li>
            <li>Alert on sustained values, not single spikes caused by doors opening or a passing tractor.</li>
            <li>Flag sensors whose readings stop changing — a flat line often means a fault, not stable air.</li>
            <li>Keep the calibration history with the data, so readings can be trusted when they are reviewed.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frequently asked questions
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How often should ammonia sensors be calibrated?
          </h3>
          <p>
            Follow the manufacturer&apos;s stated interval as a minimum. In practice, a quick bump test or a comparison against a handheld reference meter between flocks — when the house is empty and accessible — catches most drift before it matters. Electrochemical cells also have a finite life, so plan replacements, not just calibrations.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            What ammonia level is too high in a poultry house?
          </h3>
          <p>
            For broilers kept at higher stocking densities, EU Directive 2007/43/EC sets a limit of 20 ppm at the level of the birds&apos; heads, and the same figure applies under UK rules derived from it. Many producers and advisers aim to stay well below the limit, because ammonia also affects bird health and worker comfort. Check the rules and assurance standards that apply to your own operation.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Can one set of sensors cover a whole house?
          </h3>
          <p>
            In a small house, possibly. In long, tunnel-ventilated houses, conditions at the inlet end and the fan end can differ significantly, so several measurement points give a far more accurate picture. Our article on wireless poultry monitoring networks covers multi-point layouts in more detail.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Wired or wireless sensors?
          </h3>
          <p>
            Both work. Wired sensors suit new builds or houses with an existing control backbone and avoid batteries entirely. Wireless sensors make retrofits and adding measurement points much easier. Either way, design for dust, ammonia and washdown, and make the sensors easy to reach for cleaning and calibration.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Designing sensor hardware for poultry houses?{" "}
          <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> —
          sensor nodes, enclosures and calibration features can be developed to your requirements. See also{" "}
          <ArticleServiceLink locale="en" href="/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Poultry Farm Technology</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Environmental Monitoring</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Building Air-Quality Monitoring for Poultry?"
        description="Tell us about your houses and what you need to measure — we'll help with sensor choice, placement and enclosure design."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Poultry Farm Technology"
        secondaryHref="/poultry-farming"
        secondaryLocale="en"
      />
    </>
  );
}
