import genKey from "@/functions/genKey";
import SearchItem from "./SearchItem";

export default function SearchResults({
  possibleSearchResults,
}: {
  possibleSearchResults: any[];
}) {
  const renderResults = possibleSearchResults.map((searchResult) => {
    return (
      <SearchItem
        key={searchResult.Id}
        playerName={searchResult.Name}
        playerId={searchResult.Id}
      />
    );
  });
  return (
    <>
      <div className="result-container">{renderResults}</div>
    </>
  );
}
