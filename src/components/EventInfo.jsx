import Card from "./Card";
import CombatDetails from "./CombatDetails";
import "../stylesheets/EventInfo.css"
export default function EventInfo({ event }) {

  return (
    <>
      <div className="container-content">
        <div className="container-event-info">
          <Card title={event.Killer.AverageItemPower.toFixed(0)} subTitle={'Killer Item Power'} />
          <Card title={event.TotalVictimKillFame.toLocaleString() + ' Fame'} subTitle={event.TimeStamp.slice(5,10) + ' ' + event.TimeStamp.slice(11,19)} />
          <Card title={event.Victim.AverageItemPower.toFixed(0)} subTitle={'Victim Item Power'} />
        </div>
        <CombatDetails event={event}/>
      </div>
    </>
  )
}

