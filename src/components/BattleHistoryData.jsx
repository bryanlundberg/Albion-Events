import { Link } from 'react-router-dom'

export default function BattleHistoryData({
  killer,
  victim,
  killerIp,
  victimIp,
  fame,
  eventId,
}) {
  return (
    <tr>
      <td>{killer}</td>
      <td>{victim}</td>
      <td>{killerIp}</td>
      <td>{victimIp}</td>
      <td>{fame}</td>
      <td>
        <Link to={`/events/${eventId}`}>Details</Link>
      </td>
    </tr>
  )
}
