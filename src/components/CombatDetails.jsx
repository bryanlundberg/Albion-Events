import CardPlayer from "./CardPlayer";
import Invetory from "./Inventory";
import "../stylesheets/CombatDetails.css"

export default function CombatDetails({ event }) {
  return (
    <>
      <div className="container-combat-details">
        <CardPlayer 
          equipment={event.Killer.Equipment}
          title={'Killer'}
          subtitle={`${event.Killer.Name} - [${event.Killer.GuildName}]`} />
        <CardPlayer 
          equipment={event.Victim.Equipment}
          title={'Victim'}
          subtitle={`${event.Victim.Name} - [${event.Victim.GuildName}]`} />
      </div>
      <div className="container-inventory">
        <Invetory victimInventory={event.Victim.Inventory} />
      </div>
    </>
  )
}