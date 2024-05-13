import Card from "@/components/Card";
import CombatDetails from "@/components/CombatDetails";

export default function EventInfo({ event }: { event: OverallEvent }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-3 mt-5">
        <Card
          title={event.Killer.AverageItemPower.toFixed(0)}
          subTitle={"Killer Item Power"}
        />
        <Card
          title={event.TotalVictimKillFame.toLocaleString()}
          subTitle={"Dropped Fame Points"}
        />
        <Card
          title={event.Victim.AverageItemPower.toFixed(0)}
          subTitle={"Victim Item Power"}
        />
      </div>
      <CombatDetails event={event} />
    </>
  );
}
