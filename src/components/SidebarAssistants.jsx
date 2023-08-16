import Contribuitor from "./Contribuitor";
import "../stylesheets/SidebarAssistants.css"
import Card from "./Card";

export default function SidebarAssistants({ event }) {

  const contibuitors = event.Participants.map((player) => {
    return (
      <Contribuitor 
        key={player.Id}
        playerName={player.Name}
        guildName={player.GuildName}
        itemPower={player.AverageItemPower}
        equipment={player.Equipment}
        avatar={player.Avatar}
        frame={player.Frame}
        />
    )
  })

  return (
    <div className="sidebar">
      <Card title={event.Participants.length} subTitle={'Participants'} />
      {contibuitors}
    </div>
  )
}