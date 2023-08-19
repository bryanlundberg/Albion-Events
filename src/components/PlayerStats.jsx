import { useLoaderData } from "react-router-dom"
import "../stylesheets/PlayerStats.css"
import DataStats from "./DataStats"
import { API } from "../const/api"
import { formatDistanceToNow } from "date-fns"

export default function PlayerStats() {
  const { player } = useLoaderData()

  return (
    <>
        <div className="stats-container">
          <div className="avatar-container">
            <img src={`${player.Avatar.length !== 0 ? API.AVATAR+player.Avatar+'.png' : API.AVATAR+'AVATAR_01.png' }`} onError={(e) => { e.target.src = `${API.AVATAR}AVATAR_01.png`}} alt={`${player.Name}'s avatar in game`} />
            <div>{player.Name}</div>
          </div>
          <DataStats title={'Total Fame:'} stat={(player.KillFame + player.LifetimeStatistics.PvE.Total).toLocaleString()} />
          <DataStats title={'PvP Fame:'} stat={(player.KillFame).toLocaleString()} />
          <DataStats title={'PvE Fame:'} stat={(player.LifetimeStatistics.PvE.Total).toLocaleString()} />
          <DataStats title={'Last Fame Activity:'} stat={formatDistanceToNow(new Date(player.LifetimeStatistics.Timestamp))+' ago'} />
        </div>
    </>
  )
}