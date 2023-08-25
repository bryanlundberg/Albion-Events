import '../stylesheets/Item.css'

export default function Item({
  alt,
  url,
  extraClassName = null,
  onChoosedWeapon,
  clickable = false,
  id,
}) {
  return (
    <>
      <img
        onClick={(e) => {
          if (clickable) onChoosedWeapon(id)
        }}
        className={`item ${clickable === true ? 'cursor' : ''} ${
          extraClassName === null || undefined ? '' : extraClassName
        }`}
        src={url}
        alt={alt}
        id={id}
      />
    </>
  )
}
