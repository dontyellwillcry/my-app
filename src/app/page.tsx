"use client";
import React from "react";
import axios from "axios";
import styles from "./home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Recipe {
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fetchAbility = async () => {
    try {
      const res = await axios.get("/api/ability");
      setRecipes(res.data);
    } catch (error) {
      console.error("There was a problem fetching the ability:", error);
    }
  };

  useEffect(() => {
    fetchAbility();
  }, []);

  console.log(recipes)

  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome User!!</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/icons/crockpot.png" alt="" fill></Image>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input className={styles.search}></input>
            <button className="bg-orange-500 hover:bg-orange-700 rounded-full w-24 h-8 ...">Search</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        {recipes ? (
          recipes.map((recipe, index) => (
            <div
              className={`${hoveredIndex === index ? styles.hovered : styles.ingredientBox}`}
              key={recipe.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {recipe.name}
              <Image  src={recipe.image} alt="" width={100} height={100}></Image>
            </div>
          ))
        ) : (
          <p className={styles.recipeTxt}>Search for a Recipe and they will be displayed here</p>
        )}
      </div>
    </div>
  );
};

export default Home;
