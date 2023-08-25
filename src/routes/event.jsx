import { Link, useLoaderData } from 'react-router-dom'
import { API } from '../const/api'
import SidebarAssistants from '../components/SidebarAssistants'
import EventInfo from '../components/EventInfo'
import '../stylesheets/Event.css'
import Header from '../components/Header'
import { formatDistanceToNowStrict } from 'date-fns'

export default function Event() {
  const event = useLoaderData()
  document.title = 'Albion Events | Kill Detail'
  return (
    <>
      <Header
        title={'LETHAL EVENT'}
        subtitle={formatDistanceToNowStrict(new Date(event.TimeStamp)) + ' ago'}
      />
      <Link to="/">return index</Link>
      <div className="event-view-layout">
        <SidebarAssistants event={event} />
        <EventInfo event={event} />
      </div>
    </>
  )
}

export function loader({ params }) {
  return fetch(`${API.EVENT}${params.eventId}`)
}
