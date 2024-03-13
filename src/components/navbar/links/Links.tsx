import Link from "next/link";

export default function Links() {
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
            path: "/posts",
        }
    ];
    

     return (
        // Here we are mapping over the links array. And will be able to access each key/value pair that is inside the array.
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))};
        </div>
    );
}