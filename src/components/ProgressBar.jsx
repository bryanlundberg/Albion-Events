import "../stylesheets/ProgressBar.css"

export default function ProgressBar({ percentage, amount, extraClassName, icon }) {
  return (
    <>
      <div className='progress-bar-container'>
        <img src={icon} alt="" className="progress-bar-icon" />
        <div className="progress-bar">
          <span className={'fill-progress-bar ' + extraClassName}></span>
        </div>
        <span className="progress-bar-text">{amount}</span>
      </div>
    </>
  )
}