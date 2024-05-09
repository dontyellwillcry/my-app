import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET({  }): Promise<any> {
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
};



// async function fetchPokemon() {
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setOtherPokemon(data.name);
  //     console.log("Here is ", data.name);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  // async function fetchMoves() {
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/diglett/");

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setPokemon(data.name);
  //     console.log("Here is ", data.name);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
  //   .then((response: Response) => {
  //     if (!response.ok) {
  //       throw new Error("Error getting Pokemon");
  //     }
  //     return response.json() as Promise<any>;
  //   })
  //   .then((data: any) => {
  //     console.log("This is the .then/.catch API call", data.name);
  //   })
  //   .catch((error: Error) => {
  //     console.error("my error is", error);
  //   });

  // function fetchAPI() {
  //   axios("https://pokeapi.co/api/v2/pokemon/pikachu/")
  //     .then((response) => {
  //       if (response.status < 200 || response.status >= 300) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.data;
  //     })
  //     .then((data) => {
  //       console.log("Here is my axios request", data.name);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the request:", error);
  //     });
  // }

  // useEffect(() => {
  //   fetchPokemon();
  //   fetchMoves();
  //   fetchAPI();
  // }, []);