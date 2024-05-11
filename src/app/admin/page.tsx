"use client";
import { useState, useEffect } from "react";

const AdminPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<string | null>("");
  const [ability, setAbility] = useState<string | null>("");


  const fetchPokemon = async () => {
    const res= await fetch('/api/pokemon');
    const jsonData = await res.json();
    console.log("Pokemon is:", jsonData)

    setPokemon(jsonData.name)
  };

  const fetchAbility = async () => {
    const res= await fetch('/api/ability');
    const jsonData = await res.json();
    console.log("Ability is:", jsonData)

    setAbility(jsonData.name)
  };

  
  useEffect(() => {
    fetchPokemon()
    fetchAbility()
  }, []);

  return (
    <div>
      <p>This is from the .try/catch API call {pokemon}</p>
      <p>This is from the .try/catch API call {ability}</p>
    </div>
  );
};

export default AdminPage;
