'use client' // Error components must be Client Components

import Header from '@/components/Header'
import '@/stylesheets/ErrorBattle.css'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <>
      <Header title={'EVENT DETAILS'} />
      <div className="container-error">
        <div className="big">Oops</div>
        <div className="medium">
          Albion server has not processed this event yet.
        </div>
        <div className="medium">Please try again later.</div>
        <Link href="/">Return Home</Link>
      </div>
    </>
  )
}
