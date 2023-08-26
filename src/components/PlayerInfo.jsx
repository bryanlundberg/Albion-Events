import PlayerFavGear from './PlayerFavGear'
import PlayerStats from './PlayerStats'
import '../stylesheets/PlayerInfo.css'
import genKey from '../functions/genKey'
import { useEffect, useState } from 'react'
import { API } from '../const/api'
import { useLoaderData } from 'react-router-dom'
import getPlayerEvents from '../functions/getPlayerEvents'

export default function PlayerInfo() {
  const { player } = useLoaderData()
  const [avatar, setAvatar] = useState('AVATAR_01')
  const [frame, setFrame] = useState('RING1')
  const [hasChanged, setHasChanged] = useState(false)

  useEffect(() => {
    if (!hasChanged) {
      getPlayerEvents({ playerName: player.Name, all: true, take: 1 }).then(
        (result) => {
          fetch(`${API.EVENT}${result.events[0].id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              data.Participants.some((participant) => {
                if (player.Name === participant.Name) {
                  setAvatar(participant.Avatar)
                  setFrame(participant.AvatarRing)
                  setHasChanged(true)
                  return null
                }
                return null
              })
              if (data.Killer.Name === player.Name) {
                setAvatar(data.Killer.Avatar)
                setFrame(data.Killer.AvatarRing)
                setHasChanged(true)
                return
              }
              if (data.Victim.Name === player.Name) {
                setAvatar(data.Victim.Avatar)
                setFrame(data.Victim.AvatarRing)
                setHasChanged(true)
                return
              }
            })
        }
      )
    }
  }, [avatar, frame, hasChanged, player.Name])

  return (
    <div className="container-player-info">
      <PlayerStats key={genKey()} avatar={avatar} frame={frame} />
      <PlayerFavGear key={genKey()} category={'Most Played Weapons:'} />
    </div>
  )
}
