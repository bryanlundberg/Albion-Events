import Item from "./Item"
import "../stylesheets/BattleStar.css"

export default function BattleStar({ category, playerName }) {
  return (
    <div className="battle-star-container">
      <div className="card-header">
        <div className="card-title">{category}</div>
        <div>ICON</div>
      </div>
      <div className="card-body">
        <div className="player-name">Rojonaitor</div>
        <div className="player-score">454334</div>
      </div>
      <div className="card-footer">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}