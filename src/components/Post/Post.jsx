import styles from "./Post.module.css"

export function Post ({name, location, avatar, post, likes, comment, username}){
    return <>
        <div className={styles.container}>
            <section className={styles.usersection}>
                <div className={styles.avatar}>
                <img src={avatar} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
                </section>
                <div>
                    <img className={styles.postimg} src={post} alt="Vincent Vangogh" /></div>

            
            
            <section className={styles.icons}>
                <button><img src="/img/icon-heart.png" alt="Like" /></button>
                <button><img src="/img/icon-comment.png" alt="Comment" /></button>
                <button><img src="/img/icon-dm.png" alt="Share" /></button>
            </section>
            <section className={styles.bottomSection}>
                <p>21,492 likes</p>
                <p>Vincey1853 <span className={styles.span}>just took a few shrooms lol</span>

                </p>
            </section>
        </div>
    </>
}
