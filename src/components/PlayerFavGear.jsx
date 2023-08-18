import Item from './Item'
import "../stylesheets/PlayerFavGear.css"
import DataStats from './DataStats'

export default function PlayerFavGear({ category }) {
  return (
    <>
      <div className="favorite-gear-container">
        <div className="title">{category}</div>
        <div className="gear-container">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <DataStats title={'Average IP:'} stat={543543} />
        <DataStats title={'Kill Fame:'} stat={54325432} />
        <DataStats title={'Usage:'} stat={234534} />
        <DataStats title={'Kills:'} stat={4532543} />
        <DataStats title={'Assist:'} stat={234534} />
        <DataStats title={'Win rate:'} stat={34.432} />
      </div>
    </>
  )
}