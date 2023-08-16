import "../stylesheets/PlayerItemSet.css"

export default function PlayerItemSet({ url, alt }) {
  return (
    <img className="item-set" src={url} alt={alt}></img>
  )
}