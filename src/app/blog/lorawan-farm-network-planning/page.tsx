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
  title: "LoRaWAN for Agriculture: Planning a Farm Network | PawSync",
  description:
    "How to plan a LoRaWAN network for a farm: gateway placement and height, realistic range, EU868 vs. US915, airtime limits, battery life and public vs. private networks.",
  alternates: buildAlternates("en", "blog/lorawan-farm-network-planning"),
  openGraph: buildOpenGraph("en", "blog/lorawan-farm-network-planning", {
    url: "/blog/lorawan-farm-network-planning/og.png",
    alt: "Illustration of a farm LoRaWAN network: a gateway on top of a silo reaching field sensors, a water tank and a weather station, with one sensor blocked by a tree line",
  }),
  twitter: { card: "summary_large_image", images: ["/blog/lorawan-farm-network-planning/og.png"] },
};

const articleJsonLd = blogPostingJsonLd({
  locale: "en",
  route: "blog/lorawan-farm-network-planning",
  headline: "Planning a LoRaWAN Network for a Farm: Gateways, Coverage and Battery Life",
  description: metadata.description ?? "",
  image: "/blog/lorawan-farm-network-planning/og.png",
});

export default function BlogArticleLorawanFarmNetwork() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "LoRaWAN Farm Network" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Planning a LoRaWAN Network for a Farm: Gateways, Coverage and Battery Life
        </h1>
        <ArticleDate route="blog/lorawan-farm-network-planning" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          LoRaWAN is a natural fit for agriculture: small battery-powered sensors, a few bytes per message,
          long distances and no Wi-Fi in the fields. Whether a farm network works well, though, depends far
          more on planning than on the sensors themselves.
        </p>
        <Image
          src="/blog/lorawan-farm-network-planning/hero.svg"
          alt="Illustration of a farm LoRaWAN network: a gateway on top of a silo reaching field sensors, a water tank and a weather station, with one sensor blocked by a tree line"
          width={1200}
          height={600}
          priority
          unoptimized
          className="mt-8 h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
        />

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            How a LoRaWAN farm network fits together
          </h2>
          <p>
            A LoRaWAN network has four parts. <strong>End devices</strong> — soil moisture probes, water level
            sensors, weather stations, trackers — send short radio messages. <strong>Gateways</strong> receive
            them and forward them over an internet connection. A <strong>network server</strong> removes
            duplicates, manages security keys and adapts each device&apos;s data rate. An{" "}
            <strong>application</strong> stores the data and raises alerts. Devices aren&apos;t paired to a
            single gateway: any gateway in range can receive a message, which is what makes adding a second
            gateway such an effective way to fill gaps.
          </p>

          <figure>
            <Image
              src="/blog/lorawan-farm-network-planning/diagram-en.svg"
              alt="Diagram of a LoRaWAN network: end devices send short radio messages, gateways forward them over the internet, a network server removes duplicates and manages keys and data rate, and an application stores data and raises alerts"
              width={960}
              height={600}
              unoptimized
              className="h-auto w-full rounded-2xl border border-[var(--ts-navy)]/8"
            />
            <figcaption className="mt-3 text-center text-sm text-[var(--ts-gray)]">
              The four parts of a LoRaWAN network. Devices aren&apos;t paired to one gateway, so a second gateway can fill coverage gaps.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Realistic range: why the brochure number rarely applies
          </h2>
          <p>
            Range figures for rural LoRaWAN vary widely between sources — from a few kilometres to well over
            ten. Both can be true. Range depends mainly on:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Gateway antenna height.</strong> This is usually the biggest single factor. A gateway on a
              tall mast or silo sees far more of the farm than one inside the farm office.
            </li>
            <li>
              <strong>Terrain and obstacles.</strong> Hills, tree lines and buildings block or weaken the signal.
              Radio needs a clear path with some space around it (the Fresnel zone), not just a visual line of
              sight.
            </li>
            <li>
              <strong>Device antenna and position.</strong> A sensor at ground level, inside a metal tank or in
              tall crops loses a lot of signal compared with one on a post.
            </li>
            <li>
              <strong>Spreading factor.</strong> Higher spreading factors reach further but keep the radio on
              much longer for each message, which costs battery and airtime.
            </li>
          </ul>
          <p>
            The reliable way to plan is a <strong>site survey</strong>: put a temporary gateway where you
            intend to mount it, walk or drive the farm with a field tester or test device, and record signal
            strength at the actual sensor locations. An afternoon of testing replaces a lot of guesswork.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Regional frequency plans: EU868 and US915
          </h2>
          <p>
            LoRaWAN uses licence-free radio bands, and the rules differ by region. Devices and gateways must
            match the regional plan where they are installed.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Europe and the UK: EU868
          </h3>
          <p>
            In Germany, Austria, France, the UK and the rest of Europe, LoRaWAN operates around 868 MHz. Most
            channels are subject to a <strong>duty-cycle limit</strong> — on the main sub-bands, a device may
            transmit for only 1% of the time. For a sensor sending a reading every 15 minutes this is no
            problem; for a device trying to send large amounts of data at a high spreading factor it is a hard
            limit.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            United States: US915
          </h3>
          <p>
            In the US, LoRaWAN operates in the 902–928 MHz band. There is no duty cycle in the same form, but
            a <strong>dwell-time limit</strong> of 400 ms per transmission means the slowest, longest-range
            data rates used in Europe are not available for standard uplinks. US915 also has many more
            channels than a typical gateway listens to, so devices and gateways must be configured for the same
            sub-band — a common cause of &ldquo;the sensor works on the bench but never joins&rdquo;.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Gateway placement, power and backhaul
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Height and position:</strong> as high and as central as practical — a mast, silo or barn
              roof — with an outdoor-rated antenna and short, low-loss cable.
            </li>
            <li>
              <strong>Power:</strong> gateways run continuously. Mains power is simplest; a remote mast needs a
              solar panel and battery sized for the darkest weeks of the year.
            </li>
            <li>
              <strong>Backhaul:</strong> the gateway needs its own internet connection — Ethernet from the farm
              office, a cellular modem, or a point-to-point wireless link. Without backhaul, it collects data no
              one can see.
            </li>
            <li>
              <strong>Lightning and weather:</strong> an outdoor antenna on a tall structure needs surge
              protection and proper grounding.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Public, community or private network?
          </h2>
          <p>
            <strong>Public operator networks</strong> exist in some regions, but rural coverage is often
            incomplete — check the specific farm, not the coverage map. <strong>Community networks</strong>,
            such as The Things Network, are free to use but come with a fair-use policy that limits airtime
            (for example, 30 seconds of uplink airtime per device per day) and offer no service guarantees.
            A <strong>private network</strong> — your own gateways and a hosted or self-run network server —
            gives full control over coverage and data, at the cost of owning the infrastructure. For most
            farms with business-critical alerts, a private network or a hybrid with your own gateways is the
            more dependable choice.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Battery life of LoRaWAN sensor nodes
          </h2>
          <p>
            Multi-year battery life is achievable — but only for the right combination of reporting interval,
            spreading factor and sensor. Typical drivers are:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>How often the device transmits, and how long each message is on air.</li>
            <li>The sensor itself — some, such as gas sensors or ultrasonic level sensors, need significant power for each reading.</li>
            <li>Sleep current between readings, which dominates for devices that report rarely.</li>
            <li>Temperature: cold reduces usable battery capacity.</li>
          </ul>
          <p>
            Primary lithium cells (such as Li-SOCl₂) are common for long-life nodes because of their low
            self-discharge. We explain power budgets and duty cycling in{" "}
            <Link href="/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Designing Low-Power Electronics for Outdoor Animal Trackers
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Sensing is easy, control needs more thought
          </h2>
          <p>
            Most LoRaWAN devices are Class A: they only listen for a message from the network briefly after
            they transmit. That is ideal for battery sensors but means a command — open a valve, switch a pump
            — may wait until the device next reports. For control, use Class C devices (always listening, so
            normally mains-powered), keep safety-critical logic on the local controller, and always confirm
            that the action actually happened. LoRaWAN is a strong choice for monitoring; for fast control
            loops, a wired or local connection is often the better tool.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            A planning checklist
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Map sensor locations and the reporting interval each one really needs.</li>
            <li>Pick candidate gateway sites with height, power and backhaul.</li>
            <li>Run a site survey at the actual sensor positions.</li>
            <li>Choose the network model: private, community, operator or hybrid.</li>
            <li>Check the regional plan (EU868 or US915) for every device and gateway.</li>
            <li>Size batteries from measured consumption, not datasheet best cases.</li>
          </ol>
          <p>
            For tracking devices specifically, see{" "}
            <Link href="/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              GNSS + LoRa vs. GNSS + LTE-M for Animal Tracking
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frequently asked questions
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How many LoRaWAN gateways does a farm need?
          </h3>
          <p>
            It depends on terrain far more than on area. One well-placed gateway on a tall structure can cover the core of many farms; hills, woodland and distant fields may need a second gateway or a mast. A site survey at the actual sensor locations is the only reliable way to decide — and because any gateway can receive any device, adding one later is straightforward.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How many sensors can one gateway handle?
          </h3>
          <p>
            A LoRaWAN gateway can receive messages from a large number of devices, and at typical farm reporting rates — one small message every few minutes to every hour — gateway capacity is rarely the limiting factor. Airtime is: devices using high spreading factors occupy the channel longer, so good coverage (allowing lower spreading factors) helps both battery life and capacity.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Can LoRaWAN carry images or video?
          </h3>
          <p>
            No. LoRaWAN is designed for small messages — typically tens of bytes. Camera traps, video and firmware images need a different link such as cellular or Wi-Fi. A common pattern is to use LoRaWAN for sensor data and alerts, and cellular for the few devices that need bandwidth.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Is LoRaWAN secure?
          </h3>
          <p>
            LoRaWAN encrypts traffic with AES-128 at two levels: one key protects the network layer and another protects the application payload end to end. In practice, security depends on key management — unique keys per device, keys that are not printed on labels or committed to code repositories, and a network server you trust.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Planning LoRaWAN sensors or gateways for a farm or a product?{" "}
          <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Get in touch</Link> —
          sensor nodes and network designs can be developed for your site and region. See also{" "}
          <ArticleServiceLink locale="en" href="/farm-automation" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Farm Automation</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/environmental-monitoring" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Environmental Monitoring</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Planning a Farm Sensor Network?"
        description="Tell us about your site, sensors and region — we'll help you plan coverage, power and devices."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Farm Automation"
        secondaryHref="/farm-automation"
        secondaryLocale="en"
      />
    </>
  );
}
