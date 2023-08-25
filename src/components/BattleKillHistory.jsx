import genKey from '../functions/genKey'
import BattleHistoryData from './BattleHistoryData'

export default function BattleKillHistory({ killHistory }) {
  const renderHistoryKillData = killHistory.map((event) => {
    return (
      <BattleHistoryData
        key={genKey()}
        killer={event.Killer.Name}
        victim={event.Victim.Name}
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
