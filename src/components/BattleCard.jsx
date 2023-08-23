import "../stylesheets/BattleCard.css"

export default function BattleCard({ children, title}) {
  return (
    <div className="card-container">
      <div>BATTLE INFO</div>
      <div>Total players: 342 </div>
      <div>Total fame: 342 </div>
    </div>
  )
}