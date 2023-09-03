export default function BattleKillboardData({
  guild,
  alliance,
  members,
  kills,
  deaths,
  fame,
  ip
}: {
  guild: string
  alliance: string
  members: number
  kills: number
  deaths: number
  fame: number
  ip: number
}) {
  return (
    <tr>
      <td>{guild}</td>
      <td>{alliance}</td>
      <td>{members}</td>
      <td>{kills}</td>
      <td>{deaths}</td>
      <td>{fame}</td>
      <td>{ip.toFixed(0)}</td>
    </tr>
  )
}
