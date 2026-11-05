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
  title: "Virtual Fencing Collars: GNSS, Cues & Power | PawSync",
  description:
    "An engineering look at virtual fencing for livestock: how a collar knows where the boundary is, how audio and electrical cues are sequenced, and what limits battery life.",
  alternates: buildAlternates("en", "blog/virtual-fencing-collars"),
  openGraph: buildOpenGraph("en", "blog/virtual-fencing-collars"),
};

const articleJsonLd = blogPostingJsonLd({
  locale: "en",
  route: "blog/virtual-fencing-collars",
  headline: "How Virtual Fencing Collars Work: GNSS, Cues and Power Design",
  description: metadata.description ?? "",
});

export default function BlogArticleVirtualFencingCollars() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Virtual Fencing Collars" }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Eyebrow>Engineering Notes</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          How Virtual Fencing Collars Work: GNSS, Cues and Power Design
        </h1>
        <ArticleDate route="blog/virtual-fencing-collars" />
        <p className="mt-4 text-sm text-[var(--ts-gray)]">
          A virtual fence replaces wire and posts with a boundary drawn on a map. Everything that makes it
          work — knowing where the animal is, deciding when to warn it, and doing that for months on one
          battery — has to happen inside a collar that lives outdoors on a moving animal.
        </p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            What a virtual fencing system is made of
          </h2>
          <p>
            Virtual fencing for livestock has three parts. Each animal wears a collar with a satellite
            positioning (GNSS) receiver, a small processor, a speaker or buzzer, a circuit that can deliver
            a brief, low-energy electrical pulse, and a battery — usually topped up by a small solar panel.
            A farmer draws the boundary in a web or phone app. And a communication link — cellular, LoRa or
            a dedicated base station, depending on the system — carries new boundaries down to the collars
            and status data back up.
          </p>
          <p>
            The important design choice is where the decision is made. In well-designed systems the boundary
            is stored on the collar itself, and the collar checks its own position against it. US extension
            and conservation guidance (for example from NDSU and the USDA&apos;s NRCS) notes that this lets
            the fence keep working when the network drops out — which, on remote pasture, it regularly
            does. A design that waits for a server to say &ldquo;you&apos;re too close&rdquo; isn&apos;t a fence
            when the signal is gone.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            How the collar knows where the boundary is
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            The geofence check
          </h3>
          <p>
            The boundary is stored as a polygon: a list of coordinates. Each time the collar gets a position
            fix, firmware runs a point-in-polygon test and calculates the distance to the nearest edge. That
            distance — not just &ldquo;inside or outside&rdquo; — drives everything else. Most systems define
            a warning zone just inside the line and use the animal&apos;s heading to tell whether it is
            approaching the boundary or walking along it. The maths is light enough for a low-power
            microcontroller; the hard part is trusting the position it is fed.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Living with GNSS error
          </h3>
          <p>
            A single-frequency GNSS receiver under open sky is typically accurate to a few metres. Under tree
            cover, beside steep slopes or close to buildings, errors grow and individual fixes can jump.
            Extension guides list tree cover and terrain as practical limits of virtual fencing for exactly
            this reason. On the collar, that means a raw fix should never trigger a cue on its own. Useful
            techniques include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Quality gating</strong> — discarding fixes with too few satellites or a poor reported
              accuracy estimate.
            </li>
            <li>
              <strong>Plausibility checks</strong> — rejecting a fix that implies the animal moved further
              than it physically could since the last one.
            </li>
            <li>
              <strong>Filtering</strong> — smoothing position and heading over several fixes, combined with
              accelerometer data that shows whether the animal is actually walking.
            </li>
            <li>
              <strong>A buffer</strong> — placing the warning zone far enough inside the boundary that normal
              GNSS error doesn&apos;t move it on top of the animal.
            </li>
          </ul>
          <p>
            Antenna placement matters as much as firmware. The GNSS antenna needs to sit on top of the
            animal&apos;s neck with a clear view of the sky, which is why many collars use a counterweight
            underneath to stop the electronics from rotating out of position.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Sequencing the cues: sound first, pulse second
          </h2>
          <p>
            Published descriptions of commercial systems follow the same pattern. When an animal enters the
            warning zone, the collar plays an audio tone. If the animal turns back, nothing else happens. If
            it keeps walking towards the boundary, the collar delivers a short electrical pulse, and the cycle
            repeats until the animal responds. Animals learn to associate the sound with the pulse, and
            after a training period they respond to the sound alone — similar to how livestock learn to
            respect an electric fence.
          </p>
          <p>From an engineering point of view, the cue logic is as much a welfare design as a control loop:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Hard limits</strong> on pulse energy, pulse count and repetition, enforced in firmware
              and ideally also in hardware, so a software fault can&apos;t cause repeated stimulation.
            </li>
            <li>
              <strong>Fail-safe defaults.</strong> If position quality is poor or the battery is nearly flat,
              the safe behaviour is to stop cueing and report the problem, not to keep guessing.
            </li>
            <li>
              <strong>An audit trail.</strong> Logging every audio cue and every pulse with time and position
              lets the farmer — and, where required, an inspector — see how often animals are being
              corrected and whether a boundary is badly placed.
            </li>
            <li>
              <strong>An escape rule.</strong> An animal that has crossed the line should be guided back, not
              blocked from returning by cues on the wrong side.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Power: the constraint behind every other decision
          </h2>
          <p>
            Extension sources report collar battery life ranging from a few months to a full grazing season,
            depending on how often position is updated and how often cues fire. Those two numbers are the
            core of the power budget:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>GNSS fix rate.</strong> The receiver is usually the largest consumer. Updating every few
              seconds near the boundary and much less often deep inside the paddock — or while the
              accelerometer shows the animal is lying down — saves a large share of energy.
            </li>
            <li>
              <strong>Radio traffic.</strong> Sending every fix upstream is expensive. Sending summaries and
              events (cues, alarms, low battery) is usually enough.
            </li>
            <li>
              <strong>Cue energy.</strong> Audio and pulses are short, but a badly placed boundary that
              triggers cues all day can dominate consumption — another reason to log them.
            </li>
            <li>
              <strong>Solar input.</strong> A small panel helps in summer, much less in winter, at high
              latitudes or when the collar has rotated. The design has to survive the worst month, not the
              average one.
            </li>
          </ul>
          <p>
            We cover duty cycling and sleep-current budgets in more detail in{" "}
            <Link href="/blog/low-power-animal-tracker-design" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              Designing Low-Power Electronics for Outdoor Animal Trackers
            </Link>
            .
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Choosing the communication link
          </h2>
          <p>
            Because the boundary lives on the collar, the radio link is for management, not real-time
            control: pushing new boundaries, reporting position summaries, cue counts and battery state. That
            changes the trade-off. Cellular LTE-M or NB-IoT works wherever there is coverage and needs no
            farm infrastructure. LoRaWAN needs a gateway on the farm but costs less energy per message and
            works where there is no cellular signal. Some systems use their own base station. Our{" "}
            <Link href="/blog/gnss-lora-vs-gnss-ltem" className="font-semibold text-[var(--ts-dark-green)] hover:underline">
              GNSS + LoRa vs. GNSS + LTE-M comparison
            </Link>{" "}
            goes through those options for tracking devices in general.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Mechanical design: a collar is a harsh place for electronics
          </h2>
          <p>
            Collars are rained on, rubbed against posts and troughs, covered in mud and exposed to frost and
            sun. The enclosure needs proper sealing (an IP rating that matches the real exposure, not just
            rain), strain relief for anything that flexes, and a strap and buckle that can&apos;t injure the
            animal or snag on vegetation. The electrode contacts for the pulse have to make reliable contact
            through hair without causing skin damage. These are not details to leave for the end of a
            project — they drive the shape of the PCB and the battery.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Regulation differs by country
          </h2>
          <p>
            Commercial virtual fencing systems are already used on farms in several countries, including the
            US and the UK. But the legal position of electrical-stimulus collars for livestock is not the same
            everywhere: for example, Sweden changed its rules to allow virtual fences for cattle, while in
            Germany and Austria such collars are currently not permitted for livestock under animal-welfare
            law. Anyone developing or deploying a system should check the current national rules for each
            target market before committing to a design — they can affect not only whether a product can be
            sold, but which features (pulse, audio only, logging) it needs.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            What to decide before building a virtual fencing collar
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Species and animal size — cattle, sheep and goats need different collar sizes and cue levels.</li>
            <li>Required battery life and whether solar charging is realistic for your latitude and season.</li>
            <li>Connectivity on the target farms: cellular coverage, or a farm-owned LoRaWAN gateway.</li>
            <li>Paddock types: open pasture or tree cover and slopes that limit GNSS accuracy.</li>
            <li>Target markets and their animal-welfare rules.</li>
            <li>What data the farmer actually needs to see: positions, cue counts, alarms, battery state.</li>
          </ul>
          <p>
            Each of these choices changes the hardware, so they are worth settling at the requirements stage
            rather than discovering them after the first prototype.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
            Frequently asked questions
          </h2>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Does a virtual fence replace perimeter fencing?
          </h3>
          <p>
            Usually not. Extension guidance generally recommends keeping a physical boundary fence along roads, neighbouring land and other high-risk edges, and using virtual fencing inside it — for rotational grazing, protecting sensitive areas such as streams or regrowth, or dividing large paddocks without building permanent fences. The physical perimeter is the safety net if a collar fails or an animal does not respond.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            How long does it take animals to learn a virtual fence?
          </h3>
          <p>
            Published farmer and extension accounts describe a training period of days rather than weeks, but it varies with species, age, herd behaviour and how the training is run. A common approach is to introduce the virtual boundary next to an existing physical fence, so animals learn to link the audio cue with the boundary before the physical fence is removed. The cue log is the best way to see when animals have learned — corrections should drop off quickly.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            What happens if a collar&apos;s battery runs out or it loses GNSS?
          </h3>
          <p>
            A well-designed collar fails safe: with an empty battery or unreliable position, it stops giving cues rather than guessing. That means the animal is no longer contained by that collar, which is why low-battery warnings well in advance, clear alarms for lost positioning, and a physical perimeter all matter. Battery state should be visible for every animal, not just as a herd average.
          </p>
          <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[var(--ts-navy)]">
            Does virtual fencing work for sheep and goats as well as cattle?
          </h3>
          <p>
            Some commercial systems are offered for sheep and goats as well as cattle. Smaller animals need lighter collars, different fitting, and cue levels adjusted to the species. Body size also affects how much room there is for a battery and solar panel, so battery-life targets are usually harder to reach for small ruminants than for cattle.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--ts-navy)]/10 pt-6 text-sm text-[var(--ts-gray)]">
          Working on a virtual fencing or livestock tracking product?{" "}
          <Link href="/contact" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Tell us about your project</Link> —
          collar electronics, GNSS and power design can be developed to your requirements. See also{" "}
          <ArticleServiceLink locale="en" href="/virtual-fencing" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Virtual Fencing</ArticleServiceLink> and{" "}
          <ArticleServiceLink locale="en" href="/animal-tracking" className="font-semibold text-[var(--ts-dark-green)] hover:underline">Animal Tracking</ArticleServiceLink>.
        </p>
      </article>

      <CTABanner
        heading="Developing a Virtual Fencing Collar?"
        description="Share your species, target markets and battery-life goal — we'll help you work through GNSS, cue logic and power design."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Virtual Fencing"
        secondaryHref="/virtual-fencing"
        secondaryLocale="en"
      />
    </>
  );
}
