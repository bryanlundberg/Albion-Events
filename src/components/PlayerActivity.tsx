"use client";
import FilterActivity from "@/components/FilterActivity";
import PlayerEvent from "@/components/PlayerEvent";
import { useEffect, useState } from "react";
import getPlayerEvents from "@/functions/getPlayerEvents";
import Loading from "./Loading";

export default function PlayerActivity({ player }: { player: Player }) {
  const [events, setEvents] = useState<KillEvent[]>([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setLoading] = useState(true);

  function onChangeFilter(option: any) {
    setFilter(option);
    setLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerEvents({
        playerName: player.Name,
        showAssist: filter === "assist",
        showDeaths: filter === "death",
        showKills: filter === "kill",
        all: filter === "all",
      })
        .then((data: EventResponse) => {
          setEvents(data.events);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isLoading, filter, player.Name]);

  return (
    <div className="grow">
      <FilterActivity
        player={player}
        onChangeFilter={onChangeFilter}
        filter={filter}
      />
      <div className="flex flex-col mt-3 gap-3">
        {isLoading ? (
          <Loading />
        ) : (
          events.map((event: KillEvent) => {
            return (
              <PlayerEvent
                key={player.Id + "-" + event.id + "-" + event.battle_id}
                player={player}
                event={event}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
