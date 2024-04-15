import Image from "next/image";
import styles from  "./about.module.css";

const AboutPage = () => {
  return (
    //  You need to add fill unless you are adding the width and height inline.
    //! If you are using a parent div the container position should be position: relative;
    <div>
      <div className={styles.imgContainer}>
        <Image src="/images/icons/crockpot.png" alt="Crockpot" fill/>
      </div>
    </div>
  );
};

export default AboutPage;
