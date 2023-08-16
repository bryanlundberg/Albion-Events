import "../stylesheets/InventoryVictim.css"
import Item from "./Item"
import { API } from "../const/api"

export default function Invetory({ victimInventory }) {
  const renderInventory = victimInventory.map(item => {
    if (item === null) return null
    return (
      <Item 
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={`${item.Type}.png`}
        extraClassName={'large-size'} />
    )
  })
  return (
    <>
      <div className="intentory-title">Victim's Inventory</div>
      <div className="inventory-stack">
        {renderInventory}
      </div>
    </>
  )
}