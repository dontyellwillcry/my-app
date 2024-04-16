// Link works the same as the <a> tag in html
import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        // All of these links will go to the pages we created in the app folder.
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links/>
            </div>
        </div>
    );
  }