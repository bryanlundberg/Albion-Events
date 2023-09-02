'use client'
import Link from 'next/link'
import '@/stylesheets/SearchItem.css'

export default function SearchItem({
  playerName,
  playerId
}: {
  playerName: string
  playerId: string
}) {
  return (
    <>
      <Link href={`/players/${playerId}`} className="result-item">
        {playerName}
      </Link>
    </>
  )
}
