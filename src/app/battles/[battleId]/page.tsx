import BattleGuildStatistics from "@/components/BattleGuildStatistics";
import BattleInformation from "@/components/BattleInformation";
import BattleKillHistory from "@/components/BattleKillHistory";
import BattlegroundStars from "@/components/BattlegroundStars";
import Header from "@/components/Header";
import createBattlePlayersList from "@/functions/createBattlePlayersList";
import getBattleFullEvents from "@/functions/getBattleFullEvents";
import { setDefaultPlayers } from "@/functions/updatePlayer";
import { getBattle } from "@/loaders/getBattle";
import Link from "next/link";
import type { Metadata } from "next";
import PrintDataFront from "@/components/PrintDataFront";

export const metadata: Metadata = {
  title: "Albion Events | Lethal Event",
};

export default async function BattlesPage({
  params,
}: {
  params: { battleId: string };
}) {
  // 1. Gets the overall battle info
  const battle = await getBattle({ battleId: params.battleId });

  // 2. Gets the full list of single events in the battle
  const killBoard = await getBattleFullEvents({ battle: battle });

  // 3. Adds some default values to all objects of each player
  const defaultPlayerList = setDefaultPlayers({ battle: battle });

  // 4. Definitive players data distribution to be used
  const players = createBattlePlayersList({
    killBoard: killBoard,
    players: defaultPlayerList,
  });

  return (
    <>
      <div className="max-w-3xl mx-auto px-3">
        <Header title={"BATTLE REPORT"} />
        <Link href="/">return index</Link>

        <p>Battle #{battle.id}</p>

        <BattleInformation battle={battle} />
        <BattlegroundStars players={players} />
        {/* <BattleGuildStatistics battle={battle} /> */}
        {/* <BattleKillHistory battleEvents={killboard} /> */}
      </div>
    </>
  );
}
