import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Wireless Poultry Monitoring System Design | PawSync",
  description:
    "Sensor placement, protocol choice, and gateway planning for a wireless poultry house monitoring network — and why one sensor per house usually isn't enough.",
  alternates: buildAlternates("en", "blog/wireless-poultry-monitoring-design"),
  openGraph: buildOpenGraph("en", "blog/wireless-poultry-monitoring-design"),
};

export default function BlogArticleWirelessPoultryMonitoring() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Poultry Monitoring Design" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Planning a Wireless Poultry House Monitoring Network
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A single sensor hanging in the middle of a poultry house tells you the average condition at that one point — not what&apos;s happening at floor level near the inlet fans, or up near the ridge where heat collects.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Why one sensor per house usually isn&apos;t enough
          </h2>
          <p>
            Commercial poultry houses aren&apos;t thermally uniform. Air entering through inlet vents or
            tunnel-ventilation fans creates cooler zones near the inlets and warmer ones further along the
            house; heat and humidity tend to stratify from floor to ridge; and equipment, feed lines, or
            partial curtains can create pockets that behave differently from the rest of the house. A
            single centrally placed sensor reports a real number, but it&apos;s an average that can miss a
            localized problem — a cold zone near a leaking inlet, or a hot spot near a dead fan — entirely.
            Multi-point sensing, with nodes placed to cover the zones that actually vary, catches what a
            single sensor structurally can&apos;t.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            What to actually measure
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Temperature and relative humidity</strong> are the baseline — both affect bird comfort
              and health directly, and both can vary meaningfully across a house&apos;s length and height.
            </li>
            <li>
              <strong>Ammonia (NH₃)</strong> matters specifically because it&apos;s a respiratory irritant
              at even moderate concentrations and tends to correlate with litter moisture and ventilation
              adequacy — it&apos;s often one of the more actionable readings for catching a developing
              problem before it becomes visible in flock behavior.
            </li>
            <li>
              <strong>CO₂</strong> is a secondary but useful proxy for ventilation adequacy generally, since
              it tracks with how much fresh air is actually reaching a given point in the house.
            </li>
            <li>
              <strong>Air velocity</strong> is measured less commonly but becomes relevant in houses with
              heat-stress mitigation systems (tunnel ventilation, cooling pads), where airflow rate at bird
              level is the thing that actually matters, not just the fan&apos;s rated output.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Choosing a wireless protocol for a metal/dense structure
          </h2>
          <p>
            Poultry houses are typically long, low, metal-clad structures — not a friendly RF environment.
            Wi-Fi can struggle with range and attenuation through structural elements and equipment,
            particularly toward the far end of a long house. LoRa generally performs better for this kind
            of structure: lower data rate, but substantially better range and penetration, which suits
            periodic sensor readings (temperature and humidity don&apos;t need to update many times a
            second) far better than it would suit a bandwidth-heavy application. In retrofit situations
            where a house already has a wired control backbone, an RS485/Modbus wired bus remains a
            practical, reliable fallback rather than something to replace just for its own sake.
          </p>
          <p>
            There isn&apos;t a single correct protocol for every site — farm layout, house size, existing
            infrastructure, and internet availability all factor in, which is why this is evaluated per
            site rather than defaulted to one answer.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Gateway placement and range planning
          </h2>
          <p>
            A single gateway may cover one house comfortably but struggle across a multi-house site with
            significant distance or structural obstruction between buildings. Gateway count and placement
            scale with house count and layout, not with a fixed per-farm number — line-of-sight and
            structural interference matter more than raw distance. For very long houses or sites with
            gateway coverage gaps, a relay or repeater node pattern extends coverage without requiring a
            gateway at every building.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Local control vs. cloud dependence during an outage
          </h2>
          <p>
            Control logic — threshold-based relay switching, local alarms — can be designed to run resident
            on the house controller itself, evaluating sensor readings and triggering responses without
            needing a round-trip to a cloud service for every decision. This matters specifically during a
            connectivity outage: a system that depends on the cloud for every control decision stops
            functioning exactly when a network issue coincides with an environmental problem, which is the
            worst time for it to fail. Data not synced during an outage queues locally and uploads once
            connectivity returns, but the control and alerting logic itself doesn&apos;t wait on that
            connection.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alerting design: avoiding both false alarms and missed events
          </h2>
          <p>
            A threshold alert that fires the instant a reading crosses a line is prone to nuisance triggers
            — a door opening briefly, a sensor reading a momentary draft, or ordinary noise in the sensor
            signal. Requiring a reading to persist above (or below) a threshold for a defined duration
            before triggering an alert substantially reduces false alarms without meaningfully delaying a
            response to a genuine, sustained problem. Getting this duration right — long enough to filter
            noise, short enough to still catch a real event early — is itself a design decision specific to
            each monitored parameter.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Power for field nodes
          </h2>
          <p>
            Most environmental sensor nodes inside a powered poultry house run on mains power, since the
            infrastructure is already there. Battery or battery-plus-solar power becomes relevant for nodes
            placed outside existing wiring runs, or during a retrofit phase before permanent wiring is
            installed — in which case the node&apos;s power budget follows the same general duty-cycling
            logic used in any battery-powered sensor design, sized to the reporting interval the
            application actually needs rather than defaulting to continuous operation.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planning a monitoring network for a specific site? <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> and
          we&apos;ll help you work through sensor placement and protocol choice for your house layout. For
          the full range of poultry solutions, see{" "}
          <Link href="/poultry-farming" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Poultry Farm Technology</Link> and{" "}
          <Link href="/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Environmental Monitoring</Link>.
        </p>
      </article>

      <CTABanner
        heading="Planning a Poultry Monitoring Network?"
        description="Tell us your house count, layout, and existing infrastructure — we'll help you work through sensor placement and connectivity."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Poultry Farm Technology"
        secondaryHref="/poultry-farming"
      />
    </>
  );
}
