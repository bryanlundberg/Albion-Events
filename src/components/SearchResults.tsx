'use client'
import genKey from '@/functions/genKey'
import SearchItem from './SearchItem'
import '@/stylesheets/SearchResults.css'

export default function SearchResults({
  results
}: {
  results: [{ Name: string; Id: string }]
}) {
  const renderResults = results.map((result) => {
    return (
      <SearchItem
        key={genKey()}
        playerName={result.Name}
        playerId={result.Id}
      />
    )
  })
  return (
    <>
      <div className="result-container">{renderResults}</div>
    </>
  )
}
