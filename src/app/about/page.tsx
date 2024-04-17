import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    //  You need to add fill unless you are adding the width and height inline.
    //! If you are using a parent div the container position should be position: relative;
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>About Let's Cook Together</h1>
        <h1>Save all of those new recipes and try some new ones!!!</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>
        <div className={styles.quoteNum}>
          <h1>10 K+</h1>
          <h1>2344 K+</h1>
          <h1>5 K+</h1>
        </div>
        <div className={styles.quotes}>
          <p>Dicks I've Sucked</p>
          <p>Cunts Smashed</p>
          <p>Cat's pet</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/images/icons/crockpot.png" alt="Crockpot" fill />
      </div>
    </div>
  );
};

export default AboutPage;
