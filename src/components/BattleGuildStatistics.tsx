import BattleKillboardData from '@/components/BattleKillboardData'
import '@/stylesheets/BattleGuildStatistics.css'
import genKey from '@/functions/genKey'
import calAvgIp from '@/functions/calAvgIp'
import getBattleFullEvents from '@/functions/getBattleFullEvents'
import { setDefaultPlayers } from '@/functions/updatePlayer'
import createBattlePlayersList from '@/functions/createBattlePlayersList'

export default async function BattleGuildStatistics({
  battle
}: {
  battle: any
}) {
  const killboard = await getBattleFullEvents({ battle: battle })
  const defaultPlayerList = setDefaultPlayers({ battle: battle })
  const players = await createBattlePlayersList({
    killboard: killboard,
    players: defaultPlayerList
  })

  const renderGuilds = Object.values(battle.guilds).map((guild: any) => {
    const playerSameGuildwithIp = players.filter(
      (player) => player.guildId === guild.id && player.averageItemPower !== 0
    )
    const playersSameGuild = players.filter(
      (player) => player.guildId === guild.id
    )
    return (
      <BattleKillboardData
        key={genKey()}
        guild={guild.name}
        alliance={guild.alliance}
        members={playersSameGuild.length}
        kills={guild.kills}
        deaths={guild.deaths}
        fame={guild.killFame.toLocaleString()}
        ip={calAvgIp(playerSameGuildwithIp, 'averageItemPower')}
      />
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
            <th>Members</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Fame</th>
            <th>AVG IP</th>
          </tr>
        </thead>
        <tbody>{renderGuilds}</tbody>
      </table>
    </div>
  )
}
