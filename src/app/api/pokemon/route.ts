import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export function GET(): Promise<Response | NextResponse<any>> {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then((response) => {
      return NextResponse.json(response.data);
    })
    .catch((error) => {
      console.error("There was a problem with the request:", error);
      return NextResponse.error();
    });
}


