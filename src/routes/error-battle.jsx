import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function ErrorBattle() {
  return (
  <>
    <Header title={'BATTLE REPORT'} />
    <Link to="/" >return index</Link>
    <div>Oops</div>
    <div>Albion server has not processed this battle yet. Please try again later.</div>
  </>
  )
}