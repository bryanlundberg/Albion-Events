import "@/stylesheets/CardPlayer.css";
import PlayerItemSet from "@/components/PlayerItemSet";
import { API } from "@/const/api";
import Link from "next/link";

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
    return (
      <PlayerItemSet
        key={`${item.Type}.png${item.Type}item${item.Quality}`}
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={item.Type}
        extraClassName={"position-" + categoriesNames[index].toLowerCase()}
      />
    );
  });
  return (
    <>
      <div className="card-player">
        <div className="player-info">
          <div className="player-info-title">{title}</div>
          <Link href={`/players/${player.Id}`} className="player-info-subtitle">
            {subtitle}
          </Link>
        </div>
        <div className="player-set">{renderPlayerSet}</div>
      </div>
    </>
  );
}
