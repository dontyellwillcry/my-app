"use client";
import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import { useState } from "react";

const myArray: { name: string; image: string }[] = [
  {
    name: "berries",
    image: "/images/icons/crockpot.png",
  },
  {
    name: "fish",
    image: "/images/icons/fish.png",
  },
  {
    name: "monster meat",
    image: "/images/icons/monstermeat.png",
  },
  {
    name: "morsal",
    image: "/images/icons/morsal.png",
  },
  {
    name: "ice",
    image: "/images/icons/ice.png",
  },
  {
    name: "frog leg",
    image: "/images/icons/frogleg.png",
  },
  {
    name: "0",
    image: "/images/icons/crockpot.png",
  },
  {
    name: "1",
    image: "/images/icons/fish.png",
  },
  {
    name: "2",
    image: "/images/icons/monstermeat.png",
  },
  {
    name: "3",
    image: "/images/icons/morsal.png",
  },
  {
    name: "4",
    image: "/images/icons/ice.png",
  },
  {
    name: "5",
    image: "/images/icons/frogleg.png",
  },
];
console.table(myArray);

const Home: React.FC = () => {
  const [recipes, setRecipe] = useState("1");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome User!!</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/icons/crockpot.png" alt="" fill></Image>
        </div>
        <div className={styles.formContainer} >
          <form className={styles.form}>
            <input className={styles.search}></input>
            <button className="bg-orange-500 hover:bg-orange-700 rounded-full w-24 h-8 ...">Search</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        {recipes ? (
          myArray.map((recipe, index) => (
            <div
              className={`${hoveredIndex === index ? styles.hovered : styles.ingredientBox}`}
              key={recipe.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {recipe.name}
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
