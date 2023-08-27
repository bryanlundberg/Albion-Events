import { Link } from 'react-router-dom'
import '../stylesheets/ErrorBattle.css'

export default function ErrorPage() {
  return (
    <>
      <div className="container-error">
        <div className="big">Oops</div>
        <div className="medium">
          Albion server has not data about this search yet.
        </div>
        <div className="medium">Please try again later.</div>
        <Link to="/">Return Home</Link>
      </div>
    </>
  )
}
