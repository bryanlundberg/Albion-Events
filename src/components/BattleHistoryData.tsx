import Link from 'next/link'

export default function BattleHistoryData({
  killerId,
  victimId,
  killer,
  victim,
  killerIp,
  victimIp,
  fame,
  eventId
}: {
  killerId: string
  victimId: string
  killer: string
  victim: string
  killerIp: string | number
  victimIp: string | number
  fame: string | number
  eventId: number
}) {
  return (
    <tr>
      <td>
        <Link href={`/players/${killerId}`}>{killer}</Link>
      </td>
      <td>
        <Link href={`/players/${victimId}`}>{victim}</Link>
      </td>
      <td>{killerIp}</td>
      <td>{victimIp}</td>
      <td>{fame}</td>
      <td>
        <Link href={`/events/${eventId}`}>Details</Link>
      </td>
    </tr>
  )
}
