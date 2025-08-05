export default async function Home() {
    let data = await fetch('http://127.0.0.1:5000/api/data');
    let posts = await data.json();

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-950 flex justify-center items-center bg-[linear-gradient(to_right,_#0a0a0a_67%,_#1a001f_100%)]">
            <p className="text-white font-bold text-2xl">
                {posts.message}
            </p>
        </div>
    );
}
