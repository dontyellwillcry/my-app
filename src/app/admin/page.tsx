"use client";
import { useState, useEffect } from "react";
// import axios from "axios";

const AdminPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<string | null>("");
  // const [otherPokemon, setOtherPokemon] = useState<string | null>("");

  
  useEffect(() => {
    const fetchPokemon = async () => {
      const res= await fetch('/api');
      const jsonData = await res.json();
      console.log(jsonData)

      // const res2 = await fetch('/api/pokemon')
      // const jsonData2 = await res2.json();
      // console.log(jsonData2)

      setPokemon(jsonData.name)
    };
    fetchPokemon()
  }, []);

  return (
    <div>
      <p>This is from the .try/catch API call {pokemon}</p>
      {/* <p>This is from the .try/catch API call {otherPokemon}</p> */}
    </div>
  );
};

export default AdminPage;
