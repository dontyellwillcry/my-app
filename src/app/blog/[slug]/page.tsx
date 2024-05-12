// const SinglePostPage = ({ params }) => {
//     params: { id: string }
//     return (
//         <div>ID: {params.id}</div>
//     )
// }


// export default SinglePostPage;

export default function Page({ params }: {
    params: { id: string}
}) {
    return <h1>ID: {params.id}</h1>;
}
