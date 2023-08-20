import Item from './Item'
import "../stylesheets/PlayerFavGear.css"
import { API } from "../const/api"
import { useEffect, useState } from 'react'
import getPlayerWeapons from '../functions/getPlayerWeapons'
import { useLoaderData } from 'react-router-dom'
import GearStats from './GearStats'

export default function PlayerFavGear({ category }) {
  const { player } = useLoaderData()
  const [weapons, setWeapons] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [choosedWeapon, setNewChoosedWeapon] = useState(4)
  console.log(player)

  const renderMostUsedGear = weapons.map((weaponUsed, index) => {
    if (index < 10) return (
      <div className={index === choosedWeapon ? 'check' : ''}>
        <Item 
          key={index} 
          id={index}
          alt={weaponUsed.weapon} 
          url={`${API.ITEM}T8_${weaponUsed.weapon}@4.png?count=${1}&quality=${5}`}
          onChoosedWeapon={onChoosedWeapon}
          clickable={true} />
      </div>
    )
    return null
  })

  function onChoosedWeapon (newChoosedWeapon) {
    setNewChoosedWeapon(newChoosedWeapon)
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerWeapons({ playerName: player.Name }).then(result => {
        const cleanResult = result.weapons.filter(item => item.weapon !== '')
        setWeapons(cleanResult)
        setLoading(false)
      })
    }
  }, [])
  
  const gearStats = weapons.map((item, index) => {
    if (index === choosedWeapon) return (
        <GearStats
        key={'stat'+index}
        avgIp={item.average_item_power} 
        killFame={item.kill_fame} 
        usages={item.usages} 
        kills={item.kills} 
        assists={item.assists} 
        winRate={item.win_rate} />
      )
      return null
  })
  
  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">{category}</div>
        <div className="gear-container">
          {isLoading ? 'Loading': renderMostUsedGear}
        </div>
          {isLoading ? 'Loading' : gearStats}
      </div>
    </>
  )
}