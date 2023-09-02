import EventRow from '@/components/EventRow'
import EventHeader from '@/components/EventHeader'
import '@/stylesheets/Table.css'
import getEvents from '@/loaders/getEvents'
import genKey from '@/functions/genKey'

export default async function EventsTable() {
  const lastEvents = await getEvents()
  const renderEvents = lastEvents.map((event: any) => {
    return (
      <EventRow
        key={genKey()}
        date={event.TimeStamp}
        eventId={event.EventId}
        killerName={event.Killer.Name}
        ipKiller={event.Killer.AverageItemPower.toFixed(0)}
        ipVictim={event.Victim.AverageItemPower.toFixed(0)}
        victimName={event.Victim.Name}
        killFame={event.TotalVictimKillFame}
        killerId={event.Killer.Id}
        victimId={event.Victim.Id}
      />
    )
  })

  return (
    <>
      <EventHeader />
      {renderEvents}
    </>
  )
}
