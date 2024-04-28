'use client';
import React from "react";
import { useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";

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
];

const BlogPage: React.FC = () => {
  const [recipes, setRecipe] = useState("");

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
            <button>BUTTON</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        {recipes ? (
          myArray.map((ingredient) => (
            <div className={styles.ingredientBox} key={ingredient.name}>
              {ingredient.name}
            </div>
          ))
        ) : (
          <p className={styles.recipeTxt}>Search for a Reicipe and they will be displayed here</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
