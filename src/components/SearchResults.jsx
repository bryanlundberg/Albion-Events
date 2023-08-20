import SearchItem from "./SearchItem"

export default function SearchResults({ results }) {
  const renderResults = results.map((result) => {
    return (
      <SearchItem playerName={result.Name} />
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