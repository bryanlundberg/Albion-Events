import { API } from '@/const/api'

export default async function getPlayer({ playerId }: { playerId: string }) {
  const request = await fetch(`${API.STATS}${playerId}`, { cache: 'no-store' })
  if (!request.ok) throw new Error()
  return request.json()
}
