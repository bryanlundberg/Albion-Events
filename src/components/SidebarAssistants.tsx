'use client'
import Contribuitor from '@/components/Contribuitor'
import '@/stylesheets/SidebarAssistants.css'
import Card from '@/components/Card'
import Link from 'next/link'

export default function SidebarAssistants({ event }: { event: any }) {
  const totalDamageDone = event.Participants.reduce(
    (total: number, participant: any) => {
      return total + participant.DamageDone
    },
    0
  )

  const totalHealingDone = event.Participants.reduce(
    (total: number, participant: any) => {
      return total + participant.SupportHealingDone
    },
    0
  )

  const contibuitors = event.Participants.map((player: any) => {
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
          <Link href={`/battles/${event.BattleId}`}>{event.BattleId}</Link>
        }
      />
      <Card title={event.Participants.length} subTitle={'Participants'} />
      <div className="contribuitors-layout">{contibuitors}</div>
    </div>
  )
}
