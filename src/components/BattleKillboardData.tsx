export default function BattleKillBoardData({
  guild,
  alliance,
  members,
  kills,
  deaths,
  fame,
  ip,
}: {
  guild: string;
  alliance: string;
  members: number;
  kills: number;
  deaths: number;
  fame: number;
  ip: number;
}) {
  return (
    <tr className="text-xs">
      <td className="text-start">{guild}</td>
      <td className="hidden sm:block">{alliance}</td>
      <td>{members}</td>
      <td>{kills}</td>
      <td>{deaths}</td>
      <td className="hidden sm:block">{fame}</td>
      <td>{ip.toFixed(0)}</td>
    </tr>
  );
}
