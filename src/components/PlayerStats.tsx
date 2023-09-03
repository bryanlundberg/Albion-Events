import '@/stylesheets/PlayerStats.css'
import DataStats from '@/components/DataStats'
import { API } from '@/const/api'
import genKey from '@/functions/genKey'
import AvatarPic from './AvatarPic'

export default function PlayerStats({
  avatar,
  frame,
  player
}: {
  avatar: string
  frame: string
  player: any
}) {
  const totalFame: number =
    0 +
    player.KillFame +
    player.LifetimeStatistics.Crafting.Total +
    player.LifetimeStatistics.FarmingFame +
    player.LifetimeStatistics.FishingFame +
    player.LifetimeStatistics.Gathering.All.Total +
    player.LifetimeStatistics.PvE.Total

  return (
    <>
      <div className="stats-container">
        <div className="avatar-container">
          <AvatarPic idAvatar={avatar} playerName={player.Name} type="avatar" />
          <AvatarPic
            idAvatar={frame}
            playerName={player.Name}
            type="frame"
            classNameExtra="frame"
          />
          <div>{player.Name}</div>
        </div>
        <DataStats
          key={genKey()}
          title={'Total Fame:'}
          bold={true}
          stat={totalFame.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'PvP Fame:'}
          bold={true}
          stat={player.KillFame.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'PvE Fame:'}
          bold={true}
          stat={player.LifetimeStatistics.PvE.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Avalon:'}
          stat={player.LifetimeStatistics.PvE.Avalon.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Corrupted Dungeon:'}
          stat={player.LifetimeStatistics.PvE.CorruptedDungeon.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Hellgate:'}
          stat={player.LifetimeStatistics.PvE.Hellgate.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Mists:'}
          stat={player.LifetimeStatistics.PvE.Mists.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Outlands:'}
          stat={player.LifetimeStatistics.PvE.Outlands.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Royal:'}
          stat={player.LifetimeStatistics.PvE.Royal.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Crafting Fame:'}
          bold={true}
          stat={player.LifetimeStatistics.Crafting.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Fishing Fame:'}
          bold={true}
          stat={player.LifetimeStatistics.FishingFame.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'All Gathering Fame:'}
          bold={true}
          stat={player.LifetimeStatistics.Gathering.All.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Gather Fiber:'}
          stat={player.LifetimeStatistics.Gathering.Fiber.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Gather Hide:'}
          stat={player.LifetimeStatistics.Gathering.Hide.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Gather Ore:'}
          stat={player.LifetimeStatistics.Gathering.Ore.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Gather Rock'}
          stat={player.LifetimeStatistics.Gathering.Rock.Total.toLocaleString()}
        />
        <DataStats
          key={genKey()}
          title={'Gather Wood:'}
          stat={player.LifetimeStatistics.Gathering.Wood.Total.toLocaleString()}
        />
      </div>
    </>
  )
}
