import '../stylesheets/Card.css'
export default function Card({ title, subTitle }) {
  return (
    <>
      <div className="event-info">
        <div className="event-info-title">{title}</div>
        <div className="event-info-subtitle">{subTitle}</div>
      </div>
    </>
  )
}
