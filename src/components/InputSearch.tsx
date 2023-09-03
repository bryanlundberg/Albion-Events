export default function InputSearch({
  onSearch,
  search
}: {
  onSearch: any
  search: string
}) {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      value={search}
      type="text"
      id="search-bar"
      className="search-bar"
      placeholder="Enter a player's name here"
      autoComplete="off"
    />
  )
}
