import { Link } from "react-router-dom"
import Header from "../components/Header"
import { API } from "../const/api"
import PlayerInfo from "../components/PlayerInfo"
import PlayerActivity from "../components/PlayerActivity"
import "../stylesheets/Player.css"

export default function Player() {
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
    const [playerResponse, weaponResponse] = await Promise.all([
      fetch(`${API.STATS}${params.playerId}`),
      fetch(`${API.MURDERLEDGER.MOSTUSEDWEAPON.PART1}${params.playerName}${API.MURDERLEDGER.MOSTUSEDWEAPON.PART2}`)
    ])

    const [player, weapon] = await Promise.all([
      playerResponse.json(),
      weaponResponse.json()
    ])

    return { player, weapon }
  } catch (error) {
    return null
  }
}