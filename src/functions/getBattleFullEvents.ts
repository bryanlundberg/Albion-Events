"use server";
import { API } from "@/const/api";

export default async function getBattleFullEvents({
  battle,
}: {
  battle: Battle;
}): Promise<OverallEvent[]> {
  let killsOffset: number = 0;
  let killBoard: OverallEvent[] = [];

  while (killsOffset <= battle.totalKills) {
    const request = await fetch(
      `${API.BATTLES.HISTORY}${battle.id}?offset=${killsOffset}&limit=51`,
      { cache: "no-store" }
    );

    if (!request.ok) {
      throw new Error("Failed to fetch battle events.");
    }
    const events = await request.json();

    killBoard = [...killBoard, ...events];
    killsOffset += 51;
  }

  return killBoard;
}
