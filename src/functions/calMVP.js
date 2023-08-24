
export default function calMVP(player) {
  return (
    (player.averageItemPower * player.damageDone) + (player.averageItemPower * player.supportHealingDone) + (player.killFame * player.kills) + (player.killFame * player.assistDone)
  )
}