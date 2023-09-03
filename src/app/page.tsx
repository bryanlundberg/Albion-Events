import Header from '@/components/Header'
import Search from '@/components/Search'
import EventsTable from '@/components/EventsTable'
import { Suspense } from 'react'
import '@/stylesheets/Root.css'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <>
      <div className="center-content">
        <Header title="ALBION EVENTS" />
        <Search />
        <EventsTable />
      </div>
    </>
  )
}
