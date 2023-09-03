import getEvents from '@/loaders/getEvents'
import EventRow from './EventRow'
import genKey from '@/functions/genKey'

export default async function EventsTableRow() {
  const lastEvents = await getEvents()
  return (
    <>
      {lastEvents.map((event: any) => (
        <EventRow
          key={genKey()}
          date={event.TimeStamp}
          eventId={event.EventId}
          killerName={event.Killer.Name}
          ipKiller={event.Killer.AverageItemPower}
          ipVictim={event.Victim.AverageItemPower}
          victimName={event.Victim.Name}
          killFame={event.TotalVictimKillFame}
          killerId={event.Killer.Id}
          victimId={event.Victim.Id}
        />
      ))}
    </>
  )
}
