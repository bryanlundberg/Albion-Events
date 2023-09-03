import EventRow from '@/components/EventRow'
import EventHeader from '@/components/EventHeader'
import '@/stylesheets/Table.css'
import EventsTableRow from './EventsTableRow'
import { Suspense } from 'react'

export default async function EventsTable() {
  return (
    <>
      <EventHeader />
      <EventsTableRow />
    </>
  )
}
