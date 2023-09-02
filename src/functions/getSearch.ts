import { API } from '../const/api'

export default async function getSearch({ query }: { query: string }) {
  try {
    const request = await fetch(`${API.SEARCH}${query}`)
    return await request.json()
  } catch (error) {
    console.log(error)
    return null
  }
}
