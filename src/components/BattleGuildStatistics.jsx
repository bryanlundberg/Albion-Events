import BattleKillboardData from "./BattleKillboardData";
import "../stylesheets/BattleGuildStatistics.css"

export default function BattleGuildStatistics({ guilds }) {
  console.log(guilds)
  const renderGuilds = Object.values(guilds).map((guild) => {
    return (
      <BattleKillboardData 
        guild={guild.name} 
        alliance={guild.alliance} 
        kills={guild.kills} 
        deaths={guild.deaths} 
        fame={guild.killFame.toLocaleString()} 
        ip='988'/>
    )
  })
  return (
    <div className="battle-killboard-container">
      <div className="filter"></div>
      <div>GUILD STATISTICS</div>
      <table>
        <thead>
          <tr>
            <th>Guild</th>
            <th>Alliance</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Fame</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {renderGuilds}
        </tbody>
      </table>
    </div>
  )
}