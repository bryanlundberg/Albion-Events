import Header from "@/components/Header";
import type { Metadata } from "next";
import Link from "next/link";
import getEvent from "@/loaders/getEvent";
import SidebarAssistants from "@/components/SidebarAssistants";
import EventInfo from "@/components/EventInfo";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Albion Events | Lethal Event",
};

export default async function EventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await getEvent({ eventId: params.eventId });
  return (
    <>
      <div className="max-w-3xl mx-auto px-3">
        <Header title={"LETHAL EVENT"} subtitle={event.TimeStamp} />
        <Link href="/">return index</Link>

        <div className="flex flex-col sm:flex-row gap-3">
          <Card
            title={"Battle Report"}
            subTitle={
              <Link href={`/battles/${event.BattleId}`}>{event.BattleId}</Link>
            }
          />
          <Card
            title={event.Participants.length.toString()}
            subTitle={"Participants"}
          />
        </div>

        <SidebarAssistants event={event} />
        <EventInfo event={event} />
      </div>
    </>
  );
}
