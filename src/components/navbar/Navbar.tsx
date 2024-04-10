// Link works the same as the <a> tag in html
import Links from "./links/Links";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        // All of these links will go to the pages we created in the app folder.
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    );
  }