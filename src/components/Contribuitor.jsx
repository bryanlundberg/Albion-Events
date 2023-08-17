import { API } from "../const/api"
import "../stylesheets/Contribuitor.css"
import Item from "./Item"
import ProgressBar from "./ProgressBar"

export default function Contribuitor({ playerName, guildName, itemPower, avatar, equipment, frame, supportHealingDone, damageDone, totalDamageDone, totalHealingDone }) {

  const categories = Object.values(equipment)
  const renderSet = categories.map((category, index) => {
    if (category === null) return null
    if (index === 0) return <Item key={`${playerName}${category.Type}`} url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`} /> //main weapon
    if (index === 2) return <Item key={`${playerName}${category.Type}`} url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`} /> //main head
    if (index === 3) return <Item key={`${playerName}${category.Type}`} url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`} /> //main armor
    if (index === 4) return <Item key={`${playerName}${category.Type}`} url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`} /> //main shoes
    if (index === 6) return <Item key={`${playerName}${category.Type}`} url={`${API.ITEM}${category.Type}.png?count=${category.Count}&quality=${category.Quality}`} /> //main cape
    return null
  })

  return (
    <>
      <div className="container-contribuitor">
        <div className="contribuitor-card">
          <div className="card-align">
            <img className="contribuitor-avatar" src={`${API.AVATAR}${avatar}.png`} alt={`${playerName}'s avatar in game`} />
            <div className="contribuitor-info">
              <div>{playerName}</div>
              <div>Item Power: {itemPower.toFixed(0)}</div>
              <ProgressBar extraClassName={'bg-danger'} amount={damageDone} icon={API.ICONS.BATTLE} />
              <ProgressBar extraClassName={'bg-success'} amount={supportHealingDone} icon={API.ICONS.HEAL} />
            </div>
          </div>
          <div className="contribuitor-set">
            {renderSet}
          </div>
        </div>
      </div>
    </>
  )
}