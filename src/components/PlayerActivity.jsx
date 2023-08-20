import { useLoaderData } from "react-router-dom"
import "../stylesheets/PlayerActivity.css"
import FilterActivity from "./FilterActivity"
import PlayerEvent from "./PlayerEvent"
import { useEffect, useState } from "react"
import getPlayerEvents from "../functions/getPlayerEvents"

export default function PlayerActivity() {
  const { player } = useLoaderData()

  const [events, setEvents] = useState([])
  const [isLoading, setLoading] = useState(true)

  const renderPlayerEvents = events.map(event => {
    return (
      <PlayerEvent 
        key={event.id} 
        killerName={event.killer.name}
        victimName={event.victim.name}
        gearItemKiller={event.killer.loadout}
        gearItemVictim={event.victim.loadout}
        dropFame={event.total_kill_fame}
        time={event.time}
        killerIp={event.killer.item_power}
        victimIp={event.victim.item_power}
        profileName={player.Name}
        partySize={event.party_size}
        eventId={event.id} />
    )
  })

  useEffect(() => {
    if (isLoading) {
      getPlayerEvents({ playerName: player.Name }).then(result => {
        console.log(result.events)
        setEvents(result.events)
        console.log(events)
        setLoading(false)
      })
    }
  }, [])

  return (
    <div className="player-activity-container">
      <div className="player-activity">
        <FilterActivity playerName={player.Name}/>
        <div className="player-activity-event-container">
          <>{isLoading ? 'Loading' : renderPlayerEvents}</>
        </div>
      </div>
    </div>
  )
}