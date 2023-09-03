import BattleGuildStatistics from '@/components/BattleGuildStatistics'
import BattleInformation from '@/components/BattleInformation'
import BattleKillHistory from '@/components/BattleKillHistory'
import BattlegroundStars from '@/components/BattlegroundStars'
import Header from '@/components/Header'
import createBattlePlayersList from '@/functions/createBattlePlayersList'
import getBattleFullEvents from '@/functions/getBattleFullEvents'
import { setDefaultPlayers } from '@/functions/updatePlayer'
import { getBattle } from '@/loaders/getBattle'
import Link from 'next/link'

export default async function BattlesPage({ params }: { params: any }) {
  const { battle } = await getBattle({ battleId: params.battleId })
  const killboard = await getBattleFullEvents({ battle: battle })
  const defaultPlayerList = setDefaultPlayers({ battle: battle })
  const players = await createBattlePlayersList({
    killboard: killboard,
    players: defaultPlayerList
  })

  return (
    <>
      {/* <pre>{JSON.stringify(battle, null, 2)}</pre> */}
      <Header title={'BATTLE REPORT'} />
      <Link href="/">return index</Link>
      <div className="battle-view-layout">
        <BattleInformation battleId={params.battleId} />
        <BattlegroundStars players={players} />
        <BattleGuildStatistics battle={battle} />
        <BattleKillHistory battleEvents={killboard} />
      </div>
    </>
  )
}
