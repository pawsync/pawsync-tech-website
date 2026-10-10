import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Designing a PCB for a Pet or Animal Tracker | PawSync",
  description:
    "A collar- or tag-mounted tracker isn't a smaller GPS board. Antenna placement, stack-up, and enclosure constraints that drive a pet tracker PCB design.",
  alternates: buildAlternates("en", "blog/pet-tracker-pcb-design"),
  openGraph: buildOpenGraph("en", "blog/pet-tracker-pcb-design"),
};

export default function BlogArticlePetTrackerPCB() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Pet Tracker PCB Design" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Designing a PCB for a Pet or Animal Tracker: What the Form Factor Actually Constrains
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A collar- or tag-mounted tracker isn&apos;t a smaller version of a normal GPS board — the form factor itself drives most of the hard decisions.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            A GPS/GNSS tracker board for a bench-top prototype and one meant to live on a collar for months
            are, electrically, similar circuits. Mechanically and electromagnetically, they&apos;re not the
            same problem at all. Everything below is driven by one fact: the board has to be small, has to
            sit close to a moving animal&apos;s body, and has to survive outdoors without anyone opening it
            up to fix a mistake.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Start with the constraint, not the chip
          </h2>
          <p>
            It&apos;s tempting to start a tracker design by picking a GNSS module and a radio and laying
            out a board around them. In practice, the enclosure dimensions, the strap or tag-clip geometry,
            and the target battery size usually get fixed first, because they&apos;re the hardest
            constraints to change later — and the board has to fit inside whatever envelope they leave.
            Component selection follows from that envelope, not the other way around.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Antenna placement is usually the hardest part
          </h2>
          <p>
            This is where most of the engineering difficulty in a wearable tracker actually lives, and
            it&apos;s easy to underestimate before you&apos;ve laid one out.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>GNSS antenna type.</strong> A ceramic patch antenna gives reliable performance with a
              known ground-plane keep-out area, but it has a minimum footprint that competes directly with
              everything else on a small board. An embedded PCB trace or chip antenna can be smaller and
              cheaper, but is more sensitive to layout mistakes and to whatever&apos;s near it — including
              the battery, metal snap closures on a collar strap, or a conductive enclosure.
            </li>
            <li>
              <strong>Body loading.</strong> An antenna mounted close to an animal&apos;s body — especially
              a larger animal — experiences RF loading from that body that a free-space antenna datasheet
              doesn&apos;t account for. This can detune the antenna and reduce both sensitivity and radiated
              efficiency. The practical response is to validate antenna performance in a mounting position
              and orientation close to the real use case, not just on an open bench.
            </li>
            <li>
              <strong>Keep-out zones and desense.</strong> The GNSS antenna needs clearance from digital
              switching noise and from the battery. If there&apos;s a second radio on the same board — LoRa,
              LTE-M, or BLE — it needs its own keep-out, and ideally physical separation from the GNSS
              antenna, so the second radio&apos;s transmit power doesn&apos;t desense the (much more
              sensitive) GNSS receive path.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Stack-up and layer count
          </h2>
          <p>
            A simple low-data-rate design can sometimes get away with two layers. In practice, once
            you&apos;re running a GNSS front end, a second radio, battery charging circuitry, and sensor
            interfaces on the same small board, a four-layer stack-up with a dedicated, unbroken ground
            plane under the RF front end is usually the more reliable choice — it gives the GNSS section a
            clean reference plane and keeps noisy digital traces from running directly underneath sensitive
            RF.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Power supply and battery protection on the board
          </h2>
          <p>
            For a primary (non-rechargeable) lithium cell, the power path is comparatively simple: a
            low-dropout regulator or a small buck-boost converter, sized for the current the GNSS and radio
            draw during their active bursts, not just their sleep-state draw.
          </p>
          <p>
            For a rechargeable lithium-ion or LiPo cell, the board needs a battery protection IC —
            overcurrent, overvoltage, and undervoltage lockout — as a non-negotiable safety component, plus
            a charging IC if the device recharges over USB, a pogo-pin dock, or solar. The regulator
            topology choice (LDO versus buck-boost) is itself a trade-off: an LDO is simpler and
            lower-noise but wastes the voltage difference as heat, which matters more at the higher
            currents a GNSS fix or a radio transmission briefly demands.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Component selection: module vs. discrete
          </h2>
          <p>
            A pre-certified GNSS-plus-radio module gets a design to a working prototype faster, carries
            pre-existing FCC/CE radio certification, and reduces RF layout risk — at a size and per-unit
            cost premium compared to discrete components. A discrete chipset approach can be smaller and
            cheaper at volume, but it shifts the RF layout expertise and the certification process onto the
            project. Which one makes sense depends on the production volume, timeline, and how much RF
            design margin the team wants to carry — there isn&apos;t a universally correct answer.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Designing for the enclosure, not just the board
          </h2>
          <p>
            The board outline, mounting hole positions, and connector placement all need to be decided
            alongside the enclosure, not after it. Collar- or tag-mounted enclosures often call for potting
            or conformal coating around the board to manage moisture and vibration — but any specific
            water- or dust-ingress rating (an IP rating, for example) has to be validated by actual testing
            on the finished, assembled device. It isn&apos;t something a board design can claim on its own,
            independent of the enclosure it ends up in.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Designing for manufacturability early
          </h2>
          <p>
            A board that works perfectly on the bench can still be painful to build at any volume if
            panelization, test points for in-circuit or functional test, and component placement for
            pick-and-place weren&apos;t considered during layout. A design-for-manufacturability pass before
            a layout is finalized — not after the first prototype run — is cheap insurance against rework
            later.
          </p>

          <p>
            None of this is exotic by embedded-hardware standards. What makes a tracker PCB design hold up
            in the field is usually how early the antenna placement, enclosure integration, and
            manufacturability questions were treated as layout inputs, rather than problems to debug after
            the first batch of boards comes back.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Scoping a tracker project and not sure where to start? <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> and
          we&apos;ll help you work through the constraints before committing to a layout. For the
          connectivity choice behind the second radio, see our comparison of{" "}
          <Link href="/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">GNSS + LoRa vs. GNSS + LTE-M</Link>. For the power-budget
          side of the design, see{" "}
          <Link href="/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Designing Low-Power Electronics for Outdoor Animal Trackers</Link>.
        </p>
      </article>

      <CTABanner
        heading="Have a Tracker PCB to Scope?"
        description="Tell us your target form factor, battery life, and connectivity needs — we'll help you work through the layout trade-offs."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Animal Tracker Development"
        secondaryHref="/animal-tracking"
        secondaryLocale="en"
      />
    </>
  );
}
