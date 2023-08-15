import '../stylesheets/Item.css'

export default function Item({ alt, url }) {
  return (
    <>
      <img className="item" src={url} alt={alt} />
    </>
  )
}