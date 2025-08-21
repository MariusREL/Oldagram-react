import { Post } from "../Post/Post.jsx"
import styles from "./Feed.module.css"
export function Feed({posts}){
    return <>
    {posts.map((post, index) => (
        <section className={styles.feed} key={post.username}>
            <Post 
                {...post}
                isLast={index === posts.length - 1}
            />
       </section>
       
    ))}
    
    </>
}