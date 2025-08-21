import styles from "./Post.module.css"
import { use, useState } from "react"

export function Post ({name, location, avatar, post, likes, comment, username}){

    const [isLiked, setisLiked] = useState(false)

    const handleLikeButton = () => {
        setisLiked(prev => !prev)
    }
    const handleImageDoubleClick = () =>{
        setisLiked(prev => !prev)
    }

    const displayedLikes = likes + (isLiked ? 1 : 0)


    return <>
        <div className={styles.container}>
            <section className={styles.usersection}>
                <div className={styles.avatar}>
                <img src={avatar} alt="" />
                </div>
                <div>
                    <p className={styles.name}>{name}</p>
                    <p>{location}</p>
                </div>
                </section>
                <div>
                    <img onDoubleClick={handleImageDoubleClick} className={styles.postimg} src={post} alt="{name}" /></div>

            
            
            <section className={styles.icons}>
                <button onClick={handleLikeButton}><img src="/img/icon-heart.png" alt="Like" /></button>
                <button><img src="/img/icon-comment.png" alt="Comment" /></button>
                <button><img src="/img/icon-dm.png" alt="Share" /></button>
            </section>
            <section className={styles.bottomSection}>
                <p>{displayedLikes} Likes</p>
                <p>{username} <span className={styles.span}>{comment}</span>

                </p>
            </section>
        </div>
    </>
}
