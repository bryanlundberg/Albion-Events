'use client'
import { API } from '@/const/api'
import '@/stylesheets/Contribuitor.css'
import Item from '@/components/Item'
import ProgressBar from '@/components/ProgressBar'
import Link from 'next/link'

export default function Contribuitor({
  playerName,
  guildName,
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
  guildName: string
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
          key={`${playerName}${category.Type}`}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main weapon
    if (index === 2)
      return (
        <Item
          key={`${playerName}${category.Type}`}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main head
    if (index === 3)
      return (
        <Item
          key={`${playerName}${category.Type}`}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main armor
    if (index === 4)
      return (
        <Item
          key={`${playerName}${category.Type}`}
          url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`}
        />
      ) //main shoes
    if (index === 6)
      return (
        <Item
          key={`${playerName}${category.Type}`}
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
            <img
              className="contribuitor-avatar"
              src={`${API.AVATAR}${avatar}.png`}
              alt={`${playerName}'s avatar in game`}
              onError={(e) => {
                e.target.src = `${API.AVATAR}AVATAR_01.png`
              }}
            />
            <img
              className="contribuitor-frame"
              src={`${API.FRAME}${frame}.png`}
              alt={`${playerName}'s frame in game`}
              onError={(e) => {
                e.target.src = `${API.FRAME}RING1.png`
              }}
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
