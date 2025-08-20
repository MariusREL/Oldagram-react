import { Post } from "../Post/Post.jsx"

export function Feed({posts}){
    return <>
    {posts.map((post)=> (
        <section className="feed" key={post.username}>
            <Post {...post} />
       </section>
    ))}
    </>
}