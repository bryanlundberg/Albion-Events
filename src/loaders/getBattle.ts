import { API } from "@/const/api";

export async function getBattle({
  battleId,
}: {
  battleId: string;
}): Promise<Battle> {
  // Fetch battle data from the API
  const request = await fetch(`${API.BATTLES.OVERALL}${battleId}`, {
    cache: "no-store",
  });

  // Check if the request is successful
  if (!request.ok) {
    throw new Error("Failed to fetch battle data from the server.");
  }

  // Parse the JSON response
  const responseData: Battle = await request.json();

  // Return the battle data
  return responseData;
}
