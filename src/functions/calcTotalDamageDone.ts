import { OverallEvent } from "@/interfaces/OverallEvent";

export default function calcTotalDamageDone(event: OverallEvent): number {
  const totalDamageDone: number = event.Participants.reduce(
    (total: number, participant: Player) => {
      return total + participant.DamageDone;
    },
    0
  );

  return totalDamageDone;
}
