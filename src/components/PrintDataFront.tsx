"use client";

import createBattlePlayersList from "@/functions/createBattlePlayersList";
import getBattleFullEvents from "@/functions/getBattleFullEvents";
import { setDefaultPlayers } from "@/functions/updatePlayer";
import { getBattle } from "@/loaders/getBattle";
import { useEffect, useState } from "react";

export default function PrintDataFront() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function getData() {
      try {
        // 1. Gets the overall battle info
        const battle = await getBattle({ battleId: "1035545242" });

        console.log(battle);

        // 2. Gets the full list of single events in the battle
        const killBoard = await getBattleFullEvents({ battle: battle });

        console.log(killBoard);

        // 3. Adds some default values to all objects of each player
        const defaultPlayerList = setDefaultPlayers({ battle: battle });

        console.log(defaultPlayerList);

        // 4. Definitive players data distribution to be used
        const players = await createBattlePlayersList({
          killBoard: killBoard,
          players: defaultPlayerList,
        });

        console.log(players);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);
  return <></>;
}
