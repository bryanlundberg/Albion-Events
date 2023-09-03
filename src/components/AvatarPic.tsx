'use client'
import { API } from '@/const/api'
import Image from 'next/image'

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
  const error =
    type === 'avatar'
      ? `https://media.discordapp.net/attachments/1137527038366978078/1147968592168632360/DefaultAvatar.png`
      : `https://media.discordapp.net/attachments/1137527038366978078/1147969582531879042/DefaultFrame.png`
  const altComplementary =
    type === 'avatar'
      ? `${playerName}'s avatar in game`
      : `${playerName}'s frame in game`

  return (
    <Image
      className={`${classNameExtra}`}
      width={256}
      height={256}
      src={srcComplementary}
      alt={altComplementary}
      onError={(e: any) => {
        e.target.src = error
      }}
    />
  )
}
