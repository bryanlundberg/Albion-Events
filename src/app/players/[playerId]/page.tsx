import Header from "@/components/Header";
import PlayerActivity from "@/components/PlayerActivity";
import PlayerInfo from "@/components/PlayerInfo";
import Link from "next/link";
import type { Metadata } from "next";
import forceSyncPlayerInfo from "@/loaders/forceSyncPlayerInfo";
import PrintDataFront from "@/components/PrintDataFront";

export const metadata: Metadata = {
  title: "Albion Events | Player Performance",
};

export default async function PlayerPage({
  params,
}: {
  params: { playerId: string };
}) {
  // We use this variant function because, normal don't include
  // updated frames/avatars
  const player = await forceSyncPlayerInfo({ playerId: params.playerId });

  return (
    <>
      <div className="max-w-3xl mx-auto px-3">
        <Header title={"Performance Overview"} />
        <Link href="/">return index</Link>
        <div className="flex flex-col sm:flex-row gap-3">
          <PlayerInfo player={player} />
          <PlayerActivity player={player} />
        </div>
        <PrintDataFront />
      </div>
    </>
  );
}
