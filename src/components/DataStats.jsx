import "../stylesheets/DataStats.css"

export default function DataStats({ title, stat }) {
  return (
    <>
      <div className="profile-data">
        <div>{title}</div>
        <div>{stat}</div>
      </div>
    </>
  )
}