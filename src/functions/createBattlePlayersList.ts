import updatePlayer from '@/functions/updatePlayer'
import calMVP from '@/functions/calMVP'
export default async function createBattlePlayersList({
  killboard,
  players
}: {
  killboard: any[]
  players: any[]
}) {
  const updatedPlayerList = players.map((player, index) => {
    updatePlayer(player, killboard)
    player.mvp = calMVP(player)
    return player
  })
  return updatedPlayerList
}
