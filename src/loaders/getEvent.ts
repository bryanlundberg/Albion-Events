"use server";
import { API } from "@/const/api";

export default async function getEvent({
  eventId,
}: {
  eventId: number | string;
}): Promise<OverallEvent> {
  try {
    const response = await fetch(`${API.EVENT}${eventId}`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch event: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    throw error;
  }
}
