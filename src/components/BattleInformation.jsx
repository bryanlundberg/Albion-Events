import BattleCard from "./BattleCard";
import "../stylesheets/BattleInformation.css"
import { API } from "../const/api";
import { formatDistance } from "date-fns";

export default function BattleInformation({ id, startTime, endTime, totalPlayers, totalKills, totalFame  }) {
  return (
    <>
      <div className="battle-information">
        <div className="battle-id">Battle #{id}</div>
        <div className="battle-resumen-container">
          <BattleCard>
            <div>Total Players: {totalPlayers}</div>
            <div>Total Kills: {totalKills}</div>
          </BattleCard>
          <div className="image-section">
            <img src={API.ICONS.SKULL} alt="Representative skull battle" />
            <div>BATTLE</div>
            <div>{startTime}</div>
          </div>
          <BattleCard>
            <div>Total Duration: {formatDistance(new Date(startTime), new Date(endTime), {includeSeconds: true })}</div>
            <div>Total Fame: {totalFame}</div>
          </BattleCard>
        </div>
      </div>
    </>
  )
}