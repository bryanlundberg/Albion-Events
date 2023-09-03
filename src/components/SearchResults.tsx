import genKey from '@/functions/genKey'
import SearchItem from './SearchItem'
import '@/stylesheets/SearchResults.css'

export default function SearchResults({
  possibleSearchResults
}: {
  possibleSearchResults: any[]
}) {
  const renderResults = possibleSearchResults.map((searchResult) => {
    return (
      <SearchItem
        key={genKey()}
        playerName={searchResult.Name}
        playerId={searchResult.Id}
      />
    )
  })
  return (
    <>
      <div className="result-container">{renderResults}</div>
    </>
  )
}
