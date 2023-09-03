import { API } from '@/const/api'
import '@/stylesheets/Contribuitor.css'
import Item from '@/components/Item'
import ProgressBar from '@/components/ProgressBar'
import Link from 'next/link'
import AvatarPic from './AvatarPic'
import genKey from '@/functions/genKey'

export default function Contribuitor({
  playerName,
  itemPower,
  avatar,
  equipment,
  frame,
  supportHealingDone,
  damageDone,
  totalDamageDone,
  totalHealingDone,
  playerId
}: {
  playerName: string
  itemPower: number
  avatar: string
  equipment: any[]
  frame: string
  supportHealingDone: number
  damageDone: number
  totalDamageDone: number
  totalHealingDone: number
  playerId: string
}) {
  const categories = Object.values(equipment)
  const renderSet = categories.map((category, index) => {
    if (category === null) return null
    if (index === 0)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main weapon
    if (index === 2)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main head
    if (index === 3)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main armor
    if (index === 4)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main shoes
    if (index === 6)
      return (
        <Item
          key={genKey()}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main cape
    return null
  })

  let percentageDamage: number | string = 0

  if (isFinite(damageDone) && totalDamageDone !== 0) {
    percentageDamage = ((damageDone / totalDamageDone) * 100).toFixed(1)
  }

  let percentageHealing: number | string = 0

  if (isFinite(totalHealingDone) && totalHealingDone !== 0) {
    percentageHealing = ((supportHealingDone / totalHealingDone) * 100).toFixed(
      1
    )
  }

  return (
    <>
      <div className="container-contribuitor">
        <div className="contribuitor-card">
          <div className="card-align">
            <AvatarPic
              idAvatar={avatar}
              playerName={playerName}
              type="avatar"
              classNameExtra="contribuitor-avatar"
            />
            <AvatarPic
              idAvatar={frame}
              playerName={playerName}
              type="frame"
              classNameExtra="contribuitor-frame"
            />

            <div className="contribuitor-info">
              <Link href={`/players/${playerId}`}>{playerName}</Link>
              <div>Item Power: {itemPower.toFixed(0)}</div>
              <ProgressBar
                extraClassName={'bg-danger'}
                amount={damageDone}
                icon={API.ICONS.BATTLE}
                percentage={percentageDamage}
              />
              <ProgressBar
                extraClassName={'bg-success'}
                amount={supportHealingDone}
                icon={API.ICONS.HEAL}
                percentage={percentageHealing}
              />
            </div>
          </div>
          <div className="contribuitor-set">{renderSet}</div>
        </div>
      </div>
    </>
  )
}
