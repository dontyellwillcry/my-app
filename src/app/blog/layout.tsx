

// We are defining an interface named BlogLayoutProps. 
// An interface in TypeScript is a way to define the shape or structure of an object
interface BlogLayoutProps {
    /* children: This is a property of type React.ReactNode. In React, 
    children is a special prop that represents the child elements passed between the opening and closing tags of a component. */ 
    children: React.ReactNode;
    /* ReactNode is a TypeScript type that represents any valid React node. In React, 
       a "node" refers to any object that can be rendered in the React DOM */
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div>
            <h1>
                This is the blog layout!
                {children}
            </h1>
        </div>
    );
}

export default BlogLayout;