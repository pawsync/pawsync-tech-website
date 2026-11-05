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
  title: "Livestock Monitoring Sensors: What Each One Measures | PawSync",
  description:
    "A practical guide to livestock monitoring sensors — GPS, activity, water, gate and fence sensors — what each measures, how it is powered, and how to connect it on a ranch.",
  alternates: buildAlternates("en", "blog/livestock-monitoring-sensors"),
  openGraph: buildOpenGraph("en", "blog/livestock-monitoring-sensors", {
    url: "/blog/livestock-monitoring-sensors/og.jpg",
    alt: "Pasture with a collared cow, a fence sensor, a water trough sensor and a solar-powered weather station linked to a radio mast: sensors on animals and sensors on infrastructure",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/livestock-monitoring-sensors/og.jpg"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "en",
  route: "blog/livestock-monitoring-sensors",
  headline: "Livestock Monitoring Sensors: What Each Sensor Measures and How to Connect It",
  description: metadata.description ?? "",
  image: "/blog/livestock-monitoring-sensors/og.jpg",
});

export default function BlogArticleLivestockMonitoringSensors() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Livestock Monitoring Sensors" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Livestock Monitoring Sensors: What Each Sensor Measures and How to Connect It
        </h1>
        <ArticleDate route="blog/livestock-monitoring-sensors" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A remote livestock monitoring system is only as useful as the sensors at its edge. Before choosing
          a platform or a network, it helps to be clear about what each type of sensor can and can&apos;t tell
          you — and what it costs in power and maintenance.
        </p>
        <Image
          src="/blog/livestock-monitoring-sensors/hero.webp"
          alt="Pasture with a collared cow, a fence sensor, a water trough sensor and a solar-powered weather station linked to a radio mast: sensors on animals and sensors on infrastructure"
          width={1752}
          height={897}
          priority
          sizes="(min-width: 768px) 704px, 100vw"
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Two groups: sensors on animals, sensors on infrastructure
          </h2>
          <p>
            Livestock monitoring sensors fall into two groups. <strong>Animal-worn sensors</strong> — collars,
            ear tags, leg bands — tell you where animals are and how they are moving. <strong>Infrastructure
            sensors</strong> — on water troughs, tanks, gates, fences and weather masts — tell you whether the
            things animals depend on are working. Many problems on a cattle operation show up first in the
            infrastructure: a trough that stops refilling or an electric fence that loses voltage. Those
            sensors are often cheaper, easier to power and easier to maintain than anything worn by an
            animal, which makes them a good place to start.
          </p>

          <figure>
            <Image
              src="/blog/livestock-monitoring-sensors/diagram.webp"
              alt="Diagram: animal-worn sensors (GNSS location, activity, RFID) and infrastructure sensors (water level, gates and fences, weather) send data through a gateway or network to a dashboard with alerts"
              width={1754}
              height={897}
              sizes="(min-width: 768px) 704px, 100vw"
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              Two groups of sensors, one data path: from the animal or the infrastructure, through a gateway or network, to a dashboard and alerts.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Animal-worn sensors
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            GPS / GNSS location
          </h3>
          <p>
            A GNSS receiver on a collar or tag reports position. It answers practical questions: where is the
            herd, has an animal left the property, which part of a pasture is being grazed. Accuracy under
            open sky is typically a few metres, worse under trees or in steep terrain. The receiver is also
            usually the biggest energy consumer on the device, so the reporting interval is the main lever on
            battery life — a fix every few hours lasts far longer than a fix every few minutes.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Accelerometers for activity
          </h3>
          <p>
            A three-axis accelerometer measures movement. With suitable firmware it can separate broad
            behaviours such as walking, standing and lying down, and show changes in daily activity patterns.
            Field studies of LoRaWAN cattle collars have shown clear day-and-night grazing patterns from this
            kind of data. Accelerometers use very little power, and they are also useful to the device itself:
            the firmware can skip a GNSS fix when the animal hasn&apos;t moved.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            RFID identification
          </h3>
          <p>
            Low-frequency RFID ear tags (134.2 kHz, following the ISO 11784/11785 standards) are passive: they
            have no battery and are read when an animal passes a reader at a gate, race or scale. They
            don&apos;t report location on their own, but combined with a fixed reader they identify which
            animal was where — for example, at a water point or on a walk-over weighing platform.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Infrastructure sensors
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Water level in troughs and tanks
          </h3>
          <p>
            Water is the most common reason for a daily drive around a ranch. Level sensors replace that check.
            Ultrasonic sensors measure distance to the water surface from above and don&apos;t touch the water,
            but foam, debris and condensation can affect them. Submersible pressure sensors are robust and
            accurate but need a cable into the tank and protection from ice. Simple float switches are cheap
            and reliable for a single &ldquo;low&rdquo; alarm. The useful output is not just a level, but a
            trend: a tank that drops faster than usual points to a leak or a broken float valve.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Gates and electric fences
          </h3>
          <p>
            A magnetic reed switch on a gate reports open or closed for years on a small battery. An electric
            fence monitor measures pulse voltage on the line and reports when it drops — usually the first
            sign of a short from vegetation or a broken wire. Both send very small, infrequent messages, which
            suits low-power wide-area networks well.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Weather and pasture conditions
          </h3>
          <p>
            A local weather station (temperature, humidity, wind, rainfall) adds context to everything else —
            for example, heat-stress risk on hot, still days, or why water use jumped. Soil moisture probes
            help with grazing rotation decisions. We cover these in more detail on our{" "}
            <ArticleServiceLink locale="en" href="/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Environmental Monitoring</ArticleServiceLink> page.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Connecting sensors across a ranch
          </h2>
          <p>
            Most livestock sensors send a few bytes at a time, minutes or hours apart, from places without
            power or Wi-Fi. That rules out most short-range options and points to three choices:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>LoRaWAN</strong> — the farm installs one or more gateways, and sensors reach them over
              several kilometres in open country. Very low energy per message, no per-device cellular
              subscription. Range depends heavily on terrain and gateway height.
            </li>
            <li>
              <strong>Cellular LTE-M / NB-IoT</strong> — no farm infrastructure, but it only works where there
              is coverage, and each device needs a data plan.
            </li>
            <li>
              <strong>Satellite IoT</strong> — reaches places with neither cellular coverage nor a practical
              gateway site, at a higher cost per message and with tighter limits on data size.
            </li>
          </ul>
          <p>
            Many operations end up with a mix: LoRaWAN around the home place and the main pastures, and
            cellular or satellite for remote water points. Our{" "}
            <Link href="/blog/lorawan-farm-network-planning" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              guide to planning a LoRaWAN network for a farm
            </Link>{" "}
            covers gateway placement and coverage.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Power and maintenance: the hidden cost
          </h2>
          <p>
            Every battery on a ranch is a future maintenance trip. When comparing sensors, ask how long the
            battery lasts at the reporting interval you actually need, whether it is replaceable in the field,
            and what happens when it runs low. Fixed infrastructure sensors can often use a small solar panel;
            animal-worn devices have much less room for one. Choosing a longer reporting interval is usually
            the single cheapest way to extend battery life — so it is worth asking how fresh each reading
            really needs to be.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Alerts that people will keep using
          </h2>
          <p>
            The value of a monitoring system shows up as alerts: low water, fence down, gate open, animal
            outside the property. Too many false alerts and people stop reading them. Practical measures
            include requiring a condition to persist before alerting, sending a single alert with a reminder
            rather than a stream, and giving each alert a clear action. A short list of reliable alerts is
            worth more than a dashboard full of numbers.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            A practical starting point
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>List the checks you currently do by driving around — water, fences, gates, counting animals.</li>
            <li>Pick the one that costs the most time or risk, and start with sensors for that.</li>
            <li>Check connectivity at the actual sensor locations before choosing a network.</li>
            <li>Decide on reporting intervals and alert rules, then size batteries to match.</li>
            <li>Add animal-worn devices once the network and alerting are proven.</li>
          </ol>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frequently asked questions
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How accurate is GPS cattle tracking?
          </h3>
          <p>
            Under open sky, a typical single-frequency GNSS receiver on a collar or ear tag is accurate to a few metres. That is enough to tell which paddock or part of a pasture an animal is in, to detect animals leaving the property, and to see grazing patterns over time. It is not enough to tell exactly which animal is standing at a particular trough — that is a job for RFID at the water point.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How long do livestock sensor batteries last?
          </h3>
          <p>
            It depends mostly on the reporting interval and the radio. Infrastructure sensors that send a small message every 15–60 minutes over LoRaWAN commonly run for years on a primary lithium cell. GPS trackers have a much higher energy cost per report, so their battery life ranges from weeks to years depending on how often they take a fix and whether they have solar charging. Always ask for battery life at your reporting interval, not the best case.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Should a ranch use LoRaWAN or cellular?
          </h3>
          <p>
            If cellular coverage is reliable everywhere you need sensors and the device count is small, cellular is the quickest to deploy. If coverage is patchy, or you plan dozens to hundreds of sensors, a farm-owned LoRaWAN network is usually cheaper to run and works where phones do not. Many operations combine both.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Where does the sensor data go?
          </h3>
          <p>
            Every sensor network needs a back end: somewhere data is stored, displayed and turned into alerts. Options range from an existing IoT platform to an integration with farm-management software or a custom application. It is worth deciding early, because it affects the data format, the network server and how alerts reach the people who act on them.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Need sensors or tracking hardware designed for your operation or product?{" "}
          <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> —
          sensor nodes, trackers and gateways can be developed to your requirements. See also{" "}
          <ArticleServiceLink locale="en" href="/livestock-technology" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Livestock Monitoring Systems</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Animal Tracking</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Planning a Livestock Monitoring Project?"
        description="Tell us what you need to monitor and where — we'll help you choose sensors, connectivity and power."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Livestock Technology"
        secondaryHref="/livestock-technology"
        secondaryLocale="en"
      />
    </>
  );
}
