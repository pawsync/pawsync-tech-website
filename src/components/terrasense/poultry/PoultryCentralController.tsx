import {
  Cpu,
  DoorOpen,
  Droplets,
  Fan,
  Flame,
  Gauge,
  Lightbulb,
  PlugZap,
  Settings2,
  Siren,
  Snowflake,
  Thermometer,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const connectedSystems: { icon: LucideIcon; label: string }[] = [
  { icon: Thermometer, label: "Temperature" },
  { icon: Droplets, label: "Humidity" },
  { icon: Wind, label: "Air Quality" },
  { icon: Fan, label: "Ventilation" },
  { icon: Flame, label: "Heating" },
  { icon: Snowflake, label: "Cooling" },
  { icon: Lightbulb, label: "Lighting" },
  { icon: Settings2, label: "Feed" },
  { icon: Waves, label: "Water" },
  { icon: Gauge, label: "Pumps" },
  { icon: Fan, label: "Fans" },
  { icon: Cpu, label: "Motors" },
  { icon: DoorOpen, label: "Doors" },
  { icon: PlugZap, label: "Power Monitoring" },
  { icon: Siren, label: "Alarms" },
];

const ioLabels = [
  { label: "Sensor Inputs", pos: "top-4 left-4" },
  { label: "Relay / Control Outputs", pos: "top-4 right-4" },
  { label: "RS485", pos: "bottom-16 left-4" },
  { label: "Wi-Fi", pos: "bottom-16 right-4" },
  { label: "LoRa", pos: "bottom-4 left-4" },
  { label: "Ethernet", pos: "bottom-4 right-4" },
];

export default function PoultryCentralController() {
  return (
    <section aria-labelledby="poultry-controller-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Central Controller</Eyebrow>
        <h2 id="poultry-controller-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Control Multiple Farm Systems From One Platform
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          A concept for a central PawSync Poultry Controller, connecting
          the sensors, equipment and systems across a house or farm.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
        {/* Controller hardware mockup */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[var(--ts-navy)] p-6 shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Board body */}
          <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ts-accent)]/15">
                <Cpu className="h-7 w-7 text-[var(--ts-accent)]" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-white">Poultry Controller</span>
              <div className="mt-1 flex gap-1.5">
                {["LTE / Cellular", "Local Display", "Status LEDs"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {ioLabels.map((io) => (
            <span
              key={io.label}
              className={`absolute rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm ${io.pos}`}
            >
              {io.label}
            </span>
          ))}
        </div>

        {/* Connected systems */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--ts-green)]">Connected Systems</p>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {connectedSystems.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 rounded-xl border border-[var(--ts-navy)]/8 bg-white p-3 text-center shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <s.icon className="h-4 w-4 text-[var(--ts-dark-green)]" aria-hidden="true" />
                <span className="text-[10px] font-medium text-[var(--ts-navy)]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-[var(--ts-gray)]">
        <strong className="font-semibold text-[var(--ts-navy)]">Example System Architecture</strong> — this
        illustrates the kind of platform we can design and build; it
        represents a product concept, not an existing, off-the-shelf
        commercial product.
      </p>
    </section>
  );
}
