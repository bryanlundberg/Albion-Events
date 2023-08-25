import '../stylesheets/Table.css'

export default function EventHeader() {
  return (
    <div className="table-header">
      <div className="table-date align-text-start">Date</div>
      <div className="table-killer align-text-center">Killer</div>
      <div className="table-ip align-text-center">IP</div>
      <div className="table-victim align-text-center">Victim</div>
      <div className="table-fame align-text-end">Fame</div>
    </div>
  )
}
