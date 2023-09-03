import { API } from '@/const/api'

export async function getBattle({ battleId }: { battleId: string | number }) {
  const request = await fetch(`${API.BATTLES.OVERALL}${battleId}`)
  if (!request.ok)
    throw new Error(
      "We couldn't locate the battle on the server at the moment."
    )
  const battle = await request.json()
  return { battle }
}
