"use client";
import Item from "@/components/Item";
import { API } from "@/const/api";
import genKey from "@/functions/genKey";
import LinkLabel from "./LinkItem";
import BattleItemSet from "./BattleItemSet";
import { useEffect } from "react";

export default function BattleStar({
  category,
  playerName,
  score,
  equipment,
  playerId,
}: {
  category: any;
  playerName: string;
  score: any;
  equipment: any;
  playerId: string;
}) {
  console.log(equipment);
  // const gearItems = [0, null, 2, 3, 4, null, 7, null, null, null];

  const gearItems = Object.keys(equipment);

  useEffect(() => {
    console.log(equipment);
  }, [equipment]);

  const renderPlayerItems = () => {};
  // const renderPlayerItems = () => {
  //   if (Array.isArray(equipment)) {
  //     return equipment.map((item, index) => {
  //       if (gearItems[index] !== null) {
  //         return (
  //           <Item
  //             alt={`${item.Type}`}
  //             url={
  //               item.Type !== ""
  //                 ? `${API.ITEM}${item.Type}.png?count=${1}&quality=${
  //                     item.Quality
  //                   }`
  //                 : `${API.ICONS.EMPTY_SLOT}`
  //             }
  //             key={genKey()}
  //           />
  //         );
  //       }
  //       return null;
  //     });
  //   } else {
  //     return (
  //       <>
  //         <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
  //         <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
  //         <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
  //         <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
  //         <Item key={genKey()} alt="EMPTY SLOT" url={API.ICONS.EMPTY_SLOT} />
  //       </>
  //     );
  //   }
  // };

  return (
    <div className="border p-5">
      <div className="flex items-center justify-between">
        <div className="text-lg">{category}</div>
        <div>ICON</div>
      </div>
      <div className="flex items-center justify-between">
        <LinkLabel href={`/players/${playerId}`} label={playerName} />

        <div className="player-score">{score}</div>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-5 relative">
        {renderPlayerItems()}
      </div>
    </div>
  );
}
