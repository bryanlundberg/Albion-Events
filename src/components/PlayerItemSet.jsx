import "../stylesheets/PlayerItemSet.css"

export default function PlayerItemSet({ url, alt, extraClassName=null }) {
  return (
    <img className={`item-set ${extraClassName === null ? '' : extraClassName}`} src={url} alt={alt}></img>
  )
}