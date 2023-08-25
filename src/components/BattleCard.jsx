import '../stylesheets/BattleCard.css'

export default function BattleCard({ children }) {
  return (
    <div className="card-container">
      <div>BATTLE INFO</div>
      <div className="card-data">{children}</div>
    </div>
  )
}
