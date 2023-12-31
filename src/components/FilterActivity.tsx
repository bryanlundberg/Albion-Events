import '@/stylesheets/FilterActivity.css'

export default function FilterActivity({
  playerName,
  onChangeFilter,
  filter
}: {
  playerName: string
  onChangeFilter: any
  filter: string
}) {
  return (
    <div className="filter-activity-container">
      <div>{playerName}&apos;s last activity: </div>
      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          name="activity-filter"
          id="activity-filter"
        >
          <option value="all">All</option>
          <option value="kill">Kill</option>
          <option value="death">Death</option>
          <option value="assist">Assist</option>
        </select>
      </div>
    </div>
  )
}
