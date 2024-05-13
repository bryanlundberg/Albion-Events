import { API } from "@/const/api";
import Item from "@/components/Item";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import AvatarPic from "./AvatarPic";
import genKey from "@/functions/genKey";

export default function Contributor({
  player,
  totalDamageDone,
  totalHealingDone,
}: {
  player: Player;
  totalDamageDone: number;
  totalHealingDone: number;
}) {
  const categories = Object.values(player.Equipment);
  const renderSet = categories.map((category, index) => {
    if (category === null) return null;
    if (index === 0)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ); //main weapon
    if (index === 2)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ); //main head
    if (index === 3)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ); //main armor
    if (index === 4)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ); //main shoes
    if (index === 6)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ); //main cape
    return null;
  });

  let percentageDamage: number | string = 0;

  if (isFinite(player.DamageDone) && totalDamageDone !== 0) {
    percentageDamage = ((player.DamageDone / totalDamageDone) * 100).toFixed(1);
  }

  let percentageHealing: number | string = 0;

  if (isFinite(totalHealingDone) && totalHealingDone !== 0) {
    percentageHealing = (
      (player.SupportHealingDone / totalHealingDone) *
      100
    ).toFixed(1);
  }

  return (
    <>
      <div className="border">
        <div className=" flex items-center gap-1">
          <div className="relative min-w-24">
            <AvatarPic
              idAvatar={player.Avatar}
              playerName={player.Name}
              type="avatar"
            />
            <AvatarPic
              idAvatar={player.AvatarRing}
              playerName={player.Name}
              type="frame"
            />
          </div>

          <div className="text-center w-full">
            <Link className="text-sm" href={`/players/${player.Id}`}>
              {player.Name}
            </Link>
            <div className="text-xs">
              Item Power: {player.AverageItemPower.toFixed(0)}
            </div>
            <ProgressBar
              color="red"
              icon={API.ICONS.BATTLE}
              percentage={percentageDamage}
            />
            <ProgressBar
              color="green"
              icon={API.ICONS.HEAL}
              percentage={percentageHealing}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">{renderSet}</div>
      </div>
    </>
  );
}
