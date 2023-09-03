'use client'
import '@/stylesheets/PlayerActivity.css'
import FilterActivity from '@/components/FilterActivity'
import PlayerEvent from '@/components/PlayerEvent'
import { useEffect, useState } from 'react'
import getPlayerEvents from '@/functions/getPlayerEvents'
import genKey from '@/functions/genKey'

export default function PlayerActivity({ player }: { player: any }) {
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState('all')
  const [isLoading, setLoading] = useState(true)

  const renderPlayerEvents = events.map((event: any) => {
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
        eventId={event.id}
      />
    )
  })

  function onChangeFilter(option: any) {
    setFilter(option)
    setLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerEvents({
        playerName: player.Name,
        showAssist: filter === 'assist',
        showDeaths: filter === 'death',
        showKills: filter === 'kill',
        all: filter === 'all'
      })
        .then((result) => {
          setEvents(result.events)
        })
        .catch((result) => {
          console.log(result)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isLoading, filter, player.Name])

  return (
    <div className="player-activity-container">
      <div className="player-activity">
        <FilterActivity
          playerName={player.Name}
          onChangeFilter={onChangeFilter}
          filter={filter}
        />
        <div className="player-activity-event-container">
          {isLoading ? 'Loading' : renderPlayerEvents}
        </div>
      </div>
    </div>
  )
}
