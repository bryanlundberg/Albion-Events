import { useLoaderData } from "react-router-dom"
import "../stylesheets/PlayerStats.css"
import DataStats from "./DataStats"
import { API } from "../const/api"

export default function PlayerStats() {
  const { player } = useLoaderData()
  console.log(player)

  const totalFame = ( 0 + player.KillFame + player.LifetimeStatistics.Crafting.Total + player.LifetimeStatistics.FarmingFame + player.LifetimeStatistics.FishingFame + player.LifetimeStatistics.Gathering.All.Total + player.LifetimeStatistics.PvE.Total)

  return (
    <>
        <div className="stats-container">
          <div className="avatar-container">
            <img src={`${player.Avatar.length !== 0 ? API.AVATAR+player.Avatar+'.png' : API.AVATAR+'AVATAR_01.png' }`} onError={(e) => { e.target.src = `${API.AVATAR}AVATAR_01.png`}} alt={`${player.Name}'s avatar in game`} />
            <div>{player.Name}</div>
          </div>
          <DataStats title={'Total Fame:'} bold={true} stat={(totalFame).toLocaleString()} />
          <DataStats title={'PvP Fame:'} bold={true} stat={(player.KillFame).toLocaleString()} />
          <DataStats title={'PvE Fame:'}bold={true} stat={(player.LifetimeStatistics.PvE.Total).toLocaleString()} />
          <DataStats title={'Avalon:'} stat={(player.LifetimeStatistics.PvE.Avalon).toLocaleString()} />
          <DataStats title={'Corrupted Dungeon:'} stat={(player.LifetimeStatistics.PvE.CorruptedDungeon).toLocaleString()} />
          <DataStats title={'Hellgate:'} stat={(player.LifetimeStatistics.PvE.Hellgate).toLocaleString()} />
          <DataStats title={'Mists:'} stat={(player.LifetimeStatistics.PvE.Mists).toLocaleString()} />
          <DataStats title={'Outlands:'} stat={(player.LifetimeStatistics.PvE.Outlands).toLocaleString()} />
          <DataStats title={'Royal:'} stat={(player.LifetimeStatistics.PvE.Royal).toLocaleString()} />
          <DataStats title={'Crafting Fame:'} bold={true} stat={(player.LifetimeStatistics.Crafting.Total).toLocaleString()} />
          <DataStats title={'Fishing Fame:'} bold={true} stat={(player.LifetimeStatistics.FishingFame).toLocaleString()} />
          <DataStats title={'All Gathering Fame:'} bold={true} stat={(player.LifetimeStatistics.Gathering.All.Total).toLocaleString()} />
          <DataStats title={'Gather Fiber:'} stat={(player.LifetimeStatistics.Gathering.Fiber.Total).toLocaleString()} />
          <DataStats title={'Gather Hide:'} stat={(player.LifetimeStatistics.Gathering.Hide.Total).toLocaleString()} />
          <DataStats title={'Gather Ore:'} stat={(player.LifetimeStatistics.Gathering.Ore.Total).toLocaleString()} />
          <DataStats title={'Gather Rock'} stat={(player.LifetimeStatistics.Gathering.Rock.Total).toLocaleString()} />
          <DataStats title={'Gather Wood:'} stat={(player.LifetimeStatistics.Gathering.Wood.Total).toLocaleString()} />
        </div>
    </>
  )
}