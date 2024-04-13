"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

// Here i created another interface just like I did in Links.tsx. Now there is a strict type for NavLinkProps
interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
}

// item is a prop from Links.tsx. Its sending the link that was being mapped over
const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName: string = usePathname();

  return (
    //?The href attribute of the Link is set to the path property from the item
    /*The className attribute is set to ${styles.container}, 
    which applies a CSS class (defined in a separate CSS module) */
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.title && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
