import '@/stylesheets/Input.css'

export default function Search({
  onSearch,
  search
}: {
  onSearch: any
  search: string
}) {
  return (
    <div className="search-container">
      <input
        onChange={(e) => onSearch(e.target.value)}
        value={search}
        type="text"
        id="search-bar"
        className="search-bar"
        placeholder="Enter a player's name here"
        autoComplete="off"
      />
      <span className="gg-search"></span>
    </div>
  )
}
