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
    const playerResponse = await fetch(`${API.STATS}${params.playerId}`)
    const player = await playerResponse.json()
    const weaponResponse = await fetch(`${API.MURDERLEDGER.MOSTUSEDWEAPON.PART1}${player.Name}${API.MURDERLEDGER.MOSTUSEDWEAPON.PART2}`)
    const weapon = await weaponResponse.json()
    return { player, weapon }
  } catch (error) {
  }
}