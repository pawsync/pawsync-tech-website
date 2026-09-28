import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import CTABanner from "@/components/terrasense/CTABanner";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Designing Low-Power Electronics for Outdoor Animal Trackers | PawSync",
  description:
    "Battery life in a wearable animal tracker is a power-budget problem. The engineering techniques that determine whether a device lasts days or months.",
  alternates: buildAlternates("en", "blog/low-power-animal-tracker-design"),
  openGraph: buildOpenGraph("en", "blog/low-power-animal-tracker-design"),
};

export default function BlogArticleLowPowerDesign() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Low-Power Tracker Design" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Designing Low-Power Electronics for Outdoor Animal Trackers
        </h1>
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          Why battery life is fundamentally a power-budget problem, and the techniques that stretch it from days to months.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <p>
            A collar or ear-tag tracker&apos;s battery life comes down to one calculation: average current
            draw versus battery capacity. A device drawing 1 mA on average from a 1000 mAh cell runs for
            roughly 1000 hours (about 42 days) before accounting for temperature effects and self-discharge;
            drop the average draw to 0.1 mA and the same cell can last the better part of a year. Nearly
            every design decision in a wearable tracker is, in one way or another, an attempt to lower that
            average.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Where the power actually goes
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>GNSS acquisition.</strong> Receiving and locking onto satellite signals is one of the
              more power-hungry operations in a tracker, and how long it takes matters as much as how much
              current it draws while running. A <em>cold start</em> (no recent almanac or position data)
              can take tens of seconds to acquire a fix; a <em>warm</em> or <em>hot start</em>, using
              recently saved ephemeris and clock data, can lock on in a few seconds. Minimizing cold starts
              — by keeping the receiver&apos;s backup data intact through sleep cycles — is one of the
              highest-leverage power decisions in the whole design.
            </li>
            <li>
              <strong>Radio transmission.</strong> Sending data — over LoRa, LTE-M, BLE, or Wi-Fi — draws
              significant current for the (usually brief) duration of the transmission. Payload size, radio
              choice, and how often the device reports all directly trade off against battery life.
            </li>
            <li>
              <strong>Sensors and the microcontroller.</strong> An IMU (accelerometer/gyroscope), a
              temperature sensor, and the MCU itself all draw some current even in low-power states; the
              cumulative effect of many small always-on draws can rival the bigger, intermittent ones.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            The core technique: aggressive duty-cycling
          </h2>
          <p>
            Rather than keeping the MCU, GNSS receiver, and radio powered continuously, a well-designed
            tracker spends the overwhelming majority of its time in a deep-sleep state drawing only
            microamps, waking on a timer or an interrupt to do useful work, then returning to sleep. The
            engineering work is in deciding <em>when</em> to wake and <em>how much</em> to do once awake.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Motion-triggered wake
          </h3>
          <p>
            A low-power accelerometer can generate a hardware interrupt when it detects motion above a
            threshold, without needing the main MCU awake to watch for it. This lets a design report
            position more often while an animal is actively moving and back off substantially when it is
            resting or grazing in place — a widely used pattern in wearable tracking hardware generally,
            since it concentrates power spend where the location data is actually changing.
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
            Reporting interval as a design input, not an afterthought
          </h3>
          <p>
            Every reporting-interval decision is a direct trade against battery life: halving the interval
            roughly doubles the energy spent on GNSS fixes and radio transmissions. This is a trade-off
            worth surfacing explicitly to whoever is defining requirements, rather than defaulting to
            &quot;as often as possible&quot; — a farm application tracking pasture-scale movement usually
            needs far less frequent updates than a use case tracking fine-grained behavior.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Battery chemistry and the operating environment
          </h2>
          <p>
            Outdoor trackers also have to survive temperature swings that indoor electronics rarely see,
            and that affects the battery choice as much as the circuit design. Primary lithium cells (such
            as Li-SOCl₂) offer high energy density, a long shelf life, and comparatively stable performance
            across a wide temperature range, but are not rechargeable — the device is replaced or the
            battery swapped at end of life. Rechargeable lithium-ion or LiPo cells support solar trickle
            charging or periodic recharging, but their usable capacity drops more noticeably in cold
            conditions and their cycle life depends on charge/discharge patterns and temperature. Whichever
            chemistry is chosen, the power budget needs margin for capacity derating at the lowest
            temperature the device is expected to operate in, not just at room temperature.
          </p>

          <p>
            None of these techniques are exotic — they&apos;re standard embedded-systems practice. What
            makes a tracker&apos;s battery life good or disappointing is usually how consistently they were
            applied together, and how early in the design the power budget was treated as a real
            constraint rather than something to fix after the first prototype.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Working through a battery-life target for your own device? <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> and we&apos;ll help you scope the power budget.
        </p>
      </article>

      <CTABanner
        heading="Have a Power Budget to Work Through?"
        description="Tell us your target battery life, reporting frequency, and environment — we'll help you scope what's achievable."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Back to Blog"
        secondaryHref="/blog"
      />
    </>
  );
}
