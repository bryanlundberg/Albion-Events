import { API } from '@/const/api'

export default async function getPlayer({ playerId }: { playerId: string }) {
  const request = await fetch(`${API.STATS}${playerId}`, { cache: 'no-store' })
  if (!request.ok) {
    throw new Error(
      "We couldn't locate the player info on the server at the moment."
    )
  }
  return request.json()
}
