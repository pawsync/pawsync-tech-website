import { Droplets, DoorOpen, HeartPulse, Satellite, type LucideIcon } from "lucide-react";

interface Device {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: string;
}

const devices: Device[] = [
  {
    id: "gps-trackers",
    icon: Satellite,
    title: "GPS & Activity Trackers",
    description:
      "Lightweight collar-mounted trackers help reunite lost pets quickly and give adopters an easy way to monitor daily activity.",
    points: ["Real-time location", "Daily activity & exercise logs", "Lost-pet alerts"],
    accent: "teal",
  },
  {
    id: "smart-feeders",
    icon: Droplets,
    title: "Smart Feeders & Hydration",
    description:
      "Automated feeders and water monitors keep meals on schedule and flag when an animal isn't eating or drinking normally.",
    points: ["Scheduled portion control", "Water intake monitoring", "Low-supply alerts"],
    accent: "orange",
  },
  {
    id: "health-monitors",
    icon: HeartPulse,
    title: "Health & Vitals Monitors",
    description:
      "Wearable sensors track temperature, heart rate, and rest patterns, helping our vet partners catch problems earlier.",
    points: ["Temperature & heart rate", "Rest & recovery tracking", "Early illness signals"],
    accent: "rose",
  },
  {
    id: "smart-shelters",
    icon: DoorOpen,
    title: "Smart Shelters & Doors",
    description:
      "Climate-aware shelters and app-controlled doors give foster and shelter animals safer, more comfortable spaces.",
    points: ["Temperature-controlled housing", "App-controlled access", "Remote check-ins"],
    accent: "amber",
  },
];

const accentClasses: Record<
  string,
  { bg: string; text: string; ring: string; dot: string }
> = {
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/40",
    text: "text-teal-700 dark:text-teal-300",
    ring: "group-hover:ring-teal-300",
    dot: "bg-teal-600 dark:bg-teal-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/40",
    text: "text-orange-700 dark:text-orange-300",
    ring: "group-hover:ring-orange-300",
    dot: "bg-orange-600 dark:bg-orange-400",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/40",
    text: "text-rose-700 dark:text-rose-300",
    ring: "group-hover:ring-rose-300",
    dot: "bg-rose-600 dark:bg-rose-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/40",
    text: "text-amber-700 dark:text-amber-300",
    ring: "group-hover:ring-amber-300",
    dot: "bg-amber-600 dark:bg-amber-400",
  },
};

export default function PetTechDevices() {
  return (
    <section
      id="pet-tech-devices"
      aria-labelledby="pet-tech-devices-heading"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="pet-tech-devices-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
        >
          Devices that help, not complicate
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Simple, reliable electronics our team uses to keep animals safer
          and easier to care for.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {devices.map((device) => {
          const Icon = device.icon;
          const accent = accentClasses[device.accent];
          return (
            <article
              key={device.id}
              id={device.id}
              className={`group flex scroll-mt-24 flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${accent.ring} dark:border-stone-800 dark:bg-stone-900`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-7 w-7 ${accent.text}`} aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 dark:text-stone-50">
                {device.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                {device.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-stone-600 dark:text-stone-400">
                {device.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
