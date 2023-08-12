import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { API } from "../const/api"

export default function Root() {
  const data = useLoaderData()
  console.log(data)

  const lastKills = data.map((combat) => {
    return (
      <li key={combat.EventId}>
        <Link to="/killer">Killer: {combat.Killer.Name} (IP: {combat.Killer.AverageItemPower.toFixed(0)})</Link>
        <span> - </span>
        <Link to="/">Victim: {combat.Victim.Name} (IP: {combat.Victim.AverageItemPower.toFixed(0)})</Link>
      </li>
    )
  })
  return (
    <ul>
      {lastKills}
    </ul>
  )
}

export function loader() {
  return fetch(`${API.V1}/events?limit=30`)
}