import { API } from '@/const/api'

export default async function getEvents() {
  const request = await fetch(`${API.LASTEVENTS}`, { cache: 'no-store' })
  if (!request.ok) {
    throw new Error(
      "We couldn't locate the last events on the server at the moment."
    )
  }
  return request.json()
}
