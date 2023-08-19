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
  console.log(player)

  const renderMostUsedGear = weapons.map((weaponUsed, index) => {
    if (index < 5) return <Item key={weaponUsed.weapon} alt={weaponUsed.weapon} url={`${API.ITEM}T8_${weaponUsed.weapon}@4.png?count=${1}&quality=${5}`} />
    return null
  })

  useEffect(() => {
    if (isLoading) {
      getPlayerWeapons({ playerName: player.Name }).then(result => {
        console.log(result.weapons)
        const cleanResult = result.weapons.filter(item => item.weapon !== '')
        setWeapons(cleanResult)
        console.log(weapons)
        setLoading(false)
      })
    }
  }, [])
  
  const gearStats = weapons.map((item, index) => {
    if (index === 0) return (
        <GearStats 
        avgIp={weapons[0].average_item_power} 
        killFame={weapons[0].kill_fame} 
        usages={weapons[0].usages} 
        kills={weapons[0].kills} 
        assists={weapons[0].assists} 
        winRate={weapons[0].win_rate} />
      )
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