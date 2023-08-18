import "../stylesheets/PlayerActivity.css"
import FilterActivity from "./FilterActivity"
import PlayerEvent from "./PlayerEvent"

export default function PlayerActivity() {
  return (
    <div className="player-activity-container">
      <div className="player-activity">
        <FilterActivity />
        <div className="player-activity-event-container">
          <PlayerEvent />
          <PlayerEvent />
          <PlayerEvent />
        </div>
      </div>
    </div>
  )
}