import CardPlayer from "./CardPlayer";
import Invetory from "./Inventory";
import "../stylesheets/CombatDetails.css"

export default function CombatDetails({ playerName, guildName}) {
  return (
    <>
      <div className="container-combat-details">
        <CardPlayer />
        <CardPlayer />
      </div>
      <div className="container-inventory">
        <Invetory />
      </div>
    </>
  )
}