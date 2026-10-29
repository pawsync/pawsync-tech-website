import Link from "next/link";
import Eyebrow from "@/components/terrasense/Eyebrow";

const protocols = ["Wi-Fi", "LoRa / LoRaWAN", "Ethernet", "BLE", "LTE / Cellulaire", "RS-485", "Modbus"];

export default function PoultryConnectivity() {
  return (
    <section aria-labelledby="poultry-connectivity-heading" className="bg-[var(--ts-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Connectivité</Eyebrow>
          <h2 id="poultry-connectivity-heading" className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choisir la bonne technologie sans fil pour votre exploitation
          </h2>
          <p className="mt-4 text-lg text-white/60">
            La technologie avicole sans fil regroupe les capteurs, radios et
            passerelles qui transmettent les conditions du bâtiment à distance,
            sans tirer de nouveaux câbles dans un bâtiment occupé. Il n&apos;existe
            pas de protocole idéal unique — le bon choix dépend du bâtiment et du
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
            <strong className="text-white">LoRa / LoRaWAN</strong> est généralement le plus adapté aux grands sites ou aux sites à plusieurs bâtiments : faible consommation et longue portée, avec une meilleure pénétration des bardages métalliques que le Wi-Fi — idéal pour des mesures périodiques comme la température et l&apos;humidité plutôt que pour des données à haut débit.
          </p>
          <p>
            <strong className="text-white">Wi-Fi</strong> est un choix pratique lorsque le site dispose déjà d&apos;une couverture réseau et que les distances entre capteurs et passerelle sont courtes, notamment si l&apos;intégration à l&apos;infrastructure informatique existante compte davantage que la portée maximale.
          </p>
          <p>
            <strong className="text-white">LTE / Cellulaire</strong> couvre les sites isolés sans infrastructure réseau, ou sert de liaison de la passerelle vers le cloud lorsqu&apos;aucune connexion internet filaire n&apos;est disponible.
          </p>
          <p>
            <strong className="text-white">La communication RS-485/Modbus</strong> (filaire) reste une solution fiable en rénovation lorsque le bâtiment est déjà équipé d&apos;un câblage de régulation — inutile de la remplacer pour le principe.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          La connectivité est choisie selon la taille de l&apos;exploitation,
          la disposition des bâtiments, la disponibilité d&apos;Internet, la
          portée requise, la disponibilité de l&apos;alimentation et les
          besoins en données — et non appliquée comme solution unique par
          défaut.
          Pour une présentation technique plus détaillée du choix des
          protocoles, du placement des capteurs et de la planification des
          passerelles, consultez notre article sur la{" "}
          <Link href="/fr/blog/wireless-poultry-monitoring-design" className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
            planification d&apos;un réseau de surveillance sans fil pour bâtiment avicole
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
