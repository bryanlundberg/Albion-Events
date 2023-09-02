import { API } from '@/const/api'

export default async function getEvent({
  eventId
}: {
  eventId: number | string
}) {
  const request = await fetch(`${API.EVENT}${eventId}`, { cache: 'no-store' })
  if (!request.ok) throw new Error()
  return request.json()
}
