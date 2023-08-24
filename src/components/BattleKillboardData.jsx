

export default function BattleKillboardData({ guild, alliance, members, kills, deaths, fame, ip }) {
  return (
    <tr>
      <td>{guild}</td>
      <td>{alliance}</td>
      <td>{members}</td>
      <td>{kills}</td>
      <td>{deaths}</td>
      <td>{fame}</td>
      <td>{ip}</td>
    </tr>
  )
}