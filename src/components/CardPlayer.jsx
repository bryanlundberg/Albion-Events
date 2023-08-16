import "../stylesheets/CardPlayer.css"
import PlayerItemSet from "./PlayerItemSet"
import { API } from "../const/api"

export default function CardPlayer({ title, subtitle, equipment }) {

  const categories = Object.values(equipment)
  const renderPlayerSet = categories.map(item => {
    if (item === null) return null
    return (
      <PlayerItemSet 
        key={`${item.Type}.png${item.Type}item${item.Quality}`}
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={item.Type} />
    )
  })
  return (
    <>
      <div className="card-player">
        <div className="player-info">
          <div className="player-info-title">{title}</div>
          <div className="player-info-subtitle">{subtitle}</div>
        </div>
        <div className="player-set">
          {renderPlayerSet}
        </div>
      </div>
    </>
  )
}