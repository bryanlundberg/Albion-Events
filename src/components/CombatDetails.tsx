import CardPlayer from "@/components/CardPlayer";
import Inventory from "@/components/Inventory";

export default function CombatDetails({ event }: { event: OverallEvent }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <CardPlayer
          player={event.Killer}
          title={"Killer"}
          subtitle={`${event.Killer.Name} - [${event.Killer.GuildName}]`}
        />
        <CardPlayer
          player={event.Victim}
          title={"Victim"}
          subtitle={`${event.Victim.Name} - [${event.Victim.GuildName}]`}
        />
      </div>

      <Inventory victimInventory={event.Victim.Inventory} />
    </>
  );
}
