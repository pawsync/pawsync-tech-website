import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Battery,
  CircuitBoard,
  Cloud,
  MapPin,
  Radio,
  Satellite,
  Thermometer,
  Wifi,
} from "lucide-react";

const trustIndicators = ["GPS / GNSS", "LoRa", "Bluetooth", "Wi-Fi", "LTE", "RFID", "Custom PCB"];

export default function TerraSenseHero() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden bg-[var(--ts-navy)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--ts-green)]/10 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-16 lg:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--ts-accent)] ring-1 ring-inset ring-white/10">
            <CircuitBoard className="h-4 w-4" aria-hidden="true" />
            Smart Electronics for Animals &amp; Farms
          </span>

          <h1 className="mt-5 font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.75rem]">
            <span className="sm:block">Smart Electronics for </span>
            <span className="sm:block">Animals, Farms &amp; </span>
            <span className="sm:block">Connected Environments</span>
          </h1>

          <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-white/70">
            We design intelligent IoT devices, animal tracking systems, smart
            feeding solutions, health-monitoring technology, virtual fencing
            systems, environmental sensors, and automated farm-control
            electronics.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
            <Link
              href="/terrasense/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--ts-green)] px-6 py-3.5 text-base font-semibold text-[var(--ts-navy)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--ts-accent)] hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--ts-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-navy)]"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/terrasense/solutions"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ts-navy)]"
            >
              Explore Solutions
            </Link>
          </div>

          <div className="mt-9 border-t border-white/10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
              Connected Hardware Expertise
            </p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {trustIndicators.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/70"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="https://images.unsplash.com/photo-1573611236714-1fe596de1fd3?auto=format&fit=crop&w=1100&q=80"
              alt="A tagged calf standing in a green pasture, representing an animal fitted with connected tracking technology"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ts-navy)]/50 via-transparent to-transparent" />
          </div>

          {/* Overlay 1 — live animal tracking card */}
          <div className="absolute bottom-3 left-3 w-52 rounded-2xl border border-white/10 bg-[var(--ts-navy)]/95 p-4 shadow-xl backdrop-blur sm:-bottom-6 sm:-left-8 sm:w-60">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--ts-accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ts-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ts-accent)]" />
                </span>
                Cattle #248 — Live
              </span>
              <Satellite className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            </div>
            <dl className="mt-3 space-y-1.5 text-[11px] text-white/60">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-white/40" aria-hidden="true" />Location</span>
                <span className="font-medium text-white/80">Pasture A</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>Geofence</span>
                <span className="font-medium text-[var(--ts-accent)]">Inside Zone</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>Activity</span>
                <span className="font-medium text-white/80">Normal</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><Battery className="h-3 w-3 text-white/40" aria-hidden="true" />Battery</span>
                <span className="font-medium text-white/80">82%</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><Wifi className="h-3 w-3 text-white/40" aria-hidden="true" />Signal</span>
                <span className="font-medium text-white/80">Strong</span>
              </div>
            </dl>
            <p className="mt-2 border-t border-white/10 pt-2 text-[10px] text-white/40">Last update: 12 sec ago</p>
          </div>

          {/* Overlay 2 — environmental sensor card */}
          <div className="absolute top-3 right-3 w-44 rounded-2xl border border-white/10 bg-[var(--ts-navy)]/95 p-3.5 shadow-xl backdrop-blur sm:-top-5 sm:-right-6 sm:w-52">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white/80">Barn Sensor 04</span>
              <Cloud className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            </div>
            <dl className="mt-2.5 space-y-1.5 text-[11px] text-white/60">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><Thermometer className="h-3 w-3 text-white/40" aria-hidden="true" />Temperature</span>
                <span className="font-medium text-white/80">24.6°C</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>Humidity</span>
                <span className="font-medium text-white/80">61%</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><Activity className="h-3 w-3 text-white/40" aria-hidden="true" />Air Quality</span>
                <span className="font-medium text-[var(--ts-accent)]">Good</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5"><Radio className="h-3 w-3 text-white/40" aria-hidden="true" />Gateway</span>
                <span className="font-medium text-[var(--ts-accent)]">Online</span>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
