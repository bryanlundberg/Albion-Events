import { API } from "../const/api"
import "../stylesheets/Contribuitor.css"
import Item from "./Item"

export default function Contribuitor({ playerName, guildName, itemPower, avatar, equipment, frame }) {
  const categories = Object.values(equipment)

  console.log(categories)

  const renderSet = categories.map((category, index) => {
    if (index === 0) return <Item url={`${API.ITEM}${category.Type}.png`} />
    if (index === 2) return <Item url={`${API.ITEM}${category.Type}.png`} />
    if (index === 3) return <Item url={`${API.ITEM}${category.Type}.png`} />
    if (index === 4) return <Item url={`${API.ITEM}${category.Type}.png`} />
    return null
  })

  return (
    <>
      <div className="container-contribuitor">
        <div className="contribuitor-card">
          <div>
            <img className="contribuitor-avatar" src={`${API.AVATAR}${avatar}.png`} alt={`${playerName}'s avatar in game`} />
          </div>
          <div className="contribuitor-info">
            <div>{playerName} [{guildName}]</div>
            <div>Item Power: {itemPower.toFixed(0)}</div>
          </div>
        </div>
        <div className="contribuitor-set">
          {renderSet}
        </div>
      </div>
    </>
  )
}