import Header from "@/components/Header";
import EventsTable from "@/components/EventsTable";

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-3">
        <Header title="ALBION EVENTS" />
        <EventsTable />
      </div>
    </>
  );
}
