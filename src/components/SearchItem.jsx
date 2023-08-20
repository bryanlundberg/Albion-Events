import { Link } from "react-router-dom"
import "../stylesheets/SearchItem.css"

export default function SearchItem({ playerName, playerId }) {
  return (
    <>
      <Link to={`/players/${playerId}`} className="result-item">{playerName}</Link>
    </>
  )
}