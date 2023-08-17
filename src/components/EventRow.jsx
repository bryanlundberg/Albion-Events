import { Link } from 'react-router-dom'
import '../stylesheets/Table.css'

export default function EventRow({ date, eventId, killerName, victimName, killFame, ipKiller, ipVictim, killerId, victimId }) {
  return (
    <Link to={`/events/${eventId}`} key={eventId} className='table-row'>
      <div className='table-date align-text-start'>{date}</div>
      <Link to={`/players/${killerId}`} className='table-killer align-text-center'>{killerName}</Link>
      <div className={`table-ip align-text-center`}>
        <span className={`${ipKiller > ipVictim ? 'text-info' : null}`}>{ipKiller}</span> 
        <span> vs </span> 
        <span className={`${ipVictim > ipKiller ? 'text-info' : null}`}>{ipVictim}</span></div>
      <Link to={`/players/${victimId}`} className='table-victim align-text-center'>{victimName}</Link>
      <div className={`table-fame align-text-end ${killFame >= 100000 ? 'text-success' : ''}`}>{killFame.toLocaleString()}</div>
    </Link>
  )
}