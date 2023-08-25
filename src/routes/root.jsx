import { useLoaderData } from 'react-router-dom'
import { API } from '../const/api'
import EventsTable from '../components/EventsTable'
import Header from '../components/Header'
import Search from '../components/Search'
import '../stylesheets/Root.css'
import { useEffect, useState } from 'react'
import getSearch from '../functions/getSearch'
import SearchResults from '../components/SearchResults'

export default function Root() {
  const events = useLoaderData()

  const [search, setSearch] = useState('')
  const [isSearching, setSearching] = useState(false)
  const [possibleSearch, setNewPossibleSearch] = useState([])

  function onSearch(newSearch) {
    setSearch(newSearch)
    newSearch === '' ? setSearching(false) : setSearching(true)
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
    <div className="center-content">
      <Header title="ALBION EVENTS" />
      <Search onSearch={onSearch} search={search} />
      {possibleSearch.length <= 0 || isSearching === false ? null : (
        <SearchResults results={possibleSearch} />
      )}
      <EventsTable lastEvents={events} />
    </div>
  )
}

export function loader() {
  return fetch(`${API.LASTEVENTS}`)
}
