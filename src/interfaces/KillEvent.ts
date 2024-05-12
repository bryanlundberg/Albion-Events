interface KillEvent {
  battle_id: number;
  id: number;
  killer: {
    alliance_name: string;
    damage_done: number;
    elo_change: number;
    guild_name: string;
    healing_done: number;
    is_primary: boolean;
    item_power: number;
    kill_fame: number;
    loadout: Loadout;
    name: string;
    vod: string;
  };
  participant_count: number;
  party_size: number;
  tags: {
    fair: boolean;
    is_1v1: boolean;
    is_2v2: boolean;
    is_5v5: boolean;
    is_zvz: boolean;
    unfair: boolean;
  };
  time: number;
  total_kill_fame: number;
  victim: {
    alliance_name: string;
    elo_change: number;
    guild_name: string;
    item_power: number;
    loadout: Loadout;
    name: string;
    vod: string;
  };
}
