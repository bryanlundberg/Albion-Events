import PlayerFavGear from '@/components/PlayerFavGear'
import PlayerStats from '@/components/PlayerStats'
import '@/stylesheets/PlayerInfo.css'
import genKey from '@/functions/genKey'

export default function PlayerInfo({ player }: { player: any }) {
  return (
    <div className="container-player-info">
      <PlayerStats
        key={genKey()}
        avatar={player.Avatar}
        frame={player.AvatarRing}
        player={player}
      />
      <PlayerFavGear
        key={genKey()}
        category={'Most Played Weapons:'}
        player={player}
      />
    </div>
  )
}
