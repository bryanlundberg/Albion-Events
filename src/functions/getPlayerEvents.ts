import { API } from "../const/api";

export default async function getPlayerEvents({
  playerName,
  showAssist = false,
  showDeaths = false,
  showKills = false,
  all = false,
  skip = 0,
  sort = "time",
  take = 10,
}: {
  playerName: string;
  showAssist?: boolean;
  showDeaths?: boolean;
  showKills?: boolean;
  all?: boolean;
  skip?: number;
  sort?: string;
  take?: number;
}): Promise<EventResponse> {
  if (all) {
    const request = await fetch(
      `${
        API.MURDERLEDGER
      }${playerName}/events?show_assists=${true}&show_deaths=${true}&show_kills=${true}&skip=${skip}&sort=${sort}&take=${take}`,
      { cache: "no-store" }
    );
    if (!request.ok) {
      throw new Error(
        "We couldn't locate the player events on the server at the moment."
      );
    }
    const data = await request.json();
    return data;
  } else {
    const request = await fetch(
      `${API.MURDERLEDGER}${playerName}/events?show_assists=${showAssist}&show_deaths=${showDeaths}&show_kills=${showKills}&skip=${skip}&sort=${sort}&take=${take}`,
      { cache: "no-store" }
    );
    if (!request.ok) throw new Error();
    const data = await request.json();
    return data;
  }
}
