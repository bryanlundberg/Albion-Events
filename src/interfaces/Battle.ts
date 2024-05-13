interface BattleAllianceData {
  [allianceId: string]: BattleAlliance;
}

interface BattleAlliance {
  deaths: number;
  id: string;
  killFame: number;
  kills: number;
  name: string;
}

interface BattleGuildData {
  [guildId: string]: BattleGuild;
}

interface BattleGuild {
  alliance: string;
  allianceId: string;
  deaths: number;
  id: string;
  killFame: number;
  kills: number;
  name: string;
}

interface BattlePlayerData {
  [playerId: string]: BattlePlayer;
}

interface BattlePlayer {
  alliance: string;
  allianceId: string;
  deaths: number;
  guildId: string;
  guildName: string;
  id: string;
  killFame: number;
  kills: number;
  name: string;
}

interface BattlePlayerExtended extends BattlePlayer {
  damageDone: number;
  supportHealingDone: number;
  assistDone: number;
  averageItemPower: number;
  dropFame: number;
  equipment: Equipment;
  mvp: number;
}

interface Battle {
  alliances: BattleAllianceData;
  battle_TIMEOUT: number;
  clusterName: string | null;
  endTime: string;
  guilds: BattleGuildData;
  id: number;
  players: BattlePlayerData;
  startTime: string;
  timeout: string;
  totalFame: number;
  totalKills: number;
}
