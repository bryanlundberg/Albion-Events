import { useLoaderData } from "react-router-dom"
import "../stylesheets/PlayerActivity.css"
import FilterActivity from "./FilterActivity"
import PlayerEvent from "./PlayerEvent"

export default function PlayerActivity() {
  const { event, player } = useLoaderData()

  const renderPlayerEvents = event.events.map(event => {
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
        eventId={event.id} />
    )
  })
  return (
    <div className="player-activity-container">
      <div className="player-activity">
        <FilterActivity playerName={player.Name}/>
        <div className="player-activity-event-container">
          {renderPlayerEvents}
        </div>
      </div>
    </div>
  )
}