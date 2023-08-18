import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import { API } from "../const/api"
import PlayerInfo from "../components/PlayerInfo"
import PlayerActivity from "../components/PlayerActivity"
import "../stylesheets/Player.css"

export default function Player() {
  const player = useLoaderData()
  document.title = `Albion Events | ${player.Name}`
  return (
    <>
      <Header title={'Performance Overview'} />
      <Link to="/" >return index</Link>
      <div className="player-view-layout">
        <PlayerInfo />
        <PlayerActivity />
      </div>
    </>
  )
}

export function loader({ params }) {
  return fetch(`${API.STATS}${params.playerId}`)
}