"use client";

import getEvents from "@/loaders/getEvents";
import { useEffect, useState } from "react";

export default function PrintDataFront() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getEvents().then((data) => console.log(data));
  }, []);
  return <></>;
}
