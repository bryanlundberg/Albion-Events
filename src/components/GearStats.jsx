import genKey from '../functions/genKey'
import DataStats from './DataStats'

export default function GearStats({
  avgIp,
  killFame,
  usages,
  kills,
  assists,
  winRate,
  current,
}) {
  return (
    <>
      <DataStats key={genKey()} title={'Current:'} stat={current} />
      <DataStats
        key={genKey()}
        title={'Usages:'}
        stat={usages.toLocaleString()}
      />
      <DataStats key={genKey()} title={'Average IP:'} stat={avgIp.toFixed(0)} />
      <DataStats
        key={genKey()}
        title={'Kill Fame:'}
        stat={killFame.toLocaleString()}
      />
      <DataStats
        key={genKey()}
        title={'Kills:'}
        stat={kills.toLocaleString()}
      />
      <DataStats
        key={genKey()}
        title={'Assists:'}
        stat={assists.toLocaleString()}
      />
      <DataStats
        key={genKey()}
        title={'Win rate:'}
        stat={`${(winRate * 100).toFixed(2)}%`}
      />
    </>
  )
}
