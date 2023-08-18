import Item from './Item'
import "../stylesheets/PlayerFavGear.css"

export default function PlayerFavGear() {
  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">Most Played Gear:</div>
        <div className="gear-container">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  )
}