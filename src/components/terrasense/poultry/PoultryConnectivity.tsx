import Link from "next/link";
import Eyebrow from "@/components/terrasense/Eyebrow";

const protocols = ["Wi-Fi", "LoRa / LoRaWAN", "Ethernet", "BLE", "LTE / Cellular", "RS485", "Modbus"];

export default function PoultryConnectivity() {
  return (
    <section aria-labelledby="poultry-connectivity-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Connectivity</Eyebrow>
          <h2 id="poultry-connectivity-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choosing the Right Wireless Technology for Your Farm
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Wireless poultry technology covers the sensors, radios, and
            gateways that move house conditions off-site without running new
            cabling through an active structure. There&apos;s no single
            correct protocol — the right one depends on the building and the
            site.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {protocols.map((p) => (
            <span key={p} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
              {p}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-sm leading-relaxed text-white/70 sm:grid-cols-2">
          <p>
            <strong className="text-white">LoRa / LoRaWAN</strong> generally
            performs best on large or multi-house sites: low power and long
            range, with better penetration through metal cladding than Wi-Fi
            — well suited to periodic readings like temperature and humidity
            rather than high-bandwidth data.
          </p>
          <p>
            <strong className="text-white">Wi-Fi</strong> is a practical
            choice where a site already has network coverage and shorter
            distances between nodes and gateway, particularly when
            integration with existing IT infrastructure matters more than
            maximum range.
          </p>
          <p>
            <strong className="text-white">LTE / Cellular</strong> covers
            remote sites without existing network infrastructure, or serves
            as a gateway&apos;s backhaul to the cloud where no wired internet
            connection is available.
          </p>
          <p>
            <strong className="text-white">RS485 / Modbus</strong> (wired)
            remains a reliable fallback on retrofits where a house already
            has a control backbone in place, rather than something to
            replace just for its own sake.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          Connectivity is selected according to farm size, building layout,
          internet availability, required range, power availability, and
          data requirements — not applied as a one-size-fits-all default.
          For a deeper technical walkthrough of protocol selection, sensor
          placement, and gateway planning, see our engineering note on{" "}
          <Link href="/blog/wireless-poultry-monitoring-design" className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
            planning a wireless poultry house monitoring network
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
