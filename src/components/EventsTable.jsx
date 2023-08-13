import { Link } from "react-router-dom"

export default function EventsTable({ lastEvents }) {
  const renderEvents = lastEvents.map((lastEvent) => {
    return (
      <li key={lastEvent.EventId}>
        <Link to="/killer">Killer: {lastEvent.Killer.Name} (IP: {lastEvent.Killer.AverageItemPower.toFixed(0)})</Link>
        <span> - </span>
        <Link to="/">Victim: {lastEvent.Victim.Name} (IP: {lastEvent.Victim.AverageItemPower.toFixed(0)})</Link>
      </li>
    )
  })

  return (
    <ul>
      {renderEvents}
    </ul>
  )
}