import Contributor from "@/components/Contributor";
import calcTotalDamageDone from "@/functions/calcTotalDamageDone";
import calcTotalHealingDone from "@/functions/calcTotalHealingDone copy";

export default function SidebarAssistants({ event }: { event: any }) {
  const totalDamageDone = calcTotalDamageDone(event);
  const totalHealingDone = calcTotalHealingDone(event);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        {event &&
          event.Participants.map((player: Player) => {
            return (
              <Contributor
                player={player}
                key={player.Id}
                totalDamageDone={totalDamageDone}
                totalHealingDone={totalHealingDone}
              />
            );
          })}
      </div>
    </>
  );
}
