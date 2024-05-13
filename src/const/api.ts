const PROXY = ``; // https://cors-router.onrender.com/proxy/
export const API = {
  GITHUB: "https://github.com/bryanlundberg/Albion-Events",
  LASTEVENTS: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/events?limit=20`,
  EVENT: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/events/`,
  BATTLES: {
    OVERALL: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/battles/`,
    HISTORY: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/events/battle/`, // REQUIRE LIMIT (0-51), OFFSET (0-1000) https://gameinfo.albiononline.com/api/gameinfo/events/battle/227472764?offset=0&limit=51
  },
  STATS: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/players/`,
  SEARCH: `${PROXY}https://gameinfo.albiononline.com/api/gameinfo/search?q=`,
  AVATAR: `https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/HUMAN_FEMALE_`,
  FRAME: `https://albiononline.ams3.cdn.digitaloceanspaces.com/game-images/`,
  ITEM: `https://render.albiononline.com/v1/item/`,
  BG_ITEMS: `https://assets.albiononline.com/assets/images/killboard/gear.png?u8993ed42`,
  ICONS: {
    BATTLE: `/images/sword.png`,
    HEAL: `/images/regeneration.png`,
    EMPTY_SLOT: `/images/empty_slot.png`,
    SKULL: `/images/devilSkull.png`,
  },
  DEFAULT: {
    AVATAR: "/images/DefaultAvatar.png",
    FRAME: "/images/DefaultFrame.png",
  },
  MURDERLEDGER: `${PROXY}https://murderledger.com/api/players/`,
};
