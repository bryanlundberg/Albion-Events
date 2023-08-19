import "../stylesheets/PlayerEvent.css"
import Item from "./Item"
import { API } from "../const/api"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"

export default function PlayerEvent({ killerName, victimName, gearItemKiller, gearItemVictim, eventId, dropFame, time, killerIp, victimIp, profileName, partySize }) {
  const gearItems = [0, null, 2, 3, 4, null, 7, null, null, null]
  const resultCombat = partySize > 1 ? '' : 'Assistance'
  const combatStatus = profileName === killerName ? 'Win' : 'Loss'
  
  const categoryItemsKiller = Object.values(gearItemKiller)
  const renderKillerItems = categoryItemsKiller.map((item, index) => {
    if (gearItems[index] !== null) return (
      <Item
        alt={`${item.id}-${item.en_name}`}
        url={item.id !== '' ? `${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}` : `${API.ICONS.EMPTY_SLOT}`}
        key={item.id + index}
        onError={(e) => {
          e.target.src = `${API.ICONS.EMPTY_SLOT}`;
        }}
      />
    )
    return null
  })

  const categoryItemsVictim = Object.values(gearItemVictim)
  const renderVictimItems = categoryItemsVictim.map((item, index) => {
    if (gearItems[index] !== null) return (
      <Item
        alt={`${item.id}-${item.en_name}`}
        url={item.id !== '' ? `${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}` : `${API.ICONS.EMPTY_SLOT}`}
        key={item.id + index}
        onError={(e) => {
          e.target.src = `${API.ICONS.EMPTY_SLOT}`;
        }}
      />
    )
    return null
  })

  return (
    <div className={`player-event-container ${combatStatus.toLowerCase()} ${resultCombat.toLowerCase()}`} >
      <div className="event-gear-section">
        <div className="title">{killerName} - ({killerIp} IP)</div>
        <div className="gear-items">
          {renderKillerItems}
        </div>
      </div>
      <div className="info-section">
        <div className="title">{combatStatus}</div>
        <Link to={`/events/${eventId}`} className="subtitle icon-details">{dropFame.toLocaleString()}</Link>
        <div className="time">{formatDistanceToNow(new Date(time*1000))}</div>
      </div>
      <div className="event-gear-section">
      <div className="title">{victimName} - ({victimIp} IP)</div>
        <div className="gear-items">
          {renderVictimItems}
        </div>
      </div>
    </div>
  )
}