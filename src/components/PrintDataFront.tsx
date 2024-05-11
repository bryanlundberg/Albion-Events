"use client";

import getEvent from "@/loaders/getEvent";
import getEvents from "@/loaders/getEvents";
import { useEffect, useState } from "react";

export default function PrintDataFront() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getEvent({ eventId: "1035034639" }).then((data) => console.log(data));
  }, []);
  return <></>;
}
