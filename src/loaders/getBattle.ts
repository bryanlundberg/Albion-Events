import { API } from '@/const/api'

export async function getBattle({ battleId }: { battleId: string | number }) {
  try {
    const request = await fetch(`${API.BATTLES.OVERALL}${battleId}`)
    const battle = await request.json()
    return { battle }
  } catch (error) {
    throw new Error()
  }
}
