import BattleHistoryData from "./BattleHistoryData"

export default function BattleKillHistory() {
  return (
    <div className="battle-killboard-container">
      <div className="filter"></div>
      <div>HISTORY EVENTS</div>
      <table>
        <thead>
          <th>Killer</th>
          <th>Victim</th>
          <th>Killer IP</th>
          <th>Victim IP</th>
          <th>Fame</th>
          <th>Event</th>
        </thead>
        <tbody>
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
          <BattleHistoryData killer='dasds' victim='dsdasds' killerIp='3242' victimIp='23432' fame='34321432' />
        </tbody>
      </table>
    </div>
  )
}