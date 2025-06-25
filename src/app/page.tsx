"use client";
import React from "react";
import axios from "axios";
import styles from "./home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Recipe {
  name: string;
  image: string;
  ingredients: string[];
  health: number;
  hunger: number;
  sanity: number;
}

interface Ingredient {
  image: string;
  name: string;
  type: string;
  
}

// Assuming you have a User interface defined somewhere in your codebase
// If not, you can define it like this:
interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fetchAbility = async (): Promise<Recipe[] | any> => {
    try {
      const res = await axios.get<Recipe[]>("/api/ability");
      setRecipes(res.data);
    } catch (error) {
      console.error("There was a problem fetching the ability:", error);
    }
  };

  const fetchDatabase = async (): Promise<User[] | null> => {
    try {
      const res = await axios.get<User[]>("/api/users");
      console.log('here is the /users', res.data)
      return res.data;
    } catch (error) {
      console.error("There was a problem fetching the database:", error);
      return null;
    }
  };

  async function getIngredients(): Promise<Ingredient[] | undefined> {
    try {
      const response = await axios.get<Ingredient[]>(`/api/ingredients`);
      setIngredients(response.data);
      console.log("Ingredients", response.data)      
      return response.data;
    } catch (error) {
      console.error("error: ", error);
    }
  }
  
  
  

  useEffect(() => {
    fetchAbility();
    fetchDatabase()
    getIngredients();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome User!!</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/icons/crockpot.png" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input className={styles.search}></input>
            <button className="bg-orange-500 hover:bg-orange-700 rounded-full w-24 h-8 ...">Search</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        {Array.isArray(ingredients) && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <div
              className={`${hoveredIndex === index ? styles.hovered : styles.ingredientBox}`}
              key={ingredient.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {ingredient.name}
              <Image  src={ingredient.image} alt="" width={100} height={100}></Image>
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
