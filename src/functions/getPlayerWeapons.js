import { API } from "../const/api"

export default async function getPlayerWeapons({ playerName, lookbackDays=9999 }) {
  try {
  const request = await fetch(`${API.MURDERLEDGER}${playerName}/stats/weapons?lookback_days=${lookbackDays}`)
  console.log(`${API.MURDERLEDGER}${playerName}/stats/weapons?lookback_days=${lookbackDays}`)
  return await request.json()
  } catch (error) {
    console.log(error)
    return []
  }
}