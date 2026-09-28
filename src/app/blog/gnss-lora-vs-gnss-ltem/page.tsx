import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "GNSS + LoRa vs. GNSS + LTE-M for Animal Tracking | PawSync",
  description:
    "GNSS determines position; LoRa and LTE-M are separate communication layers that get that position off the device. A practical comparison for animal-tracking hardware.",
  alternates: buildAlternates("en", "blog/gnss-lora-vs-gnss-ltem"),
  openGraph: buildOpenGraph("en", "blog/gnss-lora-vs-gnss-ltem"),
};

export default function BlogArticleGnssConnectivity() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "GNSS + LoRa vs. GNSS + LTE-M" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          GNSS + LoRa vs. GNSS + LTE-M for Animal Tracking
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A note on two different problems that get conflated in animal-tracking marketing copy — and how to actually choose between them.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            &quot;GPS vs. LoRa&quot; is a common framing in animal-tracking product copy, but it compares
            two things that solve entirely different problems. GNSS (GPS, Galileo, GLONASS, and BeiDou
            are all GNSS constellations) determines <em>where</em> a device is by receiving timing signals
            from satellites and computing a position fix. It does not transmit anything to anyone — it is
            a receive-only process that happens entirely on the device. LoRa, by contrast, is a
            communication radio: its job is to get that position fix (or any other data) off the device
            and somewhere useful, such as a phone app or a cloud dashboard. A tracker needs both — a way
            to know where it is, and a way to report it — and they are independent design decisions.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            The real decision: which radio reports the fix?
          </h2>
          <p>
            Once a device has a GNSS position, it needs a communication link to send it out. For animal
            trackers, the two most common choices are LoRa (usually as LoRaWAN, the network-layer protocol
            maintained by the LoRa Alliance) and LTE-M (LTE Cat-M1, a low-power cellular IoT standard
            defined by 3GPP starting in Release 13). Both are built for infrequent, small-payload
            reporting — a GPS fix is a handful of bytes — rather than continuous streaming, which keeps
            power consumption manageable for a battery-powered collar or tag.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LoRa / LoRaWAN
          </h3>
          <p>
            LoRa operates in unlicensed ISM radio bands (863–870 MHz in the EU, 902–928 MHz in the US, with
            regional variations elsewhere) and is typically deployed in a star topology, where devices send
            data to a gateway you own or a shared public network. Its practical advantages are low
            transmit-power draw and no recurring carrier data fees. Its limitation is coverage: a device is
            only reachable where a gateway is in range, which for open, line-of-sight terrain is often
            described as several kilometers, but drops substantially with hills, trees, or buildings in the
            path. Unlicensed-band regulations in many regions also impose duty-cycle limits on how often a
            device may transmit, which reinforces LoRa&apos;s fit for periodic, low-frequency reporting
            rather than near-continuous updates.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            LTE-M
          </h3>
          <p>
            LTE-M rides on existing mobile carrier infrastructure, so coverage extends anywhere the carrier
            has a signal — no gateway to deploy or maintain. That convenience comes with a recurring cost:
            a SIM and a data plan per device, plus dependence on carrier coverage in the specific area
            animals range over (coverage gaps still exist in remote pasture or rangeland). Power
            consumption per transmission is generally higher than LoRa, though modern LTE-M modules narrow
            that gap significantly using Power Saving Mode (PSM) and extended Discontinuous Reception
            (eDRX), both defined in the 3GPP standard, which let the modem sleep deeply between scheduled
            check-ins with the network.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            How to actually choose
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Range relative to infrastructure.</strong> If animals stay within range of gateways
              you can place — a farm, a fixed grazing area — LoRa avoids recurring costs. If they roam
              beyond any infrastructure you control, LTE-M&apos;s carrier coverage is usually the only
              option that keeps working.
            </li>
            <li>
              <strong>Cost structure.</strong> LoRa trades gateway capital cost and upkeep for near-zero
              per-message cost. LTE-M trades that upfront infrastructure for an ongoing per-device data
              plan — the right call depends on fleet size and how it&apos;s budgeted.
            </li>
            <li>
              <strong>Coverage reality, not coverage maps.</strong> Rural cellular coverage maps are
              frequently optimistic; the same is true of assumed LoRa gateway range once real terrain and
              vegetation are accounted for. Either path benefits from an on-site link check before
              committing to a fleet-wide design.
            </li>
            <li>
              <strong>Battery budget.</strong> For the same reporting frequency, LoRa transmissions
              typically draw less energy than an LTE-M check-in, which matters more as reporting frequency
              increases. At low reporting frequencies with PSM/eDRX tuned well, the gap narrows.
            </li>
          </ul>

          <p>
            Neither technology is a GNSS substitute, and neither is universally &quot;better&quot; than the
            other — they answer different questions (how do I get data out?) than GNSS does (where am I?).
            The right combination — GNSS + LoRa or GNSS + LTE-M — depends on where the animals actually go
            relative to the infrastructure and coverage available there, and on how the cost is best
            structured for the fleet in question.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Have a specific range, terrain, or fleet-size question? <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> and we&apos;ll help you scope the right connectivity approach.
        </p>
      </article>

      <CTABanner
        heading="Scoping a Tracking Device?"
        description="Tell us about the animals, terrain, and infrastructure you're working with — we'll help you weigh the connectivity trade-offs."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Back to Blog"
        secondaryHref="/blog"
      />
    </>
  );
}
