"use server";
import { API } from "@/const/api";

export default async function getPlayer({
  playerId,
}: {
  playerId: string;
}): Promise<Player> {
  try {
    const response = await fetch(`${API.STATS}${playerId}`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch player info: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching player info for ID ${playerId}:`, error);
    throw error;
  }
}
