import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/images/portraits/Maxwell_Portrait.png" alt="" width={100} height={100}></Image>
        <Image className={styles.img} src="/images/portraits/Webber_Portrait.png" alt="" width={100} height={100}></Image>
        <Image className={styles.img} src="/images/portraits/Wagstaff_Portrait.png" alt="" width={100} height={100}></Image>
        <Image className={styles.img} src="/images/portraits/Woodlegs_Portrait.png" alt="" width={100} height={100}></Image>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Email Address"></input>
          <textarea placeholder="Add a comment"></textarea>
          <div className={styles.submit}>
            <button>BUTTON</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
