import getEvents from "@/loaders/getEvents";
import LinkLabel from "./LinkItem";
import Link from "next/link";

export default async function EventsTable() {
  const lastEvents = await getEvents();
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start hidden sm:block">Date</th>
            <th>Killer</th>
            <th>IP</th>
            <th>Victim</th>
            <th className="text-end">Fame</th>
          </tr>
        </thead>
        <tbody>
          {lastEvents &&
            lastEvents.length >= 1 &&
            lastEvents.map((event: OverallEvent) => (
              <tr key={`${event.BattleId}-${event.EventId}-${event.Killer.Id}`}>
                <td className="text-start hidden sm:block">
                  {event.TimeStamp.slice(5, 10) +
                    " " +
                    event.TimeStamp.slice(11, 16)}
                </td>
                <td className="text-center max-w-14  overflow-ellipsis overflow-hidden">
                  <LinkLabel
                    label={event.Killer.Name}
                    href={`/players/${event.Killer.Id}`}
                  />
                </td>
                <td className="text-center w-32">
                  {event.Killer.AverageItemPower.toFixed(0)} vs{" "}
                  {event.Victim.AverageItemPower.toFixed(0)}
                </td>
                <td className="text-center max-w-14  overflow-ellipsis overflow-hidden">
                  <LinkLabel
                    label={event.Victim.Name}
                    href={`/players/${event.Victim.Id}`}
                  />
                </td>
                <td className="text-end">
                  <Link href={`/events/${event.EventId}`}>
                    {event.TotalVictimKillFame.toLocaleString()}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
