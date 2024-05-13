import DataStats from "@/components/DataStats";

export default function GearStats({
  weapon,
  current,
}: {
  weapon: WeaponStat;
  current: number | string;
}) {
  return (
    <>
      <DataStats title={"Current:"} stat={current} />
      <DataStats title={"Usages:"} stat={weapon.usages.toLocaleString()} />
      <DataStats
        title={"Average IP:"}
        stat={weapon.average_item_power.toFixed(0)}
      />
      <DataStats
        title={"Kill Fame:"}
        stat={weapon.kill_fame.toLocaleString()}
      />
      <DataStats title={"Kills:"} stat={weapon.kills.toLocaleString()} />
      <DataStats title={"Assists:"} stat={weapon.assists.toLocaleString()} />
      <DataStats
        title={"Win rate:"}
        stat={`${(weapon.win_rate * 100).toFixed(2)}%`}
      />
    </>
  );
}
