import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import { API } from "../const/api"
import PlayerInfo from "../components/PlayerInfo"
import PlayerActivity from "../components/PlayerActivity"
import "../stylesheets/Player.css"

export default function Player() {
  const { player } = useLoaderData()
  console.log(player)
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

export async function loader({ params }) {
  try {
    const [playerResponse, weaponResponse, eventResponse] = await Promise.all([
      fetch(`${API.STATS}${params.playerId}`),
      fetch(`${API.MURDERLEDGER.MOSTUSEDWEAPON.PART1}${params.playerName}${API.MURDERLEDGER.MOSTUSEDWEAPON.PART2}`),
      fetch(`${API.MURDERLEDGER.EVENTS.PART1}${params.playerName}${API.MURDERLEDGER.EVENTS.PART2}`)
    ])

    const [player, weapon, event] = await Promise.all([
      playerResponse.json(),
      weaponResponse.json(),
      eventResponse.json()
    ])

    return { player, weapon, event }
  } catch (error) {
    return null
  }
}