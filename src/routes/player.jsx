import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import { API } from "../const/api"

export default function Player() {
  const player = useLoaderData()
  console.log(player)
  document.title = `Albion Events | ${player.Name}`
  return (
    <>
      <Header title={'Performance Overview'} />
      <Link to="/" >return index</Link>
    </>
  )
}

export function loader({ params }) {
  return fetch(`${API.STATS}${params.playerId}`)
}