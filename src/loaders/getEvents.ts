import { API } from '@/const/api'

export default async function getEvents() {
  const request = await fetch(`${API.LASTEVENTS}`, { cache: 'no-store' })
  if (!request.ok) throw new Error()
  return request.json()
}
