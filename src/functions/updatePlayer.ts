export default function updatePlayer(player: any, events: any[]) {
  for (let x = 0; x < events.length; x++) {
    for (let y = 0; y < events[x].Participants.length; y++) {
      if (player.id === events[x].Participants[y].Id) {
        if (player.damageDone === 0)
          player.damageDone += events[x].Participants[y].DamageDone
        if (player.supportHealingDone === 0)
          player.supportHealingDone +=
            events[x].Participants[y].SupportHealingDone
        if (player.assistDone === 0) player.assistDone += 1
        if (player.averageItemPower === 0)
          player.averageItemPower = events[x].Participants[y].AverageItemPower
        if (player.equipment === null)
          player.equipment = events[x].Participants[y].Equipment
      }
    }
    // for (let z = 0; z < events[x].GroupMembers.length; z++) {
    //   if (player.id === events[x].GroupMembers[z].Id && player.averageItemPower === 0) player.averageItemPower = events[x].GroupMembers[z].AverageItemPower
    //   if (player.id === events[x].GroupMembers[z].Id && player.equipment === null) player.equipment = events[x].GroupMembers[z].Equipment
    // }
    if (player.id === events[x].Victim.Id) {
      player.dropFame += events[x].Victim.DeathFame
      player.equipment = events[x].Victim.Equipment
      player.averageItemPower = events[x].Victim.AverageItemPower
    }
  }
  return player
}

export function setDefaultPlayers({ battle }: { battle: any }) {
  const playersList = Object.values(battle.players).map((player: any) => {
    return {
      ...player,
      damageDone: 0,
      supportHealingDone: 0,
      assistDone: 0,
      averageItemPower: 0,
      dropFame: 0,
      equipment: null,
      mvp: 0
    }
  })
  return playersList
}
