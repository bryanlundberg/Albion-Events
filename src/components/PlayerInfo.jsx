import PlayerFavGear from "./PlayerFavGear"
import PlayerStats from "./PlayerStats"
import "../stylesheets/PlayerInfo.css"
import genKey from "../functions/genKey"

export default function PlayerInfo() {
  return (
    <div className="container-player-info">
      <PlayerStats key={genKey()}/>
      <PlayerFavGear key={genKey()} category={'Most Played Weapons:'} />
    </div>
  )
}