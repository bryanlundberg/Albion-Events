import { Link, useLoaderData } from "react-router-dom"
import { API } from "../const/api"
import SidebarAssistants from "../components/SidebarAssistants"
import EventInfo from "../components/EventInfo"
import "../stylesheets/Event.css"

export default function Event() {
  const event = useLoaderData()
  console.log(event)
  return (
    <>
      <Link to="/" >return index</Link>
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