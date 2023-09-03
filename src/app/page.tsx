import Link from 'next/link'
import getEvents from '@/loaders/getEvents'
import Header from '@/components/Header'
import Search from '@/components/Search'
import EventsTable from '@/components/EventsTable'
import { Suspense } from 'react'
import '@/stylesheets/Root.css'

export default function Home() {
  return (
    <>
      <div className="center-content">
        <Header title="ALBION EVENTS" />
        <Search />
        <Suspense>
          <EventsTable />
        </Suspense>
      </div>
    </>
  )
}
