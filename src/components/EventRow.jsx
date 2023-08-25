import { Link } from 'react-router-dom'
import '../stylesheets/Table.css'

export default function EventRow({
  date,
  eventId,
  killerName,
  victimName,
  killFame,
  ipKiller,
  ipVictim,
  killerId,
  victimId,
}) {
  return (
    <div key={eventId} className="table-row">
      <Link to={`/events/${eventId}`} className="table-date align-text-start">
        {date}
      </Link>
      <Link
        to={`/players/${killerId}`}
        className="table-killer align-text-center"
      >
        {killerName}
      </Link>
      <div className={`table-ip align-text-center`}>
        <span>{ipKiller}</span>
        <span> vs </span>
        <span>{ipVictim}</span>
      </div>
      <Link
        to={`/players/${victimId}`}
        className="table-victim align-text-center"
      >
        {victimName}
      </Link>
      <div
        className={`table-fame align-text-end ${
          killFame >= 100000 ? 'text-success' : ''
        }`}
      >
        {killFame.toLocaleString()}
      </div>
    </div>
  )
}
