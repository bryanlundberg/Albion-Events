import { Link } from 'react-router-dom'

export default function BattleHistoryData({
  killerId,
  victimId,
  killer,
  victim,
  killerIp,
  victimIp,
  fame,
  eventId
}) {
  return (
    <tr>
      <td>
        <Link to={`/players/${killerId}`}>{killer}</Link>
      </td>
      <td>
        <Link to={`/players/${victimId}`}>{victim}</Link>
      </td>
      <td>{killerIp}</td>
      <td>{victimIp}</td>
      <td>{fame}</td>
      <td>
        <Link to={`/events/${eventId}`}>Details</Link>
      </td>
    </tr>
  )
}
