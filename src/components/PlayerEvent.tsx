import Item from "@/components/Item";
import { API } from "@/const/api";
import { formatDistanceToNow } from "date-fns";
import LinkLabel from "./LinkItem";

export default function PlayerEvent({
  player,
  event,
}: {
  player: Player;
  event: KillEvent;
}) {
  const gearItems = [0, null, 2, 3, 4, null, 7, null, null, null];
  const resultCombat = event.party_size > 1 ? "Assistance" : "";
  const combatStatus = player.Name === event.killer.name ? "Win" : "Loss";

  const categoryItemsKiller = Object.values(event.killer.loadout);
  const renderKillerItems = categoryItemsKiller.map((item, index) => {
    if (gearItems[index] !== null)
      return (
        <Item
          alt={`${item.id}-${item.en_name}`}
          url={
            item.id !== ""
              ? `${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`
              : `${API.ICONS.EMPTY_SLOT}`
          }
          key={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`}
          // @ts-ignore
          onError={(e) => {
            e.target.src = `${API.ICONS.EMPTY_SLOT}`;
          }}
        />
      );
    return null;
  });

  const categoryItemsVictim = Object.values(event.victim.loadout);
  const renderVictimItems = categoryItemsVictim.map((item, index) => {
    if (gearItems[index] !== null)
      return (
        <Item
          alt={`${item.id}-${item.en_name}`}
          url={
            item.id !== ""
              ? `${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`
              : `${API.ICONS.EMPTY_SLOT}`
          }
          key={`${API.ITEM}${item.id}.png?count=${1}&quality=${item.quality}`}
          // @ts-ignore
          onError={(e) => {
            e.target.src = `${API.ICONS.EMPTY_SLOT}`;
          }}
        />
      );
    return null;
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center border p-3">
      <div className="md:flex-col">
        <p className="text-sm">
          {event.killer.name} - ({event.killer.item_power} IP)
        </p>
        <div className="flex flex-wrap gap-1 mt-3 items-center justify-center">
          {renderKillerItems}
        </div>
      </div>

      <div>
        <div className="text-sm">{combatStatus}</div>
        <LinkLabel
          href={`/events/${event.id}`}
          label={event.total_kill_fame.toLocaleString()}
        />
        <div className="text-xs">
          {formatDistanceToNow(new Date(event.time * 1000))}
        </div>
      </div>
      <div className="md:flex-col">
        <p className="text-sm">
          {event.victim.name} - ({event.victim.item_power} IP)
        </p>
        <div className="flex flex-wrap gap-1 mt-3 items-center justify-center">
          {renderVictimItems}
        </div>
      </div>
    </div>
  );
}
