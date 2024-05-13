import genKey from "@/functions/genKey";
import BattleHistoryData from "@/components/BattleHistoryData";

export default function BattleKillHistory({
  battleEvents,
}: {
  battleEvents: OverallEvent[];
}) {
  const renderHistoryKillData = () => {
    return battleEvents.map((event: any) => {
      return (
        <BattleHistoryData
          key={genKey()}
          killerId={event.Killer.Id}
          killer={event.Killer.Name}
          victim={event.Victim.Name}
          victimId={event.Victim.Id}
          killerIp={event.Killer.AverageItemPower.toFixed(0)}
          victimIp={event.Victim.AverageItemPower.toFixed(0)}
          fame={event.TotalVictimKillFame.toLocaleString()}
          eventId={event.EventId}
        />
      );
    });
  };

  return (
    <>
      <p className="font-semibold my-5">HISTORY EVENTS</p>
      <table className="w-full text-center">
        <thead className="text-sm w-full">
          <tr className="text-sm">
            <th>Killer</th>
            <th>Victim</th>
            <th className="hidden sm:inline-block text-center w-32">
              Killer IP
            </th>
            <th className="hidden sm:inline-block text-center w-32">
              Victim IP
            </th>
            <th>Fame</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>{renderHistoryKillData()}</tbody>
      </table>
    </>
  );
}
