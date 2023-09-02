import Link from 'next/link'
import '@/stylesheets/Table.css'

export default function EventRow({
  date,
  eventId,
  killerName,
  victimName,
  killFame,
  ipKiller,
  ipVictim,
  killerId,
  victimId
}: {
  date: string
  eventId: number
  killerName: string
  victimName: string
  killFame: number
  ipKiller: number
  ipVictim: number
  killerId: string
  victimId: string
}) {
  return (
    <>
      <div className="table-row">
        <Link
          href={`/events/${eventId}`}
          className="table-date align-text-start"
        >
          {date.slice(5, 10) + ' ' + date.slice(11, 16)}
        </Link>
        <Link
          href={`/players/${killerId}`}
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
          href={`/players/${victimId}`}
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
    </>
  )
}
