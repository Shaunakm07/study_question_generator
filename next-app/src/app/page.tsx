export default async function Home() {
    let data = await fetch('http://127.0.0.1:5000/api/data');

    let posts = await data.json()
    return (
        <ul>
            {(posts.message)}
        </ul>
    )
}
