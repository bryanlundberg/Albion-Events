import Header from '@/components/Header'
import PlayerActivity from '@/components/PlayerActivity'
import PlayerInfo from '@/components/PlayerInfo'
import genKey from '@/functions/genKey'
import Link from 'next/link'
import type { Metadata } from 'next'
import getPlayer from '@/loaders/getPlayer'
import getAvatarAndFrame from '@/loaders/getAvatarAndFrame'
import '@/stylesheets/Player.css'

export const metadata: Metadata = {
  title: 'Albion Events | Player Performance'
}

export default async function PlayerPage({
  params
}: {
  params: { playerId: string }
}) {
  const player = await getPlayer({ playerId: params.playerId })
  const newPlayerData = await getAvatarAndFrame({ player: player })

  return (
    <>
      <Header title={'Performance Overview'} />
      <Link href="/">return index</Link>
      <div className="player-view-layout">
        <PlayerInfo key={genKey()} player={newPlayerData} />
        <PlayerActivity key={genKey()} player={newPlayerData} />
      </div>
    </>
  )
}
