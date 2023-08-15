import Card from "./Card";
import CombatDetails from "./CombatDetails";

export default function EventInfo({ event }) {
  return (
    <>
      <div className="container-content">
        <div className="container-event-info">
          <div className="event-info">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <CombatDetails />
      </div>
    </>
  )
}

