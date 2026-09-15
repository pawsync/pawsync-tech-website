import {
  AlertTriangle,
  CircuitBoard,
  Droplets,
  Fan,
  Flame,
  Lightbulb,
  MonitorSmartphone,
  PlugZap,
  Thermometer,
  UtensilsCrossed,
  Waves,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/terrasense/Eyebrow";

const solutions: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Thermometer, title: "Temperature Monitoring", description: "Monitor environmental temperatures across poultry houses." },
  { icon: Droplets, title: "Humidity Monitoring", description: "Measure and track humidity conditions." },
  { icon: Wind, title: "Air Quality Monitoring", description: "Integrate sensors for relevant environmental parameters such as CO2 and ammonia where appropriate." },
  { icon: Fan, title: "Ventilation Control", description: "Monitor and control fans and ventilation equipment according to configured environmental conditions." },
  { icon: Flame, title: "Heating & Cooling Control", description: "Automate heaters, cooling equipment, fans, and related climate systems." },
  { icon: UtensilsCrossed, title: "Smart Feeding", description: "Monitor feed levels and automate feeding schedules or dispensing equipment." },
  { icon: Droplets, title: "Water Monitoring", description: "Monitor tank levels, water availability, flow, and abnormal conditions." },
  { icon: Waves, title: "Automatic Watering", description: "Control pumps, valves, and watering equipment." },
  { icon: Lightbulb, title: "Lighting Automation", description: "Control poultry-house lighting using schedules or configurable operating rules." },
  { icon: AlertTriangle, title: "Environmental Alerts", description: "Provide alerts when monitored values exceed configured limits." },
  { icon: Wrench, title: "Equipment Monitoring", description: "Monitor fans, pumps, motors, feeders, and other important farm equipment." },
  { icon: PlugZap, title: "Power Failure Monitoring", description: "Detect loss of mains power or selected equipment power conditions." },
  { icon: Zap, title: "Emergency Monitoring", description: "Monitor conditions associated with heat, cold, smoke, flooding, water shortage, and equipment failure." },
  { icon: MonitorSmartphone, title: "Remote Farm Monitoring", description: "View farm status through mobile or web dashboards." },
  { icon: CircuitBoard, title: "Custom Poultry IoT Devices", description: "Design custom hardware around the farm's specific requirements." },
];

export default function PoultrySolutionsOverview() {
  return (
    <section id="solutions" aria-labelledby="poultry-solutions-heading" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Poultry Solutions</Eyebrow>
        <h2
          id="poultry-solutions-heading"
          className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[var(--ts-navy)] sm:text-4xl"
        >
          Connected Technology Across the Poultry Farm
        </h2>
        <p className="mt-4 text-lg text-[var(--ts-gray)]">
          Fifteen problem areas, one engineering team — hardware, firmware
          and connectivity designed around your operation.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3.5 border-b border-[var(--ts-navy)]/8 py-4 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ts-dark-green)]/10 to-[var(--ts-green)]/10">
              <item.icon className="h-5 w-5 text-[var(--ts-dark-green)]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold text-[var(--ts-navy)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ts-gray)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
