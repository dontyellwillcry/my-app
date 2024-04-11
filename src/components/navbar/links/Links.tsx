import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navlink";

// With TS I needed to create a 'blueprint' of my array of objects and define the types they should be
interface ArrayOfLinks {
  title: string;
  path: string;
}

const Links: React.FC = () => {
  // Here I created a const links of type ArrayOfLinks. The key matches my blueprint and the value matches the type of the blueprint.
  const links: ArrayOfLinks[] = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    // Map over the links array and render NavLink components.
    /* item={link}: The item prop is passed to the NavLink component, and its value is the link object.
       This object contains information about the link, such as its title and path. */
    /* key={link.title}: The key prop is set to the title property of the link object.
       React uses this key to efficiently update the DOM when the array of links changes. */
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
