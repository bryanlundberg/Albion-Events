import CardPlayer from '@/components/CardPlayer'
import Invetory from '@/components/Inventory'
import '@/stylesheets/CombatDetails.css'

export default function CombatDetails({ event }: { event: any }) {
  return (
    <>
      <div className="container-combat-details">
        <CardPlayer
          playerId={event.Killer.Id}
          equipment={event.Killer.Equipment}
          title={'Killer'}
          subtitle={`${event.Killer.Name} - [${event.Killer.GuildName}]`}
        />
        <CardPlayer
          playerId={event.Victim.Id}
          equipment={event.Victim.Equipment}
          title={'Victim'}
          subtitle={`${event.Victim.Name} - [${event.Victim.GuildName}]`}
        />
      </div>
      <div className="container-inventory">
        <Invetory victimInventory={event.Victim.Inventory} />
      </div>
    </>
  )
}
