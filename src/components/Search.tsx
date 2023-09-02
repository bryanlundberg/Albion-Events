'use client'
import '@/stylesheets/Input.css'
import { useEffect, useState } from 'react'
import InputSearch from '@/components/InputSearch'
import getSearch from '@/functions/getSearch'
import SearchResults from '@/components/SearchResults'
import { Suspense } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [possibleSearch, setPossibleSearch] = useState([])

  function onSearch(newSearch: string) {
    setSearch(newSearch)
    setIsSearching(newSearch !== '')
  }

  useEffect(() => {
    if (isSearching) {
      getSearch({ query: search }).then((result) => {
        setPossibleSearch(result.players)
      })
    } else {
      setPossibleSearch([])
    }
  }, [search, isSearching])

  return (
    <>
      <div className="search-container">
        <InputSearch onSearch={onSearch} search={search} />
        <span className="gg-search"></span>
      </div>
      {possibleSearch.length > 0 && isSearching ? (
        <SearchResults possibleSearchResults={possibleSearch} />
      ) : null}
    </>
  )
}
