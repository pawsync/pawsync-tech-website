const protocols = ["Wi-Fi", "LoRa / LoRaWAN", "Ethernet", "BLE", "LTE / Mobilfunk", "RS485", "Modbus"];

export default function PoultryConnectivity() {
  return (
    <section aria-labelledby="poultry-connectivity-heading" className="bg-[var(--ts-navy)] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="poultry-connectivity-heading" className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
          Konnektivität, abgestimmt auf den Betrieb
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {protocols.map((p) => (
            <span key={p} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
              {p}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          Die Konnektivität wird nach Betriebsgröße, Gebäudelayout,
          Internetverfügbarkeit, benötigter Reichweite, Stromverfügbarkeit
          und Datenanforderungen ausgewählt — nicht als pauschale
          Standardlösung angewendet.
        </p>
      </div>
    </section>
  );
}
