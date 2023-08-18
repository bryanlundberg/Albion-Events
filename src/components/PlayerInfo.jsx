import PlayerFavGear from "./PlayerFavGear"
import PlayerStats from "./PlayerStats"
import "../stylesheets/PlayerInfo.css"

export default function PlayerInfo() {
  return (
    <div className="container-player-info">
      <PlayerStats />
      <PlayerFavGear category={'Most Played Weapons:'} />
    </div>
  )
}