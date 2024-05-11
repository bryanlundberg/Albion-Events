import PlayerItemSet from "@/components/PlayerItemSet";
import { API } from "@/const/api";
import Image from "next/image";
import Link from "next/link";
import LinkLabel from "./LinkItem";

export default function CardPlayer({
  title,
  subtitle,
  player,
}: {
  title: string;
  subtitle: string;
  player: Player;
}) {
  const categoriesNames = Object.keys(player.Equipment);
  const categories = Object.values(player.Equipment);
  const renderPlayerSet = categories.map((item, index) => {
    if (item === null) return null;
    // console.log();
    return (
      <PlayerItemSet
        key={`${item.Type}.png${item.Type}item${item.Quality}`}
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={item.Type}
        item={categoriesNames[index]}
      />
    );
  });
  return (
    <>
      <div className="relative mt-5">
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">{title}</div>
          <LinkLabel href={`/players/${player.Id}`} label={subtitle} />
        </div>

        <Image
          alt=""
          width={1000}
          height={1000}
          className="max-w-xs"
          src={
            "https://assets.albiononline.com/assets/images/killboard/gear.png?u4c23e9c2"
          }
        />

        {renderPlayerSet}
      </div>
    </>
  );
}
