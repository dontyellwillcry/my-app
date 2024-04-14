"use client";

import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navlink";
import { useState } from "react";

// With TS I needed to create a 'blueprint' of my array of objects and define the types they should be
interface ArrayOfLinks {
  title: string;
  path: string;
}

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

const Links: React.FC = () => {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  //! Temp sesssion logic
  const session = true;
  const isAdmin = true;

  return (
    // Map over the links array and render NavLink components.
    /* item={link}: The item prop is passed to the NavLink component, and its value is the link object.
       This object contains information about the link, such as its title and path. */

    /* key={link.title}: The key prop is set to the title property of the link object.
       React uses this key to efficiently update the DOM when the array of links changes. */
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
          // the {" "} is just adding a space between links
        ))}{" "}
        {
          // Are you logged in an active session? Then go to next line.
          session ? (
            // isAdmin?, show the NavLink item "Admin" that  has a path of /admin and a logout button
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            // else show the login path
            <NavLink item={{ title: "Login", path: "/login" }} />
          )
        }
      </div>
      <button className={styles.menu}onClick={handleClick}>Menu</button>
      {/* <button className={styles.menu}onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
