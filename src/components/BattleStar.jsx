import Item from "./Item"
import "../stylesheets/BattleStar.css"
import { API } from "../const/api"
import genKey from "../functions/genKey"

export default function BattleStar({ category, playerName, score, equipment }) {
  
  const gearItems = [0, null, 2, 3, 4, null, 7, null, null, null]
  const renderPlayerItems = () => {
    if (Array.isArray(equipment)) {
      return equipment.map((item, index) => {
        if (gearItems[index] !== null) {
          return (
            <Item
              alt={`${item.Type}`}
              url={
                item.Type !== ""
                  ? `${API.ITEM}${item.Type}.png?count=${1}&quality=${item.Quality}`
                  : `${API.ICONS.EMPTY_SLOT}`
              }
              key={genKey()}
              onError={(e) => {
                e.target.src = `${API.ICONS.EMPTY_SLOT}`
              }}
            />
          )
        }
        return null
      })
    }
  }
  
  return (
    <div className="battle-star-container">
      <div className="card-header">
        <div className="card-title">{category}</div>
        <div>ICON</div>
      </div>
      <div className="card-body">
        <div className="player-name">{playerName}</div>
        <div className="player-score">{score}</div>
      </div>
      <div className="card-footer">
        {renderPlayerItems()}
      </div>
    </div>
  )
}