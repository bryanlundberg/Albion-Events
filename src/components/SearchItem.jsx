import { Link } from "react-router-dom"

export default function SearchItem({ playerName }) {
  return (
    <>
      <Link to={'/'} className="result-item">${playerName}</Link>
    </>
  )
}