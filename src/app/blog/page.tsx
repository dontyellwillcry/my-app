'use client';
import React, { use } from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogPage: React.FC = () => {
  const router = useRouter();
  function navigateToContacts() {
    router.replace('/contact')
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to my Dont Starve App</h1>
        <p className={styles.desc}>And this is the basic bitch text under the h1</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button onClick={navigateToContacts} className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/images/ingredients/any.png" alt="" fill className={styles.brands}></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/images/icons/crockpot.png" alt="" fill className={styles.heroImage} />
      </div>
    </div>
  );
};

export default BlogPage;
