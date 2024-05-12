import axios, { AxiosResponse } from "axios";
import { NextResponse, NextRequest } from "next/server";

// export async function GET() {
//   try {
//     const response = await axios.get("https://pokeapi.co/api/v2/ability/static/");
//     if (response.status < 200 || response.status >= 300) {
//       throw new Error("Network response was not ok");
//     }
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error("There was a problem with the request:", error);
//     return NextResponse.error();
//   }
// }

export async function GET() {
  try {
    const myArray = [
      {
        name: "bacon and eggs",
        image: "/images/crockpot/baconandeggs.png",
        ingedients: [],
      },
      {
        name: "fish sticks",
        image: "/images/crockpot/fishsticks.png",
        ingedients: [],
      },
      {
        name: "dragon pie",
        image: "/images/crockpot/dragonpie.png",
        ingedients: [],
      },
      {
        name: "froggie bunwich",
        image: "/images/crockpot/froggiebunwich.png",
        ingedients: [],
      },
      {
        name: "honey ham",
        image: "/images/crockpot/honeyham.png",
        ingedients: [],
      },
      {
        name: "ice cream",
        image: "/images/crockpot/icecream.png",
        ingedients: [],
      },
      {
        name: "kabobs",
        image: "/images/crockpot/kabobs.png",
        ingedients: [],
      },
      {
        name: "lobster bisque",
        image: "/images/crockpot/lobsterbisque.png",
        ingedients: [],
      },
      {
        name: "pierogi",
        image: "/images/crockpot/pierogi.png",
        ingedients: [],
      },
      {
        name: "meatballs",
        image: "/images/crockpot/meatballs.png",
        ingedients: [],
      },
      {
        name: "meaty stew",
        image: "/images/crockpot/meatystew.png",
        ingedients: [],
      },
      {
        name: "waffles",
        image: "/images/crockpot/waffles.png",
        ingedients: [],
      },
    ];

    return NextResponse.json(myArray);
  } catch (error) {
    console.error("There was a problem with the request:", error);
    return NextResponse.error();
  }
}



