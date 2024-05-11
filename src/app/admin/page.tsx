"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<string | null>("");
  const [ability, setAbility] = useState<string | null>("");

  // Example of a then/catch request client side
  const fetchPokemon = () => {
    axios
      .get("/api/pokemon")
      .then((res) => {
        setPokemon(res.data.name);
      })
      .catch((error) => {
        console.error("There was a problem fetching the name:", error);
      });
  };

  // Example of a try/catch request client side
  const fetchAbility = async () => {
    try {
      const res = await axios.get("/api/ability");
      setAbility(res.data.name);
    } catch (error) {
      console.error("There was a problem fetching the ability:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
    fetchAbility();
  }, []);

  return (
    <div>
      <p>This is from the .try/catch API call {pokemon}</p>
      <p>This is from the .try/catch API call {ability}</p>
    </div>
  );
};

export default AdminPage;
