// Link works the same as the <a> tag in html
import Link from "next/link";
import Links from "./links/Links";

export default function Navbar() {
    return (
        // All of these links will go to the pages we created in the app folder.
        <div>
            <div>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    );
  }