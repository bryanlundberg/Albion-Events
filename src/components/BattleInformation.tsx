import BattleCard from '@/components/BattleCard'
import '@/stylesheets/BattleInformation.css'
import { API } from '@/const/api'
import { formatDistance } from 'date-fns'
import { getBattle } from '@/loaders/getBattle'

export default async function BattleInformation({
  battleId
}: {
  battleId: string
}) {
  const { battle } = await getBattle({ battleId: battleId })

  return (
    <>
      <div className="battle-information">
        <div className="battle-id">Battle #{battle.id}</div>
        <div className="battle-resumen-container">
          <BattleCard>
            <div>Total Players: {battle.players.length}</div>
            <div>Total Kills: {battle.totalKills}</div>
          </BattleCard>
          <div className="image-section">
            <img src={API.ICONS.SKULL} alt="Representative skull battle" />
            <div className="title fs-xl">BATTLE</div>
            <div>
              {battle.startTime.slice(0, 10) +
                ' - ' +
                battle.startTime.slice(11, 19)}
            </div>
          </div>
          <BattleCard>
            <div>
              Duration:{' '}
              {formatDistance(
                new Date(battle.startTime),
                new Date(battle.endTime),
                {
                  includeSeconds: true
                }
              )}
            </div>
            <div>Fame: {battle.totalFame.toLocaleString()}</div>
          </BattleCard>
        </div>
      </div>
    </>
  )
}
