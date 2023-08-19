import { API } from "../const/api"

export default async function getPlayerEvents({ playerName, showAssist=true, showDeaths=true, showKills=true, skip=0, sort='time', take=10 }) {
  try {
    const request = await fetch(`${API.MURDERLEDGER.EVENTS}${playerName}/events?show_assists=${showAssist}&show_deaths=${showDeaths}&show_kills=${showKills}&skip=${skip}&sort=${sort}&take=${take}`)
    console.log(`${API.MURDERLEDGER.EVENTS}${playerName}/events?show_assists=${showAssist}&show_deaths=${showDeaths}&show_kills=${showKills}&skip=${skip}&sort=${sort}&take=${take}`)
    return await request.json()
  } catch (error) {
    console.log(error)
    return { events: []}
  }
}