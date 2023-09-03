import { API } from '@/const/api'

export default async function getEvent({
  eventId
}: {
  eventId: number | string
}) {
  const request = await fetch(`${API.EVENT}${eventId}`, { cache: 'no-store' })
  if (!request.ok) {
    throw new Error("We couldn't locate the event on the server at the moment.")
  }
  return request.json()
}
