import { useLoaderData } from "react-router-dom"
import "../stylesheets/PlayerActivity.css"
import FilterActivity from "./FilterActivity"
import PlayerEvent from "./PlayerEvent"
import { useEffect, useState } from "react"
import getPlayerEvents from "../functions/getPlayerEvents"
import genKey from "../functions/genKey"

export default function PlayerActivity() {
  const { player } = useLoaderData()

  const [events, setEvents] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const renderPlayerEvents = events.map(event => {
    return (
      <PlayerEvent 
        key={genKey()} 
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

  function onChangeFilter(option) {
    setFilter(option)
    setLoading(true)
    // getPlayerEvents({playerName: player.Name, showAssist: option === 'assist', showDeaths: option === 'death', showKills: option === 'kill', all: option === 'all'}).then(result => {
    //   setEvents(result.events)
    //   setLoading(false)
    // })
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerEvents({playerName: player.Name, showAssist: filter === 'assist', showDeaths: filter === 'death', showKills: filter === 'kill', all: filter === 'all'}).then(result => {
        setEvents(result.events)
        setLoading(false)
      })
    }
  }, [isLoading, filter])

  return (
    <div className="player-activity-container">
      <div className="player-activity">
        <FilterActivity playerName={player.Name} onChangeFilter={onChangeFilter} value={filter}/>
        <div className="player-activity-event-container">
          <>{isLoading ? 'Loading' : renderPlayerEvents}</>
        </div>
      </div>
    </div>
  )
}