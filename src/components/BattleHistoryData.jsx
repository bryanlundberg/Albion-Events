

export default function BattleHistoryData({ killer, victim, killerIp, victimIp, fame }) {
  return (
    <tr>
      <td>{killer}</td>
      <td>{victim}</td>
      <td>{killerIp}</td>
      <td>{victimIp}</td>
      <td>{fame}</td>
      <td>View Details</td>
    </tr>
  )
}