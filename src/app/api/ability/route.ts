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
        name: "berries",
        image: "/images/ingredients/berries.png",
      },
      {
        name: "fish",
        image: "/images/ingredients/freshwaterfish.png",
      },
      {
        name: "monster meat",
        image: "/images/ingredients/monstermeat.png",
      },
      {
        name: "morsal",
        image: "/images/ingredients/morsel.png",
      },
      {
        name: "ice",
        image: "/images/ingredients/ice.png",
      },
      {
        name: "frog leg",
        image: "/images/ingredients/froglegs.png",
      },
      {
        name: "0",
        image: "/images/ingredients/berries.png",
      },
      {
        name: "1",
        image: "/images/ingredients/freshwaterfish.png",
      },
      {
        name: "2",
        image: "/images/ingredients/monstermeat.png",
      },
      {
        name: "3",
        image: "/images/ingredients/morsel.png",
      },
      {
        name: "4",
        image: "/images/ingredients/ice.png",
      },
      {
        name: "5",
        image: "/images/ingredients/froglegs.png",
      },
    ];

    return NextResponse.json(myArray);
  } catch (error) {
    console.error("There was a problem with the request:", error);
    return NextResponse.error();
  }
}



