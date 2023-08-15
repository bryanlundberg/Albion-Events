import EventRow from './EventRow'
import EventHeader from './EventHeader'
import '../stylesheets/Table.css'

export default function EventsTable({ lastEvents }) {
  
  const renderEvents = lastEvents.map((lastEvent) => {
    return (
      <EventRow
        key={lastEvent.EventId}
        date={lastEvent.TimeStamp.slice(5,10) + ' ' + lastEvent.TimeStamp.slice(11,16) }
        eventId={lastEvent.EventId}
        killerName={lastEvent.Killer.Name}
        ipKiller={lastEvent.Killer.AverageItemPower.toFixed(0)}
        ipVictim={lastEvent.Victim.AverageItemPower.toFixed(0)}
        victimName={lastEvent.Victim.Name}
        killFame={lastEvent.TotalVictimKillFame} />
    )
  })

  return (
    <>
      <EventHeader />
      {renderEvents}
    </>
  )
}