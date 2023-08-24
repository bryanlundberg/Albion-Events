export const API = {
  LASTEVENTS: 'https://gameinfo.albiononline.com/api/gameinfo/events?limit=20',
  EVENT: 'https://gameinfo.albiononline.com/api/gameinfo/events/',
  BATTLES: {
    OVERALL: 'https://gameinfo.albiononline.com/api/gameinfo/battles/',
    HISTORY: 'https://gameinfo.albiononline.com/api/gameinfo/events/battle/' // REQUIRE LIMIT (0-51), OFFSET (0-1000) https://gameinfo.albiononline.com/api/gameinfo/events/battle/227472764?offset=0&limit=51
  },
  STATS: 'https://gameinfo.albiononline.com/api/gameinfo/players/',
  SEARCH: 'https://gameinfo.albiononline.com/api/gameinfo/search?q=',
  AVATAR: 'https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/HUMAN_FEMALE_',
  FRAME: 'https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/',
  ITEM: 'https://render.albiononline.com/v1/item/',
  BG_ITEMS: 'https://assets.albiononline.com/assets/images/killboard/gear.png?u8993ed42',
  ICONS: {
    BATTLE: 'https://media.discordapp.net/attachments/1137527038366978078/1141526775143333928/sword.png',
    HEAL: 'https://media.discordapp.net/attachments/1137527038366978078/1141526774266740857/regeneration.png',
    EMPTY_SLOT: 'https://media.discordapp.net/attachments/1137527038366978078/1142438375450746901/empty_slot.png',
    SKULL: 'https://media.discordapp.net/attachments/1137527038366978078/1143698932292141176/kill__date.png'
  },
  MURDERLEDGER: 'https://murderledger.com/api/players/'
}