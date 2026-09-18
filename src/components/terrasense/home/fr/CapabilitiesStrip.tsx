const groups: { label: string; items: string[] }[] = [
  {
    label: "Électronique",
    items: ["Systèmes embarqués", "Ingénierie PCB", "Gestion de l'alimentation", "Intégration de capteurs"],
  },
  {
    label: "Connectivité",
    items: ["GPS / GNSS", "LoRa / LoRaWAN", "BLE", "Wi-Fi", "LTE", "RFID / NFC", "UWB"],
  },
  {
    label: "Développement produit",
    items: ["Développement de prototypes", "Micrologiciel", "Tests", "Préparation à la production"],
  },
];

export default function CapabilitiesStrip() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-[var(--ts-navy)] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="capabilities-heading"
          className="text-center text-sm font-semibold uppercase tracking-widest text-white/50"
        >
          Compétences techniques
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="border-t border-white/10 pt-5 text-center sm:text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ts-accent)]">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:justify-start">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
