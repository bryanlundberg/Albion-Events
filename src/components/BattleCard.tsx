import '@/stylesheets/BattleCard.css'

export default function BattleCard({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="card-container">
      <div className="title">BATTLE INFO</div>
      <div className="card-data">{children}</div>
    </div>
  )
}
