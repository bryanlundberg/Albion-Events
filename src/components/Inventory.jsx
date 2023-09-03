import '@/stylesheets/InventoryVictim.css'
import Item from '@/components/Item'
import { API } from '@/const/api'
import genKey from '@/functions/genKey'

export default function Invetory({ victimInventory }) {
  const renderInventory = victimInventory.map((item) => {
    if (item === null) return null
    return (
      <Item
        key={genKey()}
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={`${item.Type}.png`}
        extraClassName={'large-size'}
      />
    )
  })
  return (
    <>
      <div className="intentory-title">Victim&apos;s Inventory</div>
      <div className="inventory-stack">{renderInventory}</div>
    </>
  )
}
