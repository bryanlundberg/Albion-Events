import Item from './Item'
import "../stylesheets/PlayerFavGear.css"
import DataStats from './DataStats'
import { useLoaderData } from 'react-router-dom'
import { API } from "../const/api"

export default function PlayerFavGear({ category }) {
  const { weapon } = useLoaderData()
  console.log(weapon)
  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">{category}</div>
        <div className="gear-container">
          <Item alt={weapon.weapons[0].weapon} url={`${API.ITEM}T8_${weapon.weapons[0].weapon}@4.png?count=${1}&quality=${5}`} />
          <Item alt={weapon.weapons[1].weapon} url={`${API.ITEM}T8_${weapon.weapons[1].weapon}@4.png?count=${1}&quality=${5}`} />
          <Item alt={weapon.weapons[2].weapon} url={`${API.ITEM}T8_${weapon.weapons[2].weapon}@4.png?count=${1}&quality=${5}`} />
          <Item alt={weapon.weapons[3].weapon} url={`${API.ITEM}T8_${weapon.weapons[3].weapon}@4.png?count=${1}&quality=${5}`} />
          <Item alt={weapon.weapons[4].weapon} url={`${API.ITEM}T8_${weapon.weapons[4].weapon}@4.png?count=${1}&quality=${5}`} />
        </div>
        <DataStats title={'Average IP:'} stat={weapon.weapons[0].average_item_power} />
        <DataStats title={'Kill Fame:'} stat={weapon.weapons[0].kill_fame} />
        <DataStats title={'Usages:'} stat={weapon.weapons[0].usages} />
        <DataStats title={'Kills:'} stat={weapon.weapons[0].kills} />
        <DataStats title={'Assist:'} stat={weapon.weapons[0].assists} />
        <DataStats title={'Win rate:'} stat={`${((weapon.weapons[0].win_rate)*100).toFixed(2)}%`} />
      </div>
    </>
  )
}