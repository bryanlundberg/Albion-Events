import '@/stylesheets/PlayerItemSet.css'
import Image from 'next/image'

export default function PlayerItemSet({
  url,
  alt,
  extraClassName = null
}: {
  url: string
  alt: string
  extraClassName: any
}) {
  return (
    <Image
      className={`item-set ${extraClassName === null ? '' : extraClassName}`}
      src={url}
      alt={alt}
      width={217}
      height={217}
    />
  )
}
