import { MapPin, Radio } from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const houses: { name: string; metric: string; value: string; status: "normal" | "warning" }[] = [
  { name: "Stall 01", metric: "Temperatur", value: "25,2 °C", status: "normal" },
  { name: "Stall 02", metric: "Temperatur", value: "26,1 °C", status: "normal" },
  { name: "Stall 03", metric: "Temperatur", value: "29,8 °C", status: "warning" },
  { name: "Stall 04", metric: "Wasserstand", value: "21 %", status: "warning" },
];

const mapNodes = [
  { top: "22%", left: "18%", label: "Stall 01" },
  { top: "22%", left: "50%", label: "Stall 02" },
  { top: "22%", left: "82%", label: "Stall 03", warn: true },
  { top: "70%", left: "34%", label: "Stall 04", warn: true },
  { top: "70%", left: "68%", label: "Gateway" },
];

const statusStyles = {
  normal: "border-[var(--ts-accent)]/25 bg-[var(--ts-accent)]/10 text-[var(--ts-accent)]",
  warning: "border-amber-400/25 bg-amber-400/10 text-amber-300",
};

export default function PoultryMultiHouseMonitoring() {
  return (
    <section aria-labelledby="poultry-multihouse-heading" className="bg-[var(--ts-dark-green)]/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Überwachung mehrerer Ställe</Eyebrow>
          <h2 id="poultry-multihouse-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
            Ein Dashboard. Mehrere Geflügelställe.
          </h2>
          <p className="mt-4 text-lg text-[var(--ts-gray)]">
            Skaliert von einem einzelnen Stall bis zu mehreren Ställen,
            mehreren Betrieben und vielen Sensorknoten und Gateways.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* Facility map */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--ts-navy)] shadow-xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {mapNodes.map((n) => (
              <div key={n.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5" style={{ top: n.top, left: n.left }}>
                <span className="relative flex h-3 w-3">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${n.warn ? "bg-amber-400" : "bg-[var(--ts-accent)]"}`} />
                  <span className={`relative inline-flex h-3 w-3 rounded-full ${n.warn ? "bg-amber-400" : "bg-[var(--ts-accent)]"}`} />
                </span>
                <span className="whitespace-nowrap rounded-full bg-black/40 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                  {n.label}
                </span>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
              Betriebslayout — Beispielansicht
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <Radio className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
              4 Ställe verbunden
            </div>
          </div>

          {/* House status cards */}
          <div className="grid grid-cols-2 gap-3">
            {houses.map((house) => (
              <div key={house.name} className="rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-4 shadow-[0_1px_2px_rgba(14,27,38,0.04)]">
                <span className="text-xs font-bold uppercase tracking-wide text-[var(--ts-navy)]">{house.name}</span>
                <p className="mt-2 text-lg font-bold text-[var(--ts-navy)]">{house.value}</p>
                <p className="text-[11px] text-[var(--ts-gray)]">{house.metric}</p>
                <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${statusStyles[house.status]}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                  {house.status === "normal" ? "Normal" : "Warnung"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[var(--ts-gray)]">
          Beispielwerte dienen nur zur Veranschaulichung.
        </p>
      </div>
    </section>
  );
}
