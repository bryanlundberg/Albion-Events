import LinkLabel from "./LinkItem";

export default function BattleHistoryData({
  killerId,
  victimId,
  killer,
  victim,
  killerIp,
  victimIp,
  fame,
  eventId,
}: {
  killerId: string;
  victimId: string;
  killer: string;
  victim: string;
  killerIp: string | number;
  victimIp: string | number;
  fame: string | number;
  eventId: number;
}) {
  return (
    <tr className="text-xs odd:bg-gray-100">
      <td>
        <LinkLabel href={`/players/${killerId}`} label={killer} />
      </td>
      <td>
        <LinkLabel href={`/players/${victimId}`} label={victim} />
      </td>
      <td className="hidden sm:inline-block text-center w-32">{killerIp}</td>
      <td className="hidden sm:inline-block text-center w-32">{victimIp}</td>
      <td>{fame}</td>
      <td>
        <LinkLabel href={`/events/${eventId}`} label={"Open"} />
      </td>
    </tr>
  );
}
