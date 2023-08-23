import BattleCard from "./BattleCard";
import "../stylesheets/BattleInformation.css"

export default function BattleInformation() {
  return (
    <>
      <div className="battle-information">
        <div className="battle-id">Battle #43857485</div>
        <div className="battle-resumen-container">
          <BattleCard />
          <div className="image-section">
            <img src="https://media.discordapp.net/attachments/1137527038366978078/1143698932292141176/kill__date.png" alt="#" />
            <div>BATTLE</div>
            <div>21.08.2023 18:13:03</div>
          </div>
          <BattleCard />
        </div>
      </div>
    </>
  )
}