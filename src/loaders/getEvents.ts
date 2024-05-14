"use server";
import { API } from "@/const/api";

export default async function getEvents(): Promise<OverallEvent[]> {
  try {
    const response = await fetch(API.LASTEVENTS, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch events: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching events:", error);
    // Throw the error again to be caught elsewhere
    throw error;
  }
}
