import BattleCard from "@/components/BattleCard";
import { API } from "@/const/api";
import { formatDistance } from "date-fns";
import Image from "next/image";

export default async function BattleInformation({
  battle,
}: {
  battle: Battle;
}) {
  const playersId = Object.keys(battle.players);

  return (
    <>
      <div className="flex items-center justify-center border text-center py-5 gap-10">
        <BattleCard>
          <div>Total Players: {playersId.length}</div>
          <div>Total Kills: {battle.totalKills}</div>
        </BattleCard>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={API.ICONS.SKULL}
            alt="Representative skull battle"
            width={200}
            height={200}
            className="max-w-24"
          />
          <div className="text-lg">SLAUGHTER</div>
          <div className="text-xs">
            {battle.startTime.slice(0, 10) +
              " " +
              battle.startTime.slice(11, 19)}
          </div>
        </div>
        <BattleCard>
          <div>
            Duration:{" "}
            {formatDistance(
              new Date(battle.startTime),
              new Date(battle.endTime),
              {
                includeSeconds: true,
              }
            )}
          </div>
          <div>Fame: {battle.totalFame.toLocaleString()}</div>
        </BattleCard>
      </div>
    </>
  );
}
