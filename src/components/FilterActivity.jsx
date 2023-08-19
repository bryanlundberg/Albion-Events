import "../stylesheets/FilterActivity.css"

export default function FilterActivity({ playerName }) {
  return (
    <div className="filter-activity-container">
      <div>{playerName}'s last activity: </div>
      <div>Filter</div>
    </div>
  )
}