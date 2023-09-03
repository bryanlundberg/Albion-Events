import Item from '@/components/Item'
import '@/stylesheets/PlayerFavGear.css'
import { API } from '@/const/api'
import { useEffect, useState } from 'react'
import getPlayerWeapons from '@/functions/getPlayerWeapons'
import GearStats from '@/components/GearStats'
import genKey from '@/functions/genKey'

export default function PlayerFavGear({
  category,
  player
}: {
  category: any
  player: any
}) {
  const [weapons, setWeapons] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [choosedWeapon, setNewChoosedWeapon] = useState(0)

  const renderMostUsedGear = weapons.map((weaponUsed: any, index: number) => {
    if (index < 10)
      return (
        <div className={index === choosedWeapon ? 'check' : ''} key={genKey()}>
          <Item
            key={genKey()}
            id={index}
            alt={weaponUsed.weapon}
            url={`${API.ITEM}T8_${
              weaponUsed.weapon
            }@4.png?count=${1}&quality=${5}`}
            onChoosedWeapon={onChoosedWeapon}
            clickable={true}
          />
        </div>
      )
    return null
  })

  function onChoosedWeapon(newChoosedWeapon: any) {
    setNewChoosedWeapon(newChoosedWeapon)
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerWeapons({ playerName: player.Name }).then((result) => {
        const cleanResult = result.weapons.filter(
          (item: any) => item.weapon !== ''
        )
        setWeapons(cleanResult)
        setLoading(false)
      })
    }
  }, [player.Name, isLoading])

  const gearStats = weapons.map((item: any, index: number) => {
    if (index === choosedWeapon)
      return (
        <GearStats
          current={item.weapon_name}
          key={genKey()}
          avgIp={item.average_item_power}
          killFame={item.kill_fame}
          usages={item.usages}
          kills={item.kills}
          assists={item.assists}
          winRate={item.win_rate}
        />
      )
    return null
  })

  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">{category}</div>
        <div className="gear-container">{renderMostUsedGear}</div>
        {isLoading ? 'Loading' : gearStats}
      </div>
    </>
  )
}
