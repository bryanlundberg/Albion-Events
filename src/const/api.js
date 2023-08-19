export const API = {
  LASTEVENTS: 'https://gameinfo.albiononline.com/api/gameinfo/events?limit=20',
  EVENT: 'https://gameinfo.albiononline.com/api/gameinfo/events/',
  BATTLE: 'https://gameinfo.albiononline.com/api/gameinfo/battles/',
  STATS: 'https://gameinfo.albiononline.com/api/gameinfo/players/',
  AVATAR: 'https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/HUMAN_FEMALE_',
  FRAME: 'https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/',
  ITEM: 'https://render.albiononline.com/v1/item/',
  BG_ITEMS: 'https://assets.albiononline.com/assets/images/killboard/gear.png?u8993ed42',
  ICONS: {
    BATTLE: 'https://media.discordapp.net/attachments/1137527038366978078/1141526775143333928/sword.png',
    HEAL: 'https://media.discordapp.net/attachments/1137527038366978078/1141526774266740857/regeneration.png'
  },
  MURDERLEDGER: {
    MOSTUSEDWEAPON: {
      PART1: 'https://murderledger.com/api/players/',
      PART2: '/stats/weapons?lookback_days=9999'
    },
    EVENTS: {
      PART1: 'https://murderledger.com/api/players/',
      PART2: '/events?show_assists=true&show_deaths=true&show_kills=true&skip=0&sort=time&take=10'
    }
  }
}