'use client'
import { API } from '@/const/api'
import Image from 'next/image'
import { useState } from 'react'

type select = 'avatar' | 'frame'

export default function AvatarPic({
  idAvatar,
  playerName,
  type,
  classNameExtra = ''
}: {
  idAvatar: string
  playerName: string
  type: select
  classNameExtra?: string
}) {
  const srcComplementary =
    type === 'avatar'
      ? API.AVATAR + idAvatar + '.png'
      : API.FRAME + idAvatar + '.png'
  const error = type === 'avatar' ? API.DEFAULT.AVATAR : API.DEFAULT.FRAME
  const altComplementary =
    type === 'avatar'
      ? `${playerName}'s avatar in game`
      : `${playerName}'s frame in game`

  const [src, setSrc] = useState(srcComplementary)

  return (
    <Image
      className={`${classNameExtra}`}
      width={256}
      height={256}
      src={src}
      alt={altComplementary}
      onError={(e: any) => {
        setSrc(error)
      }}
    />
  )
}
