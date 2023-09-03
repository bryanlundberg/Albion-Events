import { API } from '@/const/api'
import getPlayerEvents from '@/functions/getPlayerEvents'

export default async function getAvatarAndFrame({ player }: { player: any }) {
  const playerEvents = await getPlayerEvents({
    playerName: player.Name,
    all: true,
    take: 1
  })

  const requestLastEventDetail = await fetch(
    `${API.EVENT}${playerEvents.events[0].id}`
  )
  if (!requestLastEventDetail.ok) {
    throw new Error(
      "We couldn't locate the player last events on the server at the moment."
    )
  }

  const lastEventDetails = await requestLastEventDetail.json()

  const avatar = lastEventDetails.Participants.find((participant: any) => {
    if (player.Name === participant.Name) {
      return {
        ...player,
        Avatar: participant.Avatar,
        AvatarRing: participant.AvatarRing
      }
    }
    return null
  })

  if (lastEventDetails.Killer.Name) {
    return {
      ...player,
      Avatar: lastEventDetails.Killer.Avatar,
      AvatarRing: lastEventDetails.Killer.AvatarRing
    }
  }
  if (lastEventDetails.Victim.Name) {
    return {
      ...player,
      Avatar: lastEventDetails.Victim.Avatar,
      AvatarRing: lastEventDetails.Victim.AvatarRing
    }
  }
}
