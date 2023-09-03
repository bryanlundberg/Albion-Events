export default function calMVP(player: any) {
  return (
    player.averageItemPower * player.damageDone * 2 +
    (player.averageItemPower * player.supportHealingDone) / 5 +
    player.killFame * player.kills ** 3 +
    player.killFame * player.assistDone ** 2
  )
}
