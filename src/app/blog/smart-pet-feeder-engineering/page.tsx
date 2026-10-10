import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import ArticleServiceLink from "@/components/analytics/ArticleServiceLink";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Smart Pet Feeder Hardware & Firmware Engineering | PawSync",
  description:
    "Portion accuracy, load-cell calibration, jam detection, and RFID recognition — the engineering decisions behind a smart pet feeder, explained.",
  alternates: buildAlternates("en", "blog/smart-pet-feeder-engineering"),
  openGraph: buildOpenGraph("en", "blog/smart-pet-feeder-engineering"),
};

export default function BlogArticleSmartFeederEngineering() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Smart Feeder Engineering" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Smart Pet Feeder Hardware &amp; Firmware Engineering: Portion Accuracy, Jam Detection, and Load Sensing
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A smart feeder looks simple from the outside — motor, hopper, timer. The engineering that makes it reliable sits in the sensing and the firmware, not the dispensing mechanism itself.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            The core sensing problem: measuring a portion, not just dispensing one
          </h2>
          <p>
            The simplest way to build an automatic feeder is open-loop: rotate an auger or actuate a flap
            for a fixed time and assume that produces a fixed portion. This works until the feed level in
            the hopper changes the flow rate, the feed type changes density, or the mechanism wears
            slightly — all of which make a timed dispense drift from the portion it&apos;s supposed to
            deliver.
          </p>
          <p>
            A closed-loop design — measuring the actual weight dispensed, typically via a load cell under
            the bowl or hopper, and stopping the motor once the target weight is reached — is more accurate
            across these variations, at the cost of added sensing hardware and firmware complexity. Which
            approach is appropriate depends on how much portion accuracy actually matters for the use case.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Load cell and amplifier selection
          </h2>
          <p>
            A load cell needs to be sized to the expected portion and hopper weight range — a cell rated
            far beyond what it will ever measure gives poor resolution at the low end, while one sized too
            close to the maximum load risks damage from overloading. The standard way to read a load cell
            is through a dedicated 24-bit analog-to-digital amplifier (the HX711 is the component most
            commonly used in this role for small embedded designs), which handles the low-level analog
            signal conditioning that a general-purpose microcontroller ADC isn&apos;t built for.
          </p>
          <p>
            Mechanical isolation matters here too: a load cell mounted where it also picks up vibration
            from the dispensing motor will show noise in its readings that has nothing to do with the
            actual feed weight, so the motor and the sensing path need to be mechanically decoupled as much
            as the enclosure allows.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Calibration and drift
          </h2>
          <p>
            A load cell&apos;s zero-offset shifts over time and with temperature — a one-time factory
            calibration doesn&apos;t hold indefinitely. Feeder firmware that re-tares periodically (for
            example, when the bowl is confirmed empty) rather than relying solely on a calibration value
            set at manufacture is more robust to this drift. This is a firmware design decision as much as
            a hardware one.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Dispensing mechanics and the motor interface
          </h2>
          <p>
            The dispensing mechanism itself — auger, rotating disc, or gravity flap with a release gate —
            is largely a mechanical-engineering decision, usually made alongside a mechanical design
            partner rather than purely in electronics. What the electronics and firmware need to do is
            drive whatever mechanism is chosen: a stepper motor for precise auger rotation, a brushed DC
            gearmotor with an encoder for a disc mechanism, or a simple actuator for a flap. The motor
            driver selection and the firmware&apos;s control loop follow from that mechanical choice.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Jam and fault detection in firmware
          </h2>
          <p>
            A jammed auger or a stuck flap is a real failure mode, and a feeder that silently stops
            dispensing without alerting anyone isn&apos;t doing its job. Firmware can detect this a couple
            of ways: current-sense on the motor driver, where a jam shows up as sustained current draw
            without the expected motor movement, or — if an encoder or the load cell is available —
            watching for the expected rate of weight change and flagging a mismatch. A practical state
            machine distinguishes a normal dispense cycle, a retry attempt after a suspected jam, and a
            fault state that triggers an alert rather than retrying indefinitely.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            RFID recognition for multi-pet households
          </h2>
          <p>
            Where a feeder needs to recognize which animal is present — to deliver the right portion or
            restrict access — there are two realistic approaches. One reads the animal&apos;s existing
            microchip, which in companion animals is almost always a 134.2 kHz ISO 11784/11785 chip;
            reading these reliably requires a compatible low-frequency reader, not a generic 13.56 MHz HF
            reader built for access cards. The other uses a feeder-specific RFID tag on a collar, which is
            simpler to implement and more reliable to read at a feeding station, at the cost of requiring
            the animal to wear an additional tag.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Power architecture: mains vs. battery
          </h2>
          <p>
            A feeder&apos;s power profile looks different from a tracker&apos;s. Where a tracker&apos;s
            challenge is a low, steady average draw over months, a feeder&apos;s challenge is an infrequent
            but high peak current draw during each dispense cycle, driven by the motor. A mains-powered
            design sidesteps most of this — continuous power means the motor&apos;s peak current isn&apos;t
            a battery-life concern, only a wiring and power-supply sizing one. A battery-powered design has
            to budget for that peak current specifically, not just the average draw between dispenses,
            which is a different calculation from the duty-cycling techniques used in a low-power tracker
            design.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Connectivity and the app layer
          </h2>
          <p>
            Consistent with how we approach connectivity generally: scheduled feeding logic is more
            reliable when it runs locally on the controller rather than depending on a live connection to
            an app or cloud service for every scheduled dispense. Feeding history and remote schedule
            changes sync to an app when connectivity is available, but the feeder keeps feeding on schedule
            if the network briefly drops.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Scoping a feeder project? <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> and we&apos;ll help you work through the
          sensing, mechanics interface, and firmware architecture. For how PawSync approaches custom device
          development more broadly, see{" "}
          <ArticleServiceLink locale="en" href="/smart-feeding" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Smart Feeder Development</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/custom-electronics" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Custom Electronics &amp; Firmware</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Have a Feeder Project to Scope?"
        description="Tell us your portion-accuracy requirements, animal count, and power source — we'll help you work through the sensing and firmware design."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Smart Feeder Development"
        secondaryHref="/smart-feeding"
        secondaryLocale="en"
      />
    </>
  );
}
