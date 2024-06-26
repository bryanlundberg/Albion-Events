import updatePlayer from "@/functions/updatePlayer";
import calMVP from "@/functions/calMVP";

export default function createBattlePlayersList({
  killBoard,
  players,
}: {
  killBoard: OverallEvent[];
  players: BattlePlayerExtended[];
}): BattlePlayerExtended[] {
  const updatedPlayerList = players.map((player) => {
    updatePlayer(player, killBoard);
    player.mvp = calMVP(player);
    return player;
  });
  return updatedPlayerList;
}
