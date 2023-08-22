import "../stylesheets/BattleCard.css"

export default function BattleCard({ children, title }) {
  return (
    <div className="battle-card-container">
      <div className="card-title">{title}</div>
      <div className="card-icon"></div>
      {children}
    </div>
  )
}