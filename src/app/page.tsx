'use client'
import Link from 'next/link'
import getEvents from '@/loaders/getEvents'
import Header from '@/components/Header'
import Search from '@/components/Search'
import { useEffect, useState } from 'react'
import getSearch from '@/functions/getSearch'
import SearchResults from '@/components/SearchResults'

export default function Home() {
  const lastEvents = getEvents()

  const [search, setSearch] = useState('')
  const [isSearching, setSearching] = useState(false)
  const [possibleSearch, setNewPossibleSearch] = useState([])

  function onSearch(newSearch: string) {
    setSearch(newSearch)
    setSearching(newSearch === '')
  }

  useEffect(() => {
    if (isSearching) {
      getSearch({ query: search }).then((result) => {
        setNewPossibleSearch(result.players)
        console.log(result.players)
      })
    }
  }, [search, isSearching, possibleSearch])

  return (
    <>
      <div className="center-content">
        <Header title="ALBION EVENTS" />
        <Search onSearch={onSearch} search={search} />
        {possibleSearch.length <= 0 || isSearching === false ? null : (
          <SearchResults results={possibleSearch} />
        )}
      </div>
    </>
  )
}
