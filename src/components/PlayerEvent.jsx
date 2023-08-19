import "../stylesheets/PlayerEvent.css"
import Item from "./Item"
import { API } from "../const/api"
import { Link } from "react-router-dom"

export default function PlayerEvent({ killerName, victimName, gearItemKiller, gearItemVictim, eventId, dropFame, time, killerIp, victimIp, profileName }) {

  const combatStatus = profileName === killerName ? 'Win' : 'Loss'

  const categoryItemsKiller = Object.values(gearItemKiller)
  const renderKillerItems = categoryItemsKiller.map((item, index) => {
    if (index === 0) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 2) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 3) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 4) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 6) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    return null
  })

  const categoryItemsVictim = Object.values(gearItemVictim)
  const renderVictimItems = categoryItemsVictim.map((item, index) => {
    if (index === 0) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 2) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 3) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 4) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    if (index === 6) return <Item alt={`${item.id}-${item.en_name}`} url={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`} key={item.id+index} />
    return null
  })
  
  return (
    <Link to={`/events/${eventId}`} className={`player-event-container ${combatStatus.toLocaleLowerCase()}`}>
      <div className="event-gear-section">
        <div className="title">{killerName} - ({killerIp} IP)</div>
        <div className="gear-items">
          {renderKillerItems}
        </div>
      </div>
      <div className="info-section">
        <div className="title">{combatStatus}</div>
        <div className="subtitle">{dropFame}</div>
        <div className="time">3 hours ago</div>
      </div>
      <div className="event-gear-section">
      <div className="title">{victimName} - ({victimIp} IP)</div>
        <div className="gear-items">
          {renderVictimItems}
        </div>
      </div>
    </Link>
  )
}