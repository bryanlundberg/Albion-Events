import BattleCard from './BattleCard'
import '../stylesheets/BattleInformation.css'
import { API } from '../const/api'
import { formatDistance } from 'date-fns'

export default function BattleInformation({
  id,
  startTime,
  endTime,
  totalPlayers,
  totalKills,
  totalFame
}) {
  return (
    <>
      <div className="battle-information">
        <div className="battle-id">Battle #{id}</div>
        <div className="battle-resumen-container">
          <BattleCard>
            <div>Total Players: {totalPlayers}</div>
            <div>Total Kills: {totalKills}</div>
          </BattleCard>
          <div className="image-section">
            <img src={API.ICONS.SKULL} alt="Representative skull battle" />
            <div className="title fs-xl">BATTLE</div>
            <div>
              {startTime.slice(0, 10) + ' - ' + startTime.slice(11, 19)}
            </div>
          </div>
          <BattleCard>
            <div>
              Duration:{' '}
              {formatDistance(new Date(startTime), new Date(endTime), {
                includeSeconds: true
              })}
            </div>
            <div>Fame: {totalFame.toLocaleString()}</div>
          </BattleCard>
        </div>
      </div>
    </>
  )
}
