
export default function updatePlayer(player, events) {
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
    for (let z = 0; z < events[x].GroupMembers.length; z++) {
      if (player.id === events[x].GroupMembers[z].Id && player.averageItemPower === 0) player.averageItemPower = events[x].GroupMembers[z].AverageItemPower
      if (player.id === events[x].GroupMembers[z].Id && player.equipment === null) player.equipment = events[x].GroupMembers[z].Equipment      
    }

    if (player.id === events[x].Victim.Id) {
      player.dropFame += events[x].Victim.DeathFame
      player.equipment = events[x].Victim.Equipment
      player.averageItemPower = events[x].Victim.AverageItemPower
    }
  }
return player
}