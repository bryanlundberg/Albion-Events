"use server";
import { API } from "@/const/api";

export default async function getSearch({ query }: { query: string }) {
  try {
    const request = await fetch(`${API.SEARCH}${query}`);
    if (!request.ok) throw new Error("Error");
    return await request.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
