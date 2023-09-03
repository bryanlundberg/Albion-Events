import '@/stylesheets/ProgressBar.css'
import Image from 'next/image'

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
        <Image
          src={icon}
          alt=""
          className="progress-bar-icon"
          width={128}
          height={128}
        />
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
