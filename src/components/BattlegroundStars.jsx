import BattleStar from "./BattleStar"
import "../stylesheets/BattlegroundStars.css"

export default function BattlegroundStars() {
  return (
    <>
      <div className="battleground-stars-container">
        <BattleStar />
        <BattleStar />
        <BattleStar />
        <BattleStar />
      </div>
    </>
  )
}