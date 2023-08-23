import { Link, useLoaderData } from "react-router-dom"
import { API } from "../const/api"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import "../stylesheets/Battle.css"
import BattleInformation from "../components/BattleInformation"
import BattlegroundStars from "../components/BattlegroundStars"
import BattleKillHistory from "../components/BattleKillHistory"
import BattleGuildStatistics from "../components/BattleGuildStatistics"
// 861067253

export default function Battle() {
  const { battle } = useLoaderData()
  const [killboard, setKillboard] = useState([])
  const [killsOffset, setPlayersOffset] = useState(0)

  console.log(battle)

  useEffect(() => {
    if (killsOffset <= battle.totalKills) {
      fetch(`${API.BATTLES.HISTORY}${battle.id}?offset=${killsOffset}&limit=51`)
        .then(response => response.json())
        .then(result => {
          setKillboard(killboard.concat(result))
          setPlayersOffset(killsOffset+51)
        })
    }
  })

  return (
    <>
      <Header title={'BATTLE REPORT'} />
      <Link to="/" >return index</Link>
      <div className="battle-view-layout">
        <BattleInformation id={battle.id} startTime={battle.startTime} endTime={battle.endTime} totalPlayers={Object.values(battle.players).length} totalKills={battle.totalKills} totalFame={battle.totalFame} />
        <BattlegroundStars />
        <BattleGuildStatistics guilds={battle.guilds}/>
        <BattleKillHistory killHistory={killboard} />
      </div>
    </>
  )
}

export async function loader({ params }) {
  try {
    const request = await fetch(`${API.BATTLES.OVERALL}${params.battleId}`)
    const battle = await request.json()
    return { battle }
  } catch (error) {
    console.error(error)
    return { battle: null}
  }
}