"use client";

import getPlayerEvents from "@/functions/getPlayerEvents";
import forceSyncPlayerInfo from "@/loaders/forceSyncPlayerInfo";
import getEvent from "@/loaders/getEvent";
import getEvents from "@/loaders/getEvents";
import getPlayer from "@/loaders/getPlayer";
import { useEffect, useState } from "react";

export default function PrintDataFront() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    forceSyncPlayerInfo({ playerId: "Tw0gjmJ6Rh6FWdYchFePzg" }).then((data) =>
      console.log(data)
    );
    getPlayerEvents({ playerName: "SHOTYOUHEAD", all: true }).then((data) =>
      console.log(data)
    );
  }, []);
  return <></>;
}
