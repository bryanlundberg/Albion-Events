import { useLoaderData } from "react-router-dom"
import { API } from "../const/api"

export default function Battle() {
  const { battle, history } = useLoaderData()
  console.log(battle)
  console.log(history)

  return (
    <>
    hi
    </>
  )
}

export async function loader({ params }) {
  try {
    const request = await fetch(`${API.BATTLES.OVERALL}${params.battleId}`)
    const battle = await request.json()
    // remove this search (history) later making it dynamic with useEffect
    const request2 = await fetch(`${API.BATTLES.HISTORY}${params.battleId}?offset=350&limit=1`)
    const history = await request2.json()
    return { battle, history }
  } catch (error) {
    console.error(error)
    return { battle: null}
  }
}