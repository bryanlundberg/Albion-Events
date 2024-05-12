export default function FilterActivity({
  player,
  onChangeFilter,
  filter,
}: {
  player: Player;
  onChangeFilter: any;
  filter: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <p>{player.Name}&apos;s last activity: </p>
      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          className="w-28 border border-gray-200 p-1 "
        >
          <option value="all">All</option>
          <option value="kill">Kill</option>
          <option value="death">Death</option>
          <option value="assist">Assist</option>
        </select>
      </div>
    </div>
  );
}
