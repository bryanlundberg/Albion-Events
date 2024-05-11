"use client";
import "@/stylesheets/Input.css";
import { useEffect, useState } from "react";
import getSearch from "@/functions/getSearch";
import SearchResults from "@/components/SearchResults";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  function onSearch(newSearch: string) {
    setSearch(newSearch);
    setIsSearching(newSearch !== "");
  }

  useEffect(() => {
    if (isSearching) {
      getSearch({ query: search }).then((result) => {
        setResults(result.players);
      });
    } else {
      setResults([]);
    }
  }, [search, isSearching]);

  return (
    <>
      <input
        onChange={(e) => onSearch(e.target.value)}
        value={search}
        type="text"
        className="p-2 border border-gray-200"
        placeholder="Enter a player's name here"
        autoComplete="off"
      />

      {results.length > 0 && isSearching ? (
        <SearchResults possibleSearchResults={results} />
      ) : null}
    </>
  );
}
