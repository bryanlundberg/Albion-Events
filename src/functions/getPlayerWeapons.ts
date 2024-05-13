"use server";
import { API } from "../const/api";

export default async function getPlayerWeapons({
  playerName,
  lookbackDays = 9999,
}: {
  playerName: string;
  lookbackDays?: number;
}) {
  try {
    const request = await fetch(
      `${API.MURDERLEDGER}${playerName}/stats/weapons?lookback_days=${lookbackDays}`,
      { cache: "no-store" }
    );
    if (!request.ok) {
      throw new Error(
        "We couldn't locate the player weapons on the server at the moment."
      );
    }
    return await request.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
