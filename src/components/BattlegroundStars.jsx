import BattleStar from "./BattleStar"
import "../stylesheets/BattlegroundStars.css"

export default function BattlegroundStars() {
  return (
    <>
      <div className="battleground-stars-container">
        <BattleStar category='MVP' />
        <BattleStar category='Highest Item Power' />
        <BattleStar category='Most Fame' />
        <BattleStar category='Most Kills' />
        <BattleStar category='Most Assist' />
        <BattleStar category='Most Damage' />
        <BattleStar category='Most Healing' />
        <BattleStar category='Most Drop Fame' />
      </div>
    </>
  )
}