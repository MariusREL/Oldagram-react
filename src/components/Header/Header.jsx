import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo" className={styles.logo} />
            <img
                src={`${import.meta.env.BASE_URL}img/user-avatar.png`}
                alt="Profile"
                className={styles.avatar}
            />
        </header>
    );
}
