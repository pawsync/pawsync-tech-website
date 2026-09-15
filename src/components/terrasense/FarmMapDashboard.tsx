import { MapPin, Radio } from "lucide-react";

const markers = [
  { top: "28%", left: "22%", label: "Herd A · 42 head", tone: "accent" as const },
  { top: "55%", left: "48%", label: "Herd B · 18 head", tone: "accent" as const },
  { top: "70%", left: "74%", label: "Gateway", tone: "gateway" as const },
  { top: "20%", left: "68%", label: "Unit #114", tone: "warn" as const },
];

// A dashboard mockup, not a real map — illustrates what a farm map view of
// tracked animals and zones would show.
export default function FarmMapDashboard() {
  return (
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

      {/* Virtual zone boundary */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[14%] h-[62%] w-[58%] rounded-[2rem] border-2 border-dashed border-[var(--ts-accent)]/50"
      />

      {markers.map((marker) => (
        <div
          key={marker.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ top: marker.top, left: marker.left }}
        >
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                marker.tone === "warn" ? "bg-amber-400" : "bg-[var(--ts-accent)]"
              }`}
            />
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${
                marker.tone === "warn" ? "bg-amber-400" : marker.tone === "gateway" ? "bg-white" : "bg-[var(--ts-accent)]"
              }`}
            />
          </span>
          <span className="whitespace-nowrap rounded-full bg-black/40 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
            {marker.label}
          </span>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
        <MapPin className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
        Farm Map — Sample View
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
        <Radio className="h-3.5 w-3.5 text-[var(--ts-accent)]" aria-hidden="true" />
        4 units connected
      </div>
    </div>
  );
}
