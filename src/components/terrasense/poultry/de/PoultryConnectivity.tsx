import Link from "next/link";
import Eyebrow from "@/components/terrasense/Eyebrow";

const protocols = ["Wi-Fi", "LoRa / LoRaWAN", "Ethernet", "BLE", "LTE / Mobilfunk", "RS485", "Modbus"];

export default function PoultryConnectivity() {
  return (
    <section aria-labelledby="poultry-connectivity-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Konnektivität</Eyebrow>
          <h2 id="poultry-connectivity-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Die passende Funktechnik für Ihren Betrieb wählen
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Drahtlose Geflügeltechnik umfasst die Sensoren, Funkmodule und
            Gateways, die Stalldaten nach außen übertragen, ohne neue Kabel durch
            ein belegtes Gebäude zu ziehen. Ein einzig richtiges Protokoll gibt
            es nicht – die Wahl hängt von Gebäude und Standort ab.
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
            <strong className="text-white">LoRa / LoRaWAN</strong> eignet sich in der Regel am besten für große Standorte oder mehrere Ställe: geringer Energiebedarf und große Reichweite, mit besserer Durchdringung von Metallverkleidungen als Wi-Fi – gut geeignet für periodische Messwerte wie Temperatur und Luftfeuchtigkeit, weniger für Daten mit hoher Bandbreite.
          </p>
          <p>
            <strong className="text-white">Wi-Fi</strong> ist eine praktikable Wahl, wo ein Standort bereits Netzabdeckung hat und die Abstände zwischen Knoten und Gateway kurz sind – besonders wenn die Einbindung in vorhandene IT wichtiger ist als maximale Reichweite.
          </p>
          <p>
            <strong className="text-white">LTE / Mobilfunk</strong> deckt abgelegene Standorte ohne vorhandene Netzinfrastruktur ab oder dient als Backhaul des Gateways in die Cloud, wo kein kabelgebundener Internetanschluss verfügbar ist.
          </p>
          <p>
            <strong className="text-white">RS485 / Modbus</strong> (kabelgebunden) bleibt bei Nachrüstungen eine verlässliche Lösung, wenn ein Stall bereits einen Feldbus für die Steuerung hat – kein Grund, es nur um seiner selbst willen zu ersetzen.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          Die Konnektivität wird nach Betriebsgröße, Gebäudelayout,
          Internetverfügbarkeit, benötigter Reichweite, Stromverfügbarkeit
          und Datenanforderungen ausgewählt – nicht als pauschale
          Standardlösung angewendet.
          Eine ausführlichere technische Darstellung zu Protokollwahl,
          Sensorplatzierung und Gateway-Planung finden Sie in unserem Beitrag
          zur{" "}
          <Link href="/de/blog/wireless-poultry-monitoring-design" className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
            Planung eines drahtlosen Überwachungsnetzes im Geflügelstall
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
