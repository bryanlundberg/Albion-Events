
export default function calAvgIp(players, property) {
  const total = players.reduce((total, element) => total + (element[property] || 0), 0);
  return total / players.length || 0;
}