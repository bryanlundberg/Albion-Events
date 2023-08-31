import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { API } from '../const/api'
import PlayerInfo from '../components/PlayerInfo'
import PlayerActivity from '../components/PlayerActivity'
import '../stylesheets/Player.css'
import genKey from '../functions/genKey'
import Footer from '../components/Footer'

export default function Player() {
  return (
    <>
      <Header title={'Performance Overview'} />
      <Link to="/">return index</Link>
      <div className="player-view-layout">
        <PlayerInfo key={genKey()} />
        <PlayerActivity key={genKey()} />
      </div>
      <Footer />
    </>
  )
}

export async function loader({ params }) {
  try {
    const request = await fetch(`${API.STATS}${params.playerId}`)
    const player = await request.json()
    return { player }
  } catch (error) {
    return null
  }
}
