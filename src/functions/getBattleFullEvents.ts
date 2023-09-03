import { API } from '@/const/api'

export default async function getBattleFullEvents({ battle }: { battle: any }) {
  let killsOffset: number = 0
  let killboard: any[] = []
  while (killsOffset <= battle.totalKills) {
    const request = await fetch(
      `${API.BATTLES.HISTORY}${battle.id}?offset=${killsOffset}&limit=51`
    )
    if (!request.ok) throw new Error()
    const events = await request.json()

    killboard = killboard.concat(events)
    killsOffset += 51
  }

  return killboard
}
