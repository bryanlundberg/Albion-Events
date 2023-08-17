import { useLoaderData } from "react-router-dom"
import { API } from "../const/api"
import EventsTable from "../components/EventsTable"
import Header from "../components/Header"
import Search from "../components/Search"
import "../stylesheets/Root.css"

export default function Root() {
  const events = useLoaderData()
  console.log(events)

  return (
    <div className="center-content">
      <Header title={'ALBION EVENTS'}/>
      <Search />
      <EventsTable lastEvents={events} />
    </div>
  )
}

export function loader() {
  return fetch(`${API.LASTEVENTS}`)
}