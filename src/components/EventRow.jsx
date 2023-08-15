import { Link } from 'react-router-dom'
import '../stylesheets/Table.css'

export default function EventRow({ date, eventId, killerName, ipComparison, victimName, killFame }) {
  return (
    <Link to={`/events/${eventId}`} key={eventId} className='table-row'>
      <div className='table-date align-text-start'>{date}</div>
      <div className='table-killer align-text-start'>{killerName}</div>
      <div className='table-ip align-text-center'>{ipComparison}</div>
      <div className='table-victim align-text-end'>{victimName}</div>
      <div className='table-fame align-text-end'>{killFame}</div>
      <div className='table-id-event align-text-end'>{eventId}</div>
    </Link>
  )
}