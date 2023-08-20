import SearchItem from "./SearchItem"
import "../stylesheets/SearchResults.css"

export default function SearchResults({ results }) {
  const renderResults = results.map((result) => {
    return (
      <SearchItem playerName={result.Name} playerId={result.Id} />
    )
  })
  return (
    <>
      <div className="result-container">
        {renderResults}
      </div>
    </>
  )
}