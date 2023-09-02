import '@/stylesheets/ProgressBar.css'

export default function ProgressBar({
  percentage,
  amount,
  extraClassName = null,
  icon
}: {
  percentage: string | number
  amount: number
  extraClassName: string | any
  icon: string
}) {
  return (
    <>
      <div className="progress-bar-container">
        <img src={icon} alt="" className="progress-bar-icon" />
        <div className="progress-bar">
          <span
            style={{ width: `${percentage}%` }}
            className={'fill-progress-bar ' + extraClassName}
          ></span>
        </div>
        <span className="progress-bar-text">{percentage}%</span>
      </div>
    </>
  )
}
