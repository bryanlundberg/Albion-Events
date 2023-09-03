import genKey from '@/functions/genKey'
import BattleHistoryData from '@/components/BattleHistoryData'

export default function BattleKillHistory({
  battleEvents
}: {
  battleEvents: any
}) {
  const renderHistoryKillData = battleEvents.map((event: any) => {
    return (
      <BattleHistoryData
        key={genKey()}
        killerId={event.Killer.Id}
        killer={event.Killer.Name}
        victim={event.Victim.Name}
        victimId={event.Victim.Id}
        killerIp={event.Killer.AverageItemPower.toFixed(0)}
        victimIp={event.Victim.AverageItemPower.toFixed(0)}
        fame={event.TotalVictimKillFame.toLocaleString()}
        eventId={event.EventId}
      />
    )
  })

  return (
    <div className="battle-killboard-container">
      <div className="filter"></div>
      <div>HISTORY EVENTS</div>
      <table>
        <thead>
          <tr>
            <th>Killer</th>
            <th>Victim</th>
            <th>Killer IP</th>
            <th>Victim IP</th>
            <th>Fame</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>{renderHistoryKillData}</tbody>
      </table>
    </div>
  )
}
