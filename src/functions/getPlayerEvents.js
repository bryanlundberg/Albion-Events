import { API } from '../const/api'

export default async function getPlayerEvents({
  playerName,
  showAssist = false,
  showDeaths = false,
  showKills = false,
  all = false,
  skip = 0,
  sort = 'time',
  take = 10
}) {
  try {
    if (all) {
      const request = await fetch(
        `${
          API.MURDERLEDGER
        }${playerName}/events?show_assists=${true}&show_deaths=${true}&show_kills=${true}&skip=${skip}&sort=${sort}&take=${take}`
      )
      return await request.json()
    } else {
      const request = await fetch(
        `${API.MURDERLEDGER}${playerName}/events?show_assists=${showAssist}&show_deaths=${showDeaths}&show_kills=${showKills}&skip=${skip}&sort=${sort}&take=${take}`
      )
      return await request.json()
    }
  } catch (error) {
    console.log(error)
    return { events: [] }
  }
}
