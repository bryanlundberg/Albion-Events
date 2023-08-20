import { API } from "../const/api"

export default async function getSearch({ query }) {
  try {
    const request = await fetch(`${API.SEARCH}${query}`)
    return await request.json()
  } catch (error) {
    console.log(error)
    return null
  }
}