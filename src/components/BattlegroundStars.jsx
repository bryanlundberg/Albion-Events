import BattleStar from "./BattleStar"
import "../stylesheets/BattlegroundStars.css"

export default function BattlegroundStars({ battle, events, players }) {
  console.log(battle, events)
  console.log(players)

  const updateStats = (players) => {
    players.forEach(player => {
      for (let x = 0; x < events.length; x++) {
        for (let y = 0; y < events[x].Participants.length; y++) {
          if (player.id === events[x].Participants[y].Id) {
            player.damageDone += events[x].Participants[y].DamageDone
            player.supportHealingDone += events[x].Participants[y].SupportHealingDone
            player.assistDone += 1
            player.averageItemPower = events[x].Participants[y].AverageItemPower
            player.equipment = events[x].Participants[y].Equipment
          }
        }
        if (player.id === events[x].Victim.Id) {
          player.dropFame += events[x].Victim.DeathFame
        }
      }
    })
    return players
  }


  const updatedPlayers = updateStats(players)

  console.log(updatedPlayers)

  
  return (
    <>
      <div className="battleground-stars-container">
        <BattleStar category='MVP' />
        <BattleStar category='Highest Item Power' />
        <BattleStar category='Most Fame' />
        <BattleStar category='Most Kills' />
        <BattleStar category='Most Assist' />
        <BattleStar category='Most Damage' />
        <BattleStar category='Most Healing' />
        <BattleStar category='Most Drop Fame' />
      </div>
    </>
  )
}