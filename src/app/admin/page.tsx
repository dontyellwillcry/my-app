"use client";
import { useState, useEffect } from "react";

const AdminPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>("");
  const [otherPokemon, setOtherPokemon] = useState<string>("");

  async function fetchPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setOtherPokemon(data.name);
      console.log("Here is ", data.name);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function fetchMoves() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/diglett/");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPokemon(data.name);
      console.log("Here is ", data.name);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error getting Pokemon");
      }
      return response.json();
    })
    .then((data) => {
      console.log("This is the .then/.catch API call",data.name);
    })
    .catch((error) => {
      console.error("my error is", error);
    });

  useEffect(() => {
      fetchPokemon()
      fetchMoves()
  }, []);

  return (
    <div>
      <p>This is from the .try/catch API call {pokemon}</p>
      <p>This is from the .try/catch API call {otherPokemon}</p>
    </div>
  );
};

export default AdminPage;
