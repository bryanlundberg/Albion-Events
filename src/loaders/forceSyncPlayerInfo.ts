"use server";
import { API } from "@/const/api";
import getPlayerEvents from "@/functions/getPlayerEvents";
import getPlayer from "./getPlayer";

export default async function forceSyncPlayerInfo({
  playerId,
}: {
  playerId: string;
}): Promise<Player> {
  try {
    // Fetch the player data
    const player = await getPlayer({ playerId });

    // Fetch the player events
    const playerEvents = await getPlayerEvents({
      playerName: player.Name,
      all: true,
      take: 1,
    });

    // Fetch details of the last event
    const requestLastEventDetail = await fetch(
      `${API.EVENT}${playerEvents.events[0].id}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!requestLastEventDetail.ok) {
      throw new Error(
        "Couldn't retrieve the details of the player's last event from the server."
      );
    }

    const lastEventDetails = await requestLastEventDetail.json();

    // Find the participant matching the player's name in the last event
    const participant: Player = lastEventDetails.Participants.find(
      (p: any) => p.Name === player.Name
    );

    // Update player's avatar and avatar ring based on participant's details
    if (participant) {
      return {
        ...player,
        Avatar: participant.Avatar,
        AvatarRing: participant.AvatarRing,
      };
    }

    // If the player is the killer or victim, update avatar and avatar ring accordingly
    if (lastEventDetails.Killer.Name === player.Name) {
      return {
        ...player,
        Avatar: lastEventDetails.Killer.Avatar,
        AvatarRing: lastEventDetails.Killer.AvatarRing,
      };
    } else if (lastEventDetails.Victim.Name === player.Name) {
      return {
        ...player,
        Avatar: lastEventDetails.Victim.Avatar,
        AvatarRing: lastEventDetails.Victim.AvatarRing,
      };
    }

    // If player not found in the last event, return player with existing avatar and avatar ring
    return player;
  } catch (error) {
    console.error("Error fetching avatar and frame:", error);
    throw error;
  }
}
