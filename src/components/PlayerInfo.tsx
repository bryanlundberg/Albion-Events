import PlayerFavGear from "@/components/PlayerFavGear";
import PlayerStats from "@/components/PlayerStats";
import AvatarPic from "./AvatarPic";

export default function PlayerInfo({ player }: { player: Player }) {
  return (
    <div className="w-full sm:max-w-60">
      <div className="relative max-w-24 mx-auto">
        <AvatarPic
          idAvatar={player.Avatar}
          playerName={player.Name}
          type="avatar"
        />
        <AvatarPic
          idAvatar={player.AvatarRing}
          playerName={player.Name}
          type="frame"
        />
        <p className="font-semibold text-center">{player.Name}</p>
      </div>
      <PlayerStats player={player} />

      <PlayerFavGear title={"Most Played Weapons:"} player={player} />
    </div>
  );
}
