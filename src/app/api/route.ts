import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(): Promise<any> {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/");

    if (response.status < 200 || response.status >= 300) {
      throw new Error("Network response was not ok");
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("There was a problem with the request:", error);
    return NextResponse.error();
  }
}