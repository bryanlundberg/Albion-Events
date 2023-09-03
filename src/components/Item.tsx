'use client'
import '@/stylesheets/Item.css'
import Image from 'next/image'

export default function Item({
  alt = 'empty',
  url,
  extraClassName = null,
  onChoosedWeapon,
  clickable = false,
  id
}: {
  alt?: string
  url: string
  extraClassName?: string | null
  onChoosedWeapon?: any
  clickable?: boolean
  id?: any
}) {
  return (
    <>
      <Image
        onClick={(e) => {
          if (clickable) onChoosedWeapon(id)
        }}
        className={`item ${clickable === true ? 'cursor' : ''} ${
          extraClassName === null || undefined ? '' : extraClassName
        }`}
        width={64}
        height={64}
        src={url}
        alt={alt}
        id={id}
      />
    </>
  )
}
