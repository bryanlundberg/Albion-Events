import BattleStar from "./BattleStar";
import "../stylesheets/BattlegroundStars.css";
import genKey from "../functions/genKey";

export default function BattlegroundStars({ players }) {
  const categories = [
    { name: 'Highest Item Power', prop: 'averageItemPower' },
    { name: 'Most Fame', prop: 'killFame' },
    { name: 'Most Kills', prop: 'kills' },
    { name: 'Most Assists', prop: 'assistDone' },
    { name: 'Most Damage', prop: 'damageDone' },
    { name: 'Most Healing', prop: 'supportHealingDone' },
    { name: 'Most Drop Fame', prop: 'dropFame' },
  ];

  const stars = categories.map((category) => {
    const sortedPlayers = [...players].sort((a, b) => b[category.prop] - a[category.prop]);
    const topPlayer = sortedPlayers.length > 0 ? sortedPlayers[0] : null;

    return (
      <BattleStar
        key={genKey()}
        category={category.name}
        playerName={topPlayer ? topPlayer.name : ''}
        score={topPlayer ? (category.prop === 'killFame' ? topPlayer[category.prop].toLocaleString() : topPlayer[category.prop].toFixed(0)) : 0}
        equipment={topPlayer ? Object.values(topPlayer.equipment) : null}
      />
    );
  });

  return (
    <div className="battleground-stars-container">
      <BattleStar category="MVP" />
      {stars}
    </div>
  );
}