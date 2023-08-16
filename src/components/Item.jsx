import '../stylesheets/Item.css'

export default function Item({ alt, url, extraClassName=null }) {
  return (
    <>
      <img className={`item ${extraClassName === null || undefined ? '' : extraClassName}`} src={url} alt={alt} />
    </>
  )
}