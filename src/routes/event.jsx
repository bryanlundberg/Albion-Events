import { Link, useLoaderData } from "react-router-dom"
import { API } from "../const/api"
import Sidebar from "../components/Sidebar"
import EventInfo from "../components/EventInfo"
import CombatDetails from "../components/CombatDetails"

export default function Event() {
  const event = useLoaderData()
  console.log(event)
  return (
    <>
    <Link to="/" >return index</Link>
    <Sidebar />

    <div className="container-content">
      <div className="container-event-info">
        <div className="event-info">
          <EventInfo />
          <EventInfo />
          <EventInfo />
        </div>
      </div>
      <CombatDetails />
    </div>
    </>
  )
}

export function loader({ params }) {
  return fetch(`${API.EVENT}${params.eventId}`)
}