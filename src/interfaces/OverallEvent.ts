interface OverallEvent {
  BattleId: number;
  Category: null;
  EventId: number;
  GroupMembers: GroupMember[];
  GvGMatch: null;
  KillArea: string;
  Killer: Player;
  Location: null;
  Participants: Player[];
  TimeStamp: string;
  TotalVictimKillFame: number;
  Type: string;
  Version: number;
  Victim: Player;
  groupMemberCount: number;
  numberOfParticipants: number;
}
