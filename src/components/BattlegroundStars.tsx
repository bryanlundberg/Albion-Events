import BattleStar from "@/components/BattleStar";

type Category = {
  name: string;
  prop: keyof BattlePlayer;
};

export default function BattlegroundStars({
  players,
}: {
  players: BattlePlayer[];
}) {
  const categories: Category[] = [
    { name: "MVP", prop: "mvp" },
    { name: "Highest Item Power", prop: "averageItemPower" },
    { name: "Most Fame", prop: "killFame" },
    { name: "Most Kills", prop: "kills" },
    { name: "Most Assists", prop: "assistDone" },
    { name: "Most Damage", prop: "damageDone" },
    { name: "Most Healing", prop: "supportHealingDone" },
    { name: "Most Drop Fame", prop: "dropFame" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-10">
      {players.length === 0
        ? null
        : categories.map((category) => {
            const sortedPlayers = players.slice().sort((a, b) => {
              const propA = a[category.prop];
              const propB = b[category.prop];

              if (typeof propA === "number" && typeof propB === "number") {
                return propB - propA;
              }

              return 0;
            });
            const topPlayer = sortedPlayers[0];
            return (
              <BattleStar
                key={category.prop}
                category={category.name}
                score={category.prop}
                player={topPlayer}
              />
            );
          })}
    </div>
  );
}
