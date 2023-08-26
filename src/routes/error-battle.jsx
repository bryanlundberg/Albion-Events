import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../stylesheets/ErrorBattle.css'

export default function ErrorBattle() {
  return (
    <>
      <Header title={'BATTLE REPORT'} />
      <div className="container-error">
        <div className="big">Oops</div>
        <div className="medium">
          Albion server has not processed this battle yet.
        </div>
        <div className="medium">Please try again later.</div>
        <Link to="/">Return Home</Link>
      </div>
    </>
  )
}
