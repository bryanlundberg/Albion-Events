import "../stylesheets/CardPlayer.css"
import PlayerItemSet from "./PlayerItemSet"
import { API } from "../const/api"
import { Link } from "react-router-dom"

export default function CardPlayer({ title, subtitle, equipment, playerId }) {
  const categoriesNames = Object.keys(equipment)
  const categories = Object.values(equipment)
  const renderPlayerSet = categories.map((item, index) => {
    if (item === null) return null
    return (
      <PlayerItemSet 
        key={`${item.Type}.png${item.Type}item${item.Quality}`}
        url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
        alt={item.Type}
        extraClassName={'position-'+categoriesNames[index].toLowerCase()} />
    )
  })
  return (
    <>
      <div className="card-player">
        <div className="player-info">
          <div className="player-info-title">{title}</div>
          <Link to={`/players/${playerId}`} className="player-info-subtitle">{subtitle}</Link>
        </div>
        <div className="player-set">
          {renderPlayerSet}
        </div>
      </div>
    </>
  )
}