import Item from "./Item"
import "../stylesheets/BattleStar.css"

export default function BattleStar({ category, playerName, score, equipment }) {
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}