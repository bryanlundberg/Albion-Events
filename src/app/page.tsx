'use client'
import Link from 'next/link'
import getEvents from '@/loaders/getEvents'
import Header from '@/components/Header'
import Search from '@/components/Search'
import { useEffect, useState } from 'react'
import getSearch from '@/functions/getSearch'
import SearchResults from '@/components/SearchResults'

export default function Home() {
  const [search, setSearch] = useState('')
  const [isSearching, setSearching] = useState(false)
  const [possibleSearch, setNewPossibleSearch] = useState([])

  function onSearch(newSearch: string) {
    setSearch(newSearch)
    newSearch === '' ? setSearching(false) : setSearching(true)
  }

  useEffect(() => {
    if (isSearching) {
      getSearch({ query: search }).then((result) => {
        setNewPossibleSearch(result.players)
      })
    } else {
      setNewPossibleSearch([])
    }
  }, [search, isSearching])

  return (
    <>
      <div className="center-content">
        <Header title="ALBION EVENTS" />
        <Search onSearch={onSearch} search={search} />
        {possibleSearch.length <= 0 || isSearching === false ? null : (
          <SearchResults possibleSearchResults={possibleSearch} />
        )}
      </div>
    </>
  )
}
