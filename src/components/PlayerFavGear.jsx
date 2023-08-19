import Item from './Item'
import "../stylesheets/PlayerFavGear.css"
import DataStats from './DataStats'
import { useLoaderData } from 'react-router-dom'
import { API } from "../const/api"

export default function PlayerFavGear({ category }) {
  const { weapon } = useLoaderData()

  const removeNakedKill = weapon.weapons.filter(item => {
    if (item.weapon !== '') return item
    return null
  })

  const renderMostUsedGear = removeNakedKill.map((weaponUsed, index) => {
    if (index < 5) {
      return (
        <Item key={weaponUsed.weapon} alt={weaponUsed.weapon} url={`${API.ITEM}T8_${weaponUsed.weapon}@4.png?count=${1}&quality=${5}`} />
      )
    }
    return null
  })
  
  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">{category}</div>
        <div className="gear-container">
          {renderMostUsedGear}
        </div>
        <DataStats title={'Average IP:'} stat={(weapon.weapons[0].average_item_power).toFixed(0)} />
        <DataStats title={'Kill Fame:'} stat={(weapon.weapons[0].kill_fame).toLocaleString()} />
        <DataStats title={'Usages:'} stat={(weapon.weapons[0].usages).toLocaleString()} />
        <DataStats title={'Kills:'} stat={(weapon.weapons[0].kills).toLocaleString()} />
        <DataStats title={'Assist:'} stat={(weapon.weapons[0].assists).toLocaleString()} />
        <DataStats title={'Win rate:'} stat={`${((weapon.weapons[0].win_rate)*100).toFixed(2)}%`} />
      </div>
    </>
  )
}