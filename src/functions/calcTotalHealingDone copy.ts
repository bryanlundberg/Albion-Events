export default function calcTotalHealingDone(event: OverallEvent): number {
  const totalHealing: number = event.Participants.reduce(
    (total: number, participant: Player) => {
      return total + participant.SupportHealingDone;
    },
    0
  );

  return totalHealing;
}
