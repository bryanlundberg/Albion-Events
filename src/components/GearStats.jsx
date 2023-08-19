import DataStats from "./DataStats"

export default function GearStats({ avgIp, killFame, usages, kills, assists, winRate }) {
  return (
    <>
      <DataStats title={'Average IP:'} stat={(avgIp).toFixed(0)} />
      <DataStats title={'Kill Fame:'} stat={(killFame).toLocaleString()} />
      <DataStats title={'Usages:'} stat={(usages).toLocaleString()} />
      <DataStats title={'Kills:'} stat={(kills).toLocaleString()} />
      <DataStats title={'Assists:'} stat={(assists).toLocaleString()} />
      <DataStats title={'Win rate:'} stat={`${((winRate)*100).toFixed(2)}%`} />
    </>
  )
}