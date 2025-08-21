import { Post } from "../Post/Post.jsx"
import styles from "./Feed.module.css"
export function Feed({posts}){
    return <>
    {posts.map((post)=> (
        <section className={styles.feed} key={post.username}>
            <Post {...post} />
            <div className={styles.divider}></div>
       </section>
       
    ))}
    
    </>
}