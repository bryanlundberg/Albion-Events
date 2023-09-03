import '@/stylesheets/DataStats.css'

export default function DataStats({
  title,
  stat,
  bold = false
}: {
  title: string
  stat: number | string
  bold?: boolean
}) {
  return (
    <>
      <div className="profile-data">
        <div className={`${bold === true ? 'bold' : ''}`}>{title}</div>
        <div className={`${bold === true ? 'bold' : ''}`}>{stat}</div>
      </div>
    </>
  )
}
