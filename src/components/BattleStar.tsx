import Item from "@/components/Item";
import { API } from "@/const/api";
import genKey from "@/functions/genKey";
import LinkLabel from "./LinkItem";
import BattleItemSet from "./BattleItemSet";

export default function BattleStar({
  category,
  player,
  score,
}: {
  category: string;
  player: BattlePlayerExtended;
  score: any;
}) {
  let gearItems: (keyof Equipment)[];

  if (player.equipment) {
    const keys = Object.keys(player.equipment) as (keyof Equipment)[];
    gearItems = keys;
  }

  const renderPlayerItems = () => {
    if (gearItems === undefined || gearItems.length === 0) {
      return [1, 2, 3, 4, 5].map((item) => (
        <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
      ));
    }

    return gearItems.map((key) => {
      const item = player.equipment[key];

      if (
        key === "Mount" ||
        key === "Food" ||
        key === "OffHand" ||
        key === "Bag" ||
        key === "Potion"
      ) {
        // Skips this keys
        return null;
      }
      if (item?.Type) {
        return (
          <BattleItemSet
            key={genKey()}
            url={`${API.ITEM}${item.Type}.png?count=${1}&quality=${
              item.Quality
            }`}
            alt=""
            item={key}
          />
        );
      }
      return (
        <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
      );
    });
  };

  return (
    <div className="border p-5">
      <div className="flex items-center justify-between">
        <div className="text-lg">{category}</div>
        <div>ICON</div>
      </div>
      <div className="flex items-center justify-between">
        <LinkLabel href={`/players/${player.id}`} label={player.name} />{" "}
        <span className="text-xs">({player.guildName})</span>
        <div>
          {player[score as keyof BattlePlayerExtended] as React.ReactNode}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-5 relative">
        {renderPlayerItems()}
      </div>
    </div>
  );
}
