import { useLoaderData } from "react-router-dom"
import { API } from "../const/api"
import EventsTable from "../components/EventsTable"
import Header from "../components/Header"
import Search from "../components/Search"

export default function Root() {
  const events = useLoaderData()
  console.log(events)

  return (
    <>
      <Header />
      <Search />
      <EventsTable lastEvents={events} />
    </>
  )
}

export function loader() {
  return fetch(`${API.V1}/events`)
}