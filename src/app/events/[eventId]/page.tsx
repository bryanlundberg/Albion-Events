import Header from '@/components/Header'
import type { Metadata } from 'next'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import getEvent from '@/loaders/getEvent'
import { Suspense } from 'react'
import SidebarAssistants from '@/components/SidebarAssistants'
import EventInfo from '@/components/EventInfo'
import '@/stylesheets/Event.css'

export const metadata: Metadata = {
  title: 'Albion Events | Lethal Event',
  description: '...'
}

export default async function Event({
  params
}: {
  params: { eventId: string }
}) {
  const event = await getEvent({ eventId: params.eventId })
  return (
    <>
      <Suspense>
        <Header
          title={'LETHAL EVENT'}
          subtitle={
            formatDistanceToNowStrict(new Date(event.TimeStamp)) + ' ago'
          }
        />
        <Link href="/">return index</Link>
        <div className="event-view-layout">
          <SidebarAssistants event={event} />
          <EventInfo event={event} />
        </div>
      </Suspense>
    </>
  )
}
