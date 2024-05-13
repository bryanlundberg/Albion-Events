import DataStats from "@/components/DataStats";

export default function PlayerStats({ player }: { player: any }) {
  const totalFame: number =
    0 +
    player.KillFame +
    player.LifetimeStatistics.Crafting.Total +
    player.LifetimeStatistics.FarmingFame +
    player.LifetimeStatistics.FishingFame +
    player.LifetimeStatistics.Gathering.All.Total +
    player.LifetimeStatistics.PvE.Total;

  return (
    <>
      <DataStats title={"Total Fame:"} stat={totalFame.toLocaleString()} />
      <DataStats title={"PvP Fame:"} stat={player.KillFame.toLocaleString()} />
      <DataStats
        title={"PvE Fame:"}
        stat={player.LifetimeStatistics.PvE.Total.toLocaleString()}
      />
      <DataStats
        title={"Avalon:"}
        stat={player.LifetimeStatistics.PvE.Avalon.toLocaleString()}
      />
      <DataStats
        title={"Corrupted Dungeon:"}
        stat={player.LifetimeStatistics.PvE.CorruptedDungeon.toLocaleString()}
      />
      <DataStats
        title={"Hellgate:"}
        stat={player.LifetimeStatistics.PvE.Hellgate.toLocaleString()}
      />
      <DataStats
        title={"Mists:"}
        stat={player.LifetimeStatistics.PvE.Mists.toLocaleString()}
      />
      <DataStats
        title={"Outlands:"}
        stat={player.LifetimeStatistics.PvE.Outlands.toLocaleString()}
      />
      <DataStats
        title={"Royal:"}
        stat={player.LifetimeStatistics.PvE.Royal.toLocaleString()}
      />
      <DataStats
        title={"Crafting Fame:"}
        stat={player.LifetimeStatistics.Crafting.Total.toLocaleString()}
      />
      <DataStats
        title={"Fishing Fame:"}
        stat={player.LifetimeStatistics.FishingFame.toLocaleString()}
      />
      <DataStats
        title={"All Gathering Fame:"}
        stat={player.LifetimeStatistics.Gathering.All.Total.toLocaleString()}
      />
      <DataStats
        title={"Gather Fiber:"}
        stat={player.LifetimeStatistics.Gathering.Fiber.Total.toLocaleString()}
      />
      <DataStats
        title={"Gather Hide:"}
        stat={player.LifetimeStatistics.Gathering.Hide.Total.toLocaleString()}
      />
      <DataStats
        title={"Gather Ore:"}
        stat={player.LifetimeStatistics.Gathering.Ore.Total.toLocaleString()}
      />
      <DataStats
        title={"Gather Rock"}
        stat={player.LifetimeStatistics.Gathering.Rock.Total.toLocaleString()}
      />
      <DataStats
        title={"Gather Wood:"}
        stat={player.LifetimeStatistics.Gathering.Wood.Total.toLocaleString()}
      />
    </>
  );
}
