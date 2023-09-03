import '@/stylesheets/PlayerItemSet.css'

export default function PlayerItemSet({
  url,
  alt,
  extraClassName = null
}: {
  url: string
  alt?: string
  extraClassName: any
}) {
  return (
    <img
      className={`item-set ${extraClassName === null ? '' : extraClassName}`}
      src={url}
      alt={alt}
    ></img>
  )
}
