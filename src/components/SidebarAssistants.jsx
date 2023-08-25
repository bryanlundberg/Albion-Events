import Contribuitor from './Contribuitor'
import '../stylesheets/SidebarAssistants.css'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function SidebarAssistants({ event }) {
  const totalDamageDone = event.Participants.reduce((total, participant) => {
    return total + participant.DamageDone
  }, 0)

  const totalHealingDone = event.Participants.reduce((total, participant) => {
    return total + participant.SupportHealingDone
  }, 0)

  const contibuitors = event.Participants.map((player) => {
    return (
      <Contribuitor
        key={player.Id}
        playerName={player.Name}
        guildName={player.GuildName}
        itemPower={player.AverageItemPower}
        equipment={player.Equipment}
        avatar={player.Avatar}
        frame={player.AvatarRing}
        damageDone={player.DamageDone}
        supportHealingDone={player.SupportHealingDone}
        totalDamageDone={totalDamageDone}
        totalHealingDone={totalHealingDone}
        playerId={player.Id}
      />
    )
  })

  return (
    <div className="sidebar">
      <Card
        title={'Battle Report'}
        subTitle={
          <Link to={`/battles/${event.BattleId}`}>{event.BattleId}</Link>
        }
      />
      <Card title={event.Participants.length} subTitle={'Participants'} />
      <div className="contribuitors-layout">{contibuitors}</div>
    </div>
  )
}
